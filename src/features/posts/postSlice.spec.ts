import postReducer, {
  PostState,
  setPosts,
} from './postsSlice';

const mockPosts = [
  {
    body: "quia et suscipit\nsuscipit recusandae nostrum rerum est autem sunt rem eveniet architecto",
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    userId: 1,
  },
]

describe('counter reducer', () => {
  const initialState: PostState = {
    posts: [],
    status: 'loading',
  };
  it('should handle initial state', () => {
    expect(postReducer(undefined, { type: 'unknown' })).toEqual({
      posts: [],
      status: 'loading',
    });
  });

  it('should handle new posts', () => {
    const actual = postReducer(initialState, setPosts(mockPosts));
    expect(actual.posts.length).toEqual(1);
  });
});
