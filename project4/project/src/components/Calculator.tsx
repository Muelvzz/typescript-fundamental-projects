import { JSX } from "react";
import Button from "./Button";
import { useState } from "react";

export default function Calculator(): JSX.Element {

    const [numberList, setNumberList] = useState<string>("")

    const keyList: string[] = ['7', '8', '9', 'DEL', 'AC', '4', '5', '6', 'X', '/', '1', '2', '3', '+', '-', '0', '.', 'x10^x', 'Ans', '=']

    return (
        <section className="
            flex flex-col gap-y-5 bg-[#0c0d0e] 
            px-10 pb-10 pt-20 rounded-lg
        ">
            <div className="
                flex flex-col bg-white text-right pb-2 
                pr-4 pt-2 rounded-lg gap-y-6
            ">
                <p className="
                    text-xs text-[#51585e]
                ">{
                    numberList ? numberList : 
                    "Your input goes here..."
                }</p>
                <h1 className="
                    font-semibold text-4xl
                ">Answer</h1>
            </div>
            <div className="
                grid grid-cols-5 gap-2
            ">
                { keyList.map((value: string): JSX.Element => (
                    <div>
                        <Button 
                            placeholder={ value }
                            setNumberList={setNumberList}
                        />
                    </div>
                )) }
            </div>
        </section>
    )
}