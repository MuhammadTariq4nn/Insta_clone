import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import LowerNav from '../components/LowerNav'

function AccountPage() {
  const [accountData,setaccountData]=useState([])


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
       setaccountData(data.photos)
      //  setLoading(false)
     })
     .catch((error)=>{
       console.log(error,"error")
     })
   },[])


   if (!accountData) return <div>Loading...</div>;
    return (
       <>
         <div className='search md:flex md:flex-col md:items-center md:justify-center'>
         <nav className='md:w-2/6 '>
         {/* <div className="uppernav bg-white w-full md:w-2/6 z-10 fixed top-0 py-1 px-3 pt-1 flex items-center justify-between h-12 border-b-2"> */}
         <div className="uppernav bg-white pt-2 w-full md:w-2/6 z-10 fixed top-0 py-1 px-3  flex items-center justify-between py-2 border-b-2">
            <div className="instalogo">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
               <path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z">
              </path></svg>
            </div>
             <p className='username text-sm font-medium'>tariqkh4nn</p>
            <div className="icons flex gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M12.1835 1.41016L12.1822 1.41016C9.09012 1.43158 6.70036 2.47326 5.09369 4.51569C3.66581 6.33087 2.93472 8.86436 2.91016 12.0068V12.0082C2.93472 15.1508 3.66586 17.6696 5.09369 19.4847C6.70043 21.5271 9.10257 22.5688 12.1946 22.5902H12.1958C14.944 22.5711 16.8929 21.8504 18.4985 20.2463C20.6034 18.1434 20.5408 15.5048 19.8456 13.8832C19.3163 12.6493 18.2709 11.6618 16.8701 11.0477C16.6891 8.06345 15.0097 6.32178 12.2496 6.30415C10.6191 6.29409 9.14792 7.02378 8.24685 8.39104L9.90238 9.5267C10.4353 8.71818 11.2789 8.32815 12.2371 8.33701C13.6244 8.34586 14.5362 9.11128 14.7921 10.4541C14.02 10.3333 13.1902 10.2982 12.3076 10.3488C9.66843 10.5008 7.9399 12.061 8.05516 14.2244C8.17571 16.4862 10.367 17.7186 12.4476 17.605C14.9399 17.4684 16.4209 15.6292 16.7722 13.2836C17.3493 13.6575 17.7751 14.1344 18.0163 14.6969C18.4559 15.7222 18.4838 17.4132 17.1006 18.7952C15.8838 20.0108 14.4211 20.5407 12.1891 20.5572C9.71428 20.5388 7.85698 19.746 6.65154 18.2136C5.51973 16.7748 4.92843 14.6882 4.90627 12.0002C4.92843 9.31211 5.51973 7.22549 6.65154 5.78673C7.85698 4.25433 9.71424 3.46156 12.189 3.44303C14.6819 3.4617 16.5728 4.25837 17.8254 5.79937C18.5162 6.64934 18.949 7.66539 19.2379 8.71407L21.1776 8.19656C20.8148 6.85917 20.2414 5.58371 19.363 4.50305C17.7098 2.46918 15.2816 1.43166 12.1835 1.41016ZM12.4204 12.3782C13.3044 12.3272 14.1239 12.3834 14.8521 12.5345C14.7114 14.1116 14.0589 15.4806 12.3401 15.575C11.2282 15.6376 10.1031 15.1413 10.0484 14.114C10.0077 13.3503 10.5726 12.4847 12.4204 12.3782Z">
            </path></svg>
            </div>
        </div>
         </nav>
         <main className='mt-10 w-full md:w-2/6'>
           <div className="accountDetails border-b">
             <div className="dpAndName flex items-center justify-between  gap-1 py-5 px-4">
                <div className="dp">
                    <img className='w-20 h-20 object-cover rounded-full' src="https://i.pinimg.com/236x/7a/b4/b4/7ab4b43aee2819e10756c332c2914b22.jpg" alt="" />
                </div> 
                <div className="nameAndEdit">
                    <div className="name"><p className='text-xl text-black mb-2'>tariqkh4nn</p></div>
                    <div className="btns flex gap-2">
                      
                     <button className='py-1.5 px-5 text-sm font-medium bg-[#EFEFEF] rounded-md'>Edit profile</button>
                     <button className='py-1.5 px-5 text-sm font-medium bg-[#EFEFEF] rounded-md'>View archive</button>
                    </div>
                </div>
             </div>  
             <p className='px-4 text-sm font-medium pb-4'>Muhammad Tariq</p>
           </div> 
           <div className="postsAndfollowwers  py-2 flex items-center justify-around border-b">
            <p className='.post text-sm font-medium text-center'>12 <br /> <span className='text-sm font-normal'>posts</span></p>
            <p className='.post text-sm font-medium text-center'>135 <br /> <span className='text-sm font-normal'>followers</span></p>
            <p className='.post text-sm font-medium text-center'>210<br /> <span className='text-sm font-normal'>following</span></p>
           </div>
           <div className="icons flex items-center justify-between px-8 py-2 border-b">
           <svg className='text-[#737373]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M14 10H10V14H14V10ZM16 10V14H19V10H16ZM14 19V16H10V19H14ZM16 19H19V16H16V19ZM14 5H10V8H14V5ZM16 5V8H19V5H16ZM8 10H5V14H8V10ZM8 19V16H5V19H8ZM8 5H5V8H8V5ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z"></path></svg>
           <svg className='text-[#737373]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M19 11V5H5V11H19ZM19 13H5V19H19V13ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z"></path></svg>
           <svg className='text-[#737373]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2ZM18 4H6V19.4324L12 15.6707L18 19.4324V4Z"></path></svg>
           <svg className='text-[#737373]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M3 4.99509C3 3.89323 3.89262 3 4.99509 3H19.0049C20.1068 3 21 3.89262 21 4.99509V19.0049C21 20.1068 20.1074 21 19.0049 21H4.99509C3.89323 21 3 20.1074 3 19.0049V4.99509ZM6.35687 18H17.8475C16.5825 16.1865 14.4809 15 12.1022 15C9.72344 15 7.62182 16.1865 6.35687 18ZM12 13C13.933 13 15.5 11.433 15.5 9.5C15.5 7.567 13.933 6 12 6C10.067 6 8.5 7.567 8.5 9.5C8.5 11.433 10.067 13 12 13Z"></path></svg>
           </div>
            <div className="gridPosts grid grid-cols-3 gap-1">

              {
                accountData.map((data)=>{
                  return(
                    <>
                      <div className="post">
                        <Link to={'/personalFeed'}>
                         <img className='h-32 object-cover' src={data.src.tiny} alt="" />
                        </Link>
                      </div>
                    </>
                  )
                })
              }
              {/* <div className="post">
                <img className='h-32 object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSnChSfsVb-Yw1xON9lDbhT7m-E5U0Xb0m0Q&s" alt="" />
              </div>
              <div className="post">
                <img className='h-32 object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDuotSRvJWDF1rOx8ORACLqx8fSXbUv-LhmQ&s" alt="" />
              </div>
              <div className="post">
                <img className='h-32 object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJiQarHz2kMd0Un4iyDOdzXZeKsmqyVyRFfg&s" alt="" />
              </div>
              <div className="post">
                <img className='h-32 object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJiQarHz2kMd0Un4iyDOdzXZeKsmqyVyRFfg&s" alt="" />
              </div>
              <div className="post">
                <img className='h-32 object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJiQarHz2kMd0Un4iyDOdzXZeKsmqyVyRFfg&s" alt="" />
              </div>
              <div className="post">
                <img className='h-32 object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJiQarHz2kMd0Un4iyDOdzXZeKsmqyVyRFfg&s" alt="" />
              </div>
              <div className="post">
                <img className='h-32 object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE0FoTUv-0swWxsX9wT71_lOAv1T7Ue5ZQtQ&s" alt="" />
              </div>
              <div className="post">
                <img className='h-32 object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1srR5N_fI-79Fhll7TzZpRi5dGTebm49XjQ&s" alt="" />
              </div>
              <div className="post">
                <img className='h-32 object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDuotSRvJWDF1rOx8ORACLqx8fSXbUv-LhmQ&s" alt="" />
              </div>
              <div className="post">
                <img className='h-32 object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJiQarHz2kMd0Un4iyDOdzXZeKsmqyVyRFfg&s" alt="" />
              </div>
              <div className="post">
                <img className='h-32 object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJiQarHz2kMd0Un4iyDOdzXZeKsmqyVyRFfg&s" alt="" />
              </div>
              <div className="post">
                <img className='h-32 object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJiQarHz2kMd0Un4iyDOdzXZeKsmqyVyRFfg&s" alt="" />
              </div> */}
            </div>
            <div className='h-16 w-full'></div>
            <LowerNav/>
         </main>
         </div>
       </>   
    )
}

export default AccountPage
