import React ,{Component} from 'react';
import './App.css';

class App extends Component {
  consultarApi()
  {
    fetch('https://api.twitter.com/1.1/search/tweets.json', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization' : 'OAuth oauth_consumer_key="XXfTrXKuEklDaB4dosnnIQdl0",oauth_token="1194832845526700032-3qllqrWZ2oLRcw6n9PuDq7JHeiXfAK",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1573868374",oauth_nonce="9TsG8WCczBJ",oauth_version="1.0",oauth_signature="ur2k2sbyCkxQJ1MzKO1KiEOz2vY%3D"',
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
          }, 
          // body: 'screen_name=pruebagrtempor1&pruebagrtempor1=2'
      })
      .then(function(response) {
          console.log('response =', response);
          // return response.json();
      })
  //     .then(function(data) {
  //         console.log('data = ', data);
  //     })
  //     .catch(function(err) {
  //         console.error(err);
  //     });
  }
  render (){
    this.consultarApi()
    return (
      <div className="App">
      Hola mundo
      </div>
    );
  }
}
export default App;
