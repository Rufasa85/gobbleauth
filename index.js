const express = require('express');
const exphbs = require('express-handlebars');
const allRoutes = require('./controllers');
const sequelize = require('./config/connection');

const session = require('express-session');



// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sess = {
    secret: 'Super secret secret',
    cookie: {
        maxAge:1000*60*60*2
    },
    resave: false,
    saveUninitialized: true,
};

app.use(session(sess));

// Static directory
app.use(express.static('public'));

const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use('/',allRoutes);

sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
    });
});




// const SequelizeStore = require('connect-session-sequelize')(session.Store);
// store: new SequelizeStore({
//     db: sequelize
// })