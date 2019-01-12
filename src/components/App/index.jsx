import React  from 'react';
import Clock from '../Clock';

class App extends React.Component{
  render() {
    return (
    <div >
      <Clock 
        name="Escobar"
        first="Marcelo"
        frase="Agora em SP"
      />
    </div>
    )
  }
}

export default App;

