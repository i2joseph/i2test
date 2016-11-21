import { combineReducers } from 'redux';

import TopicReducer from './topic_reducer';
import NewsReducer from './news_reducer';
import CompaniesReducer from './companies_reducer';
import RetailEmploymentReducer from './retail_employment_reducer';
import RetailSalesReducer from './retail_sales_reducer';
import ActivePageReducer from './active_page_reducer';
import TableDataReducer from './table_data_reducer';
import SearchReducer from './search_reducer';
import SearchCompanyReducer from './search_company_reducer';
import SearchCountryReducer from './search_country_reducer';
import SearchSectorReducer from './search_sector_reducer';

const rootReducer = combineReducers({
  allTopics: TopicReducer,
  currentNews: NewsReducer,
  companies: CompaniesReducer,
  retailEmployment: RetailEmploymentReducer,
  retailSales: RetailSalesReducer,
  activePage: ActivePageReducer,
  tableData: TableDataReducer,
  search: SearchReducer,
  searchCompany: SearchCompanyReducer,
  searchCountry: SearchCountryReducer,
  searchSector: SearchSectorReducer
});

export default rootReducer;
