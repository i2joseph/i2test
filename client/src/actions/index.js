import axios from 'axios'

export const TOPICS = 'TOPICS';
export const COMPANIES = 'COMPANIES';
export const CURRENT_NEWS = 'CURRENT_NEWS';
export const NEWS_COUNTER = 'NEWS_COUNTER';
export const RETAIL_EMPLOYMENT = 'RETAIL_EMPLOYMENT';
export const RETAIL_SALES = 'RETAIL_SALES';

// fetching all intel
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
      })

      // recurse every 8 seconds
      // setTimeout(() => {
      //   updateNews(allNews, int + 1);
      // }, 8000);
    }

    // GET intel here
    return axios({
      method: 'GET',
      url: '/api/intel',
    })
    .then((response) => {
      // console.log("RESPONSE HERE: ", response);

      // dispatch intel to reducer here:
      dispatch({
        type: TOPICS,
        payload: response.data.topic
      });

      // dispatch current news and news counter to reducer here:
      updateNews(response.data.topic, counter);
    })
  }
}