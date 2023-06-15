const {User}= require('../../db')

exports.getAllUsersAsync = async () => {
  try {
    const allUsers = await User.findAll();
    return allUsers;
  } catch (error) {
    console.error(`Error fetching users from the database: ${error}`);
    throw error;
  }
};

