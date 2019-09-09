let express = require("express")
var app = express();
const bodyParser = require('body-parser');
let http = require("http")
let server = http.Server(app);
let socketIO = require("socket.io")
let io = socketIO(server);
var request = require("request");
var mongoose=require("mongoose")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var userinput;
var botactive = true;
var res;
var token = 'EAALoF6dJKnQBAGPVOpm57njrtKa3iX2ZAtAvMUNtrm2ALMgaoZAPGugzjbg8hqYdvhR8ZBqFstJI9Uje2pR6ZBazJsGPLn86ZBkXLMseLXHo8s7mti7kFyDw6cKIZCclvJQfLWmaEZBFOJkyeJlubx416yIx1qGhaF53nSaDdKdeJ24qZAZCZA16PZB'
var FbUserId;

mongoose.connect('mongodb+srv://yagnes:mlab@cluster0-s1fce.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true },function (err,resp) {
    if(err)
    console.log(err)
    else
    console.log("connected")
});


var sch=new mongoose.Schema({
_id:Number,
firstname:String,
lastname:String
})

//model

var userdata=mongoose.model('userdata',sch)

app.get('/webhook', (req, res) => {
  console.log('2012157368911820', "This is sample message from backend");
  //loginSend('2012157368911820', "This is sample message from backend")

});





var socket;
io.on("connection", (socketClient) => {
  socket = "";
  console.log('connection established')
  socket = socketClient;
  app.post('/webhook', (req, res) => {

    FbUserId = req.body.originalDetectIntentRequest.payload.data.sender.id
   
   userdata.find({"_id":FbUserId},function(err,resp){
    console.log(resp)
    if(resp)
    {
      if(resp.length==0){
      store(FbUserId)
      }
    } 
  }) 
   
    // console.log(FbUserId)
var request=require('request')
console.log("request inside")
    console.log("inside post webhook")
    //loginSend('2012157368911820', "This is sample message from backend")
   
    message = req.body.queryResult.queryText
    if (botactive == false) {
      console.log(botactive)
      agent(FbUserId, message)
      //loginSend(FbUserId, "Test message");
      //   console.log(botactive)
    }
    else {
      if (req.body.queryResult.action == "agent") {
        console.log("agent");
        agent(FbUserId, message);
        botactive = false;
      }
      else {
        console.log("bot response")
        console.log(req.body.queryResult.action)
        console.log(botactive)
        if (req.body.queryResult.action == "Greetings") {
          console.log(botactive)
          res.json({
            "fulfillmentText": "Hello, I'm Amelia. I can help you to answer any question that you might have about our company",
            "source": 'webhook-sample'
          });


        }
        else if (req.body.queryResult.action == "capabilities") {
          console.log(botactive)
          res.json({
            "fulfillmentText": "My name is Amelia and I was built by Miracle’s Innovation Labs! I can help with some of the following about Miracle, Job Search, Internship, Something else",
            "source": 'webhook-sample'
          });


        }
        else if (req.body.queryResult.action == "about_company") {
          console.log(botactive)
          res.json({
            "fulfillmentText": "We are a 25-year-old Global Systems Integrator and Private Minority firm headquartered in Novi, MI – USA.  http://www.miraclesoft.com/company/about-us",
            "source": 'webhook-sample'
          });


        }
        else if (req.body.queryResult.action == "about_digitalsummit") {
          console.log(botactive)
         res.json({
                     "fulfillmentMessages": [
                      {
                      "payload": {
                        "facebook": {
                        "attachment": {
                          "payload": {
                          "buttons": [
                            {
                            "type": "web_url",
                            "url": "http://www.miraclesoft.com/digitalsummit/",
                            "title": "Read More"
                            }
                          ],
                          "template_type": "button",
                          "text": "Digital Summit is a 5-day technical extravaganza that takes place in Vizag every year."
                          },
                          "type": "template"
                        }
                        }
                      },
                      "platform": "FACEBOOK"
                      }
                    ]
                  })


        }

        else if (req.body.queryResult.action == "about_event") {

          //console.log("req.body.queryResult.fulfillmentMessages[0]",req.body.queryResult.fulfillmentMessages[0].text.text);
          //console.log("req.body.queryResult.fulfillmentMessages[0]",req.body.queryResult.fulfillmentMessages[0].text.text[0]);

          //loginSend(FbUserId, req.body.queryResult.fulfillmentMessages[0].text.text[0]);
          res.json({
            "fulfillmentMessages": [
              {
                "quickReplies": {
                  "title": "Can you let us know for which event you are looking for ?",
                  "quickReplies": [
                    "AP Cloud",
                    "Digital Summit",
                    "Internship"
                  ]
                },
                "platform": "FACEBOOK"
              },
              {
                "text": {
                  "text": [
                    ""
                  ]
                }
              }
            ]
          });


        }

        else if (req.body.queryResult.action == "about_internships") {
          console.log(botactive)
          res.json({
            "fulfillmentText": "We are providing internships every year in Summer. For more details visit https://www.miraclesoft.com/events/internship-2017.php",
            "source": 'webhook-sample'
          });


        }

        else if (req.body.queryResult.action == "AP_Cloud_Register") {
          console.log(botactive)
          res.json({
            "fulfillmentText": "Please visit http://www.miraclesoft.com/ac/about-us.action for registration",
            "source": 'webhook-sample'
          });


        }

        else if (req.body.queryResult.action == "AP_Cloud_Tech") {
          console.log(botactive)
          res.json({
            "fulfillmentText": "The program will be mainly focusing on trending technologies like MEAN, Cognitive, IOT, etc.",
            "source": 'webhook-sample'
          });


        }

        else if (req.body.queryResult.action == "AP_Cloud_Training") {
          console.log(botactive)
          res.json({
            "fulfillmentText": "We are providing the training sessions to different colleges all over Andhra Pradesh and the time period and technologies would be based upon your choice.",
            "source": 'webhook-sample'
          });


        }

        else if (req.body.queryResult.action == "APCloud") {
          console.log(botactive)
          res.json({
            "fulfillmentMessages": [
              {
                "quickReplies": {
                  "title": "AP Cloud Initiative strives to create a hundred thousand digital transformation professionals in Andhra Pradesh. Would you like to enroll?",
                  "quickReplies": [
                    "Yes",
                    "No"
                  ]
                },
                "platform": "FACEBOOK"
              },
              {
                "text": {
                  "text": [
                    ""
                  ]
                }
              }
            ]
          })

        }

        else if (req.body.queryResult.action == "Dates_Internship") {
          console.log(botactive)
          res.json({
            "fulfillmentText": "It will be held in the month of May or June but the dates are not yet finalized. We will release an official notice soon.",
            "source": 'webhook-sample'
          });


        }



        else if (req.body.queryResult.action == "offtopic") {
          console.log(botactive)
          res.json({
            "fulfillmentText": "What was that?",
            "source": 'webhook-sample'
          });


        }




        else if (req.body.queryResult.action == "H1B_Sponsorship") {
          console.log(botactive)
          res.json({
            "fulfillmentText": "We have limited response in social media channels. Please send an email to info@miraclesoft.com with all the details and we will be able to help you out from there.",
            "source": 'webhook-sample'
          });


        }

        else if (req.body.queryResult.action == "Internship_Registration") {
          console.log(botactive)
          res.json({
            "fulfillmentText": "Please visit https://www.miraclesoft.com/events/internship-2017.php",
            "source": 'webhook-sample'
          });


        }

        else if (req.body.queryResult.action == "Interview_Process") {
          console.log(botactive)
          res.json({
            "fulfillmentText": "We have 4 rounds Aptitude, Java Programming, Technical and HR rounds",
            "source": 'webhook-sample'
          });


        }

        else if (req.body.queryResult.action == "Job_Interviews") {
          console.log(botactive)
          res.json({
            "fulfillmentText": "We have job fair every Friday at Indian Operations location - Miracle Software Systems (I) Pvt. Ltd. MIG-49 Lawsons Bay Colony Visakhapatnam, AP - 530017, India. You can attend an interview if possible",
            "source": 'webhook-sample'
          });


        }


        else if (req.body.queryResult.action == "Job_Openings") {
          console.log(botactive)
          res.json({
            "fulfillmentMessages": [
              {
                "quickReplies": {
                  "title": "What is your highest educational qualification",
                  "quickReplies": [
                    "BTech",
                    "MTech",
                    "MBA",
                    "MCA",
                    "Other"
                  ]
                },
                "platform": "FACEBOOK"
              },
              {
                "text": {
                  "text": [
                    ""
                  ]
                }
              }
            ]
          });


        }


        else if (req.body.queryResult.action == "Job_Position") {
          console.log(botactive)
          res.json({
            "fulfillmentText": "Sorry! currently our internal services are not responding. Please try again one more time.",
            "source": 'webhook-sample'
          });
        }



        else if (req.body.queryResult.action == "Job_Vacancies_Issue") {
          console.log(botactive)
          res.json({
            "fulfillmentText": "Your profile might have been missed in the process. Can you please send us your resume to vspjobs@miraclesoft.com and we'll look through it. Looking forward to hearing from you soon",
            "source": 'webhook-sample'
          });


        }

        else if (req.body.queryResult.action == "Methodologies") {
          console.log(botactive)
          res.json({
            "fulfillmentText": "Miracle follows multiple methodologies such as RING and POWER to provide quality and innovative services. Get more details on http://www.miraclesoft.com/why/methodologies",
            "source": 'webhook-sample'
          });


        }


        else if (req.body.queryResult.action == "MIL_team") {
          console.log(botactive)
          res.json({
            "fulfillmentText": "MIL is a team of researchers focusing on Next Gen technologies like Chat bots, Big Data, Cloud Computing, DevOps and many more. Read More on http://www.miraclesoft.com/why/innovation",
            "source": 'webhook-sample'
          });


        }

        else if (req.body.queryResult.action == "Miracle_Founded") {
          console.log(botactive)
          res.json({
            "fulfillmentText": "Miracle was founded in 1994 and has over 25 years of experience servicing numerous Fortune 500 companies.",
            "source": 'webhook-sample'
          });


        }

        else if (req.body.queryResult.action == "Miracle_Founder") {
          console.log(botactive)
          res.json({
            "fulfillmentText": "Prasad Lokam is our beloved CEO and founded Miracle Software Systems in 1994",
            "source": 'webhook-sample'
          });


        }
        else if (req.body.queryResult.action == "Miracle_Gallery") {
          console.log(botactive)
          res.json({
            "fulfillmentText": "We love taking pictures of our events, you can check out all the memories in our gallery.Here you go http://www.miraclesoft.com/gallery/",
            "source": 'webhook-sample'
          });
        }

        else if (req.body.queryResult.action == "Miracle_Headquarters") {
          console.log(botactive)
          res.json({
            "fulfillmentText": "Our headquarters is in Novi, MI – USA with offices across the globe. Find us on http://www.miraclesoft.com/contact/locations",
            "source": 'webhook-sample'
          });


        }
        else if (req.body.queryResult.action == "NeverMind") {
          console.log(botactive)
          res.json({
            "fulfillmentText": "Sure, is there anything else that you need help with?",
            "source": 'webhook-sample'
          });


        }
        else if (req.body.queryResult.action == "Queries_Internship") {
          console.log(botactive)
          res.json({
            "fulfillmentText": "Please do register again with correct details",
            "source": 'webhook-sample'
          });


        }
        else if (req.body.queryResult.action == "Queries_Interviews") {
          console.log(botactive)
          res.json({
            "fulfillmentText": "Please bring 2 copies of resume and passport size photos. If there are any study certificates you can bring them too",
            "source": 'webhook-sample'
          });


        }


        else if (req.body.queryResult.action == "Targeted_Employees") {
          console.log(botactive)
          res.json({
            "fulfillmentText": "Today, Miracle’s team includes 2600 IT Professionals and Miracle envisions itself to be at 50,000 IT professionals by 2020 and become a pioneer and specialist in niche IT spaces",
            "source": 'webhook-sample'
          });


        }


        else if (req.body.queryResult.action == "Technical_Expertise") {
          console.log(botactive)
          var contacts = req.body.queryResult.parameters.Contacts
          console.log("req body paramete", req.body.queryResult.parameters)
          console.log("req body query result parameters contacts", req.body.queryResult.parameters.Contacts)
          res.json({
            "fulfillmentText": "Sure, I can connect you with our " + contacts + "  Team. Would you like for me to reply a message back to them?",
            "source": 'webhook-sample'
          });


        }



        else if (req.body.queryResult.action == "Technologies_DigitalSummit") {
          console.log(botactive)
          res.json({
            "fulfillmentText": "The program mainly focuses on trending technologies like IoT, Blockchain, DevOps, Big Data, Machine Learning, Chatbots, etc",
            "source": 'webhook-sample'
          });


        }


        else if (req.body.queryResult.action == "Thankyou") {
          console.log(botactive)
          res.json({
            "fulfillmentText": "Hope you found everything you were looking for. Have a great day!",
            "source": 'webhook-sample'
          });


        }
        else if (req.body.queryResult.action == "When_DigitalSummit") {
          console.log(botactive)
          res.json({
            "fulfillmentText": "This event is held every year in the month of December at Miracle Valley, Vizag.",
            "source": 'webhook-sample'
          });
        }
      }
    }
    //}
  })


  function loginSend(id, text) {

    var dataPost = {
      url: 'https://graph.facebook.com/v2.6/me/messages',
      qs: {
        access_token: token
      },
      method: 'POST',
      json: {
        recipient: {
          id: id
        },
        message: {
          "text": text
        }
      }
    };
    requestFunction(dataPost)
  }

  function requestFunction(dataPost) {

    request(dataPost, (error, response, body) => {
      if (error) {
        console.log('Error when we try to sending message: ', error);
      } else if (response.body.error) {
        console.log('Error: ', response.body.error);
      } else {
        console.log("Successfully Sent the message");
      }
    });

  }

  var getRequest;
  function agent(FbUserId, message) {
    console.log("inside agent")

    console.log("user connected", message);
    socket.emit('message', message);

    // Log whenever a client disconnects from our websocket server
    // socket.on("disconnect", function () {
    //   console.log("user disconnected");
    // });

    // When we receive a 'message' event from our client, print out
    // the contents of that message and then echo it back to our client
    // using `io.emit()`
    socket.on("sendReq", (message) => {
      if(getRequest != message){
        console.log("Message Received: " + message);
        loginSend(FbUserId, message);
        getRequest = message;
      }
      //loginSend(FbUserId,message)
      //   res.send(JSON.stringify({
      //   "fulfillmentText": "message",
      //   "source": 'webhook-sample'
      // }));
    });
  }

});

server.listen(5000, () => {
  console.log("started on port 5000");
});


function store(FbUserId){

  request('https://graph.facebook.com/v3.2/'+FbUserId+'?fields=id,first_name,last_name,profile_pic&access_token=EAALoF6dJKnQBAPCFt00TEJ0PzyqfcLuAkIU44OyJApkViqq8z3mvGBS2FA4wViqZBIRke3zjZCKLD3MyKrrHFME8nKlXZCwU9c2GAVyYUWVtMFNmNYnwsUIkifHk7PM6ZAqJVUaCpFI4fSCqKgR873qKoFLW02RLdmG42kLcVqayK5cRePOR',
  //console.log(request)
  
  function (err,response,body){
    var res=JSON.parse(body)
    console.log(res.id)
    console.log(res.first_name)
  userdata.create({
      "_id":FbUserId,
      "firstname":res.first_name,
      "lastname":res.last_name
  },(err,data)=>{
  if(err)
  console.log(err)
  else
  console.log(data)
  //res.send(data)
  })
  
  })

}