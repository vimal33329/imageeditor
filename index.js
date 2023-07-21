const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))


app.get('/', async (req, res) => {
	let html = await require('./pages/index');
	res.send(html);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})