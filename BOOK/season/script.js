let springSmallImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png";
let springMediumImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png";
let summerSmallImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png";
let summerMediumImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png";
let autumnSmallImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png";
let autumnMediumImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png";
let winterSmallImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png";
let winterMediumImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png";

function changeSeasonToSpring() {
    seasonSmallImage.src = springSmallImage; //Remove double quotes
    seasonMediumImage.src = springMediumImage; //Remove double quotes
}

function changeSeasonToSummer() {
    seasonSmallImage.src = summerSmallImage; //Remove double quotes
    seasonMediumImage.src = summerMediumImage; //Remove double quotes
}

function changeSeasonToAutumn() {
    seasonSmallImage.src = autumnSmallImage; //Remove double quotes
    seasonMediumImage.src = autumnMediumImage; //Remove double quotes
}

function changeSeasonToWinter() {
    seasonSmallImage.src = winterSmallImage; //Remove double quotes
    seasonMediumImage.src = winterMediumImage; //Remove double quotes
}