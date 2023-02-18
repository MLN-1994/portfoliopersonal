function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="absolute top-10 shadow-2xl  rounded bg-neutral-50 w-64 h-32 p-2 border  z-50">
        <button className="text-gray-500" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </>
  );
}
export default Modal;
