
function Modal({isOpen, onClose, children}) {
    if(!isOpen){
        return null
    }

    return(
        <>
            <div className="">
                <button className="" onClick={onClose}>
                    X
                </button>
                {children}
            </div>
        </>
    )


}
export default Modal