import React, { useEffect } from "react";
import styles from './index.module.scss';

import { useToDoStore } from '../../data/stores/useToDoStore'
import { InputPlus } from "../components/InputPlus";
import { InputTask } from "../components/InputTask";

export const App: React.FC = () => {

    console.log('useToDoStore', useToDoStore);
    const [
        tasks,
        createTask,
        removeTask,
        updateTask
    ] = useToDoStore(state => [
        state.tasks,
        state.createTask,
        state.removeTask,
        state.updateTask
    ])

    console.log('tasks', tasks);

    return ( 
        <article className={styles.article}>
            <h1 className={styles.article__title}>To DO APP</h1>
            <section className={styles.article__section}>
                <InputPlus 
                    onAdd={(title) => {
                        if (title) {
                            createTask(title)
                        }
                    }}
                />
            </section>
            <section className={styles.article__section}>
                {!tasks.length && (<div>нет ни одной таски</div>)}

                {tasks.map(task => 
                    <InputTask 
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        onDone={removeTask}
                        onEdited={updateTask}
                        onRemoved={removeTask}
                    />)}
            </section>
        </article>
    )
}