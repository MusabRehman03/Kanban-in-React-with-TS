import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import MainCard from './Components/MainCard'
import Modal from './Components/Modal';
interface Task {
  name: string;
  description: string;
  category: "toDo" | "inProgress" | "Completed"|"";
}
function App() {
  
  // const [arr, setArr]=useState<Task[]>([])
  // let arr:Task[]=[]
  const [isOpen, setIsOpen] =  useState(false)
  const [arr,setArr]= useState<Task[]>(()=>JSON.parse(localStorage.getItem("arr")||"[]"))
  // const [arr1,setArr1]=useState<Task[]>([])
  // const [arr2,setArr2]=useState<Task[]>([])
  // const [arr3,setArr3]=useState<Task[]>([])
  // setArr()
let arr1:Task[]=[]  
let arr2:Task[]=[]  
let arr3:Task[]=[]  
arr.forEach((t)=>{
  console.log(t.category);
  
  if(t.category==="toDo"){
    arr1.push(t)
  }else if(t.category==="inProgress"){
    arr2.push(t)
  }else if(t.category==="Completed"){
    arr3.push(t)
  }
})
   
    

  function add(){
    setIsOpen(!isOpen)


    return
  //   // setIsOpen(true)
  //   let t =prompt("Enter Title")
  //   let d =prompt("Enter Description")
  //   let s =prompt("Enter Status")
  //   let task:Task={
  //     title:t!,
  //     description:d!,
  //     status:s!
  //   }
  //   console.log(task)
  //   arr.push(task)
  //   console.log(arr)
  //   arr.forEach((t)=>{
  //     console.log(t.status);
      
  //     if(t.status==="To Do"){
  //       setArr1([...arr1,task])
  //     }else if(t.status==="In Progress"){
  //       setArr2([...arr2,task])
  //     }else if(t.status==="Done"){
  //       setArr3([...arr3,task])
  //     }
  //   })
  // console.log("arr",arr)

  // console.log("arr1",arr1)
  // console.log("arr2",arr2)
  // console.log("arr3",arr3)

  }
  return (
    <div >


      {/* <Modal isOpen = {isOpen} setIsOpen = {setIsOpen}/> */}
      <h1 className='text-6xl font-serif text-center mt-20'>KANBAN BOARD</h1>
      {/* <p>hello</p> */}
      <Modal isOpen = {isOpen} setIsOpen = {setIsOpen} arr={arr} setArr={setArr}/>

      <div className='flex mt-10 justify-center'>
        <input type="search" className='p-1.5 focus:outline-none border border-gray-500 rounded-xl'/>
        <button onClick={add} className='text-white bg-gray-600 px-4 py-1.5 rounded-lg ml-3'>Add</button>
        {/* <Modal isOpen = {isOpen} setIsOpen = {setIsOpen} /> */}
      </div>
      <div className="flex flex-wrap flex-col sm:flex-row items-center justify-center sm:space-x-5 space-y-5 sm:space-y-0 mt-10 ">
        <div  className=" w-[250px] border border-t rounded-t-lg ">
         <h1 className="text-2xl font-serif font-bold bg-[#E3F2FD] p-4 rounded-t-lg text-center">
          To Do
         </h1>

        <MainCard arr={arr1}/>

        </div>
        <div  className=" w-[250px] border border-t rounded-t-lg ">
         <h1 className="text-2xl font-bold font-serif bg-[#FFF3E0] p-4 rounded-t-lg text-center">
          In Progress
         </h1>
        <MainCard arr={arr2}/>

        </div>
        <div  className=" w-[250px] border border-t rounded-t-lg ">
         <h1 className="text-2xl font-bold font-serif bg-[#F3E5F5] p-4 rounded-t-lg text-center">
          Done
         </h1>
        <MainCard arr={arr3}/>

        </div>
      </div>
    </div>
  )
}

export default App
