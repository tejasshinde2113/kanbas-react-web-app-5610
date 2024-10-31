export default function AssignmentEditor({ dialogTitle, assignmentName, assignmentDesc, 
    assignmentDue, assignmentFrom, assignmentPoints,
    setAssignmentName,setAssignmentDesc, 
    setAssignmentDue, setAssignmentFrom,
    setAssignmentPoints, addAssignment }:{ 
dialogTitle: string; 
assignmentName: string; 
assignmentDesc: string;
assignmentPoints: string;
assignmentDue: string; 
assignmentFrom: string;
setAssignmentName: (title: string) => void; 
setAssignmentDesc: (description: string) => void;
setAssignmentPoints: (points: string) => void;
setAssignmentDue: (due_date_num: string) => void; 
setAssignmentFrom: (available_date_num: string) => void;
addAssignment: () => void; }) {
return (
<div id="wd-add-module-dialog" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
<div className="modal-dialog">
<div className="modal-content">
<div className="modal-header">
<h1 className="modal-title fs-5" id="staticBackdropLabel">
{dialogTitle} </h1>
<button type="button" className="btn-close" data-bs-dismiss="modal"></button>
</div>
<div className="modal-body">
{/* <input className="form-control" defaultValue={assignmentName} placeholder="Module Name"
onChange={(e) => setAssignmentName(e.target.value)}/> */}

<label htmlFor="wd-name"><h5>Assignment Name</h5></label>
<div className="input-group mb-4">
<input className="form-control" defaultValue={assignmentName} placeholder="Assignment Name"
onChange={(e) => setAssignmentName(e.target.value)} />
</div>

<label htmlFor="wd-name"><h5>Assignment Description</h5></label>
<div className="input-group mb-4">
<textarea id="wd-description" className="form-control" 
defaultValue={assignmentDesc} placeholder="Assignment Description"
onChange={(e) => setAssignmentDesc(e.target.value)} />
</div>

<div id="wd-css-responsive-forms-2">
<form>
<div className="row mb-3">
<label htmlFor="wd-points" className="text-end col-sm-3 col-form-label">
Points 
</label>
<div className="col-sm-9">
<input id="wd-points" className="form-control" 
defaultValue={assignmentPoints} placeholder="Points"
onChange={(e) => setAssignmentPoints(e.target.value)}/>
</div> 
</div>


<div className="row mb-3">
<label id="wd-assign" htmlFor="wd-assign" 
className="text-end col-sm-3 col-form-label">
Assign
</label>
<div className="col-sm-9 border">
<label id="wd-due-date" htmlFor="wd-assign-to"> Due </label>
<input className="form-control mb-4" type="date"
id="wd-due-date" defaultValue={assignmentDue} placeholder="Due"
onChange={(e) => setAssignmentDue(e.target.value)}/>
<div className="d-flex mb-4">
<div className="flex-fill">
    <label htmlFor="wd-available-from">
        Available from
    </label>
    <div><input className="form-control" type="date"
        id="wd-available-from" defaultValue={assignmentFrom} placeholder="From"
        onChange={(e) => setAssignmentFrom(e.target.value)} />
    </div>
</div>
<div className="flex-fill">
    <label htmlFor="wd-available-until">Until</label>
    <div>
    <input className="form-control" type="date"
        id="wd-available-until" />
    </div>
</div>
</div>
</div>
</div>
</form>
</div>
</div>  



<div className="modal-footer">
<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
Cancel </button>
<button onClick={addAssignment} type="button" data-bs-dismiss="modal" className="btn btn-danger">
Add Assignment </button>
</div>
</div>
</div>
</div>
);
}

