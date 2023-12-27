import './global.css'

import { Header } from './components/header'
import { InputForm } from './components/input-form'
import { TaskList } from './components/task-list'

const tasks = [
  {
    name: 'Task 1',
    status: true,
  },
  {
    name: 'Task 2',
    status: false,
  },
]

export function App() {
  return (
    <div>
      <Header />
      {/* Content */}
      <div className="-my-7 mx-auto mb-7 w-[736px] flex-grow flex-col">
        <InputForm />
        <TaskList taskList={tasks} />
      </div>
    </div>
  )
}
