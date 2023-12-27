import clipboard from '../../public/images/clipboard.png'

export function EmptyList() {
  return (
    <div className="flex flex-col items-center justify-between gap-4 rounded-lg border-t border-gray-400 pb-16 pl-6 pr-6 pt-16">
      <img src={clipboard} alt="Clipboard" />
      <div className="flex flex-col">
        <span className="text-base font-bold text-gray-300">
          Você ainda não tem tarefas cadastradas
        </span>
        <span className="text- flex items-stretch text-gray-300">
          Crie tarefas e organize seus itens a fazer
        </span>
      </div>
    </div>
  )
}
