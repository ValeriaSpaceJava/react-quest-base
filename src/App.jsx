
import './App.css'
import Paragraph from './components/paragraph/paragraph'
import Button from './components/button/Button'


function App() {
    return (
    <>
     
      <Paragraph  id='paragraph' text='Texto usando o método ToUpperCase e props text'/>
      <Button id='btn' label='BAIXAR CV'/> 
      
     
      
      
    </>
  )
}

export default App
