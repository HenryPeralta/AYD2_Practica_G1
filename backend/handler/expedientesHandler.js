const { getConnection } = require('../confing/db');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const dotenv = require('dotenv');

dotenv.config();
const s3 = new S3Client({
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

function decodeBase64(base64String) {
    // Remove the data URL scheme if present
    const matches = base64String.match(/^data:(.+?);base64,(.+)$/);
    if (!matches || matches.length !== 3) {
      throw new Error('Invalid Base64 string');
    }
  
    return {
      mimeType: matches[1],
      buffer: Buffer.from(matches[2], 'base64'),
    };
  }
// upload expediente
exports.uploadExpediente = async (req, res) => {
  try {
    const { base64File, fileName, cui, codigo } = req.body;
    // subir archivo a s3
    // Determine file type for the ENUM field
    // Decode the base64 file
    const { mimeType, buffer } = decodeBase64(base64File);

    // Ensure the file is a valid Word or PDF document
    const validMimeTypes = [
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/pdf'
    ];
    if (!validMimeTypes.includes(mimeType)) {
      return res.status(400).json({ message: 'Invalid file type' });
    }

    let tipoArchivo;
    if (mimeType === 'application/msword') {
      tipoArchivo = 'DOC';
    } else if (mimeType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      tipoArchivo = 'DOCX';
    } else if (mimeType === 'application/pdf') {
      tipoArchivo = 'PDF';
    }

    const s3FileName = `expedientes/${Date.now()}-${fileName}`;
    
    await s3.send(new PutObjectCommand({
      Bucket: 'ayd2objects',
      Key: fileName,
      Body: buffer,
      ContentType: mimeType,
    }));

    const s3Url = `https://ayd2objects.s3.amazonaws.com/${s3FileName.replace(/\s/g, '%20')}`;
    
    const connection = await getConnection();
    const query = `INSERT INTO expedientes (cui, codigo, archivo, tipo_archivo, fecha_ingreso) VALUES (?, ?, ?, ?, CURDATE())`;
    await connection.query(query, [cui, codigo, s3Url, tipoArchivo]);
    // subir archivo a s3
    res.status(200).json({ message: 'expediente cargado' });
  } catch (error) {
    console.error('Error al subir expediente:', error);
    res.status(500).json({ message: 'error al cargar expediente' });
  }
};

