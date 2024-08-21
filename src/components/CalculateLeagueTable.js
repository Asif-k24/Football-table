const CalculateLeagueTable = (data) => {

    const teams = {};

    // console.log(teams);

    // Iterate through each match to calculate points and games played
    data?.matches?.forEach((match) => {

        const { team1, team2, score } = match;

        if (!teams[team1]) {
            teams[team1] = {
                // position: 0,
                club: team1,
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                gf: 0,
                ga: 0,
                gd: 0,
                points: 0,
                form: []
            };
        }
        if (!teams[team2]) {
            teams[team2] = {
                // position: 0,
                club: team2,
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                gf: 0,
                ga: 0,
                gd: 0,
                points: 0,
                form: []
            };
        }

        if (score?.ft) {
            // Calculates the played matches by checking the number of times the team
            // has been mentioned or repeated.
            teams[team1].played = teams[team1].played + 1;   // increments the number of games played by team1
            teams[team2].played = teams[team2].played + 1;   // increments the number of games played by team2

            const [score1, score2] = score.ft;

            // Update GF and GA
            teams[team1].gf = teams[team1].gf + score1;
            teams[team2].gf = teams[team2].gf + score2;
            teams[team1].ga = teams[team1].ga + score2;
            teams[team2].ga = teams[team2].ga + score1;

            // Calculating the points, wins & losses
            // Determine match result and update points, won, drawn, lost
            if (score1 > score2) {
                teams[team1].points = teams[team1].points + 3;
                teams[team1].won = teams[team1].won + 1;
                teams[team2].points = teams[team2].points - 1;
                teams[team2].lost = teams[team2].lost + 1;

                // Add form (W for win, L for loss)
                teams[team1].form.push('W');
                teams[team2].form.push('L');
            } else if (score2 > score1) {
                teams[team2].points = teams[team2].points + 3;
                teams[team2].won = teams[team2].won + 1;
                teams[team1].points = teams[team1].points - 1;
                teams[team1].lost = teams[team1].lost + 1;

                // Add form (L for loss, W for win)
                teams[team1].form.push('L');
                teams[team2].form.push('W');
            } else {
                teams[team1].points = teams[team1].points + 1;
                teams[team2].points = teams[team2].points + 1;
                teams[team1].drawn = teams[team1].drawn + 1;
                teams[team2].drawn = teams[team2].drawn + 1;

                // Add form (D for draw)
                teams[team1].form.push('D');
                teams[team2].form.push('D');
            }
        }
    });

    Object.values(teams).forEach(team => {
        team.gd = team.gf - team.ga;
        team.form = team.form.slice(-5).reverse(); // Limit to last 5 games, most recent first
    });

    // Convert the teams object to an array and sort by points
    const leagueTable = Object.values(teams).sort((a, b) => b.points - a.points);
    leagueTable.forEach((team, index) => {
        team.position = index + 1
    })
    // console.log(leagueTable);

    return leagueTable;
};

export default CalculateLeagueTable