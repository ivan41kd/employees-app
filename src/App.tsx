import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../src/store/store';
import { EmployeesList } from './components/ui/EmployeesList';
export const App = () => {
 return (
  <>
   <EmployeesList />
  </>
 );
};
