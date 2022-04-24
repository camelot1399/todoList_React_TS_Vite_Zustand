import React, { useCallback, useState } from "react";
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
    onRemoved
}) => {

    const [checked, setChecked] = useState(false);
    return (
        <div className={styles.inputTask}>
            <label>
                <input 
                    type="checkbox" 
                    checked={checked}
                    className={styles.InputTaskCheckbox}
                    onChange={e => {
                        setChecked(e.target.checked)

                        if (e.target.checked) {
                            onDone(id);
                        }
                    }}
                />
                <h3 className={styles.inputTaskTitle}>{title}</h3>
            </label>
            <button
                className={styles.inputTaskEdit}
                onClick={() => {
                    onDone(id);
                }}
            />
            <button
                className={styles.inputTaskRemove}
                onClick={() => {
                    onRemoved(id);
                }}
            />
        </div>
    )
}