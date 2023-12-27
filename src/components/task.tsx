import checkboxFalse from '../../public/images/checkboxFalse.svg'
import checkboxTrue from '../../public/images/checkboxTrue.svg'
import trash from '../../public/images/trash.svg'

export interface TaskProps {
  name: string
  status: boolean
}

export function Task({ name, status }: TaskProps) {
  return (
    <div className="border-1 mt-3 flex flex-row items-start gap-3 rounded-lg border-gray-400 bg-gray-500 p-4 shadow-[0_2px_8px_0_rgba(0,0,0,0.06)]">
      <div>
        {status ? (
          <img className="p-1" src={checkboxTrue} alt="" />
        ) : (
          <img className="p-1" src={checkboxFalse} alt="" />
        )}
      </div>
      <p className="flex-grow text-sm text-gray-100">{name}</p>
      <div>
        <img className="p-1" src={trash} alt="" />
      </div>
    </div>
  )
}
