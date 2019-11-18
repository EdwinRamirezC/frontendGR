import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Tweets from './Tweets'
import tweetsAlmacenados from './TweetsAlmacenados'
// import About from './About'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Tweets}/>
      <Route path='/tweets' component={tweetsAlmacenados}/>
    </Switch>
  </main>
)

export default Main