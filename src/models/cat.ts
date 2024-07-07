import { Schema, model, Document } from 'mongoose';

interface ICat extends Document {
  breed_id: string;
  name: string;
  description: string;
}

const catSchema = new Schema({
  breed_id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true }
});

const Cat = model<ICat>('Cat', catSchema);

export default Cat;