import { useState } from "react";

import Header from "./components/Header";
import AddEmployeeModal from "./components/AddEmployeeModal";
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

    function addEmployee(newEmployee) {
        setEmployees(prevEmployees => [
            ...prevEmployees,
            {
                ...newEmployee,
                id: Math.max(...prevEmployees.map(emp => emp.id), 0) + 1
            }
        ])
    }

    const [isAddModalOpen, setisAddModalOpen] = useState(false);


    return (
        <div className='container'>
            <div className='table-wrapper'>
                <Header onOpenAddModal={() => setisAddModalOpen(true)} />
                <EmployeeList employees={employees} />
                <AddEmployeeModal isOpen={isAddModalOpen} onCloseAddModal={() => setisAddModalOpen(false)} onAddEmployee={addEmployee} />
            </div>
        </div>
    )
}

export default App;