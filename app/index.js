window.onload = function () {
  var radar1Topics = [];
  var radar1TopicData = [];

  var radar2Companies = [];
  var radar2CompanyData = [];

  var retailSalesX = [];
  var retailSalesTypes = [];
  var retailSalesData = [];

  var newsFeed = [];
  var newsFeedResult = [];

  //show all news for given topic, every 8 seconds
    //data.topic.->

  $.ajax({
    url:'http://localhost:3000/industryintel',
    type:'GET',
    contentType:'application/json',
    success:function(data){      
      console.log('data',data);
      data.topic.forEach(function(topic){
        for (var key in topic){
          if(key === 'topic'){
            radar1Topics.push(topic[key]);
          } else if (key === 'totalarticles'){
            radar1TopicData.push(topic[key]);
          } else if (key === 'articles'){
            //arr of articles to look thru
            newsFeed = topic[key];

            newsFeed.forEach(function(article){
              //grab title, source, and context_date
              $('.articles').append(
                "<ul>" + article.title + "<br>" + article.context_source + " " + article.context_date +  "</ul><br>"
              )
            });
          }
        }
      });  

      data.company.forEach(function(company){
        for (var key in company){
          if(key === 'company'){
            radar2Companies.push(company[key]);
          } else if (key === 'totalarticles'){
            radar2CompanyData.push(company[key]);
          }
        }
      });

      data.retail_sales.xLabel.forEach(function(year,idx){data.retail_sales.xLabel[idx] = year.toString();});

      retailSalesData = data.retail_sales.data;
      retailSalesTypes = data.retail_sales.key;
      retailSalesX = data.retail_sales.xLabel;

      

    },
    error:function(err){
      console.log('error ', err);
    }
  });

  $.ajax({
    url:'http://localhost:3000/table',
    type:'GET',
    contentType:'application/json',
    success:function(data){
      //console.log('table',data);
    },
    error:function(err){
      console.log('error ', err);
    }
  });

  //setTimeout solves async issue with data gathered in get request
  setTimeout(function(){
  var ctx = document.getElementById("radar1");
    var topics = new Chart(ctx, {
        type: 'radar',
        data: {
        labels: radar1Topics,
        datasets: [
            {
                label: "My First dataset",
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                pointBackgroundColor: "rgba(255,99,132,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(255,99,132,1)",
                data: radar1TopicData
            }
        ]
    },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });

    var ctx2 = document.getElementById("radar2");
    var companies = new Chart(ctx2, {
        type: 'radar',
        data: {
        labels: radar2Companies,
        datasets: [
            {
                label: "My First dataset",
                backgroundColor: "rgba(179,181,198,0.2)",
                borderColor: "rgba(179,181,198,1)",
                pointBackgroundColor: "rgba(179,181,198,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(179,181,198,1)",
                data: radar2CompanyData
            }
        ]
    },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });

    console.log('test',retailSalesX)

    var ctx3 = document.getElementById("multiLine");
    var salesCompare = new Chart(ctx3, {
        type: 'line',
        data: {
        labels: retailSalesX,
        datasets: [
            {
                label: "My First dataset",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 44, 88, 20, 90, 40, 50, 30, 60, 11, 77],
                spanGaps: false,
            }
        ]
    },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });

    var ctx4 = document.getElementById("multiBar");
    var employmentCompare = new Chart(ctx4, {
        type: 'bar',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });      
    },100);

  //jquery is available...

  //upon having the data
    //render a list of all articles for one topic

    //once have this, figure out how to get list
      //to update on interval.
}