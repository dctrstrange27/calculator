
export function RandomKeyPad(): (number | string)[] {
   const numbers: any[] = Array.from({ length: 10 }, (_, index) => index);
   const shuffledNumbers = numbers.sort(() => Math.random() - 0.5);
   shuffledNumbers.push(".");
   return shuffledNumbers;
}


export const parseInput = (input: string): string => {
   return input.replace(/[^0-9.+\-*/]/g, "");
};

export const isValidInput = (input: string | number): boolean => {
   const validCharactersRegex = /^[0-9+\-*/.]+$/;
   if (typeof input === "number" || !isNaN(Number(input))) return true;
   if (typeof input === "string" && validCharactersRegex.test(input))return true;
   return false;
};
