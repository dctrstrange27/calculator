import { Button } from "@/components/ui/button";
import { RandomKeyPad } from "@/utils";
import { useState } from "react";
import { operators } from "./operators";
import { Divide } from "lucide-react";

type props = {
     setHandleInput:React.Dispatch<React.SetStateAction<string>>;
     setCurrentExpression:React.Dispatch<React.SetStateAction<string>>;
     handleOperatorClick:(value:string)=>void
}

const KeypadNumber = ({setHandleInput,handleOperatorClick,setCurrentExpression}:props) => {

  const [randomArray, _] = useState<(number | string)[]>(RandomKeyPad);

  return (
          <div className="flex  space-x-5 justify-center ">
          <div className="grid grid-cols-3  gap-4 w-fit">
             {randomArray.map((numbers) => (
                <Button
                   onClick={(e) => {
                      e.preventDefault();
                      setHandleInput((prev) => `${prev + numbers}`);
                   }}
                   key={numbers}
                   variant={"outline"}
                   className="text-2xl shadow-md rounded-full w-[60px] h-[60px]"
                >
                   {numbers}
                </Button>
             ))}
          </div>
          <div className=" flex flex-col gap-2">
             <Button
                onClick={() => {
                   setCurrentExpression("")
                   setHandleInput("");
                }}
                className="text-xl rounded-full w-[50px] h-[50px]"
             >
                CE
             </Button>
             {operators.map((operators) => (
                <div key={operators}>
                   <Button
                      onClick={() => {
                         handleOperatorClick(operators);
                      }}
                      className="text-xl shadow-md rounded-full w-[50px] h-[50px]"
                   >
                      {operators === "*" ? "x" : operators && operators == "/" ? <Divide></Divide> :operators }
                   </Button>
                </div>
             ))}
          </div>
       </div>
  )
}

export default KeypadNumber