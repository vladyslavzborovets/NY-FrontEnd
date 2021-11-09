
import { useState, useEffect } from 'react'
import axios from 'axios'
import Forms from './components/Forms'


const App = () => {

  // Component declarations
  let [forms, getForms] = useState('')


  return(
      <div class="container">
        <h1 id="page-title">Best places in NY</h1>
        <h3 id="tagline">Add your favs here</h3>
      </div>
    )
}

export default App

