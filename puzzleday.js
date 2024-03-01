document.addEventListener("DOMContentLoaded", function() {
  const gridContainer = document.getElementById("gridContainer");
  const openEls = document.querySelectorAll("[data-open]");
  const isVisible = "is-visible";
  for (const el of openEls) {
    el.addEventListener("click", function() {
      const modalId = this.dataset.open;
      document.getElementById(modalId).classList.add(isVisible);
    });
  }

  var answers = []

  const names = [{name:"Federico Valverde", Country:"URU", Position:"DF,CC,DL",Teams: [{ club:"es Real Madrid", matches:238, goals:16, assists:19},{ club:"es Deportivo", matches:25, goals:0, assists:0},], Titles:"2022ChampionsWin", WC:""},
{name:"Antonio Rüdiger", Country:"GER", Position:"DF",Teams: [{ club:"es Real Madrid", matches:81, goals:4, assists:1},{ club:"it Roma", matches:72, goals:2, assists:2},{ club:"de Stuttgart", matches:71, goals:2, assists:1},{ club:"en Chelsea", matches:201, goals:12, assists:3},], Titles:"2021ChampionsWin", WC:"2022, 2018"},
{name:"Rodrygo", Country:"BRA", Position:"CC,DL",Teams: [{ club:"es Real Madrid", matches:199, goals:49, assists:35},], Titles:"2022ChampionsWin", WC:"2022"},
{name:"Jude Bellingham", Country:"ENG", Position:"CC,DL",Teams: [{ club:"es Real Madrid", matches:29, goals:20, assists:8},{ club:"de Leverkusen", matches:132, goals:24, assists:24},], Titles:"2021EuroFinal", WC:"2022"},
{name:"Dani Carvajal", Country:"ESP", Position:"DF",Teams: [{ club:"es Real Madrid", matches:389, goals:11, assists:55},{ club:"de Leverkusen", matches:34, goals:1, assists:7},], Titles:"2022ChampionsWin, 2018ChampionsWin, 2017ChampionsWin, 2016ChampionsWin, 2014ChampionsWin", WC:"2022, 2018"},
{name:"Toni Kroos", Country:"GER", Position:"CC",Teams: [{ club:"es Real Madrid", matches:439, goals:28, assists:84},{ club:"de Bayern", matches:177, goals:20, assists:32},{ club:"de Leverkusen", matches:43, goals:10, assists:9},], Titles:"2014WC01,2022ChampionsWin, 2018ChampionsWin, 2017ChampionsWin, 2016ChampionsWin, 2013ChampionsWin, 2012ChampionsFinal", WC:"2018, 2014, 2010"},
{name:"Nacho", Country:"ESP", Position:"DF",Teams: [{ club:"es Real Madrid", matches:334, goals:16, assists:6},], Titles:"2022ChampionsWin, 2018ChampionsWin, 2017ChampionsWin, 2016ChampionsWin, 2014ChampionsWin", WC:"2018"},
{name:"Vinicius Júnior", Country:"BRA", Position:"DL",Teams: [{ club:"es Real Madrid", matches:245, goals:69, assists:56},], Titles:"2022ChampionsWin", WC:"2022"},
{name:"Aurélien Tchouaméni", Country:"FRA", Position:"DF,CC",Teams: [{ club:"es Real Madrid", matches:74, goals:2, assists:5},{ club:"fr Monaco", matches:91, goals:7, assists:7},], Titles:"2022WC02", WC:"2022"},
{name:"Eduardo Camavinga", Country:"FRA", Position:"DF,CC",Teams: [{ club:"es Real Madrid", matches:125, goals:2, assists:6},], Titles:"2022WC02,2022ChampionsWin", WC:"2022"},
{name:"Kepa Arrizabalaga", Country:"ESP", Position:"PO",Teams: [{ club:"es Real Madrid", matches:18, goals:0, assists:0},{ club:"es Athletic", matches:54, goals:0, assists:0},{ club:"en Chelsea", matches:162, goals:0, assists:0},], Titles:"2021ChampionsWin", WC:""},
{name:"Andriy Lunin", Country:"UKR", Position:"PO",Teams: [{ club:"es Real Madrid", matches:33, goals:0, assists:0},], Titles:"", WC:""},
{name:"Joselu", Country:"ESP", Position:"DL",Teams: [{ club:"es Real Madrid", matches:36, goals:15, assists:3},{ club:"es Alaves", matches:112, goals:36, assists:9},{ club:"es Deportivo", matches:24, goals:6, assists:1},{ club:"es Celta", matches:26, goals:4, assists:2},{ club:"es Espanyol", matches:38, goals:17, assists:3},], Titles:"", WC:""},
{name:"Ferland Mendy", Country:"FRA", Position:"DF,CC",Teams: [{ club:"es Real Madrid", matches:156, goals:6, assists:8},{ club:"fr Lyon", matches:79, goals:3, assists:9},], Titles:"2022ChampionsWin", WC:""},
{name:"Luka Modrić", Country:"CRO", Position:"CC",Teams: [{ club:"es Real Madrid", matches:491, goals:37, assists:74},{ club:"en Tottenham", matches:141, goals:16, assists:16},], Titles:"2018WC02,2022ChampionsWin, 2018ChampionsWin, 2017ChampionsWin, 2016ChampionsWin, 2014ChampionsWin", WC:"2022, 2018, 2014, 2006"},
{name:"David Alaba", Country:"AUT", Position:"DF,CC",Teams: [{ club:"es Real Madrid", matches:100, goals:5, assists:9},{ club:"de Bayern", matches:407, goals:33, assists:45},], Titles:"2022ChampionsWin, 2020ChampionsWin, 2013ChampionsWin, 2012ChampionsFinal, 2010ChampionsFinal", WC:""},
{name:"Fran Garcia", Country:"ESP", Position:"DF",Teams: [{ club:"es Real Madrid", matches:25, goals:0, assists:6},], Titles:"", WC:""},
{name:"Brahim Díaz", Country:"ESP", Position:"CC,DL",Teams: [{ club:"es Real Madrid", matches:50, goals:10, assists:5},{ club:"it Milan", matches:122, goals:18, assists:15},{ club:"en Man City", matches:15, goals:2, assists:0},], Titles:"2018Premier", WC:""},
{name:"Lucas Vázquez", Country:"ESP", Position:"DF,CC,DL",Teams: [{ club:"es Real Madrid", matches:330, goals:34, assists:44},{ club:"es Espanyol", matches:39, goals:4, assists:6},], Titles:"2022ChampionsWin, 2018ChampionsWin, 2017ChampionsWin, 2016ChampionsWin", WC:"2018"},
{name:"Dani Ceballos", Country:"ESP", Position:"CC,DL",Teams: [{ club:"es Real Madrid", matches:136, goals:7, assists:10},{ club:"es Betis", matches:105, goals:7, assists:7},{ club:"en Arsenal", matches:77, goals:2, assists:5},], Titles:"2022ChampionsWin, 2018ChampionsWin", WC:""},
{name:"Nicolás Paz", Country:"ARG", Position:"CC",Teams: [{ club:"es Real Madrid", matches:8, goals:1, assists:0},], Titles:"", WC:""},
{name:"Arda Güler", Country:"TUR", Position:"CC",Teams: [{ club:"es Real Madrid", matches:5, goals:0, assists:0},], Titles:"", WC:""},
{name:"Álvaro Carrillo", Country:"ESP", Position:"DF",Teams: [{ club:"es Real Madrid", matches:1, goals:0, assists:0},], Titles:"", WC:""},
{name:"Vinicius Tobias", Country:"BRA", Position:"DF",Teams: [{ club:"es Real Madrid", matches:1, goals:0, assists:0},], Titles:"", WC:""},
{name:"Éder Militão", Country:"BRA", Position:"DF",Teams: [{ club:"es Real Madrid", matches:143, goals:11, assists:3},{ club:"pt Porto", matches:38, goals:5, assists:2},], Titles:"2022ChampionsWin", WC:"2022"},
{name:"Mario Martín", Country:"ESP", Position:"CC",Teams: [{ club:"es Real Madrid", matches:2, goals:0, assists:0},], Titles:"", WC:""},
{name:"Gonzalo García", Country:"ESP", Position:"CC",Teams: [{ club:"es Real Madrid", matches:2, goals:0, assists:0},], Titles:"", WC:""},
{name:"Álvaro Muñoz", Country:"URU", Position:"DL",Teams: [{ club:"es Real Madrid", matches:9, goals:1, assists:1},], Titles:"", WC:""},
{name:"Thibaut Courtois", Country:"BEL", Position:"PO",Teams: [{ club:"es Real Madrid", matches:228, goals:0, assists:0},{ club:"es Atletico", matches:137, goals:0, assists:0},{ club:"en Chelsea", matches:154, goals:0, assists:0},], Titles:"2022ChampionsWin, 2014ChampionsFinal,2017Premier, 2015Premier", WC:"2022, 2018, 2014"},
{name:"Karim Benzema", Country:"FRA", Position:"DL",Teams: [{ club:"es Real Madrid", matches:606, goals:335, assists:138},{ club:"fr Lyon", matches:131, goals:55, assists:15},], Titles:"2022ChampionsWin, 2018ChampionsWin, 2017ChampionsWin, 2016ChampionsWin, 2014ChampionsWin", WC:"2014"},
{name:"Marco Asensio", Country:"ESP", Position:"CC,DL",Teams: [{ club:"es Real Madrid", matches:283, goals:61, assists:29},{ club:"es Mallorca", matches:56, goals:7, assists:9},{ club:"es Espanyol", matches:37, goals:4, assists:10},{ club:"fr ParisSG", matches:17, goals:5, assists:4},], Titles:"2022ChampionsWin, 2018ChampionsWin, 2017ChampionsWin", WC:"2022, 2018"},
{name:"Eden Hazard", Country:"BEL", Position:"CC,DL",Teams: [{ club:"es Real Madrid", matches:76, goals:7, assists:9},{ club:"en Chelsea", matches:332, goals:106, assists:75},], Titles:"2022ChampionsWin,2017Premier, 2015Premier", WC:"2022, 2018, 2014"},
{name:"Mariano", Country:"DOM", Position:"CC,DL",Teams: [{ club:"es Real Madrid", matches:83, goals:12, assists:2},{ club:"es Sevilla", matches:10, goals:0, assists:0},{ club:"fr Lyon", matches:48, goals:21, assists:5},], Titles:"2022ChampionsWin, 2017ChampionsWin", WC:""},
{name:"Casemiro", Country:"BRA", Position:"CC",Teams: [{ club:"es Real Madrid", matches:323, goals:31, assists:24},{ club:"pt Porto", matches:36, goals:4, assists:4},{ club:"en Man Utd", matches:69, goals:11, assists:8},], Titles:"2022ChampionsWin, 2018ChampionsWin, 2017ChampionsWin, 2016ChampionsWin, 2014ChampionsWin", WC:"2022, 2018"},
{name:"Álvaro Odriozola", Country:"ESP", Position:"DF",Teams: [{ club:"es Real Madrid", matches:48, goals:3, assists:8},{ club:"de Bayern", matches:5, goals:0, assists:1},], Titles:"2020ChampionsWin", WC:""},
{name:"Jesús Vallejo", Country:"ESP", Position:"DF",Teams: [{ club:"es Real Madrid", matches:30, goals:1, assists:0},], Titles:"2022ChampionsWin, 2018ChampionsWin", WC:""},
{name:"Sergio Arribas", Country:"ESP", Position:"CC,DL",Teams: [{ club:"es Real Madrid", matches:13, goals:0, assists:0},], Titles:"", WC:""},
{name:"Marcelo", Country:"BRA", Position:"DF,CC",Teams: [{ club:"es Real Madrid", matches:512, goals:38, assists:83},{ club:"gr Olympiakos", matches:8, goals:0, assists:0},], Titles:"2022ChampionsWin, 2018ChampionsWin, 2017ChampionsWin, 2016ChampionsWin, 2014ChampionsWin", WC:"2018, 2014"},
{name:"Luka Jović", Country:"SRB", Position:"CC,DL",Teams: [{ club:"es Real Madrid", matches:51, goals:3, assists:5},{ club:"it Milan", matches:22, goals:8, assists:1},{ club:"pt Benfica", matches:3, goals:0, assists:0},], Titles:"2022ChampionsWin", WC:"2022, 2018"},
{name:"Isco", Country:"ESP", Position:"CC,DL",Teams: [{ club:"es Real Madrid", matches:337, goals:52, assists:50},{ club:"es Malaga", matches:77, goals:17, assists:9},{ club:"es Sevilla", matches:19, goals:1, assists:3},{ club:"es Betis", matches:29, goals:7, assists:5},{ club:"es Valencia", matches:6, goals:0, assists:0},], Titles:"2018ChampionsWin, 2017ChampionsWin, 2016ChampionsWin, 2014ChampionsWin", WC:"2018"},
{name:"Miguel Gutiérrez", Country:"ESP", Position:"DF",Teams: [{ club:"es Real Madrid", matches:10, goals:0, assists:2},], Titles:"2022ChampionsWin", WC:""},
{name:"Gareth Bale", Country:"WAL", Position:"CC,DL",Teams: [{ club:"es Real Madrid", matches:245, goals:99, assists:58},{ club:"en Tottenham", matches:208, goals:66, assists:30},], Titles:"2022ChampionsWin, 2018ChampionsWin, 2017ChampionsWin, 2016ChampionsWin, 2014ChampionsWin", WC:"2022"},
{name:"Peter González", Country:"DOM", Position:"DF,CC,DL",Teams: [{ club:"es Real Madrid", matches:3, goals:0, assists:0},{ club:"es Valencia", matches:2, goals:0, assists:0},], Titles:"", WC:""},
{name:"Mario Gila", Country:"ESP", Position:"DF",Teams: [{ club:"es Real Madrid", matches:2, goals:0, assists:0},], Titles:"", WC:""},
{name:"Sergio Santos", Country:"ESP", Position:"DF",Teams: [{ club:"es Real Madrid", matches:1, goals:0, assists:0},], Titles:"", WC:""},
{name:"Juanmi Latasa", Country:"ESP", Position:"DL",Teams: [{ club:"es Real Madrid", matches:1, goals:0, assists:0},{ club:"es Getafe", matches:47, goals:7, assists:0},], Titles:"", WC:""},
{name:"Raphaël Varane", Country:"FRA", Position:"DF,CC",Teams: [{ club:"es Real Madrid", matches:340, goals:14, assists:7},{ club:"en Man Utd", matches:87, goals:2, assists:1},], Titles:"2022WC02, 2018WC01,2018ChampionsWin, 2017ChampionsWin, 2016ChampionsWin, 2014ChampionsWin", WC:"2022, 2018, 2014"},
{name:"Sergio Ramos", Country:"ESP", Position:"DF",Teams: [{ club:"es Real Madrid", matches:622, goals:94, assists:30},{ club:"es Sevilla", matches:68, goals:8, assists:4},{ club:"fr ParisSG", matches:58, goals:6, assists:1},], Titles:"2010WC01,2012EuroFinal, 2008EuroWin,2018ChampionsWin, 2017ChampionsWin, 2016ChampionsWin, 2014ChampionsWin", WC:"2018, 2014, 2010, 2006"},
{name:"Martin Ødegaard", Country:"NOR", Position:"CC,DL",Teams: [{ club:"es Real Madrid", matches:11, goals:0, assists:0},{ club:"en Arsenal", matches:138, goals:32, assists:20},], Titles:"", WC:""},
{name:"Víctor Chust", Country:"ESP", Position:"DF",Teams: [{ club:"es Real Madrid", matches:3, goals:0, assists:0},], Titles:"", WC:""},
{name:"Marvin", Country:"ESP", Position:"DL",Teams: [{ club:"es Real Madrid", matches:4, goals:0, assists:1},], Titles:"", WC:""},
{name:"Hugo Duro", Country:"ESP", Position:"DF,CC,DL",Teams: [{ club:"es Real Madrid", matches:3, goals:0, assists:0},{ club:"es Getafe", matches:32, goals:1, assists:1},{ club:"es Valencia", matches:97, goals:22, assists:5},], Titles:"", WC:""},
{name:"Borja Mayoral", Country:"ESP", Position:"DF,DL",Teams: [{ club:"es Real Madrid", matches:33, goals:7, assists:2},{ club:"es Getafe", matches:85, goals:32, assists:4},{ club:"it Roma", matches:55, goals:18, assists:7},{ club:"de Wolfsburg", matches:21, goals:2, assists:0},], Titles:"2018ChampionsWin", WC:""},
{name:"Alphonse Areola", Country:"FRA", Position:"PO",Teams: [{ club:"es Real Madrid", matches:9, goals:0, assists:0},{ club:"es Villarreal", matches:37, goals:0, assists:0},{ club:"fr ParisSG", matches:105, goals:0, assists:0},], Titles:"", WC:""},
{name:"James Rodríguez", Country:"COL", Position:"CC,DL",Teams: [{ club:"es Real Madrid", matches:121, goals:36, assists:35},{ club:"fr Monaco", matches:34, goals:9, assists:13},{ club:"pt Porto", matches:90, goals:28, assists:31},{ club:"de Bayern", matches:67, goals:15, assists:19},{ club:"gr Olympiakos", matches:20, goals:5, assists:6},], Titles:"2017ChampionsWin, 2016ChampionsWin", WC:"2018, 2014"},
{name:"Keylor Navas", Country:"CRC", Position:"PO",Teams: [{ club:"es Real Madrid", matches:158, goals:0, assists:0},{ club:"fr ParisSG", matches:111, goals:0, assists:0},], Titles:"2020ChampionsFinal, 2018ChampionsWin, 2017ChampionsWin, 2016ChampionsWin", WC:"2022, 2018, 2014"},
{name:"Sergio Reguilón", Country:"ESP", Position:"DF,CC",Teams: [{ club:"es Real Madrid", matches:22, goals:0, assists:3},{ club:"es Sevilla", matches:37, goals:3, assists:5},{ club:"es Atletico", matches:12, goals:0, assists:0},{ club:"en Tottenham", matches:66, goals:2, assists:8},{ club:"en Man Utd", matches:12, goals:0, assists:0},], Titles:"", WC:""},
{name:"Marcos Llorente", Country:"ESP", Position:"DF,CC,DL",Teams: [{ club:"es Real Madrid", matches:37, goals:1, assists:0},{ club:"es Alaves", matches:38, goals:0, assists:2},{ club:"es Atletico", matches:186, goals:27, assists:26},], Titles:"2018ChampionsWin", WC:"2022"},
{name:"Javi Sánchez", Country:"ESP", Position:"DF",Teams: [{ club:"es Real Madrid", matches:5, goals:1, assists:0},], Titles:"", WC:""},
{name:"Luca Zidane", Country:"FRA", Position:"PO",Teams: [{ club:"es Real Madrid", matches:2, goals:0, assists:0},], Titles:"", WC:""},
{name:"Cristo González", Country:"ESP", Position:"DL",Teams: [{ club:"es Real Madrid", matches:4, goals:1, assists:0},], Titles:"", WC:""},
{name:"Álvaro Fidalgo", Country:"ESP", Position:"CC",Teams: [{ club:"es Real Madrid", matches:1, goals:0, assists:0},], Titles:"", WC:""},
{name:"Cristiano Ronaldo", Country:"POR", Position:"CC,DL",Teams: [{ club:"es Real Madrid", matches:400, goals:421, assists:113},{ club:"it Juventus", matches:134, goals:101, assists:20},{ club:"pt Sporting", matches:27, goals:3, assists:3},{ club:"en Man Utd", matches:302, goals:126, assists:49},], Titles:"2016EuroWin, 2004EuroFinal,2018ChampionsWin, 2017ChampionsWin, 2016ChampionsWin, 2014ChampionsWin, 2009ChampionsFinal, 2008ChampionsWin,2009Premier, 2008Premier, 2007Premier", WC:"2022, 2018, 2014, 2010, 2006"},
{name:"Mateo Kovačić", Country:"CRO", Position:"CC,DL",Teams: [{ club:"es Real Madrid", matches:107, goals:3, assists:7},{ club:"it Inter", matches:91, goals:5, assists:10},{ club:"en Chelsea", matches:219, goals:6, assists:14},{ club:"en Man City", matches:27, goals:0, assists:1},], Titles:"2018WC02,2021ChampionsWin, 2018ChampionsWin, 2017ChampionsWin, 2016ChampionsWin", WC:"2022, 2018, 2014"},
{name:"Theo Hernández", Country:"FRA", Position:"DF",Teams: [{ club:"es Real Madrid", matches:23, goals:0, assists:1},{ club:"es Alaves", matches:38, goals:2, assists:3},{ club:"it Milan", matches:196, goals:28, assists:30},], Titles:"2022WC02,2018ChampionsWin", WC:"2022"},
{name:"Kiko Casilla", Country:"ESP", Position:"PO",Teams: [{ club:"es Real Madrid", matches:43, goals:0, assists:1},{ club:"es Getafe", matches:2, goals:0, assists:0},{ club:"es Espanyol", matches:115, goals:0, assists:0},], Titles:"2018ChampionsWin, 2017ChampionsWin, 2016ChampionsWin", WC:""},
{name:"Achraf Hakimi", Country:"MAR", Position:"DF,CC",Teams: [{ club:"es Real Madrid", matches:16, goals:2, assists:1},{ club:"it Inter", matches:45, goals:7, assists:9},{ club:"fr ParisSG", matches:105, goals:13, assists:16},{ club:"de Leverkusen", matches:73, goals:12, assists:17},], Titles:"2018ChampionsWin", WC:"2022, 2018"},
{name:"Álvaro Tejero", Country:"ESP", Position:"DF",Teams: [{ club:"es Real Madrid", matches:5, goals:0, assists:0},], Titles:"", WC:""},
{name:"Óscar Rodríguez Arnaiz", Country:"ESP", Position:"CC,DL",Teams: [{ club:"es Real Madrid", matches:1, goals:0, assists:0},{ club:"es Sevilla", matches:44, goals:2, assists:2},{ club:"es Getafe", matches:34, goals:4, assists:2},{ club:"es Celta", matches:36, goals:3, assists:1},], Titles:"", WC:""},
{name:"Franchu Feuillassier", Country:"ARG", Position:"CC",Teams: [{ club:"es Real Madrid", matches:2, goals:0, assists:0},], Titles:"", WC:""},
{name:"Luismi Quezada", Country:"DOM", Position:"DF",Teams: [{ club:"es Real Madrid", matches:1, goals:0, assists:0},], Titles:"", WC:""},
{name:"Jaime Seoane", Country:"ESP", Position:"CC,DL",Teams: [{ club:"es Real Madrid", matches:1, goals:0, assists:0},{ club:"es Getafe", matches:19, goals:0, assists:0},], Titles:"", WC:""},
{name:"Danilo", Country:"BRA", Position:"DF,CC",Teams: [{ club:"es Real Madrid", matches:56, goals:3, assists:8},{ club:"it Juventus", matches:183, goals:9, assists:13},{ club:"pt Porto", matches:119, goals:12, assists:13},{ club:"en Man City", matches:60, goals:4, assists:4},], Titles:"2017ChampionsWin, 2016ChampionsWin,2019Premier, 2018Premier", WC:"2022, 2018"},
{name:"Álvaro Morata", Country:"ESP", Position:"DL",Teams: [{ club:"es Real Madrid", matches:84, goals:31, assists:10},{ club:"es Atletico", matches:140, goals:56, assists:10},{ club:"it Juventus", matches:184, goals:59, assists:30},{ club:"en Chelsea", matches:72, goals:24, assists:6},], Titles:"2017ChampionsWin, 2015ChampionsFinal, 2014ChampionsWin", WC:"2022"},
{name:"Pepe", Country:"POR", Position:"DF,CC",Teams: [{ club:"es Real Madrid", matches:305, goals:14, assists:12},{ club:"pt Porto", matches:242, goals:17, assists:6},], Titles:"2016EuroWin,2017ChampionsWin, 2016ChampionsWin, 2014ChampionsWin", WC:"2022, 2018, 2014, 2010"},
{name:"Fábio Coentrão", Country:"POR", Position:"DF,CC",Teams: [{ club:"es Real Madrid", matches:89, goals:1, assists:7},{ club:"fr Monaco", matches:18, goals:3, assists:2},{ club:"pt Sporting", matches:34, goals:1, assists:3},{ club:"pt Benfica", matches:77, goals:5, assists:10},], Titles:"2017ChampionsWin, 2014ChampionsWin", WC:"2014, 2010"},
{name:"Enzo Zidane", Country:"ESP", Position:"CC",Teams: [{ club:"es Real Madrid", matches:1, goals:1, assists:0},{ club:"es Alaves", matches:4, goals:0, assists:0},], Titles:"", WC:""},
{name:"Rubén Yáñez", Country:"ESP", Position:"PO",Teams: [{ club:"es Real Madrid", matches:1, goals:0, assists:0},{ club:"es Malaga", matches:29, goals:0, assists:1},{ club:"es Getafe", matches:13, goals:0, assists:0},], Titles:"", WC:""},
{name:"Jesé", Country:"ESP", Position:"CC,DL",Teams: [{ club:"es Real Madrid", matches:84, goals:15, assists:12},{ club:"es Betis", matches:18, goals:2, assists:1},{ club:"fr ParisSG", matches:18, goals:2, assists:0},{ club:"pt Sporting", matches:14, goals:1, assists:0},], Titles:"2016ChampionsWin, 2014ChampionsWin", WC:""},
{name:"Álvaro Arbeloa", Country:"ESP", Position:"DF",Teams: [{ club:"es Real Madrid", matches:206, goals:6, assists:11},{ club:"es Deportivo", matches:20, goals:0, assists:0},], Titles:"2010WC01,2012EuroFinal, 2008EuroWin,2016ChampionsWin, 2014ChampionsWin", WC:"2010"},
{name:"Denis Cheryshev", Country:"RUS", Position:"DF,CC,DL",Teams: [{ club:"es Real Madrid", matches:6, goals:1, assists:1},{ club:"es Villarreal", matches:89, goals:11, assists:12},{ club:"es Sevilla", matches:5, goals:0, assists:0},{ club:"es Valencia", matches:122, goals:11, assists:11},], Titles:"2016ChampionsWin", WC:"2018"},
{name:"Philipp Lienhart", Country:"AUT", Position:"DF",Teams: [{ club:"es Real Madrid", matches:1, goals:0, assists:0},], Titles:"", WC:""},
{name:"Iker Casillas", Country:"ESP", Position:"PO",Teams: [{ club:"es Real Madrid", matches:661, goals:0, assists:0},{ club:"pt Porto", matches:145, goals:0, assists:0},], Titles:"2010WC01,2012EuroFinal, 2008EuroWin,2014ChampionsWin, 2002ChampionsWin, 2000ChampionsWin", WC:"2014, 2010, 2006, 2002"},
{name:"Asier Illarramendi", Country:"ESP", Position:"CC",Teams: [{ club:"es Real Madrid", matches:80, goals:2, assists:1},], Titles:"2014ChampionsWin", WC:""},
{name:"Javier Hernández", Country:"MEX", Position:"DL",Teams: [{ club:"es Real Madrid", matches:33, goals:9, assists:4},{ club:"es Sevilla", matches:13, goals:3, assists:0},{ club:"de Leverkusen", matches:76, goals:39, assists:8},{ club:"en Man Utd", matches:131, goals:46, assists:10},], Titles:"2011ChampionsFinal,2013Premier, 2011Premier", WC:"2018, 2014, 2010"},
{name:"Sami Khedira", Country:"GER", Position:"CC",Teams: [{ club:"es Real Madrid", matches:139, goals:7, assists:9},{ club:"it Juventus", matches:145, goals:21, assists:14},{ club:"de Stuttgart", matches:114, goals:15, assists:13},], Titles:"2014WC01,2017ChampionsFinal, 2014ChampionsWin", WC:"2018, 2014, 2010"},
{name:"Lucas Silva", Country:"BRA", Position:"CC",Teams: [{ club:"es Real Madrid", matches:9, goals:0, assists:0},{ club:"fr Marseille", matches:31, goals:0, assists:0},], Titles:"", WC:""},
{name:"Álvaro Medrán", Country:"ESP", Position:"CC",Teams: [{ club:"es Real Madrid", matches:5, goals:1, assists:0},{ club:"es Alaves", matches:21, goals:2, assists:2},{ club:"es Getafe", matches:20, goals:2, assists:1},{ club:"es Valencia", matches:21, goals:3, assists:0},], Titles:"", WC:""},
{name:"Fernando Pacheco", Country:"ESP", Position:"PO",Teams: [{ club:"es Real Madrid", matches:1, goals:0, assists:0},{ club:"es Alaves", matches:253, goals:0, assists:0},{ club:"es Espanyol", matches:43, goals:0, assists:0},], Titles:"", WC:""},
{name:"Diego Llorente", Country:"ESP", Position:"DF,CC",Teams: [{ club:"es Real Madrid", matches:3, goals:0, assists:0},{ club:"es Malaga", matches:27, goals:2, assists:0},{ club:"it Roma", matches:42, goals:0, assists:2},], Titles:"", WC:""},
{name:"Javier Muñoz", Country:"ESP", Position:"CC,DL",Teams: [{ club:"es Real Madrid", matches:1, goals:0, assists:0},{ club:"es Alaves", matches:1, goals:0, assists:0},], Titles:"", WC:""},
{name:"Raúl de Tomás", Country:"ESP", Position:"CC,DL",Teams: [{ club:"es Real Madrid", matches:1, goals:0, assists:0},{ club:"es Espanyol", matches:88, goals:44, assists:6},{ club:"pt Benfica", matches:11, goals:1, assists:0},], Titles:"", WC:""},
{name:"Diego López", Country:"ESP", Position:"PO",Teams: [{ club:"es Real Madrid", matches:63, goals:0, assists:0},{ club:"es Villarreal", matches:215, goals:0, assists:0},{ club:"es Sevilla", matches:8, goals:0, assists:0},{ club:"es Espanyol", matches:207, goals:0, assists:0},{ club:"it Milan", matches:37, goals:0, assists:0},], Titles:"2014ChampionsWin", WC:""},
{name:"Ángel Di María", Country:"ARG", Position:"CC,DL",Teams: [{ club:"es Real Madrid", matches:163, goals:30, assists:64},{ club:"it Juventus", matches:40, goals:8, assists:7},{ club:"fr ParisSG", matches:293, goals:91, assists:110},{ club:"pt Benfica", matches:129, goals:22, assists:30},{ club:"en Man Utd", matches:32, goals:4, assists:11},], Titles:"2022WC01, 2014WC02,2020ChampionsFinal, 2014ChampionsWin", WC:"2022, 2018, 2014, 2010"},
{name:"Xabi Alonso", Country:"ESP", Position:"CC",Teams: [{ club:"es Real Madrid", matches:205, goals:4, assists:23},{ club:"de Bayern", matches:117, goals:9, assists:12},], Titles:"2010WC01,2012EuroFinal, 2008EuroWin,2014ChampionsWin, 2007ChampionsFinal, 2005ChampionsWin", WC:"2014, 2010, 2006"},
{name:"Mesut Özil", Country:"GER", Position:"CC,DL",Teams: [{ club:"es Real Madrid", matches:136, goals:23, assists:60},{ club:"en Arsenal", matches:247, goals:43, assists:70},], Titles:"", WC:"2018, 2014, 2010"},
{name:"Willian José", Country:"BRA", Position:"DL",Teams: [{ club:"es Real Madrid", matches:1, goals:0, assists:0},{ club:"es Betis", matches:114, goals:27, assists:9},], Titles:"", WC:""},
{name:"Gonzalo Higuaín", Country:"ARG", Position:"CC,DL",Teams: [{ club:"es Real Madrid", matches:238, goals:115, assists:38},{ club:"it Milan", matches:22, goals:8, assists:2},{ club:"it Juventus", matches:149, goals:66, assists:17},{ club:"it Napoli", matches:138, goals:86, assists:25},{ club:"en Chelsea", matches:18, goals:5, assists:0},], Titles:"2014WC02,2017ChampionsFinal", WC:"2018, 2014, 2010"},
{name:"Michael Essien", Country:"GHA", Position:"DF,CC",Teams: [{ club:"es Real Madrid", matches:28, goals:2, assists:1},{ club:"it Milan", matches:22, goals:0, assists:0},{ club:"fr Lyon", matches:89, goals:12, assists:2},{ club:"en Chelsea", matches:217, goals:23, assists:16},], Titles:"2012ChampionsWin, 2008ChampionsFinal,2010Premier, 2006Premier", WC:"2014, 2006"},
{name:"José Callejón", Country:"ESP", Position:"CC,DL",Teams: [{ club:"es Real Madrid", matches:64, goals:15, assists:3},{ club:"es Espanyol", matches:97, goals:10, assists:8},{ club:"it Napoli", matches:339, goals:78, assists:71},], Titles:"", WC:""},
{name:"Raúl Albiol", Country:"ESP", Position:"DF",Teams: [{ club:"es Real Madrid", matches:102, goals:2, assists:0},{ club:"es Villarreal", matches:178, goals:4, assists:0},{ club:"es Getafe", matches:17, goals:1, assists:0},{ club:"es Valencia", matches:154, goals:6, assists:2},{ club:"it Napoli", matches:226, goals:6, assists:6},], Titles:"", WC:"2014"},
{name:"Kaká", Country:"BRA", Position:"CC,DL",Teams: [{ club:"es Real Madrid", matches:109, goals:28, assists:26},{ club:"it Milan", matches:288, goals:102, assists:67},], Titles:"2022WC01,2007ChampionsWin, 2005ChampionsFinal", WC:"2010, 2006, 2002"},
{name:"Ricardo Carvalho", Country:"POR", Position:"DF",Teams: [{ club:"es Real Madrid", matches:62, goals:3, assists:2},{ club:"fr Monaco", matches:106, goals:2, assists:3},{ club:"pt Porto", matches:100, goals:4, assists:2},{ club:"en Chelsea", matches:182, goals:9, assists:6},], Titles:"2016EuroWin, 2004EuroFinal,2008ChampionsFinal, 2004ChampionsWin,2010Premier, 2006Premier, 2005Premier", WC:"2010, 2006"},
{name:"Antonio Adán", Country:"ESP", Position:"PO",Teams: [{ club:"es Real Madrid", matches:11, goals:0, assists:0},{ club:"es Betis", matches:165, goals:0, assists:2},{ club:"es Atletico", matches:7, goals:0, assists:0},{ club:"pt Sporting", matches:141, goals:0, assists:2},], Titles:"", WC:""},
{name:"Lassana Diarra", Country:"FRA", Position:"CC",Teams: [{ club:"es Real Madrid", matches:109, goals:1, assists:5},{ club:"fr ParisSG", matches:19, goals:0, assists:1},{ club:"fr Marseille", matches:44, goals:1, assists:1},{ club:"en Arsenal", matches:10, goals:0, assists:0},{ club:"en Chelsea", matches:20, goals:0, assists:1},], Titles:"", WC:""},
{name:"Jesús", Country:"ESP", Position:"PO",Teams: [{ club:"es Real Madrid", matches:2, goals:0, assists:0},], Titles:"", WC:""},
{name:"José Rodríguez", Country:"ESP", Position:"CC",Teams: [{ club:"es Real Madrid", matches:2, goals:0, assists:0},{ club:"es Malaga", matches:6, goals:0, assists:0},{ club:"es Deportivo", matches:27, goals:2, assists:1},], Titles:"", WC:""},
{name:"Fabinho", Country:"BRA", Position:"DF,CC",Teams: [{ club:"es Real Madrid", matches:1, goals:0, assists:1},{ club:"fr Monaco", matches:211, goals:26, assists:11},], Titles:"2022ChampionsWin, 2019ChampionsWin,2020Premier", WC:"2022"},
{name:"Omar Mascarell", Country:"ESP", Position:"CC",Teams: [{ club:"es Real Madrid", matches:1, goals:0, assists:0},{ club:"es Mallorca", matches:21, goals:0, assists:0},], Titles:"", WC:""},
{name:"Esteban Granero", Country:"ESP", Position:"CC",Teams: [{ club:"es Real Madrid", matches:82, goals:4, assists:7},{ club:"es Getafe", matches:71, goals:13, assists:5},{ club:"es Espanyol", matches:78, goals:6, assists:5},], Titles:"", WC:""},
{name:"Nuri Şahin", Country:"TUR", Position:"CC",Teams: [{ club:"es Real Madrid", matches:8, goals:0, assists:0},{ club:"nl Feyenoord", matches:29, goals:6, assists:5},{ club:"de Leverkusen", matches:258, goals:24, assists:34},], Titles:"2013ChampionsFinal", WC:""},
{name:"Hamit Altıntop", Country:"TUR", Position:"DF,CC",Teams: [{ club:"es Real Madrid", matches:9, goals:1, assists:0},{ club:"de Bayern", matches:89, goals:10, assists:8},], Titles:"2010ChampionsFinal", WC:""},
{name:"Pedro Mendes", Country:"POR", Position:"DF",Teams: [{ club:"es Real Madrid", matches:1, goals:0, assists:0},{ club:"pt Sporting", matches:2, goals:0, assists:0},], Titles:"", WC:"2010"},
{name:"Emmanuel Adebayor", Country:"TOG", Position:"DL",Teams: [{ club:"es Real Madrid", matches:20, goals:7, assists:0},{ club:"fr Monaco", matches:101, goals:22, assists:10},{ club:"en Arsenal", matches:125, goals:54, assists:18},{ club:"en Man City", matches:38, goals:19, assists:3},{ club:"en Tottenham", matches:106, goals:40, assists:17},], Titles:"2004ChampionsFinal", WC:"2006"},
{name:"Ezequiel Garay", Country:"ARG", Position:"DF",Teams: [{ club:"es Real Madrid", matches:29, goals:1, assists:1},{ club:"es Valencia", matches:114, goals:6, assists:0},{ club:"pt Benfica", matches:113, goals:12, assists:0},], Titles:"2014WC02", WC:"2014"},
{name:"Pedro León", Country:"ESP", Position:"CC,DL",Teams: [{ club:"es Real Madrid", matches:10, goals:1, assists:1},{ club:"es Getafe", matches:176, goals:25, assists:31},], Titles:"", WC:""},
{name:"Sergio Canales", Country:"ESP", Position:"CC,DL",Teams: [{ club:"es Real Madrid", matches:12, goals:0, assists:1},{ club:"es Betis", matches:206, goals:39, assists:29},{ club:"es Valencia", matches:54, goals:5, assists:6},], Titles:"", WC:""},
{name:"Jerzy Dudek", Country:"POL", Position:"PO",Teams: [{ club:"es Real Madrid", matches:4, goals:0, assists:0},{ club:"nl Feyenoord", matches:63, goals:0, assists:0},], Titles:"2007ChampionsFinal, 2005ChampionsWin", WC:"2002"},
{name:"Mahamadou Diarra", Country:"MLI", Position:"CC",Teams: [{ club:"es Real Madrid", matches:111, goals:4, assists:2},{ club:"fr Lyon", matches:155, goals:11, assists:7},{ club:"fr Monaco", matches:9, goals:0, assists:0},], Titles:"", WC:""},
{name:"Fernando Gago", Country:"ARG", Position:"CC",Teams: [{ club:"es Real Madrid", matches:108, goals:1, assists:8},{ club:"es Valencia", matches:17, goals:0, assists:1},{ club:"it Roma", matches:30, goals:1, assists:3},], Titles:"2014WC02", WC:"2014"},
{name:"Pablo Sarabia", Country:"ESP", Position:"CC,DL",Teams: [{ club:"es Real Madrid", matches:1, goals:0, assists:0},{ club:"es Sevilla", matches:145, goals:36, assists:36},{ club:"es Getafe", matches:137, goals:13, assists:16},{ club:"fr ParisSG", matches:98, goals:22, assists:11},{ club:"pt Sporting", matches:37, goals:17, assists:6},], Titles:"2020ChampionsFinal", WC:"2022"},
{name:"Juankar", Country:"ESP", Position:"DF,CC,DL",Teams: [{ club:"es Real Madrid", matches:1, goals:0, assists:0},{ club:"es Malaga", matches:102, goals:4, assists:6},{ club:"es Betis", matches:48, goals:0, assists:5},], Titles:"", WC:""},
{name:"Tomás Mejías", Country:"ESP", Position:"PO",Teams: [{ club:"es Real Madrid", matches:1, goals:0, assists:0},], Titles:"", WC:""},
{name:"Álex Fernández", Country:"ESP", Position:"DF,CC",Teams: [{ club:"es Real Madrid", matches:1, goals:0, assists:0},{ club:"es Espanyol", matches:31, goals:0, assists:1},], Titles:"", WC:""},
{name:"Guti", Country:"ESP", Position:"CC,DL",Teams: [{ club:"es Real Madrid", matches:461, goals:60, assists:62},], Titles:"2002ChampionsWin, 2000ChampionsWin, 1998ChampionsWin", WC:""},
{name:"Raúl", Country:"ESP", Position:"DL",Teams: [{ club:"es Real Madrid", matches:559, goals:241, assists:70},], Titles:"2002ChampionsWin, 2000ChampionsWin, 1998ChampionsWin", WC:"2006, 2002, 1998"},



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


  const teamslog = [{
      tname: "Real Madrid",
      Logo: "https://upload.wikimedia.org/wikipedia/commons/7/70/RealMadrid.png"
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

  ];


  const countrypossible = ["HUN", "SVK", "AUS", "SVN", "UKR", "MLI", "BIH", "AUT", "JPN", "RUS", "PAR", "CHI", "MEX", "CZE", "ALG", "WAL", "POL", "SCO", "SWE", "GHA", "ROU", "NOR", "GRE", "MAR", "SUI", "USA", "IRL", "DEN", "TUR", "CMR", "COL", "NGA", "CIV", "SEN", "CRO", "BEL", "SRB", "URU", "NED", "ARG", "GER", "POR", "BRA", "FRA", "ENG", "ITA", "ESP",



  ]

  const WCpossible = ["Played WC 2022", "Played WC 2018", "Played WC 2014", "Played WC 2010", "Played WC 2006", "Played WC 2002"]
  const Wonpossible = [
    "WC01", "WC02",
    "Premier", "ChampionsWin"
  ]

  const Positionpossible = ["PO", "DF", "CC", "DL"]



  function createGrid() {
  // Create a new element for the puzzle of the day text
// Create a new element for the puzzle of the day text

  
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        createGridCell(row, col);
      }
    }
  }


  function createGridCell(row, col) {
  
  
  
    const cell = document.createElement("div");
    if (row > 0 && col > 0) {
      cell.classList.add("grid-cell");
      cell.dataset.row = row;
      cell.dataset.col = col;
      cell.addEventListener('click', () => {
        if (!isModalOpen() && cell.textContent === '') {
          showModal(cell);
        }
      });
    }

    if ((row === 0 && col === 0)) {
      cell.classList.add("grid-cell2");
      cell.style.border = 'none';
    }

    if ((row === 0 && col === 1) || (row === 0 && col === 2) || (row === 0 && col === 3)) {
      cell.classList.add("grid-cell2");
      const img = document.createElement("img");

      if (puzzle1[0].pcolumn[col - 1].includes("Played WC")) {

        cell.textContent = puzzle1[0].pcolumn[col - 1];
        cell.style.fontFamily = 'Strait';
        cell.style.fontWeight = 'bold'; // Make the text bolder
        cell.style.fontSize = '0.8em';

      } else if (puzzle1[0].pcolumn[col - 1].includes("Premier")) {
        cell.innerHTML = ' Won:<br>Premier League';
        cell.style.fontFamily = 'Strait';
        cell.style.fontWeight = 'bold'; // Make the text bolder
        cell.style.fontSize = '0.8em';
      } else if (puzzle1[0].pcolumn[col - 1].includes("ChampionsWin")) {
        cell.innerHTML = ' Won:<br>Champions League';
        cell.style.fontFamily = 'Strait';
        cell.style.fontWeight = 'bold'; // Make the text bolder
        cell.style.fontSize = '0.8em';


      } else if (puzzle1[0].pcolumn[col - 1].includes("WC01")) {
        //img.src = "https://i.ibb.co/prgP9Tp/wwc2.jpg"
        //img.style.width = "2000px"; // Adjust the width as needed
        // img.style.height = "auto"; // Adjust the height as needed
        //  img.style.borderRadius = "10%";
        //   img.style.display = "block"; // Set display to block to apply margin auto
        //  img.style.margin = "auto"; // Center the image horizontally
        // cell.style.width = "100%";
        //   cell.style.height = "80%";
        //    cell.appendChild(img);


        cell.innerHTML = ' Won:<br>World Cup ';
        cell.style.fontFamily = 'Strait';
        cell.style.fontWeight = 'bold'; // Make the text bolder
        cell.style.fontSize = '0.8em';




        // cell.textContent = ' Won World Cup ';
      } else if (puzzle1[0].pcolumn[col - 1].includes("WC02")) {
        cell.textContent = ' World Cup 2nd place ';
        cell.style.fontFamily = 'Strait';
        cell.style.fontWeight = 'bold'; // Make the text bolder
        cell.style.fontSize = '0.8em';

      } else if (puzzle1[0].pcolumn[col - 1] === "PO") {
        img.src = "https://ibb.co/5LtjQ2W"
        cell.appendChild(img);

      } else if (puzzle1[0].pcolumn[col - 1].length === 2) {
        cell.textContent = puzzle1[0].pcolumn[col - 1];

      } else if (puzzle1[0].pcolumn[col - 1].length === 3) {
        img.src = countries.find(item => item.cname === puzzle1[0].pcolumn[col - 1]).Flag;
        cell.appendChild(img);

      } else {

        img.src = teamslog.find(item => item.tname === puzzle1[0].pcolumn[col - 1]).Logo;
        cell.appendChild(img);

      }

      cell.style.border = 'none';


    }


    if ((row === 1 && col === 0) || (row === 2 && col === 0) || (row === 3 && col === 0)) {
      cell.classList.add("grid-cell2");
      const img = document.createElement("img");


      if (puzzle1[0].prow[row - 1].includes("Played WC")) {

        cell.textContent = puzzle1[0].prow[row - 1];
        cell.style.fontFamily = 'Strait';
        cell.style.fontWeight = 'bold'; // Make the text bolder
        cell.style.fontSize = '0.8em';
      } else if (puzzle1[0].prow[row - 1].includes("Premier")) {
        cell.innerHTML = ' Won:<br>Premier League';
        cell.style.fontFamily = 'Strait';
        cell.style.fontWeight = 'bold'; // Make the text bolder
        cell.style.fontSize = '0.8em';

 } else if (puzzle1[0].prow[row - 1].includes("ChampionsWin")) {
        cell.innerHTML = ' Won:<br>Champions League';
        cell.style.fontFamily = 'Strait';
        cell.style.fontWeight = 'bold'; // Make the text bolder
        cell.style.fontSize = '0.8em';


      } else if (puzzle1[0].prow[row - 1].includes("WC01")) {
        //img.src = "https://i.ibb.co/prgP9Tp/wwc2.jpg"
        //img.style.width = "2000px"; // Adjust the width as needed
        // img.style.height = "auto"; // Adjust the height as needed
        //  img.style.borderRadius = "10%";
        //   img.style.display = "block"; // Set display to block to apply margin auto
        //  img.style.margin = "auto"; // Center the image horizontally
        // cell.style.width = "100%";
        //   cell.style.height = "80%";
        //    cell.appendChild(img);


        cell.innerHTML = ' Won:<br>World Cup ';
        cell.style.fontFamily = 'Strait';
        cell.style.fontWeight = 'bold'; // Make the text bolder
        cell.style.fontSize = '0.8em';

      } else if (puzzle1[0].prow[row - 1].includes("WC02")) {

        cell.textContent = ' World Cup 2nd place ';
        cell.style.fontFamily = 'Strait';
        cell.style.fontWeight = 'bold'; // Make the text bolder
        cell.style.fontSize = '0.8em';


      } else if (puzzle1[0].prow[row - 1].length === 2) {
        if (puzzle1[0].prow[row - 1] === "PO") {


          img.src = "https://i.ibb.co/hygjfhv/GK001.jpg"
          img.style.width = "40px"; // Adjust the width as needed
          img.style.height = "auto"; // Adjust the height as needed
          img.style.borderRadius = "10%";
          cell.appendChild(img);
        } else if (puzzle1[0].prow[row - 1] === "DF") {


          img.src = "https://i.ibb.co/0rWVdwj/df01.jpg"
          img.style.width = "40px"; // Adjust the width as needed
          img.style.height = "auto"; // Adjust the height as needed
          img.style.borderRadius = "10%";
          cell.appendChild(img);

          //cell.textContent = "Position: Defense"
        } else if (puzzle1[0].prow[row - 1] === "CC") {

          img.src = "https://i.ibb.co/B4nF3H5/MC01.jpg"
          img.style.width = "40px"; // Adjust the width as needed
          img.style.height = "auto"; // Adjust the height as needed
          img.style.borderRadius = "10%";
          cell.appendChild(img);


          //  cell.textContent = "Position: Midfielder"
        } else if (cell.textContent = puzzle1[0].prow[row - 1] === "DL") {
          cell.textContent = ""
          img.src = "https://i.ibb.co/CPjYcJ6/fw002.jpg"
          img.style.width = "40px"; // Adjust the width as needed
          img.style.height = "auto"; // Adjust the height as needed
          img.style.borderRadius = "10%";
          cell.appendChild(img);

          //cell.textContent = "Position: Forward"
        };

      } else if (puzzle1[0].prow[row - 1].length === 3) {
        img.src = countries.find(item => item.cname === puzzle1[0].prow[row - 1]).Flag;
        cell.appendChild(img);

      } else {

        img.src = teamslog.find(item => item.tname === puzzle1[0].prow[row - 1]).Logo;
        cell.appendChild(img);

      }

      cell.style.border = 'none';

    }




    gridContainer.appendChild(cell);
  }













  function showModal2(cell) {
    const condit = [puzzle1[0].prow[cell.dataset.row - 1], puzzle1[0].pcolumn[cell.dataset.col - 1]];
    const itemsWithBothTeams = chequeo(condit);

    const modal2 = document.getElementById('modal2');
    const modal2Content = document.getElementById("nameElement");

    // Clear previous content
    modal2Content.innerHTML = '';
    let playerCount = 0;

    // Iterate over each item and limit to 15 players
    for (const item of itemsWithBothTeams) {
      if (playerCount >= 15) {
        break; // Exit the loop if 15 players have been processed
      }

      const lio = document.createElement("li");
      const flagImg = `<img src="${countries.find(country => country.cname === item.Country).Flag}" alt="Flag2" style="width: 20px; height: auto; margin-right: 5px;">`;
      lio.innerHTML = `${flagImg} ${item.name} [${item.Position}]`;

      lio.addEventListener('click', function() {
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
    window.onclick = function(event) {
      if (event.target === modal2) {
        modal2.style.display = "none";
      }
    };
  }

  // Function to create grid cells



  function populateNameList(filter, cell) {
    const nameList = document.getElementById("nameList");
    nameList.innerHTML = "";

    let count = 0; // Counter for tracking the number of names added

    // Normalize the filter term
    const normalizedFilter = filter.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    names.filter(item => {
        // Normalize each name for comparison
        const normalizedName = item.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return normalizedName.includes(normalizedFilter);
      })
      .forEach(item => {
        if (count < 15) { // Limit to three names
          const li = document.createElement("li");
          const flagImg = `<img src="${countries.find(country => country.cname === item.Country).Flag}" alt="Flag of Germany" style="width: 20px; height: auto; margin-right: 5px;">`;

          li.innerHTML = `${flagImg} ${item.name} [${item.Position}]`;

          li.addEventListener('click', () => {
            // When a suggestion is clicked, populate the input field with the clicked name
            document.getElementById('textInput').value = item.name;
            // Clear the suggestion list
            nameList.innerHTML = "";

            if ((item.Teams.some(team => team.club.includes(puzzle1[0].prow[cell.dataset.row - 1])) || item.Position.includes(puzzle1[0].prow[cell.dataset.row - 1]) || item.Country.includes(puzzle1[0].prow[cell.dataset.row - 1]) || item.Titles.includes(puzzle1[0].prow[cell.dataset.row - 1]) || item.WC.includes(puzzle1[0].prow[cell.dataset.row - 1].substring(puzzle1[0].prow[cell.dataset.row - 1].length - 4)))

              &&
              (item.Teams.some(team => team.club.includes(puzzle1[0].pcolumn[cell.dataset.col - 1])) || item.Position.includes(puzzle1[0].pcolumn[cell.dataset.col - 1]) || item.Country.includes(puzzle1[0].pcolumn[cell.dataset.col - 1]) || item.Titles.includes(puzzle1[0].pcolumn[cell.dataset.col - 1]) || item.WC.includes(puzzle1[0].pcolumn[cell.dataset.col - 1].substring(puzzle1[0].pcolumn[cell.dataset.col - 1].length - 4)))) {
              cell.classList.remove("grid-cell");
              cell.classList.add("grid-cellsolved");
              addTextToCell(cell, `${item.name} `);
              answers.push(item.name)
            } else {
              addTexttoCellWRONG(cell, `${item.name}`);
            }
            closeModal();
            solved()
          });
          nameList.appendChild(li);
          cell.addEventListener('click', () => {
            if (cell.textContent.trim() !== '') {
              showModal2(cell);
            }
          });

          count++; // Increment the count of added names
        }
      });
  }

  // Function to handle search input
  function handleSearchInput(cell) {
    const searchInput = document.getElementById("textInput");
    const searchTerm = searchInput.value.trim(); // Trim to remove white spaces
    if (searchTerm.length > 0) {
      populateNameList(searchTerm, cell);
    } else {
      const nameList = document.getElementById("nameList");
      nameList.innerHTML = "";
    }
  }

  // Dropdown ends here
  // Modal starts here:

  function showModal(cell) {
    const modal = document.getElementById('modal');
    const textInput = document.getElementById('textInput');
    const headline = document.getElementById('modal-headline');
    const row = parseInt(cell.getAttribute('data-row'));
    const col = parseInt(cell.getAttribute('data-col'));
    document.getElementById("textInput").addEventListener("input", function() {
      handleSearchInput(cell);
    });
    textInput.value = ''; // Retrieve stored text for this cell

    rowcondition = puzzle1[0].prow[row - 1]
    colcondition = puzzle1[0].pcolumn[col - 1]
    if (rowcondition.length === 3) {

      rowcondition = countries.find(country => country.cname === rowcondition).cfullname
    }

    if (colcondition.length === 3) {

      colcondition = countries.find(country => country.cname === colcondition).cfullname
    }




    headline.textContent = (rowcondition + " / " + colcondition);
    headline.style.fontFamily = "'Roboto', sans-serif";
    headline.style.fontSize = '10px'

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
    textInput.addEventListener('keydown', function(event) {

      if (event.key === 'Escape') {
        closeModal();
      }

      window.addEventListener('click', function(event) {
        if (event.target === modal) {
          closeModal();
        }
      });
    });



    // Close modal when clicking outside the textbox
    modal.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  }

  function isModalOpen() {
    return document.querySelector('.modal').style.display === 'block';
  }

  // Function to add text to the cell
  function addTextToCell(cell, text) {
    if (cell.textContent == "") {
      cell.textContent = text; // Set the text content of the cell directly

    }
  }

  function addTexttoCellWRONG(cell, text) {
    if (cell.textContent == "") {
      cell.textContent = text; // Set the text content of the cell directly

      cell.classList.remove("grid-cell");
      cell.classList.add("grid-cellunsolved");
      answers.push("ERROR")

    }


  }

  // Function to close the modal
  function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  }




  // var puzzle1 = [{ prow: ["es FC Barcelona", "es Atletico Madrid", "eng Man Utd"], pcolumn: ["de Bayern Munich", "Played WC 2022", "Played WC 2018"] },];


  function analyzeCondition(conditn) {
    if (conditn.length === 3) {
      return "Country";
    } else if (conditn.includes("Played WC")) {
      return "WC";
    } else if (conditn.includes("WC") && conditn.length === 4) {
      return "Titles";
    } else if (conditn.includes("Premier") ||conditn.includes("ChampionsWin") ) {
      return "Titles";
    } else if (conditn.length === 2) {
      return "Position";
    } else {
      return "Teams";
    }
  }



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
      checkd = names.filter(item =>
        item[x].includes(condit[0]) &&
        item[y].includes(condit[1])
      )
    }

    return checkd
  }




  function RandomizePuzzle() {
    // Array to hold possible conditions
    var CONDITIONS = [
      "teams", "teams", "teams",
      "countries", "countries", "countries", "countries", "countries",
      "Position", "WC", "Won"
    ];
    var CONDITIONS2 = [

      "teams", "teams", "teams", "teams", "teams", "teams",
      "countries", "countries", "countries",
      "WC",
      "Won"
    ];

    var rpuzzle = [];

    // Fill the first three items with randomly chosen conditions
    for (var i = 0; i < 3; i++) {
      rpuzzle.push(CONDITIONS[Math.floor(Math.random() * CONDITIONS.length)]);
    }

    // Fill the rest of the items with "club"
    for (var i = 3; i < 6; i++) {
      rpuzzle.push(CONDITIONS2[Math.floor(Math.random() * CONDITIONS2.length)]);
    }

    var result = [];
    var maxIterations = 2000; // Maximum number of iterations
    var iterationCount = 0; // Initialize iteration counter

    do {
      result = rpuzzle.map(function(item) {
        if (item === 'teams') {
          return getRandomItem(teams);
        } else if (item === 'countries') {
          return getRandomItem(countrypossible);
        } else if (item === 'WC') {
          return getRandomItem(WCpossible);
        } else if (item === 'Won') {
          return getRandomItem(Wonpossible);
        } else if (item === 'Position') {
          return getRandomItem(Positionpossible);
        }
      });

      iterationCount++; // Increment iteration count

      // Break out of the loop if the maximum number of iterations is reached
      if (iterationCount >= maxIterations) {

        break;
      }
    } while (result.length !== new Set(result).size);


    rpuzzle = [{
      prow: [result[0], result[1], result[2]],
      pcolumn: [result[3], result[4], result[5]]
    }, ];
    return rpuzzle;
  }

  function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  // Call function to create grid
  
  
    let iterations = 0; // Initialize iteration counter

  do {
    puzzle1 = RandomizePuzzle();
    totality = [];

    for (let i = 0; i < puzzle1[0].prow.length; i++) {
      for (let j = 0; j < puzzle1[0].pcolumn.length; j++) {
        totality.push(chequeo([puzzle1[0].prow[i], puzzle1[0].pcolumn[j]]).length);
      }
    }

    iterations++; // Increment iteration counter

    if (iterations >= 10000) {
      console.log("Maximum iterations reached");
      break; // Exit the loop if maximum iterations reached
    }

  } while (Math.min(...totality) < 5);

var puzzleselection = [
    [
        { 
            prow: ["WC01", "Played WC 2022", "Barcelona"], 
            pcolumn: ["ARG", "FRA", "ParisSG"] 
        }],
        [{ 
            prow: ["Played WC 1998", "Real Madrid", "Juventus"], 
            pcolumn: ["BRA", "FRA", "WC01"] 
        }],
        [{prow:["BRA","URU","PO"], 
        pcolumn: ["Real Madrid","Valencia","ChampionsWin"]
        }],
[{prow:["Played WC 2010","Barcelona","Real Madrid"], pcolumn: ["ESP","NED","WC01"]},],

    
];


puzzle1= getRandomItem(puzzleselection)
  
  createGrid();
  
  
  
  



  // Function to call when the button is clicked
  function handleClick() {
    // Select all grid cells
    const gridCells = document.querySelectorAll('.grid-cell');

    // Loop through each grid cell and set its text content to "ERROR"
    gridCells.forEach(cell => {
      addTexttoCellWRONG(cell, "-")
      cell.addEventListener('click', () => {
        if (cell.textContent.trim() !== '') {
          showModal2(cell);
        }
      });

    });
    solved()

  }
  // Create the first button (left)
  var buttonreload = document.createElement('button');
  buttonreload.textContent = 'RELOAD';
  buttonreload.id = 'clickMeButton2';

  // Style the button for positioning and appearance
  buttonreload.style.position = 'fixed';
  buttonreload.style.bottom = '-16%'; // Adjust as needed
  buttonreload.style.left = '1vw'; // Adjust as needed
  buttonreload.style.marginLeft = '2px'; // Add some space before the edge
  buttonreload.classList.add('coolButton'); // Add a class for styling

  // Add event listener for the button
  buttonreload.addEventListener('click', function() {
    window.location.href = window.location.href;
  });

  // Append the first button to the body
  document.getElementById('gridContainer').appendChild(buttonreload);

  // Create the second button (right)
  var button = document.createElement('button');
  button.textContent = 'GIVE UP';
  button.id = 'clickMeButton';

  // Style the button for positioning and appearance
  button.style.position = 'fixed';
  button.style.bottom = '-16%'; // Adjust as needed
  button.style.right = '1vw'; // Adjust as needed
  button.style.marginRight = '2px'; // Add some space before the edge
  button.classList.add('coolButton'); // Add a class for styling

  // Append the second button to the body
  document.getElementById('gridContainer').appendChild(button);
  button.addEventListener('click', handleClick);

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

  function solved() {
    const gridCellssolved = document.querySelectorAll('.grid-cellsolved');
    const gridCellsunsolved = document.querySelectorAll('.grid-cellunsolved');

    if (answers.length === 9 && !answers.includes("ERROR")) {
      const addFluorescentBorder = (cells, delay) => {
        setTimeout(() => {
          cells.forEach(cell => {
            cell.classList.add('fluorescent-border');
          });
        }, delay);
      };

      if (gridCellssolved.length === 9) {
        addFluorescentBorder(gridCellssolved, 600);
      } else {
        addFluorescentBorder(gridCellsunsolved, 200);
        addFluorescentBorder(gridCellssolved, 10);
      }
    }
  }
});
