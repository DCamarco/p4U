import { React, useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import Example from './components/Example';
import States from './components/States';


function App() {

  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello World!</h1>
      <Example />
    </>
  );
}

export default App;
