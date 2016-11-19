import { combineReducers } from 'redux';

import TopicReducer from './topic_reducer';
import NewsReducer from './news_reducer';

const rootReducer = combineReducers({
  allTopics: TopicReducer,
  currentNews: NewsReducer
});

export default rootReducer;
