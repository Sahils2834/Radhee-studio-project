const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());

const categories = [
  { id: 'wedding', name: 'Wedding' },
  { id: 'pre-wedding', name: 'Pre-Wedding' },
  { id: 'portraits', name: 'Portraits' },
  { id: 'studio', name: 'Studio Photography' },
  { id: 'family', name: 'Family' },
  { id: 'corporate', name: 'Corporate' },
  { id: 'commercial', name: 'Commercial' },
];

const categoryImages = {
  wedding: [
    '/images/wedding1.jpg',
    '/images/wedding2.jpg',
    '/images/wedding3.jpg'
  ],
  'pre-wedding': [
    '/images/prewedding1.jpg',
    '/images/prewedding2.jpg'
  ],
  portraits: [
    '/images/portrait1.jpg',
    '/images/portrait2.jpg'
  ],
  studio: [
    '/images/studio1.jpg',
    '/images/studio2.jpg'
  ],
  family: [
    '/images/family1.jpg',
    '/images/family2.jpg'
  ],
  corporate: [
    '/images/corporate1.jpg',
    '/images/corporate2.jpg'
  ],
  commercial: [
    '/images/commercial1.jpg',
    '/images/commercial2.jpg'
  ],
};

app.get('/api/categories', (req, res) => {
  res.json(categories);
});

app.get('/api/images/:categoryId', (req, res) => {
  const cat = req.params.categoryId;
  const images = categoryImages[cat] || [];
  res.json(images);
});

app.use('/images', express.static(path.join(__dirname, 'images')));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
