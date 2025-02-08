function Modal({ children, handleCloseModal }) {
  return (
    <div
      className="absolute top-0 left-0 z-10 h-screen w-full bg-black/50 md:fixed"
      onClick={handleCloseModal}
      id="modal"
    >
      <div className="absolute top-[95px] left-0 z-20 w-full rounded-t-xl bg-white px-6 py-10 md:fixed md:top-[50%] md:left-[50%] md:max-w-[688px] md:translate-x-[-50%] md:translate-y-[-50%] md:rounded-xl md:p-10 lg:max-w-[592px]">
        {children}
      </div>
    </div>
  );
}
export default Modal;
