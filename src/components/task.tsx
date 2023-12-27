import { useState } from 'react'

import checkedDefault from '../../public/images/checkedDefault.svg'
import checkedHover from '../../public/images/checkedHover.svg'
import deleteDefault from '../../public/images/deleteDefault.svg'
import deleteHover from '../../public/images/deleteHover.svg'
import uncheckedDefault from '../../public/images/uncheckedDefault.svg'
import uncheckedHover from '../../public/images/uncheckedHover.svg'

export interface TaskProps {
  name: string
  status: boolean
}

export function Task({ name, status }: TaskProps) {
  const [isTaskDone, setIsTaskDone] = useState(status)

  return (
    <div className="border-1 mt-3 flex flex-row items-start gap-3 rounded-lg border-gray-400 bg-gray-500 p-4 shadow-[0_2px_8px_0_rgba(0,0,0,0.06)] hover:border-gray-400 hover:bg-gray-400">
      <div className="flex items-center justify-center p-[3.273px]">
        <button
          type="button"
          className="overflow-hidden rounded-full"
          onClick={() => setIsTaskDone(!isTaskDone)}
        >
          <img
            className="h-[18px] w-[18px] shrink-0"
            src={isTaskDone ? checkedDefault : uncheckedDefault}
            alt=""
          />
        </button>
      </div>
      <p
        className={
          isTaskDone
            ? 'flex-grow text-sm text-gray-300 line-through'
            : 'flex-grow text-sm text-gray-100'
        }
      >
        {name}
      </p>
      <div>
        <button type="button">
          <img className="p-1" src={deleteDefault} alt="" />
        </button>
      </div>
    </div>
  )
}
