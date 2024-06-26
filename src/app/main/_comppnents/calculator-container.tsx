import { Card,CardHeader,CardTitle,CardContent } from "@/components/ui/card";
import { useState } from "react";
import { operators} from "./operators";
import { parseInput } from "@/utils";
import InputContainer from "./input-container";
import KeypadNumber from "./keypad";
import ResultHistory from "./result-history";
import { history } from "../main.types"
import {History} from "lucide-react"
import { evaluate } from "mathjs";
import { cn } from "@/lib/utils";

function Calculator() {

   const [handleInput, setHandleInput] = useState("");
   
   const [computationHistory, setComputationHistory] = useState<history[]>([]);
   
   const [showHistory,setShowHistory] = useState(false)

   const [currentExpression,setCurrentExpression] = useState("")

   //handle the click on the Operators
   const handleOperatorClick = (operator: string) => {
      
      const lastCharIsOperator = handleInput.length > 0 && operators.some((op) => op === handleInput.slice(-1));

      if (lastCharIsOperator && operator !== "CE") { return }

      if (operator === "=") {
         evaluateExpression(handleInput)      
      } else {
         setHandleInput((prev) => `${prev}${operator}`);
      }
   };
   console.log(currentExpression)
   //compute the equation
   const evaluateExpression =(handleInput:string)=>{
      try {
         const result = evaluate(parseInput(handleInput));
         setHandleInput(result.toString());
         let newExpression = handleInput.replace(/\*/g, 'x');
         setCurrentExpression(newExpression)
         const newHistoryItem = { expression: handleInput, result: result.toString() };

         setComputationHistory((prevHistory) => [newHistoryItem,...prevHistory]); 

         setHandleInput(result.toString());

      } catch (error) {
         setHandleInput("Error: Invalid expression");
      }
   }

   return (
      <div className="min-h-screen flex justify-center items-center">
         <Card className={cn(`${showHistory ? "w-fit":"max-w-[350px]"}  shadow-lg`)}>
            <CardHeader className="relative">
               <History onClick={ () => setShowHistory((prev)=> !prev)} className="absolute cursor-pointer hover:scale-110 duration-100 ease-in-out top-5 right-5" />
               <CardTitle>Calculator</CardTitle>
            </CardHeader>
            <CardContent className="space-x-5 relative flex flex-col lg:flex-row">
               <div className="w-fit space-y-2">
               <InputContainer currentExpression={currentExpression} handleInput={handleInput} setHandleInput={setHandleInput}></InputContainer>
               <KeypadNumber setCurrentExpression={setCurrentExpression}  setHandleInput={setHandleInput} handleOperatorClick={handleOperatorClick} ></KeypadNumber>
               </div>
               <ResultHistory className={`${showHistory ? "block w-1/2":"hidden"}    p-5 xl:p-0 max-h-full  h-full `} computationHistory={computationHistory} ></ResultHistory>
            </CardContent>
         </Card>
      </div>
   );
}

export default Calculator;
