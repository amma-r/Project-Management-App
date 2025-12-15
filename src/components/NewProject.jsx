import { useRef } from "react";
import Input from "./Input";

export default function NewProject({ setProjects, setViewMode }) {

    const inputRefTitle = useRef()
    const inputRefDescription = useRef()
    const inputRefDueDate = useRef()

    function handleSave() {
        const data = {
            id: crypto.randomUUID(),
            title: inputRefTitle.current.value,
            description: inputRefDescription.current.value,
            dueDate: inputRefDueDate.current.value,
            tasks: []
        }

        data.title && data.description && data.dueDate && setProjects(prev => [...prev, data])
        setViewMode("CONTENT")
    }

    return <div className=" w-full mt-16 px-20">
        <menu className="flex items-center justify-end gap-4 my-4">

            <li><button className="text-stone-700 hover:text-red-500"
                onClick={() => setViewMode("CONTENT")}>
                Cancel</button></li>

            <li><button className="px-4 py-2 text-xs md:text-base bg-stone-900 text-stone-50 rounded-sm hover:bg-stone-50 hover:text-stone-700"
                onClick={handleSave}>
                Save</button></li>
        </menu>
        <div>
            <p>
                <Input ref={inputRefTitle} label="title" type="text" />
            </p>

            <p>
                <Input ref={inputRefDescription} label="description" isTextarea /></p>

            <p>
                <Input ref={inputRefDueDate} label="due date" type="date" />
            </p>
        </div>
    </div>
}   