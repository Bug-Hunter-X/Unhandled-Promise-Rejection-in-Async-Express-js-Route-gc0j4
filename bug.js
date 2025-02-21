const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  setTimeout(() => {
    // Simulate a condition that should throw an error
    if (Math.random() < 0.5) {
      throw new Error('Something went wrong!');
    }
    res.send('Hello World!');
  }, 1000);
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});