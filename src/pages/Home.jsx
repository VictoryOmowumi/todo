import React, {useState} from 'react';
// import Sidebar from '../components/Sidebar';
import Sidebar from '../components/Sidebar/Sidebar';
import {FiMenu} from 'react-icons/fi';
import Dashboard from '../components/Dashboard';
import CalendarPage from '../components/Calendar';
const Home = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    
  }
  const today = new Date();
  // get month name
  const month = today.toLocaleString('default', { month: 'long' });
 
  // get current date
  const date = today.getDate();

  const currentDate = new Date().getDate();
  let suffix;

  // Determine the suffix based on the last digit of the current date
  if (currentDate >= 11 && currentDate <= 13) {
    suffix = 'th';
  } else {
    const lastDigit = currentDate % 10;
    switch (lastDigit) {
      case 1:
        suffix = 'st';
        break;
      case 2:
        suffix = 'nd';
        break;
      case 3:
        suffix = 'rd';
        break;
      default:
        suffix = 'th';
    }
  }

  
const [activePage, setActivePage] = useState('Dashboard');
 

  return (
   <div className="flex g-8 flex-grow w-full h-screen bg-white">
      <div className={ sidebarOpen ? " basis-1/5 bg-teal-700 w-52 transition-all" : "transition-all hidden" }>
        <Sidebar  sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
       </div>
        <div className={ sidebarOpen ? "basis-3/4 bg-white p-4 " : "  w-full bg-white" } >
          <header className='w-full mt-4'>
              <div className="flex w-full gap-12 items-center px-6 ">
                <FiMenu onClick={openSidebar} className='text-2xl' />
                <div className="">
                  <p className="text-2xl font-medium">Today, {date}<sup>{suffix}</sup> {month}</p>
                  
                </div>
              </div>
          </header>
          <main className='p-4'>
            {/* <Dashboard /> */}
            <CalendarPage />
          </main>
        </div>
    </div>
  )
}

export default Home