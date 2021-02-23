import 'reflect-metadata';
import express from 'express';
import './database'

const app = express();

app.get('/', (req, res) => {
  res.json({message: 'Hello world'})
})

app.post('/', (req, res) => {
  return res.json({message: 'rota de teste'})
})

app.listen(3333, () => console.log('API running...'))