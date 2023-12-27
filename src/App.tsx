import './global.css'

import { useEffect, useState } from 'react'

import { Header } from './components/header'
import { InputForm } from './components/input-form'
import { ITask } from './components/task'
import { TaskList } from './components/task-list'

const initialTaskList = [
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

const initialTasksCreated = 2

export function App() {
  const [taskList, setTaskList] = useState<ITask[]>(initialTaskList)
  const [tasksCreated, setTasksCreated] = useState<number>(initialTasksCreated)
  const [totalTasks, setTotalTasks] = useState<number>(taskList.length)

  const addTask = (newTask: ITask) => {
    setTaskList((taskList) => [...taskList, newTask])
  }

  const deleteTask = (id: string) => {
    setTaskList((prevTaskList) => prevTaskList.filter((task) => task.id !== id))
  }

  const changeTaskStatus = (id: string) => {
    const newTasks = taskList.map((task) =>
      task.id === id ? { ...task, status: !task.status } : task,
    )

    setTaskList(newTasks)
  }

  useEffect(() => {
    const diff = taskList.length - totalTasks
    setTotalTasks(taskList.length)

    if (diff > 0) {
      setTasksCreated(tasksCreated + 1)
    }
  }, [taskList])
  return (
    <div>
      <Header />
      <div className="-my-7 mx-auto mb-7 w-[736px] flex-grow flex-col">
        <InputForm addTask={addTask} />
        <TaskList
          taskList={taskList}
          tasksCreated={tasksCreated}
          deleteTask={deleteTask}
          changeTaskStatus={changeTaskStatus}
        />
      </div>
    </div>
  )
}
