import React from 'react'
import Header from './layout/Header'
import Main from './../../views/Main'

const Dashboard = () => (
  <div>
    <div className = 'siempreTop'> <Header /></div>
   
    <div className="container-fluid contenido">
      <Main />
    </div>
  </div>
)

export default Dashboard