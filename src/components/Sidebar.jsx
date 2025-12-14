export default function Sidebar({ setViewMode, sidebarProjects, setSelectedProject, selectedProject, handleAddProjectCLick }) {
    const unselectedProjCss = "w-full px-4 py-2 text-sm text-left bg-stone-900 text-stone-50 hover:bg-stone-700 hover:text-stone-50"
    const selectedProjCss = "w-full px-4 py-2 text-sm text-left bg-stone-700 text-stone-50"

    const renderSidebarProjects = sidebarProjects.map((project, index) => <li key={index}>
        <button className={selectedProject.indexx == index ? selectedProjCss : unselectedProjCss}
            onClick={() => {
                setViewMode("CONTENT")
                handleProjectSelection(index)
            }}>
            {project.title}
        </button>
    </li>)

    function handleProjectSelection(index) {
        setSelectedProject({ ...sidebarProjects[index], indexx: index })
    }

    return <>
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
            <div>
                <button className="px-4 py-2 text-xs md:text-base bg-stone-50 text-stone-900 rounded-sm hover:bg-stone-700 hover:text-stone-50"
                    onClick={() => handleAddProjectCLick()}
                >+ Add Project</button>
            </div>
            <ul className="mt-8">
                {renderSidebarProjects}
            </ul>
        </aside>
    </>
}   