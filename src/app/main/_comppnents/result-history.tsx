import { history } from "../main.types";

type props = {
   computationHistory: history[];
   className: string;
};

const ResultHistory = ({ computationHistory, className }: props) => {
   return (
      <div className={className}>
         <h1 className="text-2xl font-bold text-center">History</h1>
         <ul className="flex flex-col space-y-3 overflow-auto max-h-[40vh]  text-right ">
            {computationHistory.map((item, index) => (
               <li className="" key={index}>
                  <p className="text-muted-foreground">{item.expression}</p>
                  <strong className="text-xl text-mute-accent">{item.result}</strong>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default ResultHistory;
