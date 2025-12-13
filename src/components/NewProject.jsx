
import { useRef } from "react";
import Input from "./Input";

export default function NewProject({ setSidebarProjects,  showNewProjHandler}) {

    const inputRefTitle = useRef()
    const inputRefDescription = useRef()
    const inputRefDueDate = useRef()

    function handleSave() {
        const data = {
            title: inputRefTitle.current.value ,
            description: inputRefDescription.current.value,
            dueDate: inputRefDueDate.current.value
        }

        data.title && data.description && data.dueDate && setSidebarProjects(prev => [...prev, data])
        showNewProjHandler(false)
    }

    return <div className=" w-full mt-16 px-20">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li><button className="text-stone-700 hover:text-red-500">Cancel</button></li>
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