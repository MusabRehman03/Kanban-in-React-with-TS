// import React from 'react'
// import Modal from './Modal';
// import { useState } from 'react'
interface Task {
  name: string;
  description: string;
  category: "toDo" | "inProgress" | "Completed" | "";
}
interface Props {
  arr: Task[];
}

function MainCard({ arr }: Props) {
  // const [isOpen, setIsOpen] =  useState(false)

  // const edit=()=>{
  //   <Modal isOpen = {isOpen} setIsOpen = {setIsOpen}/>
    
  // }
  return (
    <div className=" w-[250px] p-5 space-y-5 overflow-y-auto h-[520px] border ">
      {arr.map((element, index) => {
        console.log("CompArr", arr);
        // console.log(element);
        // console.log(element.title)
        // console.log(element.description)
        return (
          <div  key={index} className="border rounded-lg p-3 shadow-md">
            <h1 className="font-bold text-lg">{element.name}</h1>
            <p className="text-sm">{element.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default MainCard;
