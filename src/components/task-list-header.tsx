export function TaskListHeader() {
  return (
    <div className="flex flex-row justify-between">
      <div className="mb-3 flex flex-row items-center gap-2.5 font-bold">
        <span className="text-sm text-blue">Tarefas criadas</span>
        <span className="rounded-full bg-gray-400 pl-2 pr-2 text-xs text-gray-200">
          5
        </span>
      </div>

      <div className="flex flex-row items-center gap-2.5 font-bold">
        <span className="text-sm text-purple">Concluídas </span>
        <span className="rounded-full bg-gray-400 pl-2 pr-2 text-xs text-gray-200">
          2 de 5
        </span>
      </div>
    </div>
  )
}
