import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data';
import './App.css';

function App() {

  const cards = data.map( card => {
    return (
      <Card 
        key = {card.id}
        {...card}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <section id='main'>
        {cards}
      </section>
    </div>
  );
}

export default App;
