import { useEffect, useState } from 'react'
import axios from 'axios';
import ToursList from './components/ToursList';



const url = 'https://course-api.com/react-tours-project';



const App = () => {
  
  const [data, setData] = useState([])
  
  const removeTour = (id) => {
    const newArray = data.filter((element) => element.id !== id )
    setData(newArray)

  }
  
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
  <div style={{
    width:"100vw",
    height:"100vh"
  }}>
    {data.length < 1  && <button style={{
      top:"50%",
      left:"50%",
      transform:"translate(-50%,-50%)",
      position:"absolute"
    }} onClick={onClickChange}>GET DATA</button>}
    <ToursList data={data} removeTour={removeTour}/>
  </div>
)};
export default App;
