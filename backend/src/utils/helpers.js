const { updateTaskSchema } = require('./schemas.js');

function parseTaskBody(body) {
  try {
    return updateTaskSchema.parse(body);
  } catch (error) {
    return error;
  }
}

module.exports = {
  parseTaskBody
};
