import express from 'express';

const app = express();
app.use(express.json());

let colors = [
  { name: 'Red', hex: '#FF0000' },
  { name: 'Green', hex: '#00FF00' },
  { name: 'Blue', hex: '#0000FF' },
  { name: 'Yellow', hex: '#FFFF00' },
  { name: 'Purple', hex: '#800080' }
];

// list colors
app.get('/colors', (req, res) => {
  res.json(colors);
});

// new color
app.post('/colors', (req, res) => {
  const color = req.body;
  colors.push(color);
  res.status(201).json(color); // that a resource has been created.
});

// retrieve a specific color by name
app.get('/colors/:name', (req, res) => {
  const colorName = req.params.name;
  const color = colors.find(c => c.name.toLowerCase() === colorName.toLowerCase());
  
  if (color) {
    res.json(color);
  } else {
    res.status(404).json({ message: 'Cor não encontrada' });
  }
});

// update a specific color by name
app.put('/colors/:name', (req, res) => {
  const colorName = req.params.name;
  const colorIndex = colors.findIndex(c => c.name.toLowerCase() === colorName.toLowerCase());
  
  if (colorIndex !== -1) {
    colors[colorIndex] = { ...colors[colorIndex], ...req.body };
    res.json(colors[colorIndex]);
  } else {
    res.status(404).json({ message: 'Cor não encontrada' });
  }
});

// remove a specific color by name.
app.delete('/colors/:name', (req, res) => {
  const colorName = req.params.name;
  const colorIndex = colors.findIndex(c => c.name.toLowerCase() === colorName.toLowerCase());
  
  if (colorIndex !== -1) {
    const deletedColor = colors.splice(colorIndex, 1);
    res.json(deletedColor[0]);
  } else {
    res.status(404).json({ message: 'Cor não encontrada' });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
