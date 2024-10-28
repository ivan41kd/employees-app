import { useState } from 'react';
import { sortEmployeeByStatus } from '../../../../features/employees/employSplice';
import { useDispatch } from 'react-redux';

export const SortStatus = () => {
 const [isOpen, setOpen] = useState(false);
 const dispatch = useDispatch();
 return (
  <div
   className='main__sort-option'
   onClick={() => {
    setOpen(!isOpen);
   }}
  >
   <p className='main__sort-option-name'>Сортировать по статусу</p>
   <ul
    className={`main__sort-option-dropdown ${isOpen ? 'active' : 'inactive'}`}
   >
    <li
     className='main__sort-option-dropdown-item'
     data-status={true}
     onClick={(e: any) => {
      dispatch(sortEmployeeByStatus(e.target.dataset.status));
     }}
    >
     В архиве
    </li>
    <li
     className='main__sort-option-dropdown-item'
     data-status={false}
     onClick={(e: any) => {
      dispatch(sortEmployeeByStatus(e.target.dataset.status));
     }}
    >
     Не в архиве
    </li>
   </ul>
  </div>
 );
};
