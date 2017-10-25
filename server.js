var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
	title : 'Vishwa article-one',
	heading : 'article-one',
	date : 'Oct 26th',
	content : `Nothing
	 nothing
	 nothing`
    },
    'article-two': {
	title : 'Vishwa article-one',
	heading : 'article-one',
	date : 'Oct 27th',
	content : `Nothing
	 nothing
	 nothing`
    }
};

function createData(data)
{   var title = data.title;
    var heading = data.heading;
    var date= data.date;
    var content = data.content;
    var htmltemplate = 
    `<html>
        <title>${title}</title>
        <h1>${heading}</h1>
        <h2>${date}</h2>
        <p>${content}</p>
    </html>`;
    return htmltemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res)
{
  var articleName= req.params.articleName;
  res.send(createData(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
