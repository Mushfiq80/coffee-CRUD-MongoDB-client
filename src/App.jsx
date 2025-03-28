import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffee] = useState(loadedCoffees);
  
  return (
    <>
      <header>
        <nav className='text-right'>
          <Link to='/coffeeAdd' className='btn bg-amber-500 p-2'>Add Coffee</Link>
          
        </nav>
      </header>
      <h1 className='text-4xl text-purple-400'>HOT Coffee List: {coffees.length}</h1>

      <div className='grid grid-cols-2 gap-4'>
        {coffees.map( (coffee) => <CoffeeCard
        key={coffee._id}
        coffee={coffee}
        coffees={coffees}
        setCoffee={setCoffee}
        ></CoffeeCard>)}
      </div>
      
    </>
  )
}

export default App
