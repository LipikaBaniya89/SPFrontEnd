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

const dogSchema = {
    image_id1 : Number,
    image_tag1 : String,
    image_link1 : String
}

const Survey = mongoose.model ('Survey', surveySchema);
const DogSurvey = mongoose.model('DogSurvey', dogSchema );

// Get cats
app.get('/survey-questions' , (req , res) => {
   Survey.find({}, function(err, surveys) {
       res.render('survey-questions', {
           surveyList : surveys
       })

   })

})

// Get dogs
app.get('/dog-survey' , (req , res) => {
    DogSurvey.find({}, function(err, dogs) {
        res.render('dog-survey', {
            dogList : dogs
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

//Get profile
app.get ('/profile', (req , res) => {
    res.render ('profile')
})


app .listen(4000,  () => {
    console.log('server is running');
})



