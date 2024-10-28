import { useSelector } from 'react-redux';

import { SortButtons } from './SortButtons/SortButtons';
import { useNavigate } from 'react-router-dom';
import { AddButton } from './AddButton/AddButton';
export const EmployeesList = () => {
 const data = useSelector((state: any) => state.employees.employees);
 const navigate = useNavigate();
 return (
  <div className='main__list-wrapper'>
   <SortButtons />
   <AddButton />
   {data ? (
    data.map((employeer: any) => {
     return (
      <div
       className='main__employeer'
       key={employeer.id}
       onClick={(e) => {
        e.preventDefault();
        navigate(`/employeers/${employeer.id}`);
       }}
      >
       <p className='main__employeer-item'>{employeer.name}</p>
       <p className='main__employeer-item'>
        {(employeer.role == 'cook' && 'Повар') ||
         (employeer.role == 'driver' && 'Водитель') ||
         (employeer.role == 'waiter' && 'Официант')}
       </p>
       <p className='main__employeer-item'>
        <a href={`tel:${employeer.phone}`}>{employeer.phone}</a>
       </p>
       <div className='main__employeer-status'>
        {(employeer.isArchive == true && (
         <input
          type='checkbox'
          className='main__employeer-status-chk'
          checked
          disabled
         ></input>
        )) ||
         (employeer.isArchive == false && (
          <input
           type='checkbox'
           className='main__employeer-status-chk'
           disabled
          ></input>
         ))}
       </div>
      </div>
     );
    })
   ) : (
    <p> Список пуст!</p>
   )}
  </div>
 );
};
