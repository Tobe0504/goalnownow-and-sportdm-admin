// const fetchTournaents = () => {
//   axios
//     .get(
//       `https://eapi.enetpulse.com/tournament_template/list/?sportFK=1&username=${enetPulseUsername}&token=${enetPulseTokenId}&tz=${currentTime}`
//     )
//     .then((res) => {
//       // converts response object to an array that makes it mapable then maps through it to give it an isActive state which is used to open each dropdown
//       setTournamentsTemplate(
//         Object.values(res.data.tournament_templates).map((data) => {
//           return { ...data, isActive: false };
//         })
//       );
//       console.log(res, "Stat");
//     })

//     // we catch any error
//     .catch((err) => {
//       console.log(err);
//     });
// };

// const fetchTournamentYear = (id) => {
//   // setTournaments([]);
//   // at the start of the function, leagues is set to an empty array, this is for better user experience
//   // setLeagues([]);
//   // we fetch the 22/23 season by theur respective ids

//   axios
//     .get(
//       `https://eapi.enetpulse.com/tournament/list/?tournament_templateFK=${id}&username=${enetPulseUsername}&token=${enetPulseTokenId}&tz=${currentTime}`
//     )
//     .then((res) => {
//       // we set tournaments to be an array which is filtered by current season. so for English 1 for instance, we are presenyed with the present premier league season.
//       setTournaments(
//         Object.values(res.data.tournaments).filter((present) => {
//           return present.name === "2022/2023" || present.name === "2023";
//         })
//       );
//       console.log(res, "Hmmmmm");
//     })
//     .catch((err) => {
//       console.log(err, "tournaments");
//     });
// };

// let presentTournamentId = tournaments[0]?.id;

// const fetchTournamentStage = () => {
//   // created a temporary loading state for leaguesloading
//   setLeagueLoading(true);

//   // leagues is set to an empty array at first then we are fetching based on the unique id's of each array
//   // setLeagues([]);

//   axios
//     .get(
//       `https://eapi.enetpulse.com/tournament_stage/list/?tournamentFK=${presentTournamentId}&username=${enetPulseUsername}&token=${enetPulseTokenId}&tz=${currentTime}`
//     )
//     .then((res) => {
//       // res.data is transformed to an array
//       setLeagues(Object.values(res.data.tournament_stages));
//       setLeagueLoading(false);
//     })
//     .catch((err) => {
//       console.log(err);

//       // the loading state is then set to false if we have a failed fetch
//       setLeagueLoading(false);
//     });
// };

// let firstParticipantResultKeys = [];
// let secondParticipantResultKeys = [];

// Results

// Scope results (if its a two legged knockout staged match)
// let firstParticipantScopeResultKey = [];
// let secondParticipantScopeResultKey = [];

//  results
// firstParticipantResultKeys = Object.keys(
//   res.data.event[id].event_participants[0]?.result
// );

// for (let i = 0; i < firstParticipantResultKeys.length; i++) {
//   const currentResult =
//     res.data.event[id].event_participants[0]?.result[
//       firstParticipantResultKeys[i]
//     ];
//   setFirstParticipantResult(currentResult);
// }
// secondParticipantResultKeys = Object.keys(eventParticipants[1]?.result);

// for (let i = 0; i < secondParticipantResultKeys.length; i++) {
//   const currentResult =
//     res.data.event[id].event_participants[1]?.result[
//       secondParticipantResultKeys[i]
//     ];
//   setSecondParticipantResult(currentResult);
// }

// scope result
// firstParticipantScopeResultKey = Object.keys(
//   eventParticipants[0]?.scope_result
// );

// for (let i = 0; i < firstParticipantScopeResultKey.length; i++) {
//   firstParticipantScopeResult =
//     res.data.event[id].event_participants[0]?.scope_result[
//       firstParticipantScopeResultKey[i]
//     ];
// }
// secondParticipantScopeResultKey = Object.keys(
//   res.data.event[id].event_participants[1]?.scope_result
// );
// for (let i = 0; i < secondParticipantScopeResultKey.length; i++) {
//   secondParticipantScopeResult =
//     res.data.event[id].event_participants[0]?.scope_result[
//       secondParticipantScopeResultKey[i]
//     ];
// }

// fetch tournament events
// const fetchLeagueEvents = (id) => {
//   setLeagueParticipant([]);
//   setLeagueTableLoading(true);
//   let activeLeagueFilter = leagues?.filter((data) => {
//     return data.id === id;
//   });
//   setActiveLeague(activeLeagueFilter);
//   axios
//     .get
//     // `http://eapi.enetpulse.com/tournament_stage/participants/?id=${id}&includeProperties=yes&includeParticipantProperties=yes&includeCountries=yes&includeCountryCodes=yes&tz=Africa/Lagos&username=${enetPulseUsername}&token=${enetPulseTokenId}`
//     // `http://eapi.enetpulse.com/event/list/?includeEventProperties=yes&tournament_stageFK=${id}&username=${enetPulseUsername}&token=${enetPulseTokenId}`
//     ()
//     .then((res) => {
//       setLeagueParticipant(
//         Object.values(res.data.tournament_stages[id].participants)
//       );
//       setLeagueTableLoading(false);
//     })
//     .catch((err) => {
//       console.log(err);
//       setLeagueTableLoading(false);
//     });
// };
