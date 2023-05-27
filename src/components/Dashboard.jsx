import React from 'react'
import {BiSearch} from 'react-icons/bi';
import { VictoryPie } from 'victory';
import { todos } from '../Data/Todo';
import { inProgress } from '../Data/InProgress';
import { completed } from '../Data/Completed';
const Dashboard = () => {

    const todoCount = todos.length;
    const inProgressCount = inProgress.length;
    const completedCount = completed.length;
    const totalTask = todoCount + inProgressCount + completedCount;
  return (
    <div className='flex flex-col gap-4 mt-8 w-full m-auto '>
        <div className="flex gap-8 items-center justify-between w-full">
            <div className="flex gap-2 justify-between items-center border border-gray-300 p-2 rounded-md basis-3/4 ">
                <input type="text" placeholder="Search" className=" outline-none w-full bg-transparent " />
                <span className="text-gray-400 text-xl cursor-pointer"><BiSearch /></span>
            </div>
            <div className="">
                <button className="bg-teal-500 text-white px-8 py-2 rounded-md">Create Task</button>
            </div>
        </div>
        <div className="mt-4">
            <div className="">
                <div className="flex gap-4">
                    <div className="bg-white p-4 rounded-md shadow-md basis-1/3">
                        <p className="text-gray-400">Total Tasks</p>
                        <p className="text-2xl font-medium">{totalTask}</p>
                    </div>
                    <div className="bg-white p-4 rounded-md shadow-md basis-1/3">
                        <p className="text-gray-400">Completed Tasks</p>
                        <p className="text-2xl font-medium">{completedCount}</p>
                    </div>
                    <div className="bg-white p-4 rounded-md shadow-md basis-1/3">
                        <p className="text-gray-400">In-Progress</p>
                        <p className="text-2xl font-medium">{inProgressCount}</p>
                    </div>
                </div>
                <div className="flex gap-8">
               <div className="mt-6 bg-white p-4 rounded-md shadow-md  gap-5 w-96">
                    <div className="flex justify-between">
                    <p className="text-gray-400">Task Summary</p>
                        <div className="">

                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                            <p className="text-gray-400">Completed</p>
                            </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <p className="text-gray-400">In-Progress</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                            <p className="text-gray-400">Todo</p>
                        </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 ml-auto">
                    <VictoryPie
                        colorScale={["#2D3748", "#38B2AC", "#F56565"]}
                        data={[
                            { x: "Completed", y: completedCount },
                            { x: "In-Progress", y: inProgressCount },
                            { x: "Todo", y: todoCount }
                        ]}
                        width={500}
                        height={450}
                        innerRadius={68}
                        labelRadius={80}
                        style={{ labels: { fontSize: 16, fill: "white" } }}
                        
                    />
                    
                    </div>
                </div> 
                <div className="mt-6 bg-white p-4 rounded-md shadow-md  gap-5 w-3/4 ">
                    <div className="flex justify-between items-center">
                        <p className="text-gray-400">In-Progress</p>
                        <p className="text-gray-400">View All</p>
                      </div>
                     <div className="">
                        {
                            inProgress.map((item, index) => (
                                <div key={index} className="flex justify-between items-center border-b border-gray-300 py-2">
                                    <div className="flex items-center gap-2 mt-2">
                                        <div className="w-2 h-2 bg-teal-500 rounded-full "></div>
                                        <p className="text-gray-400">{item.title}</p>
                                    </div>
                                   
                                </div>
                            ))
                        }    
                    </div>   
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard