
/******************** RADAR CHART ********************/

// list all topics in array
export const getTopicsLabelList = (data) => {
  if(!data) {
    return [];
  }
  return data.map((eachData) => {
    return eachData.topic;
  });
}

// list all companies in array
export const getCompaniesLabelList = (data) => {
  if(!data) {
    return [];
  }
  return data.map((eachData) => {
    return eachData.company;
  });
}

// list all data info (totalarticles) in an array (topics & companies)
export const getDataList = (data) => {
  if(!data) {
    return [];
  }
  return data.map((eachData) => {
    return eachData.totalarticles;
  });
}


/******************** BAR CHART ********************/

//set datasets for line chart
export const getBarDatasets = (data) => {
  if(!data) {
    return [];
  }

  let backgroundColor = ['rgb(204, 204, 204)', 'rgb(181, 208, 238)', 'rgb(247, 210, 171)', 'rgb(206,235,165)', 'rgb(255, 165, 67)'];

  let dataReformat = data.map((eachData) => {
    return {
      label: eachData.shortname,
      data: [eachData.prv_yr, eachData.prv_val, eachData.val],
    };
  })

  for(let i = 0; i < dataReformat.length; i++) {
    dataReformat[i].backgroundColor = backgroundColor[i];
  }

  return dataReformat;
}


/******************** LINE CHART ********************/

// set x axis label for line chart
export const getLineLabels = (data) => {
  if(!data) {
    return [];
  }

  let labelsArr = data.data[0].map((eachData) => {
    return " ";
  });

  let year = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016];

  let xLabelIntervai = (data.data[0].length - 1) / (year.length - 1);

  for(let i = 0; i < year.length; i++) {
    labelsArr[Math.ceil(i * xLabelIntervai)] = year[i];
  }

  return labelsArr;
}

// set datasets for line chart
export const getLineDatasets = (data) => {
  if(!data) {
    return [];
  }

  let backgroundColor = ['rgb(114, 114, 114)', 'rgb(255, 55, 82)', 'rgb(239, 247, 0)', 'rgb(81, 148, 216)', 'rgb(255, 165, 67)', 'rgb(174, 79, 173)'];

  return data.key.map((eachData, index) => {
    return {
      label: eachData,
      fill: false,
      lineTension: 0.1,
      backgroundColor: backgroundColor[index],
      borderColor: backgroundColor[index],
      data: data.data[index]
    };
  });
}


