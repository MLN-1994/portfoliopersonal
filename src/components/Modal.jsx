
function Modal({isOpen, onClose, children}) {
    if(!isOpen){
        return null
    }

    return(
        <>
            <div className="absolute shadow-2xl  rounded bg-neutral-50 w-48 h-24 z-50 ">
                
                <button className="" onClick={onClose}>
                    X
                </button>
                {children}
                
            </div>
        </>
    )


}
export default Modal