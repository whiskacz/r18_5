import { useEffect, useState } from 'react'
import axios from 'axios';
import ToursList from './components/ToursList';



const url = 'https://course-api.com/react-tours-project';



const App = () => {
  
  const [data, setData] = useState([])
  
  let response = []
  
  const onClickChange = () => {
    async function dataDownload () {
      try{
        let response = await axios.get(url)  
        setData(response.data)
      } catch(error) {
        console.log("error")
      }
    }
   dataDownload()

  }

  return (
  <>
    <button onClick={onClickChange}>GET DATA</button>
    <ToursList data={data} />
  </>
)};
export default App;
