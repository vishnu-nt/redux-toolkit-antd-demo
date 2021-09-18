import { Comment } from "../../types";

export const fetchCommentsByPostId = (postId: number): Promise<Comment[]> =>
  new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong');
      }
    })
    .then(data => resolve(data))
    .catch((error) => reject(error));
});

// Call Post comment API here, when API is available
// Currently a mocking function to mimic making an async request for data
export const postComment = (comment: Comment): Promise<boolean> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, 1000);
  });