import { remove } from "./redux/myTeamPlayerSlice";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";

function MyTeamDetail({ user, teamId }) {
  const [userTeam, setUserTeam] = useState({});

  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://nameless-ravine-11360.herokuapp.com/user_teams/${teamId}`)
      .then((r) => r.json())
      .then((data) => setUserTeam(data));
  }, [teamId]);

  const myTeam = userTeam?.players;

  const handleClick = (e) => {
    alert(`${e.target.name} has been waived`);

    const id = parseInt(e.target.id);
    const myTeamPlayers = userTeam?.user_team_players;

    const waivedPlayer = myTeamPlayers?.find(
      (player) => player.player_id === id
    );
    fetch(
      `https://nameless-ravine-11360.herokuapp.com/user_team_players/${waivedPlayer.id}`,
      {
        method: "DELETE",
        body: JSON.stringify({
          user_team_id: 1,
          player_id: id,
          id: waivedPlayer[0]?.id,
        }),
      }
    )
      .then((r) => r.json())
      .then((data) => {
        filterState(id);
        dispatch(remove(id));
        navigate("/");
        navigate("/my-team");
      });
  };

  // console.log(myTeam[0].user_team_players)
  // console.log(team[0].find(team=>team.user_id === user.id));
  const filterState = (id) => {
    const updatePlayer = [
      ...userTeam.players.filter((player) => player.id !== id),
    ];
    setUserTeam(updatePlayer);
  };

  const ppg = myTeam?.reduce((total, m) => total + m.pts, 0);
  let percAdd = myTeam?.reduce((total, m) => total + m.fgp, 0);
  let percentage = percAdd / myTeam?.length;
  let winShares = ppg * percentage;
  let turnover = myTeam?.reduce((total, m) => total + m.tov, 0);
  let red = winShares - turnover;
  let winTotal = parseInt(red);

  if (winTotal > 82) {
    winTotal = 82;
  }
  let lossCalc = 82 - winTotal;
  let lossTotal = parseInt(lossCalc);

  if (myTeam?.length < 5) {
    winTotal = 0;
    lossTotal = 0;
  }

  return (
    <div className="team">
      <h4 className="headers">{userTeam?.name}</h4>
      <Table striped bordered hover size="sm" className="table">
        <thead>
          <tr>
            <th>
              <strong>Name</strong>
            </th>
            <th>
              <strong>TEAM</strong>
            </th>
            <th>
              <strong>AGE</strong>
            </th>
            <th>
              <strong>POS</strong>
            </th>
            <th>
              <strong>GP</strong>
            </th>
            <th>
              <strong>GS</strong>
            </th>
            <th>
              <strong>PPG</strong>
            </th>
            <th>
              <strong>FG%</strong>
            </th>
            <th>
              <strong>3P%</strong>
            </th>
            <th>
              <strong>FT%</strong>
            </th>
            <th>
              <strong>MPG</strong>
            </th>
            <th>
              <strong>RPG</strong>
            </th>
            <th>
              <strong>APG</strong>
            </th>
            <th>
              <strong>SPG</strong>
            </th>
            <th>
              <strong>BPG</strong>
            </th>
            <th>
              <strong>TOV</strong>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {myTeam?.map((player) => (
            <tr key={player.id}>
              <td>
                <Link
                  className="player-link"
                  to={{ pathname: `/players/${player.id}` }}
                >
                  <strong>{player?.name}</strong>
                </Link>
              </td>
              <td>{player?.tm}</td>
              <td>{player?.age}</td>
              <td>{player?.pos}</td>
              <td>{player?.g}</td>
              <td>{player?.gs}</td>
              <td>{player?.pts}</td>
              <td>{player?.fgp}</td>
              <td>{player?.thpp}</td>
              <td>{player?.ftp}</td>
              <td>{player?.mp}</td>
              <td>{player?.trb}</td>
              <td>{player?.ast}</td>
              <td>{player?.stl}</td>
              <td>{player?.blk}</td>
              <td>{player?.tov}</td>
              <td>
                <button
                  className="player-remove-button"
                  id={player?.id}
                  name={player?.name}
                  onClick={(e) => handleClick(e)}
                >
                  waive
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <p className="headers">
        projected NBA record:
        <br />
        <br />{" "}
        <h4>
          {winTotal >= 0 ? (
            <p>
              {winTotal} - {lossTotal}
            </p>
          ) : (
            <p>0 - 0</p>
          )}
        </h4>
        <br />
        {myTeam?.length < 5
          ? "you can't win any games without a starting 5!"
          : null}
        {myTeam?.length >= 5 && myTeam?.length < 6
          ? "you're gonna make these guys play all 48 minutes? lol"
          : null}
        {myTeam?.length >= 6 && myTeam?.length < 10
          ? "fill out your bench a little bit and thank yourself later"
          : null}
      </p>
    </div>
  );
}

export default MyTeamDetail;
