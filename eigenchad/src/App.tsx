import { useState } from 'react';
import eigenchad from './assets/eigenchad.jpeg'
import './App.css'
import EthStakingInfo from './StakingStatistics'
import { logEvent } from 'firebase/analytics';
import { analytics } from './main';

function App() {
  // @ts-ignore
  const [tab, setTab] = useState('home')

  const handleLinkClick = (linkName: string) => {
    logEvent(analytics, 'select_content', {
      content_type: 'link',
      item_id: linkName,
    });
  };

  return (
    <div className='m-auto flex-auto justify-center max-w-lg '
    >
      <ul className="flex sticky top-0 z-50 justify-center text-center pb-16 sm:pb-72">
        <li className="">
          <a className={'inline-block w-42 text-sm border border-[#1a0c6d] rounded-b-md py-1 px-3  text-[#1a0c6d]'} href='https://restaked.eigenchad.com' target={'_blank'} >_Restaked Capital</a>
        </li>
      </ul>
       <div className='m-auto flex-auto'>
        <div className='m-auto justify-center align-middle flex'>
          <a href="https://twitter.com/eigenchad" target="_blank">
            <img src={eigenchad} className="w-32 h-32 rounded-md border-[#1a0c6d]  border-2 logo" alt="eigenchad logo" />
          </a>
        </div>

        <p className=' text-gray-900 pt-6 text-center'>
          Haha, yeah EigenLayer is pretty cool. <br></br>
          <a href='https://twitter.com/eigenchad' target='_blank' className='hover:opacity-80 text-[#1a0c6d]'>
            @eigenchad
          </a>
        </p>

        <div className="bg-white border-t mt-4 border-[#0e0544]">
          <div className="px-6 pb-24 pt-2 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">


              <h2 className="text-md tracking-tight text-gray-900 mb-4">
                Become a chad,

              </h2>
              <a href='https://app.eigenlayer.xyz/?utm_source=eigenchad' onClick={() => handleLinkClick('restake_now')} target='_blank' className='uppercase rounded-md bg-[#1a0c6d] px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:text-white hover:bg-[#0e0544] focus-visible:outline border border-[#1a0c6d]  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0e0544]'>Restake Now

                <img
                  className="inline-block h-6 w-6 mb-1.5 ml-2 rounded-full"
                  src="https://pbs.twimg.com/profile_images/1635879999264940033/_pozth32_400x400.jpg"
                  alt=""
                />
              </a>
              <a href="https://docs.eigenlayer.xyz/?utm_source=eigenchad" onClick={() => handleLinkClick('learn_more')} target='_blank' className="mt-2 sm:mt-0 border-0 sm:border block sm:inline-flex ml-4 uppercase rounded-md bg-white px-3.5 py-2 text-md font-semibold text-[#1a0c6d] shadow-sm hover:text-[#1a0c6d] hover:opacity-60 border-[#1a0c6d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0e0544]">
                Learn more <span aria-hidden="true">&nbsp;→</span>
              </a>

            </div>
            <EthStakingInfo></EthStakingInfo>
          </div>
        </div>

      </div> 


    </div>
  )
}

export default App
