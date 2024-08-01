// Hi :)
import { handleError } from '../utils/handleError.js';
import Induccion from '../models/Induccion.js';

// Create a new induccion
export const createInduccion = async (req, res) => {
    try {
        const induccion = new Induccion(req.body);
        await induccion.save();
        res.status(201).json({ message: 'Inducción creada exitosamente', induccion });
    } catch (error) {
        handleError(res, 400, error.message);
    }
};

// Get all inducciones
export const getInducciones = async (req, res) => {
    try {
        const inducciones = await Induccion.find();
        res.status(200).json(inducciones);
    } catch (error) {
        handleError(res, 400, error.message);
    }
};

// Get a single induccion by ID
export const getInduccionById = async (req, res) => {
    try {
        const induccion = await Induccion.findById(req.params.id);
        if (!induccion) {
            return handleError(res, 404, 'Inducción no encontrada');
        }
        res.status(200).json(induccion);
    } catch (error) {
        handleError(res, 400, error.message);
    }
};

// Update an induccion
export const updateInduccion = async (req, res) => {
    try {
        const induccion = await Induccion.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!induccion) {
            return handleError(res, 404, 'Inducción no encontrada');
        }
        res.status(200).json({ message: 'Inducción actualizada exitosamente', induccion });
    } catch (error) {
        handleError(res, 400, error.message);
    }
};

// Delete an induccion
export const deleteInduccion = async (req, res) => {
    try {
        const induccion = await Induccion.findByIdAndDelete(req.params.id);
        if (!induccion) {
            return handleError(res, 404, 'Inducción no encontrada');
        }
        res.status(200).json({ message: 'Inducción eliminada exitosamente' });
    } catch (error) {
        handleError(res, 400, error.message);
    }
};