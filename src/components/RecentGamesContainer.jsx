import RecentGames from "./RecentGames"

function RecentGamesContainer({ games }){


    return(
        <>
        <h3>list of recent box scores</h3>
        <RecentGames games={games} />
        </>
    )
}

export default RecentGamesContainer