import { JSX, Dispatch, SetStateAction } from "react";

export default function Button({ placeholder, setNumberList, calculateInputs, numberList }: 
    { placeholder: string, setNumberList: Dispatch<SetStateAction<string>>, calculateInputs: (value: string) => void, numberList: string }): JSX.Element {

    const commandKeys = (key: string) => {
        switch (key) {
            case "AC":
                setNumberList("")
                break
            case "DEL":
                setNumberList(prev => prev.slice(0, -1))
                break
            case "=":
                calculateInputs(numberList)
                break
            case "x10^x":
                break
            case "Ans":
                break
            default:
                setNumberList(prev => prev + key)
        }
    }

    return (
        <button className={`
            text-white bg-[#17191c] p-5 w-full h-full 
            font-bold rounded-lg cursor-pointer 
            text-xs sm:text-sm md:text-lg
            flex items-center justify-center
            ${ placeholder === '=' ? 'bg-red-500' : "" }
            ${ placeholder === 'DEL' || placeholder === 'AC' ? 'bg-green-400' : '' } 
            ${ placeholder === '*' || placeholder === '/' || 
                placeholder === '+' || placeholder === '-' 
                ? 'bg-amber-300' : '' } 
            hover:bg-[#17191c6f] duration-300
            `}
            key={ placeholder }
            onClick={() => commandKeys(placeholder)}
            >{ placeholder }</button>
    )
}