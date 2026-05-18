
import './App.css'
import HookTimer from './components/HookTimer/HookTimer'
import StateEffect from './components/StateEffect/Stateeffect'

function App() {


  return (
    <>
    <h1>Vite+React初期状態</h1>
    <StateEffect init={0} />
    <HookTimer init={10} />
    </>
  )
}

export default App
