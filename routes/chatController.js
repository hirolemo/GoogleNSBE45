var express = require('express');
var app = express();
var Message = require('../models/message');
var Mentee = require('../models/mentee');
var AssistantV1 = require('watson-developer-cloud/assistant/v1');

var assistant = new AssistantV1({
  version: '2019-02-28',
  iam_apikey: 'oMbHc2PfHS7rHO8noAnUdTmBRTpflTeD4WKU4dnEhkfN',
  url: 'https://gateway.watsonplatform.net/assistant/api'
});

var nameuser;
// Main page.
app.get('/chat', function(req, res) {
	res.render('chat', {user: nameuser});
});

app.post('/chatUser', function(req,res){
  console.log('req body for username' + req.body.username);
  nameuser = req.body.username;

  var user = new Mentee({
    username: req.body.username
  })
  user.save(function(err, data){
    if(err){
      console.log(err);
    }
      else{
          console.log("the user just created is " + data);
      }
  });

  //if(req.query.userType == 'mentee'){
    conversation.message(
    {
      workspace_id: '0b34d9c2-95f3-4b56-905e-f02f34cbe126'
    },
    function(err, response) {
      if (err) {
        console.error(err);
      } else {
        res.send(response);
      }
    }
  );

})

app.post('/chatMsg', function(req, res) {
  console.log('user where are u');
  console.log(req.query.user);
  console.log(req.body.message);

    var tempinput = {
      text: req.body.message,
      username: req.query.user
    }

    console.log(tempinput);

    User.findOne({
        'username': req.query.user
    }, function(err, user){
      console.log('user ' + user);
      var type = user.type;


    if(type == 'mentee'){
    	var message = new Message({
        input: tempinput,
        workspace_id: '0b34d9c2-95f3-4b56-905e-f02f34cbe126'

      });
      conversation.message(
  {
    input: { text: tempinput.text },
    workspace_id: '0b34d9c2-95f3-4b56-905e-f02f34cbe126'
  },
  function(err, response) {
    if (err) {
      console.error(err);
    } else {
      res.send(response);
    }
  }
);
    }

//     if(type == 'mentor'){
//     	var message = new Message({
//         input: tempinput,
//         workspace_id: '9063318d-fed8-4194-81ea-36db8c800bb9'
//
//       });
//       conversation.message(
//   {
//     input: { text: tempinput.text },
//     workspace_id: '9063318d-fed8-4194-81ea-36db8c800bb9'
//   },
//   function(err, response) {
//     if (err) {
//       console.error(err);
//     } else {
//       res.send(response);
//     }
//   }
// );
//     }

    console.log("req body is " + JSON.stringify(req.body));
    message.save(function(err, message){
      if(err){
        console.log(err);
      }
        else{
            console.log("message is " + message);
        }
    });
  })
});


module.exports = app;
