const SendResponse = ({
  success,
  statusCode,
  message,
  data
}, res) => {
  res.status(statusCode).json({
    success,
    message,
    data,
    totalResults,
  });
};