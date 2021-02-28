import React, { useState } from 'react';
import Titler from './Titler';
import Clicker from './Clicker';

function App() {
  const [count, setCount] = useState(0);
  const [occupantLimit] = useState(10);
  const zeroChecker = (num) => {
    if(num<0){
      return 0;
    }
    return num;
  }
  const isTooMany = (num) =>{
    if(num>occupantLimit){
      return occupantLimit;
    }
    return num;
  }
  return (
    <div className="App">
      <Titler count={count} occupantLimit={occupantLimit}/>
      <Clicker clickAction={() => setCount(isTooMany(count+1))} clickTitle="Increment Counter"/>
      <Clicker clickAction={() => setCount(zeroChecker(count-1))} clickTitle="Decrement Counter"/>
    </div>
  );
}

export default App;
