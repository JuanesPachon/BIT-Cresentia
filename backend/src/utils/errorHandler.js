function handleError(res, statusCode, message) {
  res.status(statusCode).json({ error: message });
}

function handleAuthError(res) {
  handleError(res, 403, "No tienes permisos para realizar esta acción");
}

function handleValidationError(res) {
  handleError(res, 400, "la información no es válida");
}

function handleServerError(res) {
  handleError(res, 500, "El servidor no pudo procesar la petición, vuelva a intentarlo más tarde");
}

function handleNotFoundError(res, resource = "Recurso") {
  handleError(res, 404, `${resource} no encontrado`);
}

function handleDuplicateError(res, resource = "Recurso") {
  handleError(res, 409, `${resource} ya existente`);
}

export default {
  handleError,
  handleAuthError,
  handleValidationError,
  handleServerError,
  handleNotFoundError,
  handleDuplicateError,
};
