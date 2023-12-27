import React, { useState } from 'react'

import addIcon from '../../public/images/plus.svg'

interface InputFormProps {
  addTask: (newTask: { name: string; status: boolean }) => void
}

export function InputForm({ addTask }: InputFormProps) {
  const [taskName, setTaskName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (taskName.trim() !== '') {
      addTask({ name: taskName, status: false })
      setTaskName('')
    }
  }
  return (
    <form className="flex flex-row gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        className="flex-grow rounded-lg bg-gray-500 p-4 placeholder-gray-300"
        placeholder="Adicione uma nova tarefa"
        onChange={(e) => setTaskName(e.target.value)}
      ></input>
      <button
        type="submit"
        className="justify-content flex items-center gap-2 rounded-lg bg-blue-dark p-4"
      >
        <span className="text-sm font-bold text-gray-100">Criar</span>
        <img src={addIcon} alt="Plus icon" />
      </button>
    </form>
  )
}
