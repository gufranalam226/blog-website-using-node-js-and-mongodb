<<<<<<< HEAD
const express = require(`express`);
const Routes = express.Router();
const Article= require(`../model/article`);


Routes.get(`/new`, (req, res)=>{
    res.render(`article/article`);
});

Routes.get(`/:slug` , async (req, res)=>{
    const article = await Article.findOne({slug:req.params.slug});
    if(article==null){res.redirect(`/`)}
    res.render(`article/show`, {article:article})

})

Routes.post(`/`, (req, res)=>{
    console.log("working");
    const article = new Article({
        title:req.body.title,
        content:req.body.content,
        additionalInfo:req.body.additionalInfo
    })
    article.save().then(()=>{
        res.redirect(`/`)
    })
})

// Routes.get(`/delete/:id`, (req, res)=>{
//     Article.findByIdAndDelete({_id:req.params.id}, (err)=>{
//     if(err){ res.send(`Sorry`)}
//     else{res.redirect(`/`)}
//     })
// })

Routes.get(`/delete/:id`, async (req, res) => {
    try {
        const deletedArticle = await Article.findByIdAndDelete(req.params.id).exec();
        
        if (!deletedArticle) {
            return res.status(404).send(`Article not found`);
        }

        res.redirect(`/`);
    } catch (error) {
        console.error(error);
        res.status(500).send(`Internal Server Error`);
    }
});


module.exports = Routes;
=======
const express = require(`express`);
const Routes = express.Router();
const Article= require(`../model/article`);


Routes.get(`/new`, (req, res)=>{
    res.render(`article/article`);
});

Routes.get(`/:slug` , async (req, res)=>{
    const article = await Article.findOne({slug:req.params.slug});
    if(article==null){res.redirect(`/`)}
    res.render(`article/show`, {article:article})

})

Routes.post(`/`, (req, res)=>{
    console.log("working");
    const article = new Article({
        title:req.body.title,
        content:req.body.content,
        additionalInfo:req.body.additionalInfo
    })
    article.save().then(()=>{
        res.redirect(`/`)
    })
})

// Routes.get(`/delete/:id`, (req, res)=>{
//     Article.findByIdAndDelete({_id:req.params.id}, (err)=>{
//     if(err){ res.send(`Sorry`)}
//     else{res.redirect(`/`)}
//     })
// })

Routes.get(`/delete/:id`, async (req, res) => {
    try {
        const deletedArticle = await Article.findByIdAndDelete(req.params.id).exec();
        
        if (!deletedArticle) {
            return res.status(404).send(`Article not found`);
        }

        res.redirect(`/`);
    } catch (error) {
        console.error(error);
        res.status(500).send(`Internal Server Error`);
    }
});


module.exports = Routes;
>>>>>>> 43adb13c4697aa44dea742af59a456607d7286f8
