import axios from 'axios'

export const ALL_TOPICS = 'ALL_TOPICS';
export const CURRENT_NEWS = 'CURRENT_NEWS';
export const NEWS_COUNTER = 'NEWS_COUNTER';
export const COMPANIES = 'COMPANIES';
export const RETAIL_EMPLOYMENT = 'RETAIL_EMPLOYMENT';
export const RETAIL_SALES = 'RETAIL_SALES';

export const ACTIVE_PAGE = 'ACTIVE_PAGE';
export const ALL_TABLE_DATA = 'ALL_TABLE_DATA';


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


// FETCH TABLE DATA


export const selectPage = (pageNumber) => {
  return {
    type: ACTIVE_PAGE,
    payload: pageNumber
  };
}


export const getTableData = () => {
  return (dispatch) => {
    return axios({
      method: 'GET',
      url: '/api/table'
    })
    .then((response) => {
      console.log("TABLE RESPONSE: ", response.data[0]);
      dispatch({
        type: ALL_TABLE_DATA,
        payload: response.data
      })
    })
  }
}













