const express = require('express');
const app = express();
const { exec } = require('child_process');
const port = 4000; // You can change the port if needed

app.get('/', (req, res) => {
  res.send('Hello, World!'); // Sends 'Hello, World!' as the response
});
app.get('/hello', (req, res) => {
 // Function to shut down the computer
function shutdownComputer() {
  // Use the appropriate command based on the operating system
  const command = process.platform === 'win32' ? 'shutdown /s /t 0' : 'shutdown now';

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error shutting down: ${error.message}`);
    } else {
      console.log('Computer is shutting down...');
    }
  });
}
shutdownComputer();
});
app.get('/hello2', (req, res) => {
  res.send('Hello, World!'); // Sends 'Hello, World!' as the response
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
