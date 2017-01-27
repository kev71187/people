import { normalize, schema } from 'normalizr';

const userSchema = new schema.Entity('users', {
  idAttribute: 'id'
});

export const Schemas = {
  USER: userSchema
};
