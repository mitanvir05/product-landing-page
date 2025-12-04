import Contact from "./components/contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

function App() {

  return (
<div className="min-h-screen bg-linear-to-b from-slate-200 via-white to-gray-100 text-slate-900">
<Navbar/>
<Hero/>
<Contact/>
<Footer/>
</div>  )
}

export default App
