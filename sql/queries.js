const listShirts = `SELECT * FROM shirts`;
const createShirt = `INSERT INTO shirts (shirt_id, color, price) VALUES ($1, $2, $3)`
const getShirtId = `SELECT * FROM shirts WHERE shirt_id = $1`
const updateShirt = `UPDATE shirts SET color = $1, price = $2 WHERE shirt_id = $3`
const deleteShirt = `DELETE FROM shirts WHERE shirt_id = $1`

const showUsers = `SELECT * FROM users`;
const createUser = `INSERT INTO users (user_id, user_name, password) VALUES ($1, $2, $3)`

module.exports = {
    listShirts,
    createShirt,
    getShirtId,
    updateShirt,
    deleteShirt,
    createUser,
    showUsers
}