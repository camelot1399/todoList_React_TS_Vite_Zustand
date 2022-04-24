import React, { useCallback, useState } from "react";
import styles from './index.module.scss';

interface InputPlusProps {
    onAdd: (title: string) => void;
}

export const InputPlus: React.FC<InputPlusProps> = ({onAdd}) => {
    const [input, setInput] = useState('');
    const addTask = useCallback(() => {
        onAdd(input)
        setInput('');
    }, [input])
    return (
        <div>
            <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        addTask();
                    }
                }}
            />
            <button 
                onClick={addTask} 
            >Добавить</button>
        </div>
    )
}