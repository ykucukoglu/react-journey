import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

function App() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "David Hardy",
      email: "bla",
      address: "89dffd",
      phone: "(171) 555-2222",
      gender: "",
      department: ""
    }
  ]);


  const [isAddModalOpen, setisAddModalOpen] = useState(false);


  return (
    <div className='container'>
      <div className='table-wrapper'>
        <Header onOpenAddModal={() => setisAddModalOpen(true)} />
        <EmployeeList employees={employees} />
        <AddEmployeeModal isOpen={isAddModalOpen} onCloseAddModal={() => setisAddModalOpen(false)} />
      </div>
    </div>
  )
}

function Header({ onOpenAddModal }) {
  return (
    <div className="table-title">
      <div className="row">
        <div className="col-sm-6">
          <h2>Manage <b>Employees</b></h2>
        </div>
        <div className="col-sm-6">
          <button onClick={onOpenAddModal} className="btn btn-success"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></button>
          <button className="btn btn-danger"><i className="material-icons">&#xE15C;</i> <span>Delete</span></button>
        </div>
      </div>
    </div>
  )
}

function AddEmployeeModal({ isOpen, onCloseAddModal }) {

  if (!isOpen) return null;

  return (
    <>
      <div id='addEmployeeModal' className='modal fade show'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <form>
              <div className="modal-header">
                <h4 className="modal-title">Add Employee</h4>
                <button onClick={onCloseAddModal} type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  )
}

function EmployeeList({ employees }) {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>
            <span className="custom-checkbox">
              <input type="checkbox" id="selectAll" />
              <label htmlFor="selectAll"></label>
            </span>
          </th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Gender</th>
          <th>Department</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          employees.map(employee => (
            <EmployeeItem key={employee.id} employee={employee} />
          ))
        }
      </tbody>
    </table>
  )
}

function EmployeeItem({ employee }) {
  return (
    <tr>
      <td>
        <span className="custom-checkbox">
          <input
            type="checkbox"
            id="checkbox1"
          />
          <label htmlFor="checkbox1"></label>
        </span>
      </td>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.address}</td>
      <td>{employee.phone}</td>
      <td>{employee.gender}</td>
      <td>{employee.department}</td>
      <td>
        <a className="edit"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
        <a className="delete" ><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
      </td>
    </tr>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
