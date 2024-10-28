import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface EmployState {
 employees: {
  id: number;
  name: string;
  isArchive: boolean;
  role: string;
  phone: string | number;
  birthday: string | number;
 }[];
}
interface CurrentEmployState {
 currentEmployeer: {
  id?: number;
  name?: string;
  isArchive?: boolean;
  role?: string;
  phone?: string | number;
  birthday?: string | number;
 };
}
interface NewEmployState {
 newEmployeer: {
  id?: number;
  name?: string;
  isArchive?: boolean;
  role?: string;
  phone?: string | number;
  birthday?: string | number;
 };
}

const initialState: EmployState | CurrentEmployState | NewEmployState = {
 employees: !JSON.parse(localStorage.getItem('employees'))
  ? [
     {
      id: 1,
      name: 'Илья Емельянов',
      isArchive: false,
      role: 'driver',
      phone: '+7 (883) 508-3269',
      birthday: '12.02.1982',
     },
     {
      id: 2,
      name: 'Александр Ларионов',
      isArchive: true,
      role: 'waiter',
      phone: '+7 (823) 440-3602',
      birthday: '26.01.1986',
     },
     {
      id: 3,
      name: 'Богдан Давыдов',
      isArchive: false,
      role: 'driver',
      phone: '+7 (971) 575-2645',
      birthday: '29.11.1990',
     },
     {
      id: 4,
      name: 'Олимпиада Макарова',
      isArchive: true,
      role: 'waiter',
      phone: '+7 (945) 447-2286',
      birthday: '06.01.1987',
     },
     {
      id: 5,
      name: 'Алла Котова',
      isArchive: false,
      role: 'cook',
      phone: '+7 (948) 523-2964',
      birthday: '26.01.1982',
     },
     {
      id: 6,
      name: 'Кира Колесникова',
      isArchive: true,
      role: 'cook',
      phone: '+7 (929) 592-3637',
      birthday: '25.02.1972',
     },
     {
      id: 7,
      name: 'Александр Третьяков',
      isArchive: false,
      role: 'driver',
      phone: '+7 (872) 568-2916',
      birthday: '31.05.1979',
     },
     {
      id: 8,
      name: 'Пелагея Морозова',
      isArchive: false,
      role: 'driver',
      phone: '+7 (977) 521-3479',
      birthday: '11.09.1981',
     },
     {
      id: 9,
      name: 'Агафон Громов',
      isArchive: true,
      role: 'driver',
      phone: '+7 (868) 569-3159',
      birthday: '07.06.1988',
     },
     {
      id: 10,
      name: 'Владлен Тетерин',
      isArchive: true,
      role: 'driver',
      phone: '+7 (808) 592-2480',
      birthday: '20.06.1978',
     },
     {
      id: 11,
      name: 'Валерий Пестов',
      isArchive: false,
      role: 'cook',
      phone: '+7 (899) 403-2387',
      birthday: '20.01.1987',
     },
     {
      id: 12,
      name: 'Даниил Кузнецов',
      isArchive: true,
      role: 'waiter',
      phone: '+7 (933) 582-2673',
      birthday: '25.05.1987',
     },
     {
      id: 13,
      name: 'Фёдор Веселов',
      isArchive: true,
      role: 'waiter',
      phone: '+7 (951) 517-3787',
      birthday: '16.12.1972',
     },
     {
      id: 14,
      name: 'Пантелеймон Ефимов',
      isArchive: true,
      role: 'cook',
      phone: '+7 (807) 492-3627',
      birthday: '17.04.1986',
     },
     {
      id: 15,
      name: 'Иванна Калашникова',
      isArchive: true,
      role: 'waiter',
      phone: '+7 (927) 488-2568',
      birthday: '24.03.1982',
     },
     {
      id: 16,
      name: 'Прасковья Кондратьева',
      isArchive: true,
      role: 'cook',
      phone: '+7 (875) 517-3873',
      birthday: '07.06.1983',
     },
     {
      id: 17,
      name: 'Евдокия Филиппова',
      isArchive: false,
      role: 'waiter',
      phone: '+7 (877) 450-3253',
      birthday: '03.12.1994',
     },
    ]
  : JSON.parse(localStorage.getItem('employees')),
 currentEmployeer: {},
 newEmployeer: {},
};

export const employSlice = createSlice({
 name: 'employees',
 initialState,
 reducers: {
  addEmployee: (state, action) => {
   state.employees.push(state.newEmployeer);
   localStorage.setItem('employees', JSON.stringify(state.employees));
  },
  sortEmployeeByRole: (state, action) => {
   const roleToSort = action.payload;

   state.employees.sort((a: string, b: string) => {
    const roleComparison = a.role.localeCompare(b.role);

    if (roleComparison === 0) return 0;
    if (a.role === roleToSort) return -1;
    if (b.role === roleToSort) return 1;

    return roleComparison;
   });
  },
  sortEmployeeByStatus: (state, action) => {
   const statusToSort = JSON.parse(action.payload);
   state.employees.sort((a: boolean, b: boolean) => {
    if (a.isArchive === statusToSort) {
     return -1;
    }
    if (b.isArchive === statusToSort) {
     return 1;
    }
    return Number(a.isArchive) - Number(b.isArchive);
   });
  },
  sortEmployeeByName: (state, action) => {
   const nameToSort = action.payload;
   state.employees.sort((a: string, b: string) => {
    const nameComparison = a.name.localeCompare(b.name);

    if (nameComparison === 0) return 0;
    if (a.name === nameToSort) return -1;
    if (b.name === nameToSort) return 1;

    return nameComparison;
   });
  },
  sortEmployeeByDate: (state) => {
   state.employees.sort((a, b) => {
    return (
     new Date(a.birthday.split('.').reverse().join('-')).getTime() -
     new Date(b.birthday.split('.').reverse().join('-')).getTime()
    );
   });
  },
  setEmployee: (state, action) => {
   state.employees.map((employeer) => {
    if (employeer.id === Number(action.payload.id)) {
     state.currentEmployeer = employeer;
     action.payload.name
      ? (state.currentEmployeer.name = action.payload.name)
      : null;
     action.payload.phone
      ? (state.currentEmployeer.phone = action.payload.phone)
      : null;
     action.payload.birthday
      ? (state.currentEmployeer.birthday = action.payload.birthday)
      : null;
     action.payload.role
      ? (state.currentEmployeer.role = action.payload.role)
      : null;
     action.payload.isArchive
      ? (state.currentEmployeer.isArchive = !state.currentEmployeer.isArchive)
      : null;
    }
   });
  },
  setNewEmployee: (state, action) => {
   state.newEmployeer = {
    id: state.employees[state.employees.length - 1].id + 1,
    name: action.payload.name || state.newEmployeer.name,
    isArchive:
     action.payload.status !== undefined
      ? action.payload.status
      : state.newEmployeer.isArchive,
    role: action.payload.role || state.newEmployeer.role,
    phone: action.payload.number || state.newEmployeer.phone,
    birthday: action.payload.birthday || state.newEmployeer.birthday,
   };
  },
  saveEmployee: (state, action) => {
   state.employees.map((employeer) => {
    if (employeer.id === Number(action.payload.id)) {
     employeer = state.currentEmployeer;
     localStorage.setItem('employees', JSON.stringify(state.employees));
    }
   });
  },
 },
});

export const {
 addEmployee,
 sortEmployeeByRole,
 sortEmployeeByStatus,
 setEmployee,
 setNewEmployee,
 saveEmployee,
 sortEmployeeByName,
 sortEmployeeByDate,
} = employSlice.actions;
export default employSlice.reducer;
