import multer from 'multer';
import fs from 'fs';
import path from 'path';

// Membuat folder 'storage' jika belum ada
const storageDir = path.join(process.cwd(), 'storage');
if (!fs.existsSync(storageDir)) {
    fs.mkdirSync(storageDir, { recursive: true });
}

// Konfigurasi multer untuk menyimpan file di folder 'storage'
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'storage');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

export default upload;
