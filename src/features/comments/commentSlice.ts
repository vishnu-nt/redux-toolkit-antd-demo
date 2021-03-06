import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comment } from '../../types';

export interface CommentState {
  // Avoiding `Map` since redux recommends serializable value in store
  comments: {
    [postId: number]: Comment[]
  },
  status: 'idle' | 'loading' | 'failed',
}

const initialState: CommentState = {
  comments: {},
  status: 'loading',
};

export const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<CommentState['status']>) => {
      state.status = action.payload;
    },
    setComments: (state, action: PayloadAction<{ comments: Comment[], postId: number }>) => {
      state.comments[action.payload.postId] = action.payload.comments;
      state.status = 'idle';
    },
    addComment: (state, action: PayloadAction<{ comment: Comment, postId: number}>) => {
      const postComments = state.comments[action.payload.postId] || [];
      postComments.unshift(action.payload.comment);
      state.comments[action.payload.postId] = postComments;
    },
  }
});

export const { setComments, addComment, setLoading } = commentSlice.actions;

export default commentSlice.reducer;
