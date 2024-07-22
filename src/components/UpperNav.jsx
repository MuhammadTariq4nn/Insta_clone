import React from 'react'
// import instaLogo from '../assets/instaLogo.png'
import {RiAddBoxLine,RiHeart3Line,RiSendPlaneFill} from "@remixicon/react"
import { Link } from 'react-router-dom'
function UpperNav(props) {
    // console.log(person.name)
    // console.log()
    return (
     <>
        <div className="uppernav bg-white w-full md:w-2/6 z-10 fixed top-0  px-3 pt-6 pb-1 flex items-center justify-between h-14 border-b-2">
            <Link to={'/'}>
            <div className="instalogo w-28 object-fit flex items-center ">
                   <img src={props.pic} alt="" />{props.name} <span className='font-bold text-xl pl-5'>{props.post}</span>
            </div>
            </Link>
            <div className="icons flex gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z">
            </path>
            </svg>

            {/* messages */}
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M1.94607 9.31543C1.42353 9.14125 1.4194 8.86022 1.95682 8.68108L21.043 2.31901C21.5715 2.14285 21.8746 2.43866 21.7265 2.95694L16.2733 22.0432C16.1223 22.5716 15.8177 22.59 15.5944 22.0876L11.9999 14L17.9999 6.00005L9.99992 12L1.94607 9.31543Z">
            </path>
            </svg>
            </div>
        </div>
     </>   
    )
}

export default UpperNav
