window.onload = function () {
  var radar1Topics = [];
  var radar1TopicData = [];

  var radar2Companies = [];
  var radar2CompanyData = [];

  var retailSalesX = [];
  var retailSalesTypes = [];
  var retailSalesData = [];

  var employment = [];
  var currentIndustry = [];

  //arr of nested objects contianing the feed
  var newsFeed = [];

  var tableData = [];

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
                  '<div style="color:gray">' + articlesObj[key].title + " " + articlesObj[key].date + "</div>" +
                '</li>' + '<hr>'
              );
              break;
            }
          }

          increment();
        },8000);
      })();     

      data.retail_employment.forEach(function(industry){        
        currentIndustry.push([industry.prv_yr, industry.prv_val, industry.val]);        
        //console.log('inside loop currentIndustry',currentIndustry);
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
      //default render 15.
      tableData = data.filter(function(company, idx){
        return idx <= 14;
      });

      tableData.forEach(function(company, idx){
        $('.financeTable').append(
          '<tr>' + 
            '<td>' + 
              (idx + 1) + 
            '</td>' +          
            '<td>' + 
              company.company_name + 
            '</td>' + 
            '<td>' + 
              company.quarter_ending +
            '</td>' + 
            '<td>' + 
              company.sales +
            '</td>' + 
            '<td>' + 
              company.sales_yoy_pct +
            '</td>' + 
            '<td>' + 
              company.earnings +
            '</td>' + 
            '<td>' + 
              company.earnings_yoy_pct +
            '</td>' + 
            '<td>' + 
              company.ebitda +
            '</td>' + 
            '<td>' + 
              company.ebitda_margin +
            '</td>' + 
            '<td>' + 
              company.net_profit_margin +
            '</td>' +                                                                                     
          '</tr>'
        )
      });

      console.log('tabledata',data);

      //all data has been loaded.
      //so we place listeners on the inputs to see
      //if user wants to change the layout of the data
      $('.numRecords').keypress(function(e){
        if(e.which === 13 && $('.numRecords').val() >= 15){
          $('.financeTable').empty();          

          //THIS SHOULD BE MOVED TO A FUNCTION/ repeating code!bad.
          tableData = data.filter(function(company, idx){
            return idx <= $('.numRecords').val();
          });

          $('.financeTable').append(
            '<table class="table table-striped table-bordered table-hover table-responsive">' + 
              '<tbody>' + 
              '<thead class="thead-inverse">' + 
              '<tr>' + 
              "<th>#</th>" +
              "<th>Comapny Name</th>" +
              "<th>Quarter Ending</th>" +
              "<th>Sales</th>" +
              "<th>Sales yoy %</th>" +
              "<th>Earnings</th>" +
              "<th>Earnings yoy %</th>" +
              "<th>EBITDA</th>" +
              "<th>EBITDA Margin</th>" +
              "<th>Net Profit Margin</th>" +
              '</tr>' +
              '</thead>' + 
              '</tbody>' +  
            '</table>'
          );        

          tableData.forEach(function(company, idx){
            if(idx < $('.numRecords').val()){
              $('.financeTable').append(
                '<tr>' + 
                  '<td>' + 
                    (idx + 1) + 
                  '</td>' +             
                  '<td>' + 
                    company.company_name + 
                  '</td>' + 
                  '<td>' + 
                    company.quarter_ending +
                  '</td>' + 
                  '<td>' + 
                    company.sales +
                  '</td>' + 
                  '<td>' + 
                    company.sales_yoy_pct +
                  '</td>' + 
                  '<td>' + 
                    company.earnings +
                  '</td>' + 
                  '<td>' + 
                    company.earnings_yoy_pct +
                  '</td>' + 
                  '<td>' + 
                    company.ebitda +
                  '</td>' + 
                  '<td>' + 
                    company.ebitda_margin +
                  '</td>' + 
                  '<td>' + 
                    company.net_profit_margin +
                  '</td>' +                                                                                     
                '</tr>'
              )
            }
          });          
        } else if (e.which === 13 && $('.numRecords').val() < 15){
          console.error('minimum 15 records displayed');
        }        
      });

      $('.tableSearch').keypress('change',function(e){
        if(e.which === 13 && $('.tableSearch').val() !== ""){

          $('.financeTable').empty();
          tableData = data.filter(function(company){
            var searchAttribute = $('.searchDropdown').val();
              console.log('searchAttribute',searchAttribute);
            if(searchAttribute === 'company'){
              //return if company match
              return $('.tableSearch').val() === company.company_name;
            }else if (searchAttribute === 'country'){
              return $('.tableSearch').val() === company.countryList;
            }else { //sector
              return $('.tableSearch').val() === company.sector;
            }
          });

          $('.financeTable').append(
            '<table class="table table-striped table-bordered table-hover table-responsive">' + 
              '<tbody>' + 
              '<thead class="thead-inverse">' + 
              '<tr>' + 
              "<th>#</th>" +
              "<th>Comapny Name</th>" +
              "<th>Quarter Ending</th>" +
              "<th>Sales</th>" +
              "<th>Sales yoy %</th>" +
              "<th>Earnings</th>" +
              "<th>Earnings yoy %</th>" +
              "<th>EBITDA</th>" +
              "<th>EBITDA Margin</th>" +
              "<th>Net Profit Margin</th>" +
              '</tr>' +
              '</thead>' + 
              '</tbody>' +  
            '</table>'
          );          

          tableData.forEach(function(company, idx){
            $('.financeTable').append(
              '<tr>' + 
                '<td>' + 
                  (idx + 1) + 
                '</td>' +               
                '<td>' + 
                  company.company_name + 
                '</td>' + 
                '<td>' + 
                  company.quarter_ending +
                '</td>' + 
                '<td>' + 
                  company.sales +
                '</td>' + 
                '<td>' + 
                  company.sales_yoy_pct +
                '</td>' + 
                '<td>' + 
                  company.earnings +
                '</td>' + 
                '<td>' + 
                  company.earnings_yoy_pct +
                '</td>' + 
                '<td>' + 
                  company.ebitda +
                '</td>' + 
                '<td>' + 
                  company.ebitda_margin +
                '</td>' + 
                '<td>' + 
                  company.net_profit_margin +
                '</td>' +                                                                                     
              '</tr>'
            )
          }); 
        }
      });


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
                label: "Trending Topics",
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
                label: "Trending Companies",
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
                label: "Retail Trends",
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

    console.log('currentIndustry',currentIndustry);

    var ctx4 = document.getElementById("multiBar");
    var employmentCompare = new Chart(ctx4, {
        type: 'bar',
        data: {
            labels: ["Year Ago", "Prv", "Jan '16"],
            datasets: [{
                label: "Employment: Retail: Bldg. & Garden Supply",
                data: currentIndustry[0],
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
                label: "currentIndustry: Retail: Department Stores",
                data: currentIndustry[1],
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
                data: currentIndustry[2],
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
                data: currentIndustry[3],
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
                data: currentIndustry[4],
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
}