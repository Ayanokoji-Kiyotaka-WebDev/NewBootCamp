// Exercise 1: With JSX
import UserFavoriteAnimals from "./components/UserFavoriteAnimals";
import Exercise from './components/Exercise3';
function App() {

const myelement = <h1>I Love JSX!</h1>;
const sum = 5+5


const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};
  return (
    

    <div style={{color:'red', background:'lightblue', textAlign: 'center' }}>  
   <h1>hello world!</h1>
   {myelement}
   <h1>React is {sum}times better with JSX</h1>
   <h3>{user.firstName} {user.lastName}</h3>
   <UserFavoriteAnimals favAnimals={user.favAnimals} /> {}

     <Exercise />

    </div>
   
   
  )
}

export default App
