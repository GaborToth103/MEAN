// main or home controller

title_name = 'CompanyDataPro'

module.exports.home = function(req, res){
    res.render('index', { title: title_name })
}

module.exports.about = function(req, res){
    res.render('about',  {title: title_name})
}

module.exports.contact = function(req, res){
    res.render('contact',  {title: title_name})
}

module.exports.login = function(req, res){
    res.render('login',  {title: title_name})
}

module.exports.register = function(req, res){
    res.render('register',  {title: title_name})
}

module.exports.forgotpassword = function(req, res){
    res.render('forgot-password',  {title: title_name})
}

