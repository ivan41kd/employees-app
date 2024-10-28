import { SortName } from './SortName/SortName';
import { SortRole } from './SortRole/SortRole';
import { SortStatus } from './SortStatus/SortStatus';

export const SortButtons = () => {
 return (
  <div className='main__sort'>
   <SortRole />
   <SortStatus />
   <SortName />
  </div>
 );
};
