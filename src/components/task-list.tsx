import { ITask, Task } from './task'
import { TaskListHeader } from './task-list-header'

interface TaskListProps {
  taskList: ITask[]
  tasksCreated: number
  deleteTask: (id: string) => void
  changeTaskStatus: (id: string) => void
}

export function TaskList({
  taskList,
  tasksCreated,
  deleteTask,
  changeTaskStatus,
}: TaskListProps) {
  console.log(tasksCreated)
  return (
    <div className="mt-16">
      <TaskListHeader taskList={taskList} tasksCreated={tasksCreated} />
      {taskList.map((task: ITask) => (
        <Task
          key={task.id}
          {...task}
          deleteTask={deleteTask}
          changeTaskStatus={changeTaskStatus}
        />
      ))}
    </div>
  )
}
