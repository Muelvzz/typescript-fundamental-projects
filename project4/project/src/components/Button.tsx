import { JSX, Dispatch, SetStateAction } from "react";

export default function Button({ placeholder, setNumberList }: 
    { placeholder: string, setNumberList: Dispatch<SetStateAction<string>> }): JSX.Element {

    const addKeys = (value: string) => { setNumberList(prev => prev + value) }

    const handleKeyPress = (value: string) => {
        if (value === "AC") { setNumberList("") }
        else if (value === "DEL") console.log(("DEL is pressed"))
        else if (value === "=") console.log(("= is pressed"))
        else if (value === "x10^x") console.log(("x10^x is pressed"))
        else if (value === "Ans") console.log(("Ans is pressed"))
        else if (value === ".") console.log((". is pressed"))
        else if (value === "+" || value === "-" ||
                value === "X" || value === "/")
                console.log(`${value} is pressed`)
        else {
            const intVal: number = parseInt(value)
            console.log(`${intVal} is pressed`)
        }
        addKeys(value)
    }

    return (
        <button className={`
            text-white bg-[#17191c] p-5 w-full h-full 
            font-bold rounded-lg cursor-pointer text-lg
            ${ placeholder === '=' ? 'bg-red-500' : "" }
            ${ placeholder === 'DEL' || placeholder === 'AC' ? 'bg-green-400' : '' } 
            ${ placeholder === 'X' || placeholder === '/' || 
                placeholder === '+' || placeholder === '-' 
                ? 'bg-amber-300' : '' } 
            hover:bg-[#17191c6f] duration-300
            `}
            key={ placeholder }
            onClick={() => handleKeyPress(placeholder)}
            >{ placeholder }</button>
    )
}