import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data}) => {

    const employees = data.map(item => {
        const { id, ...prop } = item

        return <EmployeesListItem key={id} {...prop}/>
    })


    return (
        <ul className="app-list list-group">
            {employees}
        </ul>
    )
}

export default EmployeesList;