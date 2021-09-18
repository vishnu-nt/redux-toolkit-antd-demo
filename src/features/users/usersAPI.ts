import { User } from "../../types";

export const fetchUsers = (): Promise<User[]> => new Promise((resolve, reject) => {
  fetch('https://jsonplaceholder.typicode.com/users')
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
