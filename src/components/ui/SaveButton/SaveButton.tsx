import { useDispatch } from 'react-redux';
import { saveEmployee } from '../../../features/employees/employSplice';
import { useNavigate, useParams } from 'react-router-dom';

export const SaveButton = () => {
 const navigate = useNavigate();
 const dispatch = useDispatch();
 const { id }: any = useParams();

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
