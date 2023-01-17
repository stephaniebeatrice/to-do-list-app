import React from 'react'
import styles from './TaskItem.module.css';

const TaskItem = ({task}) => {
  return (
    <li className = {styles.task}>
        {task.name}
    </li>
  )
}
export default TaskItem