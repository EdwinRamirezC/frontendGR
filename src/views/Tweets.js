import React from 'react'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import httpClient from './../services/httpClient'

class Tweets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: 0,
      hashtag: 'medellin',
      tweets: []
    }
  }
  
  getTweet = () => {
      httpClient.get('tweets/'+this.state.hashtag)
      .then((response) => {
          this.setState({
            tweets: response.statuses.map(tweet => ({texto: tweet.text,id_tweet:tweet.id,screen_name:tweet.user.screen_name,imagen:tweet.user.profile_image_url, rating: 0})),
          })
      })
      .catch((error) => {
          console.error(error)
      })
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
    this.setState({ hashtag: e.target.value })
  };

  render() {
    return (
      <div className="wraper-tweet">
        <div className="row">
          <div className="col-4 text-right">
            <label><strong>Hashtag</strong></label>
          </div>
          <div className="col-7">
            <input type="text" className="form-control" onChange={this.change} />
          </div>
          <div className="col-1">
            <button className="btn btn-info" onClick={() => {this.getTweet()}} >Buscar</button>
          </div>
        </div>

        <ul className="mt-5">
          {
            this.state.tweets.map((item, index) => 
              <li className="mt-3" key={index}>
                <div className="row">
                  <div className="col-1">
                    <img src={item.imagen}></img>
                  </div>
                  <div className="col">
                    {item.texto}
                  </div>
                  <div className="2">
                    <Rater total={5} rating={this.state.tweets[index].rating} onRate={({rating}) => {
                      const items = this.state.tweets;
                      items[index].rating = rating;
                      this.setState({
                        tweets: items,
                      });
                      this.ratingTweet(this.state.tweets[index])
                     }} />
                  </div>
                </div>
              </li>)
          }
        </ul>
      </div>
    )
  }
}

export default Tweets;