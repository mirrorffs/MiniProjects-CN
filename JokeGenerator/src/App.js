import "./styles.css";
import useFetch from "./useFetch";

export default function App() {
  const url = "https://api.chucknorris.io/jokes/random?category=dev";
  // Use the custom hook here
  const {joke,isLoading,error, getJoke} = useFetch()
  // Display loading text here
  if(isLoading){
    return(<h1>loading</h1>)
  }
  // Display something went wrong here
  if(error){
    return(<h1>{error}</h1>)
  }

  

  return (
    <div className="App">
      <h1>Joke Generator</h1>
      <h2>{joke}</h2>
      <button onClick={getJoke} className="btn">New Joke</button>
    </div>
  );
}
