import './App.css'
import { useData } from './ContextApiData/FirebaseContext';

import MainPage from './Pages/MainPage';
import SignIn from './Pages/SignIn';

function App() {
  const Data=useData()
  console.log(Data.user,"app wala")

  if(Data.user != null){
      return(
        <>
         <MainPage/>
        </>
      )
  }
  return (
    
    <>
      
      <SignIn/>
      
    </>
  )
}

export default App
