import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setEmployee } from '../../../../features/employees/employSplice';

export const SelectStatus = () => {
 const { id }: any = useParams();
 const data = useSelector((state: any) => state.employees.employees);
 const employeerData = data.filter((employeer: any) => employeer.id == id);
 const dispatch = useDispatch();

 return (
  <div className='main__select-status'>
   <div className='main__select-chk-wrapper'>
    {(employeerData[0].isArchive == true && (
     <>
      <input
       type='checkbox'
       className='main__employeer-status-chk'
       defaultChecked
       onChange={(e) => {
        console.log(!employeerData[0].isArchive == e.target.checked);
        dispatch(
         setEmployee({
          id: id,
          isArchive: !employeerData[0].isArchive == e.target.checked,
         })
        );
       }}
      ></input>
      <p className='main__employeer-status-name'>В архиве</p>
     </>
    )) ||
     (employeerData[0].isArchive == false && (
      <>
       <input
        type='checkbox'
        className='main__employeer-status-chk'
        onChange={(e) => {
         console.log(!employeerData[0].isArchive);
         dispatch(
          setEmployee({
           id: id,
           isArchive: !employeerData[0].isArchive == e.target.checked,
          })
         );
        }}
       ></input>
       <p className='main__employeer-status-name'>Не в архиве</p>
      </>
     ))}
   </div>
  </div>
 );
};
