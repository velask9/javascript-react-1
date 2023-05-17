import React from 'react'
import './Main.css'
import { Header } from './Header'
import { Post } from './Posts'
import { Nav} from './Nav';
import { Footer } from './Footer';


export const Main = () => {
  return (

    <div className='Main'>
      <Header /> 
      <Nav />
      <Post />
      <Footer/>

        
    </div>
  )
}