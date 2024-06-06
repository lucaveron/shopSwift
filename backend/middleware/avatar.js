// middleware/uploadMiddleware.js
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Ruta del directorio de destino
const uploadPath = path.join(__dirname, '../assets/images');

// Verifica si el directorio existe, si no, créalo
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
}

// Configuración de multer para manejar la carga de archivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + path.extname(file.originalname);
        cb(null, uniqueSuffix);
    }
});


const upload = multer({ storage: storage });

module.exports = upload;