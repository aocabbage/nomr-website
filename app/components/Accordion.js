import {useState} from "react"

export default function AccordionTextBox({children, title}) {
    const [open, setOpen] = useState(false)
    return (
        <div className={`hover:bg-secondary-500 duration-300 border border-secondary-500 rounded-lg overflow-hidden bg-secondary-600`}>
            <div onClick={() => setOpen(!open)} className="duration-300 cursor-pointer p-3 text-primary-50 flex flex-row select-none place-content-between">
                <p>{title}</p>
                <p>&#9660;</p>
            </div>
            {open && <div className="p-4 bg-primary-50">
                {children}
            </div>}
        </div>
    )
} 