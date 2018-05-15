import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import reducers from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'

const logger = createLogger(
    {collapsed: true}
)


const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
})

export default function configureStore (initialState) {
  return createStore(
        reducers,
        state,
        composeEnhancers(applyMiddleware(thunk, logger))
    )
}

let state = {
    apiCallsCount: 0,
    zomatoKey: 'c7c126e30cd780bb926c539329c86473',
    inProgressApiCalls : []
}
