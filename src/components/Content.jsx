import Input from "./Input";
import NoProjectSelect from "./NoProjectSelect";


export default function Content({ selectedProject, showNewProjHandler, setSidebarProjects, sidebarProjects }) {

    function handleDelete() {
        const updatedProjects = sidebarProjects.filter((_, index) => selectedProject.indexx != index)

        setSidebarProjects(updatedProjects)
        showNewProjHandler(true)
    }

    function formatSimpleDate(dateString) {
        const date = new Date(`${dateString}T00:00:00`);

        // 2. Define formatting options.
        const options = {
            month: 'short', // 'Dec'
            day: 'numeric', // '29'
            year: 'numeric' // '2024'
        };

        return date.toLocaleDateString('en-US', options);
    }
    return <>

        <div className=" w-full mt-16 pl-20 pr-20">

            {selectedProject.title ? <>
                <div className="flex justify-between">

                    <h1 className="text-3xl font-bold text-stone-600 mb-2">{selectedProject.title}</h1>
                    <button className="text-stone-700 hover:text-red-500"
                        onClick={handleDelete}>
                        Delete
                    </button>
                </div>

                <div className="w-140 flex-col space-y-4">
                    <h2 className="text-sm font-mono text-amber-800">{formatSimpleDate(selectedProject.dueDate)}</h2>
                    <p className="text-wrap">{selectedProject.description}</p>
                </div>

                <hr className="my-4" />
                <h2 className="text-3xl font-bold text-stone-600 mb-2">Tasks</h2>

                <Input
                    InputClassName="w-100 mb-2 px-2 py-1 rounded-sm bg-stone-200"
                    type="text" />

                <button className="ml-2 text-stone-700 hover:text-red-500">Add Task</button>

                <p className="py-4">This project Does not have any tasks yet</p>
            </>
                :
                <NoProjectSelect showNewProjHandler={showNewProjHandler} />
            }
        </div>

    </>
}