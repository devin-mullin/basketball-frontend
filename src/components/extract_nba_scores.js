
import cheerio from "cheerio";
import fetch from "node-fetch";


const getRawData = (URL) => {
    return fetch(URL)
    .then(r=>r.text())
    .then((data)=> {
        return data
    })
}

const URL = "https://www.espn.com/nba/scoreboard"

const getNbaGames = async () => {
    const nbaGamesRawData = await getRawData(URL)
    console.log(nbaGamesRawData);
}

getNbaGames()

const parsedNbaGameData = cheerio.load(nbaGamesRawData)

const nbaGamesDataTable = parsedNbaGameData("scoreboards")[0].
children[1].children

nbaGamesDataTable.forEach((row)=> {

})