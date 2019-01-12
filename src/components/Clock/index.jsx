import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        console.log('Passou no constructor');
        this.state = {
            time: new Date().toLocaleString(), 
        };
        
    }

    componentWillMount() {
        console.log('component vai montar');
    }

    componentDidMount() {
        console.log('component montou');
        setInterval( () => {
            this.setState({
            time: new Date().toLocaleString(), 
            })
        }, 1000);
    }

    render() {
        console.log('renderizou');
        const name = this.props.name;
        const frase = this.props.frase;
        const time = this.state.time;
        return(
            <div>
              <h1>{name}!</h1>
              <h2>{frase}</h2>
              <h3>{time}</h3>
            </div>
        );
    }    
}

//const Clock = function() {

// abaixo arrow function comparando com acima
// const Clock = () => {
// return <h1>React is cool!3</h1>
// }

// versão resumida do codigo acima
//const Clock = () => <h1>React is cool!4</h1>;
    
export default Clock;