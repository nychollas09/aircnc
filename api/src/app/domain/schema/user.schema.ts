import mongoose from 'mongoose';
import { User } from '../model/user';

const UserSchema = new mongoose.Schema<User>({
  email: String,
});

export default mongoose.model('User', UserSchema);
