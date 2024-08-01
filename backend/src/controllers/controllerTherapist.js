import modelTherapist from "../models/modelTherapist";
import ModelTherapist from "../models/modelTherapist";
import errorHandler from "../utils/errorHandler.js";

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
      res.json(createNewTherapist);
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
      const userList = await modelTherapist.find().populate();
      res.json(userList);
    } catch (error) {
      errorHandler.handleServerError(res);
    }
  }
  
  async function findUser(req, res) {
      try {
          const userId = req.params.id;
          const foundUser = await modelTherapist.findById(userId);
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
  
  export default {
      createNewTherapist,
      listUsers,
      findUser,
      deleteUser,
  };