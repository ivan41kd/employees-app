import { useNavigate } from 'react-router-dom';

export const AddButton = () => {
 const navigate = useNavigate();
 return (
  <button
   className='main__add-button'
   onClick={() => navigate('/employeers/add')}
  >
   Добавить сотрудника
  </button>
 );
};
