import { Button } from "../button/Button";
export const Counter = ({min=0, max=5,  value, increment, decrement }) => { 
    return (
        <>
            <Button
                onClick={decrement} 
                children={"-"}
                isDisabled={value <= min}
                sizeViewVariant="xs"
            />
            <span>{value}</span>
            <Button
                onClick={increment} 
                children={"+"}
                isDisabled={value >= max}
                sizeViewVariant="xs"
            />
        </>
    );
}