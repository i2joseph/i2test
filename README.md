before starting:
- install dependencies
  - npm install
- create bundle
  - webpack -w
- run server
  - nodemon server/server.js

http://localhost:8888/



- counldn't get Trending Topics radar to highlight topics every 8s
  - instead updates the section header with the topic
- styling on charts didn't work out very well
  - charts misbehaving when scaling screen size
- table search dropdown menu doesn't close on select item
  - click away to close dropdown menu



This app was constructed using React with Redux on the front-end and Node with Express on the back-end. It is separated into two different categories: Market and Company. The Market section contains the market information in forms of Trending Topics and Trending Companies radar charts, Latest News list, Retail Sales line chart, and Retail Employment stacked column chart components, while the Company section houses the table with the financial information of various companies. 

The charts are made with react-chartjs-2, which utilizes chartjs. The positioning of the components were adjusted from that of the comp to improve legibility of the data. 

The table is made with React Bootstrap and has a search / filter functionality built in. The table will only initialize on search, and the search button will be disabled if any field is left empty.

-MC





# i2test

1. Inside the source folder, you will find the comp.png. Please make a web page as similar as possible to this comp which generate from the JSON data source called industryintel.json. The page has a dynamic component which every 8 seconds, the highlighted radar topic is moving forward from one topic to the other. While the highlighted topic is moving, so do the Latest News content is refreshing. The latest news title has to be synced with the current highlighted radar topic. 

2. Make the responsive page on point 1 and prohibited using any responsive CSS frameworks such as Bootstrap, Foundation, 960 Grid and other. At least three responsive screens: web, tablet and phone. The responsiveness will be tested on the Chrome default developer tool devices.

3. Make the very sophisticated table module from the data source table.json. It can be configured to display 15 or n records at the time. In addition of that, the table has the ability to go to first, last and different any pages and able to search by certain fields. Prohibited to use any javascript third party plugins/components. The table columns needed below.
	1. company_name (searchable)
	2. quarter_ending 
	3. sales
	4. sales_yoy_pct
	5. earnings
	6. earnings_yoy_pct
	7. ebitda
	8. ebitda_margin
	9. net_profit_margin
	10. Country (hidden, searchable)
	11. Sector (hidden, searchable)

For the test number 1 and 2, the comp is only for your reference. Absolutely you can make your own judgment how to positioning each component, the font size, color, font style and etc. The most importantly is the radar graph highlighted topic need to be moving topic-by-topic every 8 sec and the news section is refreshing accordingly. Do as pretty as you can. Think that you present this page to your client. You can use any javascript graph modules that you are most familiar with.

For the test number 3, you can use bootstrap or any CSS framework. What we want to see here is the robustness and scalability of the component. 

You can use any javascript frameworks that you are most familiar with. 

Any questions, please don't hesitate to bug me.
