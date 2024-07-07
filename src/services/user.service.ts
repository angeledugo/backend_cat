import User from '../models/user';

export const loginUser = async (username: string, password: string) => {
  const user = await User.findOne({ username, password });
  return user;
};

export const registerUser = async (username: string, password: string) => {
  const newUser = new User({ username, password });
  await newUser.save();
  return newUser;
};