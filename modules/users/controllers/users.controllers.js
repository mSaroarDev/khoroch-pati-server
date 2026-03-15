import catchAsync from "../../../utils/catchAsync";
import UsersServices from "../services/users.services";


const createUser = catchAsync(
  async (req, res) => {
    const data = req.body;

    const result = await UsersServices.registerUser(data);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User created successfully",
      data: result,
    });
  }
);

const UsersControllers = {
  createUser
};

export default UsersControllers;