import { normalize, schema } from 'normalizr';

const currencySchema = new schema.Entity('currencies', {
  idAttribute: 'id'
});

export const Schemas = {
  CURRENCY: currencySchema
};
