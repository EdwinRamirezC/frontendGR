import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Tweets from './Tweets'
// import About from './About'

const Main = () => (
  <main className="mt-5">
    <Switch>
      <Route exact path='/' component={Tweets}/>
      {/* <Route path='/about' component={About}/> */}
    </Switch>
  </main>
)

export default Main