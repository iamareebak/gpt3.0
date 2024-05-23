// rafce react codesnipets sy inteelisence k zaruye auto generate hota.
//  rafce

import React from 'react';
import './App.css';

import { Article, Brand, Cta, Feature, Navbar } from './components';
import{ Blog, Features, Footer,Header, Possibility, Whatgpt3 } from './containers';

const App = () => {
  return (
    <div className = "App">
      <div className = "gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatgpt3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App