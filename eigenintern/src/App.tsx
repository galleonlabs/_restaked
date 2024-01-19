import eigenintern from './assets/eigenintern.jpg'
import './App.css'

function App() {
  return (
    <div className='m-auto flex-auto justify-center max-w-lg mt-16 sm:mt-72'
    >
        <div className='m-auto justify-center align-middle flex'>
          <a href="https://twitter.com/eigenintern" target="_blank">
            <img src={eigenintern} className="w-32 h-32 rounded-md border-[#1a0c6d]  border-2 logo" alt="eigenintern logo" />
          </a>
        </div>
        <p className=' text-gray-900 pt-6 text-center'>
         EigenLayer Intern & _Restaked Contributor <br></br>
          <a href='https://twitter.com/eigenintern' target='_blank' className='hover:opacity-80 text-[#1a0c6d]'>
            @eigenintern
          </a>
        </p>
        <div className="bg-white border-t mt-4 border-[#0e0544]">
        <div className="px-6 pb-24 pt-2 sm:px-6 lg:px-8">
          <p className='text-gray-900 text-center font-semibold mt-2'>Enter the Restaking ecosystem.</p>
          <div className="mx-auto max-w-2xl text-center pt-4">
          

              <a href='https://app.eigenlayer.xyz' target='_blank' className='uppercase rounded-md bg-[#1a0c6d] px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:text-white hover:bg-[#0e0544] focus-visible:outline border border-[#1a0c6d]  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0e0544]'>EigenLayer

                <img
                  className="inline-block h-6 w-6 mb-1.5 ml-2 rounded-full"
                  src="https://pbs.twimg.com/profile_images/1635879999264940033/_pozth32_400x400.jpg"
                  alt=""
                />
              </a>
            <a href='https://app.eigenlayer.xyz' target='_blank' className='ml-3 uppercase rounded-md bg-[#37D699] px-3.5 py-2.5 text-md font-semibold text-black shadow-sm hover:text-black hover:opacity-80 focus-visible:outline border border-[#37D699]  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#37D699]'>_Restaked

              <img
                className="inline-block h-6 w-6 mb-1.5 ml-2 rounded-full"
                src="https://pbs.twimg.com/profile_images/1746939609836077056/mrrz-OrF_400x400.png"
                alt=""
              />
            </a>

            </div>
   
          </div>
        </div>
      </div> 
  )
}

export default App
