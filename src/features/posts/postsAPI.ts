import { Post } from "../../types";

export const fetchPosts = (): Promise<Post[]> => new Promise((resolve, reject) => {
  fetch('https://jsonplaceholder.typicode.com/posts')
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
