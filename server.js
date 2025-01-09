import express from 'express';
import dotenv from 'dotenv';
import ConnectDB from './config/db.js';
import CategoryRoutes from './routes/CategoryRoutes.js';
import PostsRoutes from './routes/PostsRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/storage', express.static('storage'));

app.use('/api/v1/', CategoryRoutes)
app.use('/api/v1/', PostsRoutes)

const port = process.env.port;

ConnectDB();

app.listen(port, () => {
    console.log(`server running in ${port}`)
})