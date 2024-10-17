import React, { useEffect, useState } from 'react'
import './styles.css'

const LandingPage = ({ employees, page }) => {
    const [fiteredEmployees, setFiteredEmployees] = useState([]);
    const filterData = (page) => {
        const start = ((page - 1) * 10) + 1;
        const end = (page * 10);
        const arrayData = employees.filter((item, index) => index + 1 >= start && index + 1 <= end);
        setFiteredEmployees(arrayData);
    }

    useEffect(() => {
        filterData(page)
    }, [page, employees])

    return (
        <div className='landing-page'>
            <table>
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                </thead>
                <tbody>
                    {fiteredEmployees &&
                        fiteredEmployees.map(employee =>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td>{employee.role}</td>
                            </tr>

                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default LandingPage
