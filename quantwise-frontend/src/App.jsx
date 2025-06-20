import { useState } from 'react'
import './App.css'
import { WavyBackgroundDemo } from './Hero'
import {GlowingEffectDemoSecond } from './Grid'
import {FooterDefault} from './Footer'
import {NavbarDefault} from './Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <NavbarDefault/>
      <WavyBackgroundDemo />
      <div className='bg-black pt-4 -mt-16 justify-items-center pb-15'>
        <h1 className='pb-8 text-2xl font-bold text-white text-center m-0'>Our Features</h1>
        <GlowingEffectDemoSecond />
      </div>
      <FooterDefault />

    </div>
  )
}

export default App
