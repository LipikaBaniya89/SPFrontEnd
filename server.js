const express = require ('express');
const mongoose = require ('mongoose');
const app = express();
const ejs = require('ejs');

app.set('view engine','ejs');

mongoose.connect('mongodb+srv://lipikasp:r6138108u@cluster0.kvwkw.mongodb.net/survey?retryWrites=true&w=majority');

const surveySchema = {
    image_id : Number,
    image_tag : String,
    image_link : String
}

const Survey = mongoose.model ('Survey', surveySchema);

// Get cats
app.get('/cats' , (req , res) => {
   Survey.find({}, function(err, surveys) {
       res.render('survey-questions', {
           surveyList : surveys
       })

   })

})

//Get index
app.get('/index' , (req , res) => {
    res.render('index')
});


//Get survey
app.get('/survey' , (req , res) => {
    res.render('survey')
});


app .listen(4000,  () => {
    console.log('server is running');
})



