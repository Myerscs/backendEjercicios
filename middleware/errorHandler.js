export const errorHandler = (err, req, res, _next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    message: err.message || 'Error interno del servidor',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};
