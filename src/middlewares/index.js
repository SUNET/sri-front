import { routerMiddleware } from "connected-react-router";

const middlewares = (history) => [routerMiddleware(history)];

export default middlewares;
