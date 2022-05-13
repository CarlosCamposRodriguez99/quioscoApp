export default async function handler (req, res) {

  if(req.method === 'POST') {
    res.json({metodo: "POST"})
  }
  res.json({ hola: 'mundo'});


} 