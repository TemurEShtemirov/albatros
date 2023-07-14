import { updateTaskSchema } from './schemas.js'

function parseTaskBody(body) {
  try {
    return updateTaskSchema.parse(body);
  } catch (error) {
    return error;
  }
}

export {
  parseTaskBody
};
