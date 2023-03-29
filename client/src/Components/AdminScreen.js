import React, { useEffect, useState, useCallback } from 'react';
import './AdminScreen.css';
import axios from 'axios';
import plans from '../Resources/data';
import config from './axiosConfig';

const AdminScreen = () => {

    const defaultMemberState = {
        name: '',
        contact: '',
        doj: '',
        plan: '',
        fees: ''
    };

    const [memberList, setMemberList] = useState([]);
    const [newMember, setNewMember] = useState(defaultMemberState);
    const [errorMessage, setErrorMessage] = useState('default');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewMember({ ...newMember, [name]: value });

        if (name === 'plan' && value !== 'CUSTOM') {
            let newFees = plans.filter(item => {
                return item.type === value;
            })

            newFees = newFees[0].price;
            setNewMember({ ...newMember, fees: newFees, [name]: value });
        }
    }

    const handleClick = (event) => {

        event.preventDefault();
        if (event.target.innerHTML === 'ADD' && errorMessage === '') {
            axios.post('http://localhost:8080/add', newMember, config)
                .then(res => '')
                .catch(err => console.log(err));
            setNewMember(defaultMemberState);
            setErrorMessage('default');
            getMemberData();
        } else if (event.target.innerHTML === 'CLEAR') {
            setNewMember(defaultMemberState);
            setErrorMessage('default');
        }
    }

    const getMemberData = useCallback(() => {
        axios.get('http://localhost:8080/memberList')
            .then(res => {
                setMemberList(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        getMemberData();
    }, [getMemberData]);

    useEffect(() => {

        const validateMember = () => {
            const { name, contact, doj, plan, fees } = newMember;

            if (name === '')
                setErrorMessage('Please Enter Name');
            else if (contact === '')
                setErrorMessage('Please Enter Contact');
            else if (doj === '')
                setErrorMessage('Please Enter Doj');
            else if (plan === '')
                setErrorMessage('Please Enter Plan');
            else if (fees === '')
                setErrorMessage('Please Enter Fees');
            else
                setErrorMessage('');
        }

        validateMember();
    }, [newMember]);

    return (
        <div className='tableContainer'>
            <form>
                <table>
                    <thead>
                        <tr>
                            <th>S. No.</th>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>DOJ</th>
                            <th>Plan</th>
                            <th>Fees</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {memberList.map(({ name, contact, doj, plan, fees }, index) => {

                            return <tr key={index}>
                                <td> {index + 1} </td>
                                <td> {name} </td>
                                <td> {contact} </td>
                                <td> {doj} </td>
                                <td> {plan} </td>
                                <td> Rs. {fees} </td>
                                <td><i className="fa-solid fa-pen-to-square"></i></td>
                                <td><i className="fa-regular fa-trash-can"></i></td>
                            </tr>

                        })}

                        <tr>
                            <td></td>
                            <td><input className='memberInput' required
                                value={newMember.name} onChange={handleChange} name='name' /></td>
                            <td><input className='memberInput' type='number' required
                                value={newMember.contact} onChange={handleChange} name='contact' /></td>
                            <td><input className='memberInput' type='date' required
                                value={newMember.doj} onChange={handleChange} name='doj' /></td>
                            <td>
                                <select className='memberInput' required
                                    defaultValue={newMember.plan} onChange={handleChange} name='plan' >
                                    <option style={{ display: 'none' }}>Select Plan</option>
                                    {plans.map(({ type }, index) => {
                                        return <option key={index} style={{ backgroundColor: '#050711' }}>{type}</option>
                                    })}
                                    <option style={{ backgroundColor: '#050711' }}>CUSTOM</option>
                                </select>
                            </td>
                            <td><input className='memberInput' type='number' required
                                value={newMember.fees} onChange={handleChange} name='fees' /></td>
                            <td>
                                <button onClick={handleClick} className='addMemberBtn' value='add' type='submit'>ADD</button>
                            </td>
                            <td>
                                <button onClick={handleClick} className='addMemberBtn' value='clear'>CLEAR</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div style={{ textAlign: 'center', color: 'red' }}>{errorMessage}
                </div>
            </form>
        </div>
    )
}

export default AdminScreen;