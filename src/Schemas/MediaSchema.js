import { Schema, valuesOf, arrayOf } from 'normalizr'

const MediaSchema = new Schema('media', { idAttribute: 'id' });

const UserSchema = new Schema('user', { idAttribute: 'id' });

MediaSchema.define({
  user: UserSchema
});

export default MediaSchema;
