import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types';

interface UsersState {
  [userId: number]: User,
}

const initialState: UsersState = {};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      action.payload.forEach(user => {
        state[user.id] = user;
      })
    }
  }
});

export const { setUsers } = userSlice.actions;

export default userSlice.reducer;
