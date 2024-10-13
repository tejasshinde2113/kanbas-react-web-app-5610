import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { IoMdArrowDropdown } from "react-icons/io";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { FaRegEdit } from "react-icons/fa";
import AssignmentControls from "./AssignmentControls";

export default function Assignments() {
    return (
      <div id="wd-assignments">

        
        {/* <input id="wd-search-assignment"
               placeholder="Search for Assignments" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button> */}
        {/* <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button>
        </h3> */}

        <AssignmentControls /> <br /><br /><br /><br />

        <ul id="wd-assignment-list" className="list-group rounded-0">
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div id="wd-assignments-title" className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" /> 
              <IoMdArrowDropdown className="me-1"/>
                ASSIGNMENTS 
              <AssignmentControlButtons />
            </div>
            <ul className="wd-lessons list-group rounded-0">
              <li className="wd-lesson list-group-item p-3 ps-1">
                <div className="d-flex">  
                  <div className="align-self-center me-3">
                    <BsGripVertical className="me-2 fs-3" />
                    <FaRegEdit className="me-1 text-success"/>
                  </div>
                  <div className="align-self-center flex-grow-1">
                    <a className="wd-assignment-link"
                      href="#/Kanbas/Courses/1234/Assignments/123">
                      A1 - ENV + HTML
                    </a><br />
                    <div className="wd-float-left text-danger me-1">
                      Multiple module 
                    </div> 
                    <div className="wd-float-left me-1"> 
                      | <b>Not available until</b> May 13 at 12:00 am | <br /> 
                    </div >
                    <div className="wd-float-left me-1">
                      <b>Due</b> May 20 at 11:59pm | 100 pts
                    </div>  
                  </div> 
                  <div className="align-self-center">
                    <LessonControlButtons />
                  </div>
                </div>
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <div className="d-flex">   
                  <div className="align-self-center me-3">
                    <BsGripVertical className="me-2 fs-3" />
                    <FaRegEdit className="me-1 text-success"/>
                  </div>
                  <div className="align-self-center flex-grow-1">
                    <a className="wd-assignment-link"
                      href="#/Kanbas/Courses/1234/Assignments/123">
                      A2 - CSS + BOOTSTRAP
                    </a><br />
                    <div className="wd-float-left text-danger me-1">
                      Multiple module 
                    </div> 
                    <div className="wd-float-left me-1"> 
                      | <b>Not available until</b> May 13 at 12:00 am | <br /> 
                    </div >
                    <div className="wd-float-left me-1">
                      <b>Due</b> May 20 at 11:59pm | 100 pts
                    </div>  
                  </div> 
                  <div className="align-self-center">
                    <LessonControlButtons />
                  </div>
                </div>
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <div className="d-flex">   
                  <div className="align-self-center me-3">
                    <BsGripVertical className="me-2 fs-3" />
                    <FaRegEdit className="me-1 text-success"/>
                  </div>
                  <div className="align-self-center flex-grow-1">
                    <a className="wd-assignment-link" 
                      href="#/Kanbas/Courses/1234/Assignments/123">
                      A3 - JAVASCRIPT + REACT
                    </a><br />
                    <div className="wd-float-left text-danger me-1">
                      Multiple module 
                    </div> 
                    <div className="wd-float-left me-1"> 
                      | <b>Not available until</b> May 13 at 12:00 am | <br /> 
                    </div >
                    <div className="wd-float-left me-1">
                      <b>Due</b> May 20 at 11:59pm | 100 pts
                    </div>  
                  </div> 
                  <div className="align-self-center">
                    <LessonControlButtons />
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>

        {/* <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A1 - ENV + HTML
            </a><br />
            Multiple module | <b>Not available until</b> May 6 at 12:00 am | <br /> 
            <b>Due</b> May 13 at 11:59pm | 100 pts
          </li>
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A2 - CSS + BOOTSTRAP
            </a><br />
            Multiple module | <b>Not available until</b> May 13 at 12:00 am | <br /> 
            <b>Due</b> May 20 at 11:59pm | 100 pts
          </li>
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A3 - JAVASCRIPT + REACT
            </a><br />
            Multiple module | <b>Not available until</b> May 20 at 12:00 am | <br /> 
            <b>Due</b> May 27 at 11:59pm | 100 pts
          </li>
        </ul> */}
      </div>
  );}
  