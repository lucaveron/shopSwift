
exports.validateNewProduct = (req, res, next) => {
    // const { name, description, price } = req.body;
  
    // if (!name || !description) {
    //   return res.status(400).json({
    //     error: "El nombre y la descripción del producto son obligatorios",
    //   });
    // }
  
    // if (typeof price !== "number" || isNaN(price) || price <= 0) {
    //   return res
    //     .status(400)
    //     .json({ error: "El precio debe ser un número válido y mayor que cero" });
    // }
  
    next();
  };
  