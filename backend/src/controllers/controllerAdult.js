import modelAdult from "../models/modelAdult.js";

const controllerAdult = {
    createAdultUser: async (req, res) => {
        try {
            const {
                rol,
                nombre,
                apodo,
                sexo,
                correo,
                contrasenia,
                cedula,
                eps,
                fechaNacimiento,
                pais,
                ciudad,
                educacion,
                ocupacion,
                celular,
                contactoEmergen,
                numeroEmergenci,
                parentesco,
                progreso,
            } = req.body
            const adultUserCreated = new modelAdult = await newForm.save();
            if (adultUserCreated._id) {
                res.json({
                    result: "Successful",
                    message: "User created",
                    data: adultUserCreated._id
                });
                console.log("User created");
            }
        } catch (error) {
            console.log("Error");
            res.json({
                result: "Unsuccessful",
                message: "Error creating user",
                data: null
            });
        }
    },

    findAdultUser: async (req, res) => {
        try {
            const adultUserFound = await modelAdult.findById(req, res)
            if (adultUserFound._id) {
                res.json({
                    result: "Successful",
                    message: "User found",
                    data: adultUserFound
                });
            }
        } catch (error) {
            res.json({
                error: true,
                mensaje: "Error trying to find user",
                datos: error
            });
        }
    },

    findAllAdultUsers: async (req, res) => {
        try {
            const allAdultUsers = await modelAdult.find();
            res.json({
                result: "Successful",
                message: "Users found",
                data: allAdultUsers
            });

        } catch (error) {
            console.log("Error: ", error);
            res.json({
                error: true,
                mensaje: "Error trying to read all users",
                data: error
            });
        }
    }
}

export default controllerAdult;