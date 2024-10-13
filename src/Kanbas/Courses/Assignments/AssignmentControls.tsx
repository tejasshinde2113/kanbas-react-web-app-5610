import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import "./styles.css"

export default function AssignmentControls() {
  return (
    <div id="wd-assigment-controls" className="text-nowrap">
        <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end justify-content-end">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment
        </button>
        <button id="wd-add-group-btn" className="btn btn-lg btn-secondary me-1 float-end justify-content-end">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Group
        </button>
        <div id="wd-search-box" className="border justify-content-start">
          <span >
            <CiSearch className="me-1 fs-3"/> 
          </span>
          <span>
            <input id="wd-search-assignment" type="text" placeholder="Search..." 
              className="me-1 border-0"/>
          </span>
        </div>
    </div>
);}