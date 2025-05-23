import { createSlice } from '@reduxjs/toolkit';
import fetchTasks from './operations';

const taskSlice = createSlice({
  name: 'task',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const { fetchInProgress, fetchSuccess, fetchError } = taskSlice.actions;

export default taskSlice.reducer;

// export default function tasksReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'tasks/addTask': {
//       return {
//         ...state,
//         items: [...state.items, action.payload],
//       };
//     }

//     case 'tasks/deleteTask':
//       return {
//         ...state,
//         items: state.items.filter(task => task.id !== action.payload),
//       };

//     case 'tasks/toggleCompleted':
//       return {
//         ...state,
//         items: state.items.map(task => {
//           if (task.id !== action.payload) {
//             return task;
//           }
//           return {
//             ...task,
//             completed: !task.completed,
//           };
//         }),
//       };

//     default:
//       return state;
//   }
// }

// export const addTask = newTask => {
//   return {
//     type: 'tasks/addTask',
//     payload: newTask,
//   };
// };

// export const deleteTask = taskId => {
//   return {
//     type: 'tasks/deleteTask',
//     payload: taskId,
//   };
// };

// export const toggleCompleted = taskId => {
//   return {
//     type: 'tasks/toggleCompleted',
//     payload: taskId,
//   };
// };

//   { id: 0, text: 'Learn HTML and CSS', completed: true },
//   { id: 1, text: 'Get good at JavaScript', completed: true },
//   { id: 2, text: 'Master React', completed: false },
//   { id: 3, text: 'Discover Redux', completed: false },
//   { id: 4, text: 'Build amazing apps', completed: false },

// reducers: {
//     addTask: (state, action) => {
//       state.items = action.payload;
//     },
//     deleteTask: (state, action) => {
//       state.items.filter(task => task.id !== action.payload);
//     },
//     toggleCompleted: (state, action) => {
//       state.items.map(task => {
//         if (task.id !== action.payload) {
//           return task;
//         }
//         return {
//           ...task,
//           completed: !task.completed,
//         };
//       });
//     },
//   },
