import ModelTherapist from "../models/modelTherapist.js";
import errorHandler from "../utils/errorHandler.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function createNewTherapist(req, res) {
  try {
    const existingTherapist = await ModelTherapist.findOne({
      email: req.body.email,
    });
    if (existingTherapist) {
      errorHandler.handleDuplicateError(
        res,
        "El email ya se encuentra registrado"
      );
      return;
    }

    const createNewTherapist = await ModelTherapist.create({
      name: req.body.name,
      nickname: req.body.nickname,
      gender: req.body.gender,
      email: req.body.email,
      password: req.body.password,
      id: req.body.id,
      eps: req.body.eps,
      birthday: req.body.birthday,
      country: req.body.country,
      city: req.body.city,
      tlf: req.body.tlf,
      description: req.body.description,
    });
    res.json.status(201).json(createNewTherapist);
  } catch (error) {
    if (error.name === "ValidationError") {
      errorHandler.handleValidationError(res);
    } else {
      errorHandler.handleServerError(res);
    }
  }
}

async function listUsers(req, res) {
  try {
    const userList = await ModelTherapist.find().populate();
    res.json(userList);
  } catch (error) {
    errorHandler.handleServerError(res);
  }
}

async function findUser(req, res) {
  try {
    const userId = req.params.id;
    const foundUser = await ModelTherapist.findById(userId);
    if (!foundUser) {
      errorHandler.handleNotFoundError(res, "Usuario");
      return;
    }
    res.json(foundUser);
  } catch (error) {
    errorHandler.handleServerError(res);
  }
}

async function deleteUser(req, res) {
  try {
    const foundUser = await ModelTherapist.findById(req.params.id);
    if (!foundUser) {
      errorHandler.handleNotFoundError(res, "Usuario");
      return;
    }
    const { userId } = await UserActivation.findById(req.auth.sub);
    if (userId === foundUser.id) {
      await ModelFamily.findByIdAndDelete(req.params.id);
      res.json("Usuario eliminado");
    }
  } catch (error) {
    errorHandler.handleServerError(res);
  }
}

async function loginUser(req, res) {
  try {
    const user = await ModelTherapist.findOne({ email: req.body.email });

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
  createNewTherapist,
  listUsers,
  findUser,
  deleteUser,
  loginUser,
};
