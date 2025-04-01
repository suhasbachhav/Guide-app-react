import { createContext, useContext, useState } from "react";

const AccordionContext = createContext();

export function useAccordionContext(){
    const ctx = useContext(AccordionContext);

    if(!ctx){
        throw new Error('Accordion component must be wrapped by <Accodion');
    }
    return ctx;
}

function Accordion({children, className}) {
    const [openItemId, setOpenItemId] = useState()
    function openItem(id){
        setOpenItemId(id);
    }

    function closeItem(){
        setOpenItemId(null);
    }

    const contextValue = {
        openItemId,
        openItem,
        closeItem,
    }
    return ( 
        <AccordionContext.Provider value={contextValue}>
            <ul className={className}>
                {children}
            </ul>
        </AccordionContext.Provider>
     );
}

export default Accordion;