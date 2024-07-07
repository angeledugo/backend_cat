import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
  username: string;
  password: string;
}

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }
});

const User = model<IUser>('User', userSchema);

export default User;