const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

app.use(cors())

app.get('/', (req,res) => {
	res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/api/query', (req,res) => {
	res.json({
		ok: true
	})
})

app.listen(
	8080,
	() => console.log(`Cypress Issue - listening on port 8080!`)
)