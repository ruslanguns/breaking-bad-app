import {useState} from "react";

export const useSetLanguage = () => {
    const [state, setState] = useState();
    const changeLanguage = code => {
      console.log(code)
      localStorage.setItem('language', code);
      setState(code);
    }
    return {
        lang: state,
        changeLanguage
    };
};

