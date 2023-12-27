import './global.css'

import { useState } from 'react'

import { Header } from './components/header'
import { InputForm } from './components/input-form'
import { ITask, TaskProps } from './components/task'
import { TaskList } from './components/task-list'

export function App() {
  const [taskList, setTaskList] = useState<ITask[]>([])

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
