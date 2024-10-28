import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MaskedInput from 'react-text-mask';
import { RootState } from '../store/store';
import {
 addEmployee,
 setNewEmployee,
} from '../features/employees/employSplice';
import { redirect, useNavigate } from 'react-router-dom';

export const AddEmployeerPage = () => {
 const navigate = useNavigate();
 const dispatch = useDispatch();
 const newData = useSelector(
  (state: RootState) => state.employees.newEmployeer
 );
 const [isOpen, setOpen] = useState(false);
 const [checked, setChecked] = useState(true);
 const [role, setRole] = useState('Повар');
 useEffect(() => {
  dispatch(
   setNewEmployee({
    name: 'Иван Иванов',
    role: 'cook',
    status: true,
    number: '+7 (777) 777-7777',
    birthday: '14.01.2003',
   })
  );
 }, []);
 const phoneMask = [
  '+',
  /[1-9]/,
  ' ',
  '(',
  /[1-9]/,
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
 ];
 const dateMask = [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/];

 return (
  <div className='main__list-wrapper'>
   <>
    <input
     type='text'
     className='main__employeer-input name'
     defaultValue={'Иван Иванов'}
     onChange={(e) => {
      dispatch(setNewEmployee({ name: e.currentTarget.value }));
     }}
    />
    <MaskedInput
     mask={phoneMask}
     className=''
     defaultValue={'+7 (777) 777-7777'}
     onChange={(e: any) => {
      dispatch(setNewEmployee({ number: e.currentTarget.value }));
     }}
    />
    <MaskedInput
     mask={dateMask}
     defaultValue={'14.01.2003'}
     onChange={(e) =>
      dispatch(setNewEmployee({ birthday: e.currentTarget.value }))
     }
    />
    <div className='main__select-status'>
     <div className='main__select-chk-wrapper'>
      <input
       type='checkbox'
       className='main__employeer-status-chk'
       defaultChecked
       onChange={(e) => {
        setChecked(!checked);
        dispatch(
         setNewEmployee({
          status: e.target.checked,
         })
        );
       }}
      ></input>
      <p className='main__employeer-status-name'>
       {checked ? 'В архиве' : 'Не в архиве'}
      </p>
     </div>
    </div>
    <div
     className='main__select-option'
     onClick={() => {
      setOpen(!isOpen);
     }}
    >
     <p className='main__select-option-name'>
      {role == null
       ? (role == 'cook' && 'Повар') ||
         (role == 'driver' && 'Водитель') ||
         (role == 'waiter' && 'Официант')
       : role}
     </p>
     <ul
      className={`main__select-option-dropdown ${
       isOpen ? 'active' : 'inactive'
      }`}
     >
      <li
       className='main__select-option-dropdown-item'
       data-role='cook'
       onClick={(e) => {
        setRole(e.target.innerHTML);
        dispatch(setNewEmployee({ role: e.target.dataset.role }));
       }}
      >
       Повар
      </li>
      <li
       className='main__select-option-dropdown-item'
       data-role='driver'
       onClick={(e) => {
        setRole(e.target.innerHTML);
        dispatch(setNewEmployee({ role: e.target.dataset.role }));
       }}
      >
       Водитель
      </li>
      <li
       className='main__select-option-dropdown-item'
       data-role='waiter'
       onClick={(e) => {
        setRole(e.target.innerHTML);
        dispatch(setNewEmployee({ role: e.target.dataset.role }));
       }}
      >
       Официант
      </li>
     </ul>
    </div>
    <button
     className='main__add-button'
     onClick={() => {
      dispatch(addEmployee());
      navigate('/');
     }}
    >
     Добавить сотрудника
    </button>
   </>
  </div>
 );
};
