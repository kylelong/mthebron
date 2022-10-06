import React from 'react';
import church from './mthebron.png';
import Events from './Events';
import Scripture from './Scripture';
import Menu from './Menu';
import Footer from './Footer';

const Home = () => {


  return (
    <div className="container">

        <Menu />

        <div>
          <img src={church} alt="church" className="churchImg" />
        </div>
        <Scripture />
        <Events />

        <Footer />

    </div>
  )
}

export default Home;