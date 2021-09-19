import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from '../../types';

export interface PostState {
  posts: Post[];
  status: 'idle' | 'loading' | 'failed';
  filters: {
    userIds?: number[],
  }
}

const initialState: PostState = {
  posts: [],
  status: 'loading',
  filters: {},
};


export const postSlice = createSlice({
  name: 'posts',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
      state.status = 'idle';
    },
    setFilters: (state, action: PayloadAction<{ userIds: number[] }>) => {
      state.filters = Object.assign(state.filters, action.payload);
    }
  }
});

export const { setPosts, setFilters } = postSlice.actions;

export default postSlice.reducer;
