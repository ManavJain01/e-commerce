import {useEffect} from 'react'

function Main(){
  const url = 'https://indian-pharmacy-chemists-and-drugstores.p.rapidapi.com/chemist/';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '63459884abmsh5347eb12ef80128p103053jsn52119cfcefe1',
      'X-RapidAPI-Host': 'indian-pharmacy-chemists-and-drugstores.p.rapidapi.com'
    }
  };

  useEffect(()=>{
    async function fetchAPI(){
      try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }

    fetchAPI();
  },[])

  return(
    <>
      <div className="bg-blue-100 min-w-[100vw] min-h-[60vh]"></div>
    </>
  )
}

export default Main;