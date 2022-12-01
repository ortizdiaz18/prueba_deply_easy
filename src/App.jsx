import { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect } from 'react'
import {getPedidos} from './features/pedidos/pedidosSlice'
import getInfoProducts from './conectionServer/getInfoProducts'
function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()
  const statePedidos = useSelector((state) => state.pedidos.pedidos)
  const stateProducts = useSelector((state) => state.products.productos)

  useEffect( ()=>{
    const getProducts = async () =>{
       let products= await getInfoProducts()
       dispatch(getPedidos(products))
    } ;

    getProducts()
  },[])
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
