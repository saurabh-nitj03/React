import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)
  let  obj={
    name:"saurabh",
    age:21
  }
  let newArr=[1,2,3]
  return (
    <>
     <h1 className='bg-green-400 mb-4 text-black p-4 rounded-xl'>Tailwind Test</h1>
     {/* <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/27926760/pexels-photo-27926760/free-photo-of-a-green-grassy-field.jpeg" alt="" width="384" height="512"/>
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption>
      <div>
        Sarah Dayan
      </div>
      <div>
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */}
   <Card username="chai aur code" btnText="Click Me" /*myarr=[1,2,3] myArr={name:"chai"}*/ someObj={obj} arr={newArr} />
   <Card  username="Saurabh" btnText="Visit" />
    </>
  )
}

export default App
