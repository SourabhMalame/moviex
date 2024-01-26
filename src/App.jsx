
import { useEffect } from 'react'
import './App.css'
import { featchDataFromApi } from './utils/api'
import { useDispatch, useSelector } from 'react-redux';
import { getApiConfiguration } from './store/homeSlice';

function App() {

  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home)

  useEffect(() => {
    apiTesting();
  }, [])

  const apiTesting = () => {
    featchDataFromApi('/movie/popular')
      .then((res) => {
        console.log(res)
        dispatch(getApiConfiguration(res))
      })
  }


  return (
    <>
      <h1>App</h1>
      {url?.total_pages}
    </>
  )
}

export default App
