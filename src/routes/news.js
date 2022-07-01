const express = require('express');
const newsRoutes = express.Router();
const axios = require("axios");
const res = require('express/lib/response');



newsRoutes.get('/', async(req, res)=>{

    try {   
        const newsAPI = await axios.get(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=S9qN6g2dbGku8s9fLVJqVqWpbLJLSWtR`)    
        res.render('news', {articles: newsAPI.data.results})
    } catch (error) {
        if(error.response){
            res.render('news', {articles: null})
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }else if(error.request){
            res.render('news', {articles: null})
            console.log(error.request);
        }else{
            res.render('news', {articles: null})   
            console.log(error.message);
        }
    }
})





module.exports = newsRoutes



