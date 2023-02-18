function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="absolute top-10 shadow-2xl  rounded bg-neutral-50 w-48 h-24 z-50 p-2 border">
        <button className="text-gray-500" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </>
  );
}
export default Modal;
