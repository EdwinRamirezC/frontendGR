import React from 'react'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import httpClient from './../services/httpClient'

class Tweets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      consulta: '',
      tweets: []
    }
  }
  
  getTweet = () => {
    let query = this.state.consulta
    query = query.replace("#","%23");
    query = query.replace(" ","%20");
    if(query !== ""){
      httpClient.get('tweets/'+query)
      .then((response) => {
          this.setState({
            tweets: response.statuses.map(tweet => ({texto: tweet.text,id_tweet:tweet.id,screen_name:tweet.user.screen_name,imagen:tweet.user.profile_image_url, valoracion: 0})),
          })
      })
      .catch((error) => {
          console.error(error)
      })
    }
  }

  ratingTweet = (tweet) => {
    httpClient.post('tweets', tweet)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  change = (e) => {
    this.setState({ consulta: e.target.value })
  };

  render() {
    return (
      <div className="wraper-tweet -col-12">
        <div className="row">
          <div className="col-5 offset-3 ">
            <input type="text" className="form-control" placeholder='Escriba palabra a buscar en Twitter' onChange={this.change} />
          </div>
          <div className="col-2">
            <button className="btn btn-info" onClick={() => {this.getTweet()}} >Buscar</button>
          </div>
        </div>
        <div className = 'mt-5'>
        <ul className="mt-5">
          {
            this.state.tweets.map((item, index) => 
              <li className="mt-3" key={index}>
                <div className="row">
                  <div className="col-1 offset-2">
                    <img src={item.imagen} alt="imagen de usuario"></img>
                  </div>
                  <div className="col-6">
                    {item.texto}
                  </div>
                  <div>
                    <Rater total={5} rating={this.state.tweets[index].valoracion} onRate={({rating}) => {
                      const items = this.state.tweets;
                      items[index].valoracion = rating;
                      this.setState({
                        tweets: items,
                      });
                      this.ratingTweet(this.state.tweets[index])
                     }} 
                     />
                  </div>
                </div>
              </li>)
          }
        </ul>
        </div>
      </div>
    )
  }
}

export default Tweets;