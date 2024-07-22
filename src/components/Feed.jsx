import React, { useState,useEffect } from 'react'


function Feed() {
  const [feedData,setFeedData]=useState([])


    useEffect(()=>{

        fetch('https://api.pexels.com/v1/search?query=people',{
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
         setFeedData(data.photos)
        //  setLoading(false)
       })
       .catch((error)=>{
         console.log(error,"error")
       })
     },[])
  

     if (!feedData) return <div>Loading...</div>;
    return (
        <>
            <div className="posts  overflow-y-auto no-scrollbar border-b-2">
             {  
                feedData.map((elm,indx)=>{
                    return(
                        <>
                        <div className="post ">
                           <div className="postDetails w-full py-1 flex gap-3 items-center px-2">
                             <img className='w-10 h-10 object-cover rounded-full' src={elm.src.tiny} alt="" />
                             <div className="name text-sm font-medium">{elm.photographer}</div>
                           </div>
                         <div className="postContent">
                            <img src={elm.src.medium} alt="" />
                         </div>
                         <div className="postIcon w-full py-2 flex px-3 items-center justify-between bg-white">
                            <div className="leftIcons flex gap-2">
                            <svg className='text-red-700' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor "><path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M7.29117 20.8242L2 22L3.17581 16.7088C2.42544 15.3056 2 13.7025 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.2975 22 8.6944 21.5746 7.29117 20.8242ZM7.58075 18.711L8.23428 19.0605C9.38248 19.6745 10.6655 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 13.3345 4.32549 14.6175 4.93949 15.7657L5.28896 16.4192L4.63416 19.3658L7.58075 18.711Z"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M1.94607 9.31543C1.42353 9.14125 1.4194 8.86022 1.95682 8.68108L21.043 2.31901C21.5715 2.14285 21.8746 2.43866 21.7265 2.95694L16.2733 22.0432C16.1223 22.5716 15.8177 22.59 15.5944 22.0876L11.9999 14L17.9999 6.00005L9.99992 12L1.94607 9.31543Z"></path></svg>
                            </div>
                            <div className="rightIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2ZM18 4H6V19.4324L12 15.6707L18 19.4324V4Z"></path></svg>
                            </div>
                         </div>
                         <div className='w-full py-2 px-3'>
                            <p className='likes text-sm'>{`${elm.height} likes`}</p>
                            <p className='postDescription text-sm'>{elm.alt}</p>
                            <p className='comments text-sm'>view all 78 comments</p>
                         </div>
                        </div>
                        </>
                    )
                })
             }

              {/*  */}
              {/* <div className="post">
                <div className="postDetails w-full py-1 flex gap-3 items-center px-2">
                    <img className='w-10 h-10 object-cover rounded-full' src="https://media.licdn.com/dms/image/D4E35AQGlpNhaNcumJQ/profile-framedphoto-shrink_200_200/0/1711606291231?e=1716537600&v=beta&t=vrB6JVNusRw-lHOgu5r9BaQi1A8li7sFNztopRul5yw" alt="" />
                    <div className="name text-sm font-medium">tariq4nn</div>
                </div>
                <div className="postContent">
                    <img src="https://plus.unsplash.com/premium_photo-1714229505201-072ef1c6edcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className="postIcon w-full flex px-3 py-2 items-center justify-between bg-white">
                    <div className="leftIcons flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M7.29117 20.8242L2 22L3.17581 16.7088C2.42544 15.3056 2 13.7025 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.2975 22 8.6944 21.5746 7.29117 20.8242ZM7.58075 18.711L8.23428 19.0605C9.38248 19.6745 10.6655 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 13.3345 4.32549 14.6175 4.93949 15.7657L5.28896 16.4192L4.63416 19.3658L7.58075 18.711Z"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M1.94607 9.31543C1.42353 9.14125 1.4194 8.86022 1.95682 8.68108L21.043 2.31901C21.5715 2.14285 21.8746 2.43866 21.7265 2.95694L16.2733 22.0432C16.1223 22.5716 15.8177 22.59 15.5944 22.0876L11.9999 14L17.9999 6.00005L9.99992 12L1.94607 9.31543Z"></path></svg>
                    </div>
                    <div className="rightIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2ZM18 4H6V19.4324L12 15.6707L18 19.4324V4Z"></path></svg>
                    </div>
                </div>
                <div className='w-full py-2   px-3'>
                    <p className='likes text-sm'>5239 likes</p>
                    <p className='postDescription text-sm'>Lorem ipsum dolor sit amet.</p>
                    <p className='comments text-sm'>view all 78 comments</p>
                </div>
              </div>

              <div className="post">
                <div className="postDetails w-full py-1 flex gap-3 items-center px-2">
                    <img className='w-10 h-10 object-cover rounded-full' src="https://media.licdn.com/dms/image/D4E35AQGlpNhaNcumJQ/profile-framedphoto-shrink_200_200/0/1711606291231?e=1716537600&v=beta&t=vrB6JVNusRw-lHOgu5r9BaQi1A8li7sFNztopRul5yw" alt="" />
                    <div className="name text-sm font-medium">tariq4nn</div>
                </div>
                <div className="postContent">
                    <img src="https://plus.unsplash.com/premium_photo-1708633003240-569a6135deaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDl8fHxlbnwwfHx8fHw%3D" alt="" />
                </div>
                <div className="postIcon w-full flex px-3 py-2 items-center justify-between bg-white">
                    <div className="leftIcons flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M7.29117 20.8242L2 22L3.17581 16.7088C2.42544 15.3056 2 13.7025 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.2975 22 8.6944 21.5746 7.29117 20.8242ZM7.58075 18.711L8.23428 19.0605C9.38248 19.6745 10.6655 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 13.3345 4.32549 14.6175 4.93949 15.7657L5.28896 16.4192L4.63416 19.3658L7.58075 18.711Z"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M1.94607 9.31543C1.42353 9.14125 1.4194 8.86022 1.95682 8.68108L21.043 2.31901C21.5715 2.14285 21.8746 2.43866 21.7265 2.95694L16.2733 22.0432C16.1223 22.5716 15.8177 22.59 15.5944 22.0876L11.9999 14L17.9999 6.00005L9.99992 12L1.94607 9.31543Z"></path></svg>
                    </div>
                    <div className="rightIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2ZM18 4H6V19.4324L12 15.6707L18 19.4324V4Z"></path></svg>
                    </div>
                </div>
                <div className='w-full py-2  px-3'>
                    <p className='likes text-sm'>5239 likes</p>
                    <p className='postDescription text-sm'>Lorem ipsum dolor sit amet.</p>
                    <p className='comments text-sm'>view all 78 comments</p>
                </div>
              </div> */}
              <div className='h-16 w-full'></div>
            </div>
        </>
    )
}

export default Feed
