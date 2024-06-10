import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import EmployeeMaster from './Components/Employee/EmployeeMaster';
  import DepartmentMaster from './Components/Department/DepartmentMaster';
  import DesignationMaster from './Components/Designation/DesignationMaster';

const AdminLayout = () => {
  return (
    <div>
        <Router>
            <Switch>
                <Route path="/employee">
                    <EmployeeMaster />
                </Route>
                <Route path='/department'>
                    <DepartmentMaster/>
                </Route>
                <Route path='/designation'>
                    <DesignationMaster/>
                </Route>
            </Switch>
        </Router>
    </div>
  )
}

export default AdminLayout