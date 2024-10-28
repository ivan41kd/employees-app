import { useParams } from 'react-router-dom';
import { SelectRole } from './SelectRole/SelectRole';
import { SelectStatus } from './SelectStatus/SelectStatus';

export const SelectButtons = () => {
 return (
  <div className='main__select'>
   <SelectStatus />
   <SelectRole />
  </div>
 );
};
