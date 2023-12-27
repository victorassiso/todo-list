import { ITask, Task } from './task'
import { TaskListHeader } from './task-list-header'

interface TaskListProps {
  taskList: ITask[]
  deleteTask: (id: string) => void
}

export function TaskList({ taskList, deleteTask }: TaskListProps) {
  return (
    <div className="mt-16">
      <TaskListHeader />
      {taskList.map((task: ITask) => (
        <Task key={task.id} {...task} deleteTask={deleteTask} />
      ))}
    </div>
  )
}
