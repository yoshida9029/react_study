import { useState } from 'react'
import './App.css'
import FormSelect from './compornents/FormSelect'
import Formtextarea from './compornents/FormTextarea'
import FormtRadio from './compornents/FormRadio'
import FormCheck from './compornents/FormCheck'
import FormCheckMulti from './compornents/FormCheckMulti'
import FormFile from './compornents/FormFile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>2026年5月8日</h1>
    <Formtextarea />
    <FormSelect />
    <FormtRadio />
    <FormCheck />
    <FormCheckMulti />
    <FormFile />
    </>
  )
}

export default App
