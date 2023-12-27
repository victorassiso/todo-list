import addIcon from '../../public/images/plus.svg'

export function AddNewTask() {
  return (
    <form className="flex flex-row gap-2">
      <input
        type="text"
        className="flex-grow rounded-lg bg-gray-500 p-4 placeholder-gray-300"
        placeholder="Adicione uma nova tarefa"
      ></input>
      <button
        type="submit"
        className="justify-content bg-blue-dark flex items-center gap-2 rounded-lg p-4"
      >
        <span className="text-sm font-bold text-gray-100">Criar</span>
        <img src={addIcon} alt="Plus icon" />
      </button>
    </form>
  )
}
