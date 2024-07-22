import React from 'react'
import UpperNav from '../components/UpperNav'
import Stories from '../components/Stories'
import instaLogo from '../assets/instaLogo.png'
import Feed from '../components/Feed'
import LowerNav from '../components/LowerNav'


function MainPage() {

    return (
        <>
          <main className='w-full h-screen flex md:items-center md:justify-center '>
             <div className="main w-full h-screen md:border md:w-2/6">
              {/* <AccountPage/> */}
              {/* <Search/> */}

              <UpperNav pic={instaLogo}/>
              
              <Stories/>
              <Feed/>
              {/* <Outlet/> */}
              <LowerNav className="bg-red-300"/>
             </div>
          </main>
        </>
    )
}

export default MainPage
