import { useEffect, useState } from "react";

// Complete this hook

const useFetch = () => {
  const [joke,setJoke] = useState()
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  // Function to get joke
  useEffect(()=>{
    getJoke()
  },[])
  const getJoke = async () => {
    setIsLoading(true)
    setError(null)
    try{
      let res= await fetch('https://api.chucknorris.io/jokes/random?category=dev')
      let data= await res.json()
      setJoke(data.value)
      setIsLoading(false)
      
    }catch(error){  
      console.log("Error fetching joke:", error);
      setError('Something went wrong')
    }
  };

  return {joke,isLoading,error,getJoke}
};

export default useFetch;
