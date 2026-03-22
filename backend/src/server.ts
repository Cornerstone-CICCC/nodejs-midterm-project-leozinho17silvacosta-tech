import express from 'express';
import cors from 'cors';
import cookieSession from 'cookie-session';
import path from 'path';
import userRoutes from './routes/userRoutes';
import teamRoutes from './routes/teamRoutes';

const app = express();
const PORT = 3000;

// CORS:
app.use(cors({
  origin: 'http://localhost:4321',
  credentials: true
}));

app.use(express.json());

// COOKIE SESSION:
app.use(cookieSession({
  name: 'session',
  keys: ['your_secret_key_here'],
  maxAge: 30 * 60 * 1000,
  httpOnly: true,
  secure: false,
  sameSite: 'lax' 
}));

// STATIC FILES:
const publicPath = path.join(__dirname, 'public');
app.use('/public', express.static(publicPath));

// ROUTES:
app.use('/users', userRoutes);
app.use('/teams', teamRoutes);

// SERVER INIT:
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});