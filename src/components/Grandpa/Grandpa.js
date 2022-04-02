import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle'
import Aunty from '../Aunty/Aunty'
import './Grandpa.css'

export const RingContext = createContext('diamond')
const Grandpa = () => {
    const [house, setHouse] = useState(1)
    const ornament = 'Diamond Ring'
    const handleHouseCount = () =>{
        const newHouseCount = house + 1;
        setHouse(newHouseCount)
    }
    return (
        <RingContext.Provider value={ornament}>
            <div className='grand'>
            <h4>Grandpa</h4>
            <button onClick={handleHouseCount}>Buy a House</button>
            <p>House: {house}</p>
            <section className='grandpa'>
                <Father house={house}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </section>
        </div>
        </RingContext.Provider>
    );
};

export default Grandpa;
