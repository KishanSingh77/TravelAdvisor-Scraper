const puppeteer = require("puppeteer");
const URL =
  "https://www.tripadvisor.com/Restaurant_Review-g60763-d15873406-Reviews-Ortomare_Ristorante_Pizzeria-New_York_City_New_York.html";

puppeteer
  .launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--window-size=1920,1080"
    ]
  })
  .then(async browser => {
    const page = await browser.newPage();
    await page.goto(URL);
    await page.waitForSelector("body");

    //awaiting click
    await page.click(".taLnk.ulBlueLinks");
    await page.waitForFunction(
      'document.querySelector("body").innerText.includes("Show less")'
    );

    //page evaluation

    var reviews = await page.evaluate(() => {
      var results = [];

      var items = document.body.querySelectorAll(".review-container");
      items.forEach(item => {
        /* Get and format Rating */
        let ratingElement = item
          .querySelector(".ui_bubble_rating")
          .getAttribute("class");
        let integer = ratingElement.replace(/[^0-9]/g, "");
        let parsedRating = parseInt(integer) / 10;

        /* Get and format date of Visit */
        let dateOfVisitElement = item.querySelector(
          ".prw_rup.prw_reviews_stay_date_hsx"
        ).innerText;
        let parsedDateOfVisit = dateOfVisitElement
          .replace("Date of visit:", "")
          .trim();

        //parsing

        results.push({
          rating: parsedRating,
          dateOfVisit: parsedDateOfVisit,
          ratingDate: item.querySelector(".ratingDate").getAttribute("title"),
          title: item.querySelector(".noQuotes").innerText,
          content: item.querySelector(".partial_entry").innerText
        });
      });
      return results;
    });
    console.log(reviews);
    await browser.close();
  })
  .catch(function(error) {
    console.error(error);
  });
