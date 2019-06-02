const axios = require('axios');
const express = require('express');

const app = express();

async function getData() {
        return await axios.get('https://jsonplaceholder.typicode.com/users')
        //   .then(response => response.json())
          .then(json => {
            //   console.log("JSON is: ", json.data);
              return(json);
            // return json;            
        })
        .catch(error => {
            // console.log("Error", error)
            return error;
        });
}

app.listen(3000, () => {
    console.log("Listening to: ", 3000);
    getData()
    .then(data => console.log(data.data))
    .catch(err => console.log(err));
})