import { JSX } from "react";
import Button from "./Button";

export default function Calculator(): JSX.Element {

    const keyList: string[] = ['7', '8', '9', 'DEL', 'AC', '4', '5', '6', 'X', '/', '1', '2', '3', '+', '-', '0', '.', 'x10^x', '=']

    return (
        <section className="
            flex flex-col gap-y-2 bg-black px-10 pb-10 pt-20 rounded-lg
        ">
            <div className="
                bg-white text-right pb-2 pr-4 pt-10 rounded-lg
            ">
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
                            value={ value }
                        />
                    </div>
                )) }
            </div>
        </section>
    )
}