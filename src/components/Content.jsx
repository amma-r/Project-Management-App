import { useRef } from "react";
import Input from "./Input";
import NoProjectSelect from "./NoProjectSelect";


export default function Content({ selectedProjectId, setProjects, projects, handleAddProjectClick }) {

    const selectedProject = projects.find(project => project.id === selectedProjectId) || {}
    console.log("Content > selectedProject (var)", selectedProject)

    const projectTasks = selectedProject.tasks || []
    const tasksInputRef = useRef()


    const tasks = projectTasks.map((task, index) => <li key={index} className="mt-2 flex justify-between">

        <>{task}</>

        <button className=" text-stone-700 hover:text-red-500"
            onClick={handleTaskDeletion}>
            Delete Task
        </button></li>)

    function handleTaskDeletion() {

    }

    function handleTaskInput() {
        setProjects(prevProjects => prevProjects.map(project => project.id == selectedProject.id ?
            { ...project, tasks: [...project.tasks || [], tasksInputRef.current.value] }
            : project
        ))
    }

    function handleDelete() {
        const updatedProjects = projects.filter((project) => selectedProject.id != project.id)

        setProjects(updatedProjects)
        handleAddProjectClick(true)
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
                    type="text"
                    ref={tasksInputRef}
                />

                <button onClick={handleTaskInput} className="ml-2 text-stone-700 hover:text-stone-400">Add Task</button>

                {tasks.length > 0 ?
                    <ul className="mt-8 w-120">
                        {tasks}
                    </ul>
                    :
                    <p className="py-4">This project Does not have any tasks yet</p>}
            </>
                :
                <NoProjectSelect handleAddProjectClick={handleAddProjectClick} />
            }
        </div>

    </>
}