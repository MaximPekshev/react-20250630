
export const Counter = ({ value, increment, decrement }) => { 
    return (
        <>
            <button className='counter-button' onClick={decrement}>-</button>
            <span>{value}</span>
            <button className='counter-button' onClick={increment}>+</button>
        </>
    );
}