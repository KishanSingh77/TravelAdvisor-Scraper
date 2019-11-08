# TravelAdvisor-Scraper
Node.js Puppeteer Scraper for TripAdvisor

To keep the project bundle smaller, I have gitIgnored the node_modules.
To get started,run the following in the terminal:

npm install puppeteer --save
npm install

//Now the dependencies have been installed, lets run the app

node scraper.js

//Check the terminal logs --> it prints an array of reviews about places.
Places can be changed by modifying the URL placed in the scraper.js

{ rating: 5,
    dateOfVisit: 'February 2019',
    ratingDate: 'March 2, 2019',
    title: 'Amazing Restaurant!',
    content:
     'This is by far the best place I went! Amazing food, great drinks. 
     Customer service was amazing. They had plenty menu options. 
     If your looking for great italian food, this is the place to go! 
     They also have wood fired pizza. A bar. The scenery is great.
     Im definitely going back! A must try for everyone!'}

