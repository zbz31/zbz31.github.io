 document.addEventListener("DOMContentLoaded", () => {
 // window.localStorage.removeItem('current3Grid');
  let answers=[]

  const puzzleselection = [
    [{ order: "1", result: "France 2-1 Portugal", year: "2000", category: "EURO", prow: ["Played Euro 2000", "Real Madrid", "Barcelona"], pcolumn: ["FRA", "POR", "Juventus"], ylink: "https://www.youtube.com/watch?v=BeHaPM91ZF4" }],
    [{ order: "2", result: "Man Utd 0-0 Arsenal", year: "2003", category: "Premier League", prow: ["NED", "FRA", "Played Euro 2000"], pcolumn: ["Man Utd", "Arsenal", "Premier"], ylink: "https://www.youtube.com/watch?v=_ek9oXTXpog" }],
    [{ order: "3", result: "Francia 3-3 Argentina", year: "2022", category: "World Cup", prow: ["Played WC 2022", "WC01", "Barcelona"], pcolumn: ["ARG", "FRA", "ParisSG"], ylink: "https://youtu.be/zhEWqfP6V_w" }],
    [{ order: "4", result: "Brazil 0-3 France", year: "1998", category: "World Cup", prow: ["Played WC 1998", "DL", "CC"], pcolumn: ["BRA", "FRA", "WC01"], ylink: "https://www.youtube.com/watch?v=tmjFa9LB7Pg" }],
    [{ order: "5", result: "Man Utd 2-1 Bayern", year: "1999", category: "Champions", prow: ["ChampionsWin", "Premier", "DL"], pcolumn: ["Man Utd", "Bayern", "NOR"], ylink: "https://www.youtube.com/watch?v=kiEq_TLXiCg" }],
    [{ order: "6", result: "Netherlands 5-1 Spain", year: "2014", category: "World Cup", prow: ["Played WC 2014", "Premier", "Man Utd"], pcolumn: ["NED", "ESP", "Arsenal"], ylink: "https://www.youtube.com/watch?v=DeKSmd-hjwo" }],
    [{ order: "7", result: "Bayern 1-1 Villarreal", year: "2022", category: "Champions", prow: ["DL", "CC", "Played WC 2022"], pcolumn: ["Bayern", "Villarreal", "ESP"], ylink: "https://www.youtube.com/watch?v=KxjSd3pj3k4" }],
    [{ order: "8", result: "Liverpool 4-0 R. Madrid", year: "2009", category: "Champions", prow: ["Real Madrid", "ESP", "Played Euro 2008"], pcolumn: ["Liverpool", "ChampionsWin", "Premier"], ylink: "https://www.youtube.com/watch?v=1eN_ehTBPb4" }],
    [{ order: "9", result: "France 4-2 Croatia", year: "2018", category: "World Cup", prow: ["Played WC 2018", "Atletico", "Tottenham"], pcolumn: ["FRA", "CRO", "WC01"], ylink: "https://www.youtube.com/watch?v=GrsEAvRerTg" }],
    [{ order: "10", result: "Chelsea 1-0 Man City", year: "2021", category: "Champions", prow: ["Chelsea", "Man City", "DL"], pcolumn: ["ChampionsWin", "GER", "FRA"], ylink: "https://www.youtube.com/watch?v=GX0H_EzxXvM" }],
    [{ order: "11", result: "Bayern 2-1 Borussia", year: "2013", category: "Champions", prow: ["Bayern", "DL", "CC"], pcolumn: ["Borussia", "NED", "ChampionsWin"], ylink: "https://www.youtube.com/watch?v=wA4ChhQ38GQ" }],
    [{ order: "12", result: "Brazil 2-0 Germany", year: "2002", category: "World Cup", prow: ["Played WC 2002", "WC01", "SerieAWin"], pcolumn: ["BRA", "GER", "Real Madrid"], ylink: "https://www.youtube.com/watch?v=O8dUhMGtUtw" }],
    [{ order: "13", result: "R. Madrid 4-1 Atlético", year: "2014", category: "Champions", prow: ["ChampionsWin", "DF", "Sevilla"], pcolumn: ["Real Madrid", "Atletico", "Played WC 2014"], ylink: "https://www.youtube.com/watch?v=Ji021RYgGXQ" }],
    [{ order: "14", result: "R. Madrid 1-0 Juventus", year: "1998", category: "Champions", prow: ["Played WC 1998", "ChampionsWin", "Valencia"], pcolumn: ["Real Madrid", "Juventus", "LaLigaWin"], ylink: "https://www.youtube.com/watch?v=P-0mRkA7FHE" }],
    [{ order: "15", result: "Argentina 0-3 Croatia", year: "2018", category: "World Cup", prow: ["LaLigaWin", "ChampionsWin", "CC"], pcolumn: ["CRO", "ARG", "Played WC 2018"], ylink: "https://www.youtube.com/watch?v=hcM5n71XmBo" }],
    [{ order: "16", result: "Juventus 1-3 Barcelona", year: "2015", category: "Champions", prow: ["CRO", "URU", "BRA"], pcolumn: ["Barcelona", "Juventus", "ChampionsWin"], ylink: "https://www.youtube.com/watch?v=1mVu7AzvCDo" }],
    [{ order: "17", result: "R. Madrid 1-0 Liverpool", year: "2022", category: "Champions", prow: ["PO", "BRA", "Played WC 2022"], pcolumn: ["Real Madrid", "Liverpool", "ChampionsWin"], ylink: "https://www.youtube.com/watch?v=g306fSvzDig" }],
    [{ order: "18", result: "Sweden 4-2 England", year: "2011", category: "Other", prow: ["Man Utd", "DL", "Played Euro 2012"], pcolumn: ["SWE", "ENG", "Ajax"], ylink: "https://www.youtube.com/watch?v=RDsxKXa0PbA" }],
    [{ order: "19", result: "Spain 1-1 Ireland", year: "2002", category: "World Cup", prow: ["Played WC 2002", "DL", "CC"], pcolumn: ["ESP", "IRL", "Valencia"], ylink: "https://www.youtube.com/watch?v=st8f8W70BO0" }],
    [{ order: "20", result: "Milan 2-1 Liverpool", year: "2007", category: "Champions", prow: ["ChampionsWin", "DL", "NED"], pcolumn: ["Milan", "Liverpool", "SerieAWin"], ylink: "https://www.youtube.com/watch?v=HB3JnHb_IG4" }],
    [{ order: "21", result: "R. Madrid 3-1 Liverpool", year: "2018", category: "Champions", prow: ["DL", "FRA", "PO"], pcolumn: ["Real Madrid", "Liverpool", "Tottenham"], ylink: "https://www.youtube.com/watch?v=rtFGpfrdlMI" }],
    [{ order: "22", result: "Porto 3-2 Celtic", year: "2003", category: "Europa League", prow: ["DL", "CC", "DF"], pcolumn: ["Celtic", "Porto", "EuropaWin"], ylink: "https://www.youtube.com/watch?v=mvPNakjRQyw" }],
    [{ order: "23", result: "Chile 0-0 Argentina", year: "2011", category: "Other", prow: ["DL", "Barcelona", "Inter"], pcolumn: ["CHI", "ARG", "LaLigaWin"], ylink: "https://www.youtube.com/watch?v=ATXMJOEt6zc" }],
    [{ order: "24", result: "Milan 0-0 Juventus", year: "2003", category: "Champions", prow: ["ChampionsWin", "PO", "DF"], pcolumn: ["Milan", "Juventus", "ITA"], ylink: "https://www.youtube.com/watch?v=fGT5raSCUSQ" }],
    [{ order: "25", result: "R. Madrid 2-1 Bayer L", year: "2002", category: "Champions", prow: ["Real Madrid", "CC", "Played WC 2002"], pcolumn: ["Leverkusen", "ChampionsWin", "FRA"], ylink: "https://www.youtube.com/watch?v=ca-O58vdPTQ" }],
    [{ order: "26", result: "Italy 0-1 Uruguay", year: "2014", category: "World Cup", prow: ["Played WC 2014", "DF", "Atletico"], pcolumn: ["URU", "ITA", "Juventus"], ylink: "https://www.youtube.com/watch?v=TWpFi-GKSyQ" }],
    [{ order: "27", result: "Porto 3-0 Monaco", year: "2004", category: "Champions", prow: ["ChampionsWin", "POR", "DL"], pcolumn: ["Porto", "Monaco", "Played Euro 2004"], ylink: "https://www.youtube.com/watch?v=ms4XLL58UUs" }],
    [{ order: "28", result: "Barcelona 2-8 Bayern", year: "2020", category: "Champions", prow: ["Barcelona", "ChampionsWin", "BRA"], pcolumn: ["Bayern", "Espanyol", "LaLigaWin"], ylink: "https://www.youtube.com/watch?v=nMt56fQKLIQ" }],
    [{ order: "29", result: "Liverpool 4-3 Borussia", year: "2016", category: "Champions", prow: ["Played Euro 2016", "DF", "ChampionsWin"], pcolumn: ["Liverpool", "Borussia", "PremierWin"], ylink: "https://www.youtube.com/watch?v=bXnpbaKWHXc" }],
    [{ order: "30", result: "Villarreal 1-1 Man Utd", year: "2021", category: "Europa League", prow: ["PO", "EuropaWin", "Played WC 2022"], pcolumn: ["Villarreal", "Man Utd", "ESP"], ylink: "https://www.youtube.com/watch?v=X_NSB3CnHoo" }],
    [{ order: "31", result: "Liverpool 3-3 Milan", year: "2005", category: "Champions", prow: ["ChampionsWin", "DL", "PO"], pcolumn: ["Liverpool", "Milan", "Premier"], ylink: "https://www.youtube.com/watch?v=3ojXHf293M8" }],
    [{ order: "32", result: "Italy 0-0 South Korea", year: "2002", category: "World Cup", prow: ["Played WC 2002", "DL", "CC"], pcolumn: ["ITA", "KOR", "ESP"], ylink: "https://www.youtube.com/watch?v=VxHFxUjqZSo" }],
    [{ order: "33", result: "Barcelona 2-1 Arsenal", year: "2006", category: "Champions", prow: ["Arsenal", "Chelsea", "Played WC 2006"], pcolumn: ["Barcelona", "ChampionsWin", "LaLigaWin"], ylink: "https://www.youtube.com/watch?v=VsdMmDwCY10" }],
    [{ order: "34", result: "England 1-2 Brazil", year: "1998", category: "World Cup", prow: ["Played WC 2002", "ChampionsWin", "LaLigaWin"], pcolumn: ["ENG", "BRA", "Barcelona"], ylink: "https://www.youtube.com/watch?v=4JcwixRnFhs" }],
    [{ order: "35", result: "Liverpool 2-0 Tottenham", year: "2019", category: "Champions", prow: ["ChampionsWin", "Premier", "BEL"], pcolumn: ["Liverpool", "Tottenham", "Atletico"], ylink: "https://www.youtube.com/watch?v=8gh3F-pEXK0" }],
    [{ order: "36", result: "England 2-2 Greece", year: "2001", category: "Other", prow: ["CC", "DL", "DF"], pcolumn: ["ENG", "GRE", "Played WC 2002"], ylink: "https://www.youtube.com/watch?v=t0GESlaVNdE" }],
    [{ order: "37", result: "Monaco 3-1 R. Madrid", year: "2004", category: "Champions", prow: ["Real Madrid", "DL", "ChampionsWin"], pcolumn: ["Monaco", "LaLigaWin", "Played Euro 2004"], ylink: "https://www.youtube.com/watch?v=w6lXZWSyp84" }],
    [{ order: "38", result: "Sevilla 1-1 Roma", year: "2023", category: "Europa League", prow: ["Played WC 2022", "PO", "ARG"], pcolumn: ["Sevilla", "Roma", "EuropaWin"], ylink: "https://www.youtube.com/watch?v=Knwgwhr-0gA" }],
    [{ order: "39", result: "Atlético 3-0 Athletic", year: "2012", category: "Europa League", prow: ["Atletico", "DL", "CC"], pcolumn: ["Athletic", "COL", "EuropaWin"], ylink: "https://www.youtube.com/watch?v=KHVdoHhhan8" }],
    [{ order: "40", result: "R. Madrid 0-3 Barcelona", year: "2006", category: "LaLiga", prow: ["Played WC 2006", "CC", "WC01"], pcolumn: ["Real Madrid", "Barcelona", "BRA"], ylink: "https://www.youtube.com/watch?v=XBPhFGpNFyA" }],
    [{ order: "41", result: "R. Madrid 3-0 Valencia", year: "2000", category: "Champions", prow: ["ChampionsWin", "Played Euro 2000", "Liverpool"], pcolumn: ["Real Madrid", "Valencia", "LaLigaWin"], ylink: "https://www.youtube.com/watch?v=NheGyuANjiI" }],
    [{ order: "42", result: "Chelsea 4-1 Arsenal", year: "2019", category: "Europa League", prow: ["EuropaWin", "Premier", "CC"], pcolumn: ["Chelsea", "Arsenal", "BEL"], ylink: "https://www.youtube.com/watch?v=FR_cF8MELvw" }],
    [{ order: "43", result: "Italy 1-1 France", year: "2006", category: "World Cup", prow: ["Played WC 2006", "Inter", "Juventus"], pcolumn: ["ITA", "FRA", "WC01"], ylink: "https://www.youtube.com/watch?v=Nlsm0RlC8zI" }],
    [{ order: "44", result: "R. Madrid 3-1 Man City", year: "2022", category: "Champions", prow: ["Real Madrid", "Premier", "Played WC 2022"], pcolumn: ["Man City", "BRA", "ChampionsWin"], ylink: "https://www.youtube.com/watch?v=8MC1kRv2WCc" }],
    [{ order: "45", result: "Germany 1-0 Argentina", year: "2014", category: "World Cup", prow: ["Played WC 2014", "WC01", "CC"], pcolumn: ["Borussia", "ARG", "GER"], ylink: "https://www.youtube.com/watch?v=ffAYByv2pLc" }],
    [{ order: "46", result: "Inter 2-5 Schalke", year: "2011", category: "Champions", prow: ["CC", "DL", "Real Madrid"], pcolumn: ["Inter", "Schalke", "SRB"], ylink: "https://www.youtube.com/watch?v=Ajn5lzhZk6k" }],
    [{ order: "47", result: "Netherlands 2-1 Argentina", year: "1998", category: "World Cup", prow: ["Played WC 1998", "Premier", "Inter"], pcolumn: ["NED", "ARG", "Arsenal"], ylink: "https://www.youtube.com/watch?v=DemI2OO7FsU" }],
    [{ order: "48", result: "Belgium 3-2 Japan", year: "2018", category: "World Cup", prow: ["Played WC 2018", "CC", "DL"], pcolumn: ["BEL", "JPN", "Tottenham"], ylink: "https://youtu.be/fJeJuc27ggE" }],
    [{ order: "49", result: "Barcelona 3-2 Valencia", year: "2001", category: "LaLiga", prow: ["BRA", "Played WC 2002", "WC01"], pcolumn: ["Barcelona", "Valencia", "LaLigaWin"], ylink: "https://www.youtube.com/watch?v=7lxf5lVlIos" }],
    [{ order: "50", result: "Inter 2-0 Bayern", year: "2010", category: "Champions", prow: ["ChampionsWin", "SerieAWin", "Played WC 2010"], pcolumn: ["Inter", "Bayern", "ARG"], ylink: "https://www.youtube.com/watch?v=1ahQNqglBJI" }],
    [{ order: "51", result: "Juventus 2-3 Man Utd", year: "1999", category: "Champions", prow: ["Man Utd", "CC", "Premier"], pcolumn: ["Juventus", "IRL", "ChampionsWin"], ylink: "https://www.youtube.com/watch?v=oiv-X3Dd_uo" }],
    [{ order: "52", result: "Valencia 2-0 Marseille", year: "2004", category: "Europa League", prow: ["LaLigaWin", "PO", "CC"], pcolumn: ["Valencia", "Marseille", "EuropaWin"], ylink: "https://www.youtube.com/watch?v=L3AlpxC-Qdk" }],
    [{ order: "53", result: "Italy 1-1 England", year: "2021", category: "EURO", prow: ["Played Euro 2021", "Chelsea", "PO"], pcolumn: ["ITA", "ENG", "Arsenal"], ylink: "https://www.youtube.com/watch?v=QwvV06FvXbg" }],
    [{ order: "54", result: "Everton 0-3 Man Utd", year: "2023", category: "Premier League", prow: ["Man Utd", "DL", "DF"], pcolumn: ["Everton", "ARG", "Porto"], ylink: "https://www.youtube.com/watch?v=qgmhQZzoy1s" }],
    [{ order: "55", result: "Portugal 2-0 Wales", year: "2016", category: "EURO", prow: ["Played Euro 2016", "CC", "DL"], pcolumn: ["Sporting", "POR", "WAL"], ylink: "https://www.youtube.com/watch?v=eRwNXMDGz88" }],
    [{ order: "56", result: "R. Madrid 0-1 Betis", year: "2017", category: "LaLiga", prow: ["DL", "CC", "DF"], pcolumn: ["Real Madrid", "Betis", "LaLigaWin"], ylink: "https://www.youtube.com/watch?v=XWPt6rCBCSU" }],
    [{ order: "57", result: "Portugal 3-3 Spain", year: "2018", category: "World Cup", prow: ["Sporting", "DL", "PO"], pcolumn: ["POR", "ESP", "Played WC 2018"], ylink: "https://www.youtube.com/watch?v=4rp2aLQl7vg" }],
    [{ order: "58", result: "Spain 0-0 Italy", year: "2008", category: "EURO", prow: ["Played Euro 2008", "PO", "Premier"], pcolumn: ["ESP", "ITA", "WC01"], ylink: "https://www.youtube.com/watch?v=U1cPCcj4FBs" }],
    [{ order: "59", result: "Anderlecht 1-3 Milan", year: "2012", category: "Champions", prow: ["DF", "Roma", "PO"], pcolumn: ["BEL", "Milan", "FRA"], ylink: "https://www.youtube.com/watch?v=aLFNsTt-FLo" }],
    [{ order: "60", result: "Man City 3-2 QPR", year: "2013", category: "Premier League", prow: ["ARG", "Atletico", "Inter"], pcolumn: ["Man City", "Man Utd", "Premier"], ylink: "https://www.youtube.com/watch?v=QdZfs3aj3uk" }],
    [{ order: "61", result: "Ajax 2-3 Tottenham", year: "2019", category: "Champions", prow: ["ChampionsWin", "DL", "ParisSG"], pcolumn: ["Ajax", "Tottenham", "BRA"], ylink: "https://www.youtube.com/watch?v=uGuQiSSBPkg" }],
    [{ order: "62", result: "Colombia 2-0 Uruguay", year: "2014", category: "World Cup", prow: ["Played WC 2014", "DL", "CC"], pcolumn: ["COL", "URU", "Porto"], ylink: "https://www.youtube.com/watch?v=mV7HZSq0gXE" }],
    [{ order: "63", result: "Arsenal 2-1 Tottenham", year: "2021", category: "Premier League", prow: ["Roma", "CC", "DL"], pcolumn: ["Arsenal", "Tottenham", "ARG"], ylink: "https://www.youtube.com/watch?v=UJhvsaRnSdI" }],
    [{ order: "64", result: "Argentina 2-1 Mexico", year: "2006", category: "World Cup", prow: ["Played WC 2006", "CC", "DF"], pcolumn: ["ARG", "MEX", "Atletico"], ylink: "https://www.youtube.com/watch?v=xh-yANwjcR0" }],
    [{ order: "65", result: "Borussia 3-2 Malaga", year: "2013", category: "Champions", prow: ["DF", "CC", "ChampionsWin"], pcolumn: ["Malaga", "Borussia", "Porto"], ylink: "https://www.youtube.com/watch?v=rz50dgak8P8" }],
    [{ order: "66", result: "Spain 0-1 Switzerland", year: "2010", category: "World Cup", prow: ["Played WC 2010", "PO", "CC"], pcolumn: ["ESP", "SUI", "Premier"], ylink: "https://www.youtube.com/watch?v=RxiBdX5F2I8" }],
    [{ order: "67", result: "R. Madrid 1-0 Atlético", year: "2015", category: "Champions", prow: ["DL", "Sevilla", "Played WC 2014"], pcolumn: ["Real Madrid", "Atletico", "MEX"], ylink: "https://www.youtube.com/watch?v=bmbf1LG9UD8" }],
    [{ order: "68", result: "Italy 1-0 Australia", year: "2006", category: "World Cup", prow: ["Played WC 2006", "DL", "CC"], pcolumn: ["Roma", "Inter", "AUS"], ylink: "https://www.youtube.com/watch?v=tkOuuIpfXNs" }],
    [{ order: "69", result: "R. Madrid 4-1 Juventus", year: "2017", category: "Champions", prow: ["DL", "ChampionsWin", "LaLigaWin"], pcolumn: ["Real Madrid", "Juventus", "POR"], ylink: "https://www.youtube.com/watch?v=XrKBZS-IWoQ" }],
    [{ order: "70", result: "Atletico 1-1 Barcelona", year: "2014", category: "LaLiga", prow: ["Barcelona", "URU", "LaLigaWin"], pcolumn: ["Atletico", "Inter", "Played WC 2014"], ylink: "https://www.youtube.com/watch?v=UtYW5Da3_1o" }],
    [{ order: "71", result: "Arsenal 6-0 Ludogorets", year: "2016", category: "Europa League", prow: ["CC", "DL", "Played WC 1998"], pcolumn: ["Arsenal", "BUL", "EuropaWin"], ylink: "https://www.youtube.com/watch?v=pCLVHZ4rIIU" }],
    [{ order: "72", result: "Roma 3-0 Barcelona", year: "2018", category: "Champions", prow: ["DF", "CC", "DL"], pcolumn: ["Roma", "Barcelona", "GRE"], ylink: "https://www.youtube.com/watch?v=nZyQBKf4LbU" }],
    [{ order: "73", result: "Brazil 3-2 Denmark", year: "1998", category: "World Cup", prow: ["Played WC 1998", "CC", "Barcelona"], pcolumn: ["BRA", "DEN", "Olympiakos"], ylink: "https://www.youtube.com/watch?v=4JcwixRnFhs" }],
    [{ order: "74", result: "Man City 1-0 Leicester", year: "2019", category: "Premier League", prow: ["DF", "Premier", "PO"], pcolumn: ["Man City", "Leicester", "BEL"], ylink: "https://www.youtube.com/watch?v=SJlXFmLRdGI" }],
    [{ order: "75", result: "Bayern 2-2 Bayer", year: "2023", category: "Other", prow: ["Bayern", "ESP", "DL"], pcolumn: ["Leverkusen", "ENG", "Tottenham"], ylink: "https://www.youtube.com/watch?v=vAvv8BUCqG4" }],
    [{ order: "76", result: "Portugal 1-0 Netherlands", year: "2006", category: "World Cup", prow: ["Played WC 2006", "Real Madrid", "Barcelona"], pcolumn: ["POR", "NED", "Premier"], ylink: "https://www.youtube.com/watch?v=cFDoPRSnefE" }],
    [{ order: "77", result: "Juventus 3-0 Atlético", year: "2019", category: "Champions", prow: ["POR", "ChampionsWin", "Man Utd"], pcolumn: ["Juventus", "Atletico", "Sporting"], ylink: "https://www.youtube.com/watch?v=cLfSpFg6Pxg" }],
    [{ order: "78", result: "Uruguay 1-1 Ghana", year: "2010", category: "World Cup", prow: ["Played WC 2010", "DL", "CC"], pcolumn: ["URU", "GHA", "LaLigaWin"], ylink: "https://www.youtube.com/watch?v=tDpx9GGH79I" }],
    [{ order: "79", result: "Ajax 0-1 Juventus", year: "2004", category: "Champions", prow: ["CC", "DL", "Played Euro 2004"], pcolumn: ["Ajax", "Juventus", "CZE"], ylink: "https://www.youtube.com/watch?v=8O6GHrPvumQ" }],
    [{ order: "80", result: "Milan 3-0 Man Utd", year: "2007", category: "Champions", prow: ["BRA", "ChampionsWin", "Real Madrid"], pcolumn: ["Milan", "Man Utd", "SerieAWin"], ylink: "https://www.youtube.com/watch?v=13damNjxiPI" }],
    [{ order: "81", result: "Brazil 2-0 Serbia", year: "2022", category: "World Cup", prow: ["DL", "Played WC 2022", "DF"], pcolumn: ["BRA", "SRB", "Tottenham"], ylink: "https://www.youtube.com/watch?v=kL0IkvLrQLM" }],
    [{ order: "82", result: "Barcelona 6-1 PSG", year: "2017", category: "Champions", prow: ["ParisSG", "DF", "ChampionsWin"], pcolumn: ["Barcelona", "ESP", "BRA"], ylink: "https://www.youtube.com/watch?v=h4m68r8kWAc" }],
    [{ order: "83", result: "Galatasaray 3-2 Monaco", year: "2000", category: "Champions", prow: ["DL", "CC", "Played Euro 2000"], pcolumn: ["Galatasaray", "Monaco", "ROU"], ylink: "https://www.youtube.com/watch?v=lRrd5xFYEXk" }],
    [{ order: "84", result: "Bayern 1-1 Valencia", year: "2001", category: "Champions", prow: ["PO", "DF", "LaLigaWin"], pcolumn: ["Bayern", "Valencia", "GER"], ylink: "https://www.youtube.com/watch?v=imGy71tsgtQ" }],
    [{ order: "85", result: "Barcelona 4-0 Villarreal", year: "2006", category: "LaLiga", prow: ["Played WC 2006", "LaLigaWin", "BRA"], pcolumn: ["Barcelona", "Villarreal", "Milan"], ylink: "https://www.youtube.com/watch?v=DH_gBJT9bAg" }],
    [{ order: "86", result: "Sweden 1-1 Italy", year: "2004", category: "EURO", prow: ["Played Euro 2004", "DL", "CC"], pcolumn: ["SWE", "Roma", "SerieAWin"], ylink: "https://www.youtube.com/watch?v=kwdGw2Zu_jo" }],
    [{ order: "87", result: "Chelsea 1-1 Bayern", year: "2012", category: "Champions", prow: ["Chelsea", "DL", "Premier"], pcolumn: ["Bayern", "CIV", "ChampionsWin"], ylink: "https://www.youtube.com/watch?v=lBP7QQYN1IU" }],
    [{ order: "88", result: "England 1-1 USA", year: "2010", category: "World Cup", prow: ["Played WC 2010", "PO", "CC"], pcolumn: ["USA", "ENG", "Liverpool"], ylink: "https://www.youtube.com/watch?v=8ahf8b7ex8U" }],
    [{ order: "89", result: "Bayern 1-0 PSG", year: "2020", category: "Champions", prow: ["Bayern", "ChampionsWin", "CC"], pcolumn: ["ParisSG", "FRA", "Juventus"], ylink: "https://www.youtube.com/watch?v=DdoaGdGAkPw" }],
    [{ order: "90", result: "Liverpool 5-4 Alavés", year: "2001", category: "Europa League", prow: ["DF", "CC", "ESP"], pcolumn: ["Liverpool", "Alaves", "EuropaWin"], ylink: "https://www.youtube.com/watch?v=uNqFuw6YQZQ" }],
    [{ order: "91", result: "Inter 4-3 Tottenham", year: "2010", category: "Champions", prow: ["DF", "CC", "Real Madrid"], pcolumn: ["Inter", "Tottenham", "ChampionsWin"], ylink: "https://www.youtube.com/watch?v=dI2GwCf2ABk" }],
    [{ order: "92", result: "Deportivo 4-0 Milan", year: "2004", category: "Champions", prow: ["CC", "DL", "Played Euro 2004"], pcolumn: ["Deportivo", "Milan", "ESP"], ylink: "https://www.youtube.com/watch?v=nLxavokhgtI" }],
    [{ order: "93", result: "Galatasaray 0-0 Arsenal", year: "2000", category: "Other", prow: ["PO", "CC", "DL"], pcolumn: ["Galatasaray", "Arsenal", "Played Euro 2000"], ylink: "https://www.youtube.com/watch?v=S75hTDHl7nc" }],
    [{ order: "94", result: "Germany 0-1 Spain", year: "2008", category: "EURO", prow: ["Played Euro 2008", "DL", "DF"], pcolumn: ["GER", "SPA", "Atletico"], ylink: "https://www.youtube.com/watch?v=qRLbzpy1y8Y" }],
    [{ order: "95", result: "Greece 1-0 Portugal", year: "2004", category: "EURO", prow: ["DF", "CC", "DL"], pcolumn: ["GRE", "POR", "Played Euro 2004"], ylink: "https://www.youtube.com/watch?v=OG5u1uurPik" }],
    [{ order: "96", result: "Athletic 1-0 Barcelona", year: "2019", category: "LaLiga", prow: ["DL", "CC", "PO"], pcolumn: ["Athletic", "Barcelona", "LaLigaWin"], ylink: "https://www.youtube.com/watch?v=OeKYxa-9LiM" }],
    [{ order: "97", result: "Bayern 0-4 R. Madrid", year: "2014", category: "Champions", prow: ["ChampionsWin", "DF", "WC01"], pcolumn: ["Real Madrid", "Bayern", "Played WC 2014"], ylink: "https://www.youtube.com/watch?v=Pmhx0Uxv8R0" }],
    [{ order: "98", result: "Chelsea 1-1 Barcelona", year: "2009", category: "Champions", prow: ["CC", "ChampionsWin", "WC01"], pcolumn: ["Chelsea", "Barcelona", "ESP"], ylink: "https://www.youtube.com/watch?v=zWBKP-DZNEc" }],
    [{ order: "99", result: "Man Utd 4-3 R. Madrid", year: "2003", category: "Champions", prow: ["DL", "BRA", "LaLigaWin"], pcolumn: ["Man Utd", "Real Madrid", "ChampionsWin"], ylink: "https://www.youtube.com/watch?v=KoPIUSG-vcg" }],
    [{ order: "100", result: "Netherlands 0-1 Spain", year: "2010", category: "World Cup", prow: ["Played WC 2010", "CC", "Barcelona"], pcolumn: ["NED", "ESP", "WC01"], ylink: "https://www.youtube.com/watch?v=aKSHgMqCwbQ" }],
    [{ order: "101", result: "Man City 1-0 Inter", year: "2023", category: "Champions", prow: ["ChampionsWin", "Played WC 2022", "CC"], pcolumn: ["Man City", "Inter", "ESP"], ylink: "https://www.youtube.com/watch?v=AXEG_lagq9E" }],
    [{ order: "102", result: "England 1-2 Iceland", year: "2016", category: "EURO", prow: ["Played Euro 2016", "DL", "CC"], pcolumn: ["ENG", "ISL", "Premier"], ylink: "https://www.youtube.com/watch?v=PVq0MrmezpI" }],
    [{ order: "103", result: "R. Madrid 3-1 Napoli", year: "2017", category: "Champions", prow: ["DL", "CC", "ITA"], pcolumn: ["Real Madrid", "Napoli", "ChampionsWin"], ylink: "https://www.youtube.com/watch?v=GVW1uYXkMOE" }],
    [{ order: "104", result: "Villarreal 0-0 Arsenal", year: "2006", category: "Champions", prow: ["PO", "CC", "Barcelona"], pcolumn: ["Villarreal", "Arsenal", "ARG"], ylink: "https://www.youtube.com/watch?v=42TuTfcxVJg" }],
    [{ order: "105", result: "Japan 2-1 Spain", year: "2022", category: "World Cup", prow: ["Played WC 2022", "DL", "CC"], pcolumn: ["JPN", "ESP", "GER"], ylink: "https://www.youtube.com/watch?v=91eoGiLSCgY" }],
    [{ order: "106", result: "Porto 1-1 Man Utd", year: "2004", category: "Champions", prow: ["CC", "DL", "Played Euro 2004"], pcolumn: ["Man Utd", "Porto", "POR"], ylink: "https://www.youtube.com/watch?v=wO6WsbkFu5k" }],
    [{ order: "107", result: "Arsenal 7-0 Everton", year: "2005", category: "Premier League", prow: ["PO", "DF", "CC"], pcolumn: ["Arsenal", "Everton", "Premier"], ylink: "https://www.youtube.com/watch?v=Hz2YwNq33_8" }],
    [{ order: "108", result: "Barcelona 7-1 Bayer", year: "2012", category: "Champions", prow: ["DL", "CC", "LaLigaWin"], pcolumn: ["Barcelona", "Leverkusen", "ChampionsWin"], ylink: "https://www.youtube.com/watch?v=YAy0tg558wE" }],
    [{ order: "109", result: "Celtic 4-3 Juventus", year: "2002", category: "Champions", prow: ["CC", "DL", "Played WC 2002"], pcolumn: ["Celtic", "Juventus", "ENG"], ylink: "https://www.youtube.com/watch?v=I9KwePPBsvY" }],
    [{ order: "110", result: "Inter 1-5 Arsenal", year: "2003", category: "Champions", prow: ["FRA", "DL", "ChampionsWin"], pcolumn: ["Inter", "Arsenal", "Premier"], ylink: "https://www.youtube.com/watch?v=czFBu4n06kQ" }],
    [{ order: "111", result: "Napoli 5-1 Juventus", year: "2022", category: "LaLiga", prow: ["SerieAWin", "DL", "Played WC 2022"], pcolumn: ["Napoli", "Juventus", "Milan"], ylink: "https://www.youtube.com/watch?v=C4htjVFlsYs" }],
    [{ order: "112", result: "Spain 0-0 Portugal", year: "2012", category: "EURO", prow: ["Played Euro 2012", "PO", "CC"], pcolumn: ["ESP", "POR", "LaLigaWin"], ylink: "https://www.youtube.com/watch?v=IgwsdBR_N1w" }],
    [{ order: "113", result: "Athletic 0-1 R. Sociedad", year: "2021", category: "LaLiga", prow: ["Real Sociedad", "DF", "DL"], pcolumn: ["Athletic", "ESP", "Played Euro 2021"], ylink: "https://www.youtube.com/watch?v=FPAHnfFxS5Y" }],
    [{ order: "114", result: "Benfica 1-2 Chelsea", year: "2013", category: "Europa League", prow: ["DF", "CC", "Premier"], pcolumn: ["Benfica", "Chelsea", "SRB"], ylink: "https://www.youtube.com/watch?v=D4-kCnF7gSU" }],
    [{ order: "115", result: "Argentina 2-2 England", year: "1998", category: "World Cup", prow: ["Played WC 1998", "CC", "DL"], pcolumn: ["ARG", "ENG", "Premier"], ylink: "https://www.youtube.com/watch?v=kJge6YhLKsM" }],
    [{ order: "116", result: "Bayern 2-1 R. Madrid", year: "2000", category: "Champions", prow: ["FRA", "Premier", "Played Euro 2000"], pcolumn: ["Bayern", "Real Madrid", "ChampionsWin"], ylink: "https://www.youtube.com/watch?v=3tGISSPC6HM" }],
    [{ order: "117", result: "Atletico 2-1 Inter", year: "2024", category: "Champions", prow: ["NED", "FRA", "PO"], pcolumn: ["Atletico", "Inter", "LaLigaWin"], ylink: "https://www.youtube.com/watch?v=_V92UGhMZAs" }],
    [{ order: "118", result: "Barcelona 2-4 Girona", year: "2023", category: "LaLiga", prow: ["DL", "DF", "CC"], pcolumn: ["Barcelona", "Girona", "ESP"], ylink: "https://www.youtube.com/watch?v=XFvVgpeqi5M" }],
    [{ order: "119", result: "Liverpool 4-3 RB Salzburg", year: "2019", category: "Champions", prow: ["DL", "CC", "DF"], pcolumn: ["AUT", "Liverpool", "SEN"], ylink: "https://www.youtube.com/watch?v=Y26HYaY3qls" }],
    [{ order: "120", result: "Man Utd 4-3 Liverpool", year: "2024", category: "Premier League", prow: ["DL", "CC", "AfricaCupWin"], pcolumn: ["Man Utd", "Liverpool", "CIV"], ylink: "https://www.youtube.com/watch?v=wao8uhVnOGc" }],
    [{ order: "121", result: "Spain 2-3 Nigeria", year: "1998", category: "World Cup", prow: ["Played WC 1998", "DL", "CC"], pcolumn: ["ESP", "NGA", "LaLigaWin"], ylink: "https://www.youtube.com/watch?v=DPcEHOjjXQg" }],
    [{ order: "122", result: "Getafe 3-3 Bayern", year: "2008", category: "Europa League", prow: ["DF", "CC", "PO"], pcolumn: ["Getafe", "Bayern", "ESP"], ylink: "https://www.youtube.com/watch?v=LWFxDntTqj8" }],

  ];
  const names = [
 {name:"Thierry Henry", Country:"FRA", Position:"DL",Teams: [{ club:"en Arsenal", matches:339, goals:217, assists:88},{ club:"it Juventus", matches:16, goals:3, assists:2},{ club:"es Barcelona", matches:106, goals:43, assists:21},{ club:"fr Monaco", matches:57, goals:12, assists:0},], Titles:"2006WC02, 1998WC01,2000EuroWin,2009ChampionsWin, 2006ChampionsFinal,2000EuropaFinal,2004Premier, 2002Premier,2010LaLigaWin, 2009LaLigaWin", WC:"2010, 2006, 2002, 1998", Euro:"2008Euro, 2004Euro, 2000Euro"},
{name:"Cesc Fàbregas", Country:"ESP", Position:"CC,DL",Teams: [{ club:"en Arsenal", matches:267, goals:48, assists:83},{ club:"en Chelsea", matches:198, goals:22, assists:56},{ club:"es Barcelona", matches:122, goals:31, assists:38},{ club:"fr Monaco", matches:66, goals:4, assists:9},], Titles:"2010WC01,2012EuroFinal, 2008EuroWin,2006ChampionsFinal,2019EuropaWin,2017Premier, 2015Premier,2013LaLigaWin", WC:"2014, 2010, 2006", Euro:"2016Euro, 2012Euro, 2008Euro"},
{name:"Patrick Vieira", Country:"FRA", Position:"CC",Teams: [{ club:"en Arsenal", matches:315, goals:28, assists:33},{ club:"en Man City", matches:35, goals:3, assists:3},{ club:"it Inter", matches:79, goals:7, assists:7},{ club:"it Juventus", matches:38, goals:5, assists:7},], Titles:"2006WC02, 1998WC01,2000EuroWin,2010ChampionsWin,2000EuropaFinal,2010SerieAWin, 2009SerieAWin, 2008SerieAWin, 2007SerieAWin,2004Premier, 2002Premier, 1998Premier", WC:"2006, 2002, 1998", Euro:"2004Euro, 2000Euro"},
{name:"Pedro Rodríguez", Country:"ESP", Position:"CC,DL",Teams: [{ club:"en Chelsea", matches:206, goals:43, assists:27},{ club:"it Roma", matches:40, goals:6, assists:5},{ club:"es Barcelona", matches:273, goals:79, assists:40},], Titles:"2010WC01,2012EuroFinal,2015ChampionsWin, 2011ChampionsWin, 2009ChampionsWin,2019EuropaWin,2017Premier,2015LaLigaWin, 2013LaLigaWin, 2011LaLigaWin, 2010LaLigaWin, 2009LaLigaWin", WC:"2014, 2010", Euro:"2016Euro, 2012Euro"},
{name:"Olivier Giroud", Country:"FRA", Position:"DL",Teams: [{ club:"en Arsenal", matches:237, goals:96, assists:34},{ club:"en Chelsea", matches:119, goals:39, assists:14},{ club:"it Milan", matches:115, goals:45, assists:20},], Titles:"2022WC02, 2018WC01,2016EuroFinal,2021ChampionsWin,2019EuropaWin,2022SerieAWin", WC:"2022, 2018, 2014", Euro:"2021Euro, 2016Euro, 2012Euro"},
{name:"Jens Lehmann", Country:"GER", Position:"PO",Teams: [{ club:"en Arsenal", matches:182, goals:0, assists:1},{ club:"de Stuttgart", matches:81, goals:0, assists:0},{ club:"de Borussia", matches:166, goals:0, assists:0},{ club:"de Schalke", matches:41, goals:1, assists:0},{ club:"it Milan", matches:5, goals:0, assists:0},], Titles:"2008EuroFinal,2006ChampionsFinal,2002EuropaFinal,1999SerieAWin,2004Premier", WC:"2006", Euro:"2008Euro"},
{name:"Robert Pirès", Country:"FRA", Position:"CC,DL",Teams: [{ club:"en Arsenal", matches:252, goals:73, assists:49},{ club:"es Villarreal", matches:120, goals:16, assists:14},{ club:"fr Marseille", matches:88, goals:13, assists:7},], Titles:"1998WC01,2000EuroWin,2006ChampionsFinal,1999EuropaFinal,2004Premier, 2002Premier", WC:"1998", Euro:"2004Euro, 2000Euro"},
{name:"N'Golo Kanté", Country:"FRA", Position:"CC",Teams: [{ club:"en Chelsea", matches:267, goals:13, assists:16},{ club:"en Leicester", matches:40, goals:1, assists:4},], Titles:"2018WC01,2016EuroFinal,2021ChampionsWin,2019EuropaWin,2017Premier, 2016Premier", WC:"2018", Euro:"2021Euro, 2016Euro"},
{name:"Ricardo Carvalho", Country:"POR", Position:"DF",Teams: [{ club:"en Chelsea", matches:182, goals:9, assists:6},{ club:"es Real Madrid", matches:62, goals:3, assists:2},{ club:"fr Monaco", matches:106, goals:2, assists:3},{ club:"pt Porto", matches:100, goals:4, assists:2},], Titles:"2016EuroWin, 2004EuroFinal,2008ChampionsFinal, 2004ChampionsWin,2003EuropaWin,2010Premier, 2006Premier, 2005Premier,2012LaLigaWin", WC:"2010, 2006", Euro:"2016Euro, 2008Euro, 2004Euro"},
{name:"Deco", Country:"POR", Position:"CC",Teams: [{ club:"en Chelsea", matches:51, goals:5, assists:5},{ club:"es Barcelona", matches:145, goals:19, assists:37},{ club:"pt Porto", matches:176, goals:38, assists:32},], Titles:"2004EuroFinal,2006ChampionsWin, 2004ChampionsWin,2003EuropaWin,2010Premier,2006LaLigaWin, 2005LaLigaWin", WC:"2010, 2006", Euro:"2008Euro, 2004Euro"},
{name:"Maniche", Country:"POR", Position:"CC",Teams: [{ club:"en Chelsea", matches:8, goals:0, assists:0},{ club:"it Inter", matches:8, goals:1, assists:0},{ club:"es Atletico", matches:76, goals:8, assists:5},{ club:"pt Sporting", matches:22, goals:3, assists:0},{ club:"pt Porto", matches:112, goals:20, assists:16},{ club:"pt Benfica", matches:34, goals:2, assists:0},], Titles:"2004EuroFinal,2004ChampionsWin,2003EuropaWin,2008SerieAWin,2006Premier", WC:"2006", Euro:"2004Euro"},
{name:"Tiago Mendes", Country:"POR", Position:"CC",Teams: [{ club:"en Chelsea", matches:45, goals:4, assists:3},{ club:"it Juventus", matches:48, goals:0, assists:3},{ club:"es Atletico", matches:211, goals:18, assists:11},{ club:"fr Lyon", matches:72, goals:13, assists:7},{ club:"pt Benfica", matches:83, goals:22, assists:5},], Titles:"2004EuroFinal,2016ChampionsFinal, 2014ChampionsFinal,2012EuropaWin,2005Premier,2014LaLigaWin", WC:"2010, 2006", Euro:"2004Euro"},
{name:"Cristiano Ronaldo", Country:"POR", Position:"DL",Teams: [{ club:"en Man Utd", matches:302, goals:126, assists:49},{ club:"it Juventus", matches:134, goals:101, assists:20},{ club:"es Real Madrid", matches:400, goals:421, assists:113},{ club:"pt Sporting", matches:27, goals:3, assists:3},], Titles:"2016EuroWin, 2004EuroFinal,2018ChampionsWin, 2017ChampionsWin, 2016ChampionsWin, 2014ChampionsWin, 2009ChampionsFinal, 2008ChampionsWin,2020SerieAWin, 2019SerieAWin,2009Premier, 2008Premier, 2007Premier,2017LaLigaWin, 2012LaLigaWin", WC:"2022, 2018, 2014, 2010, 2006", Euro:"2021Euro, 2016Euro, 2012Euro, 2008Euro, 2004Euro"},

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

   
  ];
  const teamslog = [{
      tname: "Real Madrid",
      Logo: "https://i.ibb.co/NTS6Q5w/Real-Madrid-Logo.png"
    },
    {
      tname: "Athletic",
      Logo: "https://i.ibb.co/1bGs5jf/Athletic-Logo.png"
    },
    {
      tname: "Mallorca",
      Logo: "https://i.ibb.co/h8D0ccv/Mallorca-Logo.png"
    },
    {
      tname: "Alaves",
      Logo: "https://i.ibb.co/Wz521dz/Alaves-Logo.png"
    },
    {
      tname: "Villarreal",
      Logo: "https://i.ibb.co/xCyZF7f/Villarreal-Logo.png"
    },
    {
      tname: "Malaga",
      Logo: "https://i.ibb.co/X3Zp2bV/Malaga-Logo.png"
    },
    {
      tname: "Sevilla",
      Logo: "https://i.ibb.co/c1j1JT2/Sevilla-Logo.png"
    },
    {
      tname: "Barcelona",
      Logo: "https://i.ibb.co/1ZC2Fvv/Barcelona-Logo.png"
    },
    {
      tname: "Betis",
      Logo: "https://i.ibb.co/fkKZrp0/Betis-Logo.png"
    },
    {
      tname: "Getafe",
      Logo: "https://i.ibb.co/4VpDSdB/Getafe-Logo.png"
    },
    {
      tname: "Deportivo",
      Logo: "https://i.ibb.co/R715tvN/Deportivo-Logo.png"
    },
    {
      tname: "Celta",
      Logo: "https://i.ibb.co/8dPKQyY/Celta-Logo.png"
    },
    {
      tname: "Valencia",
      Logo: "https://i.ibb.co/sVKGJkr/Valencia-Logo.png"
    },
    {
      tname: "Espanyol",
      Logo: "https://i.ibb.co/DD0PcZt/Espanyol-Logo.png"
    },
    {
      tname: "Atletico",
      Logo: "https://i.ibb.co/VHD5DzW/Atletico-Logo.png"
    },
    {
      tname: "Inter",
      Logo: "https://i.ibb.co/cXMbZrR/Inter-Logo.png"
    },
    {
      tname: "Milan",
      Logo: "https://i.ibb.co/jR4NYNH/Milan-logo.png"
    },
    {
      tname: "Roma",
      Logo: "https://i.ibb.co/1MpBGV0/Roma-Logo.png"
    },
    {
      tname: "Juventus",
      Logo: "https://i.ibb.co/qBGThmZ/Juventus-Logo.png"
    },
    {
      tname: "Napoli",
      Logo: "https://i.ibb.co/HhwBgCc/Napoli-Logo.png"
    },
    {
      tname: "ParisSG",
      Logo: "https://i.ibb.co/TkP43qV/Paris-SG-Logo.png"
    },
    {
      tname: "Lyon",
      Logo: "https://i.ibb.co/WkLKLcn/Lyon-Logo.png"
    },
    {
      tname: "Monaco",
      Logo: "https://i.ibb.co/1dZQPHt/Monaco-Logo.png"
    },
    {
      tname: "Marseille",
      Logo: "https://i.ibb.co/xJz22VV/Marseille-Logo.png"
    },
    {
      tname: "Sporting",
      Logo: "https://i.ibb.co/549rTQN/Sporting-Logo.png"
    },
    {
      tname: "Porto",
      Logo: "https://i.ibb.co/NpQcy31/Porto-Logo.png"
    },
    {
      tname: "Benfica",
      Logo: "https://i.ibb.co/H2v6dLP/Benfica-Logo.png"
    },
    {
      tname: "Ajax",
      Logo: "https://i.ibb.co/88029wg/Ajax-Logo.png"
    },
    {
      tname: "PSV",
      Logo: "https://i.ibb.co/wg35Gfw/PSV-Logo.jpg"
    },
    {
      tname: "Feyenoord",
      Logo: "https://i.ibb.co/rdxYBPD/Feyenoord-Logo.png"
    },
    {
      tname: "Bayern",
      Logo: "https://i.ibb.co/P1LPPSX/Bayern-Logo.png"
    },
    {
      tname: "Stuttgart",
      Logo: "https://i.ibb.co/ssp7CTK/Stuttgart-Logo.png"
    },
    {
      tname: "Leverkusen",
      Logo: "https://i.ibb.co/TWgrcxc/Leverkusen-Logo.png"
    },
    {
      tname: "Borussia",
      Logo: "https://i.ibb.co/mDNDvKS/Borussia-Logo.png"
    },
    {
      tname: "Wolfsburg",
      Logo: "https://i.ibb.co/D1dkjTy/Wolfsburg-Logo.png"
    },
    {
      tname: "Olympiakos",
      Logo: "https://i.ibb.co/SRP2Yv5/Olympiakos-Logo.png"
    },
    {
      tname: "Arsenal",
      Logo: "https://i.ibb.co/mchQ7yS/Arsenal-Logo.png"
    },
    {
      tname: "Chelsea",
      Logo: "https://i.ibb.co/zJMGM91/Chelsea-Logo.png"
    },
    {
      tname: "Leicester",
      Logo: "https://i.ibb.co/dQ1Jxx6/Leicester-Logo.png"
    },
    {
      tname: "Man City",
      Logo: "https://i.ibb.co/02GVj4D/Man-City-Logo.png"
    },
    {
      tname: "Tottenham",
      Logo: "https://i.ibb.co/kccX0Ln/Tottenham-Logo.webp"
    },
    {
      tname: "Man Utd",
      Logo: "https://i.ibb.co/vsX5Jd7/Man-Utd-Logo.png"
    },
    {
      tname: "Liverpool",
      Logo: "https://i.ibb.co/HVZPdkD/Liverpool-Logo.png"
    },
    {
      tname: "Schalke",
      Logo: "https://i.ibb.co/YWmBTGs/Schalke-Logo.png"
    },
    {
      tname: "Galatasaray",
      Logo: "https://i.ibb.co/2sPRTJy/Galatasaray-Logo.png"
    },
    {
      tname: "Celtic",
      Logo: "https://i.ibb.co/YbGhP8H/Celtic-Logo.png"
    },
    {
      tname: "Everton",
      Logo: "https://i.ibb.co/HT6s16s/Everton-Logo.png"
    },

    {
      tname: "Girona",
      Logo: "https://i.ibb.co/ydmHjBD/Girona-Logo.png"
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
      "Girona",
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
      "Celtic",
      //"Wolfsburg",
      "Olympiakos",
      "Arsenal",
      "Chelsea",
      "Leicester",
      "Man City",
      "Tottenham",
      "Man Utd",
      "Schalke",
      "Galatasaray",
  ];
  const countrypossible = ["HUN", "SVK", "AUS", "SVN", "UKR", "MLI", "BIH", "AUT", "JPN", "RUS", "PAR", "CHI", "MEX", "CZE", "ALG", "WAL", "POL", "SCO", "SWE", "GHA", "ROU", "NOR", "GRE", "MAR", "SUI", "USA", "IRL", "DEN", "TUR", "CMR", "COL", "NGA", "CIV", "SEN", "CRO", "BEL", "SRB", "URU", "NED", "ARG", "GER", "POR", "BRA", "FRA", "ENG", "ITA", "ESP",];
  const WCpossible = ["Played WC 2022", "Played WC 2018", "Played WC 2014", "Played WC 2010", "Played WC 2006", "Played WC 2002"];
  const Europossible = ["Played Euro 2000", "Played Euro 2004", "Played Euro 2008", "Played Euro 2012", "Played Euro 2016", "Played Euro 2021",];
  const Wonpossible = ["WC01", "WC02", "Premier", "ChampionsWin", "EuropaWin", "LaLigaWin", "SerieAWin"]
  const Positionpossible = ["PO", "DF", "CC", "DL"]



  let currentPuzzle = todayPuzzle()[0].order;
  let currentGrid=[]
 
  initLocalStorage();
  let puzzleGrid = {
    order: currentPuzzle,
    row1col1: "",
    row1col2: "",
    row1col3: "",
    row2col1: "",
    row2col2: "",
    row2col3: "",
    row3col1: "",
    row3col2: "",
    row3col3: "",
    rarity:"",
  };
   if (currentGrid.find(item => item.order === currentPuzzle) !== undefined) {

     puzzleGrid = currentGrid.find(item => item.order === currentPuzzle);
   }

    //loadLocalStorage();
  initHelpModal();
  initHelpModal2();
  resetBt();

  //createGrid(manyRandomPuzzle());

 
  //puzzle1 = getRandomItem(puzzleselection)
  puzzle1=getItemByOrder(currentPuzzle);
  console.log(puzzle1)
  
  createGrid(puzzle1);
   const scorestotal = countWStatsForOrder(currentGrid, currentPuzzle, "w") + countWStatsForOrder(currentGrid, currentPuzzle, "r") + countWStatsForOrder(currentGrid, currentPuzzle, "e")

   if (scorestotal === 9) {
     solved()
   }

  window.localStorage.setItem('currentPuzzle', todayPuzzle()[0].order)
  

//This function starts the parameters of Local Storage

   function initLocalStorage() {
     const storedcurrentPuzzle = window.localStorage.getItem('currentPuzzle');
     if (!storedcurrentPuzzle) {
       window.localStorage.setItem('currentPuzzle', currentPuzzle);
     } else {
       currentPuzzle = storedcurrentPuzzle;
     }

     const storedcurrentGrid = window.localStorage.getItem('current3Grid');
     if (!storedcurrentGrid) {
       window.localStorage.setItem('current3Grid', currentGrid);
     } else {
       currentGrid = JSON.parse(storedcurrentGrid);
     }

  
   }



  function getItemByOrder(order) {
    // Loop through each element in the puzzleselection array
    for (let i = 0; i < puzzleselection.length; i++) {
      // Check if the order of the current item matches the provided order
      if (puzzleselection[i][0].order === order) {
        // Return the item if found
        return puzzleselection[i][0];
      }
    }
    // Return null if no item with the provided order is found
    return null;
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
  const modalContent = document.querySelector(".modalhelp-content"); // Get modal content

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



//      07.  CREATE GRID
//           -This function makes a 4x4 grid that will be formatted. It also appends the give up and the disclaimer button
///////////////////////////////////////////////////////////

  function createGrid(puzzle1) {
    let gridCells=[];
    const gridContainer = document.getElementById('gridContainer'); 


    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        const cell = document.createElement("div");
        cell.dataset.row = row;
        cell.dataset.col = col;
        formatGridCell(puzzle1,row,col,cell)
        gridContainer.appendChild(cell);
        gridCells.push(cell);

      }
    }
    createbuttonGiveUp();
    createbuttonClear();
    createDisclaimer();
  }
///////////////////////////////////////////////////////////




//      08.  FORMAT GRID CELL
//           -This function converts each cell into logos and conditions, or player grids
///////////////////////////////////////////////////////////

 

  function formatGridCell(puzzle1,row,col,cell){
    row = row * 1;
    col = col * 1;
    if (row > 0 && col > 0) {
      cell.innerHTML = "";
      cell.classList.add("grid-playercell");
      if (puzzleGrid["row" + row + "col" + col].status === "w") {
       
        cell.textContent = puzzleGrid["row" + row + "col" + col].name;
        cell.classList.remove("grid-playercell");
        cell.classList.add("grid-cellsolved");
        cell.addEventListener('click', () => {
          if (cell.textContent.trim() !== '') {
            showModal2(puzzle1, row, col, cell);
          }
        }); // Added a closing parenthesis here
      }

      if (puzzleGrid["row" + row + "col" + col].status === "e") {

        cell.textContent = puzzleGrid["row" + row + "col" + col].name;
        cell.classList.remove("grid-playercell");
        cell.classList.add("grid-cellunsolved");
        cell.addEventListener('click', () => {
          if (cell.textContent.trim() !== '') {
            showModal2(puzzle1, row, col, cell);
          }
        }); // Added a closing parenthesis here
      }


      if (puzzleGrid["row" + row + "col" + col].status === "r") {

        cell.textContent = puzzleGrid["row" + row + "col" + col].name;
        cell.classList.remove("grid-playercell");
        cell.classList.add("grid-cellalreadyused");
        cell.addEventListener('click', () => {
          if (cell.textContent.trim() !== '') {
            showModal2(puzzle1, row, col, cell);
          }
        }); // Added a closing parenthesis here
      }





      cell.addEventListener('click', () => {
        if (cell.textContent === '') {
          showModal(puzzle1,row,col,cell);
        }
      });
      } 


    if ((row === 0 && col === 0)) {
      cell.classList.add("grid-cellnumber");
      cell.textContent = '#' + puzzle1.order;
 

      cell.style.padding = '0'; // Remove padding to fill the entire cell
    }


  // These lines create the columns
    
    if ((row === 0 && col === 1) || (row === 0 && col === 2) || (row === 0 && col === 3)) {
      cell.classList.add("grid-puzzlecell");
      const img = document.createElement("img");

      if (puzzle1.pcolumn[col - 1].includes("Played WC")) {
        cell.textContent = puzzle1.pcolumn[col - 1];
      } else if (puzzle1.pcolumn[col - 1].includes("Premier")) {
        cell.innerHTML = ' Won:<br>Premier League';
      } else if (puzzle1.pcolumn[col - 1].includes("ChampionsWin")) {
        cell.innerHTML = ' Won:<br>Champions League';
      } else if (puzzle1.pcolumn[col - 1].includes("EuropaWin")) {
        cell.innerHTML = ' Won:<br>Europa League';
      } else if (puzzle1.pcolumn[col - 1].includes("LaLigaWin")) {
        cell.innerHTML = ' Won:<br>La Liga';
      } else if (puzzle1.pcolumn[col - 1].includes("SerieAWin")) {
        cell.innerHTML = ' Won:<br>Serie A';
      } else if (puzzle1.pcolumn[col - 1].includes("Played Euro")) {
        cell.textContent = puzzle1.pcolumn[col - 1];
      } else if (puzzle1.pcolumn[col - 1].includes("WC01")) {
        cell.innerHTML = ' Won:<br>World Cup ';
      } else if (puzzle1.pcolumn[col - 1].includes("WC02")) {
        cell.textContent = ' World Cup 2nd place ';
      } else if (puzzle1.pcolumn[col - 1].length === 2) {
        cell.textContent = puzzle1.pcolumn[col - 1];
      } else if (puzzle1.pcolumn[col - 1].length === 3) {
        img.src = countries.find(item => item.cname === puzzle1.pcolumn[col - 1]).Flag;
        cell.appendChild(img);
      } else {
        img.src = teamslog.find(item => item.tname === puzzle1.pcolumn[col - 1]).Logo;
        cell.appendChild(img);
      }

      cell.style.border = 'none';
    }


  // These lines create the rows

    if ((row === 1 && col === 0) || (row === 2 && col === 0) || (row === 3 && col === 0)) {
      cell.classList.add("grid-puzzlecell");
      const img = document.createElement("img");

      if (puzzle1.prow[row - 1].includes("Played WC")) {
        cell.textContent = puzzle1.prow[row - 1];
      } else if (puzzle1.prow[row - 1].includes("Premier")) {
        cell.innerHTML = ' Won:<br>Premier League';
      } else if (puzzle1.prow[row - 1].includes("ChampionsWin")) {
        cell.innerHTML = ' Won:<br>Champions League';
      } else if (puzzle1.prow[row - 1].includes("EuropaWin")) {
        cell.innerHTML = ' Won:<br>Europa League';
      } else if (puzzle1.prow[row - 1].includes("LaLigaWin")) {
        cell.innerHTML = ' Won:<br>La Liga';
      } else if (puzzle1.prow[row - 1].includes("SerieAWin")) {
        cell.innerHTML = ' Won:<br>Serie A';
      } else if (puzzle1.prow[row - 1].includes("Played Euro")) {
        cell.textContent = puzzle1.prow[row - 1];
      } else if (puzzle1.prow[row - 1].includes("WC01")) {
        cell.innerHTML = ' Won:<br>World Cup ';
      } else if (puzzle1.prow[row - 1].includes("WC02")) {
        cell.textContent = ' World Cup 2nd place ';
      } else if (puzzle1.prow[row - 1].length === 2) {
        if (puzzle1.prow[row - 1] === "PO") {
          img.src = "https://i.ibb.co/hygjfhv/GK001.jpg";
        } else if (puzzle1.prow[row - 1] === "DF") {
          img.src = "https://i.ibb.co/0rWVdwj/df01.jpg";
        } else if (puzzle1.prow[row - 1] === "CC") {
          img.src = "https://i.ibb.co/B4nF3H5/MC01.jpg";
        } else if (puzzle1.prow[row - 1] === "DL") {
          cell.textContent = "";
          img.src = "https://i.ibb.co/CPjYcJ6/fw002.jpg";
        }
        img.style.width = "40px";
        img.style.height = "auto";
        img.style.borderRadius = "10%";
        cell.appendChild(img);
      } else if (puzzle1.prow[row - 1].length === 3) {
        img.src = countries.find(item => item.cname === puzzle1.prow[row - 1]).Flag;
        cell.appendChild(img);
      } else {
        img.src = teamslog.find(item => item.tname === puzzle1.prow[row - 1]).Logo;
        cell.appendChild(img);
      }

      cell.style.border = 'none';
    }

  }



///////////////////////////////////////////////////////////





//      09-A.  CREATE BUTTON GIVE UP
//           -This function makes a button that will be used to solve all cells
///////////////////////////////////////////////////////////

  function createbuttonGiveUp() {
    var button = document.createElement('button');
    button.textContent = 'GIVE UP';
    button.id = 'clickMeButton';

    // Style the button for positioning and appearance
    button.style.position = 'fixed';
    button.style.bottom = '-16%'; // Adjust as needed
    button.style.right = '1vw'; // Adjust as needed
    button.style.marginRight = '2px'; // Add some space before the edge
    button.classList.add('coolButton'); // Add a class for styling
    document.getElementById('gridContainer').appendChild(button);
    button.addEventListener('click', handleClick);
  }

  function handleClick() {
    // Select all grid cells
    const gridCells = document.querySelectorAll('.grid-playercell');

    // Loop through each grid cell and set its text content to "ERROR"
    gridCells.forEach(cell => {
      addTexttoCellWRONG(cell, "-")
      cell.addEventListener('click', () => {
        if (cell.textContent.trim() !== '') {
          showModal2(puzzle1, cell.dataset.row,cell.dataset.col, cell);
        }
      });

    });
    solved()

  }

///////////////////////////////////////////////////////////




  //      09-B.  CREATE BUTTON CLEAR
  //           -This function makes a button that will be used to solve all cells
  ///////////////////////////////////////////////////////////

  function createbuttonClear() {
    var button = document.createElement('button');
    button.textContent = 'CLEAR';
    button.id = 'clickMe2Button';

    // Style the button for positioning and appearance
    button.style.position = 'fixed';
    button.style.bottom = '-16%'; // Adjust as needed
    button.style.left = '1vw'; // Adjust as needed
    button.style.marginLeft = '2px'; // Add some space before the edge
    button.classList.add('coolButton'); // Add a class for styling
    document.getElementById('gridContainer').appendChild(button);

    button.addEventListener('click', function () {

  
      currentGrid = currentGrid.filter(item => item.order !== currentPuzzle);


      window.localStorage.setItem('current3Grid', JSON.stringify(currentGrid));


      setTimeout(function () {
        window.localStorage.setItem('currentPuzzle', currentPuzzle);
        window.location.href = window.location.href;
      }, 300); // 2000 milliseconds = 2 seconds
    });
}


///////////////////////////////////////////////////////////







//      10.  CREATE DISCLAIMER
//           -This function creates a disclaimer at the end of the site
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
  coolText.style.marginBottom = '10%'; // Adjust as needed
}




  function addTexttoCellWRONG(cell, text) {
    if (cell.textContent == "") {
      cell.textContent = text; // Set the text content of the cell directly

      cell.classList.remove("grid-cell");
      cell.classList.add("grid-cellunsolved");
      answers.push("ERROR")

    }
  }

  // Function to handle search input
  function handleSearchInput(puzzle1, row, col, cell) {

    const searchInput = document.getElementById("textInput");
    const searchTerm = searchInput.value.trim(); // Trim to remove white spaces
    if (searchTerm.length > 0) {
      populateNameList(puzzle1, searchTerm, row, col, cell);
    } else {
      const nameList = document.getElementById("nameListguess");
      nameList.innerHTML = "";
    }
  }


   function countWStatsForOrder(data, order, letterstat) {
     // Iterate over the array

     for (let i = 0; i < data.length; i++) {
       // Check if the current item is defined and has an order property
       if (data[i] && data[i].order === order) {
     
         // Initialize count
         let wCount = 0;
         // Check stat attribute of row1col1 if it exists and is an object
         if (data[i].row1col1 && typeof data[i].row1col1 === 'object' && data[i].row1col1.status === letterstat) {
           wCount++;
         }
         // Check stat attribute of row1col2 if it exists and is an object
         if (data[i].row2col1 && typeof data[i].row2col1 === 'object' && data[i].row2col1.status === letterstat) {
           wCount++;
         }

         if (data[i].row3col1 && typeof data[i].row3col1 === 'object' && data[i].row3col1.status === letterstat) {
           wCount++;
         }

         if (data[i].row1col2 && typeof data[i].row1col2 === 'object' && data[i].row1col2.status === letterstat) {
           wCount++;
         }

         if (data[i].row2col2 && typeof data[i].row2col2 === 'object' && data[i].row2col2.status === letterstat) {
           wCount++;
         }

         if (data[i].row3col2 && typeof data[i].row3col2 === 'object' && data[i].row3col2.status === letterstat) {
           wCount++;
         }

         if (data[i].row1col3 && typeof data[i].row1col3 === 'object' && data[i].row1col3.status === letterstat) {
           wCount++;
         }

         if (data[i].row2col3 && typeof data[i].row2col3 === 'object' && data[i].row2col3.status === letterstat) {
           wCount++;
         }

         if (data[i].row3col3 && typeof data[i].row3col3 === 'object' && data[i].row3col3.status === letterstat) {
           wCount++;
         }

         // Return the count
         return wCount;
       }
     }
     // Return 0 if the item with the given order is not found
     return 0;
   }


   function findItemByOrderAndName(orderToFind, array, name) {
     let foundItem = null;

     // Iterate over each sub-array or directly over the object
     for (let i = 0; i < array.length; i++) {
       const subArray = array[i];
       if (Array.isArray(subArray)) {
         for (let j = 0; j < subArray.length; j++) {
           const item = subArray[j];
           if (item.order !== orderToFind && (item.row1col1?.name === name || item.row1col2?.name === name || item.row1col3?.name === name || item.row2col1?.name === name || item.row2col2?.name === name || item.row2col3?.name === name || item.row3col1?.name === name || item.row3col2?.name === name || item.row3col3?.name === name)) {
             foundItem = item;
             break;
           }
         }
       } else if (subArray.order !== orderToFind && (subArray.row1col1?.name === name || subArray.row1col2?.name === name || subArray.row1col3?.name === name || subArray.row2col1?.name === name || subArray.row2col2?.name === name || subArray.row2col3?.name === name || subArray.row3col1?.name === name || subArray.row3col2?.name === name || subArray.row3col3?.name === name)) {
         foundItem = subArray;
         break;
       }
     }

     return foundItem;
   }




  function populateNameList(puzzle1, filter, row, col, cell) {
    const nameList = document.getElementById("nameList");
    nameList.innerHTML = "";
    let count = 0; // Counter for tracking the number of names added
    const normalizedFilter = filter.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    names.filter(item => {
      const normalizedName = item.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return normalizedName.includes(normalizedFilter);
    })
      .forEach(item => {
        if (count < 10) { 
          var li = document.createElement("li");
          const flagImg = `<img src="${countries.find(country => country.cname === item.Country).Flag}" alt="Flag of Germany" style="width: 20px; height: auto; margin-right: 5px;">`;

      

          const isString = findItemByOrderAndName(currentPuzzle, currentGrid, item.name);


          if (isString){
            li.innerHTML = `${flagImg}  ${item.name} [${item.Position}] 🔎 `;
            li.style.backgroundColor = "lightgrey";
          }
          else{
            li.innerHTML = `${flagImg} ${item.name} [${item.Position}]`;
    
          }

          li.addEventListener('click', () => {
            // When a suggestion is clicked, populate the input field with the clicked name
            document.getElementById('textInput').value = item.name;
            // Clear the suggestion list
            nameList.innerHTML = "";
     
            if ((item.Teams.some(team => team.club.includes(puzzle1.prow[row - 1])) || item.Position.includes(puzzle1.prow[row - 1]) || item.Country.includes(puzzle1.prow[row - 1]) || item.Titles.includes(puzzle1.prow[row - 1]) || item.WC.includes(puzzle1.prow[row - 1].substring(puzzle1.prow[row - 1].length - 4)) || item.Euro.includes(puzzle1.prow[row - 1].substring(puzzle1.prow[row - 1].length - 4)))

              &&
              (item.Teams.some(team => team.club.includes(puzzle1.pcolumn[col - 1])) || item.Position.includes(puzzle1.pcolumn[col - 1]) || item.Country.includes(puzzle1.pcolumn[col - 1]) || item.Titles.includes(puzzle1.pcolumn[col - 1]) || item.WC.includes(puzzle1.pcolumn[col - 1].substring(puzzle1.pcolumn[col - 1].length - 4)) || item.Euro.includes(puzzle1.pcolumn[col - 1].substring(puzzle1.pcolumn[col - 1].length - 4)))) {
              cell.classList.remove("grid-playercell");
   

              if (isString && cell.textContent == "") {

                                puzzleGrid["row" + row + "col" + col] = {
                  name: item.name,
                  status: "r"
                };
                cell.classList.add("grid-cellalreadyused");
              } else if (cell.textContent == ""){

                                puzzleGrid["row" + row + "col" + col] = {
                  name: item.name,
                  status: "w"
                };
                cell.classList.add("grid-cellsolved");
              }


              if (cell.textContent == "") {

                cell.textContent = `${item.name} `; // Set the text content of the cell directly

                let found = false;
                for (let i = 0; i < currentGrid.length; i++) {
                  if (currentGrid[i].order === currentPuzzle) {
                    currentGrid[i]["row" + row + "col" + col] = puzzleGrid["row" + row + "col" + col];
                    found = true;
                    break;
                  }
                }

                if (found != true) {
                  currentGrid.push(puzzleGrid);
                }









                window.localStorage.setItem('current3Grid', JSON.stringify(currentGrid));
              }
              answers.push(item.name)
            } else {
              addTexttoCellWRONG(cell, `${item.name}`);
              puzzleGrid["row" + row + "col" + col] = {
                name: item.name,
                status: "e"
              };
              let found=false;
              for (let i = 0; i < currentGrid.length; i++) {
                if (currentGrid[i].order === currentPuzzle) {
                  currentGrid[i]["row" + row + "col" + col] = puzzleGrid["row" + row + "col" + col];
                  found = true;
                  break;
                }
              }

              if (found!=true){
              currentGrid.push(puzzleGrid);
              }

              


              window.localStorage.setItem('current3Grid', JSON.stringify(currentGrid));


            }
            modal.style.display = 'none';
            const scorestotal = countWStatsForOrder(currentGrid, currentPuzzle, "w") + countWStatsForOrder(currentGrid, currentPuzzle, "r") + countWStatsForOrder(currentGrid, currentPuzzle, "e")

            if (scorestotal === 9){
              solved()
            }

       
          });
          nameList.appendChild(li);
          cell.addEventListener('click', () => {
            if (cell.textContent.trim() !== '') {
              showModal2(puzzle1, row,col, cell);
            }
          });

          count++; // Increment the count of added names
        }
      });
  }

  function showModal(puzzle1, row, col, cell) {

    const modal = document.getElementById('modal');
    const textInput = document.getElementById('textInput');
    const headline = document.getElementById('modal-headline');


    const btnmodal = document.getElementById('close-ans');


    function closeModalans() {
        setTimeout(() => {
        modal.style.display = "none";
      }, 100); // Delay hiding the modal to ensure smooth transition completion
    }

    btnmodal.addEventListener("click", closeModalans);
    btnmodal.style.marginTop = '-10px'; // Adjust the value as needed to raise the button

    document.getElementById("textInput").addEventListener("input", function () {
      handleSearchInput(puzzle1, row, col, cell);
    });
    textInput.value = ''; // Retrieve stored text for this cell
    rowcondition = puzzle1.prow[row - 1]
    colcondition = puzzle1.pcolumn[col - 1]
    if (rowcondition.length === 3) {

      rowcondition = countries.find(country => country.cname === rowcondition).cfullname
    }

    if (colcondition.length === 3) {

      colcondition = countries.find(country => country.cname === colcondition).cfullname
    }

    headline.textContent = (rowcondition + " / " + colcondition);
    headline.style.fontFamily = "'Strait', sans-serif";
    headline.style.fontSize = '12.5px';
    headline.style.marginTop = '10px'; // Adjust the value as needed to lower the he
    modal.style.opacity = '0';
    modal.style.display = 'block';
    modal.offsetHeight;
    modal.style.transition = 'opacity 0.65s';
    modal.style.opacity = '1';
    modal.style.width = '65%'; // Set the width to 70% of the viewport width
    modal.style.height = '65%'; // Set the height to 70% of the viewport height
    modal.style.top = '60%';
    modal.style.left = '60%';
    modal.style.transform = 'translate(-50%, -50%)';


    // Focus on the input field
    textInput.focus();


    // Handle Enter key press
    textInput.addEventListener('keydown', function (event) {

      if (event.key === 'Escape') {
        modal.style.display = 'none';
      }

      window.addEventListener('click', function (event) {
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      });
    });



    // Close modal when clicking outside the textbox
    modal.addEventListener('click', function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  }

  

  function showModal2(puzzle1, row, col, cell) {

    const condit = [puzzle1.prow[row - 1], puzzle1.pcolumn[col - 1]];
    
    const itemsWithBothTeams = chequeo(condit);

    const modal2 = document.getElementById('modal2');
    const modal2Content = document.getElementById("nameElement");

    // Clear previous content
    modal2Content.innerHTML = '';
    let playerCount = 0;

    // Iterate over each item and limit to 15 players
    for (const item of itemsWithBothTeams) {
      if (playerCount >= 30) {
        break; // Exit the loop if 15 players have been processed
      }

      const lio = document.createElement("li");
      const flagImg = `<img src="${countries.find(country => country.cname === item.Country).Flag}" alt="Flag2" style="width: 20px; height: auto; margin-right: 5px;">`;
      lio.innerHTML = `${flagImg} ${item.name} [${item.Position}]`;

      lio.addEventListener('click', function () {
        // Close modal when clicking on list item
        modal2.style.display = 'none';
      });

      modal2Content.appendChild(lio);
      playerCount++;
    }

    // Show modal
    modal2.style.width = '60%'; // Set the width to 70% of the viewport width
    modal2.style.height = '40%'; // Set the height to 70% of the viewport height

    // Position modal in the center of the screen
    modal2.style.top = '50%';
    modal2.style.left = '50%';
    modal2.style.display = 'block';

    // Close modal when clicking outside of it
    window.onclick = function (event) {
      if (event.target === modal2) {
        modal2.style.display = "none";
      }
    };
  }




function resetBt(){
  const btn00 = document.getElementById("reset-button");
  btn00.addEventListener("click", function () {
    window.localStorage.removeItem('current3Grid');
    window.location.href = window.location.href;
  });
}


  function initHelpModal2() {
    const modal = document.getElementById('modalarchive');

    const btn2 = document.getElementById("archive-button"); // Get the button that opens the modal
    const span = document.getElementById("close-archive");  // Get the <span> element that closes the modal
    btn2.addEventListener("click", showModal4);

    span.addEventListener("click", function () {
      modal.style.display = 'none';
    });

  }


   function todayPuzzle() {
     let puzzle1;
     let currentDate = new Date();
     limit = getTheDate(currentDate);
     for (var i = 0; i < puzzleselection.length; i++) {
       if (limit - puzzleselection[i][0].order === 0) {
         puzzle1 = puzzleselection[i];
         break;
       }
     }
     return puzzle1;
   }


  function getTheDate(whatdate) {

    // Create the originalDate with Spanish locale
    let originalDate = new Date(2023, 11, 6); // Month is 0-indexed, so 2 represents March
    let originalDateString = originalDate.toLocaleDateString("es-ES");


    // Calculate the difference in milliseconds
    let diffInMilliseconds = whatdate - originalDate;

    // Convert milliseconds to days and round up
    let diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    return Math.abs(diffInDays);
  }

  function dateStringToDate(dateString) {
    // Split the dateString into day, month, and year parts
    const parts = dateString.split('/');

    // Extract day, month, and year from parts
    const day = parseInt(parts[0], 10);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const monthIndex = months.findIndex(month => month === parts[1]);
    const year = parseInt(parts[2], 10);

    // Create a new Date object
    const date = new Date(year, monthIndex, day);

    return date;
  }








   function showModal4(puzzle1) {
     const modal = document.getElementById('modalarchive');
     const headline = document.getElementById('modal-headline-arc');
     const modal3dates = document.getElementById("nameElementarc");

     headline.textContent = "ARCHIVED GAMES";
     headline.style.fontFamily = "'Roboto', sans-serif";
     headline.style.fontSize = '16px'; // Increase font size for better emphasis
     headline.style.fontWeight = 'bold'; // Add bold font weight for prominence
     headline.style.color = '#333'; // Set text color to a darker shade for better contrast
     headline.style.textTransform = 'uppercase'; // Transform text to uppercase for a more formal appearance
     headline.style.textAlign = 'center'; // Center-align the text for better visual balance
     headline.style.marginBottom = '30px'; // Add some bottom margin for spacing

     modal.style.opacity = '0';
     modal.style.display = 'block';
     modal.offsetHeight;
     modal.style.transition = 'opacity 0.65s';
     modal.style.opacity = '1';
     modal.style.width = '110%'; // Adjusted width for better visibility
     modal.style.maxWidth = '320px'; // Added maximum width to prevent it from getting too wide
     modal.style.height = '100%'; // Adjusted height to auto
     modal.style.top = '50%';
     modal.style.left = '50%';
     modal.style.transform = 'translate(-50%, -50%)'; // Center the modal horizontally and vertically
     modal.style.background = '#ffffff'; // Set background color to white
     modal.style.borderRadius = '8px'; // Added border radius for a softer appearance
     modal.style.padding = '10px'; // Added padding for better spacing
     modal.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; // Added subtle shadow for depth
     modal.style.overflow = 'auto'; // Add scroll bar when content overflows

     modal3dates.style.top = '40px'; // Adjust the top position as needed
     modal3dates.innerHTML = '';
     modal3dates.style.listStyleType = 'none'; // Remove bullet points
     modal3dates.style.marginRight = '1px';
     modal3dates.style.padding = '0'; // Remove any default padding
     modal3dates.style.margin = '15'; // Remove any default margin
     modal3dates.style.position = 'absolute'; // Position it absolutely
     modal3dates.style.left = '0'; // Align it to the left edge of its containing element (in this case, modal)

     // Create the table element
     const table = document.createElement('table');
     table.classList.add('dateTable'); // Add class for styling

     // Create the table header row
     const headerRow = document.createElement('tr');
     const headerInfo = document.createElement('th');
     const headerMatch = document.createElement('th');
     const headerScore = document.createElement('th');
     const headerDate = document.createElement('th');

     headerInfo.textContent = 'Year';
     headerDate.textContent = 'Result';
     headerMatch.textContent = 'Score';
     headerScore.textContent = '#';
     headerRow.appendChild(headerInfo);
     headerRow.appendChild(headerDate);
     headerRow.appendChild(headerMatch);
     headerRow.appendChild(headerScore);
     table.appendChild(headerRow);

     // Array of month names for better readability
     const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

     const startDate = new Date('2023-12-07');

     // Set the end date to March 7, 2024
     const today = new Date();
     const endDate = new Date(today);
     endDate.setDate(today.getDate());

     for (let date = endDate; date >= startDate; date.setDate(date.getDate() - 1)) {
       // Create a new table row
       const row = document.createElement('tr');

       // Create the first table data cell for the date

       const dateString = `${date.getDate()}/${months[date.getMonth()]}/${date.getFullYear()}`;

       // Create the second table data cell for dateString2
       const infoCell = document.createElement('td');
       const matchCell = document.createElement('td');
       const scoreCell = document.createElement('td');
       const dateCell = document.createElement('td');

       const limit2 = getTheDate(dateStringToDate(dateString));
       const scores = countWStatsForOrder(currentGrid, limit2.toString(), "w");
       const scoresrep = countWStatsForOrder(currentGrid, limit2.toString(), "r");
       const scoreserr = countWStatsForOrder(currentGrid, limit2.toString(), "e");
      
       matchCell.textContent = getItemByOrder(limit2.toString()).result
       dateCell.textContent = getItemByOrder(limit2.toString()).year
       scoreCell.textContent = `[${scores + scoresrep}/9]`
       infoCell.textContent = limit2;

       // Append the cells to the row
       row.appendChild(dateCell);

       row.appendChild(matchCell);
       row.appendChild(scoreCell);
       row.appendChild(infoCell);
       row.style.fontFamily = "'Roboto', sans-serif";
       row.style.fontSize = "12px"; // Making font size smaller

       row.style.boxShadow = "1px 1px 13px rgba(0, 0, 255, 0.5)"; // Adding a blue shadow
       
       
       row.style.borderStyle = "solid"; // Setting border style to solid
       row.style.borderWidth = "10px"; // Setting border width




       row.style.borderStyle = "dashed"; // Setting border style to dashed
       row.style.borderWidth = "2px"; // Increasing border width for iPhones
       row.style.borderColor = "rgba(255, 0, 0, 0.7)"; // Setting border color to red with transparency
       row.style.borderColor = "black"; // Setting border color
       row.addEventListener('click', function () {
         modal.style.display = 'none';

         limit = getTheDate(dateStringToDate(dateString));

         for (var i = 0; i < puzzleselection.length; i++) {
           if (limit - puzzleselection[i][0].order === 0) {
             puzzle1 = puzzleselection[i];
             break;
           }
         }

         currentPuzzle = puzzle1[0].order;
         window.localStorage.setItem('currentPuzzle', currentPuzzle);

         // Adding a delay of 1 second (1000 milliseconds) before refreshing the page
         setTimeout(function () {

           window.location.href = window.location.href;
         }, 1000); // Change delay time as needed
       });

       modal.addEventListener('click', function (event) {
         if (event.target === modal) {
           modal.style.display = 'none';
         }
       });



       if (scores + scoresrep > 0) {
         row.style.backgroundColor = "rgb(255, 255, 153)"; // Setting background color to a lighter shade of yellow
       }
       if (scores + scoresrep + scoreserr  === 9) {
         row.style.backgroundColor = "rgb(255, 200, 200)";
         row.style.fontWeight = "bold"; // Setting font weight to bold
    
       }
       if (scores + scoresrep === 9) {
         row.style.backgroundColor = "lightgreen"; // Setting background color to a lighter shade of green
         row.style.fontWeight = "bold"; // Setting font weight to bold
       }


       // Append the row to the table
       table.appendChild(row);
     }

     // Sort direction flag
     let ascending = true;

     // Add click event listener to the Information header for sorting
     headerInfo.addEventListener('click', () => {
       sortTable(table, 1);
     });

     headerScore.addEventListener('click', () => {
       sortTable(table, 4);
     });


     // Function to sort the table
     function sortTable(table, columnIndex) {
       const rows = Array.from(table.getElementsByTagName('tr')).slice(1); // Exclude header row

       // Sort the rows based on the "#" column
       rows.sort((a, b) => {
         const infoA = parseInt(a.cells[columnIndex-1].textContent);
         const infoB = parseInt(b.cells[columnIndex-1].textContent);

         // Compare them as numbers
         return ascending ? infoA - infoB : infoB - infoA;
       });

       // Reorder the rows in the table
       rows.forEach(row => table.appendChild(row));

       // Toggle sort direction
       ascending = !ascending;
     }






     modal.appendChild(table);
     const headerCells = [headerInfo, headerDate, headerMatch, headerScore];
     headerCells.forEach(cell => {
       cell.style.fontFamily = "'Roboto', sans-serif"; // Set font family to Roboto
       cell.style.fontSize = '13px'; // Decrease font size for a smaller appearance
       cell.style.padding = '10px'; // Add padding for spacing
     });
     const tableCells = document.querySelectorAll('th, td');
     tableCells.forEach(cell => {
       cell.style.paddingLeft = '10px'; // Add left padding for space between columns
       cell.style.paddingRight = '10px'; // Add right padding for space between columns
     });



     
     console.log(table)
     
   }
 


   function solved() {
     const gridCellssolved = document.querySelectorAll('.grid-cellsolved');
     const gridCellsunsolved = document.querySelectorAll('.grid-cellunsolved');
    console.log(answers)
     if (answers.length === 9 && !answers.includes("ERROR")) {
       const addFluorescentBorder = (cells, delay, ) => {
         setTimeout(() => {
           cells.forEach(cell => {
             cell.classList.add('fluorescent-border');
           });
         }, delay);
         setTimeout(() => {
           cells.forEach(cell => {
             cell.classList.remove('fluorescent-border');
             cell.classList.add('unfluorescent-border');
           });
         }, delay * 3);
       };

       if (gridCellssolved.length === 9) {
         addFluorescentBorder(gridCellssolved, 600);
       } else {
         addFluorescentBorder(gridCellsunsolved, 200);
         addFluorescentBorder(gridCellssolved, 10);
       }
     }

     setTimeout(function () {
       showModal5();
     }, 2500); // 1500 milliseconds = 1.5 seconds
   }




 


   function showModal5() {
     const modal = document.getElementById('modalsolved');
     const headline = document.getElementById('modal-solved-arc');
     const modal3dates = document.getElementById("nameElementarc");
     const spansolved = document.getElementById("close-solved");  // Get the <span> element that closes the modal
     
     
     headline.textContent = "RESULTS";
     headline.style.fontFamily = "'Roboto', sans-serif";
     headline.style.fontSize = '16px'; // Increase font size for better emphasis
     headline.style.fontWeight = 'bold'; // Add bold font weight for prominence
     headline.style.color = '#333'; // Set text color to a darker shade for better contrast
     headline.style.textTransform = 'uppercase'; // Transform text to uppercase for a more formal appearance
     headline.style.textAlign = 'center'; // Center-align the text for better visual balance
     headline.style.marginBottom = '30px'; // Add some bottom margin for spacing


     var ulElement = document.getElementById("totalSolved");
     ulElement.style.listStyleType = "none";

     const scores = countWStatsForOrder(currentGrid, currentPuzzle, "w")
     const scoresrep = countWStatsForOrder(currentGrid, currentPuzzle, "r") 
     var start = ""

     if (scoresrep ===0 && scores === 9){
       start = "⭐"
     } 
     const foundItem = currentGrid.find(item => item.order === currentPuzzle);

     if (foundItem) {
       foundItem.rarity = ((scores + scoresrep / 2) * 100 / 9);
     } 

     window.localStorage.setItem('current3Grid', JSON.stringify(currentGrid));


     let sum = 0;
     let count = 0;

     for (let i = 0; i < currentGrid.length; i++) {
       if (currentGrid[i].rarity !== null && currentGrid[i].rarity !== undefined) {
         const rarityValue = parseFloat(currentGrid[i].rarity); // Convert rarity value to a number
         if (!isNaN(rarityValue)) { // Check if the conversion was successful
           sum += rarityValue;
           count++;
         }
       }
     }

       const averageRarity = sum / count;
     
     // Create an array of objects containing text and corresponding CSS classes
     var itemsToAdd = [
       { text: "SCORE: " + (scores+scoresrep) +"/" + 9 + "  " + start, className: "format1" },
       { text: "", className: "" },
       { text: "RARITY: " + ((scores + scoresrep / 2)*100 / 9).toFixed(2) + "%" + "  " + start, className: "format1" },
       { text: "", className: "" },
       { text: "AVG. RARITY: " + averageRarity.toFixed(2) + "%" , className: "format1" },
       { text: "", className: "" },
       { text: "Match on Youtube", className: "format2" },
       { text: "▶️", className: "format3", href: (puzzleselection.flat().find(item => item.order === currentPuzzle).ylink)}
     
     
     
     ];

     function renderItems() {
       var container = document.getElementById('modalsolved');
       itemsToAdd.forEach(function (item, index) {
         var element = document.createElement('span');
         element.textContent = item.text;
         element.className = item.className;
         element.style.marginLeft = '15px'; // Adjust the margin-left here
         if (item.href) {
           var link = document.createElement('a');
           link.href = item.href;
           link.appendChild(element);
           container.appendChild(link);
         } else {
           container.appendChild(element);
         }
         // Add line break after each item, except for the last one
         if (index < itemsToAdd.length - 1) {
           container.appendChild(document.createElement('br'));
         }
       });
     }


     // Loop through the array and create list items for each text

     renderItems();


     function closeModal() {
          setTimeout(() => {
         modal.style.display = "none";
       }, 200); // Delay hiding the modal to ensure smooth transition completion
     }

 

     spansolved.addEventListener("click", closeModal);

     modal.style.opacity = '0';
     modal.style.display = 'block';
     modal.offsetHeight;
     modal.style.transition = 'opacity 0.65s';
     modal.style.opacity = '1';
     modal.style.width = '80%'; // Adjusted width for better visibility
     modal.style.maxWidth = '290px'; // Added maximum width to prevent it from getting too wide
     modal.style.height = '70%'; // Adjusted height to auto
     modal.style.top = '60%';
     modal.style.left = '60%';
     modal.style.transform = 'translate(-50%, -50%)'; // Center the modal horizontally and vertically
     modal.style.background = '#ffffff'; // Set background color to white
     modal.style.borderRadius = '8px'; // Added border radius for a softer appearance
     modal.style.padding = '10px'; // Added padding for better spacing
     modal.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; // Added subtle shadow for depth
     modal.style.overflow = 'auto'; // Add scroll bar when content overflows




}
 }
);









