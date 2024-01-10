
const express = require(`express`);
const mongoose = require(`mongoose`);
const expressLayouts = require("express-ejs-layouts");
const userRout = require(`./routes/user`);
const Article= require(`./model/article`);

const userRouters= require(`./routes/user`);

const app = express();

mongoose.connect(`mongodb+srv://gufranalm226:WSOPt8X3FHezBMez@cluster0.n4cwrsn.mongodb.net/?retryWrites=true&w=majority`, {

})

app.use(expressLayouts);
app.set(`view engine`, `ejs`);

app.get(`/`, async (req, res)=>{
    const article = await Article.find();
    console.log(article);
    res.render(`index`, {article:article});
})
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(`/article`, userRout);



app.use(express.static(`public`))

const PORT = process.env.PORT || 8080
app.listen(PORT, ()=>{
    console.log(`The server is running on ${PORT}`)
});
