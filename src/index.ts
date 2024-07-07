import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import catRoutes from './routes/cat.routes';
import userRoutes from './routes/user.routes';
import imageRoutes from './routes/image.routes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/cats', catRoutes);
app.use('/users', userRoutes);
app.use('/images', imageRoutes);

const password = encodeURIComponent('Omega_2025');
const mongoURI = process.env.MONGODB_URI || `mongodb+srv://angeledugo:${password}@superflight.wspf9vr.mongodb.net/cat?appName=superflight`;



mongoose.connect(mongoURI, { serverApi: {version: '1', strict: true, deprecationErrors: true}} )
  .then(() => {
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
  })
  .catch(err => console.error('MongoDB connection error:', err));