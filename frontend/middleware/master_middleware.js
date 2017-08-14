import { applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import { createLogger } from 'redux-logger';
const logger = createLogger();

const masterMiddleware = applyMiddleware(
  ReduxThunk,
  logger
);

export default masterMiddleware;
