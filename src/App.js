import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState([]);
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
