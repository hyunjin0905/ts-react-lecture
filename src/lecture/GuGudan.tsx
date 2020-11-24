import React from "react";
import {useState, useRef} from "react";

const GuGudan = () => {
    const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('')
    const [result, setResult] = React.useState('');
    const inputEl = useRef<HTMLInputElement>(null);

    const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const input = inputEl.current;
        if (parseInt(value) === first * second) {
            setResult('정답');
            setFirst(Math.ceil(Math.random() * 9))
            setSecond(Math.ceil(Math.random() * 9))
            input && input.focus();
        } else {
            setResult("땡 정답은 "+ first * second);
            setValue('');
            input!.focus();
        }
    }
    return (
        <>
            <div>{first} 곱하기 {second}?</div>
            <form onSubmit={onSubmitForm}>
                <input
                    ref={inputEl}
                    type="number" value={value}
                    onChange={(e) => setValue(e.target.value)}/>
            </form>
            <div>{result}</div>
        </>
    );
}

export {GuGudan};
