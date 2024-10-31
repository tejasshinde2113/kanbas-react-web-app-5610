import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import "./styles.css";
import AssignmentEditor from "./AssignmentEditor";

export default function AssignmentControls({ assignmentName, assignmentDesc, assignmentPoints,
                                            assignmentDue, assignmentFrom, 
                                            setAssignmentName, setAssignmentDesc, setAssignmentPoints,
                                            setAssignmentDue, setAssignmentFrom,
                                            addAssignment }:
  { assignmentName: string; 
    setAssignmentName: (title: string) => void; 
    assignmentDesc: string;
    setAssignmentDesc: (title: string) => void;
    assignmentPoints: string;
    setAssignmentPoints: (title: string) => void; 
    assignmentDue: string; 
    setAssignmentDue: (title: string) => void; 
    assignmentFrom: string;
    setAssignmentFrom: (title: string) => void;
    addAssignment: () => void; }) {
  return (
    <div id="wd-assigment-controls" className="text-nowrap">
        <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end justify-content-end"
          data-bs-toggle="modal" data-bs-target="#wd-add-module-dialog">
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
        <AssignmentEditor dialogTitle="Add Assignment" 
                    assignmentName={assignmentName}
                    assignmentDesc={assignmentDesc}
                    assignmentPoints={assignmentPoints}
                    assignmentDue={assignmentDue}
                    assignmentFrom={assignmentFrom}
                    setAssignmentName={setAssignmentName} 
                    setAssignmentDesc={setAssignmentDesc}
                    setAssignmentPoints={setAssignmentPoints}
                    setAssignmentDue={setAssignmentDue}
                    setAssignmentFrom={setAssignmentFrom}
                    addAssignment={addAssignment} />
    </div>
);}