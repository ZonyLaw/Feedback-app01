import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/shared/card'


function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>About This app</h1>
        <p>This is a React app to leave feedback for a product</p>
        <p>
          <Link to='/'>Back To Home</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage
