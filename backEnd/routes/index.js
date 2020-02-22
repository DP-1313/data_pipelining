var express = require('express');
var router = express.Router();
var template = require('../lib/template.js');
var auth = require('../lib/auth');

router.get('/', function (request, response) {
  //if(request.user)

  var fmsg = request.flash();
  console.log('req', request.user);
  var feedback = '';

  if (fmsg.success) {
    feedback = fmsg.success[0];
  }

  var title = "Welcome";
  var discription = "Hello, Node.js";
  var list = template.list(request.list);
  var html = template.HTML(title, list,
    `
      <div style="color:blue;">${feedback}</div>
        <h2>${title}</h2>${discription}
        `,
    auth.statusUI(request, response)
  );
  response.send(html);
});

module.exports = router;
