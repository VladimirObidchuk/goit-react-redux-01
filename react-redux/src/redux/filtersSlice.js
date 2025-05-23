import { createSlice } from '@reduxjs/toolkit';

const filtersTaskSlice = createSlice({
  name: 'filters',
  initialState: { status: 'all' },
  reducers: {
    setStatusFilter: (state, action) => {
      state.status = action.payload;
    },
  },
});
export const { setStatusFilter } = filtersTaskSlice.actions;
export default filtersTaskSlice.reducer;

// export default function filtersReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'filters/setStatusFilter':
//       return {
//         ...state,
//         filters: {
//           status: action.payload,
//         },
//       };

//     default:
//       return state;
//   }
// }

// export const setStatusFilter = value => {
//   return {
//     type: 'filters/setStatusFilter',
//     payload: value,
//   };
// };
// export const setStatusFilter = createAction('filters/setStatusFilter');
// const initialState = {
//   status: 'all',
// };
