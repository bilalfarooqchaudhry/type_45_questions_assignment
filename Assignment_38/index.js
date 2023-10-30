"use strict";
function describe_city(cityName, country = "Pakistan") {
    console.log("🚀 ~ file: index.ts:21 ~ describe_city ~ cityName:", `${cityName} is in ${country}`);
    console.log("🚀 ~ file: index.ts:23 ~ describe_city ~  country:", country);
}
const cityDefault = describe_city('Karachi');
const cityDefault2 = describe_city('Lahore');
const notDefault = describe_city('London', 'England');
