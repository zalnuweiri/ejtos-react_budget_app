import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';


// Add code to import the other components here under

import { AppProvider } from './context/AppContext';
import ExpenseList from './components/ExpenseList';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {/*Budget component */}
                    <div className='col-sm'>
                        <Budget />
                    </div>  
                        {/* Remaining component */}
                    <div className='col-sm'>
                        <Remaining />
                    </div>

                        {/* ExpenseTotal component */}
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                </div>
                <h3 className='mt-3'>Allocation</h3>   
                <div className='row'>
                        {/* Add ExpenseList component here under */} 
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>        
                </div>
                        {/* Add ExpenseItem component here under below was 
                    removed bcz it creates a random box with a + next to it
                    below "allocation" section, but it is not in the example 
                    pic*/ }    
                    {/*<div className='col-sm'>
                        <ExpenseItem />
                     </div> */}       
                    <h3 className='mt-3'>Change Allocation</h3>
                    <div className='row mt-3'>
                        {/* Add AllocationForm component here under */}     
                    <div className='col-sm'>
                        <AllocationForm />
                    </div>           

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
