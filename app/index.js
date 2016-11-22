window.onload = function () {
  var radar1Topics = [];
  var radar1TopicData = [];

  var radar2Companies = [];
  var radar2CompanyData = [];

  var retailSalesX = [];
  var retailSalesTypes = [];
  var retailSalesData = [];

  //arr of nested objects contianing the feed
  var newsFeed = [];

  $.ajax({
    url:'http://localhost:3000/industryintel',
    type:'GET',
    contentType:'application/json',
    success:function(data){      
      console.log('data',data);
      data.topic.forEach(function(topic,topicIndex){

        newsFeed[topicIndex] = {};
        newsFeed[topicIndex].articles = {};
        newsFeed[topicIndex].articles.topic = topic.topic;

        for (var key in topic){
          if(key === 'topic'){
            radar1Topics.push(topic[key]);
          } else if (key === 'totalarticles'){
            radar1TopicData.push(topic[key]);
          } else if (key === 'articles'){
            //each article's object must be pushed into arr
            topic[key].forEach(function(article,articleIndex){
              //grab title, source, and context_date
              newsFeed[topicIndex].articles[articleIndex] = {};
              newsFeed[topicIndex].articles[articleIndex].description = article.title;
              newsFeed[topicIndex].articles[articleIndex].title = article.context_source;
              newsFeed[topicIndex].articles[articleIndex].date = article.context_date;
            });            
          }
        }
      });  
      //now that we have this we can build the card with this.
      //console.log('NO',newsFeed);

      (function(){
        var feedIndex = 0;

        function increment(){
          feedIndex = (feedIndex === newsFeed.length-2 ? 0 : feedIndex + 1);      
        }

        setInterval(function(){
          //newsFeed [feedIndex] -each item has articles object
          //that articles object has multiple objects (can iterate over)
          var articlesObj = newsFeed[feedIndex].articles; //an object
          var articleTopic = newsFeed[feedIndex].articles.topic;
          //clear list before render new one
          $('.articles').empty();

          for (var key in articlesObj){ //0,1,2,3,4 - keys
            for (var attr in articlesObj[key]){//desc/title/etc - keys
              //console.log(articlesObj[key]); 

              if(articlesObj[key].description === undefined || articlesObj[key].title === undefined || articlesObj[key].date === undefined){
                break;
              }

              $('.articles').append(
                '<li>' + 
                  articlesObj[key].description + '<br>' + 
                  articlesObj[key].title + " " + articlesObj[key].date +
                '</li>' + '<hr>'
              );
              break;
            }
          }

          increment();
        },3000);
      })();     

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

  // $.ajax({
  //   url:'http://localhost:3000/table',
  //   type:'GET',
  //   contentType:'application/json',
  //   success:function(data){
  //     //console.log('table',data);
  //   },
  //   error:function(err){
  //     console.log('error ', err);
  //   }
  // });

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
            labels: ["Year Ago", "Prv", "Jan '16"],
            datasets: [{
                label: "Employment: Retail: Bldg. & Garden Supply",
                data: [12, 19, 3],
                backgroundColor: [
                    "gray",
                    "gray",
                    "gray"
                ],
                borderColor: [
                    "gray",
                    "gray",
                    "gray"
                ],
                borderWidth: 1
            },
            {
                label: "Employment: Retail: Department Stores",
                data: [10, 11, 4],
                backgroundColor: [
                    "green",
                    "green",
                    "green"
                ],
                borderColor: [
                    "green",
                    "green",
                    "green"
                ],
                borderWidth: 1
            },
            {
                label: "Employment: Retail: General Merchandise",
                data: [13, 17, 5],
                backgroundColor: [
                    "orange",
                    "orange",
                    "orange"
                ],
                borderColor: [
                    "orange",
                    "orange",
                    "orange"
                ],
                borderWidth: 1
            },
            {
                label: "Employment: Retail: Grocery Stores",
                data: [9, 16, 7],
                backgroundColor: [
                    "purple",
                    "purple",
                    "purple"
                ],
                borderColor: [
                    "purple",
                    "purple",
                    "purple"
                ],
                borderWidth: 1
            },
            {
                label: "Employment: Retail: Health, Personal Care",
                data: [15, 10, 9],
                backgroundColor: [
                    "red",
                    "red",
                    "red"
                ],
                borderColor: [
                    "red",
                    "red",
                    "red"
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                xAxes: [{
                  stacked:true
                }],
                yAxes: [{
                    stacked:true,
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