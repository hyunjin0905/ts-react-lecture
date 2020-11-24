import React, {useCallback, useRef, useState} from "react";

const WordRelay = () => {
    const [word, setWord]= useState("조현진");
    const [value, setValue]= useState('');
    const [result, setResult] = useState('');
    const inputEl = useRef<HTMLInputElement>(null);

    const onSubmitForm = useCallback<(e:React.FormEvent)=> void>((e)=>{
        e.preventDefault();
        const input = inputEl.current;
        if(word[word.length-1] === value[0]) {
            setResult('딩동댕');
            setWord(value);
            setValue('');
            if(input) input.focus();

        } else {
            setResult('땡');
            if(input) input.focus();
        }

    },[value])

    const onChange = useCallback<(e:React.ChangeEvent<HTMLInputElement>)=>void>((e)=>{
        setValue(e.currentTarget.value)
    },[word, value]);
    return(
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <input
                    ref={inputEl}
                    value ={value}
                    onChange={onChange}/>
            </form>
            <div>{result}</div>
        </>
    )
}

export {WordRelay}