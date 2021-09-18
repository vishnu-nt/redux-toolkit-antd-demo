import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import CommentsReducer from '../features/comments/commentSlice';
import postsReducer from '../features/posts/postsSlice';
import UsersReducer from '../features/users/usersSlice';

export const store = configureStore({
  reducer: {
    comments: CommentsReducer,
    posts: postsReducer,
    users: UsersReducer,
  },
  middleware: (getDefaultMiddleware) => {
    const defaultMiddleWares = getDefaultMiddleware({
      thunk: false,
    });
    return process.env.NODE_ENV !== 'production' ? defaultMiddleWares.concat(logger) : defaultMiddleWares;
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
