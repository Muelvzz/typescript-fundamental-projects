import { JSX } from "react";

// type buttonProps = { value: string, index: number }

export default function Button({ value }: { value: string }): JSX.Element {
    return (
        <button className={`
            text-white bg-[#17191c] p-5 w-full h-full 
            font-bold rounded-lg cursor-pointer text-lg
            ${ value === '=' ? 'bg-red-500' : "" }
            ${ value === 'DEL' || value === 'AC' ? 'bg-green-400' : '' } 
            ${ value === 'X' || value === '/' || 
                value === '+' || value === '-' 
                ? 'bg-amber-300' : '' } 
            hover:bg-[#17191cab] duration-300
            `}
            key={ value }
            >{ value }</button>
    )
}