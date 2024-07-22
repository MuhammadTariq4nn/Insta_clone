import React from 'react';
import UpperNav from '../components/UpperNav';
import Feed from '../components/Feed';
import LowerNav from '../components/LowerNav';
import {RiArrowLeftLine} from "@remixicon/react"
import { RiHeartFill } from "@remixicon/react";

const PersonalFeed = () => {
    return (
        <>
          
          <div className='flex w-full h-full items-center jusify-center flex-col'>
          <UpperNav name={<RiArrowLeftLine/>} post={"Posts"}/>
          <Feed/>
          <LowerNav/>
          </div>
        </>
    );
};

export default PersonalFeed;