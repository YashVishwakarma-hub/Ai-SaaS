import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { clerkMiddleware, requireAuth } from '@clerk/express';
import aiRouter from './Routes/ai.routes.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './Routes/user.routes.js';

const app = express();

await connectCloudinary();

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

app.use('/api/ai', aiRouter);
app.use('/api/user', userRouter);

app.get('/', (req, res) => {
    res.send('Server is Live!');
})

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
})