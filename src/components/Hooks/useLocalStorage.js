    // Step 1. import useState from react. I didn't import React from react because we arent using jsx so theres no need to import React. 
    import { useState } from 'react';

    // Step 2. Build the function 'useLocalStorage' 
    // This works very similarly to the useState hook but when I save my values I also want to put them in local storage so that if I do a refresh it checks and sees if I already have a value saved there and be able to use my preference.
    // I also need a 'key' whenever i'm storing things into local storage. So i need to pass that through the array as well. 
export const useLocalStorage = (key, initialValue) => {
    // with useState I can use an initial value and get back and array with the value and then a function to change that value
    // useState is a function and it takes an initial value and it returns an array with a value and then a function to set the value. This is what I want useLocalStorage to be.
    // i.e. useState(initialValue) -----> [value, setValue]
    
    // Since I want to use my stored value as my useState and not my initialValue. useState has a unique feature that instead of using an initialValue I can give useState a callback and what that callback returns is going to be used as the initial value for my useState.
    // I can give this a callback and then I can return whatever value I want useState to use as the initial value for storedValue
    const [storedValue, setStoredValue] = useState(() => {

        // First I want to Check window.localStorage.getItem and grab the 'key' that the user has given me. I'm going to see if this data is stored in localStorage by saving it into a variable called 'item'
        const item = window.localStorage.getItem(key);
        // Now I can use a 'if' statement or a ternary operator. Ternary is an expression that can represt whatever value it's going to evaluate to. So i can return the value of the ternary 
        // The format of the ternary is an expression which in this case is the 'item' which returns a true or false boolean which is the ternary operator the true branch or the false branch 
        // ex. return expression ? true branch : false branch;
        // For my expression, I just want to check and see if 'item' is true or not. For the true branch i want to parse that item into whatever data that it was and for the false branch im just going to use the initial value.
        return item ? JSON.parse(item) : initialValue;
    });

    // Step 4. 
    // I want to define setValue so that i'm able to return a setter value 
    // This is going to take in a value and its going to call setStoredValue
const setValue = value => {
    //Save state
    setStoredValue(value);
    //Save to local storage
    window.localStorage.setItem(key, JSON.stringify(value));
    // now i can return setValue 
};
    // Step 3.
    // I want to return an array that has my storedValue in it which is either going to be form the local storage or initial value. I also want to give it a setter function but i dont want it to be setstored value bc thats just going to set it in a state and not do anything about actually persisting this into storage so im going to need to write that. ref line 26.
    return [storedValue, setValue];
};
export default useLocalStorage;