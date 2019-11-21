const express = require(`express`);
const bodyParser = require(`body-parser`);
const exphbs = require(`express-handlebars`);
const path = require(`path`);
const nodemailer = require(`nodemailer`);

const app = express();

app.engine('handlebar', exphbs());
app.set('view engine', 'handlebar');

//app.use('public', express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/public')));


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

app.get('/index.html', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

app.get('/ourproject', (req, res) => {
    res.sendFile('ourproject.html', { root: __dirname });
});

app.listen(3000, () => console.log('Server started...'));

const transporter = nodemailer.createTransport({
   service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
   auth: {
       user: 'temychun@gmail.com',
       pass: 'tamplier2287'
   }
});

app.post('/submit', (req, res) => {
  var mailOptions = {
      from: req.body.email,
      to: 'temychun@gmail.com',
      subject: 'Send Node.js',
      text: `Name: ${req.body.name} Email: ${req.body.email} Adress: ${req.body.adress} Phone: ${req.body.phone} Select: ${req.body.my}` 
  } ;

    transporter.sendMail(mailOptions, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    };
    transporter.close();
});
});