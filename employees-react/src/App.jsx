import { useState } from "react";

import Header from "./components/Header";
import AddEmployeeModal from "./components/AddEmployeeModal";
import EditEmployeeModal from "./components/EditEmployeeModal";
import EmployeeList from "./components/EmployeeList";

function App() {
    const [employees, setEmployees] = useState([
        {
            id: 1,
            name: "David Hardy",
            email: "bla",
            address: "89dffd",
            phone: "(171) 555-2222",
            gender: "Male",
            department: "UI"

        }
    ]);

    const [isAddModalOpen, setisAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    function addEmployee(newEmployee) {
        setEmployees(prevEmployees => [
            ...prevEmployees,
            {
                ...newEmployee,
                id: Math.max(...prevEmployees.map(emp => emp.id), 0) + 1
            }
        ])
    }

    function editEmployee(updatedEmployee) {
        setEmployees(prevEmployees => 
            prevEmployees.map(emp => emp.id == updatedEmployee.id ? updatedEmployee : emp)
        )
    }

    function editClick(employee) {
        setIsEditModalOpen(true);
        setSelectedEmployee(employee);
    }


    return (
        <div className='container'>
            <div className='table-wrapper'>
                <Header onOpenAddModal={() => setisAddModalOpen(true)} />
                <EmployeeList employees={employees} onEditClick={editClick} />
                <AddEmployeeModal isOpen={isAddModalOpen} onCloseAddModal={() => setisAddModalOpen(false)} onAddEmployee={addEmployee} />
                <EditEmployeeModal isOpen={isEditModalOpen} employee={selectedEmployee}
                    onCloseEditModal={() => {
                        setIsEditModalOpen(false);
                        setSelectedEmployee(null);
                    }}
                    onEditEmployee={editEmployee} />
            </div>
        </div>
    )
}

export default App;