import React from 'react';
import book from "../../assets/img/book.png";
import "./Home.scss";

export const Home = () => {
  return (
    <div className='home'>
    <img className="book" src={book}/>
    </div>
  )
}

export default Home