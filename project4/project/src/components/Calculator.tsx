import { JSX } from "react";
import Button from "./Button";
import { useState } from "react";
import { evaluate } from "mathjs"

export default function Calculator(): JSX.Element {

    const [numberList, setNumberList] = useState<string>("")
    const [result, setResult] = useState<string>("")

    const keyList: string[] = ['7', '8', '9', 'DEL', 'AC', '4', '5', '6', '*', '/', '1', '2', '3', '+', '-', '0', '.', 'x10^x', 'Ans', '=']

    const calculateInputs = (numberList: string) => {
        const result = handleCalculate(numberList)
        setResult(result)
    }

    const handleCalculate = (input: string) => {
        try {
            const result = evaluate(input)
            return result
        } catch (err) {
            setNumberList("Invalid expression: Please check your syntax")
            setResult("0")
        }
    }

    return (
        <section className="
            flex flex-col gap-y-5 bg-[#0c0d0e] 
            px-3 sm:px-5 md:px-10 
            pb-10 pt-15 
            rounded-lg
        ">
            <div className="
                flex flex-col bg-white text-right pb-2 
                pr-4 pt-2 rounded-lg gap-y-6
            ">
                <p className="
                    text-xs text-[#51585e]
                ">{
                    numberList !== "" ? numberList : 
                    "Your input goes here..."
                }</p>
                <h1 className="
                    font-semibold text-4xl
                ">{ result ? result : "0" }</h1>
            </div>
            <div className="
                grid grid-cols-5 gap-1
            ">
                { keyList.map((value: string): JSX.Element => (
                    <div key={ value }>
                        <Button 
                            placeholder={ value }
                            setNumberList={setNumberList}
                            calculateInputs={calculateInputs}
                            numberList={numberList}
                        />
                    </div>
                )) }
            </div>
        </section>
    )
}