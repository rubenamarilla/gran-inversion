import './App.css';
import PersonCard from './components/personCard';

function App() {
  return (
    <div>
      <PersonCard name={"Jane"} lastName={"Doe"} age={"45"} hairColor={"Gray"}/>
      <PersonCard name={"John"} lastName={"Smith"} age={"18"} hairColor={"Brown"}/>
      <PersonCard name={"Millard"} lastName={"Fillmore"} age={"25"} hairColor={"Black"}/>
      <PersonCard name={"Maria"} lastName={"Smith"} age={"36"} hairColor={"Blonde"}/>
    </div>
    
  );
}

export default App;
