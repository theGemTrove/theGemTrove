const
	path		= require('path'),
	express = require('express'),
	app			= express(),
	pubPath = path.resolve(__dirname, '..', 'dist'),
	PORT		= process.env.PORT || 4646;

app.use(express.static(pubPath));

app.get('*', (req, res) => {
	res.sendFile(path.join(pubPath, 'index.html'));
});

app.listen(PORT, () => {
	//debug('Backend Server Up And Running');
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();