import React from 'react'

const OverviewCardComponent = ( props: { cardClass:string, type: string, logo: string, numb: string, arrow: string, percent: string, color: string}) => {

  return (
    <div className={props.cardClass}>

      <div className='grid grid-cols-2 mb-4'>
        <div>
          <h3 className='text-[14px]'>{props.type}</h3>
        </div>

        <div className='flex justify-end'>
          <img src={props.logo} alt="social media logo"/>
        </div>
      </div>

      <div className='grid grid-cols-2'>

        <div className='flex items-end'>
          <h2 className='numberTwo'>{props.numb}</h2>
        </div>

        <div className='flex justify-end'>
          <div className='flex justify-center items-center gap-1'>
            <img className='' src={props.arrow} alt="arrow direction"/>
            <p className={'font-bold text-xs ' + props.color}>{props.percent}</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default OverviewCardComponent