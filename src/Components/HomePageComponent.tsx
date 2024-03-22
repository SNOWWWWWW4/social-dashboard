import React, { useEffect, useState } from 'react'
import facebook from '../Assets/icon-facebook.svg';
import twitter from '../Assets/icon-twitter.svg';
import insta from '../Assets/icon-instagram.svg';
import yt from '../Assets/icon-youtube.svg';
import up from '../Assets/icon-up.svg';
import down from '../Assets/icon-down.svg';
import OverviewCardComponent from './OverviewCardComponent';
import FollowerCardComponent from './FollowerCardComponent';

const HomePageComponent = () => {

  const [toggled, setToggled] = useState(true);
  // let [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if(!toggled){
      document.documentElement.classList.add('dark');
    }else{
      document.documentElement.classList.remove('dark');
    }
  }, [toggled])

  return (
    <section className='min-h-screen dark:text-gray-100 dark:bg-slate-900 duration-100'>

      {/* bg off color */}
      <div className={`${toggled ? "lightBlueTop" : "darkBlueTop"}`}></div>

      {/* Container */}
      <div className='xl:px-44 sm:px-20 pt-3 px-[26px] z-10'>

        {/* top section */}
        <div className='grid md:grid-cols-2 sm:mb-5 mb-10 relative'>

          <div className='mt-6 sm:mb-7 mb-5'>
              <h1 className='font-bold sm:text-[27px] text-[24px]'>Social Media Dashboard</h1>
              <p className='!font-normal' >Total Followers: 23,004</p>
          </div>

          {/* <hr></hr> */}

          <div className='flex md:justify-end justify-between items-center md:mt-0 mt-4'>
            <h1 className={`text-bold ${toggled ? "text-[#8B97C6]" : "text-[white]"} `}>Dark Mode</h1>

            <button className={`toggleBtn ${toggled ? "toggled" : ""} ml-3`} onClick={() => {setToggled(!toggled)}}>
              <div className='circle'></div>
            </button>
          </div>
        </div>

        {/* middle section */}
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:gap-8 gap-6 relative'>
          <FollowerCardComponent cardClass={`${toggled ? "cardBgLight" : "cardBgDark"}`} topBar='facebookLine' logo={facebook} user={'@nathanf'} numb={'1947'} type={'FOLLOWERS'} color={'lime'} arrow={up} stat={'12 Today'} />
          <FollowerCardComponent cardClass={`${toggled ? "cardBgLight" : "cardBgDark"}`} topBar={'twitterLine'} logo={twitter} user={'@nathanf'} numb={'1044'} type={'FOLLOWERS'} color={'lime'} arrow={up} stat={'99 Today'} />
          <FollowerCardComponent cardClass={`${toggled ? "cardBgLight" : "cardBgDark"}`} topBar={'instagramLine'} logo={insta} user={'@realnathanf'} numb={'11k'} type={'FOLLOWERS'} color={'lime'} arrow={up} stat={'1099 Today'} />
          <FollowerCardComponent cardClass={`${toggled ? "cardBgLight" : "cardBgDark"}`} topBar={'youtubeLine'} logo={yt} user={'Nathan F.'} numb={'8239'} type={'SUBSCRIBERS'} color={'bright-red'} arrow={down} stat={'144 Today'} />
        </div>

        <h1 className='font-bold sm:text-[27px] text-[24px] pt-12 pb-7'>Overview - Today</h1>

        {/* bottom section*/}
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:gap-8 gap-4 pb-10 '>
          <OverviewCardComponent cardClass={`${toggled ? "cardSmallLight" : "cardSmallDark"}`} type={'Page Views'} logo={facebook} numb={'87'} color={'lime'} arrow={up} percent={'3%'}/>
          <OverviewCardComponent cardClass={`${toggled ? "cardSmallLight" : "cardSmallDark"}`} type={'Likes'} logo={facebook} numb={'52'} color={'bright-red'} arrow={down} percent={'2%'}/>
          <OverviewCardComponent cardClass={`${toggled ? "cardSmallLight" : "cardSmallDark"}`} type={'Likes'} logo={insta} numb={'5462'} color={'lime'} arrow={up} percent={'2257%'}/>
          <OverviewCardComponent cardClass={`${toggled ? "cardSmallLight" : "cardSmallDark"}`} type={'Profile Views'} logo={insta} numb={'52k'} color={'lime'} arrow={up} percent={'1375%'}/>

          <OverviewCardComponent cardClass={`${toggled ? "cardSmallLight" : "cardSmallDark"}`} type={'Retweets'} logo={twitter} numb={'117'} color={'lime'} arrow={up} percent={'303%'}/>
          <OverviewCardComponent cardClass={`${toggled ? "cardSmallLight" : "cardSmallDark"}`} type={'Likes'} logo={twitter} numb={'507'} color={'lime'} arrow={up} percent={'553%'}/>
          <OverviewCardComponent cardClass={`${toggled ? "cardSmallLight" : "cardSmallDark"}`} type={'Likes'} logo={yt} numb={'107'} color={'bright-red'} arrow={down} percent={'19%'}/>
          <OverviewCardComponent cardClass={`${toggled ? "cardSmallLight" : "cardSmallDark"}`} type={'Total Views'} logo={yt} numb={'1407'} color={'bright-red'} arrow={down} percent={'12%'}/>
        </div>

      </div>
      {/* end of Container */}
    </section>
  )
}

export default HomePageComponent
