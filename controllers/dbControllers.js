const { pool } = require("../config/pgconfig");
const { listShirts, createShirt, getShirtId, updateShirt, deleteShirt } = require("../sql/queries");

const getShirts = async (req, res) => {
  const client = await pool.connect();

  try {
    const response = await client.query(listShirts);
    res.status(200).json({ response: true, result: response.rows });
  } catch (error) {
    res.status(400).json({ response: false, error: error.message });
  } finally {
    client.release(true);
  }
};

const createNewShirt = async (req, res) => {
  const { shirt_id, color, price } = req.body;
  const client = await pool.connect();

  try {
    const response = await client.query(createShirt, [shirt_id, color, price]);

    res.status(201).json({ response: true, result: response.rows });
  } catch (error) {
    res.status(400).json({ response: false, error: error.message });
  } finally {
    client.release(true);
  }
};

const getShirtById = async (req, res) => {
    const client = await pool.connect();
    const requiredId = req.params.id;

    try {
        const response = await client.query(getShirtId, [requiredId])
        res.status(200).json({ response: true, result: response.rows });

    } catch(error) {
        res.status(400).json({ response: false, error: error.message });
    } finally {
        client.release(true)
    }
}

const updateShirtById = async (req, res) => {
    const client = await pool.connect();
    const { color, price } = req.body
    const requiredId = req.params.id;

    try {
        const response = await client.query(updateShirt, [color, price, requiredId])
        res.status(200).json({ response: true, result: response.rows });
    } catch (error) {
        res.status(400).json({ response: false, error: error.message });
    } finally {
        client.release(true)
    }
}

const deleteShirtById = async (req, res) => {
    const client = await pool.connect();
    const requiredId = req.params.id;

    try {
        const response = await client.query(deleteShirt, [requiredId])
        res.status(200).json({ response: true, result: response.rows });
    } catch (error) {
        res.status(400).json({ response: false, error: error.message });
    } finally {
        client.release(true)
    }
}

module.exports = {
  getShirts,
  createNewShirt,
  getShirtById,
  updateShirtById,
  deleteShirtById
};
