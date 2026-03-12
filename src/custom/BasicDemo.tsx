import React, { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";
import type { AutoCompletePassThroughOptions } from "primereact/autocomplete"; // Added 'type' keyword


import { Button } from "primereact/button";
import useStore from "../store/store";

const autoCompleteStyles: AutoCompletePassThroughOptions = {
    root: { className: 'relative flex w-full' },
    container: { 
        className: 'flex flex-wrap gap-2 w-full border-2 border-gray-300 rounded px-2 py-1 focus-within:border-blue-500 transition-colors' 
    },
    token: { 
        className: 'bg-blue-100 text-blue-700 px-2 py-1 rounded-md flex items-center gap-1' 
    },
    inputToken: { className: 'flex-1 inline-flex' },
    input: { 
        root: { className: 'outline-none bg-transparent w-full min-w-[5rem]' } 
    },
    panel: { 
        className: 'bg-white shadow-lg border border-gray-200 rounded-md mt-1 max-h-60 overflow-auto z-50' 
    },
    list: { className: 'py-2 list-none m-0' },
    item: ({ context }: any) => ({
        className: `px-4 py-2 cursor-pointer transition-colors ${
            context.selected ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
        }`
    })
};

export default function BasicDemo() {
    
    const {modal1, toggleModal1} = useStore()
    const [value, setValue] = useState<string[]>([]);
    const [items, setItems] = useState<string[]>([]);

    const search = (event: { query: string }) => {
        const defaultItems = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes', 'Kiwi'];
        if (!event.query) {
            setItems(defaultItems);
        } else {
            setItems(defaultItems.filter(item => item.toLowerCase().includes(event.query.toLowerCase())));
        }
    };

    return (
        
    <div className="p-4 flex flex-col gap-4 max-w-md mx-auto relative">
        {/* Header Row */}
        <div className="flex justify-center items-center gap-2">
            <AutoComplete
                multiple
                value={value}
                suggestions={items}
                completeMethod={search}
                className="flex-1 hidden xl:flex"
                onChange={(e) => setValue(e.value)}
                placeholder="Search fruits..."
                pt={autoCompleteStyles} 
            />
            <Button className="gradient-button hidden sm:block whitespace-nowrap"> 
                Empieza gratis 
            </Button>
            {/* Added a hover effect to the toggle */}
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors md:hidden" onClick={() => toggleModal1()}> 
                <svg width="24" className="!flex" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />
                </svg>
            </button>
        </div>

        {/* Modal/Dropdown Area */}
        {modal1 && (
            // Cleaned up the positioning and added shadow/rounded corners
            <div className="absolute top-[70px] left-4 right-4 bg-white 
            border border-gray-200 shadow-xl rounded-lg p-4 z-[60] animate-in 
            fade-in slide-in-from-top-2 duration-200">
                <h3 className="font-bold mb-2 text-gray-800">Menú de Navegación</h3>
                <ul className="space-y-2 text-gray-600">
                    <li className="p-2 hover:bg-gray-50 rounded cursor-pointer">Inicio</li>
                    <li className="p-2 hover:bg-gray-50 rounded cursor-pointer">Servicios</li>
                    <li className="p-2 hover:bg-gray-50 rounded cursor-pointer">Contacto</li>
                </ul>
            </div>
        )}
    </div>
);
}