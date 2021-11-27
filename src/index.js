import React from 'react'
import  ReactDOM  from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Footer from './Footer'
import App from './App'
import './style.css'

ReactDOM.render(
    <BrowserRouter>
     <React.StrictMode>
        <App/>
        <Footer/>
    </React.StrictMode>
    </BrowserRouter>, document.getElementById('root')
   
)