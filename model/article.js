<<<<<<< HEAD
const mongoose = require(`mongoose`);
const slugify = require(`slugify`);

const articleSchema = mongoose.Schema({
    title: {type:String},
    content: {type:String},
    additionalInfo: {type:String},
    createdAt:{ type:Date, default:Date.now()},
    slug:{type:String, unique:true}
})


articleSchema.pre(`validate`, function(next){
    if(this.title){
        this.slug= slugify(this.title, {lower:true, strict:true})
    }
    next();
})

=======
const mongoose = require(`mongoose`);
const slugify = require(`slugify`);

const articleSchema = mongoose.Schema({
    title: {type:String},
    content: {type:String},
    additionalInfo: {type:String},
    createdAt:{ type:Date, default:Date.now()},
    slug:{type:String, unique:true}
})


articleSchema.pre(`validate`, function(next){
    if(this.title){
        this.slug= slugify(this.title, {lower:true, strict:true})
    }
    next();
})

>>>>>>> 43adb13c4697aa44dea742af59a456607d7286f8
module.exports = mongoose.model(`Article`, articleSchema);