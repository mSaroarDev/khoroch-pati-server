import app from './app.js';

const PORT = process.env.PORT || 8005;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});