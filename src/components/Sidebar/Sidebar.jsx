import React, {useState} from 'react'
import {BsFillCalendarDateFill} from 'react-icons/bs';
import {FaTasks} from 'react-icons/fa';
import {MdSpaceDashboard} from 'react-icons/md';
import {AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai';
const Sidebar = ({sidebarOpen, openSidebar}) => {
 
  const [moreItems, setMoreItems] = useState(false);

  const openMoreItems = () => {
    setMoreItems(!moreItems);
  }

  return (
    <div className={sidebarOpen ? '' : 'hidden'}>
      <aside className='flex flex-col gap-8' id="sidebar">
        <div className="bg-teal-500 shadow-sm p-2 ">
          <p className="text-4xl font-medium text-teal">MAJESTY</p>
           <span className="text-white text-sm">Task Management</span>
        </div>
        <div className="p-5">
          <ul className="flex flex-col gap-12">
            <li className="flex gap-4 items-center mb-4">
               <span className="text-2xl text-white"> <MdSpaceDashboard /> </span>
                <span className="text-xl text-white">Dashboard</span>
            </li>
            <li className="flex gap-4 items-center mb-4">
               <span className="text-2xl text-white"> <BsFillCalendarDateFill /> </span>
                <span className="text-xl text-white">Calendar</span>
            </li>
           {/* more items */}
            <li className="flex flex-col gap-4  mb-4 cursor-pointer" onClick={openMoreItems}>
                {/* <span className="text-2xl text-white">  </span> */}
                <span className="flex gap-4 items-center text-xl text-white"><FaTasks />  Tasks
                  {moreItems ? <AiFillCaretUp onClick={openMoreItems} className="text-white text-xl" /> : <AiFillCaretDown onClick={openMoreItems} className="text-white text-xl" />}
                </span>
                {
                  moreItems ? <ul className="flex flex-col gap-4 ml-8">
                    <li className="text-white text-sm">To-do</li>
                    <li className="text-white text-sm">In-progress</li>
                    <li className="text-white text-sm">Completed</li>
                  </ul> : ''

                }
            </li>
          </ul>
          </div>
      </aside>
    </div>
  )
}

export default Sidebar;