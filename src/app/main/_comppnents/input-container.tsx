import { Input } from '@/components/ui/input';
import { isValidInput } from '@/utils';

type props = { 
  handleInput:string
  setHandleInput:React.Dispatch<React.SetStateAction<string>>;
}

const InputContainer = ({handleInput,setHandleInput}:props) => {
  return (
       <Input
          value={handleInput}
          onChange={(e) => {
             const inputValue = e.target.value;
             console.log(isValidInput(inputValue));
             if (isValidInput(inputValue)) {
                setHandleInput(inputValue);
             }
          }}
          placeholder="0"
          className="py-5 border-0  text-right rounded-none border-b-[3px] border-slate-800 font-bold text-xl flex h-10   file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-o focus-visible:ring-offset-0  "
       />
  )
}

export default InputContainer