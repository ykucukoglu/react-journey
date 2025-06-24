import { useState } from "react";

function AddEmployeeModal({ isOpen, onCloseAddModal, onAddEmployee }) {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    gender: '',
    department: ''
  })

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddEmployee(formData);
    onCloseAddModal();
    setFormData({
      name: '',
      email: '',
      address: '',
      phone: '',
      gender: '',
      department: ''
    })
  }

  function handleCancel(){
    onCloseAddModal();
        setFormData({
      name: '',
      email: '',
      address: '',
      phone: '',
      gender: '',
      department: ''
    })
  }

  if (!isOpen) return null;

  return (
    <>
      <div id='addEmployeeModal' className='modal fade show'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <form onSubmit={handleSubmit}>
              <div className="modal-header">
                <h4 className="modal-title">Add Employee</h4>
                <button onClick={onCloseAddModal} type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Name</label>
                  <input name='name' value={formData.name} onChange={handleChange} type="text" className='form-control' required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input name='email' value={formData.email} onChange={handleChange} type="email" className='form-control' required />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <textarea name='address' value={formData.address} onChange={handleChange} className='form-control' required></textarea>
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input name='phone' value={formData.phone} onChange={handleChange} type="text" className='form-control' required />
                </div>
                <div className="form-group">
                  <label>Gender</label>
                  <div>
                    <label>
                      <input name='gender' value="Male" checked={formData.gender === 'Male'} onChange={handleChange} type="radio" required />
                      Male
                    </label>
                    <label>
                      <input name='gender' value="Female" checked={formData.gender === 'Female'} onChange={handleChange} type="radio" required />
                      Female
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <label>Department</label>
                  <div>
                    <select name="department" value={formData.department} onChange={handleChange}>
                      <option value="" disabled>Select Department</option>
                      <option value="Finance" >Finance</option>
                      <option value="HR" >HR</option>
                      <option value="UI" >UI</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button onClick={handleCancel} type="button" className="btn btn-default">Cancel</button>
                <button type="submit" class="btn btn-success">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  )
}

export default AddEmployeeModal;