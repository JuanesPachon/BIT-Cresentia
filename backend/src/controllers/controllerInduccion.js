// Hi :)
const Induccion = require('../models/Induccion');

// Create a new induccion
exports.createInduccion = async (req, res) => {
    try {
        const induccion = new Induccion(req.body);
        await induccion.save();
        res.status(201).json({ message: 'Inducción creada exitosamente', induccion });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all inducciones
exports.getInducciones = async (req, res) => {
    try {
        const inducciones = await Induccion.find();
        res.status(200).json(inducciones);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get a single induccion by ID
exports.getInduccionById = async (req, res) => {
    try {
        const induccion = await Induccion.findById(req.params.id);
        if (!induccion) {
            return res.status(404).json({ message: 'Inducción no encontrada' });
        }
        res.status(200).json(induccion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update an induccion
exports.updateInduccion = async (req, res) => {
    try {
        const induccion = await Induccion.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!induccion) {
            return res.status(404).json({ message: 'Inducción no encontrada' });
        }
        res.status(200).json({ message: 'Inducción actualizada exitosamente', induccion });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete an induccion
exports.deleteInduccion = async (req, res) => {
    try {
        const induccion = await Induccion.findByIdAndDelete(req.params.id);
        if (!induccion) {
            return res.status(404).json({ message: 'Inducción no encontrada' });
        }
        res.status(200).json({ message: 'Inducción eliminada exitosamente' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};