import { Input } from '@/components/ui/input';
import { isValidInput } from '@/utils';

type props = { 
  handleInput:string
  setHandleInput:React.Dispatch<React.SetStateAction<string>>;
  currentExpression:string,
}

const InputContainer = ({handleInput,setHandleInput,currentExpression}:props) => {
   
   let newExpression = handleInput.replace(/\*/g, 'x');
  
   return (
      <div className=''>
          <p className=' text-end pr-3'>{currentExpression}</p>
          <Input
          value={newExpression}
          onChange={(e) => {
             const inputValue = e.target.value;
             console.log(isValidInput(inputValue));
             if (isValidInput(inputValue)) {
                setHandleInput(inputValue);
             }
          }}
          placeholder="0"
          className="py-5 text-right border-0  border-slate-800/20 shadow-sm font-medium text-2xl flex h-10 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-o focus-visible:ring-offset-0  "
       />
      </div>
  )
}

export default InputContainer