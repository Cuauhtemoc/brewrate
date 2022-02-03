import logo from './logo.svg';
import {LargeCard, SmallCard} from './components/Cards'
import './App.css';
import { useState } from 'react';

function App() {
  const cardNames = ["Cuauh","Peter", "Chuy"]
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)} >
          Click Me
      </button>
      {cardNames.map(card => {
        return <SmallCard cardName={`${card}'s card ${count}`} />
      })}
      <LargeCard />
    </div>
  );
}

export default App;
