import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
 sortEmployeeByDate,
 sortEmployeeByName,
} from '../../../../features/employees/employSplice';
export const SortName = () => {
 const [isOpen, setOpen] = useState(false);
 const dispatch = useDispatch();
 return (
  <div
   className='main__sort-option'
   onClick={() => {
    setOpen(!isOpen);
   }}
  >
   <p className='main__sort-option-name'>Сортировать по </p>
   <ul
    className={`main__sort-option-dropdown ${isOpen ? 'active' : 'inactive'}`}
   >
    <li
     className='main__sort-option-dropdown-item'
     data-sort='name'
     onClick={(e: any) => {
      dispatch(sortEmployeeByName(e.target.dataset.sort));
     }}
    >
     По имени
    </li>
    <li
     className='main__sort-option-dropdown-item'
     data-sort='date'
     onClick={(e: any) => {
      dispatch(sortEmployeeByDate(e.target.dataset.sort));
     }}
    >
     По дате
    </li>
   </ul>
  </div>
 );
};
