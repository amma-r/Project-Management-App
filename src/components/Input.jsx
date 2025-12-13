export default function Input({ isTextarea = false, label, type, InputClassName, ref }) {
    return <>
        {label && <label className=" mb-1 block uppercase text-sm font-medium text-stone-900" htmlFor="">{label}</label>}

        {!isTextarea ?
            <input ref={ref} className={!InputClassName ? "block w-full mb-2 px-2 py-1 rounded-sm bg-stone-200" : InputClassName} type={type} required/>
            :
            <textarea ref={ref} className="block w-full mb-2 px-2 py-1 rounded-sm bg-stone-200" type="textarea" required/>
        }

    </>
}
