import { applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import SessionMiddleware from './session_middleware';
import createLogger from 'redux-logger';
const logger = createLogger();

const masterMiddleware = applyMiddleware(
  ReduxThunk,
  SessionMiddleware,
  logger
);

export default masterMiddleware;
