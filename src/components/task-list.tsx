import { Task, TaskProps } from './task'
import { TaskListHeader } from './task-list-header'

export function TaskList({ taskList }: { taskList: TaskProps[] }) {
  return (
    <div className="mt-16">
      <TaskListHeader />
      {taskList.map((task: TaskProps, i) => (
        <Task key={i} name={task.name} status={task.status} />
      ))}
    </div>
  )
}
