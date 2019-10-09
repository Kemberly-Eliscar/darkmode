import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage'

//define a function 
// useDarkMde is going to take in an intialValue and im going to use my uselocalStorage hook and give it the 'key' of dark-mode and give it my intial value and save it in a variable called darkmode and setDarkMode and then I can return modes. 
const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage('dark-mode');

    //useEffect is a sideeffect allowing us to run code sometimes. This will allow me to run this code whenever useEffect is trigged.
    //if darkmode is set then i want to make sure this classlist has a class called darkmode and if its not set then i want it to not have a class called darkmode
    useEffect(() => {
    if (darkMode) {
    document.body.classList.add('dark-mode');
    } else {
    document.body.classList.remove('dark-mode');    
    }
    // This is the dependency array that allows me to control what data this code depends on
    // If darkMode is true we'll run the code on lines 12-15 and I dont want it to run until the value if darkmode changes again, doesn't provide any value to me until its set to false. 
    }, [darkMode, setDarkMode]);
    return [darkMode, setDarkMode];
};

export default useDarkMode;