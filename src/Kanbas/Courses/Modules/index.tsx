export default function Modules () {
  return (
    <div>
      {/* Implement Collapse All button, View Progress button, etc. */}
      <div id="wd-course-status">
          <button>Collapse All</button> <button>View Progress</button> <select id="wd-select-one-Option">
              <option selected value="Publish All">Publish All</option>
              <option value="Publish Selected">Publish Selected</option>
          </select> <button>+ Module</button>
      </div>
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">Reading</span>
              <ul className="wd-content">
                <li className="wd-content-item">Text here</li>
                <li className="wd-content-item">2 line</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">Slides</span>
              <ul className="wd-content">
                <li className="wd-content-item">Text here</li>
                <li className="wd-content-item">2 line</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
          <li className="wd-lesson">
              <span className="wd-title">Reading</span>
              <ul className="wd-content">
                <li className="wd-content-item">Text here</li>
                <li className="wd-content-item">2 line</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">Slides</span>
              <ul className="wd-content">
                <li className="wd-content-item">Text here</li>
                <li className="wd-content-item">2 line</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
);}
