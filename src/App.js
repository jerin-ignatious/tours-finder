import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async() => {
    setIsLoading(true);
    const resp = await fetch(url);
    const tours = await resp.json();
    console.log(tours);
  };

  useEffect(() => {
    fetchTours();
  }, [])

  if(isLoading){
    return <main>
      <Loading/>
    </main>
  }
  return <main>
    <Tours/>
  </main>
}

export default App
