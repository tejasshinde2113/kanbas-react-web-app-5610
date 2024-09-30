import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable () {
  return (
    <div id="wd-people-table">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Tony</span>{" "}
              <span className="wd-last-name">Stark</span>
            </td>
            <td className="wd-login-id">001234561S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-12-01-T00:00:00:000Z</td>
            <td className="wd-total-activity">10:21:32</td>
          </tr>
          {/* Add at least 3 more users such as Bruce Wayne, Steve Rogers, and Natasha Romanoff */}
        </tbody>
        <tbody>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Taylor </span>{" "}
              <span className="wd-last-name">Swift</span>
            </td>
            <td className="wd-login-id">001234561S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-12-01-T00:00:00:000Z</td>
            <td className="wd-total-activity">15:32:44</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Tejas</span>{" "}
              <span className="wd-last-name">Shinde</span>
            </td>
            <td className="wd-login-id">001234561S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-12-01-T00:00:00:000Z</td>
            <td className="wd-total-activity">23:32:43</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Shravani</span>{" "}
              <span className="wd-last-name">Jambure</span>
            </td>
            <td className="wd-login-id">001234561S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">TA</td>
            <td className="wd-last-activity">2020-12-01-T00:00:00:000Z</td>
            <td className="wd-total-activity">13:23:34</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Satyen</span>{" "}
              <span className="wd-last-name">Patil</span>
            </td>
            <td className="wd-login-id">001234561S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-12-01-T00:00:00:000Z</td>
            <td className="wd-total-activity">11:22:33</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Ayush</span>{" "}
              <span className="wd-last-name">Ostwal</span>
            </td>
            <td className="wd-login-id">001234561S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">Teacher</td>
            <td className="wd-last-activity">2020-12-01-T00:00:00:000Z</td>
            <td className="wd-total-activity">22:33:44</td>
          </tr>
        </tbody>
      </table>
    </div>
);}