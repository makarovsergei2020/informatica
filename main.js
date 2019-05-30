const express = require('express');

const app = express();

app.get('', function(req, res){
	res.send('Привет');
})

app.listen(8888);