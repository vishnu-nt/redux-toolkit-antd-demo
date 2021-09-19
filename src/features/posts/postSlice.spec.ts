import postReducer, {
  PostState,
  setPosts,
  setFilters,
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
    filters: {},
  };
  it('should handle initial state', () => {
    expect(postReducer(undefined, { type: 'unknown' })).toEqual({
      posts: [],
      status: 'loading',
      filters: {},
    });
  });

  it('should handle new posts', () => {
    const actual = postReducer(initialState, setPosts(mockPosts));
    expect(actual.posts.length).toEqual(1);
  });

  it('should handle new filters', () => {
    const actual = postReducer(initialState, setFilters({ userIds: [3] }));
    expect(actual.filters.userIds).toHaveLength(1);
    expect(actual.filters.userIds).toStrictEqual([3]);
  });
});
