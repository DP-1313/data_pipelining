var bkfd2Password = require('pbkdf2-password');
var hasher = bkfd2Password();
var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123',
  database: 'o2'
});
conn.connect();

module.exports = function (app) {

    var passport = require('passport');
    var LocalStrategy = require('passport-local').Strategy;

    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function (user, done) {
        done(null, user.authId);
    });

    passport.deserializeUser(function (id, done) {
        var sql = 'SELECT * FROM users WHERE authId=?';
        console.log('d id=',id);
        conn.query(sql, [id], function(err, results){
            if(err){
                console.log(err);
                done('there is no user.');
            } else {
                console.log('result',results[0]);
                done(null, results[0]);
            }
        })
    });

    passport.use(new LocalStrategy(
        
        {
            usernameField: 'email',
            passwordField: 'pwd'
        },
        function (username, password, done) {
            console.log('username = ', username, 'password = ',password);
            var uname = username;
            var pwd = password;
            var sql = 'SELECT * FROM users WHERE authId=?';
            conn.query(sql, ['local:'+uname], function(err, results){
                if(err){
                    return done('There is no user');
                }
                if (!results[0]) return done(err);
                var user = results[0];
                console.log('user = ',user)
                return hasher({password:pwd, salt:user.salt}, function(err, pass, salt, hash){
                    if(hash === user.password){
                        console.log('testtttt', user);
                        done(null, user, {
                            message: 'welcome'
                        });
                      } else {
                        done(null, false);
                      }
                });
            });


            /*
            if (username === authData.email) {
                if (password === authData.password) {
                    return done(null, authData, {
                        message: 'welcome'
                    });
                } else {
                    return done(null, false, {
                        message: 'Incorrect Password'
                    });
                }
            } else {
                return done(null, false, {
                    message: 'Incorrect ID'
                });
            }
            */
        }
    ));
    return passport;
}