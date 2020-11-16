const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.urlencoded({ extended: true })); // used to get the form data.


app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'views/login.html'), (err) => {
		if (err) {
			console.log(err);
		}
	});
});

app.get('/page', (req, res) => {
    
    if (req.params.page == 1 ) {
        res.sendFile(path.join(__dirname, `views/page_1.html`))
    
    } else if (req.params.page == 2 ) {
        res.sendFile(path.join(__dirname, `views/page_2.html`))

    } else if (req.params.page == 3 ) {
        res.sendFile(path.join(__dirname, `views/page_3.html`))
    }    
});

app.post('/', (req,res)=> {
    res.end(`<h1>This is ${req.body.username}'s page</h1>`);
})

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}...`);
});

