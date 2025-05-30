import './App.css'
import WorldCustomChart from './components/react-google-chart'

function App() {

  return (
    <div className='w-screen h-screen'>
      {/* <div className="z-1 fixed top-0 overlay w-full h-full bg-slate-600 opacity-40">

      </div> */}
      <div className="z-2 fixed top-5 left-5 bg-white p-2 m-2 shadow-xl rounded-full flex justify-center">
        <h2 className='m-2 text-3xl font-bold text-center text-slate-600'>World Stats Chart</h2>
      </div>
      <WorldCustomChart/>
    </div>
  )
}

export default App
