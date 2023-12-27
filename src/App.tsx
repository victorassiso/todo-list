import './global.css'

import { useState } from 'react'

import { Header } from './components/header'
import { InputForm } from './components/input-form'
import { ITask } from './components/task'
import { TaskList } from './components/task-list'

const initialTasks = [
  {
    id: '1',
    name: 'task 1',
    status: false,
  },
  {
    id: '2',
    name: 'task 2',
    status: true,
  },
]

export function App() {
  const [taskList, setTaskList] = useState<ITask[]>(initialTasks)

  const addTask = (newTask: ITask) => {
    setTaskList((taskList) => [...taskList, newTask])
  }

  const deleteTask = (id: string) => {
    setTaskList((prevTaskList) => prevTaskList.filter((task) => task.id !== id))
  }

  return (
    <div>
      <Header />
      <div className="-my-7 mx-auto mb-7 w-[736px] flex-grow flex-col">
        <InputForm addTask={addTask} />
        <TaskList taskList={taskList} deleteTask={deleteTask} />
      </div>
    </div>
  )
}
