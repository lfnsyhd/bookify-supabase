const Sidebar = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='bg-[#121212] w-[300px] h-fit max-h-[calc(100vh-20px)] rounded-xl text-white overflow-y-auto p-7 pt-5'>
      <span className="text-[11px] text-gray-400 font-semibold uppercase tracking-[4px]">Menu</span>
      <div className="flex flex-col gap-3.5 mt-4">
        {children}
      </div>
    </div>
  )
}

export default Sidebar