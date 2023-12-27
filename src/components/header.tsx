import rocket from '../../public/images/rocket.svg'

export function Header() {
  return (
    <div className="flex h-[200px] w-screen items-center justify-center bg-gray-700">
      <div className="flex items-end gap-3">
        <img src={rocket} alt="Rocket" className="w-5.5 h-9" />
        <div className="text-4xl font-black">
          <span className="text-blue">to</span>
          <span className="text-purple-dark">do</span>
        </div>
      </div>
    </div>
  )
}
