
import { lazy, Profiler, Suspense } from 'react'
import './App.css'
import Loading from './components/Loading/Loading';
import Counter from './components/Counter/Counter';
// import Profile from './components/Profile/Profile'


const Profile =lazy(() => import('./components/Profile/Profile'));

function App() {


  return (
    <>
    <h1>組み込みコンポーネント</h1>
    <Profiler id='App' onRender={handleRender}>
      <Counter />
    </Profiler>

    <Suspense fallback={<Loading />}>
      <Profile />
    </Suspense>
    

    </>
  )
}

function handleRender(id , phase , actualDuretion){
  console.log('測定対象' , id);
  console.log('描画の種類' , phase);
  console.log('描画にかかった時間' , actualDuretion);
  
}

export default App
