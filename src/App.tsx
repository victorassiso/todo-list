import './global.css'

import { useState } from 'react'

import { Header } from './components/header'
import { InputForm } from './components/input-form'
import { TaskProps } from './components/task'
import { TaskList } from './components/task-list'

export function App() {
  const [taskList, setTaskList] = useState<TaskProps[]>([])

  const addTask = (newTask: TaskProps) => {
    setTaskList((taskList) => [...taskList, newTask])
  }
  return (
    <div>
      <Header />
      <div className="-my-7 mx-auto mb-7 w-[736px] flex-grow flex-col">
        <InputForm addTask={addTask} />
        <TaskList taskList={taskList} />
      </div>
    </div>
  )
}
