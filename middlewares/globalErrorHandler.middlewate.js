import AppError from '../errors/AppError';

const globalErrorHandler = (err, req, res, next) => {
	let statusCode = 500;
	let message = 'Something went wrong';
	let errorSources = [
		{
			path: '',
			message: 'Something went wrong'
		}
	];

  if (err instanceof AppError) {
		statusCode = err?.statusCode;
		message = err?.message;
		errorSources = [
			{
				path: '',
				message: err?.message
			}
		];
	} else if (err instanceof Error) {
		message = err?.message;
		errorSources = [
			{
				path: '',
				message: err?.message
			}
		];
	}

	// actual return
	return res.status(statusCode).json({
		success: false,
		message,
		errorSources,
		err,
		stack: err?.stack
	});
};

export default globalErrorHandler;