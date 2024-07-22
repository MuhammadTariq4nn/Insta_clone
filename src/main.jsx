import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import AccountPage from './Pages/AccountPage.jsx'
import Search from './Pages/Search.jsx'
import PersonalFeed from './Pages/PersonalFeed.jsx'
import SignIn from './Pages/SignIn.jsx'
import SignUp from './Pages/SignUp.jsx'
import { ContextDataProvider } from './ContextApiData/FirebaseContext.jsx'
import MainPage from './Pages/MainPage.jsx'



const router=createBrowserRouter(
  createRoutesFromElements(
    <Route>
       {/* <Route path='/' element={<App/>}/> */}
       <Route path='/' element={<App/>}/>
       <Route path='/signup' element={<SignUp/>}/>
       <Route path='/account' element={<AccountPage/>}/>
       <Route path='/search' element={<Search/>}/>
       <Route path='/personalFeed' element={<PersonalFeed/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
       <ContextDataProvider>
         <RouterProvider router={router}/>
       </ContextDataProvider>
    
  </React.StrictMode>
)
