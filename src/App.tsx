import './global.css'

import { AddNewTask } from './components/add-new-task'
import { Header } from './components/header'
import { Task } from './components/task'
import { TaskListHeader } from './components/task-list-header'

export function App() {
  return (
    <div>
      <Header />
      {/* Content */}
      <div className="-my-7 mx-auto mb-7 w-[736px] flex-grow flex-col">
        <AddNewTask />
        {/* Tasks List */}
        <div className="mt-16">
          <TaskListHeader />
          {/* Tasks */}
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </div>
      </div>
    </div>
  )
}
