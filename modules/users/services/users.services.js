
const registerUser = async (payload)=> {
  const { name, email, password } = payload;

  return payload;
}

const UsersServices = {
  registerUser
};

export default UsersServices;