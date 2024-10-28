import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setEmployee } from '../../../../features/employees/employSplice';

export const SelectRole = () => {
 const [isOpen, setOpen] = useState(false);
 const [role, setRole] = useState(null);
 const { id }: any = useParams();
 const data = useSelector((state: any) => state.employees.employees);
 const employeerData = data.filter((employeer: any) => employeer.id == id);
 const dispatch = useDispatch();

 return (
  <div
   className='main__select-option'
   onClick={() => {
    setOpen(!isOpen);
   }}
  >
   <p className='main__select-option-name'>
    {role == null
     ? (employeerData[0].role == 'cook' && 'Повар') ||
       (employeerData[0].role == 'driver' && 'Водитель') ||
       (employeerData[0].role == 'waiter' && 'Официант')
     : role}
   </p>
   <ul
    className={`main__select-option-dropdown ${isOpen ? 'active' : 'inactive'}`}
   >
    <li
     className='main__select-option-dropdown-item'
     data-role='cook'
     onClick={(e: any) => {
      setRole(e.target.innerHTML);
      dispatch(setEmployee({ id: id, role: e.target.dataset.role }));
     }}
    >
     Повар
    </li>
    <li
     className='main__select-option-dropdown-item'
     data-role='driver'
     onClick={(e: any) => {
      setRole(e.target.innerHTML);
      dispatch(setEmployee({ id: id, role: e.target.dataset.role }));
     }}
    >
     Водитель
    </li>
    <li
     className='main__select-option-dropdown-item'
     data-role='waiter'
     onClick={(e: any) => {
      setRole(e.target.innerHTML);
      dispatch(setEmployee({ id: id, role: e.target.dataset.role }));
     }}
    >
     Официант
    </li>
   </ul>
  </div>
 );
};
