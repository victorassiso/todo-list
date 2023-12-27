import { ITask } from './task'

export interface TaskListHeaderProps {
  taskList: ITask[]
  tasksCreated: number
}

export function TaskListHeader({
  taskList,
  tasksCreated,
}: TaskListHeaderProps) {
  return (
    <div className="flex flex-row justify-between">
      <div className="mb-3 flex flex-row items-center gap-2.5 font-bold">
        <span className="text-sm text-blue">Tarefas criadas</span>
        <span className="rounded-full bg-gray-400 pl-2 pr-2 text-xs text-gray-200">
          {tasksCreated}
        </span>
      </div>

      <div className="flex flex-row items-center gap-2.5 font-bold">
        <span className="text-sm text-purple">Concluídas </span>
        <span className="rounded-full bg-gray-400 pl-2 pr-2 text-xs text-gray-200">
          {taskList.reduce((acc, task) => {
            return task.status ? acc + 1 : acc
          }, 0)}{' '}
          de {taskList.length}
        </span>
      </div>
    </div>
  )
}
