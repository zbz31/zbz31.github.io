document.addEventListener("DOMContentLoaded", () => {
 
  const puzzleselection = [

    [{ order: "1", year: "2006", category: "World Cup", prow: ["Played WC 2006", "Inter", "Juventus"], pcolumn: ["ITA", "FRA", "WC01"] }],
    [{ order: "2", year: "2000–01", category: "Premier League", prow: ["NED", "FRA", "Played Euro 2000"], pcolumn: ["Man Utd", "Arsenal", "Premier"] }],
    [{ order: "3", year: "2022", category: "World Cup", prow: ["Played WC 2022", "WC01", "Barcelona"], pcolumn: ["ARG", "FRA", "ParisSG"] }],
    [{ order: "4", year: "1998", category: "World Cup", prow: ["Played WC 1998", "Real Madrid", "Juventus"], pcolumn: ["BRA", "FRA", "WC01"] }],
    [{ order: "5", year: "1998–99", category: "Champions", prow: ["ChampionsWin", "Premier", "DL"], pcolumn: ["Man Utd", "Bayern", "NOR"] }],
    [{ order: "6", year: "2014", category: "World Cup", prow: ["Played WC 2014", "Premier", "Man Utd"], pcolumn: ["NED", "ESP", "Arsenal"] }],
    [{ order: "7", year: "2015–16", category: "Premier League", prow: ["Premier", "Played Euro 2016", "DL"], pcolumn: ["Leicester", "Arsenal", "Tottenham"] }],
    [{ order: "8", year: "2016–17", category: "Champions", prow: ["Juventus", "ChampionsWin", "LaLigaWin"], pcolumn: ["Real Madrid", "CRO", "POR"] }],
    [{ order: "9", year: "2018", category: "World Cup", prow: ["Played WC 2018", "Atletico", "Tottenham"], pcolumn: ["FRA", "CRO", "WC01"] }],
    [{ order: "10", year: "2020–21", category: "Champions", prow: ["ChampionsWin", "GER", "FRA"], pcolumn: ["Chelsea", "Man City", "Premier"] }],
    [{ order: "11", year: "2012–13", category: "Champions", prow: ["Bayern", "DL", "ChampionsWin"], pcolumn: ["Borussia", "NED", "CRO"] }],
    [{ order: "12", year: "2002", category: "World Cup", prow: ["Played WC 2002", "WC01", "SerieAWin"], pcolumn: ["BRA", "GER", "Real Madrid"] }],
    [{ order: "13", year: "2013–14", category: "Champions", prow: ["ChampionsWin", "DF", "Sevilla"], pcolumn: ["Real Madrid", "Atletico", "Played WC 2014"] }],
    [{ order: "14", year: "1997–98", category: "Champions", prow: ["Played WC 1998", "ChampionsWin", "Valencia"], pcolumn: ["Real Madrid", "Juventus", "LaLigaWin"] }],
    [{ order: "15", year: "2018", category: "World Cup", prow: ["LaLigaWin", "ChampionsWin", "CC"], pcolumn: ["CRO", "ARG", "Played WC 2018"] }],
    [{ order: "16", year: "2014–15", category: "Champions", prow: ["CRO", "URU", "BRA"], pcolumn: ["Barcelona", "Juventus", "ChampionsWin"] }],
    [{ order: "17", year: "2021–22", category: "Champions", prow: ["PO", "BRA", "Played WC 2022"], pcolumn: ["Real Madrid", "Liverpool", "ChampionsWin"] }],
    [{ order: "18", year: "2018–19", category: "Europa League", prow: ["EuropaWin", "Premier", "Real Madrid"], pcolumn: ["Chelsea", "Arsenal", "BEL"] }],
    [{ order: "19", year: "2002", category: "World Cup", prow: ["Played WC 2002", "DL", "CC"], pcolumn: ["ESP", "IRL", "Valencia"] }],
    [{ order: "20", year: "2006–07", category: "Champions", prow: ["ChampionsWin", "DL", "NED"], pcolumn: ["Milan", "Liverpool", "SerieAWin"] }],
    [{ order: "21", year: "2017–18", category: "Champions", prow: ["Tottenham", "FRA", "PO"], pcolumn: ["Real Madrid", "Liverpool", "ChampionsWin"] }],
    [{ order: "22", year: "2002–03", category: "Europa League", prow: ["Barcelona", "DL", "DF"], pcolumn: ["Celtic", "Porto", "EuropaWin"] }],
    [{ order: "23", year: "2011", category: "Other", prow: ["PO", "DL", "Inter"], pcolumn: ["CHI", "ARG", "LaLigaWin"] }],
    [{ order: "24", year: "2002–03", category: "Champions", prow: ["ChampionsWin", "PO", "DF"], pcolumn: ["Milan", "Juventus", "ITA"] }],
    [{ order: "25", year: "2001–02", category: "Champions", prow: ["Real Madrid", "CC", "Played WC 2002"], pcolumn: ["Leverkusen", "ChampionsWin", "FRA"] }],
    [{ order: "26", year: "", category: "World Cup", prow: ["Played WC 2014", "DF", "Atletico"], pcolumn: ["URU", "ITA", "Juventus"] }],
    [{ order: "27", year: "2003–04", category: "Champions", prow: ["ChampionsWin", "POR", "DL"], pcolumn: ["Porto", "Monaco", "Played Euro 2004"] }],
    [{ order: "28", year: "", category: "World Cup", prow: ["Played WC 2006", "CC", "DF"], pcolumn: ["ARG", "MEX", "Atletico"] }],
    [{ order: "29", year: "2015–16", category: "Champions", prow: ["Played WC 2016", "DF", "ChampionsWin"], pcolumn: ["Liverpool", "Borussia", "CRO"] }],
    [{ order: "30", year: "2020–21", category: "Europa League", prow: ["PO", "EuropaWin", "Played WC 2022"], pcolumn: ["Villarreal", "Man Utd", "ESP"] }],
    [{ order: "31", year: "2004–05", category: "Champions", prow: ["ChampionsWin", "Premier", "PO"], pcolumn: ["Liverpool", "Milan", "Galatasaray"] }],
    [{ order: "32", year: "2002", category: "World Cup", prow: ["Played WC 2002", "DL", "CC"], pcolumn: ["ITA", "KOR", "WC01"] }],
    [{ order: "33", year: "2005–06", category: "Champions", prow: ["Arsenal", "CMR", "Chelsea"], pcolumn: ["Barcelona", "ChampionsWin", "Premier"] }],
    [{ order: "34", year: "", category: "World Cup", prow: ["Played WC 2002", "ChampionsWin", "LaLigaWin"], pcolumn: ["BRA", "ENG", "Barcelona"] }],
    [{ order: "35", year: "2018–19", category: "Champions", prow: ["ChampionsWin", "Premier", "NED"], pcolumn: ["Liverpool", "Tottenham", "Atletico"] }],
    [{ order: "36", year: "2011", category: "Other", prow: ["CC", "DL", "DF"], pcolumn: ["ENG", "GRE", "Played WC 2002"] }],


  ];
  const names = [
    { name: "William Saliba", Country: "FRA", Position: "DF", Teams: [{ club: "en Arsenal", matches: 68, goals: 5, assists: 2 }, { club: "fr Marseille", matches: 52, goals: 0, assists: 0 },], Titles: "2022WC02", WC: "2022", Euro: "" },
    { name: "Gabriel Dos Santos", Country: "BRA", Position: "DF", Teams: [{ club: "en Arsenal", matches: 153, goals: 15, assists: 1 },], Titles: "", WC: "", Euro: "" },
    { name: "Declan Rice", Country: "ENG", Position: "CC", Teams: [{ club: "en Arsenal", matches: 36, goals: 4, assists: 6 },], Titles: "2021EuroFinal", WC: "2022", Euro: "2021Euro" },
    { name: "Ben White", Country: "ENG", Position: "DF", Teams: [{ club: "en Arsenal", matches: 119, goals: 3, assists: 7 },], Titles: "", WC: "", Euro: "" },
    { name: "Bukayo Saka", Country: "ENG", Position: "DF,CC,DL", Teams: [{ club: "en Arsenal", matches: 213, goals: 54, assists: 48 },], Titles: "2021EuroFinal,2019EuropaFinal", WC: "2022", Euro: "2021Euro" },
    { name: "Martin Ødegaard", Country: "NOR", Position: "CC,DL", Teams: [{ club: "en Arsenal", matches: 138, goals: 32, assists: 20 }, { club: "es Real Madrid", matches: 11, goals: 0, assists: 0 },], Titles: "", WC: "", Euro: "" },
    { name: "Kai Havertz", Country: "GER", Position: "CC,DL", Teams: [{ club: "en Arsenal", matches: 36, goals: 7, assists: 2 }, { club: "en Chelsea", matches: 137, goals: 31, assists: 13 }, { club: "de Leverkusen", matches: 150, goals: 46, assists: 27 },], Titles: "2021ChampionsWin", WC: "2022", Euro: "2021Euro" },
    { name: "David Raya", Country: "ESP", Position: "PO", Teams: [{ club: "en Arsenal", matches: 27, goals: 0, assists: 0 },], Titles: "", WC: "", Euro: "" },
    { name: "Gabriel Martinelli", Country: "BRA", Position: "CC,DL", Teams: [{ club: "en Arsenal", matches: 161, goals: 40, assists: 23 },], Titles: "", WC: "2022", Euro: "" },
    { name: "Oleksandr Zinchenko", Country: "UKR", Position: "DF,CC", Teams: [{ club: "en Arsenal", matches: 60, goals: 2, assists: 4 }, { club: "en Man City", matches: 128, goals: 2, assists: 12 }, { club: "nl PSV", matches: 16, goals: 0, assists: 3 },], Titles: "2021ChampionsFinal,2022Premier, 2021Premier, 2019Premier, 2018Premier", WC: "", Euro: "2021Euro, 2016Euro" },
    { name: "Gabriel Jesus", Country: "BRA", Position: "CC,DL", Teams: [{ club: "en Arsenal", matches: 56, goals: 19, assists: 12 }, { club: "en Man City", matches: 236, goals: 95, assists: 41 },], Titles: "2021ChampionsFinal,2022Premier, 2021Premier, 2019Premier, 2018Premier", WC: "2022, 2018", Euro: "" },
    { name: "Leandro Trossard", Country: "BEL", Position: "DL", Teams: [{ club: "en Arsenal", matches: 53, goals: 11, assists: 12 },], Titles: "", WC: "2022", Euro: "2021Euro" },
    { name: "Eddie Nketiah", Country: "ENG", Position: "CC,DL", Teams: [{ club: "en Arsenal", matches: 163, goals: 38, assists: 8 },], Titles: "2019EuropaFinal", WC: "", Euro: "" },
    { name: "Jorginho", Country: "ITA", Position: "CC", Teams: [{ club: "en Arsenal", matches: 41, goals: 1, assists: 2 }, { club: "en Chelsea", matches: 212, goals: 29, assists: 7 }, { club: "it Napoli", matches: 152, goals: 4, assists: 14 },], Titles: "2021EuroWin,2021ChampionsWin,2019EuropaWin", WC: "", Euro: "2021Euro" },
    { name: "Jakub Kiwior", Country: "POL", Position: "DF", Teams: [{ club: "en Arsenal", matches: 30, goals: 2, assists: 2 },], Titles: "", WC: "2022", Euro: "" },
    { name: "Takehiro Tomiyasu", Country: "JPN", Position: "DF", Teams: [{ club: "en Arsenal", matches: 73, goals: 1, assists: 6 },], Titles: "", WC: "2022", Euro: "" },
    { name: "Aaron Ramsdale", Country: "ENG", Position: "PO", Teams: [{ club: "en Arsenal", matches: 88, goals: 0, assists: 0 },], Titles: "", WC: "", Euro: "" },
    { name: "Reiss Nelson", Country: "ENG", Position: "CC,DL", Teams: [{ club: "en Arsenal", matches: 87, goals: 8, assists: 9 }, { club: "nl Feyenoord", matches: 31, goals: 4, assists: 6 },], Titles: "", WC: "", Euro: "" },
    { name: "Fabio Vieira", Country: "POR", Position: "DF,CC,DL", Teams: [{ club: "en Arsenal", matches: 46, goals: 3, assists: 9 }, { club: "pt Porto", matches: 65, goals: 9, assists: 15 },], Titles: "", WC: "", Euro: "" },
    { name: "Emile Smith Rowe", Country: "ENG", Position: "CC,DL", Teams: [{ club: "en Arsenal", matches: 112, goals: 18, assists: 12 }, { club: "de RBLeipzig", matches: 3, goals: 0, assists: 0 },], Titles: "2019EuropaFinal", WC: "", Euro: "" },
    { name: "Thomas Partey", Country: "GHA", Position: "DF,CC", Teams: [{ club: "en Arsenal", matches: 104, goals: 5, assists: 4 }, { club: "es Atletico", matches: 188, goals: 16, assists: 10 }, { club: "es Mallorca", matches: 37, goals: 5, assists: 2 },], Titles: "2016ChampionsFinal,2018EuropaWin,2021LaLigaWin", WC: "2022", Euro: "" },
    { name: "Jurriën Timber", Country: "NED", Position: "DF", Teams: [{ club: "en Arsenal", matches: 2, goals: 0, assists: 0 }, { club: "nl Ajax", matches: 107, goals: 6, assists: 4 },], Titles: "", WC: "2022", Euro: "2021Euro" },
    { name: "Cédric Soares", Country: "POR", Position: "DF,CC", Teams: [{ club: "en Arsenal", matches: 63, goals: 2, assists: 5 }, { club: "it Inter", matches: 9, goals: 0, assists: 1 }, { club: "pt Sporting", matches: 81, goals: 2, assists: 5 },], Titles: "2016EuroWin", WC: "2018", Euro: "2016Euro" },
    { name: "Mohamed Elneny", Country: "EGY", Position: "CC", Teams: [{ club: "en Arsenal", matches: 161, goals: 6, assists: 9 }, { club: "tr Besiktas", matches: 33, goals: 1, assists: 3 },], Titles: "2019EuropaFinal", WC: "2018", Euro: "" },
    { name: "Charles Sagoe Jr", Country: "ENG", Position: "DL", Teams: [{ club: "en Arsenal", matches: 1, goals: 0, assists: 0 },], Titles: "", WC: "", Euro: "" },
    { name: "Kieran Tierney", Country: "SCO", Position: "DF,CC", Teams: [{ club: "en Arsenal", matches: 124, goals: 5, assists: 13 },], Titles: "", WC: "", Euro: "2021Euro" },
    { name: "Ethan Nwaneri", Country: "ENG", Position: "CC,DL", Teams: [{ club: "en Arsenal", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "", Euro: "" },
    { name: "Granit Xhaka", Country: "SUI", Position: "DF,CC", Teams: [{ club: "en Arsenal", matches: 297, goals: 23, assists: 29 }, { club: "de Leverkusen", matches: 31, goals: 1, assists: 1 },], Titles: "2019EuropaFinal", WC: "2022, 2018, 2014", Euro: "2021Euro, 2016Euro" },
    { name: "Rob Holding", Country: "ENG", Position: "DF", Teams: [{ club: "en Arsenal", matches: 162, goals: 5, assists: 1 },], Titles: "2019EuropaFinal", WC: "", Euro: "" },
    { name: "Albert Sambi Lokonga", Country: "BEL", Position: "CC", Teams: [{ club: "en Arsenal", matches: 39, goals: 0, assists: 0 },], Titles: "", WC: "", Euro: "" },
    { name: "Matt Turner", Country: "USA", Position: "PO", Teams: [{ club: "en Arsenal", matches: 7, goals: 0, assists: 0 },], Titles: "", WC: "2022", Euro: "" },
    { name: "Marcus Vinicius Oliveira (Marquinhos)", Country: "BRA", Position: "CC", Teams: [{ club: "en Arsenal", matches: 6, goals: 1, assists: 1 },], Titles: "", WC: "", Euro: "" },
    { name: "Karl Jakob Hein", Country: "EST", Position: "PO", Teams: [{ club: "en Arsenal", matches: 1, goals: 0, assists: 0 },], Titles: "", WC: "", Euro: "" },
    { name: "Alexandre Lacazette", Country: "FRA", Position: "CC,DL", Teams: [{ club: "en Arsenal", matches: 206, goals: 71, assists: 30 }, { club: "fr Lyon", matches: 310, goals: 160, assists: 34 },], Titles: "2019EuropaFinal", WC: "", Euro: "" },
    { name: "Nuno Tavares", Country: "POR", Position: "DF,CC", Teams: [{ club: "en Arsenal", matches: 28, goals: 1, assists: 2 }, { club: "fr Marseille", matches: 39, goals: 6, assists: 0 }, { club: "pt Benfica", matches: 30, goals: 1, assists: 4 },], Titles: "", WC: "", Euro: "" },
    { name: "Pierre-Emerick Aubameyang", Country: "GAB", Position: "CC,DL", Teams: [{ club: "en Arsenal", matches: 163, goals: 92, assists: 20 }, { club: "en Chelsea", matches: 21, goals: 3, assists: 1 }, { club: "de Borussia", matches: 202, goals: 136, assists: 29 }, { club: "es Barcelona", matches: 24, goals: 13, assists: 1 }, { club: "fr Monaco", matches: 19, goals: 2, assists: 2 }, { club: "fr Marseille", matches: 31, goals: 14, assists: 8 },], Titles: "2019EuropaFinal,2023LaLigaWin", WC: "", Euro: "" },
    { name: "Nicolas Pépé", Country: "CIV", Position: "CC,DL", Teams: [{ club: "en Arsenal", matches: 112, goals: 27, assists: 21 },], Titles: "", WC: "", Euro: "" },
    { name: "Bernd Leno", Country: "GER", Position: "PO", Teams: [{ club: "en Arsenal", matches: 125, goals: 0, assists: 0 }, { club: "de Leverkusen", matches: 294, goals: 0, assists: 0 },], Titles: "2019EuropaFinal", WC: "", Euro: "" },
    { name: "Ainsley Maitland-Niles", Country: "ENG", Position: "DF,CC,DL", Teams: [{ club: "en Arsenal", matches: 132, goals: 3, assists: 7 }, { club: "it Roma", matches: 12, goals: 0, assists: 0 }, { club: "fr Lyon", matches: 16, goals: 1, assists: 1 },], Titles: "2019EuropaFinal", WC: "", Euro: "" },
    { name: "Calum Chambers", Country: "ENG", Position: "DF,CC", Teams: [{ club: "en Arsenal", matches: 119, goals: 5, assists: 8 },], Titles: "", WC: "", Euro: "" },
    { name: "Sead Kolašinac", Country: "BIH", Position: "DF,CC", Teams: [{ club: "en Arsenal", matches: 118, goals: 5, assists: 13 }, { club: "de Schalke", matches: 140, goals: 5, assists: 13 }, { club: "fr Marseille", matches: 58, goals: 4, assists: 2 },], Titles: "2019EuropaFinal", WC: "2014", Euro: "" },
    { name: "Pablo Marí", Country: "ESP", Position: "DF", Teams: [{ club: "en Arsenal", matches: 22, goals: 1, assists: 0 }, { club: "es Deportivo", matches: 37, goals: 2, assists: 0 }, { club: "es Mallorca", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "", Euro: "" },
    { name: "Folarin Balogun", Country: "USA", Position: "DL", Teams: [{ club: "en Arsenal", matches: 10, goals: 2, assists: 1 }, { club: "fr Monaco", matches: 20, goals: 5, assists: 3 },], Titles: "", WC: "", Euro: "" },
    { name: "Charlie Patino", Country: "ENG", Position: "CC", Teams: [{ club: "en Arsenal", matches: 2, goals: 1, assists: 0 },], Titles: "", WC: "", Euro: "" },
    { name: "Héctor Bellerín", Country: "ESP", Position: "DF,CC", Teams: [{ club: "en Arsenal", matches: 238, goals: 9, assists: 28 }, { club: "es Betis", matches: 56, goals: 0, assists: 5 }, { club: "es Barcelona", matches: 7, goals: 0, assists: 0 }, { club: "pt Sporting", matches: 13, goals: 1, assists: 0 },], Titles: "2023LaLigaWin", WC: "", Euro: "" },
    { name: "Dani Ceballos", Country: "ESP", Position: "CC,DL", Teams: [{ club: "en Arsenal", matches: 77, goals: 2, assists: 5 }, { club: "es Betis", matches: 105, goals: 7, assists: 7 }, { club: "es Real Madrid", matches: 136, goals: 7, assists: 10 },], Titles: "2022ChampionsWin, 2018ChampionsWin,2022LaLigaWin", WC: "", Euro: "" },
    { name: "David Luiz", Country: "BRA", Position: "DF,CC", Teams: [{ club: "en Arsenal", matches: 73, goals: 4, assists: 1 }, { club: "en Chelsea", matches: 218, goals: 17, assists: 8 }, { club: "fr PSG", matches: 84, goals: 7, assists: 3 }, { club: "pt Benfica", matches: 108, goals: 6, assists: 3 },], Titles: "2012ChampionsWin,2019EuropaWin, 2013EuropaWin,2017Premier", WC: "2014", Euro: "" },
    { name: "Willian", Country: "BRA", Position: "CC,DL", Teams: [{ club: "en Arsenal", matches: 37, goals: 1, assists: 7 }, { club: "en Chelsea", matches: 333, goals: 63, assists: 50 },], Titles: "2019EuropaWin, 2009EuropaWin,2017Premier, 2015Premier", WC: "2018, 2014", Euro: "" },
    { name: "Joe Willock", Country: "ENG", Position: "CC,DL", Teams: [{ club: "en Arsenal", matches: 78, goals: 11, assists: 4 }, { club: "en Newcastle", matches: 97, goals: 15, assists: 6 },], Titles: "2019EuropaFinal", WC: "", Euro: "" },
    { name: "Shkodran Mustafi", Country: "GER", Position: "DF", Teams: [{ club: "en Arsenal", matches: 151, goals: 9, assists: 4 }, { club: "en Everton", matches: 1, goals: 0, assists: 0 }, { club: "de Schalke", matches: 13, goals: 1, assists: 0 }, { club: "es Valencia", matches: 79, goals: 6, assists: 0 },], Titles: "2014WC01,2019EuropaFinal", WC: "2014", Euro: "2016Euro" },
    { name: "Rúnar Alex Rúnarsson", Country: "ISL", Position: "PO", Teams: [{ club: "en Arsenal", matches: 6, goals: 0, assists: 0 },], Titles: "", WC: "", Euro: "" },
    { name: "Mathew Ryan", Country: "AUS", Position: "PO", Teams: [{ club: "en Arsenal", matches: 3, goals: 0, assists: 0 }, { club: "es Valencia", matches: 21, goals: 0, assists: 0 },], Titles: "", WC: "2022, 2018, 2014", Euro: "" },
    { name: "Emiliano Martínez", Country: "ARG", Position: "PO", Teams: [{ club: "en Arsenal", matches: 36, goals: 0, assists: 0 }, { club: "es Getafe", matches: 19, goals: 2, assists: 1 },], Titles: "2022WC01,2019EuropaFinal", WC: "2022", Euro: "" },
    { name: "Ben Cottrell", Country: "ENG", Position: "DL", Teams: [{ club: "en Arsenal", matches: 1, goals: 0, assists: 0 },], Titles: "", WC: "", Euro: "" },
    { name: "Miguel Azeez", Country: "ENG", Position: "CC", Teams: [{ club: "en Arsenal", matches: 1, goals: 0, assists: 0 },], Titles: "", WC: "", Euro: "" },
    { name: "Mattéo Guendouzi", Country: "FRA", Position: "CC", Teams: [{ club: "en Arsenal", matches: 82, goals: 1, assists: 4 }, { club: "fr Marseille", matches: 101, goals: 10, assists: 16 },], Titles: "2022WC02,2019EuropaFinal", WC: "2022", Euro: "" },
    { name: "Sokratis Papastathopoulos", Country: "GRE", Position: "DF", Teams: [{ club: "en Arsenal", matches: 69, goals: 6, assists: 2 }, { club: "de Borussia", matches: 188, goals: 10, assists: 2 }, { club: "it Milan", matches: 5, goals: 0, assists: 0 }, { club: "es Betis", matches: 9, goals: 0, assists: 0 }, { club: "gr Olympiakos", matches: 79, goals: 4, assists: 2 },], Titles: "2019EuropaFinal,2011SerieAWin", WC: "2014, 2010", Euro: "2012Euro" },
    { name: "Lucas Torreira", Country: "URU", Position: "CC", Teams: [{ club: "en Arsenal", matches: 89, goals: 4, assists: 5 }, { club: "es Atletico", matches: 26, goals: 1, assists: 1 }, { club: "tr Galatasaray", matches: 62, goals: 0, assists: 1 },], Titles: "2019EuropaFinal,2021LaLigaWin", WC: "2018", Euro: "" },
    { name: "Mesut Özil", Country: "GER", Position: "CC,DL", Teams: [{ club: "en Arsenal", matches: 247, goals: 43, assists: 70 }, { club: "de Schalke", matches: 35, goals: 0, assists: 3 }, { club: "es Real Madrid", matches: 136, goals: 23, assists: 60 }, { club: "tr Fenerbahce", matches: 34, goals: 9, assists: 3 },], Titles: "2014WC01,2019EuropaFinal, 2009EuropaFinal,2012LaLigaWin", WC: "2018, 2014, 2010", Euro: "2016Euro, 2012Euro" },
    { name: "Nacho Monreal", Country: "ESP", Position: "DF", Teams: [{ club: "en Arsenal", matches: 240, goals: 10, assists: 17 }, { club: "es Malaga", matches: 47, goals: 1, assists: 4 },], Titles: "2019EuropaFinal", WC: "", Euro: "" },
    { name: "Henrikh Mkhitaryan", Country: "ARM", Position: "CC,DL", Teams: [{ club: "en Arsenal", matches: 59, goals: 9, assists: 12 }, { club: "en Man Utd", matches: 63, goals: 13, assists: 10 }, { club: "de Borussia", matches: 131, goals: 34, assists: 36 }, { club: "it Inter", matches: 82, goals: 7, assists: 9 }, { club: "it Roma", matches: 115, goals: 29, assists: 25 },], Titles: "2023ChampionsFinal,2019EuropaFinal, 2017EuropaWin", WC: "", Euro: "" },
    { name: "Konstantinos Mavropanos", Country: "GRE", Position: "DF", Teams: [{ club: "en Arsenal", matches: 8, goals: 0, assists: 0 }, { club: "de Stuttgart", matches: 87, goals: 7, assists: 1 },], Titles: "", WC: "", Euro: "" },
    { name: "Alex Iwobi", Country: "NGA", Position: "DF,CC,DL", Teams: [{ club: "en Arsenal", matches: 149, goals: 15, assists: 22 }, { club: "en Everton", matches: 140, goals: 9, assists: 15 },], Titles: "2019EuropaFinal", WC: "2018", Euro: "" },
    { name: "Laurent Koscielny", Country: "FRA", Position: "DF", Teams: [{ club: "en Arsenal", matches: 327, goals: 24, assists: 2 },], Titles: "2016EuroFinal,2019EuropaFinal", WC: "2014", Euro: "2016Euro, 2012Euro" },
    { name: "Aaron Ramsey", Country: "WAL", Position: "CC,DL", Teams: [{ club: "en Arsenal", matches: 338, goals: 58, assists: 51 }, { club: "it Juventus", matches: 70, goals: 6, assists: 5 },], Titles: "2022EuropaFinal, 2019EuropaFinal,2020SerieAWin", WC: "2022", Euro: "2021Euro, 2016Euro" },
    { name: "Petr Čech", Country: "CZE", Position: "PO", Teams: [{ club: "en Arsenal", matches: 139, goals: 0, assists: 0 }, { club: "en Chelsea", matches: 442, goals: 0, assists: 2 },], Titles: "2012ChampionsWin, 2008ChampionsFinal,2019EuropaFinal, 2013EuropaWin,2015Premier, 2010Premier, 2006Premier, 2005Premier", WC: "2006", Euro: "2016Euro, 2012Euro, 2008Euro, 2004Euro" },
    { name: "Stephan Lichtsteiner", Country: "SUI", Position: "DF,CC", Teams: [{ club: "en Arsenal", matches: 23, goals: 1, assists: 1 }, { club: "it Juventus", matches: 251, goals: 14, assists: 22 },], Titles: "2017ChampionsFinal, 2015ChampionsFinal,2019EuropaFinal,2018SerieAWin, 2017SerieAWin, 2016SerieAWin, 2015SerieAWin, 2014SerieAWin, 2013SerieAWin, 2012SerieAWin", WC: "2018, 2014, 2010", Euro: "2016Euro, 2008Euro" },
    { name: "Danny Welbeck", Country: "ENG", Position: "CC,DL", Teams: [{ club: "en Arsenal", matches: 126, goals: 32, assists: 14 }, { club: "en Man Utd", matches: 112, goals: 24, assists: 9 },], Titles: "2019EuropaFinal,2013Premier, 2009Premier", WC: "2018, 2014", Euro: "2012Euro" },
    { name: "Carl Jenkinson", Country: "ENG", Position: "DF", Teams: [{ club: "en Arsenal", matches: 58, goals: 1, assists: 4 },], Titles: "2019EuropaFinal", WC: "", Euro: "" },
    { name: "Denis Suárez", Country: "ESP", Position: "CC,DL", Teams: [{ club: "en Arsenal", matches: 6, goals: 0, assists: 0 }, { club: "es Espanyol", matches: 18, goals: 0, assists: 0 }, { club: "es Celta", matches: 104, goals: 5, assists: 21 }, { club: "es Barcelona", matches: 71, goals: 8, assists: 8 }, { club: "es Sevilla", matches: 46, goals: 6, assists: 4 }, { club: "es Villarreal", matches: 53, goals: 5, assists: 11 },], Titles: "2019EuropaFinal, 2015EuropaWin,2019LaLigaWin, 2018LaLigaWin", WC: "", Euro: "" },
    { name: "Julio Pleguezuelo", Country: "ESP", Position: "DF", Teams: [{ club: "en Arsenal", matches: 1, goals: 0, assists: 0 }, { club: "es Mallorca", matches: 17, goals: 0, assists: 0 },], Titles: "", WC: "", Euro: "" },
    { name: "Zech Medley", Country: "ENG", Position: "DF", Teams: [{ club: "en Arsenal", matches: 3, goals: 0, assists: 0 },], Titles: "2019EuropaFinal", WC: "", Euro: "" },
    { name: "Charlie Gilmour", Country: "SCO", Position: "CC", Teams: [{ club: "en Arsenal", matches: 2, goals: 0, assists: 0 },], Titles: "2019EuropaFinal", WC: "", Euro: "" },
    { name: "Jack Wilshere", Country: "ENG", Position: "CC", Teams: [{ club: "en Arsenal", matches: 167, goals: 12, assists: 21 },], Titles: "", WC: "2014", Euro: "2016Euro" },
    { name: "David Ospina", Country: "COL", Position: "PO", Teams: [{ club: "en Arsenal", matches: 70, goals: 0, assists: 0 }, { club: "it Napoli", matches: 103, goals: 0, assists: 1 },], Titles: "", WC: "2018, 2014", Euro: "" },
    { name: "Alexis Sánchez", Country: "CHI", Position: "CC,DL", Teams: [{ club: "en Arsenal", matches: 163, goals: 79, assists: 40 }, { club: "en Man Utd", matches: 45, goals: 5, assists: 9 }, { club: "it Inter", matches: 129, goals: 22, assists: 18 }, { club: "es Barcelona", matches: 112, goals: 42, assists: 27 }, { club: "fr Marseille", matches: 44, goals: 18, assists: 4 },], Titles: "2020EuropaFinal,2021SerieAWin,2013LaLigaWin", WC: "2014, 2010", Euro: "" },
    { name: "Olivier Giroud", Country: "FRA", Position: "DL", Teams: [{ club: "en Arsenal", matches: 237, goals: 96, assists: 34 }, { club: "en Chelsea", matches: 119, goals: 39, assists: 14 }, { club: "it Milan", matches: 115, goals: 45, assists: 20 },], Titles: "2022WC02, 2018WC01,2016EuroFinal,2021ChampionsWin,2019EuropaWin,2022SerieAWin", WC: "2022, 2018, 2014", Euro: "2021Euro, 2016Euro, 2012Euro" },

  ];
  const countries = [{
      cname: "ALB",
      cfullname: "Albania",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/357px-Flag_of_Albania.svg.png"
    },
    {
      cname: "ALG",
      cfullname: "Algeria",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/383px-Flag_of_Algeria.svg.png"
    },
    {
      cname: "AND",
      cfullname: "Andorra",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Andorra.svg/364px-Flag_of_Andorra.svg.png"
    },
    {
      cname: "ANG",
      cfullname: "Angola",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/383px-Flag_of_Angola.svg.png"
    },
    {
      cname: "ARG",
      cfullname: "Argentina",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/383px-Flag_of_Argentina.svg.png"
    },
    {
      cname: "ARM",
      cfullname: "Armenia",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/383px-Flag_of_Armenia.svg.png"
    },
    {
      cname: "AUS",
      cfullname: "Australia",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/383px-Flag_of_Australia_%28converted%29.svg.png"
    },
    {
      cname: "AUT",
      cfullname: "Austria",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/383px-Flag_of_Austria.svg.png"
    },
    {
      cname: "BLR",
      cfullname: "Belarus",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/383px-Flag_of_Belarus.svg.png"
    },
    {
      cname: "BEL",
      cfullname: "Belgium",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/294px-Flag_of_Belgium.svg.png"
    },
    {
      cname: "BEN",
      cfullname: "Benin",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Benin.svg/383px-Flag_of_Benin.svg.png"
    },
    {
      cname: "VER",
      cfullname: "Bermuda",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bermuda.svg/383px-Flag_of_Bermuda.svg.png"
    },
    {
      cname: "BOL",
      cfullname: "Bolivia",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Bolivia.svg/374px-Flag_of_Bolivia.svg.png"
    },
    {
      cname: "BOE",
      cfullname: "Bonaire",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Flag_of_Bonaire.svg/383px-Flag_of_Bonaire.svg.png"
    },
    {
      cname: "BIH",
      cfullname: "Bosnia and Herzegovina",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/383px-Flag_of_Bosnia_and_Herzegovina.svg.png"
    },
    {
      cname: "BOT",
      cfullname: "Botswana",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_Botswana.svg/383px-Flag_of_Botswana.svg.png"
    },
    {
      cname: "BRA",
      cfullname: "Brazil",
      Flag: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/364px-Flag_of_Brazil.svg.png"
    },
    {
      cname: "VGB",
      cfullname: "British Virgin Islands",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_the_British_Virgin_Islands.svg/383px-Flag_of_the_British_Virgin_Islands.svg.png"
    },
    {
      cname: "BRU",
      cfullname: "Brunei Darussalam",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Brunei.svg/383px-Flag_of_Brunei.svg.png"
    },
    {
      cname: "BUL",
      cfullname: "Bulgaria",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/383px-Flag_of_Bulgaria.svg.png"
    },
    {
      cname: "BFA",
      cfullname: "Burkina Faso",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Burkina_Faso.svg/383px-Flag_of_Burkina_Faso.svg.png"
    },
    {
      cname: "BDI",
      cfullname: "Burundi",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Flag_of_Burundi.svg/383px-Flag_of_Burundi.svg.png"
    },
    {
      cname: "CAM",
      cfullname: "Cambodia",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/383px-Flag_of_Cambodia.svg.png"
    },
    {
      cname: "CMR",
      cfullname: "Cameroon",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/383px-Flag_of_Cameroon.svg.png"
    },
    {
      cname: "CAN",
      cfullname: "Canada",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/383px-Flag_of_Canada_%28Pantone%29.svg.png"
    },
    {
      cname: "CPV",
      cfullname: "Cape Verde",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Cape_Verde.svg/383px-Flag_of_Cape_Verde.svg.png"
    },
    {
      cname: "CAY",
      cfullname: "Cayman Islands",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_the_Cayman_Islands.svg/383px-Flag_of_the_Cayman_Islands.svg.png"
    },
    {
      cname: "CTA",
      cfullname: "Central African Republic",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Central_African_Republic.svg/383px-Flag_of_the_Central_African_Republic.svg.png"
    },
    {
      cname: "CHA",
      cfullname: "Chad",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Flag_of_Chad.svg/383px-Flag_of_Chad.svg.png"
    },
    {
      cname: "CHI",
      cfullname: "Chile",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/383px-Flag_of_Chile.svg.png"
    },
    {
      cname: "CHN",
      cfullname: "China PR",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/383px-Flag_of_the_People%27s_Republic_of_China.svg.png"
    },
    {
      cname: "TPE",
      cfullname: "Chinese Taipei",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Flag_of_the_Republic_of_China.svg/375px-Flag_of_the_Republic_of_China.svg.png"
    },
    {
      cname: "COL",
      cfullname: "Colombia",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/383px-Flag_of_Colombia.svg.png"
    },
    {
      cname: "COM",
      cfullname: "Comoros",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Flag_of_the_Comoros.svg/383px-Flag_of_the_Comoros.svg.png"
    },
    {
      cname: "CGO",
      cfullname: "Congo",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_the_Republic_of_the_Congo.svg/383px-Flag_of_the_Republic_of_the_Congo.svg.png"
    },
    {
      cname: "COD",
      cfullname: "Congo DR",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg/340px-Flag_of_the_Democratic_Republic_of_the_Congo.svg.png"
    },
    {
      cname: "COK",
      cfullname: "Cook Islands",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Flag_of_the_Cook_Islands.svg/383px-Flag_of_the_Cook_Islands.svg.png"
    },
    {
      cname: "CRC",
      cfullname: "Costa Rica",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Costa_Rica.svg/383px-Flag_of_Costa_Rica.svg.png"
    },
    {
      cname: "CIV",
      cfullname: "Côte d'Ivoire",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg/300px-Flag_of_C%C3%B4te_d%27Ivoire.svg.png"
    },
    {
      cname: "CRO",
      cfullname: "Croatia",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/383px-Flag_of_Croatia.svg.png"
    },
    {
      cname: "CUB",
      cfullname: "Cuba",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/383px-Flag_of_Cuba.svg.png"
    },
    {
      cname: "CUW",
      cfullname: "Curaçao",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Flag_of_Cura%C3%A7ao.svg/383px-Flag_of_Cura%C3%A7ao.svg.png"
    },
    {
      cname: "CYP",
      cfullname: "Cyprus",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Cyprus.svg/383px-Flag_of_Cyprus.svg.png"
    },
    {
      cname: "CZE",
      cfullname: "Czech Republic",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/383px-Flag_of_the_Czech_Republic.svg.png"
    },
    {
      cname: "TCH",
      cfullname: "Czechoslovakia",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/383px-Flag_of_the_Czech_Republic.svg.png"
    },
    {
      cname: "DEN",
      cfullname: "Denmark",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/338px-Flag_of_Denmark.svg.png"
    },
    {
      cname: "DJI",
      cfullname: "Djibouti",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_Djibouti.svg/383px-Flag_of_Djibouti.svg.png"
    },
    {
      cname: "DMA",
      cfullname: "Dominica",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Flag_of_Dominica.svg/383px-Flag_of_Dominica.svg.png"
    },
    {
      cname: "DOM",
      cfullname: "Dominican Republic",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_the_Dominican_Republic.svg/383px-Flag_of_the_Dominican_Republic.svg.png"
    },
    {
      cname: "ECU",
      cfullname: "Ecuador",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/383px-Flag_of_Ecuador.svg.png"
    },
    {
      cname: "EGY",
      cfullname: "Egypt",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/383px-Flag_of_Egypt.svg.png"
    },
    {
      cname: "SLV",
      cfullname: "El Salvador",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_El_Salvador.svg/383px-Flag_of_El_Salvador.svg.png"
    },
    {
      cname: "ENG",
      cfullname: "England",
      Flag: "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/383px-Flag_of_England.svg.png"
    },
    {
      cname: "EQG",
      cfullname: "Equatorial Guinea",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Equatorial_Guinea.svg/383px-Flag_of_Equatorial_Guinea.svg.png"
    },
    {
      cname: "ERI",
      cfullname: "Eritrea",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Flag_of_Eritrea.svg/383px-Flag_of_Eritrea.svg.png"
    },
    {
      cname: "EST",
      cfullname: "Estonia",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/383px-Flag_of_Estonia.svg.png"
    },
    {
      cname: "SWZ",
      cfullname: "Eswatini",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Flag_of_Eswatini.svg/383px-Flag_of_Eswatini.svg.png"
    },
    {
      cname: "ETH",
      cfullname: "Ethiopia",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Ethiopia.svg/383px-Flag_of_Ethiopia.svg.png"
    },
    {
      cname: "FRO",
      cfullname: "Faroe Islands",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flag_of_the_Faroe_Islands.svg/351px-Flag_of_the_Faroe_Islands.svg.png"
    },
    {
      cname: "FIJ",
      cfullname: "Fiji",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Fiji.svg/383px-Flag_of_Fiji.svg.png"
    },
    {
      cname: "FIN",
      cfullname: "Finland",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/383px-Flag_of_Finland.svg.png"
    },
    {
      cname: "FRA",
      cfullname: "France",
      Flag: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/383px-Flag_of_France.svg.png"
    },
    {
      cname: "GUF",
      cfullname: "French Guiana",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Flag_of_French_Guiana.svg/375px-Flag_of_French_Guiana.svg.png"
    },
    {
      cname: "GAB",
      cfullname: "Gabon",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Flag_of_Gabon.svg/340px-Flag_of_Gabon.svg.png"
    },
    {
      cname: "GAM",
      cfullname: "Gambia",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_The_Gambia.svg/300px-Flag_of_The_Gambia.svg.png"
    },
    {
      cname: "GEO",
      cfullname: "Georgia",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/383px-Flag_of_Georgia.svg.png"
    },
    {
      cname: "GER",
      cfullname: "Germany",
      Flag: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/383px-Flag_of_Germany.svg.png"
    },
    {
      cname: "GDR",
      cfullname: "Germany DR",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Flag_of_the_German_Democratic_Republic.svg/188px-Flag_of_the_German_Democratic_Republic.svg.png"
    },
    {
      cname: "GHA",
      cfullname: "Ghana",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Ghana.svg/383px-Flag_of_Ghana.svg.png"
    },
    {
      cname: "GIB",
      cfullname: "Gibraltar",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Flag_of_Gibraltar.svg/383px-Flag_of_Gibraltar.svg.png"
    },
    {
      cname: "GBR",
      cfullname: "Great Britain",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/383px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png"
    },
    {
      cname: "GRE",
      cfullname: "Greece",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/383px-Flag_of_Greece.svg.png"
    },
    {
      cname: "GRN",
      cfullname: "Grenada",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Grenada.svg/383px-Flag_of_Grenada.svg.png"
    },
    {
      cname: "GLP",
      cfullname: "Guadeloupe",
      Flag: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/375px-Flag_of_France.svg.png"
    },
    {
      cname: "GUM",
      cfullname: "Guam",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Flag_of_Guam.svg/383px-Flag_of_Guam.svg.png"
    },
    {
      cname: "GUA",
      cfullname: "Guatemala",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Guatemala.svg/383px-Flag_of_Guatemala.svg.png"
    },
    {
      cname: "GUI",
      cfullname: "Guinea",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Flag_of_Guinea.svg/383px-Flag_of_Guinea.svg.png"
    },
    {
      cname: "GNB",
      cfullname: "Guinea-Bissau",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Guinea-Bissau.svg/383px-Flag_of_Guinea-Bissau.svg.png"
    },
    {
      cname: "GUY",
      cfullname: "Guyana",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_Guyana.svg/383px-Flag_of_Guyana.svg.png"
    },
    {
      cname: "HAI",
      cfullname: "Haiti",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Haiti.svg/383px-Flag_of_Haiti.svg.png"
    },
    {
      cname: "HON",
      cfullname: "Honduras",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Flag_of_Honduras.svg/383px-Flag_of_Honduras.svg.png"
    },
    {
      cname: "HKG",
      cfullname: "Hong Kong",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Hong_Kong.svg/300px-Flag_of_Hong_Kong.svg.png"
    },
    {
      cname: "HUN",
      cfullname: "Hungary",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/383px-Flag_of_Hungary.svg.png"
    },
    {
      cname: "ISL",
      cfullname: "Iceland",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/354px-Flag_of_Iceland.svg.png"
    },
    {
      cname: "IND",
      cfullname: "India",
      Flag: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/383px-Flag_of_India.svg.png"
    },
    {
      cname: "IDN",
      cfullname: "Indonesia",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/383px-Flag_of_Indonesia.svg.png"
    },
    {
      cname: "IRN",
      cfullname: "IR Iran",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/383px-Flag_of_Iran.svg.png"
    },
    {
      cname: "IRQ",
      cfullname: "Iraq",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/383px-Flag_of_Iraq.svg.png"
    },
    {
      cname: "ISR",
      cfullname: "Israel",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/351px-Flag_of_Israel.svg.png"
    },
    {
      cname: "ITA",
      cfullname: "Italy",
      Flag: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/383px-Flag_of_Italy.svg.png"
    },
    {
      cname: "JAM",
      cfullname: "Jamaica",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Jamaica.svg/383px-Flag_of_Jamaica.svg.png"
    },
    {
      cname: "JPN",
      cfullname: "Japan",
      Flag: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/383px-Flag_of_Japan.svg.png"
    },
    {
      cname: "JOR",
      cfullname: "Jordan",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/383px-Flag_of_Jordan.svg.png"
    },
    {
      cname: "KAZ",
      cfullname: "Kazakhstan",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/383px-Flag_of_Kazakhstan.svg.png"
    },
    {
      cname: "KEN",
      cfullname: "Kenya",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kenya.svg/383px-Flag_of_Kenya.svg.png"
    },
    {
      cname: "PRK",
      cfullname: "Korea DPR",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_North_Korea.svg/383px-Flag_of_North_Korea.svg.png"
    },
    {
      cname: "KOR",
      cfullname: "Korea Republic",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/383px-Flag_of_South_Korea.svg.png"
    },
    {
      cname: "KVX",
      cfullname: "Kosovo",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Flag_of_Kosovo.svg/357px-Flag_of_Kosovo.svg.png"
    },
    {
      cname: "KUW",
      cfullname: "Kuwait",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Laos.svg/383px-Flag_of_Laos.svg.png"
    },
    {
      cname: "KGZ",
      cfullname: "Kyrgyz Republic",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/383px-Flag_of_Kyrgyzstan.svg.png"
    },
    {
      cname: "LAO",
      cfullname: "Laos",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Laos.svg/383px-Flag_of_Laos.svg.png"
    },
    {
      cname: "LVA",
      cfullname: "Latvia",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/383px-Flag_of_Latvia.svg.png"
    },
    {
      cname: "LIB",
      cfullname: "Lebanon",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Lebanon.svg/383px-Flag_of_Lebanon.svg.png"
    },
    {
      cname: "LES",
      cfullname: "Lesotho",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Flag_of_Lesotho.svg/383px-Flag_of_Lesotho.svg.png"
    },
    {
      cname: "LBR",
      cfullname: "Liberia",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Flag_of_Liberia.svg/383px-Flag_of_Liberia.svg.png"
    },
    {
      cname: "LBY",
      cfullname: "Libya",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Libya.svg/383px-Flag_of_Libya.svg.png"
    },
    {
      cname: "LIE",
      cfullname: "Liechtenstein",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Flag_of_Liechtenstein.svg/383px-Flag_of_Liechtenstein.svg.png"
    },
    {
      cname: "LTU",
      cfullname: "Lithuania",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Lithuania.svg/383px-Flag_of_Lithuania.svg.png"
    },
    {
      cname: "LUX",
      cfullname: "Luxembourg",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Luxembourg.svg/383px-Flag_of_Luxembourg.svg.png"
    },
    {
      cname: "MAC",
      cfullname: "Macau",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Flag_of_Macau.svg/383px-Flag_of_Macau.svg.png"
    },
    {
      cname: "MAD",
      cfullname: "Madagascar",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Madagascar.svg/383px-Flag_of_Madagascar.svg.png"
    },
    {
      cname: "MWI",
      cfullname: "Malawi",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Flag_of_Malawi.svg/383px-Flag_of_Malawi.svg.png"
    },
    {
      cname: "MAS",
      cfullname: "Malaysia",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/383px-Flag_of_Malaysia.svg.png"
    },
    {
      cname: "MDV",
      cfullname: "Maldives",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Maldives.svg/383px-Flag_of_Maldives.svg.png"
    },
    {
      cname: "MLI",
      cfullname: "Mali",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Mali.svg/383px-Flag_of_Mali.svg.png"
    },
    {
      cname: "MLT",
      cfullname: "Malta",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Malta.svg/383px-Flag_of_Malta.svg.png"
    },
    {
      cname: "MTQ",
      cfullname: "Martinique",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag-of-Martinique.svg/330px-Flag-of-Martinique.svg.png"
    },
    {
      cname: "MTN",
      cfullname: "Mauritania",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Flag_of_Mauritania.svg/383px-Flag_of_Mauritania.svg.png"
    },
    {
      cname: "MRI",
      cfullname: "Mauritius",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Mauritius.svg/383px-Flag_of_Mauritius.svg.png"
    },
    {
      cname: "MEX",
      cfullname: "Mexico",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/383px-Flag_of_Mexico.svg.png"
    },
    {
      cname: "MDA",
      cfullname: "Moldova",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Moldova.svg/383px-Flag_of_Moldova.svg.png"
    },
    {
      cname: "MNG",
      cfullname: "Mongolia",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Mongolia.svg/383px-Flag_of_Mongolia.svg.png"
    },
    {
      cname: "MNE",
      cfullname: "Montenegro",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Montenegro.svg/383px-Flag_of_Montenegro.svg.png"
    },
    {
      cname: "MSR",
      cfullname: "Montserrat",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Montserrat.svg/383px-Flag_of_Montserrat.svg.png"
    },
    {
      cname: "MAR",
      cfullname: "Morocco",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/383px-Flag_of_Morocco.svg.png"
    },
    {
      cname: "MOZ",
      cfullname: "Mozambique",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Mozambique.svg/383px-Flag_of_Mozambique.svg.png"
    },
    {
      cname: "MYA",
      cfullname: "Myanmar",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Myanmar.svg/383px-Flag_of_Myanmar.svg.png"
    },
    {
      cname: "NAM",
      cfullname: "Namibia",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Namibia.svg/383px-Flag_of_Namibia.svg.png"
    },
    {
      cname: "NEP",
      cfullname: "Nepal",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/209px-Flag_of_Nepal.svg.png"
    },
    {
      cname: "NED",
      cfullname: "Netherlands",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/383px-Flag_of_the_Netherlands.svg.png"
    },
    {
      cname: "NCL",
      cfullname: "New Caledonia",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flags_of_New_Caledonia.svg/383px-Flags_of_New_Caledonia.svg.png"
    },
    {
      cname: "NZL",
      cfullname: "New Zealand",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/383px-Flag_of_New_Zealand.svg.png"
    },
    {
      cname: "NCA",
      cfullname: "Nicaragua",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Nicaragua.svg/383px-Flag_of_Nicaragua.svg.png"
    },
    {
      cname: "NIG",
      cfullname: "Niger",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Flag_of_Niger.svg/298px-Flag_of_Niger.svg.png"
    },
    {
      cname: "NGA",
      cfullname: "Nigeria",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/383px-Flag_of_Nigeria.svg.png"
    },
    {
      cname: "MKD",
      cfullname: "North Macedonia",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_North_Macedonia.svg/383px-Flag_of_North_Macedonia.svg.png"
    },
    {
      cname: "NIR",
      cfullname: "Northern Ireland",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Flag_of_Northern_Ireland_%281953%E2%80%931972%29.svg/300px-Flag_of_Northern_Ireland_%281953%E2%80%931972%29.svg.png"
    },
    {
      cname: "NOR",
      cfullname: "Norway",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/351px-Flag_of_Norway.svg.png"
    },
    {
      cname: "OMA",
      cfullname: "Oman",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Oman.svg/383px-Flag_of_Oman.svg.png"
    },
    {
      cname: "PAK",
      cfullname: "Pakistan",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/383px-Flag_of_Pakistan.svg.png"
    },
    {
      cname: "PLE",
      cfullname: "Palestine",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Palestine.svg/383px-Flag_of_Palestine.svg.png"
    },
    {
      cname: "PAN",
      cfullname: "Panama",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/383px-Flag_of_Panama.svg.png"
    },
    {
      cname: "PNG",
      cfullname: "Papua New Guinea",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Flag_of_Papua_New_Guinea.svg/340px-Flag_of_Papua_New_Guinea.svg.png"
    },
    {
      cname: "PAR",
      cfullname: "Paraguay",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/383px-Flag_of_Paraguay.svg.png"
    },
    {
      cname: "PER",
      cfullname: "Peru",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/383px-Flag_of_Peru.svg.png"
    },
    {
      cname: "PHI",
      cfullname: "Philippines",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/383px-Flag_of_the_Philippines.svg.png"
    },
    {
      cname: "POL",
      cfullname: "Poland",
      Flag: "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/383px-Flag_of_Poland.svg.png"
    },
    {
      cname: "POR",
      cfullname: "Portugal",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/383px-Flag_of_Portugal.svg.png"
    },
    {
      cname: "PUR",
      cfullname: "Puerto Rico",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Flag_of_Puerto_Rico.svg/383px-Flag_of_Puerto_Rico.svg.png"
    },
    {
      cname: "QAT",
      cfullname: "Qatar",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/383px-Flag_of_Qatar.svg.png"
    },
    {
      cname: "IRL",
      cfullname: "Republic of Ireland",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/383px-Flag_of_Ireland.svg.png"
    },
    {
      cname: "REU",
      cfullname: "Réunion",
      Flag: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/300px-Flag_of_France.svg.png"
    },
    {
      cname: "ROU",
      cfullname: "Romania",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/383px-Flag_of_Romania.svg.png"
    },
    {
      cname: "RUS",
      cfullname: "Russia",
      Flag: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/383px-Flag_of_Russia.svg.png"
    },
    {
      cname: "RWA",
      cfullname: "Rwanda",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Rwanda.svg/383px-Flag_of_Rwanda.svg.png"
    },
    {
      cname: "SMN",
      cfullname: "Saint Martin",
      Flag: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/300px-Flag_of_France.svg.png"
    },
    {
      cname: "SAM",
      cfullname: "Samoa",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Samoa.svg/375px-Flag_of_Samoa.svg.png"
    },
    {
      cname: "SMR",
      cfullname: "San Marino",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Flag_of_San_Marino.svg/340px-Flag_of_San_Marino.svg.png"
    },
    {
      cname: "STP",
      cfullname: "São Tomé and Príncipe",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe.svg/383px-Flag_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe.svg.png"
    },
    {
      cname: "KSA",
      cfullname: "Saudi Arabia",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/383px-Flag_of_Saudi_Arabia.svg.png"
    },
    {
      cname: "SCO",
      cfullname: "Scotland",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/383px-Flag_of_Scotland.svg.png"
    },
    {
      cname: "SEN",
      cfullname: "Senegal",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/383px-Flag_of_Senegal.svg.png"
    },
    {
      cname: "SRB",
      cfullname: "Serbia",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/383px-Flag_of_Serbia.svg.png"
    },
    {
      cname: "SCG",
      cfullname: "Serbia and Montenegro",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_Serbia_and_Montenegro_%281992%E2%80%932006%29.svg/383px-Flag_of_Serbia_and_Montenegro_%281992%E2%80%932006%29.svg.png"
    },
    {
      cname: "SEY",
      cfullname: "Seychelles",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Seychelles.svg/375px-Flag_of_Seychelles.svg.png"
    },
    {
      cname: "SLE",
      cfullname: "Sierra Leone",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Sierra_Leone.svg/383px-Flag_of_Sierra_Leone.svg.png"
    },
    {
      cname: "SIN",
      cfullname: "Singapore",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/383px-Flag_of_Singapore.svg.png"
    },
    {
      cname: "SMA",
      cfullname: "Sint Maarten",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Sint_Maarten.svg/383px-Flag_of_Sint_Maarten.svg.png"
    },
    {
      cname: "SVK",
      cfullname: "Slovakia",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/383px-Flag_of_Slovakia.svg.png"
    },
    {
      cname: "SVN",
      cfullname: "Slovenia",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Slovenia.svg/383px-Flag_of_Slovenia.svg.png"
    },
    {
      cname: "SOL",
      cfullname: "Solomon Islands",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Flag_of_the_Solomon_Islands.svg/375px-Flag_of_the_Solomon_Islands.svg.png"
    },
    {
      cname: "SOM",
      cfullname: "Somalia",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Somalia.svg/383px-Flag_of_Somalia.svg.png"
    },
    {
      cname: "RSA",
      cfullname: "South Africa",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/383px-Flag_of_South_Africa.svg.png"
    },
    {
      cname: "SSD",
      cfullname: "South Sudan",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Flag_of_South_Sudan.svg/383px-Flag_of_South_Sudan.svg.png"
    },
    {
      cname: "URS",
      cfullname: "Soviet Union",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_Soviet_Union.svg/383px-Flag_of_the_Soviet_Union.svg.png"
    },
    {
      cname: "ESP",
      cfullname: "Spain",
      Flag: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/300px-Flag_of_Spain.svg.png"
    },
    {
      cname: "SRI",
      cfullname: "Sri Lanka",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Sri_Lanka.svg/383px-Flag_of_Sri_Lanka.svg.png"
    },
    {
      cname: "SKN",
      cfullname: "St. Kitts and Nevis",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg/383px-Flag_of_Saint_Kitts_and_Nevis.svg.png"
    },
    {
      cname: "LCA",
      cfullname: "St. Lucia",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Saint_Lucia.svg/383px-Flag_of_Saint_Lucia.svg.png"
    },
    {
      cname: "VIN",
      cfullname: "St. Vincent and the Grenadines",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg/383px-Flag_of_Saint_Vincent_and_the_Grenadines.svg.png"
    },
    {
      cname: "SDN",
      cfullname: "Sudan",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Sudan.svg/383px-Flag_of_Sudan.svg.png"
    },
    {
      cname: "SUR",
      cfullname: "Suriname",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Flag_of_Suriname.svg/383px-Flag_of_Suriname.svg.png"
    },
    {
      cname: "SWE",
      cfullname: "Sweden",
      Flag: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/383px-Flag_of_Sweden.svg.png"
    },
    {
      cname: "SUI",
      cfullname: "Switzerland",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Switzerland_%28Pantone%29.svg/255px-Flag_of_Switzerland_%28Pantone%29.svg.png"
    },
    {
      cname: "SYR",
      cfullname: "Syria",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Saint_Lucia.svg/383px-Flag_of_Saint_Lucia.svg.png"
    },
    {
      cname: "TAH",
      cfullname: "Tahiti",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Flag_of_French_Polynesia.svg/375px-Flag_of_French_Polynesia.svg.png"
    },
    {
      cname: "TJK",
      cfullname: "Tajikistan",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Tajikistan.svg/383px-Flag_of_Tajikistan.svg.png"
    },
    {
      cname: "TAN",
      cfullname: "Tanzania",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tanzania.svg/383px-Flag_of_Tanzania.svg.png"
    },
    {
      cname: "THA",
      cfullname: "Thailand",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/383px-Flag_of_Thailand.svg.png"
    },
    {
      cname: "TLS",
      cfullname: "Timor-Leste",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flag_of_East_Timor.svg/383px-Flag_of_East_Timor.svg.png"
    },
    {
      cname: "TOG",
      cfullname: "Togo",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Flag_of_Togo.svg/383px-Flag_of_Togo.svg.png"
    },
    {
      cname: "TGA",
      cfullname: "Tonga",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Tonga.svg/383px-Flag_of_Tonga.svg.png"
    },
    {
      cname: "TRI",
      cfullname: "Trinidad and Tobago",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Trinidad_and_Tobago.svg/383px-Flag_of_Trinidad_and_Tobago.svg.png"
    },
    {
      cname: "TUN",
      cfullname: "Tunisia",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/338px-Flag_of_Tunisia.svg.png"
    },
    {
      cname: "TUR",
      cfullname: "Türkiye",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/330px-Flag_of_Turkey.svg.png"
    },
    {
      cname: "TKM",
      cfullname: "Turkmenistan",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Turkmenistan.svg/383px-Flag_of_Turkmenistan.svg.png"
    },
    {
      cname: "TCA",
      cfullname: "Turks and Caicos Islands",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_the_Turks_and_Caicos_Islands.svg/383px-Flag_of_the_Turks_and_Caicos_Islands.svg.png"
    },
    {
      cname: "UGA",
      cfullname: "Uganda",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Flag_of_Uganda.svg/383px-Flag_of_Uganda.svg.png"
    },
    {
      cname: "UKR",
      cfullname: "Ukraine",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/383px-Flag_of_Ukraine.svg.png"
    },
    {
      cname: "UAE",
      cfullname: "United Arab Emirates",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/383px-Flag_of_the_United_Arab_Emirates.svg.png"
    },
    {
      cname: "USA",
      cfullname: "United States",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/383px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
    },
    {
      cname: "URU",
      cfullname: "Uruguay",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/383px-Flag_of_Uruguay.svg.png"
    },
    {
      cname: "VIR",
      cfullname: "US Virgin Islands",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Flag_of_the_United_States_Virgin_Islands.svg/383px-Flag_of_the_United_States_Virgin_Islands.svg.png"
    },
    {
      cname: "UZB",
      cfullname: "Uzbekistan",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/383px-Flag_of_Uzbekistan.svg.png"
    },
    {
      cname: "VAN",
      cfullname: "Vanuatu",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Vanuatu.svg/375px-Flag_of_Vanuatu.svg.png"
    },
    {
      cname: "VEN",
      cfullname: "Venezuela",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/383px-Flag_of_Venezuela.svg.png"
    },
    {
      cname: "VIE",
      cfullname: "Vietnam",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/383px-Flag_of_Vietnam.svg.png"
    },
    {
      cname: "WAL",
      cfullname: "Wales",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Flag_of_Wales.svg/383px-Flag_of_Wales.svg.png"
    },
    {
      cname: "YEM",
      cfullname: "Yemen",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Yemen.svg/383px-Flag_of_Yemen.svg.png"
    },
    {
      cname: "YUG",
      cfullname: "Yugoslavia",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Flag_of_Yugoslavia_%281946-1992%29.svg/383px-Flag_of_Yugoslavia_%281946-1992%29.svg.png"
    },
    {
      cname: "ZAM",
      cfullname: "Zambia",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Zambia.svg/383px-Flag_of_Zambia.svg.png"
    },
    {
      cname: "ZAN",
      cfullname: "Zanzibar",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Zanzibar.svg/383px-Flag_of_Zanzibar.svg.png"
    },
    {
      cname: "ZIM",
      cfullname: "Zimbabwe",
      Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Flag_of_Zimbabwe.svg/383px-Flag_of_Zimbabwe.svg.png"
    },

    ]

  });
  const teamslog = [{
      tname: "Real Madrid",
      Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/240px-Real_Madrid_CF.svg.png"
    },
    {
      tname: "Athletic",
      Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Club_Athletic_Bilbao_logo.svg/170px-Club_Athletic_Bilbao_logo.svg.png"
    },
    {
      tname: "Mallorca",
      Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Rcd_mallorca.svg/155px-Rcd_mallorca.svg.png"
    },
    {
      tname: "Alaves",
      Logo: "https://upload.wikimedia.org/wikipedia/an/thumb/2/2e/Deportivo_Alaves_logo.svg/200px-Deportivo_Alaves_logo.svg.png?20180119120309"
    },
    {
      tname: "Villarreal",
      Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Villarreal_CF_logo-en.svg/255px-Villarreal_CF_logo-en.svg.png"
    },
    {
      tname: "Malaga",
      Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/M%C3%A1laga_CF.svg/150px-M%C3%A1laga_CF.svg.png"
    },
    {
      tname: "Sevilla",
      Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Sevilla_FC_logo.svg/233px-Sevilla_FC_logo.svg.png"
    },
    {
      tname: "Barcelona",
      Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/300px-FC_Barcelona_%28crest%29.svg.png"
    },
    {
      tname: "Betis",
      Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Real_betis_logo.svg/220px-Real_betis_logo.svg.png"
    },
    {
      tname: "Getafe",
      Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Getafe_logo.svg/270px-Getafe_logo.svg.png"
    },
    {
      tname: "Deportivo",
      Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/RC_Deportivo_La_Coru%C3%B1a_logo.svg/255px-RC_Deportivo_La_Coru%C3%B1a_logo.svg.png"
    },
    {
      tname: "Celta",
      Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/RC_Celta_de_Vigo_logo.svg/195px-RC_Celta_de_Vigo_logo.svg.png"
    },
    {
      tname: "Valencia",
      Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Valenciacf.svg/263px-Valenciacf.svg.png"
    },
    {
      tname: "Espanyol",
      Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Rcd_espanyol_logo.svg/150px-Rcd_espanyol_logo.svg.png"
    },
    {
      tname: "Atletico",
      Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Atletico_Madrid_2017_logo.svg/234px-Atletico_Madrid_2017_logo.svg.png"
    },
    {
      tname: "Inter",
      Logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Inter_Old_Logo_%282007-2014%29.svg/394px-Inter_Old_Logo_%282007-2014%29.svg.png"
    },
    {
      tname: "Milan",
      Logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/153px-Logo_of_AC_Milan.svg.png"
    },
    {
      tname: "Roma",
      Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/AS_Roma_logo_%282017%29.svg/240px-AS_Roma_logo_%282017%29.svg.png"
    },
    {
      tname: "Juventus",
      Logo: "https://upload.wikimedia.org/wikipedia/it/thumb/5/50/Logo_FC_Juventus_2004-2017.svg/800px-Logo_FC_Juventus_2004-2017.svg.png"
    },
    {
      tname: "Napoli",
      Logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SSC_Napoli_%28Gradient%29.svg/240px-SSC_Napoli_%28Gradient%29.svg.png"
    },
    {
      tname: "ParisSG",
      Logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/600px-Paris_Saint-Germain_Logo.svg.png?20231024114603"
    },
    {
      tname: "Lyon",
      Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Olympique_Lyonnais_logo.svg/165px-Olympique_Lyonnais_logo.svg.png"
    },
    {
      tname: "Monaco",
      Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/LogoASMonacoFC2021.svg/125px-LogoASMonacoFC2021.svg.png"
    },
    {
      tname: "Marseille",
      Logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Olympique_Marseille_logo.svg/180px-Olympique_Marseille_logo.svg.png"
    },
    {
      tname: "Sporting",
      Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Sporting_Clube_de_Portugal_%28Logo%29.svg/160px-Sporting_Clube_de_Portugal_%28Logo%29.svg.png"
    },
    {
      tname: "Porto",
      Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/FC_Porto.svg/255px-FC_Porto.svg.png"
    },
    {
      tname: "Benfica",
      Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/SL_Benfica_logo.svg/315px-SL_Benfica_logo.svg.png"
    },
    {
      tname: "Ajax",
      Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/79/Ajax_Amsterdam.svg/200px-Ajax_Amsterdam.svg.png"
    },
    {
      tname: "PSV",
      Logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/PSV_Eindhoven_-_Philips_Stadion_-_Kleedkamer_Welkom_-_Cropped_Logo.jpg/210px-PSV_Eindhoven_-_Philips_Stadion_-_Kleedkamer_Welkom_-_Cropped_Logo.jpg"
    },
    {
      tname: "Feyenoord",
      Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/Feyenoord_logo.svg/180px-Feyenoord_logo.svg.png"
    },
    {
      tname: "Bayern",
      Logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/240px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png"
    },
    {
      tname: "Stuttgart",
      Logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/VfB_Stuttgart_1893_Logo.svg/147px-VfB_Stuttgart_1893_Logo.svg.png"
    },
    {
      tname: "Leverkusen",
      Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/59/Bayer_04_Leverkusen_logo.svg/230px-Bayer_04_Leverkusen_logo.svg.png"
    },
    {
      tname: "Borussia",
      Logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/768px-Borussia_Dortmund_logo.svg.png"
    },
    {
      tname: "Wolfsburg",
      Logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/VfL_Wolfsburg_Logo.svg/160px-VfL_Wolfsburg_Logo.svg.png"
    },
    {
      tname: "Olympiakos",
      Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Olympiacos_FC_logo.svg/190px-Olympiacos_FC_logo.svg.png"
    },
    {
      tname: "Arsenal",
      Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/270px-Arsenal_FC.svg.png"
    },
    {
      tname: "Chelsea",
      Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/285px-Chelsea_FC.svg.png"
    },
    {
      tname: "Leicester",
      Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Leicester_City_crest.svg/190px-Leicester_City_crest.svg.png"
    },
    {
      tname: "Man City",
      Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/285px-Manchester_City_FC_badge.svg.png"
    },
    {
      tname: "Tottenham",
      Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Tottenham_Hotspur.svg/1200px-Tottenham_Hotspur.svg.png"
    },
    {
      tname: "Man Utd",
      Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/285px-Manchester_United_FC_crest.svg.png"
    },
    {
      tname: "Liverpool",
      Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/270px-Liverpool_FC.svg.png"
    },
    {
      tname: "Schalke",
      Logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/FC_Schalke_04_Logo.svg/293px-FC_Schalke_04_Logo.svg.png"
    },
    {
      tname: "Galatasaray",
      Logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Galatasaray_Sports_Club_Logo.svg/225px-Galatasaray_Sports_Club_Logo.svg.png"
    },
    {
      tname: "Celtic",
      Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Celtic_FC.svg/270px-Celtic_FC.svg.png"
    },
  ];
  const teams = [
      "Real Madrid",
      "Athletic",
      "Mallorca",
      "Alaves",
      "Villarreal",
      "Malaga",
      "Sevilla",
      "Barcelona",
      "Betis",
      "Getafe",
      "Deportivo",
      "Celta",
      "Valencia",
      "Espanyol",
      "Atletico",
      "Inter",
      "Milan",
      "Roma",
      "Juventus",
      "Napoli",
      "ParisSG",
      "Lyon",
      "Monaco",
      "Marseille",
      "Sporting",
      "Porto",
      "Benfica",
      "Ajax",
      //"PSV",
      //"Feyenoord",
      "Bayern",
      //"Stuttgart",
      "Leverkusen",
      "Borussia",
      //"Wolfsburg",
      "Olympiakos",
      "Arsenal",
      "Chelsea",
      "Leicester",
      "Man City",
      "Tottenham",
      "Man Utd",
      "Schalke",
      "Galatasaray"
  ];
  const countrypossible = ["HUN", "SVK", "AUS", "SVN", "UKR", "MLI", "BIH", "AUT", "JPN", "RUS", "PAR", "CHI", "MEX", "CZE", "ALG", "WAL", "POL", "SCO", "SWE", "GHA", "ROU", "NOR", "GRE", "MAR", "SUI", "USA", "IRL", "DEN", "TUR", "CMR", "COL", "NGA", "CIV", "SEN", "CRO", "BEL", "SRB", "URU", "NED", "ARG", "GER", "POR", "BRA", "FRA", "ENG", "ITA", "ESP",];
  const WCpossible = ["Played WC 2022", "Played WC 2018", "Played WC 2014", "Played WC 2010", "Played WC 2006", "Played WC 2002"];
  const Europossible = ["Played Euro 2000", "Played Euro 2004", "Played Euro 2008", "Played Euro 2012", "Played Euro 2016", "Played Euro 2021",];
  const Wonpossible = ["WC01", "WC02", "Premier", "ChampionsWin", "EuropaWin", "LaLigaWin", "SerieAWin"]
  const Positionpossible = ["PO", "DF", "CC", "DL"]

  initLocalStorage();
  loadLocalStorage();
  initHelpModal();


//This function starts the parameters of Local Storage

  function initLocalStorage(){

  }




//This function loads whatever we have stored in Local Storage

  function loadLocalStorage(){
    
    
    
    const storedBoardContainer = window.localStorage.getItem("boardContainer");
    if (storedBoardContainer) {
      document.getElementById("board-container").innerHTML =
        storedBoardContainer;
    }



  }


///////////////////////////////////////////////////////////
//      01.   ANALYZE CONDITION
//            -This function converts any puzzle field into the category you should look into the player
  
  function analyzeCondition(conditn) {
    if (conditn.length === 3) {
      return "Country";
    } else if (conditn.includes("Played WC")) {
      return "WC";
    } else if (conditn.includes("Played Euro")) {
      return "Euro";
    } else if (conditn.includes("WC") && conditn.length === 4) {
      return "Titles";
    } else if (conditn.includes("Premier") || conditn.includes("ChampionsWin") || conditn.includes("EuropaWin") || conditn.includes("LaLigaWin") || conditn.includes("SerieAWin")) {
      return "Titles";
    } else if (conditn.length === 2) {
      return "Position";
    } else {
      return "Teams";
    }
  }
///////////////////////////////////////////////////////////




//      02.  GET RANDOM ITEM
//           This function gets a random item from an array
///////////////////////////////////////////////////////////

  function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
///////////////////////////////////////////////////////////






//      03.  CHEQUEO
//           -This function returns the matrix of players that meet both conditions of a puzzle
//           -The argument is a pair of conditions
///////////////////////////////////////////////////////////

  function chequeo(condit) {

    var x = analyzeCondition(condit[0])
    var y = analyzeCondition(condit[1])

    if (x.includes("Teams") && !y.includes("Teams")) {
      checkd = names.filter(player =>
        player.Teams.some(team => team.club.includes(condit[0])) &&
        player[y].includes(condit[1])
      );
    } else if (y.includes("Teams") && !x.includes("Teams")) {
      checkd = names.filter(player =>
        player.Teams.some(team => team.club.includes(condit[1])) &&
        player[x].includes(condit[0])
      );
    } else if (x.includes("Teams") && y.includes("Teams")) {
      checkd = names.filter(player =>
        player.Teams.some(team => team.club.includes(condit[0])) && player.Teams.some(team => team.club.includes(condit[1]))
      );
    } else {
      if (condit[0].includes("Played WC")) {
        condit[0] = condit[0].slice(-4)
      }
      if (condit[1].includes("Played WC")) {
        condit[1] = condit[1].slice(-4)
      }
      if (condit[0].includes("Played Euro")) {
        condit[0] = condit[0].slice(-4)
      }
      if (condit[1].includes("Played Euro")) {
        condit[1] = condit[1].slice(-4)
      }
      checkd = names.filter(item =>
        item[x].includes(condit[0]) &&
        item[y].includes(condit[1])
      )
    }
    return checkd
  }
///////////////////////////////////////////////////////////









//      04.  RANDOMIZE PUZZLE
//           -This function creates a random puzzle
//           -Conditions (row, column) are defined on two arrays
//           -It does 2000 iterations until it finds a puzzle without repeated elements
///////////////////////////////////////////////////////////



function RandomizePuzzle() {

  var CONDITIONS = [
    "teams", "teams", "teams",
    "countries", "countries", "countries", "countries", "countries",
    "Position", "WC", "Won", "Euro",
  ];
  var CONDITIONS2 = [
    "teams", "teams", "teams", "teams", "teams", "teams",
    "countries", "countries", "countries",
    "WC", "Euro",
    "Won"
  ];

  var rpuzzle = [];

  for (var i = 0; i < 3; i++) {
    rpuzzle.push(CONDITIONS[Math.floor(Math.random() * CONDITIONS.length)]);
  }
  for (var i = 3; i < 6; i++) {
    rpuzzle.push(CONDITIONS2[Math.floor(Math.random() * CONDITIONS2.length)]);
  }

  var result = [];
  var maxIterations = 2000; // Maximum number of iterations
  var iterationCount = 0; // Initialize iteration counter

  do {
    result = rpuzzle.map(function (item) {
      if (item === 'teams') {
        return getRandomItem(teams);
      } else if (item === 'countries') {
        return getRandomItem(countrypossible);
      } else if (item === 'WC') {
        return getRandomItem(WCpossible);
      } else if (item === 'Euro') {
        return getRandomItem(Europossible);
      } else if (item === 'Won') {
        return getRandomItem(Wonpossible);
      } else if (item === 'Position') {
        return getRandomItem(Positionpossible);
      }
    });

    iterationCount++;
    if (iterationCount >= maxIterations) {
      break;
    }
  } while (result.length !== new Set(result).size);

  rpuzzle = [{
    prow: [result[0], result[1], result[2]],
    pcolumn: [result[3], result[4], result[5]]
  },];
  return rpuzzle;
}
///////////////////////////////////////////////////////////






//      05.  MANY RANDOM PUZZLE
//           -This function makes random puzzles until it finds one with more than 'z' solutions on each cell
//           -It does at most 10,000 iterations 
///////////////////////////////////////////////////////////

function manyRandomPuzzle(){

  let iterations = 0; // Initialize iteration counter
  do {
    puzzle1 = RandomizePuzzle();
    totality = [];
    for (let i = 0; i < puzzle1[0].prow.length; i++) {
      for (let j = 0; j < puzzle1[0].pcolumn.length; j++) {
        totality.push(chequeo([puzzle1[0].prow[i], puzzle1[0].pcolumn[j]]).length);
      }
    }
    iterations++;
    if (iterations >= 10000) {
      break;
    }

  } while (Math.min(...totality) < 5);

  return puzzle1
}
///////////////////////////////////////////////////////////







//      06.  INIT HELP MODAL
//           -This function adds a modal to the help button
///////////////////////////////////////////////////////////

function initHelpModal() {
  const modal = document.getElementById("help-modal");
  const btn = document.getElementById("help-button"); // Get the button that opens the modal
  const span = document.getElementById("close-help");  // Get the <span> element that closes the modal
  const modalContent = document.querySelector(".modal-content"); // Get modal content

  function openModal() {
    modal.style.display = "block";
    setTimeout(() => {
      modalContent.classList.add("show"); // Add class to show modal content with smooth transition
    }, 30);
  }

  function closeModal() {
    modalContent.classList.remove("show"); // Remove class to hide modal content with smooth transition
    setTimeout(() => {
      modal.style.display = "none";
    }, 300); // Delay hiding the modal to ensure smooth transition completion
  }

  btn.addEventListener("click", openModal);

  span.addEventListener("click", closeModal);

  window.addEventListener("click", function (event) {   // When the user clicks anywhere outside of the modal, close it
    if (event.target == modal) {
      closeModal();
    }
  });
}
///////////////////////////////////////////////////////////




function createDisclaimer() {
  const coolText = document.createElement("p");
  coolText.innerHTML = "This website does not own any of the club, league, or event logos depicted within this site. All logos contained within this site are properties of their respective leagues, clubs, ownership groups, and/or organizations.<br><br>";

  // Appen   e first button to the bodylement after the grid container
  document.getElementById('gridContainer').appendChild(coolText);
  coolText.style.bottom = '-50%'; // Adjust as needed
  coolText.style.position = 'fixed';
  coolText.style.left = '50%';
  coolText.style.transform = 'translate(-50%, -50%)';
  coolText.style.textAlign = 'center';
  coolText.style.width = '100%'; // Adjust as needed
  coolText.style.fontFamily = 'Roboto, sans-serif';
  coolText.style.fontSize = '9px'; // Adjust as needed
  coolText.style.marginBottom = '50px'; // Adjust as needed
}

