import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from './styles.module.scss';

interface InputTaskProps {
    id: string;
    title: string;
    onDone: (id: string) => void;
    onEdited: (id: string, title: string) => void;
    onRemoved: (id: string) => void;
}

export const InputTask: React.FC<InputTaskProps> = ({
    id, 
    title, 
    onDone,
    onRemoved,
    onEdited
}) => {

    const [checked, setChecked] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [value, setValue] = useState(title);
    const editTitleInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isEditMode) {
            editTitleInputRef?.current?.focus();
        }
    }, [isEditMode])

    return (
        <div className={styles.inputTask}>
            <label>
                <input 
                    type="checkbox" 
                    checked={checked}
                    className={styles.InputTaskCheckbox}
                    disabled={isEditMode}
                    onChange={e => {
                        setChecked(e.target.checked)

                        if (e.target.checked) {
                            onDone(id);
                        }
                    }}
                />
                {isEditMode ? (
                    <input 
                        type='text'
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        className={styles.inputTaskTitleEdit}
                        ref={editTitleInputRef}
                    />
                ) : (
                    <h3 className={styles.inputTaskTitle}>{title}</h3>
                )}
                
            </label>

            {isEditMode ? (
                <button
                    className={styles.inputTaskOk}
                    onClick={() => {
                        onEdited(id, value)
                        setIsEditMode(false);
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            onEdited(id, value)
                            setIsEditMode(false);
                        }
                    }}
                >ок</button>
            ) : (
                <button
                    className={styles.inputTaskEdit}
                    onClick={() => setIsEditMode(true)}
                />
            )}
            
            <button
                className={styles.inputTaskRemove}
                onClick={() => onRemoved(id)}
            />
        </div>
    )
}