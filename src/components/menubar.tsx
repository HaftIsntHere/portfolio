import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router";

function Menubar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-gradient-to-tr from-blue-500 to-blue-400 h-10 w-[95%] absolute left-1/2 transform -translate-x-1/2 rounded-lg top-5 z-10 fixed">
        <div className="flex justify-center items-center">
          <div className="flex items-center gap-2 h-10 relative left-3">
            <button
              className="bg-red-500 h-8 items-center flex font-extrabold text-4xl"
              onClick={() => navigate("/")}
            >
              <FaHome />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menubar;
