import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { BsPlus } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import ProtectedEdit from "../../Account/ProtectedEdit";

export default function LessonControlButtons({ moduleId, deleteModule, editModule }: 
  { moduleId: string; deleteModule: (moduleId: string) => void; 
    editModule: (moduleId: string) => void } ) {
  return (
    <div className="float-end">
      <ProtectedEdit><FaPencil onClick={() => editModule(moduleId)} className="text-primary me-3" /></ProtectedEdit>
      <ProtectedEdit><FaTrash className="text-danger me-2 mb-1" onClick={() => deleteModule(moduleId)}/></ProtectedEdit>
      <GreenCheckmark />
      <ProtectedEdit><BsPlus className="fs-2"/></ProtectedEdit>
      <IoEllipsisVertical className="fs-4" />
    </div>
);}