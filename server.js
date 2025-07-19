const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.post('/submit', (req, res) => {
  const data = req.body;

  const filePath = '/tmp/submissions.json';

  fs.appendFile(filePath, JSON.stringify(data) + ',\n', (err) => {
    if (err) {
      console.error('Error saving submission:', err);
      res.status(500).send('Error saving submission');
    } else {
      console.log('Submission saved:', data);
      res.status(200).send('Submission received');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});