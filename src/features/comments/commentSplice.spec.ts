import commentReducer, {
  CommentState,
  setComments,
  addComment,
} from './commentSlice';

const mockComments = [
  {
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos",
    email: "Eliseo@gardner.biz",
    id: 1,
    name: "id labore ex et quam laborum",
    postId: 1,
  },
];

describe('counter reducer', () => {
  const initialState: CommentState = {
    comments: {},
    status: 'loading',
  };
  it('should handle initial state', () => {
    expect(commentReducer(undefined, { type: 'unknown' })).toEqual({
      comments: {},
      status: 'loading',
    });
  });

  it('should handle new comments', () => {
    const actual = commentReducer(initialState, setComments({ comments: mockComments, postId: 1 }));
    expect(actual.comments).toMatchObject({ 1: mockComments });
  });

  it('should handle add comment', () => {
    const actual = commentReducer(initialState, addComment({ comment: mockComments[0], postId: 1 }));
    expect(actual.comments).toMatchObject({ 1: mockComments });
  });
});
