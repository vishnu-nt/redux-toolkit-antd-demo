import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from '../../types';

interface PostState {
  posts: Post[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: PostState = {
  posts: [],
  status: 'loading',
};


export const postSlice = createSlice({
  name: 'posts',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
      state.status = 'idle';
    }
  }
});

export const { setPosts } = postSlice.actions;

export default postSlice.reducer;
