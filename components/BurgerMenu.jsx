import { useState } from "react";

function BurgerMenu({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  function handleClick() {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`transition-all duration-300 ease-out w-auto p-5 rounded fixed flex left-4 top-4 flex-col items-start gap-5 ${isOpen ? 'bg-slate-800' : null}`}>
      <button onClick={handleClick} className="p-3 bg-slate-600 rounded flex flex-col justify-center items-center">
        <span className={`bg-slate-300 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-slate-300 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-slate-300 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>
      <div className={`transition-all duration-300 ease-out ${isOpen ? 'flex flex-col' : 'flex flex-col -translate-x-36'} `}>
        {children}
      </div>
    </div>
  )
}

export default BurgerMenu;