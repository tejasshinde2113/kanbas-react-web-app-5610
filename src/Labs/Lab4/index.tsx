import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariables";
import ObjectStateVariable from "./ObjectStateVariables";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";

import ReduxExamples from "./ReduxExamples";
import { useSelector } from "react-redux";


  


export default function Lab1() {
    function sayhello() {
        alert("Hello");
    } 
    const { todos } = useSelector((state: any) => state.todosReducer);





    return (
        <div id="wd-lab4">
            <h2>Lab 4</h2>


            <ClickEvent />
            <PassingDataOnEvent />
            <PassingFunctions theFunction={sayhello}/>
            <EventObject />
            <Counter />
            <BooleanStateVariables />
            <StringStateVariables />
            <DateStateVariable />
            <ObjectStateVariable />
            <ArrayStateVariable />
            <ParentStateComponent />
            
            <ReduxExamples />
            <ul className="list-group">
                {todos.map((todo: any) => (
                <li className="list-group-item" key={todo.id}>
                    {todo.title}
                </li>
                ))}
            </ul>
        </div>
    )
};