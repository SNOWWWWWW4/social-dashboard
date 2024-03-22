import React from 'react'

const FollowerCardComponent = (props: { topBar: string, logo: string, user: string, numb: string, type: string, color: string, arrow:string, stat: string, cardClass: string }) => {
  return (
    <div className={props.cardClass}>
      <div className={'h-1 '+ props.topBar}></div>

      <div className='flex justify-center items-center gap-2 pt-7 pb-5'>
        <img src={props.logo} alt="social media logo"/>
        <p className='font-bold test xs'>{props.user}</p>
      </div>

      <p className='flex justify-center text-[52px] font-bold'>{props.numb}</p>
      <p className='flex justify-center tracking-[0.3em] text-xs'>{props.type}</p>

      <div className='flex justify-center items-center gap-2 pt-6 pb-7'>
        <img src={props.arrow} alt="arrow direction"/>
        <p className={'font-bold text-xs ' + props.color}>{props.stat}</p>
      </div>
    </div>
  )
}

export default FollowerCardComponent
