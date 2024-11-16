import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { MdOutlineHome } from "react-icons/md";
import { BsFileBarGraph } from "react-icons/bs";
import { TfiAnnouncement } from "react-icons/tfi";
import { MdNotificationsNone } from "react-icons/md";
import ProtectedEdit from "../../Account/ProtectedEdit";

{/* Find more icons */}
export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "300px" }}>
      <h2>Course Status</h2>
      <ProtectedEdit>
        <div className="d-flex">
          <div className="w-50 pe-1">
            <button className="btn btn-lg btn-secondary w-100 text-nowrap ">
              <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish </button>
          </div>
          <div className="w-50">
            <button className="btn btn-lg btn-success w-100">
              <FaCheckCircle className="me-2 fs-5" /> Publish </button>
          </div>
        </div><br />
      </ProtectedEdit>
      <ProtectedEdit>
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
          <BiImport className="me-2 fs-5" /> Import Existing Content </button>
      </ProtectedEdit>
      <ProtectedEdit>
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
          <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons </button>
      </ProtectedEdit>
      <ProtectedEdit>
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <MdOutlineHome  className="me-2 fs-5" /> Choose Home Page </button>
      </ProtectedEdit>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BsFileBarGraph className="me-2 fs-5" /> View Course Stream </button>
      <ProtectedEdit>
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <TfiAnnouncement className="me-2 fs-5" /> New Announcement </button>
      </ProtectedEdit>  
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BsFileBarGraph className="me-2 fs-5" /> New Analytics </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <MdNotificationsNone className="me-2 fs-5" /> View Course Notifications </button>
    </div>
);}