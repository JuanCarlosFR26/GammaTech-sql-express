const { pool } = require("../config/pgconfig");
const { createUser, showUsers } = require("../sql/queries");

const getUsers = async (req, res) => {
  const client = await pool.connect();

  try {
    const response = await client.query(showUsers);
    res.status(200).json({ response: true, result: response.rows });
  } catch (error) {
    res.status(400).json({ response: false, error: error.message });
  } finally {
    client.release(true);
  }
};

const createNewUser = async (req, res) => {
  const { user_id, user_name, password } = req.body;
  const client = await pool.connect();
  try {
    const response = await client.query(createUser, [
      user_id,
      user_name,
      password,
    ]);
    res.status(201).json({ response: true, result: response.rows });
  } catch (error) {
    res.status(400).json({ response: false, error: error.message });
  } finally {
    client.release(true);
  }
};

module.exports = {
  createNewUser,
  getUsers
};
