import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import {useCallback,useEffect,useRef} from 'react'
function App() {
  const [length, setLength] = useState(8)
  const [numAllow,setNum] = useState(false);
  const [charAllow,setChar] = useState(false);
  const [password,setPassword] = useState("");

  const passwordRef=useRef(null);

  const passwordGenerator= useCallback(()=>{
  let pass=""
  let str="nsdkjvjjoifjvlkSLSKSVJKLKVMOMLNJLKmlkmlkvmlopkovkmckauJIJCMNS"
  
  if(numAllow) str+="0123456789"
  if(charAllow) str+="!@#$%^&*(){}[]~"

  for(let i=1;i<=length;i++){
    let char=Math.floor((Math.random()*str.length+1))
    pass+=str.charAt(char);
  }
  setPassword(pass)

  },[length,numAllow,charAllow,setPassword])

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,5);
    navigator.clipboard.writeText(password)
  },[password])

  
  useEffect(()=>{passwordGenerator()},[length,numAllow,charAllow,passwordGenerator])

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
     <h1 className='text-center text-white mb-2'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
         <input type="text"
         value={password}
         className='outine-none w-full py-1 px-3'
         placeholder='Password'
         readOnly
         ref={passwordRef} />
         <button className='bg-blue-700 mx-1 px-3 py-0.5 rounded-lg'
         onClick={copyPasswordToClipboard}>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'> 
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={6}
          max={40}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{
            setLength(e.target.value)
          }} />
          <label >Length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
           defaultChecked={numAllow}
           id='numberInput'
           onChange={()=>{
            setNum((prev) =>!prev);
           }} />
           <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
           defaultChecked={charAllow}
           id='charInput'
           onChange={()=>{
            setChar((prev) =>!prev);
           }} />
           <label htmlFor="charInput">Characters</label>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
