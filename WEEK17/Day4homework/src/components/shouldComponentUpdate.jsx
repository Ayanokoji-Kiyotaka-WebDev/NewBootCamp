import { Component } from "react";

class ColorChanger extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            favoriteColor: 'red',
        };
    }

    handleClick = () => {
    this.setState({favoriteColor: 'blue'})
}

    
    shouldComponentUpdate() {
     return  true 
    }

 componentDidMount() {
  setTimeout(() => {
    this.setState({ favoriteColor: 'yellow' });
  }, 2000); 
    }
    
 getSnapshotBeforeUpdate(prevProps, prevState) {
  console.log('in getSnapshotBeforeUpdate');
  return null; 
}
    render() {
        
        return (
            <div>
              
                <h1 style={{ border: '1px solid grey', padding: '10px' }}></h1>
            <button onClick={this.handleClick}> CHANGE COLOR</button>
                </div>
        )
    }



}
export default ColorChanger;

