export default function Grades() {
    return (
        <div>
            {/* Implement Collapse All button, View Progress button, etc. */}


            <table id="grades-table" width="100%">
                <thead>
                    <tr>
                        <th>
                            Student Name
                        </th>
                        <th>
                            A1 NODE Out of 100
                        </th>
                        <th>
                            A2 HTML Out of 100
                        </th>
                        <th>
                            A3 CSS Out of 100
                        </th>
                        <th>
                            A4 JS Out of 100
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="grades-student-name">Tejas Shinde</td>
                        <td>98</td>
                        <td>89</td>
                        <td>87</td>
                        <td>90</td>
                    </tr>
                    <tr>
                        <td className="grades-student-name">Taylor Swift</td>
                        <td>98</td>
                        <td>80</td>
                        <td>87</td>
                        <td>86</td>
                    </tr>
                    <tr>
                        <td className="grades-student-name">Shravani</td>
                        <td><input type="number" name="student-grade" id="" value="98" max="100" min="0"
                            step="1"></input>
                        </td>
                        <td>89</td>
                        <td>87</td>
                        <td>90</td>
                    </tr>
                    <tr>
                        <td className="grades-student-name">Ayush</td>
                        <td><input type="number" name="student-grade" id="" value="83" max="100" min="0"
                            step="1"></input>
                        </td>
                        <td>99</td>
                        <td>94</td>
                        <td>98</td>
                    </tr>
                </tbody>
            </table>

        </div>

    );
}
