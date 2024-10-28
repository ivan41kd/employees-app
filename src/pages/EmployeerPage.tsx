import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import MaskedInput from 'react-text-mask';
import { SelectButtons } from '../components/ui/SelectButtons/SelectButtons';
import { SaveButton } from '../components/ui/SaveButton/SaveButton';
import { setEmployee } from '../features/employees/employSplice';

export const EmpployeerPage = () => {
 const { id }: any = useParams();
 const data = useSelector((state: any) => state.employees.employees);
 const employeerData = data.filter((employeer: any) => employeer.id == id);
 const dispatch = useDispatch();

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
   {employeerData &&
    employeerData.map((employeer: any) => {
     return (
      <>
       <input
        type='text'
        className='main__employeer-input name'
        defaultValue={employeer.name}
        onChange={(e) =>
         dispatch(setEmployee({ id: id, name: e.currentTarget.value }))
        }
       />
       <MaskedInput
        mask={phoneMask}
        defaultValue={employeer.phone}
        className=''
        onChange={(e: any) =>
         dispatch(setEmployee({ id: id, phone: e.currentTarget.value }))
        }
       />

       <MaskedInput
        mask={dateMask}
        defaultValue={employeer.birthday}
        onChange={(e: any) =>
         dispatch(setEmployee({ id: id, birthday: e.currentTarget.value }))
        }
       />
       <SelectButtons />
       <SaveButton />
      </>
     );
    })}
  </div>
 );
};
