import { useDispatch, useSelector } from 'react-redux';
import {
 saveEmployee,
 setEmployee,
} from '../../../features/employees/employSplice';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../../../store/store';

export const SaveButton = () => {
 const navigate = useNavigate();
 const dispatch = useDispatch();
 const { id }: any = useParams();
 const data = useSelector(
  (state: RootState) => state.employees.currentEmployeer
 );
 return (
  <button
   className='main__save-button'
   onClick={() => {
    navigate('/');
    dispatch(saveEmployee({ id: id }));
   }}
  >
   Сохранить изменения
  </button>
 );
};
