import RecentGames from "./RecentGames"

function RecentGamesContainer({ games }){


    return(
        <>
        <h3 className="headers">today's matchups</h3>
        <RecentGames games={games} />
        </>
    )
}

export default RecentGamesContainer