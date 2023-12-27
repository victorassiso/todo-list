import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

import addIcon from '../../public/images/plus.svg'
import { ITask } from './task'

interface InputFormProps {
  addTask: (task: ITask) => void
}

export function InputForm({ addTask }: InputFormProps) {
  const [taskName, setTaskName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (taskName.trim() !== '') {
      addTask({ id: uuid(), name: taskName, status: false })
      setTimeout(() => {
        setTaskName('')
      }, 10)
    }
  }
  return (
    <form className="flex flex-row gap-2 text-gray-100" onSubmit={handleSubmit}>
      <input
        type="text"
        className="flex-grow rounded-lg bg-gray-500 p-4 placeholder-gray-300 focus:border-purple-dark focus:outline-none focus:ring-1 focus:ring-purple-dark"
        placeholder="Adicione uma nova tarefa"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      ></input>
      <button
        type="submit"
        onClick={handleSubmit}
        className="justify-content flex items-center gap-2 rounded-lg bg-blue-dark p-4 hover:bg-blue"
      >
        <span className="text-sm font-bold text-gray-100">Criar</span>
        <img src={addIcon} alt="Plus icon" />
      </button>
    </form>
  )
}
