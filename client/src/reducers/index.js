import { combineReducers } from 'redux';

import TopicReducer from './topic_reducer';
import NewsReducer from './news_reducer';
import CompaniesReducer from './companies_reducer';
import RetailEmploymentReducer from './retail_employment_reducer';
import RetailSalesReducer from './retail_sales_reducer';

const rootReducer = combineReducers({
  allTopics: TopicReducer,
  currentNews: NewsReducer,
  companies: CompaniesReducer,
  retailEmployment: RetailEmploymentReducer,
  retailSales: RetailSalesReducer
});

export default rootReducer;
