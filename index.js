const express = require('express');
const path = require('path');

// create express app using express method
const app = express();

// serving static files from public dir.
app.use(express.static(path.join(__dirname, 'public')));

// set the view engine
app.set('view engine', 'pug'); // use the pug engine
app.set('views', path.join(__dirname, 'views')); // where we keep pug files

// handle request
app.get('/', (req, res) => {
	const title = 'Homepage';
	const figures = [
		{ src: 'https://source.unsplash.com/random/800x400v=1', altText: 'image nr 1' },
		{ src: 'https://source.unsplash.com/random/800x400v=2', altText: 'image nr 2' },
		{ src: 'https://source.unsplash.com/random/800x400v=3', altText: 'image nr 3' },
		{ src: 'https://source.unsplash.com/random/800x400v=4', altText: 'image nr 4' },
		{ src: 'https://source.unsplash.com/random/800x400v=5', altText: 'image nr 5' },
		{ src: 'https://source.unsplash.com/random/800x400v=6', altText: 'image nr 6' },
		{ src: 'https://source.unsplash.com/random/800x400v=7', altText: 'image nr 7' },
		{ src: 'https://source.unsplash.com/random/800x400v=8', altText: 'image nr 8' }
	];
	res.render('index', { title, figures });
});
app.get('/home', (req, res) => {
	const title = 'Homepage';
	res.render('index', { title });
});
app.get('/aboutme', (req, res) => {
	const title = 'About me';
	res.render('aboutme', { title });
});
app.get('/blog', (req, res) => {
	const title = 'Blog';
	res.render('blog', { title });
});
app.get('/contact', (req, res) => {
	const title = 'Contact';
	res.render('contact', { title });
});

app.listen(3000, () => console.log('listening to port 3000'));
