const checkCreateData = (req, res, next) => {
    const { shirt_id, color, price } = req.body;
    if(!shirt_id || !color || !price || price <= 0) {
        res.status(400).json({response: true, error: "Missing data!"})
    } else if(typeof color !== 'string' || typeof price !== 'number' ||typeof shirt_id !== 'number') {
        res.status(400).json({response: true, error: "Data types are not correct"})
    } else {
        next();
    }
}

const checkUpdateData = (req, res, next) => {
    const { color, price } = req.body;
    if(!color || !price || price <= 0) {
        res.status(400).json({response: true, error: "Missing data!"})
    } else if(typeof color !== 'string' || typeof price !== 'number') {
        res.status(400).json({response: true, error: "Data types are not correct"})
    } else {
        next();
    }
}

module.exports = {
    checkCreateData,
    checkUpdateData
}