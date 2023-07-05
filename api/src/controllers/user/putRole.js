const userService = require("../../services/user/user.service");

async function putRole(req, res) {
  const id = req.params.id;
  const body = req.body;

  try {
    const updateRoleUser = await userService.putRole(id, body);

    if (updateRoleUser) {
      res.status(200).send("User Role User was updated successfully.");
    } else {
      res.status(401).send(`Cannot update User Role with id=${id}`);
    }
  } catch (error) {
    console.log(error)
    res.status(500).send(`Server Error updating User Role with id= ${id}`);
  }
}

module.exports = {
  putRole,
};
