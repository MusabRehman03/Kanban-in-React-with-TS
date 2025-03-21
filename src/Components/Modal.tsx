import React, { useState } from "react";
import { useEffect } from "react";
interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  arr:Task[]
  setArr: React.Dispatch<React.SetStateAction<Task[]>>;
}
interface Task {
  name: string;
  description: string;
  category: "toDo" | "inProgress" | "Completed"|"";
}
// let
// let Hehe:hehe={
//     a:"hello",
//     b:1,
//     c:"world"
// }

const Modal: React.FC<ModalProps> = ({ isOpen, setIsOpen, arr, setArr }) => {
  //   const [name, setName] = useState("");
  //   const [description, setDescription] = useState("");
  //   const [category, setCategory] = useState("");
  const [task, setTask] = useState<Task>({
    name: "",
    description: "",
    category: "",
  });
  // const [arr,setArr]= useState<Task[]>(JSON.parse(localStorage.getItem("arr")||"[]"))
  

  useEffect(() => {
   
    localStorage.setItem("arr",JSON.stringify([...arr]))
    
  }, [arr]); 
  const handleTaskChange = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, value } = e.target as HTMLInputElement;
    setTask({ ...task, [name]: value });
    // console.log({ name,category, description });
     // Close modal after submission
  };
  const handleSubmit=()=>{
    console.log("Task",task)

    // e.preventDefault();

    console.log("Task",task)
    // let taskk:Task={
    //   name:task.name,
    //   description:task.description,
    //   category:task.category
    // }
    setArr([...arr,task])
    // task.name=""
    // task.description=""
    // task.category=""
     
    // localStorage.setItem("arr",JSON.stringify(arr))
    setIsOpen(false);
    setTask({
      name: "",
      description: "",
      category: "",
    });
    // callback();
  }
  
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="relative p-4 w-full max-w-md bg-white rounded-lg shadow-lg dark:bg-gray-700">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-600 border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Create New Product
          </h3>
          <button
            type="button"
            className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="w-3 h-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
              />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <form className="p-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 mb-4 grid-cols-2">
            <div className="col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={task.name}
                onChange={handleTaskChange}
                className="w-full p-2 border rounded-lg dark:bg-gray-600 dark:text-white"
                placeholder="Type product name"
                required
              />
            </div>

            <div className="col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Product Description
              </label>
              <textarea
                name="description"
                value={task.description}
                onChange={handleTaskChange}
                rows={4}
                className="w-full p-2 border rounded-lg dark:bg-gray-600 dark:text-white"
                placeholder="Write product description here"
                required
              ></textarea>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Category
            </label>
            <select
              name="category"
              value={task.category}
              onChange={handleTaskChange}
              className=" p-2 border rounded-lg dark:bg-gray-600 dark:text-white"
              required
            >
              <option disabled value="">Select category</option>
              <option value="toDo">To Do</option>
              <option value="inProgress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <button
          
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg px-5 py-2.5 text-center mt-7"
          >
            Add New Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
