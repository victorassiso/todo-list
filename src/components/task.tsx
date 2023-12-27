import checkboxFalse from '../../public/images/checkboxFalse.svg'
import trash from '../../public/images/trash.svg'

export function Task() {
  return (
    <div className="border-1 mt-3 flex flex-row items-start gap-3 rounded-lg border-gray-400 bg-gray-500 p-4 shadow-[0_2px_8px_0_rgba(0,0,0,0.06)]">
      <div>
        <img className="p-1" src={checkboxFalse} alt="" />
      </div>
      <p className="text-gray-100">
        Integer uma interdum massa libero auctor neque rutpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <div>
        <img className="p-1" src={trash} alt="" />
      </div>
    </div>
  )
}
