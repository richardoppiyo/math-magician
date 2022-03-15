/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
// import Calculator from './components/Calculator';

// export default function App() {
//   return (
//     <Calculator />
//   );
// }

class App extends React.Component {
  render() {
    return (
      <Calculator />
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header"> */}
//       <h1>Say hello</h1>
//       {/* <Calculator /> */}
//       {/* <Calculator /> */}
//       {/* </header> */}
//       {/* <Calculator /> */}
//     </div>
//   );
// }

export default App;
