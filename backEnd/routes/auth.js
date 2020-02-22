var express = require('express');
var router = express.Router();
var fs = require('fs');
var template = require('../lib/template.js');
var path = require('path');
var sanitizeHtml = require('sanitize-html');
var shortid = require('shortid');
var bkfd2Password = require('pbkdf2-password');
var hasher = bkfd2Password();
var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123!',
  database: 'o2'
});
conn.connect();

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');
//var db = low(adapter);
//db.defaults({ users: [] }).write();

module.exports = function (passport) {
  router.get('/login', function (request, response) {
    var fmsg = request.flash();
    var feedback = '';
    if (fmsg.error) {
      feedback = fmsg.error[0];
    }
    var title = "WEB - login";
    var list = template.list(request.list);
    var html = template.HTML(title, list, `
        <div style="color:red;">${feedback}</div>
        <form action="/auth/login_process" method="POST">
          <p><input type="text" name="email" placeholder="email"></p>
          <p><input type="password" name="pwd" placeholder="password"></p>
          <p>
            <input type="submit" value="login">
          </p>
        </form>
        `, '');
    response.send(html);
  });

  router.post('/login_process',
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/auth/login',
      failureFlash: true,
      successFlash: true
    }));

  router.get('/register', function (request, response) {
    var fmsg = request.flash();
    var feedback = '';
    if (fmsg.error) {
      feedback = fmsg.error[0];
    }
    var title = "WEB - login";
    var list = template.list(request.list);
    var html = template.HTML(title, list, `
          <div style="color:red;">${feedback}</div>
          <form action="/auth/register_process" method="POST">
            <p><input type="text" name="email" placeholder="email"></p>
            <p><input type="password" name="pwd" placeholder="password"></p>
            <p><input type="text" name="displayName" placeholder="display name"></p>
            <p>
              <input type="submit" value="register">
            </p>
          </form>
          `, '');
    response.send(html);
  });

  router.post('/register_process', function (req, res) {
    hasher(
      { password: req.body.pwd },
      function (err, pass, salt, hash) {
        var user = {
          authId:'local:'+req.body.email,
          username:req.body.email,
          password:hash,
          salt:salt,
        };
        var sql = 'INSERT INTO users SET ?';
        conn.query(sql, user, function(err, results){
          if(err){
            console.log(err);
            res.status(500);
          } else {
            res.redirect('/');
          }
        });
      }
    )
  });
  /*
  router.post('/login_process', function (request, response) {
    var post = request.body;
    var email = post.email;
    var password = post.pwd;
    
    if(email === authData.email && password === authData.password){
      request.session.is_logined = true;
      request.session.nickname = authData.nickname;
      request.session.save(function(){
        response.redirect(`/`);
      });
    }
    else{
      response.send('Who?');
    }
  });
  */

  router.get('/logout', function (request, response) {
    request.logout();
    request.session.save(function () {
      response.redirect('/');
    });
  });


  return router;
}
