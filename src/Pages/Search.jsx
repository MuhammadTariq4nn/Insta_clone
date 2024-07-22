import React, { useState,useEffect } from 'react'
import LowerNav from '../components/LowerNav'


function Search() {
    const [searchedData,setSearchedData]=useState([]);
    const [search,setSearch]=useState("")
    console.log(search)
    
    
    // Handle Search Function
    // const handleSearch=(e)=>{
    //   setSearch(e.target.value)
    // }


    useEffect(()=>{

        fetch(`https://api.pexels.com/v1/search?query=${search}`,{
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
         setSearchedData(data.photos)
        //  setLoading(false)
       })
       .catch((error)=>{
         console.log(error,"error")
       })
     },[search])
//   console.log(searchData)

     if (!searchedData) return <div>
        <div className="uppernavSearch bg-white w-full md:w-2/6 z-10 fixed top-0 px-3  flex items-center justify-between pt-6 pb-1 border-b">
          <input onChange={(e)=>setSearch(e.target.value)} className='w-full py-[2px]  px-2 border-2 rounded' type="text" placeholder="search" />
        </div>
        <LowerNav/>
     </div>   
    return (
       <>
        <div className="search md:flex md:flex-col md:items-center md:justify-center">
            
         <div className="uppernavSearch bg-white w-full md:w-2/6 z-10 fixed top-0 px-3  flex items-center justify-between h-12 border-b">
            <input onChange={(e)=>setSearch(e.target.value)} className='w-full py-[2px]  px-2 border-2 rounded' type="text" placeholder="search" />
         </div>   
         <div className="searchDisplay w-full md:w-2/6 mt-14 px-2 overflow-y-auto no-scrollbar ">
            {
                searchedData.map((data,index)=>{
                    return(
                        <>
                        <div className="searchDisplayItem py-2 px-2 flex gap-3">
                           <img className='h-12 w-12 object-cover rounded-full' src={data.src.tiny} alt="" />
                          <div className="names">
                            <h1 className='userNames text-sm font-medium'>{data.photographer.split(" ")[0]}</h1>
                            <p className='actualName text-sm'>{data.photographer}</p>
                          </div>
                        </div>
                        </>
                    )
                })
            }

            <div className="searchDisplayItem py-2 px-2 flex gap-3">
               <img className='h-12 w-12 object-cover rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqv0yhmgYRdl3waFAwUcvh7bVG39Rh82nIKw&s" alt="" />
                <div className="names">
                    <h1 className='userNames text-sm font-medium'>tariqkh4nn</h1>
                    <p className='actualName text-sm'>Muhammad Tariq</p>
                </div>
            </div>

            <div className="searchDisplayItem py-2 px-2 flex gap-3">
               <img className='h-12 w-12 object-cover rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqv0yhmgYRdl3waFAwUcvh7bVG39Rh82nIKw&s" alt="" />
                <div className="names">
                    <h1 className='userNames text-sm font-medium'>tariqkh4nn</h1>
                    <p className='actualName text-sm'>Muhammad Tariq</p>
                </div>
            </div>

            <div className="searchDisplayItem py-2 px-2 flex gap-3">
               <img className='h-12 w-12 object-cover rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqv0yhmgYRdl3waFAwUcvh7bVG39Rh82nIKw&s" alt="" />
                <div className="names">
                    <h1 className='userNames text-sm font-medium'>tariqkh4nn</h1>
                    <p className='actualName text-sm'>Muhammad Tariq</p>
                </div>
            </div>

            <div className="searchDisplayItem py-2 px-2 flex gap-3">
               <img className='h-12 w-12 object-cover rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqv0yhmgYRdl3waFAwUcvh7bVG39Rh82nIKw&s" alt="" />
                <div className="names">
                    <h1 className='userNames text-sm font-medium'>tariqkh4nn</h1>
                    <p className='actualName text-sm'>Muhammad Tariq</p>
                </div>
            </div>

            <div className="searchDisplayItem py-2 px-2 flex gap-3">
               <img className='h-12 w-12 object-cover rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqv0yhmgYRdl3waFAwUcvh7bVG39Rh82nIKw&s" alt="" />
                <div className="names">
                    <h1 className='userNames text-sm font-medium'>tariqkh4nn</h1>
                    <p className='actualName text-sm'>Muhammad Tariq</p>
                </div>
            </div>

            <div className="searchDisplayItem py-2 px-2 flex gap-3">
               <img className='h-12 w-12 object-cover rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqv0yhmgYRdl3waFAwUcvh7bVG39Rh82nIKw&s" alt="" />
                <div className="names">
                    <h1 className='userNames text-sm font-medium'>tariqkh4nn</h1>
                    <p className='actualName text-sm'>Muhammad Tariq</p>
                </div>
            </div>

            <div className="searchDisplayItem py-2 px-2 flex gap-3">
               <img className='h-12 w-12 object-cover rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqv0yhmgYRdl3waFAwUcvh7bVG39Rh82nIKw&s" alt="" />
                <div className="names">
                    <h1 className='userNames text-sm font-medium'>tariqkh4nn</h1>
                    <p className='actualName text-sm'>Muhammad Tariq</p>
                </div>
            </div>

            <div className="searchDisplayItem py-2 px-2 flex gap-3">
               <img className='h-12 w-12 object-cover rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqv0yhmgYRdl3waFAwUcvh7bVG39Rh82nIKw&s" alt="" />
                <div className="names">
                    <h1 className='userNames text-sm font-medium'>tariqkh4nn</h1>
                    <p className='actualName text-sm'>Muhammad Tariq</p>
                </div>
            </div>

            <div className="searchDisplayItem py-2 px-2 flex gap-3">
               <img className='h-12 w-12 object-cover rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqv0yhmgYRdl3waFAwUcvh7bVG39Rh82nIKw&s" alt="" />
                <div className="names">
                    <h1 className='userNames text-sm font-medium'>tariqkh4nn</h1>
                    <p className='actualName text-sm'>Muhammad Tariq</p>
                </div>
            </div>

            <div className="searchDisplayItem py-2 px-2 flex gap-3">
               <img className='h-12 w-12 object-cover rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqv0yhmgYRdl3waFAwUcvh7bVG39Rh82nIKw&s" alt="" />
                <div className="names">
                    <h1 className='userNames text-sm font-medium'>tariqkh4nn</h1>
                    <p className='actualName text-sm'>Muhammad Tariq</p>
                </div>
            </div>
         </div>
         <div className='h-16 w-full'></div>
            <LowerNav/>
        </div>
       </> 
    )
}

export default Search
