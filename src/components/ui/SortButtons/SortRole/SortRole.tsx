import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sortEmployeeByRole } from '../../../../features/employees/employSplice';
export const SortRole = () => {
 const [isOpen, setOpen] = useState(false);
 const dispatch = useDispatch();
 return (
  <div
   className='main__sort-option'
   onClick={() => {
    setOpen(!isOpen);
   }}
  >
   <p className='main__sort-option-name'>Сортировать по должности</p>
   <ul
    className={`main__sort-option-dropdown ${isOpen ? 'active' : 'inactive'}`}
   >
    <li
     className='main__sort-option-dropdown-item'
     data-role='cook'
     onClick={(e) => {
      dispatch(sortEmployeeByRole(e.target.dataset.role));
     }}
    >
     Повар
    </li>
    <li
     className='main__sort-option-dropdown-item'
     data-role='driver'
     onClick={(e) => {
      dispatch(sortEmployeeByRole(e.target.dataset.role));
     }}
    >
     Водитель
    </li>
    <li
     className='main__sort-option-dropdown-item'
     data-role='waiter'
     onClick={(e) => {
      dispatch(sortEmployeeByRole(e.target.dataset.role));
     }}
    >
     Официант
    </li>
   </ul>
  </div>
 );
};
