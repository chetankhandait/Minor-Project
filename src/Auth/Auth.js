// auth.js
import { users } from '../Data/MockData';

export const authenticateUser = async (email, password) => {
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    return user;
  }

  throw new Error("Invalid credentials");
};
