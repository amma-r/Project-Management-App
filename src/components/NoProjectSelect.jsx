export default function NoProjectSelect({handleAddProjectClick}) {
    return <div className="w-full flex-col space-y-4 text-center">
        <img className="w-16 h-16 object-contain mx-auto" src="logo.png" alt="" />
        <h1 className="text-3xl font-bold text-stone-600 mb-2">No Project Selected</h1>
        <p>Select a project, or get started with a new one</p>
        <button className="px-4 py-2 text-xs md:text-base bg-stone-900 text-stone-50 rounded-sm hover:bg-stone-600 hover:text-stone-50"
            onClick={handleAddProjectClick}
        >+ Add Project</button>

    </div>
}