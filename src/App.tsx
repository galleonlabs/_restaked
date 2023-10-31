import eigenchad from './assets/eigenchad.jpeg'
import './App.css'

function App() {

  return (
    <div className='m-auto flex-auto'>
      <div className='m-auto justify-center align-middle flex'>
        <a href="https://twitter.com/eigenchad" target="_blank">
          <img src={eigenchad} className="w-32 h-32 rounded-lg border-[#1a0c6d] eigenchad border-2" alt="eigenchad logo" />
        </a>
      </div>

      <p className='text-[#1a0c6d] pt-6'>
        Haha, yeah EigenLayer is pretty cool. <br></br>
        <a href='https://twitter.com/eigenchad' target='_blank'>
          @eigenchad
        </a>
      </p>


    </div>
  )
}

export default App
