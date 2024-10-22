import ModelFamily from "../models/modelFamily";
import familyHandler from "../utils/familyHandler";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

async function createUser(req, res) {
  try {
    const existingUser = await ModelFamily.findOne({
      email: req.body.email,
    });
    if (existingUser) {
      familyHandler.handleDuplicateError(
        res,
        "El email ya se encuentra registrado"
      );
      return;
    }

    const newUser = await ModelFamily.create({
      name: req.body.name,
      nickname: req.body.nickname,
      avatar: req.body.avatar,
      email: req.body.email,
      password: req.body.password,
      gender: req.body.gender,
      eps: req.body.eps,
      birthday: req.body.birthday,
      country: req.body.country,
      city: req.body.city,
      education: req.body.education,
      grade: req.body.grade,
      semester: req.body.semester,
      institute: req.body.institute,
      degree: req.body.degree,
      phoneNumber: req.body.phoneNumber,
    });
    res.json.status(201).json(newUser);
  } catch (error) {
    if (error.name === "ValidationError") {
      familyHandler.handleValidationError(res);
    } else {
      familyHandler.handleServerError(res);
    }
  }
}

async function listUsers(req, res) {
  try {
    const userList = await ModelFamily.find().populate();
    res.json(userList);
  } catch (error) {
    familyHandler.handleServerError(res);
  }
}

async function findUser(req, res) {
    try {
        const userId = req.params.id;
        const foundUser = await ModelFamily.findById(userId);
        if (!foundUser) {
            familyHandler.handleNotFoundError(res, "Usuario");
            return;
        }
        res.json(foundUser);
    } catch (error) {
        familyHandler.handleServerError(res);
    }
}

async function deleteUser(req, res) {
    try {
        const foundUser = await ModelFamily.findById(req.params.id);
        if (!foundUser) {
            familyHandler.handleNotFoundError(res, "Usuario");
            return;
        }
        const { userId } = await UserActivation.findById(req.auth.sub);
        if (userId === foundUser.id) {
            await ModelFamily.findByIdAndDelete(req.params.id);
            res.json("Usuario eliminado");
        }
    } catch (error) {
        familyHandler.handleServerError(res);
    }
}

async function loginUser(req, res) {
  try {
    const user = await ModelFamily.findOne({ email: req.body.email });

    if (!user) {
      userHandler.handleAuthError(res);
      return;
    }

    const validHash = await bcrypt.compare(req.body.password, user.password);
    if (validHash) {
      const tokenPayLoad = {
        sub: user.id,
        iat: Date.now(),
      };
      const token = jwt.sign(tokenPayLoad, process.env.JWT_KEY);
      res.json({ token: token });
    } else {
      userHandler.handleAuthError(res);
    }
  } catch (error) {
    userHandler.handleServerError(res);
  }
}

export default {
    createUser,
    listUsers,
    findUser,
    deleteUser,
};
