import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = ({house}) => {
    const gift = useContext(RingContext)
    return (
        <div>
            <h4>Aunty</h4>
            <p>House: {house}</p>
            <p>Gift: {gift}</p>
        </div>
    );
};

export default Aunty;