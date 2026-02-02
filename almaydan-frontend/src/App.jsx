import './App.css'

import Navbar from './components/Navbar'
import Floating from './components/Floating/floating'
import Hero from './sections/Hero/Hero'
import Showcase from './components/showcase/showcase'

function App() {
  return (
    <>
      <Navbar />
      <Floating />
      <Hero />
      <Showcase />
    </>
  )
}

export default App
