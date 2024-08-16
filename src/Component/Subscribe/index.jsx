import React, { useState } from 'react'
import './style.css'
import Button from '../Button';
import { BodyText, H1 } from '../../Style/Typograpy/Typo';

export default function Subscribe(){
  const [subscribe,setSubscribe] =useState('');
  const [massegeError,setMassegeError] =useState('');
  const [massegeSucceeded,setMassegeSucceeded] =useState('');

const HandelChangeInbut=(e)=>{
   setSubscribe(e.target.value)  
}
const HandelChangeSubmit=(e)=>{
  e.preventDefault()
  // const subscribe={
  //   Subscribe:subscribe,
  // }
  try{
   setMassegeSucceeded('Succeeded') 
  }catch{
    setMassegeError('Not Succeeded! Try Agien')
  }
  
}
  return (
    <>
        <form  onSubmit={HandelChangeSubmit} className='FormSubscribe'>

          <input type='Email' id='Email' value={subscribe} onChange={HandelChangeInbut} placeholder='Email Address' ></input>

          <Button
          width={'212'}
          height={'66'}
          backgroundcolor={'rgba(229, 241, 255, 0.2)'}
          text={<BodyText>Subscribe</BodyText>}
          ></Button>

        </form> 
        {massegeError?<H1 color='red'>{massegeError}</H1>:<H1 color='green'>{massegeSucceeded}</H1>}
                   
    </>
  )
}
