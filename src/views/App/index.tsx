import React, { useEffect } from "react";
import styles from './index.module.scss';

import { useToDoStore } from '../../data/stores/useToDoStore'
import { InputPlus } from "../components/InputPlus";

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

    useEffect(() => {
        createTask('dfdsff');
       
    }, [])

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
            <section className={styles.article__section}></section>
        </article>
    )
}