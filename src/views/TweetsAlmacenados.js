import React from 'react'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import httpClient from './../services/httpClient'

class TweetsAlmacenados extends React.Component 
{

    constructor(props)
    {
        super(props)
        this.state = {
            tweets:[]
        }
        this.obtenerValoraciones()
    }
    obtenerValoraciones(){
        httpClient.get('obtenerValoraciones')
        .then((response) => {
            if(Array.isArray(response)){
                this.setState({
                    tweets: response.map(tweet => ({
                        texto: tweet.texto,
                        id_tweet:tweet.id_tweet,
                        screen_name:tweet.screen_name,
                        imagen:tweet.imagen,
                        valoracion: parseInt(tweet.valoracion, 10)
                    })),
                })
            }
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
    render() {
        return (
            
          <div className="wraper-tweet -col-12">
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
                        }} />
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
export default TweetsAlmacenados 