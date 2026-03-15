import httpStatus from 'http-status';

const notFound = (req, res, _) => {
	res.status(httpStatus.NOT_FOUND).json({
		success: false,
		message: 'API route not found',
		error: ''
	});
};

export default notFound;