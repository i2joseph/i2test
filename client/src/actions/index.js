import axios from 'axios'

export const ALL_TOPICS = 'ALL_TOPICS';
export const CURRENT_NEWS = 'CURRENT_NEWS';
export const NEWS_COUNTER = 'NEWS_COUNTER';
export const COMPANIES = 'COMPANIES';
export const RETAIL_EMPLOYMENT = 'RETAIL_EMPLOYMENT';
export const RETAIL_SALES = 'RETAIL_SALES';

export const ACTIVE_PAGE = 'ACTIVE_PAGE';
export const TABLE_DATA = 'TABLE_DATA';
export const COMPANY_LIST = 'COMPANY_LIST';
export const COUNTRY_LIST = 'COUNTRY_LIST';
export const SECTOR_LIST = 'SECTOR_LIST';

export const SEARCH_COMPANY = 'SEARCH_COMPANY';
export const SEARCH_COUNTRY = 'SEARCH_COUNTRY';
export const SEARCH_SECTOR = 'SEARCH_SECTOR';


// FETCH CHART INTEL
export const getIntel = (counter) => {
  return (dispatch) => {

    // declare function that sets current news based on passed int
    const updateNews = (allNews, int) => {
      let nthNews = int % allNews.length;
      dispatch({
        type: CURRENT_NEWS,
        payload: allNews[nthNews]
      });
      dispatch({
        type: NEWS_COUNTER,
        payload: nthNews
      });

      // recurse every 8 seconds
      // setTimeout(() => {
      //   updateNews(allNews, int + 1);
      // }, 8000);
    };

    // GET intel here
    return axios({
      method: 'GET',
      url: '/api/intel',
    })
    .then((response) => {
      // console.log("RESPONSE HERE: ", response);

      // dispatch intel to reducer here:
      dispatch({
        type: ALL_TOPICS,
        payload: response.data.topic
      });
      dispatch({
        type: COMPANIES,
        payload: response.data.company
      });
      dispatch({
        type: RETAIL_EMPLOYMENT,
        payload: response.data.retail_employment
      });
      dispatch({
        type: RETAIL_SALES,
        payload: response.data.retail_sales
      })

      // dispatch current news and news counter to reducer here:
      updateNews(response.data.topic, counter);
    })
  };
};


// TABLE DATA

export const selectPage = (pageNumber) => {
  return {
    type: ACTIVE_PAGE,
    payload: pageNumber
  };
}


export const getTableInfo = () => {
  return (dispatch) => {
    return axios({
      method: 'GET',
      url: '/api/table'
    })
    .then((response) => {
      //populate search options
      let companyList = [];
      let countryList = [];
      let sectorList = [];

      response.data.forEach((eachData) => {
        if(!companyList.includes(eachData.company_name)) {
          companyList.push(eachData.company_name);
        }
        if(!countryList.includes(eachData.countryList)) {
          countryList.push(eachData.countryList);
        }
        if(!sectorList.includes(eachData.sector)) {
          sectorList.push(eachData.sector);
        }
      });
      companyList.sort();
      companyList.unshift("ALL");

      countryList.sort();
      countryList.unshift("ALL");

      sectorList.sort();
      sectorList.unshift("ALL");

      dispatch({
        type: COMPANY_LIST,
        payload: companyList
      });
      dispatch({
        type: COUNTRY_LIST,
        payload: countryList
      });
      dispatch({
        type: SECTOR_LIST,
        payload: sectorList
      })
    })
  }
}

export const searchCompany = (company) => {
  return {
    type: SEARCH_COMPANY,
    payload: company
  }
}

export const searchCountry = (country) => {
  return {
    type: SEARCH_COUNTRY,
    payload: country
  }
}

export const searchSector = (sector) => {
  return {
    type: SEARCH_SECTOR,
    payload: sector
  }
}

export const searchTable = (company, country, sector) => {
  return(dispatch) => {
    return axios({
      method: 'GET',
      url: `/api/table/company/${company}/country/${country}/sector/${sector}`
    })
    .then((response) => {
      // console.log("SEARCH RESPONSE: ", response)
      dispatch({
        type: TABLE_DATA,
        payload: response.data
      });
    })
  }
}








