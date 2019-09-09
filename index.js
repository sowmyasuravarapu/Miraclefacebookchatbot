var requests=require('requests');
ACCESS_TOKEN ="EAAdnxGu0F5IBAKYOEPSkU68qJsYF2eYgSpnCs83hR0ubdUM6kLZB5VZCvD1hZCYZACK0dbRALdDvTZA9zj7WGWmKdHZCkirmtTS5WBciuj8FZAIKCVYKw0MzRAXQ1jbdErF0I3A13J3Ofnq75YdixtJa9cZCR3jPqOo3ZCheUhNmo5P8TwUGa7AZA9" 
happy= u'\U0001F604' 
user_id=
data = {
        "recipient": {"id": user_id},
        "message": {"text":"Hi "+happy}
       }
resp = requests.post("https://graph.facebook.com/v2.6/me/messages?access_token=" + ACCESS_TOKEN, json=data)