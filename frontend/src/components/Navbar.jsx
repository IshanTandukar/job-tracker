export const Navbar = ({ setShowModal, setEditingApplication }) => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="flex  mx-auto px-6 py-4 items-center relative ">
        <h1 className="text-3xl font-bold absolute left-5 -translate-x-0.5">
          Job Application Tracker
        </h1>

        <div className="ml-auto">
          <button
            onClick={() => {
              setEditingApplication(null);
              setShowModal(true);
            }}
            className="bg-blue-500  text-white px-5 py-2 mt-2 rounded-lg hover:backdrop-opacity-90 cursor-pointer "
          >
            + Add Application
          </button>
        </div>
      </div>
    </nav>
  );
};
