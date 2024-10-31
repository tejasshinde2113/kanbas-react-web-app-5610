import { Link, useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import * as db from "../../Database"
import ProtectedEdit from "../../Account/ProtectedEdit";
import { addAssignment, editAssignment, updateAssignment, deleteAssignment } from "./reducer";
import { useSelector, useDispatch } from "react-redux"; 

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    // const assignments = db.assignments;
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const dispatch = useDispatch();
    
    // Find the assignment by ID
    const assignment = assignments.find((assignment: any) => assignment._id === aid);
    
    // Set up local state for form inputs
    const [assignmentData, setAssignmentData] = useState({
        title: assignment?.title || "",
        description: assignment?.description || "",
        points: assignment?.points || "0",
        due_date_num: assignment?.due_date_num || "",
        available_date_num: assignment?.available_date_num || "",
    });


    useEffect(() => {
        if (assignment) {
          setAssignmentData({
            title: assignment.title,
            description: assignment.description,
            points: assignment.points,
            due_date_num: assignment.due_date_num,
            available_date_num: assignment.available_date_num,
          });
        }
    }, [assignments, aid, assignment]);

    // // Handle form input changes
    // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     setAssignmentData({
    //         ...assignmentData,
    //         [e.target.id]: e.target.value,
    //     });
    // };

    // Handle the Save button click
    const handleSave = () => {
        dispatch(updateAssignment({ _id: aid, ...assignmentData }));
    };

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setAssignmentData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };




    useEffect(() => {
        // If the assignment changes, sync local state (necessary when switching between assignments)
        if (assignment) {
        setAssignmentData({
            title: assignment.title,
            description: assignment.description,
            points: assignment.points,
            due_date_num: assignment.due_date_num,
            available_date_num: assignment.available_date_num,
        });
        }
    }, [assignment]);

    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><h5>Assignment Name</h5></label>
        <div className="input-group mb-4">
            <input
                id="wd-name"
                name="title" // Set name attribute for handleChange
                className="form-control"
                value={assignmentData.title}
                onChange={handleChange}
            />
        </div>
        <label htmlFor="wd-description"><h5>Description</h5></label>
        <div className="input-group mb-4">
            <textarea
                id="wd-description"
                name="description" // Set name attribute for handleChange
                className="form-control"
                value={assignmentData.description}
                onChange={handleChange}
            />
        </div>
        
        {/* {assignments 
            .filter((assignment: any) => assignment._id === aid)
                .map((assignment: any) => ( */}
                <div id="wd-css-responsive-forms-2">
                    <form>
                        <div className="row mb-3">
                            <label htmlFor="wd-points" className="text-end col-sm-3 col-form-label">
                                Points 
                            </label>
                            <div className="col-sm-9">
                                
                                <input id="wd-points" 
                                name="points"
                                className="form-control" 
                                defaultValue={assignment.points} 
                                    onChange={handleChange}/>
                            </div> 
                        </div>


                        <div className="row mb-3">
                            <label htmlFor="wd-group" className="text-end col-sm-3 col-form-label">
                                Assignment Group
                            </label>
                            <div className="col-sm-9">
                                <select id="wd-group" className="form-select">
                                    <option selected value="Publish All">Assignment</option>
                                    <option value="Publish Selected">Non-Assignment</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label id="wd-display-grade-as" htmlFor="wd-group" 
                            className="text-end col-sm-3 col-form-label">
                                Display Grade as
                            </label>
                            <div className="col-sm-9">
                                <select id="wd-display-grade-as" className="form-select">
                                    <option selected value="Publish All">Percentage</option>
                                    <option value="Publish Selected">GPA</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label id="wd-submission-type" htmlFor="wd-group" 
                            className="text-end col-sm-3 col-form-label">
                                Submission Type
                            </label>
                            <div className="col-sm-9 border">
                                <select id="wd-submission-type" className="form-select mt-3 mb-3">
                                    <option selected value="Publish All">Online</option>
                                    <option value="Publish Selected">Offline</option>
                                </select>
                                <h5>Online entry options</h5>
                                <div className="form-check">
                                    <input className="form-check-input mt-2" type="checkbox" name="check-genre" id="wd-chkbox-comedy"/>
                                    <label className="form-check-label mt-2" id ="wd-text-entry" htmlFor="wd-text-entry">
                                        Text Entry
                                    </label><br/>

                                    <input className="form-check-input mt-2" type="checkbox" name="check-genre" id="wd-chkbox-drama"/>
                                    <label className="form-check-label mt-2" id="wd-website-url" htmlFor="wd-website-url">
                                        Website URL
                                    </label><br/>

                                    <input className="form-check-input mt-2" type="checkbox" name="check-genre" id="wd-chkbox-scifi"/>
                                    <label className="form-check-label mt-2" id="wd-media-recordings" htmlFor="wd-media-recordings">
                                        Media Recordings
                                    </label><br/>

                                    <input className="form-check-input mt-2" type="checkbox" name="check-genre" id="wd-chkbox-fantasy"/>
                                    <label className="form-check-label mt-2"id="wd-student-annotation" htmlFor="wd-student-annotation">
                                        Student Annotation
                                    </label><br />

                                    <input className="form-check-input mt-2" type="checkbox" name="check-genre" id="wd-chkbox-fantasy"/>
                                    <label className="form-check-label mt-2 mb-4" id="wd-file-upload" htmlFor="wd-file-upload">
                                        File Uploads
                                    </label>
                                </div>
                            </div>
                        </div>


                        <div className="row mb-3">
                            <label id="wd-assign" htmlFor="wd-assign" 
                            className="text-end col-sm-3 col-form-label">
                                Assign
                            </label>
                            <div className="col-sm-9 border">
                                <label htmlFor="wd-assign-to" className="mt-3">
                                    <h5>Assign to</h5>
                                </label>
                                <input className="form-control mb-4" id="wd-assign-to" value={"Everyone"} />




                                <label id="wd-due-date" htmlFor="wd-assign-to"> Due </label>
                                <input className="form-control mb-4" type="date"
                                    id="wd-due-date"
                                    name="due_date_num"
                                    defaultValue={assignment.due_date_num}
                                    onChange={handleChange}/>
                                <div className="d-flex mb-4">
                                    <div className="flex-fill">
                                        <label htmlFor="wd-available-from">
                                            Available from
                                        </label>
                                        <div><input className="form-control" type="date"
                                            id="wd-available-from"
                                            name="available_date_num"
                                            defaultValue={assignment.available_date_num}
                                            onChange={handleChange}/>
                                        </div>
                                    </div>




                                    <div className="flex-fill">
                                        <label htmlFor="wd-available-until">Until</label>
                                        <div>
                                        <input className="form-control" type="date"
                                            id="wd-available-until"
                                            name="due_date_num"
                                            defaultValue={assignment.due_date_num}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                {/* )
            )
        } */}

        <hr />
        
        <ProtectedEdit>
            <div className="d-flex justify-content-end">
                <Link to="./..">
                    <button className="btn btn-secondary me-1">
                        Cancel
                    </button>
                </Link>
                <Link to="./..">
                <button className="btn btn-danger" onClick={handleSave} id={`wd-update-${aid}-click`}>
                    Save
                </button>
                </Link>
            </div>
        </ProtectedEdit>
    </div>
);}