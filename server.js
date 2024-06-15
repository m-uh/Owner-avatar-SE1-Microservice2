const express = require('express');
const app = express();
const port = 1560;

app.use(express.json());

app.post('/calculate-accuracy', (req, res) => {
  const { correctChars, totalChars } = req.body;

  if (typeof correctChars !== 'number' || typeof totalChars !== 'number') {
    return res.status(400).json({ error: 'Invalid input data' });
  }

  if (totalChars === 0) {
    return res.status(400).json({ error: 'Total characters cannot be zero' });
  }

  const accuracy = (correctChars / totalChars) * 100;
  res.json({ accuracy: accuracy.toFixed(2) });
});

app.get('/', (req, res) => {
  res.send('Typing accuracy service is running');
});

app.listen(port, () => {
  console.log(`Typing accuracy service running at http://localhost:${port}`);
});
