import React, { useEffect, useState } from 'react'
import {RiAddCircleLine} from "@remixicon/react"



function Stories() {

  const [storiesPerson,setStoriesPerson]=useState([])
  const [storyIndex,setStoryIndex]=useState([])
  const [openStory,setOpenStory]=useState("hidden")
  

  
  
  // const [loading,setLoading]=useState(true)
 

  useEffect(()=>{
    
    
    fetch('https://api.pexels.com/v1/search?query=people/page=1',{
      // https://api.pexels.com/v1/search?query=people
      headers:{
        Authorization: 'Ug1CQBIbEqcw4f21rXYTh6jKISOr1pio8kmWCfkgiCaEw6e9A2mmn7WZ'  
      },
    })
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      // console.log(data)
      // console.log(data.photos[0].src.medium)
      setStoriesPerson(data.photos)
      // setLoading(false)
    })
    .catch((error)=>{
      console.log(error,"error")
    })
    
    

    // fetch('https://api.pexels.com/v1/search?query=models/page=2',{
    //   // https://api.pexels.com/v1/search?query=people
    //   headers:{
    //     Authorization: 'Ug1CQBIbEqcw4f21rXYTh6jKISOr1pio8kmWCfkgiCaEw6e9A2mmn7WZ'  
    //   },
    // })
    // .then((res)=>{
    //   return res.json()
    // })
    // .then((data)=>{
    //   // console.log(data)
    //   // console.log(data.photos[0].src.medium)
    //   setStoriesPerson(data.photos)
    //   // setLoading(false)
    // })
    // .catch((error)=>{
    //   console.log(error,"error")
    // })
  },[])


 

  // Handle story function
 function handleStory(dets){
  // setLoading(true)
  setOpenStory("block")
  setStoryIndex(storiesPerson[dets.target.id].src.large)
  
  setTimeout(()=>{
    setOpenStory("hidden")
  },3000)
 }
console.log(storiesPerson)

// client.photos.search({ query, per_page: 1 }).then(photos => {console.log(photos)});
 if (!storiesPerson) return <div>Loading...</div>;
    return (
        <>
        
            <div className="stories pt-10 pb-2 mt-10 w-full md:h-28 px-4 flex items-center gap-5 border-b-2 overflow-x-auto no-scrollbar bg-[#F9F9F9]">
            <div className="yourStory  w-[22%] flex items-center flex-col relative">
               <img className='w-14 h-14 object-cover rounded-full' src="https://i.pinimg.com/236x/7a/b4/b4/7ab4b43aee2819e10756c332c2914b22.jpg" alt="" />
               <RiAddCircleLine className='absolute top-[47%] left-[60%] text-base bg-[#0098F6] text-white rounded-full'/>
               <p className='name text-xs font-semibold mt-2'>Your story</p>
            </div>
            <div className="otherStories w-[78%] flex gap-5">
              {storiesPerson.map((elem,idx)=>{
                return(
                  <>
                      <div className="story" id={elem.id}>
                       <img  onClick={handleStory} id={idx} className='w-16 h-14 object-cover rounded-full border-2 border-[#CD2827]' src={elem.src.tiny} alt="" />
                        <p className='name text-xs mt-2'>kakzmi_jn..</p>
                      </div>   
                  </>
                )
              })}


              
               {/* <div className="story">
                 <img className='w-16 h-14 object-cover rounded-full border-2 border-[#CD2827]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuIoQzr6KWfKhnAdsdIOoJ50oIV2tTkaJbYA&s" alt="" />
                 <p className='name text-xs mt-2'>Sakina_ka..</p>
               </div>
               <div className="story">
                 <img className='w-16 h-14 object-cover rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQUUI5sx75DvgkYomWTqqrRwdYCZ-ROFGUfw&s" alt="" />
                 <p className='name text-xs mt-2'>Sakina_ka..</p>
               </div>
               <div className="story">
                 <img className='w-16 h-14 object-cover rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuIoQzr6KWfKhnAdsdIOoJ50oIV2tTkaJbYA&s" alt="" />
                 <p className='name text-xs mt-2'>Sakina_ka..</p>
               </div>
               <div className="story">
                 <img className='w-16 h-14 object-cover rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuIoQzr6KWfKhnAdsdIOoJ50oIV2tTkaJbYA&s" alt="" />
                 <p className='name text-xs mt-2'>Sakina_ka..</p>
               </div>
               <div className="story">
                 <img className='w-16 h-14 object-cover rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuIoQzr6KWfKhnAdsdIOoJ50oIV2tTkaJbYA&s" alt="" />
                 <p className='name text-xs mt-2'>Sakina_ka..</p>
               </div>
               <div className="story">
                 <img className='w-16 h-14 object-cover rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuIoQzr6KWfKhnAdsdIOoJ50oIV2tTkaJbYA&s" alt="" />
                 <p className='name text-xs mt-2'>Sakina_ka..</p>
               </div>
               <div className="story">
                 <img className='w-16 h-14 object-cover rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuIoQzr6KWfKhnAdsdIOoJ50oIV2tTkaJbYA&s" alt="" />
                 <p className='name text-xs mt-2'>Sakina_ka..</p>
               </div> */}
               </div>
            </div>
            <div className={`openedStory w-full h-screen  absolute left-0 top-0 z-10 ${openStory}`}>
                {
                  storiesPerson.map((data,indx)=>{
                    // console.log(data,indx)
                    return(
                      <>
                        <div  className={`story w-full h-screen bg-black relative`}>
                          {/* <div className='w-full h-[2px] bg-white/20 absolute top-10'></div>
                          <div style={{transition:"0.5s"}} className={`w-[${progress}%] h-[2px] bg-white/80 absolute top-10`}></div> */}


                          <img  className='w-full h-screen object-cover' id={indx}  src={storyIndex} alt="" />
                        </div>
                      </>
                    )
                  })
                }
            </div>
        </>
    )
}

export default Stories
