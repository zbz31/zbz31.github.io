document.addEventListener("DOMContentLoaded", function () {
  const gridContainer = document.getElementById("gridContainer");
  const openEls = document.querySelectorAll("[data-open]");
  const isVisible = "is-visible";
  for (const el of openEls) {
    el.addEventListener("click", function () {
      const modalId = this.dataset.open;
      document.getElementById(modalId).classList.add(isVisible);
    });
  }

  var answers = []

  const names = [
    { name: "Federico Valverde", Country: "URU", Position: "DF,CC,DL", Teams: [{ club: "es Real Madrid", matches: 238, goals: 16, assists: 19 }, { club: "es Deportivo", matches: 25, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Antonio Rüdiger", Country: "GER", Position: "DF", Teams: [{ club: "es Real Madrid", matches: 81, goals: 4, assists: 1 }, { club: "it Roma", matches: 72, goals: 2, assists: 2 }, { club: "de Stuttgart", matches: 71, goals: 2, assists: 1 }, { club: "en Chelsea", matches: 201, goals: 12, assists: 3 },], Titles: "", WC: "" },
    { name: "Rodrygo", Country: "BRA", Position: "CC,DL", Teams: [{ club: "es Real Madrid", matches: 199, goals: 49, assists: 35 },], Titles: "", WC: "" },
    { name: "Jude Bellingham", Country: "ENG", Position: "CC,DL", Teams: [{ club: "es Real Madrid", matches: 29, goals: 20, assists: 8 }, { club: "de Leverkusen", matches: 132, goals: 24, assists: 24 },], Titles: "", WC: "" },
    { name: "Dani Carvajal", Country: "ESP", Position: "DF", Teams: [{ club: "es Real Madrid", matches: 389, goals: 11, assists: 55 }, { club: "de Leverkusen", matches: 34, goals: 1, assists: 7 },], Titles: "", WC: "" },
    { name: "Toni Kroos", Country: "GER", Position: "CC", Teams: [{ club: "es Real Madrid", matches: 439, goals: 28, assists: 84 }, { club: "de Bayern", matches: 177, goals: 20, assists: 32 }, { club: "de Leverkusen", matches: 43, goals: 10, assists: 9 },], Titles: "", WC: "" },
    { name: "Nacho", Country: "ESP", Position: "DF", Teams: [{ club: "es Real Madrid", matches: 334, goals: 16, assists: 6 },], Titles: "", WC: "" },
    { name: "Vinicius Júnior", Country: "BRA", Position: "DL", Teams: [{ club: "es Real Madrid", matches: 245, goals: 69, assists: 56 },], Titles: "", WC: "" },
    { name: "Aurélien Tchouaméni", Country: "FRA", Position: "DF,CC", Teams: [{ club: "es Real Madrid", matches: 74, goals: 2, assists: 5 }, { club: "fr Monaco", matches: 91, goals: 7, assists: 7 },], Titles: "", WC: "" },
    { name: "Eduardo Camavinga", Country: "FRA", Position: "DF,CC", Teams: [{ club: "es Real Madrid", matches: 125, goals: 2, assists: 6 },], Titles: "", WC: "" },
    { name: "Kepa Arrizabalaga", Country: "ESP", Position: "PO", Teams: [{ club: "es Real Madrid", matches: 18, goals: 0, assists: 0 }, { club: "es Athletic", matches: 54, goals: 0, assists: 0 }, { club: "en Chelsea", matches: 162, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Andriy Lunin", Country: "UKR", Position: "PO", Teams: [{ club: "es Real Madrid", matches: 33, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Joselu", Country: "ESP", Position: "DL", Teams: [{ club: "es Real Madrid", matches: 36, goals: 15, assists: 3 }, { club: "es Alaves", matches: 112, goals: 36, assists: 9 }, { club: "es Deportivo", matches: 24, goals: 6, assists: 1 }, { club: "es Celta", matches: 26, goals: 4, assists: 2 }, { club: "es Espanyol", matches: 38, goals: 17, assists: 3 },], Titles: "", WC: "" },
    { name: "Ferland Mendy", Country: "FRA", Position: "DF,CC", Teams: [{ club: "es Real Madrid", matches: 156, goals: 6, assists: 8 }, { club: "fr Lyon", matches: 79, goals: 3, assists: 9 },], Titles: "", WC: "" },
    { name: "Luka Modrić", Country: "CRO", Position: "CC", Teams: [{ club: "es Real Madrid", matches: 491, goals: 37, assists: 74 }, { club: "en Tottenham", matches: 141, goals: 16, assists: 16 },], Titles: "", WC: "" },
    { name: "David Alaba", Country: "AUT", Position: "DF,CC", Teams: [{ club: "es Real Madrid", matches: 100, goals: 5, assists: 9 }, { club: "de Bayern", matches: 407, goals: 33, assists: 45 },], Titles: "", WC: "" },
    { name: "Fran Garcia", Country: "ESP", Position: "DF", Teams: [{ club: "es Real Madrid", matches: 25, goals: 0, assists: 6 },], Titles: "", WC: "" },
    { name: "Brahim Díaz", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Real Madrid", matches: 50, goals: 10, assists: 5 }, { club: "it Milan", matches: 122, goals: 18, assists: 15 }, { club: "en Man City", matches: 15, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Lucas Vázquez", Country: "ESP", Position: "DF,CC,DL", Teams: [{ club: "es Real Madrid", matches: 330, goals: 34, assists: 44 }, { club: "es Espanyol", matches: 39, goals: 4, assists: 6 },], Titles: "", WC: "" },
    { name: "Dani Ceballos", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Real Madrid", matches: 136, goals: 7, assists: 10 }, { club: "es Betis", matches: 105, goals: 7, assists: 7 }, { club: "en Arsenal", matches: 77, goals: 2, assists: 5 },], Titles: "", WC: "" },
    { name: "Nicolás Paz", Country: "ARG", Position: "CC", Teams: [{ club: "es Real Madrid", matches: 8, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Arda Güler", Country: "TUR", Position: "CC", Teams: [{ club: "es Real Madrid", matches: 5, goals: 0, assists: 0 },], Titles: "", WC: "" },


    { name: "Éder Militão", Country: "BRA", Position: "DF", Teams: [{ club: "es Real Madrid", matches: 143, goals: 11, assists: 3 }, { club: "pt Porto", matches: 38, goals: 5, assists: 2 },], Titles: "", WC: "" },
    { name: "Mario Martín", Country: "ESP", Position: "CC", Teams: [{ club: "es Real Madrid", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Gonzalo García", Country: "ESP", Position: "CC", Teams: [{ club: "es Real Madrid", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Álvaro Muñoz", Country: "URU", Position: "DL", Teams: [{ club: "es Real Madrid", matches: 9, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Thibaut Courtois", Country: "BEL", Position: "PO", Teams: [{ club: "es Real Madrid", matches: 228, goals: 0, assists: 0 }, { club: "es Atletico", matches: 137, goals: 0, assists: 0 }, { club: "en Chelsea", matches: 154, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Karim Benzema", Country: "FRA", Position: "DL", Teams: [{ club: "es Real Madrid", matches: 606, goals: 335, assists: 138 }, { club: "fr Lyon", matches: 131, goals: 55, assists: 15 },], Titles: "", WC: "" },
    { name: "Marco Asensio", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Real Madrid", matches: 283, goals: 61, assists: 29 }, { club: "es Mallorca", matches: 56, goals: 7, assists: 9 }, { club: "es Espanyol", matches: 37, goals: 4, assists: 10 }, { club: "fr PSG", matches: 17, goals: 5, assists: 4 },], Titles: "", WC: "" },
    { name: "Eden Hazard", Country: "BEL", Position: "CC,DL", Teams: [{ club: "es Real Madrid", matches: 76, goals: 7, assists: 9 }, { club: "en Chelsea", matches: 332, goals: 106, assists: 75 },], Titles: "", WC: "" },
    { name: "Mariano", Country: "DOM", Position: "CC,DL", Teams: [{ club: "es Real Madrid", matches: 83, goals: 12, assists: 2 }, { club: "es Sevilla", matches: 10, goals: 0, assists: 0 }, { club: "fr Lyon", matches: 48, goals: 21, assists: 5 },], Titles: "", WC: "" },
    { name: "Casemiro", Country: "BRA", Position: "CC", Teams: [{ club: "es Real Madrid", matches: 323, goals: 31, assists: 24 }, { club: "pt Porto", matches: 36, goals: 4, assists: 4 }, { club: "en Man Utd", matches: 69, goals: 11, assists: 8 },], Titles: "", WC: "" },
    { name: "Álvaro Odriozola", Country: "ESP", Position: "DF", Teams: [{ club: "es Real Madrid", matches: 48, goals: 3, assists: 8 }, { club: "de Bayern", matches: 5, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Jesús Vallejo", Country: "ESP", Position: "DF", Teams: [{ club: "es Real Madrid", matches: 30, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Sergio Arribas", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Real Madrid", matches: 13, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Marcelo", Country: "BRA", Position: "DF,CC", Teams: [{ club: "es Real Madrid", matches: 512, goals: 38, assists: 83 }, { club: "gr Olympiakos", matches: 8, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Luka Jović", Country: "SRB", Position: "CC,DL", Teams: [{ club: "es Real Madrid", matches: 51, goals: 3, assists: 5 }, { club: "it Milan", matches: 22, goals: 8, assists: 1 }, { club: "pt Benfica", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Isco", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Real Madrid", matches: 337, goals: 52, assists: 50 }, { club: "es Malaga", matches: 77, goals: 17, assists: 9 }, { club: "es Sevilla", matches: 19, goals: 1, assists: 3 }, { club: "es Betis", matches: 29, goals: 7, assists: 5 }, { club: "es Valencia", matches: 6, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Miguel Gutiérrez", Country: "ESP", Position: "DF", Teams: [{ club: "es Real Madrid", matches: 10, goals: 0, assists: 2 },], Titles: "", WC: "" },
    { name: "Gareth Bale", Country: "WAL", Position: "CC,DL", Teams: [{ club: "es Real Madrid", matches: 245, goals: 99, assists: 58 }, { club: "en Tottenham", matches: 208, goals: 66, assists: 30 },], Titles: "", WC: "" },
    { name: "Peter González", Country: "DOM", Position: "DF,CC,DL", Teams: [{ club: "es Real Madrid", matches: 3, goals: 0, assists: 0 }, { club: "es Valencia", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Mario Gila", Country: "ESP", Position: "DF", Teams: [{ club: "es Real Madrid", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },


    { name: "Raphaël Varane", Country: "FRA", Position: "DF,CC", Teams: [{ club: "es Real Madrid", matches: 340, goals: 14, assists: 7 }, { club: "en Man Utd", matches: 87, goals: 2, assists: 1 },], Titles: "", WC: "" },
    { name: "Sergio Ramos", Country: "ESP", Position: "DF", Teams: [{ club: "es Real Madrid", matches: 622, goals: 94, assists: 30 }, { club: "es Sevilla", matches: 68, goals: 8, assists: 4 }, { club: "fr PSG", matches: 58, goals: 6, assists: 1 },], Titles: "", WC: "" },
    { name: "Martin Ødegaard", Country: "NOR", Position: "CC,DL", Teams: [{ club: "es Real Madrid", matches: 11, goals: 0, assists: 0 }, { club: "en Arsenal", matches: 138, goals: 32, assists: 20 },], Titles: "", WC: "" },
    { name: "Víctor Chust", Country: "ESP", Position: "DF", Teams: [{ club: "es Real Madrid", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Marvin", Country: "ESP", Position: "DL", Teams: [{ club: "es Real Madrid", matches: 4, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Hugo Duro", Country: "ESP", Position: "DF,CC,DL", Teams: [{ club: "es Real Madrid", matches: 3, goals: 0, assists: 0 }, { club: "es Getafe", matches: 32, goals: 1, assists: 1 }, { club: "es Valencia", matches: 97, goals: 22, assists: 5 },], Titles: "", WC: "" },
    { name: "Borja Mayoral", Country: "ESP", Position: "DF,DL", Teams: [{ club: "es Real Madrid", matches: 33, goals: 7, assists: 2 }, { club: "es Getafe", matches: 85, goals: 32, assists: 4 }, { club: "it Roma", matches: 55, goals: 18, assists: 7 }, { club: "de Wolfsburg", matches: 21, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Alphonse Areola", Country: "FRA", Position: "PO", Teams: [{ club: "es Real Madrid", matches: 9, goals: 0, assists: 0 }, { club: "es Villarreal", matches: 37, goals: 0, assists: 0 }, { club: "fr PSG", matches: 105, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "James Rodríguez", Country: "COL", Position: "CC,DL", Teams: [{ club: "es Real Madrid", matches: 121, goals: 36, assists: 35 }, { club: "fr Monaco", matches: 34, goals: 9, assists: 13 }, { club: "pt Porto", matches: 90, goals: 28, assists: 31 }, { club: "de Bayern", matches: 67, goals: 15, assists: 19 }, { club: "gr Olympiakos", matches: 20, goals: 5, assists: 6 },], Titles: "", WC: "" },
    { name: "Keylor Navas", Country: "CRC", Position: "PO", Teams: [{ club: "es Real Madrid", matches: 158, goals: 0, assists: 0 }, { club: "fr PSG", matches: 111, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Sergio Reguilón", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Real Madrid", matches: 22, goals: 0, assists: 3 }, { club: "es Sevilla", matches: 37, goals: 3, assists: 5 }, { club: "es Atletico", matches: 12, goals: 0, assists: 0 }, { club: "en Tottenham", matches: 66, goals: 2, assists: 8 }, { club: "en Man Utd", matches: 12, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Marcos Llorente", Country: "ESP", Position: "DF,CC,DL", Teams: [{ club: "es Real Madrid", matches: 37, goals: 1, assists: 0 }, { club: "es Alaves", matches: 38, goals: 0, assists: 2 }, { club: "es Atletico", matches: 186, goals: 27, assists: 26 },], Titles: "", WC: "" },
    { name: "Javi Sánchez", Country: "ESP", Position: "DF", Teams: [{ club: "es Real Madrid", matches: 5, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Luca Zidane", Country: "FRA", Position: "PO", Teams: [{ club: "es Real Madrid", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Cristo González", Country: "ESP", Position: "DL", Teams: [{ club: "es Real Madrid", matches: 4, goals: 1, assists: 0 },], Titles: "", WC: "" },

    { name: "Cristiano Ronaldo", Country: "POR", Position: "CC,DL", Teams: [{ club: "es Real Madrid", matches: 400, goals: 421, assists: 113 }, { club: "it Juventus", matches: 134, goals: 101, assists: 20 }, { club: "pt Sporting", matches: 27, goals: 3, assists: 3 }, { club: "en Man Utd", matches: 302, goals: 126, assists: 49 },], Titles: "", WC: "" },
    { name: "Mateo Kovačić", Country: "CRO", Position: "CC,DL", Teams: [{ club: "es Real Madrid", matches: 107, goals: 3, assists: 7 }, { club: "it Inter", matches: 91, goals: 5, assists: 10 }, { club: "en Chelsea", matches: 219, goals: 6, assists: 14 }, { club: "en Man City", matches: 27, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Theo Hernández", Country: "FRA", Position: "DF", Teams: [{ club: "es Real Madrid", matches: 23, goals: 0, assists: 1 }, { club: "es Alaves", matches: 38, goals: 2, assists: 3 }, { club: "it Milan", matches: 196, goals: 28, assists: 30 },], Titles: "", WC: "" },
    { name: "Kiko Casilla", Country: "ESP", Position: "PO", Teams: [{ club: "es Real Madrid", matches: 43, goals: 0, assists: 1 }, { club: "es Getafe", matches: 2, goals: 0, assists: 0 }, { club: "es Espanyol", matches: 115, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Achraf Hakimi", Country: "MAR", Position: "DF,CC", Teams: [{ club: "es Real Madrid", matches: 16, goals: 2, assists: 1 }, { club: "it Inter", matches: 45, goals: 7, assists: 9 }, { club: "fr PSG", matches: 105, goals: 13, assists: 16 }, { club: "de Leverkusen", matches: 73, goals: 12, assists: 17 },], Titles: "", WC: "" },
    { name: "Álvaro Tejero", Country: "ESP", Position: "DF", Teams: [{ club: "es Real Madrid", matches: 5, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Franchu Feuillassier", Country: "ARG", Position: "CC", Teams: [{ club: "es Real Madrid", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },


    { name: "Danilo", Country: "BRA", Position: "DF,CC", Teams: [{ club: "es Real Madrid", matches: 56, goals: 3, assists: 8 }, { club: "it Juventus", matches: 183, goals: 9, assists: 13 }, { club: "pt Porto", matches: 119, goals: 12, assists: 13 }, { club: "en Man City", matches: 60, goals: 4, assists: 4 },], Titles: "", WC: "" },
    { name: "Álvaro Morata", Country: "ESP", Position: "DL", Teams: [{ club: "es Real Madrid", matches: 84, goals: 31, assists: 10 }, { club: "es Atletico", matches: 140, goals: 56, assists: 10 }, { club: "it Juventus", matches: 184, goals: 59, assists: 30 }, { club: "en Chelsea", matches: 72, goals: 24, assists: 6 },], Titles: "", WC: "" },
    { name: "Pepe", Country: "POR", Position: "DF,CC", Teams: [{ club: "es Real Madrid", matches: 305, goals: 14, assists: 12 }, { club: "pt Porto", matches: 242, goals: 17, assists: 6 },], Titles: "", WC: "" },
    { name: "Fábio Coentrão", Country: "POR", Position: "DF,CC", Teams: [{ club: "es Real Madrid", matches: 89, goals: 1, assists: 7 }, { club: "fr Monaco", matches: 18, goals: 3, assists: 2 }, { club: "pt Sporting", matches: 34, goals: 1, assists: 3 }, { club: "pt Benfica", matches: 77, goals: 5, assists: 10 },], Titles: "", WC: "" },


    { name: "Jesé", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Real Madrid", matches: 84, goals: 15, assists: 12 }, { club: "es Betis", matches: 18, goals: 2, assists: 1 }, { club: "fr PSG", matches: 18, goals: 2, assists: 0 }, { club: "pt Sporting", matches: 14, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Álvaro Arbeloa", Country: "ESP", Position: "DF", Teams: [{ club: "es Real Madrid", matches: 206, goals: 6, assists: 11 }, { club: "es Deportivo", matches: 20, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Denis Cheryshev", Country: "RUS", Position: "DF,CC,DL", Teams: [{ club: "es Real Madrid", matches: 6, goals: 1, assists: 1 }, { club: "es Villarreal", matches: 89, goals: 11, assists: 12 }, { club: "es Sevilla", matches: 5, goals: 0, assists: 0 }, { club: "es Valencia", matches: 122, goals: 11, assists: 11 },], Titles: "", WC: "" },

    { name: "Iker Casillas", Country: "ESP", Position: "PO", Teams: [{ club: "es Real Madrid", matches: 661, goals: 0, assists: 0 }, { club: "pt Porto", matches: 145, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Asier Illarramendi", Country: "ESP", Position: "CC", Teams: [{ club: "es Real Madrid", matches: 80, goals: 2, assists: 1 },], Titles: "", WC: "" },
    { name: "Javier Hernández", Country: "MEX", Position: "DL", Teams: [{ club: "es Real Madrid", matches: 33, goals: 9, assists: 4 }, { club: "es Sevilla", matches: 13, goals: 3, assists: 0 }, { club: "de Leverkusen", matches: 76, goals: 39, assists: 8 }, { club: "en Man Utd", matches: 131, goals: 46, assists: 10 },], Titles: "", WC: "" },
    { name: "Sami Khedira", Country: "GER", Position: "CC", Teams: [{ club: "es Real Madrid", matches: 139, goals: 7, assists: 9 }, { club: "it Juventus", matches: 145, goals: 21, assists: 14 }, { club: "de Stuttgart", matches: 114, goals: 15, assists: 13 },], Titles: "", WC: "" },
    { name: "Lucas Silva", Country: "BRA", Position: "CC", Teams: [{ club: "es Real Madrid", matches: 9, goals: 0, assists: 0 }, { club: "fr Marseille", matches: 31, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Álvaro Medrán", Country: "ESP", Position: "CC", Teams: [{ club: "es Real Madrid", matches: 5, goals: 1, assists: 0 }, { club: "es Alaves", matches: 21, goals: 2, assists: 2 }, { club: "es Getafe", matches: 20, goals: 2, assists: 1 }, { club: "es Valencia", matches: 21, goals: 3, assists: 0 },], Titles: "", WC: "" },

    { name: "Diego Llorente", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Real Madrid", matches: 3, goals: 0, assists: 0 }, { club: "es Malaga", matches: 27, goals: 2, assists: 0 }, { club: "it Roma", matches: 42, goals: 0, assists: 2 },], Titles: "", WC: "" },


    { name: "Diego López", Country: "ESP", Position: "PO", Teams: [{ club: "es Real Madrid", matches: 63, goals: 0, assists: 0 }, { club: "es Villarreal", matches: 215, goals: 0, assists: 0 }, { club: "es Sevilla", matches: 8, goals: 0, assists: 0 }, { club: "es Espanyol", matches: 207, goals: 0, assists: 0 }, { club: "it Milan", matches: 37, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Ángel Di María", Country: "ARG", Position: "CC,DL", Teams: [{ club: "es Real Madrid", matches: 163, goals: 30, assists: 64 }, { club: "it Juventus", matches: 40, goals: 8, assists: 7 }, { club: "fr PSG", matches: 293, goals: 91, assists: 110 }, { club: "pt Benfica", matches: 129, goals: 22, assists: 30 }, { club: "en Man Utd", matches: 32, goals: 4, assists: 11 },], Titles: "", WC: "" },
    { name: "Xabi Alonso", Country: "ESP", Position: "CC", Teams: [{ club: "es Real Madrid", matches: 205, goals: 4, assists: 23 }, { club: "de Bayern", matches: 117, goals: 9, assists: 12 },], Titles: "", WC: "" },
    { name: "Mesut Özil", Country: "GER", Position: "CC,DL", Teams: [{ club: "es Real Madrid", matches: 136, goals: 23, assists: 60 }, { club: "en Arsenal", matches: 247, goals: 43, assists: 70 },], Titles: "", WC: "" },

    { name: "Gonzalo Higuaín", Country: "ARG", Position: "CC,DL", Teams: [{ club: "es Real Madrid", matches: 238, goals: 115, assists: 38 }, { club: "it Milan", matches: 22, goals: 8, assists: 2 }, { club: "it Juventus", matches: 149, goals: 66, assists: 17 }, { club: "it Napoli", matches: 138, goals: 86, assists: 25 }, { club: "en Chelsea", matches: 18, goals: 5, assists: 0 },], Titles: "", WC: "" },
    { name: "Michael Essien", Country: "GHA", Position: "DF,CC", Teams: [{ club: "es Real Madrid", matches: 28, goals: 2, assists: 1 }, { club: "it Milan", matches: 22, goals: 0, assists: 0 }, { club: "fr Lyon", matches: 89, goals: 12, assists: 2 }, { club: "en Chelsea", matches: 217, goals: 23, assists: 16 },], Titles: "", WC: "" },
    { name: "José Callejón", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Real Madrid", matches: 64, goals: 15, assists: 3 }, { club: "es Espanyol", matches: 97, goals: 10, assists: 8 }, { club: "it Napoli", matches: 339, goals: 78, assists: 71 },], Titles: "", WC: "" },
    { name: "Raúl Albiol", Country: "ESP", Position: "DF", Teams: [{ club: "es Real Madrid", matches: 102, goals: 2, assists: 0 }, { club: "es Villarreal", matches: 178, goals: 4, assists: 0 }, { club: "es Getafe", matches: 17, goals: 1, assists: 0 }, { club: "es Valencia", matches: 154, goals: 6, assists: 2 }, { club: "it Napoli", matches: 226, goals: 6, assists: 6 },], Titles: "", WC: "" },
    { name: "Kaká", Country: "BRA", Position: "CC,DL", Teams: [{ club: "es Real Madrid", matches: 109, goals: 28, assists: 26 }, { club: "it Milan", matches: 288, goals: 102, assists: 67 },], Titles: "", WC: "" },
    { name: "Ricardo Carvalho", Country: "POR", Position: "DF", Teams: [{ club: "es Real Madrid", matches: 62, goals: 3, assists: 2 }, { club: "fr Monaco", matches: 106, goals: 2, assists: 3 }, { club: "pt Porto", matches: 100, goals: 4, assists: 2 }, { club: "en Chelsea", matches: 182, goals: 9, assists: 6 },], Titles: "", WC: "" },
    { name: "Antonio Adán", Country: "ESP", Position: "PO", Teams: [{ club: "es Real Madrid", matches: 11, goals: 0, assists: 0 }, { club: "es Betis", matches: 165, goals: 0, assists: 2 }, { club: "es Atletico", matches: 7, goals: 0, assists: 0 }, { club: "pt Sporting", matches: 141, goals: 0, assists: 2 },], Titles: "", WC: "" },
    { name: "Lassana Diarra", Country: "FRA", Position: "CC", Teams: [{ club: "es Real Madrid", matches: 109, goals: 1, assists: 5 }, { club: "fr PSG", matches: 19, goals: 0, assists: 1 }, { club: "fr Marseille", matches: 44, goals: 1, assists: 1 }, { club: "en Arsenal", matches: 10, goals: 0, assists: 0 }, { club: "en Chelsea", matches: 20, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Jesús", Country: "ESP", Position: "PO", Teams: [{ club: "es Real Madrid", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "José Rodríguez", Country: "ESP", Position: "CC", Teams: [{ club: "es Real Madrid", matches: 2, goals: 0, assists: 0 }, { club: "es Malaga", matches: 6, goals: 0, assists: 0 }, { club: "es Deportivo", matches: 27, goals: 2, assists: 1 },], Titles: "", WC: "" },


    { name: "Esteban Granero", Country: "ESP", Position: "CC", Teams: [{ club: "es Real Madrid", matches: 82, goals: 4, assists: 7 }, { club: "es Getafe", matches: 71, goals: 13, assists: 5 }, { club: "es Espanyol", matches: 78, goals: 6, assists: 5 },], Titles: "", WC: "" },
    { name: "Nuri Şahin", Country: "TUR", Position: "CC", Teams: [{ club: "es Real Madrid", matches: 8, goals: 0, assists: 0 }, { club: "nl Feyenoord", matches: 29, goals: 6, assists: 5 }, { club: "de Leverkusen", matches: 258, goals: 24, assists: 34 },], Titles: "", WC: "" },
    { name: "Hamit Altıntop", Country: "TUR", Position: "DF,CC", Teams: [{ club: "es Real Madrid", matches: 9, goals: 1, assists: 0 }, { club: "de Bayern", matches: 89, goals: 10, assists: 8 },], Titles: "", WC: "" },

    { name: "Emmanuel Adebayor", Country: "TOG", Position: "DL", Teams: [{ club: "es Real Madrid", matches: 20, goals: 7, assists: 0 }, { club: "fr Monaco", matches: 101, goals: 22, assists: 10 }, { club: "en Arsenal", matches: 125, goals: 54, assists: 18 }, { club: "en Man City", matches: 38, goals: 19, assists: 3 }, { club: "en Tottenham", matches: 106, goals: 40, assists: 17 },], Titles: "", WC: "" },
    { name: "Ezequiel Garay", Country: "ARG", Position: "DF", Teams: [{ club: "es Real Madrid", matches: 29, goals: 1, assists: 1 }, { club: "es Valencia", matches: 114, goals: 6, assists: 0 }, { club: "pt Benfica", matches: 113, goals: 12, assists: 0 },], Titles: "", WC: "" },
    { name: "Pedro León", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Real Madrid", matches: 10, goals: 1, assists: 1 }, { club: "es Getafe", matches: 176, goals: 25, assists: 31 },], Titles: "", WC: "" },
    { name: "Sergio Canales", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Real Madrid", matches: 12, goals: 0, assists: 1 }, { club: "es Betis", matches: 206, goals: 39, assists: 29 }, { club: "es Valencia", matches: 54, goals: 5, assists: 6 },], Titles: "", WC: "" },
    { name: "Jerzy Dudek", Country: "POL", Position: "PO", Teams: [{ club: "es Real Madrid", matches: 4, goals: 0, assists: 0 }, { club: "nl Feyenoord", matches: 63, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Mahamadou Diarra", Country: "MLI", Position: "CC", Teams: [{ club: "es Real Madrid", matches: 111, goals: 4, assists: 2 }, { club: "fr Lyon", matches: 155, goals: 11, assists: 7 }, { club: "fr Monaco", matches: 9, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Fernando Gago", Country: "ARG", Position: "CC", Teams: [{ club: "es Real Madrid", matches: 108, goals: 1, assists: 8 }, { club: "es Valencia", matches: 17, goals: 0, assists: 1 }, { club: "it Roma", matches: 30, goals: 1, assists: 3 },], Titles: "", WC: "" },




    { name: "Guti", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Real Madrid", matches: 461, goals: 60, assists: 62 },], Titles: "", WC: "" },
    { name: "Raúl", Country: "ESP", Position: "DL", Teams: [{ club: "es Real Madrid", matches: 559, goals: 241, assists: 70 },], Titles: "", WC: "" },
    { name: "Rafael van der Vaart", Country: "NED", Position: "CC", Teams: [{ club: "es Real Madrid", matches: 68, goals: 11, assists: 10 }, { club: "es Betis", matches: 9, goals: 0, assists: 0 }, { club: "nl Ajax", matches: 141, goals: 59, assists: 25 }, { club: "en Tottenham", matches: 70, goals: 26, assists: 16 },], Titles: "", WC: "" },
    { name: "Royston Drenthe", Country: "NED", Position: "DF,CC", Teams: [{ club: "es Real Madrid", matches: 57, goals: 3, assists: 2 }, { club: "nl Feyenoord", matches: 33, goals: 0, assists: 2 },], Titles: "", WC: "" },
    { name: "Christoph Metzelder", Country: "GER", Position: "DF", Teams: [{ club: "es Real Madrid", matches: 27, goals: 0, assists: 0 }, { club: "de Leverkusen", matches: 146, goals: 2, assists: 6 },], Titles: "", WC: "" },
    { name: "Ruud van Nistelrooy", Country: "NED", Position: "DL", Teams: [{ club: "es Real Madrid", matches: 87, goals: 59, assists: 16 }, { club: "es Malaga", matches: 28, goals: 4, assists: 1 }, { club: "nl PSV", matches: 21, goals: 10, assists: 2 }, { club: "en Man Utd", matches: 194, goals: 130, assists: 26 },], Titles: "", WC: "" },



    { name: "Fabio Cannavaro", Country: "ITA", Position: "DF", Teams: [{ club: "es Real Madrid", matches: 113, goals: 0, assists: 1 }, { club: "it Inter", matches: 70, goals: 3, assists: 3 }, { club: "it Juventus", matches: 124, goals: 7, assists: 1 },], Titles: "", WC: "" },
    { name: "Gabriel Heinze", Country: "ARG", Position: "DF", Teams: [{ club: "es Real Madrid", matches: 55, goals: 3, assists: 1 }, { club: "it Roma", matches: 30, goals: 0, assists: 0 }, { club: "fr PSG", matches: 109, goals: 4, assists: 7 }, { club: "fr Marseille", matches: 73, goals: 10, assists: 2 }, { club: "en Man Utd", matches: 68, goals: 1, assists: 2 },], Titles: "", WC: "" },
    { name: "Arjen Robben", Country: "NED", Position: "CC,DL", Teams: [{ club: "es Real Madrid", matches: 61, goals: 12, assists: 9 }, { club: "nl PSV", matches: 68, goals: 20, assists: 19 }, { club: "de Bayern", matches: 287, goals: 127, assists: 69 }, { club: "en Chelsea", matches: 86, goals: 17, assists: 18 },], Titles: "", WC: "" },
    { name: "Wesley Sneijder", Country: "NED", Position: "CC", Teams: [{ club: "es Real Madrid", matches: 61, goals: 11, assists: 9 }, { club: "it Inter", matches: 101, goals: 19, assists: 24 }, { club: "nl Ajax", matches: 151, goals: 46, assists: 40 },], Titles: "", WC: "" },

    { name: "Miguel Torres", Country: "ESP", Position: "DF", Teams: [{ club: "es Real Madrid", matches: 59, goals: 0, assists: 2 }, { club: "es Malaga", matches: 75, goals: 0, assists: 3 }, { club: "es Getafe", matches: 106, goals: 1, assists: 1 }, { club: "gr Olympiakos", matches: 10, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Míchel Salgado", Country: "ESP", Position: "DF", Teams: [{ club: "es Real Madrid", matches: 331, goals: 5, assists: 18 }, { club: "es Celta", matches: 67, goals: 3, assists: 0 },], Titles: "", WC: "" },
    { name: "Javi García", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Real Madrid", matches: 23, goals: 0, assists: 2 }, { club: "es Betis", matches: 63, goals: 1, assists: 0 }, { club: "pt Benfica", matches: 107, goals: 9, assists: 5 }, { club: "en Man City", matches: 62, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Rubén de la Red", Country: "ESP", Position: "CC", Teams: [{ club: "es Real Madrid", matches: 21, goals: 1, assists: 1 }, { club: "es Getafe", matches: 42, goals: 4, assists: 4 },], Titles: "", WC: "" },
    { name: "Javier Saviola", Country: "ARG", Position: "DL", Teams: [{ club: "es Real Madrid", matches: 23, goals: 4, assists: 1 }, { club: "es Malaga", matches: 33, goals: 9, assists: 3 }, { club: "es Sevilla", matches: 41, goals: 15, assists: 2 }, { club: "es Barcelona", matches: 154, goals: 63, assists: 17 }, { club: "fr Monaco", matches: 36, goals: 12, assists: 5 }, { club: "pt Benfica", matches: 92, goals: 29, assists: 21 }, { club: "gr Olympiakos", matches: 31, goals: 14, assists: 4 },], Titles: "", WC: "" },

    { name: "Daniel Parejo", Country: "ESP", Position: "CC", Teams: [{ club: "es Real Madrid", matches: 5, goals: 0, assists: 0 }, { club: "es Villarreal", matches: 174, goals: 12, assists: 28 }, { club: "es Getafe", matches: 67, goals: 9, assists: 9 }, { club: "es Valencia", matches: 367, goals: 62, assists: 54 },], Titles: "", WC: "" },

    { name: "Julien Faubert", Country: "FRA", Position: "DF,DL", Teams: [{ club: "es Real Madrid", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Alberto Bueno", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Real Madrid", matches: 4, goals: 0, assists: 0 }, { club: "es Malaga", matches: 11, goals: 0, assists: 0 }, { club: "pt Porto", matches: 4, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Robinho", Country: "BRA", Position: "CC,DL", Teams: [{ club: "es Real Madrid", matches: 121, goals: 30, assists: 19 }, { club: "it Milan", matches: 132, goals: 29, assists: 23 }, { club: "en Man City", matches: 51, goals: 15, assists: 8 },], Titles: "", WC: "" },
    { name: "Júlio Baptista", Country: "BRA", Position: "CC,DL", Teams: [{ club: "es Real Madrid", matches: 66, goals: 12, assists: 3 }, { club: "es Malaga", matches: 33, goals: 13, assists: 1 }, { club: "es Sevilla", matches: 71, goals: 43, assists: 5 }, { club: "it Roma", matches: 71, goals: 14, assists: 2 }, { club: "en Arsenal", matches: 28, goals: 4, assists: 2 },], Titles: "", WC: "" },
    { name: "Roberto Soldado", Country: "ESP", Position: "DL", Teams: [{ club: "es Real Madrid", matches: 19, goals: 3, assists: 0 }, { club: "es Villarreal", matches: 55, goals: 12, assists: 16 }, { club: "es Getafe", matches: 60, goals: 29, assists: 4 }, { club: "es Valencia", matches: 128, goals: 76, assists: 17 }, { club: "en Tottenham", matches: 73, goals: 13, assists: 9 },], Titles: "", WC: "" },
    { name: "Javier Balboa", Country: "EQG", Position: "CC,DL", Teams: [{ club: "es Real Madrid", matches: 11, goals: 1, assists: 0 }, { club: "pt Benfica", matches: 13, goals: 0, assists: 1 },], Titles: "", WC: "" },

    { name: "Emerson", Country: "BRA", Position: "CC", Teams: [{ club: "es Real Madrid", matches: 34, goals: 1, assists: 4 }, { club: "it Milan", matches: 35, goals: 0, assists: 0 }, { club: "it Roma", matches: 136, goals: 18, assists: 10 }, { club: "it Juventus", matches: 85, goals: 5, assists: 5 }, { club: "de Leverkusen", matches: 100, goals: 15, assists: 10 },], Titles: "", WC: "" },
    { name: "Roberto Carlos", Country: "BRA", Position: "DF", Teams: [{ club: "es Real Madrid", matches: 440, goals: 59, assists: 62 },], Titles: "", WC: "" },
    { name: "Iván Helguera", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Real Madrid", matches: 307, goals: 34, assists: 11 }, { club: "es Valencia", matches: 34, goals: 1, assists: 0 }, { club: "es Espanyol", matches: 37, goals: 2, assists: 0 }, { club: "it Roma", matches: 9, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "David Beckham", Country: "ENG", Position: "CC", Teams: [{ club: "es Real Madrid", matches: 142, goals: 15, assists: 41 }, { club: "it Milan", matches: 33, goals: 2, assists: 6 }, { club: "fr PSG", matches: 12, goals: 0, assists: 2 }, { club: "en Man Utd", matches: 258, goals: 58, assists: 84 },], Titles: "", WC: "" },
    { name: "José Antonio Reyes", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Real Madrid", matches: 34, goals: 7, assists: 2 }, { club: "es Sevilla", matches: 233, goals: 38, assists: 38 }, { club: "es Espanyol", matches: 23, goals: 4, assists: 4 }, { club: "es Atletico", matches: 132, goals: 9, assists: 22 }, { club: "pt Benfica", matches: 29, goals: 5, assists: 0 }, { club: "en Arsenal", matches: 89, goals: 17, assists: 25 },], Titles: "", WC: "" },
    { name: "Álvaro Mejía", Country: "ESP", Position: "DF", Teams: [{ club: "es Real Madrid", matches: 45, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Antonio Cassano", Country: "ITA", Position: "DL", Teams: [{ club: "es Real Madrid", matches: 24, goals: 2, assists: 3 }, { club: "it Inter", matches: 36, goals: 8, assists: 11 }, { club: "it Milan", matches: 36, goals: 8, assists: 15 }, { club: "it Roma", matches: 145, goals: 49, assists: 23 },], Titles: "", WC: "" },
    { name: "Raúl Bravo", Country: "ESP", Position: "DF", Teams: [{ club: "es Real Madrid", matches: 100, goals: 4, assists: 2 }, { club: "gr Olympiakos", matches: 68, goals: 0, assists: 2 },], Titles: "", WC: "" },
    { name: "Ronaldo", Country: "BRA", Position: "DL", Teams: [{ club: "es Real Madrid", matches: 161, goals: 96, assists: 22 }, { club: "it Inter", matches: 90, goals: 56, assists: 5 }, { club: "it Milan", matches: 20, goals: 9, assists: 3 },], Titles: "", WC: "" },
    { name: "Cicinho", Country: "BRA", Position: "DF", Teams: [{ club: "es Real Madrid", matches: 28, goals: 2, assists: 3 }, { club: "es Villarreal", matches: 6, goals: 0, assists: 0 }, { club: "it Roma", matches: 78, goals: 3, assists: 6 },], Titles: "", WC: "" },
    { name: "Miguel Ángel Nieto", Country: "ESP", Position: "CC", Teams: [{ club: "es Real Madrid", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Zinédine Zidane", Country: "FRA", Position: "CC", Teams: [{ club: "es Real Madrid", matches: 200, goals: 46, assists: 46 }, { club: "it Juventus", matches: 151, goals: 22, assists: 20 },], Titles: "", WC: "" },
    { name: "Pablo García", Country: "URU", Position: "DF,CC", Teams: [{ club: "es Real Madrid", matches: 26, goals: 0, assists: 0 }, { club: "es Celta", matches: 19, goals: 0, assists: 1 }, { club: "es Atletico", matches: 2, goals: 0, assists: 0 }, { club: "it Milan", matches: 5, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Thomas Gravesen", Country: "DEN", Position: "CC", Teams: [{ club: "es Real Madrid", matches: 41, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Francisco Pavón", Country: "ESP", Position: "DF", Teams: [{ club: "es Real Madrid", matches: 140, goals: 2, assists: 2 },], Titles: "", WC: "" },
    { name: "Carlos Diogo", Country: "URU", Position: "DF,CC", Teams: [{ club: "es Real Madrid", matches: 17, goals: 0, assists: 0 }, { club: "gr Olympiakos", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Jonathan Woodgate", Country: "ENG", Position: "DF", Teams: [{ club: "es Real Madrid", matches: 12, goals: 1, assists: 0 }, { club: "en Tottenham", matches: 59, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "José Manuel Jurado", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Real Madrid", matches: 4, goals: 0, assists: 0 }, { club: "es Mallorca", matches: 35, goals: 9, assists: 7 }, { club: "es Espanyol", matches: 63, goals: 3, assists: 7 }, { club: "es Atletico", matches: 108, goals: 11, assists: 9 },], Titles: "", WC: "" },
    { name: "Walter Samuel", Country: "ARG", Position: "DF", Teams: [{ club: "es Real Madrid", matches: 36, goals: 2, assists: 2 }, { club: "it Inter", matches: 211, goals: 17, assists: 3 }, { club: "it Roma", matches: 160, goals: 12, assists: 2 },], Titles: "", WC: "" },
    { name: "Luís Figo", Country: "POR", Position: "CC,DL", Teams: [{ club: "es Real Madrid", matches: 219, goals: 52, assists: 69 }, { club: "es Barcelona", matches: 125, goals: 28, assists: 19 }, { club: "it Inter", matches: 126, goals: 10, assists: 28 },], Titles: "", WC: "" },
    { name: "Michael Owen", Country: "ENG", Position: "DL", Teams: [{ club: "es Real Madrid", matches: 41, goals: 14, assists: 3 }, { club: "en Man Utd", matches: 40, goals: 9, assists: 0 },], Titles: "", WC: "" },
    { name: "Santiago Solari", Country: "ARG", Position: "CC", Teams: [{ club: "es Real Madrid", matches: 179, goals: 17, assists: 11 }, { club: "es Atletico", matches: 54, goals: 7, assists: 4 }, { club: "it Inter", matches: 52, goals: 4, assists: 2 },], Titles: "", WC: "" },
    { name: "Albert Celades", Country: "ESP", Position: "CC", Teams: [{ club: "es Real Madrid", matches: 83, goals: 3, assists: 4 }, { club: "es Barcelona", matches: 60, goals: 2, assists: 0 }, { club: "es Celta", matches: 31, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Fernando Morientes", Country: "ESP", Position: "DL", Teams: [{ club: "es Real Madrid", matches: 240, goals: 89, assists: 14 }, { club: "es Valencia", matches: 87, goals: 29, assists: 3 }, { club: "fr Monaco", matches: 40, goals: 19, assists: 6 }, { club: "fr Marseille", matches: 17, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Borja Fernández", Country: "ESP", Position: "CC", Teams: [{ club: "es Real Madrid", matches: 27, goals: 0, assists: 0 }, { club: "es Mallorca", matches: 15, goals: 0, assists: 0 }, { club: "es Getafe", matches: 62, goals: 1, assists: 2 }, { club: "es Deportivo", matches: 22, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "César Sánchez", Country: "ESP", Position: "PO", Teams: [{ club: "es Real Madrid", matches: 35, goals: 0, assists: 0 }, { club: "es Villarreal", matches: 2, goals: 0, assists: 0 }, { club: "es Valencia", matches: 76, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Javier Portillo", Country: "ESP", Position: "DL", Teams: [{ club: "es Real Madrid", matches: 43, goals: 8, assists: 0 },], Titles: "", WC: "" },
    { name: "Miguel Palencia", Country: "ESP", Position: "DF", Teams: [{ club: "es Real Madrid", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Juanfran", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Real Madrid", matches: 6, goals: 0, assists: 1 }, { club: "es Espanyol", matches: 33, goals: 1, assists: 3 }, { club: "es Atletico", matches: 330, goals: 6, assists: 28 },], Titles: "", WC: "" },

    { name: "Esteban Cambiasso", Country: "ARG", Position: "CC", Teams: [{ club: "es Real Madrid", matches: 55, goals: 0, assists: 4 }, { club: "it Inter", matches: 385, goals: 47, assists: 29 }, { club: "gr Olympiakos", matches: 38, goals: 4, assists: 0 }, { club: "en Leicester", matches: 33, goals: 5, assists: 1 },], Titles: "", WC: "" },
    { name: "Antonio Núñez", Country: "ESP", Position: "CC", Teams: [{ club: "es Real Madrid", matches: 11, goals: 1, assists: 0 }, { club: "es Deportivo", matches: 22, goals: 0, assists: 3 }, { club: "es Celta", matches: 103, goals: 8, assists: 6 },], Titles: "", WC: "" },
    { name: "Rubén", Country: "ESP", Position: "DF", Teams: [{ club: "es Real Madrid", matches: 9, goals: 0, assists: 0 }, { club: "es Mallorca", matches: 31, goals: 3, assists: 0 }, { club: "es Celta", matches: 70, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Jordi López", Country: "ESP", Position: "CC", Teams: [{ club: "es Real Madrid", matches: 3, goals: 0, assists: 0 }, { club: "es Mallorca", matches: 24, goals: 0, assists: 0 }, { club: "es Sevilla", matches: 52, goals: 4, assists: 0 },], Titles: "", WC: "" },
    { name: "Óscar Miñambres", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Real Madrid", matches: 26, goals: 0, assists: 3 }, { club: "es Espanyol", matches: 5, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Claude Makélélé", Country: "FRA", Position: "CC", Teams: [{ club: "es Real Madrid", matches: 129, goals: 1, assists: 4 }, { club: "es Celta", matches: 86, goals: 5, assists: 1 }, { club: "fr PSG", matches: 106, goals: 1, assists: 4 }, { club: "fr Marseille", matches: 32, goals: 2, assists: 0 }, { club: "en Chelsea", matches: 193, goals: 2, assists: 6 },], Titles: "", WC: "" },
    { name: "Fernando Hierro", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Real Madrid", matches: 222, goals: 29, assists: 3 },], Titles: "", WC: "" },
    { name: "Flávio Conceição", Country: "BRA", Position: "CC", Teams: [{ club: "es Real Madrid", matches: 67, goals: 1, assists: 2 }, { club: "es Deportivo", matches: 92, goals: 9, assists: 3 }, { club: "de Leverkusen", matches: 15, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Steve McManaman", Country: "ENG", Position: "CC", Teams: [{ club: "es Real Madrid", matches: 133, goals: 13, assists: 13 }, { club: "en Man City", matches: 39, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Tote", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Real Madrid", matches: 9, goals: 1, assists: 0 }, { club: "es Malaga", matches: 9, goals: 0, assists: 0 }, { club: "es Betis", matches: 17, goals: 2, assists: 2 }, { club: "pt Benfica", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Aitor Karanka", Country: "ESP", Position: "DF", Teams: [{ club: "es Real Madrid", matches: 126, goals: 0, assists: 1 }, { club: "es Athletic", matches: 67, goals: 2, assists: 2 },], Titles: "", WC: "" },
    { name: "Pedro Munitis", Country: "ESP", Position: "DL", Teams: [{ club: "es Real Madrid", matches: 71, goals: 4, assists: 9 }, { club: "es Deportivo", matches: 96, goals: 5, assists: 15 },], Titles: "", WC: "" },
    { name: "Geremi", Country: "CMR", Position: "DF,CC", Teams: [{ club: "es Real Madrid", matches: 66, goals: 1, assists: 5 }, { club: "en Chelsea", matches: 88, goals: 4, assists: 5 },], Titles: "", WC: "" },
    { name: "Sávio", Country: "BRA", Position: "CC", Teams: [{ club: "es Real Madrid", matches: 137, goals: 26, assists: 20 },], Titles: "", WC: "" },
    { name: "Iván Campo", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Real Madrid", matches: 83, goals: 1, assists: 0 }, { club: "es Mallorca", matches: 33, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Valdo", Country: "CPV", Position: "CC,DL", Teams: [{ club: "es Real Madrid", matches: 3, goals: 0, assists: 0 }, { club: "es Malaga", matches: 19, goals: 2, assists: 1 }, { club: "es Espanyol", matches: 42, goals: 5, assists: 5 },], Titles: "", WC: "" },

    { name: "Carlos Aranda", Country: "ESP", Position: "DL", Teams: [{ club: "es Real Madrid", matches: 2, goals: 0, assists: 0 }, { club: "es Villarreal", matches: 8, goals: 1, assists: 0 }, { club: "es Sevilla", matches: 18, goals: 2, assists: 2 },], Titles: "", WC: "" },
    { name: "Elvir Baljić", Country: "BIH", Position: "CC,DL", Teams: [{ club: "es Real Madrid", matches: 17, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Manolo Sanchís", Country: "ESP", Position: "DF", Teams: [{ club: "es Real Madrid", matches: 108, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Alberto Rivera", Country: "ESP", Position: "CC", Teams: [{ club: "es Real Madrid", matches: 5, goals: 0, assists: 0 }, { club: "es Betis", matches: 117, goals: 2, assists: 2 }, { club: "fr Marseille", matches: 12, goals: 2, assists: 1 },], Titles: "", WC: "" },
    { name: "Fernando Redondo", Country: "ARG", Position: "CC", Teams: [{ club: "es Real Madrid", matches: 119, goals: 0, assists: 2 }, { club: "it Milan", matches: 21, goals: 0, assists: 2 },], Titles: "", WC: "" },
    { name: "Júlio César", Country: "BRA", Position: "DF", Teams: [{ club: "es Real Madrid", matches: 30, goals: 0, assists: 0 }, { club: "it Milan", matches: 4, goals: 0, assists: 0 }, { club: "pt Benfica", matches: 20, goals: 3, assists: 0 }, { club: "gr Olympiakos", matches: 55, goals: 11, assists: 1 },], Titles: "", WC: "" },
    { name: "Nicolas Anelka", Country: "FRA", Position: "DL", Teams: [{ club: "es Real Madrid", matches: 30, goals: 4, assists: 3 }, { club: "it Juventus", matches: 3, goals: 0, assists: 0 }, { club: "fr PSG", matches: 52, goals: 16, assists: 6 }, { club: "en Arsenal", matches: 68, goals: 24, assists: 11 }, { club: "en Chelsea", matches: 162, goals: 50, assists: 21 }, { club: "en Man City", matches: 93, goals: 40, assists: 11 },], Titles: "", WC: "" },
    { name: "Christian Karembeu", Country: "FRA", Position: "DF,CC", Teams: [{ club: "es Real Madrid", matches: 66, goals: 4, assists: 1 }, { club: "gr Olympiakos", matches: 86, goals: 3, assists: 7 },], Titles: "", WC: "" },
    { name: "Clarence Seedorf", Country: "NED", Position: "CC", Teams: [{ club: "es Real Madrid", matches: 108, goals: 12, assists: 4 }, { club: "it Inter", matches: 79, goals: 11, assists: 12 }, { club: "it Milan", matches: 394, goals: 54, assists: 52 },], Titles: "", WC: "" },
    { name: "Albano Bizzarri", Country: "ARG", Position: "PO", Teams: [{ club: "es Real Madrid", matches: 11, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Bodo Illgner", Country: "GER", Position: "PO", Teams: [{ club: "es Real Madrid", matches: 65, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Perica Ognjenović", Country: "SRB", Position: "DL", Teams: [{ club: "es Real Madrid", matches: 14, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Meca", Country: "ESP", Position: "DL", Teams: [{ club: "es Real Madrid", matches: 11, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Rolando Zárate", Country: "ARG", Position: "DL", Teams: [{ club: "es Real Madrid", matches: 6, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "David Aganzo", Country: "ESP", Position: "DL", Teams: [{ club: "es Real Madrid", matches: 5, goals: 0, assists: 0 }, { club: "es Alaves", matches: 30, goals: 11, assists: 0 }, { club: "es Espanyol", matches: 11, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Javier Dorado", Country: "ESP", Position: "DF", Teams: [{ club: "es Real Madrid", matches: 2, goals: 0, assists: 0 }, { club: "es Mallorca", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Christian Panucci", Country: "ITA", Position: "DF", Teams: [{ club: "es Real Madrid", matches: 69, goals: 4, assists: 0 }, { club: "it Inter", matches: 26, goals: 1, assists: 0 }, { club: "it Roma", matches: 278, goals: 27, assists: 14 }, { club: "fr Monaco", matches: 14, goals: 3, assists: 1 }, { club: "en Chelsea", matches: 10, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Predrag Mijatović", Country: "SRB", Position: "CC,DL", Teams: [{ club: "es Real Madrid", matches: 67, goals: 18, assists: 0 },], Titles: "", WC: "" },
    { name: "Robert Jarni", Country: "CRO", Position: "DF,DL", Teams: [{ club: "es Real Madrid", matches: 32, goals: 3, assists: 0 }, { club: "es Betis", matches: 28, goals: 6, assists: 0 },], Titles: "", WC: "" },
    { name: "Davor Šuker", Country: "CRO", Position: "DL", Teams: [{ club: "es Real Madrid", matches: 60, goals: 19, assists: 0 }, { club: "en Arsenal", matches: 35, goals: 10, assists: 3 },], Titles: "", WC: "" },
    { name: "Fernando Sanz", Country: "ESP", Position: "DF", Teams: [{ club: "es Real Madrid", matches: 20, goals: 0, assists: 0 }, { club: "es Malaga", matches: 213, goals: 6, assists: 2 },], Titles: "", WC: "" },
    { name: "Jaime", Country: "ESP", Position: "CC", Teams: [{ club: "es Real Madrid", matches: 57, goals: 0, assists: 0 }, { club: "es Deportivo", matches: 24, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Pedro Contreras", Country: "ESP", Position: "PO", Teams: [{ club: "es Real Madrid", matches: 4, goals: 0, assists: 0 }, { club: "es Malaga", matches: 156, goals: 0, assists: 0 }, { club: "es Betis", matches: 59, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Roberto Rojas", Country: "ESP", Position: "DF", Teams: [{ club: "es Real Madrid", matches: 5, goals: 0, assists: 0 }, { club: "es Malaga", matches: 95, goals: 0, assists: 3 },], Titles: "", WC: "" },


    { name: "Santiago Cañizares", Country: "ESP", Position: "PO", Teams: [{ club: "es Real Madrid", matches: 32, goals: 0, assists: 0 }, { club: "es Valencia", matches: 381, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "José Amavisca", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Real Madrid", matches: 32, goals: 0, assists: 0 }, { club: "es Deportivo", matches: 65, goals: 3, assists: 5 }, { club: "es Espanyol", matches: 22, goals: 2, assists: 2 },], Titles: "", WC: "" },
    { name: "Víctor Sánchez", Country: "ESP", Position: "CC", Teams: [{ club: "es Real Madrid", matches: 35, goals: 3, assists: 0 }, { club: "es Deportivo", matches: 259, goals: 34, assists: 54 },], Titles: "", WC: "" },
    { name: "Zé Roberto", Country: "BRA", Position: "DF,CC", Teams: [{ club: "es Real Madrid", matches: 10, goals: 1, assists: 0 }, { club: "de Bayern", matches: 217, goals: 17, assists: 49 }, { club: "de Leverkusen", matches: 142, goals: 18, assists: 30 },], Titles: "", WC: "" },
    { name: "Chendo", Country: "ESP", Position: "DF", Teams: [{ club: "es Real Madrid", matches: 5, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Dani García", Country: "ESP", Position: "DL", Teams: [{ club: "es Real Madrid", matches: 9, goals: 0, assists: 0 }, { club: "es Mallorca", matches: 36, goals: 12, assists: 0 }, { club: "es Barcelona", matches: 70, goals: 16, assists: 4 }, { club: "es Espanyol", matches: 26, goals: 5, assists: 4 }, { club: "gr Olympiakos", matches: 22, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Daniel Vivian", Country: "ESP", Position: "DF", Teams: [{ club: "es Athletic", matches: 91, goals: 3, assists: 2 },], Titles: "", WC: "" },
    { name: "Aitor Paredes", Country: "ESP", Position: "DF", Teams: [{ club: "es Athletic", matches: 45, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Unai Simón", Country: "ESP", Position: "PO", Teams: [{ club: "es Athletic", matches: 184, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Iñaki Williams", Country: "GHA", Position: "CC,DL", Teams: [{ club: "es Athletic", matches: 401, goals: 95, assists: 44 },], Titles: "", WC: "" },
    { name: "Oihan Sancet", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Athletic", matches: 147, goals: 23, assists: 15 },], Titles: "", WC: "" },
    { name: "Yuri Berchiche", Country: "ESP", Position: "DF,DL", Teams: [{ club: "es Athletic", matches: 185, goals: 12, assists: 10 }, { club: "fr PSG", matches: 32, goals: 2, assists: 6 },], Titles: "", WC: "" },
    { name: "Nico Williams", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Athletic", matches: 110, goals: 17, assists: 14 },], Titles: "", WC: "" },
    { name: "Gorka Guruzeta", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Athletic", matches: 72, goals: 17, assists: 5 },], Titles: "", WC: "" },
    { name: "Óscar de Marcos", Country: "ESP", Position: "DF,CC,DL", Teams: [{ club: "es Athletic", matches: 485, goals: 34, assists: 48 }, { club: "es Alaves", matches: 19, goals: 3, assists: 1 },], Titles: "", WC: "" },
    { name: "Iñigo Lekue", Country: "ESP", Position: "DF,CC,DL", Teams: [{ club: "es Athletic", matches: 224, goals: 4, assists: 9 },], Titles: "", WC: "" },
    { name: "Iñigo Ruiz de Galarreta", Country: "ESP", Position: "CC", Teams: [{ club: "es Athletic", matches: 28, goals: 1, assists: 3 }, { club: "es Mallorca", matches: 88, goals: 0, assists: 7 },], Titles: "", WC: "" },
    { name: "Mikel Vesga", Country: "ESP", Position: "CC", Teams: [{ club: "es Athletic", matches: 194, goals: 10, assists: 12 },], Titles: "", WC: "" },
    { name: "Álex Berenguer", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Athletic", matches: 154, goals: 27, assists: 13 },], Titles: "", WC: "" },
    { name: "Beñat Prados", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Athletic", matches: 20, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Ander Herrera", Country: "ESP", Position: "CC", Teams: [{ club: "es Athletic", matches: 150, goals: 9, assists: 19 }, { club: "fr PSG", matches: 95, goals: 6, assists: 6 }, { club: "en Man Utd", matches: 188, goals: 19, assists: 23 },], Titles: "", WC: "" },
    { name: "Iker Muniain", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Athletic", matches: 521, goals: 67, assists: 52 },], Titles: "", WC: "" },
    { name: "Asier Villalibre", Country: "ESP", Position: "DL", Teams: [{ club: "es Athletic", matches: 119, goals: 18, assists: 5 }, { club: "es Alaves", matches: 16, goals: 4, assists: 2 },], Titles: "", WC: "" },
    { name: "Unai Gómez", Country: "ESP", Position: "CC", Teams: [{ club: "es Athletic", matches: 22, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Julen Agirrezabala", Country: "ESP", Position: "PO", Teams: [{ club: "es Athletic", matches: 30, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Yeray Álvarez", Country: "ESP", Position: "DF", Teams: [{ club: "es Athletic", matches: 216, goals: 3, assists: 1 },], Titles: "", WC: "" },
    { name: "Dani García", Country: "ESP", Position: "CC", Teams: [{ club: "es Athletic", matches: 186, goals: 1, assists: 7 },], Titles: "", WC: "" },
    { name: "Adu Ares", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Athletic", matches: 22, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Imanol", Country: "ESP", Position: "DF", Teams: [{ club: "es Athletic", matches: 5, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Raúl García", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Athletic", matches: 347, goals: 81, assists: 30 }, { club: "es Atletico", matches: 279, goals: 37, assists: 20 },], Titles: "", WC: "" },
    { name: "Peru Nolaskoain", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Athletic", matches: 18, goals: 2, assists: 0 }, { club: "es Deportivo", matches: 28, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Mikel Jauregizar", Country: "ESP", Position: "CC", Teams: [{ club: "es Athletic", matches: 7, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Alex Padilla", Country: "ESP", Position: "PO", Teams: [{ club: "es Athletic", matches: 0, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Javi Martón", Country: "ESP", Position: "DL", Teams: [{ club: "es Athletic", matches: 0, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Hugo Rincón", Country: "ESP", Position: "DF", Teams: [{ club: "es Athletic", matches: 0, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Aingeru Olabarrieta", Country: "ESP", Position: "DL", Teams: [{ club: "es Athletic", matches: 0, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Iñigo Martínez", Country: "ESP", Position: "DF", Teams: [{ club: "es Athletic", matches: 175, goals: 8, assists: 4 }, { club: "es Barcelona", matches: 15, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Oier Zarraga", Country: "ESP", Position: "CC", Teams: [{ club: "es Athletic", matches: 72, goals: 2, assists: 1 },], Titles: "", WC: "" },
    { name: "Unai Vencedor Paris", Country: "ESP", Position: "CC", Teams: [{ club: "es Athletic", matches: 82, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Mikel Balenziaga", Country: "ESP", Position: "DF", Teams: [{ club: "es Athletic", matches: 304, goals: 1, assists: 9 },], Titles: "", WC: "" },
    { name: "Ander Capa", Country: "ESP", Position: "DF,DL", Teams: [{ club: "es Athletic", matches: 111, goals: 5, assists: 6 },], Titles: "", WC: "" },
    { name: "Jon Morcillo", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Athletic", matches: 53, goals: 2, assists: 3 },], Titles: "", WC: "" },
    { name: "Unai Núñez", Country: "ESP", Position: "DF", Teams: [{ club: "es Athletic", matches: 115, goals: 3, assists: 1 }, { club: "es Celta", matches: 67, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Alex Petxa", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Athletic", matches: 19, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Nicolás Serrano", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Athletic", matches: 17, goals: 1, assists: 0 },], Titles: "", WC: "" },

    { name: "Unai López", Country: "ESP", Position: "CC", Teams: [{ club: "es Athletic", matches: 91, goals: 4, assists: 4 },], Titles: "", WC: "" },
    { name: "Ibai Gómez", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Athletic", matches: 171, goals: 16, assists: 18 }, { club: "es Alaves", matches: 92, goals: 17, assists: 10 },], Titles: "", WC: "" },
    { name: "Jokin Ezkieta", Country: "ESP", Position: "PO", Teams: [{ club: "es Athletic", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Iñigo Córdoba", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Athletic", matches: 95, goals: 2, assists: 10 }, { club: "es Alaves", matches: 7, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Iñigo Vicente", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Athletic", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Kenan Kodro", Country: "BIH", Position: "CC,DL", Teams: [{ club: "es Athletic", matches: 26, goals: 3, assists: 0 },], Titles: "", WC: "" },

    { name: "Mikel San José", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Athletic", matches: 372, goals: 35, assists: 7 },], Titles: "", WC: "" },
    { name: "Beñat Etxebarria", Country: "ESP", Position: "CC", Teams: [{ club: "es Athletic", matches: 226, goals: 10, assists: 32 }, { club: "es Betis", matches: 105, goals: 14, assists: 22 },], Titles: "", WC: "" },
    { name: "Aritz Aduriz", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Athletic", matches: 381, goals: 161, assists: 41 }, { club: "es Mallorca", matches: 69, goals: 23, assists: 9 }, { club: "es Valencia", matches: 76, goals: 20, assists: 3 },], Titles: "", WC: "" },
    { name: "Larra", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Athletic", matches: 10, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Markel Susaeta", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Athletic", matches: 457, goals: 48, assists: 64 },], Titles: "", WC: "" },
    { name: "Ander Iturraspe", Country: "ESP", Position: "CC", Teams: [{ club: "es Athletic", matches: 292, goals: 3, assists: 10 }, { club: "es Espanyol", matches: 13, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Mikel Rico", Country: "ESP", Position: "CC", Teams: [{ club: "es Athletic", matches: 164, goals: 11, assists: 4 },], Titles: "", WC: "" },
    { name: "Cristian Ganea", Country: "ROU", Position: "DF", Teams: [{ club: "es Athletic", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Aymeric Laporte", Country: "ESP", Position: "DF", Teams: [{ club: "es Athletic", matches: 210, goals: 9, assists: 3 }, { club: "en Man City", matches: 180, goals: 12, assists: 3 },], Titles: "", WC: "" },
    { name: "Enric Saborit", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Athletic", matches: 43, goals: 2, assists: 4 }, { club: "es Mallorca", matches: 17, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Xabier Etxeita", Country: "ESP", Position: "DF", Teams: [{ club: "es Athletic", matches: 131, goals: 8, assists: 1 }, { club: "es Getafe", matches: 32, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Eneko Bóveda", Country: "ESP", Position: "DF", Teams: [{ club: "es Athletic", matches: 70, goals: 0, assists: 3 }, { club: "es Deportivo", matches: 62, goals: 1, assists: 3 },], Titles: "", WC: "" },
    { name: "Sabin Merino", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Athletic", matches: 71, goals: 7, assists: 4 }, { club: "es Deportivo", matches: 18, goals: 5, assists: 0 },], Titles: "", WC: "" },
    { name: "Ager Aketxe", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Athletic", matches: 28, goals: 1, assists: 1 }, { club: "es Deportivo", matches: 39, goals: 7, assists: 4 },], Titles: "", WC: "" },


    { name: "Enrique Sola", Country: "ESP", Position: "DL", Teams: [{ club: "es Athletic", matches: 22, goals: 4, assists: 0 }, { club: "es Getafe", matches: 7, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Gorka Iraizoz", Country: "ESP", Position: "PO", Teams: [{ club: "es Athletic", matches: 357, goals: 0, assists: 0 }, { club: "es Espanyol", matches: 44, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Javier Eraso", Country: "ESP", Position: "CC", Teams: [{ club: "es Athletic", matches: 42, goals: 3, assists: 3 },], Titles: "", WC: "" },
    { name: "Gorka Elustondo", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Athletic", matches: 25, goals: 2, assists: 1 },], Titles: "", WC: "" },
    { name: "Borja Viguera", Country: "ESP", Position: "DL", Teams: [{ club: "es Athletic", matches: 43, goals: 4, assists: 1 }, { club: "es Alaves", matches: 42, goals: 25, assists: 4 },], Titles: "", WC: "" },
    { name: "Álex Remiro", Country: "ESP", Position: "PO", Teams: [{ club: "es Athletic", matches: 0, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Carlos Gurpegui", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Athletic", matches: 350, goals: 22, assists: 2 },], Titles: "", WC: "" },
    { name: "Andoni Iraola", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Athletic", matches: 452, goals: 35, assists: 36 },], Titles: "", WC: "" },
    { name: "Guillermo", Country: "ESP", Position: "DL", Teams: [{ club: "es Athletic", matches: 28, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Jon Aurtenetxe", Country: "ESP", Position: "DF", Teams: [{ club: "es Athletic", matches: 91, goals: 4, assists: 5 }, { club: "es Celta", matches: 20, goals: 0, assists: 2 },], Titles: "", WC: "" },
    { name: "Unai Bustinza", Country: "ESP", Position: "DF", Teams: [{ club: "es Athletic", matches: 4, goals: 0, assists: 0 }, { club: "es Malaga", matches: 12, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Erik Morán", Country: "ESP", Position: "CC", Teams: [{ club: "es Athletic", matches: 20, goals: 0, assists: 0 }, { club: "es Malaga", matches: 7, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Gaizka Toquero", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Athletic", matches: 177, goals: 22, assists: 15 }, { club: "es Alaves", matches: 69, goals: 12, assists: 4 },], Titles: "", WC: "" },
    { name: "Borja Ekiza", Country: "ESP", Position: "DF", Teams: [{ club: "es Athletic", matches: 75, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Unai Albizua", Country: "ESP", Position: "DF", Teams: [{ club: "es Athletic", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Fernando Amorebieta", Country: "VEN", Position: "DF", Teams: [{ club: "es Athletic", matches: 219, goals: 3, assists: 1 },], Titles: "", WC: "" },
    { name: "Fernando Llorente", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Athletic", matches: 290, goals: 99, assists: 18 }, { club: "es Sevilla", matches: 35, goals: 7, assists: 3 }, { club: "it Juventus", matches: 90, goals: 27, assists: 6 }, { club: "it Napoli", matches: 29, goals: 4, assists: 1 }, { club: "en Tottenham", matches: 66, goals: 13, assists: 6 },], Titles: "", WC: "" },
    { name: "Isma López", Country: "ESP", Position: "DF,DL", Teams: [{ club: "es Athletic", matches: 13, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Xabier Castillo", Country: "CRO", Position: "DF", Teams: [{ club: "es Athletic", matches: 48, goals: 0, assists: 0 }, { club: "es Alaves", matches: 15, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Jonás Ramalho", Country: "ESP", Position: "DF", Teams: [{ club: "es Athletic", matches: 10, goals: 0, assists: 0 }, { club: "es Malaga", matches: 29, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Raúl Fernández", Country: "ESP", Position: "PO", Teams: [{ club: "es Athletic", matches: 8, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Iñigo Pérez", Country: "ESP", Position: "CC", Teams: [{ club: "es Athletic", matches: 43, goals: 1, assists: 4 }, { club: "es Mallorca", matches: 13, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Igor Martínez", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Athletic", matches: 15, goals: 0, assists: 2 }, { club: "es Alaves", matches: 52, goals: 4, assists: 3 },], Titles: "", WC: "" },
    { name: "Álvaro Peña", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Athletic", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },


    { name: "Javi Martínez", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Athletic", matches: 221, goals: 22, assists: 7 }, { club: "de Bayern", matches: 254, goals: 13, assists: 11 },], Titles: "", WC: "" },
    { name: "Igor Gabilondo", Country: "ESP", Position: "CC", Teams: [{ club: "es Athletic", matches: 155, goals: 20, assists: 12 },], Titles: "", WC: "" },
    { name: "David López", Country: "ESP", Position: "CC", Teams: [{ club: "es Athletic", matches: 125, goals: 13, assists: 17 },], Titles: "", WC: "" },
    { name: "Pablo Orbaiz", Country: "ESP", Position: "CC", Teams: [{ club: "es Athletic", matches: 274, goals: 11, assists: 12 }, { club: "gr Olympiakos", matches: 32, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Koikili Lertxundi", Country: "ESP", Position: "DF", Teams: [{ club: "es Athletic", matches: 82, goals: 2, assists: 1 },], Titles: "", WC: "" },
    { name: "Ustaritz", Country: "ESP", Position: "DF", Teams: [{ club: "es Athletic", matches: 89, goals: 1, assists: 1 }, { club: "es Betis", matches: 7, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Aitor Ocio", Country: "ESP", Position: "DF", Teams: [{ club: "es Athletic", matches: 96, goals: 2, assists: 1 }, { club: "es Sevilla", matches: 86, goals: 3, assists: 1 },], Titles: "", WC: "" },
    { name: "Ion Vélez", Country: "ESP", Position: "DL", Teams: [{ club: "es Athletic", matches: 45, goals: 3, assists: 3 }, { club: "es Alaves", matches: 58, goals: 9, assists: 8 },], Titles: "", WC: "" },
    { name: "Urko Vera", Country: "ESP", Position: "DL", Teams: [{ club: "es Athletic", matches: 5, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Iñigo Díaz de Cerio", Country: "ESP", Position: "DL", Teams: [{ club: "es Athletic", matches: 10, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Francisco Yeste", Country: "ESP", Position: "CC", Teams: [{ club: "es Athletic", matches: 317, goals: 54, assists: 61 }, { club: "gr Olympiakos", matches: 7, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Joseba Etxeberria", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Athletic", matches: 400, goals: 81, assists: 40 },], Titles: "", WC: "" },
    { name: "Armando", Country: "ESP", Position: "PO", Teams: [{ club: "es Athletic", matches: 19, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Iñaki Muñoz", Country: "ESP", Position: "CC", Teams: [{ club: "es Athletic", matches: 19, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Iban Zubiaurre", Country: "ESP", Position: "DF", Teams: [{ club: "es Athletic", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Joseba Garmendia", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Athletic", matches: 45, goals: 3, assists: 1 },], Titles: "", WC: "" },
    { name: "Joseba del Olmo", Country: "ESP", Position: "CC", Teams: [{ club: "es Athletic", matches: 10, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Javier Casas", Country: "ESP", Position: "DF", Teams: [{ club: "es Athletic", matches: 66, goals: 2, assists: 1 },], Titles: "", WC: "" },

    { name: "Ander Murillo", Country: "ESP", Position: "DF", Teams: [{ club: "es Athletic", matches: 139, goals: 1, assists: 3 }, { club: "es Celta", matches: 23, goals: 0, assists: 2 },], Titles: "", WC: "" },
    { name: "Iñigo Vélez", Country: "ESP", Position: "DL", Teams: [{ club: "es Athletic", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Asier del Horno", Country: "ESP", Position: "DF", Teams: [{ club: "es Athletic", matches: 132, goals: 16, assists: 10 }, { club: "es Valencia", matches: 26, goals: 2, assists: 0 }, { club: "en Chelsea", matches: 29, goals: 1, assists: 5 },], Titles: "", WC: "" },
    { name: "Daniel Aranzubia", Country: "ESP", Position: "PO", Teams: [{ club: "es Athletic", matches: 166, goals: 0, assists: 0 }, { club: "es Deportivo", matches: 186, goals: 1, assists: 1 }, { club: "es Atletico", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Aitor Ramos", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Athletic", matches: 5, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Unai Expósito", Country: "ESP", Position: "DF", Teams: [{ club: "es Athletic", matches: 60, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Tiko", Country: "ESP", Position: "CC", Teams: [{ club: "es Athletic", matches: 203, goals: 21, assists: 22 },], Titles: "", WC: "" },
    { name: "David Cuéllar", Country: "ESP", Position: "CC", Teams: [{ club: "es Athletic", matches: 21, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Luis Prieto Zalbidegoitia", Country: "ESP", Position: "DF", Teams: [{ club: "es Athletic", matches: 142, goals: 6, assists: 3 },], Titles: "", WC: "" },
    { name: "Urko Arroyo", Country: "ESP", Position: "DL", Teams: [{ club: "es Athletic", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Josu Sarriegi", Country: "ESP", Position: "DF", Teams: [{ club: "es Athletic", matches: 36, goals: 0, assists: 0 }, { club: "es Alaves", matches: 86, goals: 4, assists: 0 },], Titles: "", WC: "" },
    { name: "Ismael Urzaiz", Country: "ESP", Position: "DL", Teams: [{ club: "es Athletic", matches: 344, goals: 100, assists: 26 }, { club: "nl Ajax", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Iñaki Lafuente", Country: "ESP", Position: "PO", Teams: [{ club: "es Athletic", matches: 132, goals: 0, assists: 0 }, { club: "es Espanyol", matches: 5, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Javi González", Country: "ESP", Position: "CC", Teams: [{ club: "es Athletic", matches: 229, goals: 10, assists: 12 },], Titles: "", WC: "" },
    { name: "Javier Iturriaga", Country: "MEX", Position: "CC", Teams: [{ club: "es Athletic", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Mikel Dañobeitia", Country: "ESP", Position: "DF,DL", Teams: [{ club: "es Athletic", matches: 26, goals: 1, assists: 0 },], Titles: "", WC: "" },

    { name: "Jesús María Lacruz", Country: "ESP", Position: "DF", Teams: [{ club: "es Athletic", matches: 229, goals: 14, assists: 3 }, { club: "es Espanyol", matches: 59, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Ibón Gutiérrez", Country: "ESP", Position: "CC", Teams: [{ club: "es Athletic", matches: 5, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Julen Guerrero", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Athletic", matches: 210, goals: 40, assists: 8 },], Titles: "", WC: "" },
    { name: "Javier Tarantino", Country: "ESP", Position: "DF", Teams: [{ club: "es Athletic", matches: 3, goals: 0, assists: 0 }, { club: "es Alaves", matches: 22, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Endika Bordas", Country: "ESP", Position: "CC", Teams: [{ club: "es Athletic", matches: 15, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Felipe Guréndez", Country: "ESP", Position: "CC", Teams: [{ club: "es Athletic", matches: 121, goals: 3, assists: 1 },], Titles: "", WC: "" },
    { name: "Santiago Ezquerro", Country: "ESP", Position: "DL", Teams: [{ club: "es Athletic", matches: 235, goals: 51, assists: 15 }, { club: "es Mallorca", matches: 14, goals: 6, assists: 0 }, { club: "es Barcelona", matches: 30, goals: 4, assists: 0 }, { club: "es Atletico", matches: 5, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Joseba Arriaga", Country: "ESP", Position: "DL", Teams: [{ club: "es Athletic", matches: 59, goals: 3, assists: 4 },], Titles: "", WC: "" },
    { name: "Jonan García", Country: "ESP", Position: "CC", Teams: [{ club: "es Athletic", matches: 36, goals: 2, assists: 1 },], Titles: "", WC: "" },
    { name: "Aritz Solabarrieta", Country: "ESP", Position: "CC", Teams: [{ club: "es Athletic", matches: 11, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "César Caneda", Country: "ESP", Position: "DF", Teams: [{ club: "es Athletic", matches: 30, goals: 0, assists: 1 }, { club: "es Alaves", matches: 38, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Igor Angulo", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Athletic", matches: 5, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Gorka Azkorra", Country: "ESP", Position: "DL", Teams: [{ club: "es Athletic", matches: 8, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Jon Moya", Country: "ESP", Position: "DF", Teams: [{ club: "es Athletic", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Aitor Larrazábal", Country: "ESP", Position: "DF", Teams: [{ club: "es Athletic", matches: 184, goals: 24, assists: 5 },], Titles: "", WC: "" },
    { name: "Óscar Vales", Country: "ESP", Position: "DF", Teams: [{ club: "es Athletic", matches: 88, goals: 0, assists: 1 }, { club: "es Celta", matches: 61, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Carlos Merino", Country: "ESP", Position: "CC", Teams: [{ club: "es Athletic", matches: 8, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Bittor Alkiza", Country: "ESP", Position: "CC", Teams: [{ club: "es Athletic", matches: 195, goals: 4, assists: 7 },], Titles: "", WC: "" },
    { name: "Iñigo Larrainzar", Country: "ESP", Position: "DF", Teams: [{ club: "es Athletic", matches: 116, goals: 4, assists: 2 },], Titles: "", WC: "" },
    { name: "Carlos García", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Athletic", matches: 138, goals: 8, assists: 1 },], Titles: "", WC: "" },
    { name: "Josu Urrutia", Country: "ESP", Position: "CC", Teams: [{ club: "es Athletic", matches: 133, goals: 3, assists: 0 },], Titles: "", WC: "" },
    { name: "Rafael Alkorta", Country: "ESP", Position: "DF", Teams: [{ club: "es Athletic", matches: 96, goals: 4, assists: 1 },], Titles: "", WC: "" },
    { name: "Roberto Ríos", Country: "ESP", Position: "DF", Teams: [{ club: "es Athletic", matches: 87, goals: 5, assists: 0 },], Titles: "", WC: "" },
    { name: "David Karanka", Country: "ESP", Position: "DL", Teams: [{ club: "es Athletic", matches: 8, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Mikel Lasa", Country: "ESP", Position: "DF", Teams: [{ club: "es Athletic", matches: 57, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Andoni Imaz", Country: "ESP", Position: "CC", Teams: [{ club: "es Athletic", matches: 33, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Imanol Etxeberria", Country: "ESP", Position: "PO", Teams: [{ club: "es Athletic", matches: 111, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Patxi Ferreira", Country: "ESP", Position: "DF", Teams: [{ club: "es Athletic", matches: 71, goals: 3, assists: 0 },], Titles: "", WC: "" },
    { name: "Edu Alonso", Country: "ESP", Position: "CC", Teams: [{ club: "es Athletic", matches: 23, goals: 0, assists: 4 }, { club: "es Alaves", matches: 168, goals: 7, assists: 8 },], Titles: "", WC: "" },
    { name: "José Mari García", Country: "ESP", Position: "CC", Teams: [{ club: "es Athletic", matches: 36, goals: 3, assists: 0 },], Titles: "", WC: "" },
    { name: "Sívori", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Athletic", matches: 13, goals: 0, assists: 0 }, { club: "es Alaves", matches: 36, goals: 5, assists: 0 },], Titles: "", WC: "" },
    { name: "Txomin Nagore", Country: "ESP", Position: "CC", Teams: [{ club: "es Athletic", matches: 29, goals: 0, assists: 0 }, { club: "es Mallorca", matches: 29, goals: 1, assists: 3 }, { club: "es Celta", matches: 30, goals: 2, assists: 0 }, { club: "es Atletico", matches: 55, goals: 3, assists: 3 },], Titles: "", WC: "" },
    { name: "Jorge Pérez Sáenz", Country: "ESP", Position: "CC", Teams: [{ club: "es Athletic", matches: 20, goals: 1, assists: 0 },], Titles: "", WC: "" },


    { name: "Cuco Ziganda", Country: "ESP", Position: "DL", Teams: [{ club: "es Athletic", matches: 38, goals: 4, assists: 0 },], Titles: "", WC: "" },
    { name: "Mario Bermejo", Country: "ESP", Position: "DL", Teams: [{ club: "es Athletic", matches: 3, goals: 0, assists: 0 }, { club: "es Celta", matches: 81, goals: 13, assists: 3 },], Titles: "", WC: "" },
    { name: "Ion Andoni Goikoetxea", Country: "ESP", Position: "DF,DL", Teams: [{ club: "es Athletic", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },


    { name: "Predrag Rajković", Country: "SRB", Position: "PO", Teams: [{ club: "es Mallorca", matches: 61, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Dani Rodríguez", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 222, goals: 26, assists: 26 },], Titles: "", WC: "" },
    { name: "Giovanni González", Country: "URU", Position: "DF", Teams: [{ club: "es Mallorca", matches: 58, goals: 2, assists: 5 },], Titles: "", WC: "" },
    { name: "Matija Nastasić", Country: "SRB", Position: "DF", Teams: [{ club: "es Mallorca", matches: 40, goals: 2, assists: 0 }, { club: "en Man City", matches: 43, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Samu Costa", Country: "POR", Position: "CC", Teams: [{ club: "es Mallorca", matches: 27, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Martin Valjent", Country: "SVK", Position: "DF", Teams: [{ club: "es Mallorca", matches: 194, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Sergi Darder", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 26, goals: 0, assists: 3 }, { club: "es Malaga", matches: 66, goals: 6, assists: 2 }, { club: "es Espanyol", matches: 240, goals: 25, assists: 20 }, { club: "fr Lyon", matches: 69, goals: 4, assists: 4 },], Titles: "", WC: "" },
    { name: "Cyle Larin", Country: "CAN", Position: "DL", Teams: [{ club: "es Mallorca", matches: 28, goals: 6, assists: 2 },], Titles: "", WC: "" },
    { name: "Abdón Prats", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 185, goals: 39, assists: 10 },], Titles: "", WC: "" },
    { name: "Jaume Costa", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Mallorca", matches: 86, goals: 0, assists: 6 }, { club: "es Villarreal", matches: 261, goals: 6, assists: 12 }, { club: "es Valencia", matches: 26, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Vedat Muriqi", Country: "KVX", Position: "DL", Teams: [{ club: "es Mallorca", matches: 73, goals: 26, assists: 9 },], Titles: "", WC: "" },
    { name: "Antonio Raillo", Country: "ESP", Position: "DF", Teams: [{ club: "es Mallorca", matches: 201, goals: 13, assists: 3 }, { club: "es Espanyol", matches: 6, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Antonio Sánchez", Country: "ESP", Position: "DF,CC,DL", Teams: [{ club: "es Mallorca", matches: 129, goals: 7, assists: 3 },], Titles: "", WC: "" },
    { name: "Pablo Maffeo", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Mallorca", matches: 91, goals: 3, assists: 11 }, { club: "de Stuttgart", matches: 9, goals: 0, assists: 0 }, { club: "en Man City", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Copete", Country: "ESP", Position: "DF", Teams: [{ club: "es Mallorca", matches: 47, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Manu Morlanes", Country: "ESP", Position: "CC", Teams: [{ club: "es Mallorca", matches: 38, goals: 1, assists: 2 }, { club: "es Villarreal", matches: 42, goals: 1, assists: 4 }, { club: "es Espanyol", matches: 30, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Toni Lato", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Mallorca", matches: 22, goals: 0, assists: 1 }, { club: "es Valencia", matches: 104, goals: 3, assists: 8 },], Titles: "", WC: "" },
    { name: "Amath", Country: "SEN", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 102, goals: 11, assists: 2 }, { club: "es Getafe", matches: 61, goals: 4, assists: 5 },], Titles: "", WC: "" },
    { name: "Siebe Van Der Heyden", Country: "BEL", Position: "DF", Teams: [{ club: "es Mallorca", matches: 10, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Dominik Greif", Country: "SVK", Position: "PO", Teams: [{ club: "es Mallorca", matches: 11, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Javier Llabrés", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 26, goals: 4, assists: 2 },], Titles: "", WC: "" },
    { name: "David López", Country: "ESP", Position: "DF", Teams: [{ club: "es Mallorca", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Daniel Luna", Country: "COL", Position: "CC", Teams: [{ club: "es Mallorca", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Nacho Vidal", Country: "ESP", Position: "DF", Teams: [{ club: "es Mallorca", matches: 2, goals: 0, assists: 0 }, { club: "es Valencia", matches: 9, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Rubén Quintanilla", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Mallorca", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Pau Mascaró", Country: "ESP", Position: "DL", Teams: [{ club: "es Mallorca", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Nemanja Radonjić", Country: "SRB", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 2, goals: 0, assists: 0 }, { club: "fr Marseille", matches: 63, goals: 8, assists: 2 }, { club: "pt Benfica", matches: 7, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Lee Kang-in", Country: "KOR", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 73, goals: 7, assists: 9 }, { club: "es Valencia", matches: 62, goals: 3, assists: 4 }, { club: "fr PSG", matches: 17, goals: 3, assists: 2 },], Titles: "", WC: "" },
    { name: "Iddrisu Baba", Country: "GHA", Position: "DF,CC", Teams: [{ club: "es Mallorca", matches: 145, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Clément Grenier", Country: "FRA", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 29, goals: 2, assists: 0 }, { club: "it Roma", matches: 6, goals: 0, assists: 1 }, { club: "fr Lyon", matches: 135, goals: 15, assists: 21 },], Titles: "", WC: "" },
    { name: "Rodrigo Battaglia", Country: "ARG", Position: "CC", Teams: [{ club: "es Mallorca", matches: 49, goals: 0, assists: 0 }, { club: "es Alaves", matches: 35, goals: 1, assists: 0 }, { club: "pt Sporting", matches: 72, goals: 2, assists: 2 },], Titles: "", WC: "" },
    { name: "Tino Kadewere", Country: "ZIM", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 19, goals: 2, assists: 0 }, { club: "fr Lyon", matches: 64, goals: 11, assists: 3 },], Titles: "", WC: "" },
    { name: "Ángel Rodríguez", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 54, goals: 11, assists: 5 }, { club: "es Getafe", matches: 151, goals: 45, assists: 9 },], Titles: "", WC: "" },
    { name: "Dennis Hadzikadunic", Country: "BIH", Position: "DF", Teams: [{ club: "es Mallorca", matches: 8, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Braian Cufré", Country: "ARG", Position: "DF,DL", Teams: [{ club: "es Mallorca", matches: 39, goals: 1, assists: 3 }, { club: "es Malaga", matches: 27, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Franco Russo", Country: "ARG", Position: "DF", Teams: [{ club: "es Mallorca", matches: 54, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Leonardo Román", Country: "ESP", Position: "PO", Teams: [{ club: "es Mallorca", matches: 7, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Josep Antoni Gayá", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Mallorca", matches: 7, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Ludwig Augustinsson", Country: "SWE", Position: "DF", Teams: [{ club: "es Mallorca", matches: 4, goals: 0, assists: 0 }, { club: "es Sevilla", matches: 27, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Lago Junior", Country: "CIV", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 173, goals: 28, assists: 13 }, { club: "es Malaga", matches: 17, goals: 4, assists: 0 },], Titles: "", WC: "" },
    { name: "Brian Oliván", Country: "ESP", Position: "DF", Teams: [{ club: "es Mallorca", matches: 63, goals: 1, assists: 3 }, { club: "es Espanyol", matches: 57, goals: 1, assists: 10 },], Titles: "", WC: "" },
    { name: "Manolo Reina", Country: "ESP", Position: "PO", Teams: [{ club: "es Mallorca", matches: 130, goals: 0, assists: 0 }, { club: "es Malaga", matches: 16, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Takefusa Kubo", Country: "JPN", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 67, goals: 6, assists: 6 }, { club: "es Villarreal", matches: 19, goals: 1, assists: 3 }, { club: "es Getafe", matches: 18, goals: 1, assists: 1 },], Titles: "", WC: "" },

    { name: "Sergio Rico", Country: "ESP", Position: "PO", Teams: [{ club: "es Mallorca", matches: 15, goals: 0, assists: 0 }, { club: "es Sevilla", matches: 167, goals: 0, assists: 0 }, { club: "fr PSG", matches: 24, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Fernando Niño", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 25, goals: 2, assists: 0 }, { club: "es Villarreal", matches: 37, goals: 10, assists: 1 },], Titles: "", WC: "" },
    { name: "Aleksandar Sedlar", Country: "SRB", Position: "DF,CC", Teams: [{ club: "es Mallorca", matches: 44, goals: 2, assists: 0 }, { club: "es Alaves", matches: 44, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Jordi Mboula", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 43, goals: 2, assists: 4 }, { club: "fr Monaco", matches: 12, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Joan Sastre Vanrell", Country: "ESP", Position: "DF", Teams: [{ club: "es Mallorca", matches: 89, goals: 1, assists: 6 },], Titles: "", WC: "" },
    { name: "Aleix Febas", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 72, goals: 1, assists: 5 }, { club: "es Malaga", matches: 62, goals: 2, assists: 2 },], Titles: "", WC: "" },
    { name: "Matthew Hoppe", Country: "USA", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 7, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Fran Gámez", Country: "ESP", Position: "DF", Teams: [{ club: "es Mallorca", matches: 71, goals: 1, assists: 4 },], Titles: "", WC: "" },
    { name: "Murilo Costa", Country: "BRA", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 16, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Álvaro Giménez", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 27, goals: 3, assists: 0 },], Titles: "", WC: "" },
    { name: "Marc Cardona", Country: "ESP", Position: "DL", Teams: [{ club: "es Mallorca", matches: 13, goals: 2, assists: 1 }, { club: "es Barcelona", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Álex Alegría", Country: "ESP", Position: "DL", Teams: [{ club: "es Mallorca", matches: 22, goals: 0, assists: 0 }, { club: "es Betis", matches: 28, goals: 3, assists: 2 },], Titles: "", WC: "" },
    { name: "Miquel Parera", Country: "ESP", Position: "PO", Teams: [{ club: "es Mallorca", matches: 15, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Victor Mollejo", Country: "ESP", Position: "DF,CC,DL", Teams: [{ club: "es Mallorca", matches: 10, goals: 2, assists: 0 }, { club: "es Getafe", matches: 4, goals: 0, assists: 0 }, { club: "es Deportivo", matches: 36, goals: 6, assists: 4 }, { club: "es Atletico", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Aleksandar Trajkovski", Country: "MKD", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 26, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Luka Romero", Country: "ARG", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 9, goals: 1, assists: 0 }, { club: "it Milan", matches: 5, goals: 0, assists: 0 },], Titles: "", WC: "" },



    { name: "Stoichkov", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 22, goals: 3, assists: 1 },], Titles: "", WC: "" },
    { name: "Ibrahim Diabaté", Country: "CIV", Position: "DL", Teams: [{ club: "es Mallorca", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Ante Budimir", Country: "CRO", Position: "DL", Teams: [{ club: "es Mallorca", matches: 54, goals: 18, assists: 3 },], Titles: "", WC: "" },
    { name: "Lumor Agbenyenu", Country: "GHA", Position: "DF,CC", Teams: [{ club: "es Mallorca", matches: 23, goals: 1, assists: 0 }, { club: "es Malaga", matches: 3, goals: 0, assists: 0 }, { club: "pt Sporting", matches: 8, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Alejandro Pozo Pozo", Country: "ESP", Position: "DF,CC,DL", Teams: [{ club: "es Mallorca", matches: 20, goals: 1, assists: 3 }, { club: "es Sevilla", matches: 9, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Cucho", Country: "COL", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 22, goals: 5, assists: 1 }, { club: "es Getafe", matches: 23, goals: 2, assists: 3 },], Titles: "", WC: "" },
    { name: "Xisco Campos", Country: "ESP", Position: "DF", Teams: [{ club: "es Mallorca", matches: 34, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Pablo Chavarría", Country: "ARG", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 14, goals: 0, assists: 0 }, { club: "es Malaga", matches: 64, goals: 10, assists: 5 },], Titles: "", WC: "" },

    { name: "Baba Rahman", Country: "GHA", Position: "DF", Teams: [{ club: "es Mallorca", matches: 3, goals: 0, assists: 0 }, { club: "en Chelsea", matches: 23, goals: 0, assists: 2 },], Titles: "", WC: "" },
    { name: "Fabricio", Country: "ESP", Position: "PO", Teams: [{ club: "es Mallorca", matches: 2, goals: 0, assists: 0 }, { club: "es Betis", matches: 17, goals: 0, assists: 0 }, { club: "es Deportivo", matches: 43, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Josep Señé", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 7, goals: 0, assists: 0 }, { club: "es Celta", matches: 32, goals: 0, assists: 3 },], Titles: "", WC: "" },
    { name: "Leonardo Koutris", Country: "GRE", Position: "DF", Teams: [{ club: "es Mallorca", matches: 2, goals: 0, assists: 0 }, { club: "gr Olympiakos", matches: 52, goals: 1, assists: 9 },], Titles: "", WC: "" },
    { name: "Yannis Salibur", Country: "FRA", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Ariday Cabrera", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 39, goals: 7, assists: 4 },], Titles: "", WC: "" },


    { name: "Pervis Estupiñán", Country: "ECU", Position: "DF", Teams: [{ club: "es Mallorca", matches: 21, goals: 3, assists: 2 }, { club: "es Villarreal", matches: 74, goals: 0, assists: 3 },], Titles: "", WC: "" },
    { name: "Salva Ruiz", Country: "ESP", Position: "DF", Teams: [{ club: "es Mallorca", matches: 19, goals: 0, assists: 3 }, { club: "es Deportivo", matches: 26, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Álex López", Country: "ESP", Position: "DL", Teams: [{ club: "es Mallorca", matches: 27, goals: 5, assists: 2 },], Titles: "", WC: "" },
    { name: "Leonardo Suárez", Country: "ARG", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 16, goals: 1, assists: 0 }, { club: "es Villarreal", matches: 7, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Pablo Valcarce", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 12, goals: 1, assists: 0 }, { club: "es Deportivo", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Carlos Castro", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 9, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Merveille Ndockyt", Country: "CGO", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 7, goals: 0, assists: 1 }, { club: "es Getafe", matches: 6, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Sergio Buenacasa", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 10, goals: 1, assists: 0 }, { club: "es Malaga", matches: 14, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Ferrán Giner Peris", Country: "ESP", Position: "DL", Teams: [{ club: "es Mallorca", matches: 9, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Alejandro Faurlín", Country: "ARG", Position: "CC", Teams: [{ club: "es Mallorca", matches: 4, goals: 0, assists: 0 }, { club: "es Getafe", matches: 27, goals: 4, assists: 2 },], Titles: "", WC: "" },
    { name: "Pablo Ramon", Country: "ESP", Position: "DF", Teams: [{ club: "es Mallorca", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Nikola Stojiljković", Country: "SRB", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },






    { name: "Cedric Omoigui", Country: "NGA", Position: "DL", Teams: [{ club: "es Mallorca", matches: 7, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Pol Roigé", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 35, goals: 1, assists: 2 },], Titles: "", WC: "" },
    { name: "Bryan Reyna", Country: "PER", Position: "CC", Teams: [{ club: "es Mallorca", matches: 0, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Héctor Yuste", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Mallorca", matches: 96, goals: 1, assists: 6 },], Titles: "", WC: "" },
    { name: "Brandon", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 76, goals: 20, assists: 5 }, { club: "es Malaga", matches: 41, goals: 9, assists: 1 },], Titles: "", WC: "" },
    { name: "Emmanuel Culio", Country: "ARG", Position: "CC", Teams: [{ club: "es Mallorca", matches: 36, goals: 3, assists: 2 }, { club: "es Deportivo", matches: 18, goals: 2, assists: 2 },], Titles: "", WC: "" },
    { name: "Juan Domínguez", Country: "ESP", Position: "CC", Teams: [{ club: "es Mallorca", matches: 31, goals: 1, assists: 1 }, { club: "es Deportivo", matches: 164, goals: 11, assists: 6 },], Titles: "", WC: "" },
    { name: "Thierry Moutinho", Country: "POR", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 55, goals: 5, assists: 7 },], Titles: "", WC: "" },
    { name: "Eduard Campabadal", Country: "ESP", Position: "DF", Teams: [{ club: "es Mallorca", matches: 60, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Roberto Santamaría", Country: "ESP", Position: "PO", Teams: [{ club: "es Mallorca", matches: 24, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Joan Oriol", Country: "ESP", Position: "DF", Teams: [{ club: "es Mallorca", matches: 64, goals: 1, assists: 4 }, { club: "es Villarreal", matches: 55, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Jesús Cabrero", Country: "ESP", Position: "PO", Teams: [{ club: "es Mallorca", matches: 67, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Dejan Lekić", Country: "SRB", Position: "DL", Teams: [{ club: "es Mallorca", matches: 35, goals: 7, assists: 0 },], Titles: "", WC: "" },
    { name: "Juan Rodríguez", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Mallorca", matches: 20, goals: 1, assists: 1 }, { club: "es Malaga", matches: 58, goals: 6, assists: 0 }, { club: "es Getafe", matches: 113, goals: 3, assists: 4 }, { club: "es Deportivo", matches: 164, goals: 11, assists: 5 },], Titles: "", WC: "" },
    { name: "Biel Company", Country: "ESP", Position: "DF", Teams: [{ club: "es Mallorca", matches: 63, goals: 0, assists: 4 },], Titles: "", WC: "" },
    { name: "Ion Ansotegi", Country: "ESP", Position: "DF", Teams: [{ club: "es Mallorca", matches: 22, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Angeliño", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Mallorca", matches: 16, goals: 0, assists: 3 }, { club: "it Roma", matches: 4, goals: 0, assists: 0 }, { club: "nl PSV", matches: 40, goals: 1, assists: 10 }, { club: "en Man City", matches: 14, goals: 0, assists: 3 },], Titles: "", WC: "" },

    { name: "Saša Zdjelar", Country: "SRB", Position: "CC", Teams: [{ club: "es Mallorca", matches: 15, goals: 0, assists: 0 }, { club: "gr Olympiakos", matches: 17, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Aleksandr Valuyskiy", Country: "RUS", Position: "CC", Teams: [{ club: "es Mallorca", matches: 23, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Diogo Salomão", Country: "POR", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 36, goals: 1, assists: 2 }, { club: "es Deportivo", matches: 56, goals: 8, assists: 4 }, { club: "pt Sporting", matches: 21, goals: 4, assists: 2 },], Titles: "", WC: "" },
    { name: "Óscar Díaz", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 23, goals: 1, assists: 0 }, { club: "es Celta", matches: 34, goals: 2, assists: 2 },], Titles: "", WC: "" },
    { name: "Damià Sabater", Country: "ESP", Position: "CC", Teams: [{ club: "es Mallorca", matches: 44, goals: 1, assists: 2 },], Titles: "", WC: "" },
    { name: "Saúl García", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Mallorca", matches: 11, goals: 0, assists: 1 }, { club: "es Alaves", matches: 2, goals: 0, assists: 0 }, { club: "es Deportivo", matches: 23, goals: 0, assists: 3 },], Titles: "", WC: "" },
    { name: "Juanjo Nieto", Country: "ESP", Position: "DF", Teams: [{ club: "es Mallorca", matches: 7, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Adrián Dalmau", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 9, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "James Davis Borikó", Country: "EQG", Position: "DF,CC", Teams: [{ club: "es Mallorca", matches: 12, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Adrián Colunga", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 8, goals: 2, assists: 0 }, { club: "es Getafe", matches: 87, goals: 18, assists: 9 },], Titles: "", WC: "" },

    { name: "Lucas Aveldaño", Country: "ARG", Position: "DF", Teams: [{ club: "es Mallorca", matches: 41, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Timon Wellenreuther", Country: "GER", Position: "PO", Teams: [{ club: "es Mallorca", matches: 33, goals: 0, assists: 0 }, { club: "nl Feyenoord", matches: 25, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Abdoul Sissoko", Country: "FRA", Position: "CC", Teams: [{ club: "es Mallorca", matches: 35, goals: 3, assists: 6 },], Titles: "", WC: "" },
    { name: "Michael Pereira", Country: "FRA", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 163, goals: 13, assists: 13 },], Titles: "", WC: "" },

    { name: "Alfredo Ortuño", Country: "ESP", Position: "DF,DL", Teams: [{ club: "es Mallorca", matches: 19, goals: 4, assists: 3 },], Titles: "", WC: "" },
    { name: "Rolando Bianchi", Country: "ITA", Position: "DL", Teams: [{ club: "es Mallorca", matches: 17, goals: 2, assists: 2 }, { club: "en Man City", matches: 19, goals: 4, assists: 1 },], Titles: "", WC: "" },
    { name: "Javier Ros", Country: "ESP", Position: "CC", Teams: [{ club: "es Mallorca", matches: 38, goals: 3, assists: 1 },], Titles: "", WC: "" },
    { name: "Manuel Arana", Country: "ESP", Position: "CC", Teams: [{ club: "es Mallorca", matches: 52, goals: 10, assists: 3 },], Titles: "", WC: "" },
    { name: "Joan Truyols", Country: "ESP", Position: "DF", Teams: [{ club: "es Mallorca", matches: 31, goals: 0, assists: 1 }, { club: "es Villarreal", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Javier Acuña", Country: "PAR", Position: "DL", Teams: [{ club: "es Mallorca", matches: 21, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Ferran Corominas", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 17, goals: 1, assists: 0 }, { club: "es Espanyol", matches: 183, goals: 20, assists: 3 },], Titles: "", WC: "" },
    { name: "Kasim Nuhu", Country: "GHA", Position: "DF", Teams: [{ club: "es Mallorca", matches: 26, goals: 2, assists: 1 },], Titles: "", WC: "" },
    { name: "Fofo", Country: "ESP", Position: "DL", Teams: [{ club: "es Mallorca", matches: 30, goals: 3, assists: 2 },], Titles: "", WC: "" },


    { name: "Tià Sastre", Country: "ESP", Position: "CC", Teams: [{ club: "es Mallorca", matches: 5, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "João Victor", Country: "BRA", Position: "DF,CC", Teams: [{ club: "es Mallorca", matches: 87, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Pau Cendrós", Country: "ESP", Position: "DF", Teams: [{ club: "es Mallorca", matches: 91, goals: 2, assists: 2 },], Titles: "", WC: "" },
    { name: "Nikola Gulan", Country: "SRB", Position: "DF,CC", Teams: [{ club: "es Mallorca", matches: 31, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Pedro Bigas", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Mallorca", matches: 99, goals: 4, assists: 2 },], Titles: "", WC: "" },
    { name: "Cristian Bustos", Country: "ESP", Position: "CC", Teams: [{ club: "es Mallorca", matches: 31, goals: 1, assists: 0 }, { club: "es Celta", matches: 97, goals: 0, assists: 2 },], Titles: "", WC: "" },
    { name: "Agus", Country: "ESP", Position: "DF,DL", Teams: [{ club: "es Mallorca", matches: 46, goals: 2, assists: 0 }, { club: "es Celta", matches: 29, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Xisco", Country: "ESP", Position: "DL", Teams: [{ club: "es Mallorca", matches: 16, goals: 9, assists: 1 }, { club: "es Deportivo", matches: 69, goals: 17, assists: 2 },], Titles: "", WC: "" },
    { name: "Joselu", Country: "ESP", Position: "DL", Teams: [{ club: "es Mallorca", matches: 19, goals: 2, assists: 1 }, { club: "es Villarreal", matches: 14, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Marko Šćepović", Country: "SRB", Position: "DL", Teams: [{ club: "es Mallorca", matches: 16, goals: 6, assists: 0 }, { club: "gr Olympiakos", matches: 13, goals: 4, assists: 0 },], Titles: "", WC: "" },
    { name: "José Luis Martí", Country: "ESP", Position: "CC", Teams: [{ club: "es Mallorca", matches: 192, goals: 5, assists: 6 }, { club: "es Sevilla", matches: 177, goals: 6, assists: 10 },], Titles: "", WC: "" },
    { name: "Filip Marković", Country: "SRB", Position: "CC", Teams: [{ club: "es Mallorca", matches: 14, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Rubén Miño", Country: "ESP", Position: "PO", Teams: [{ club: "es Mallorca", matches: 42, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Albert Riera", Country: "ESP", Position: "DF,DL", Teams: [{ club: "es Mallorca", matches: 51, goals: 6, assists: 2 }, { club: "es Espanyol", matches: 88, goals: 12, assists: 9 }, { club: "gr Olympiakos", matches: 26, goals: 6, assists: 8 }, { club: "en Man City", matches: 15, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Gai Assulin", Country: "ISR", Position: "CC", Teams: [{ club: "es Mallorca", matches: 7, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Alexandre Coeff", Country: "FRA", Position: "DF,CC", Teams: [{ club: "es Mallorca", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Juan Cifré Navas", Country: "ESP", Position: "DF", Teams: [{ club: "es Mallorca", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },


    { name: "Emilio Nsue", Country: "EQG", Position: "DF,DL", Teams: [{ club: "es Mallorca", matches: 142, goals: 13, assists: 6 },], Titles: "", WC: "" },

    { name: "Thomas Partey", Country: "GHA", Position: "DF,CC", Teams: [{ club: "es Mallorca", matches: 37, goals: 5, assists: 2 }, { club: "es Atletico", matches: 188, goals: 16, assists: 10 }, { club: "en Arsenal", matches: 104, goals: 5, assists: 4 },], Titles: "", WC: "" },
    { name: "Alejandro Alfaro", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 94, goals: 17, assists: 12 }, { club: "es Sevilla", matches: 39, goals: 5, assists: 3 },], Titles: "", WC: "" },
    { name: "Gerard Moreno", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 31, goals: 11, assists: 5 }, { club: "es Villarreal", matches: 265, goals: 114, assists: 43 }, { club: "es Espanyol", matches: 118, goals: 39, assists: 9 },], Titles: "", WC: "" },
    { name: "Kevin", Country: "ESP", Position: "DF", Teams: [{ club: "es Mallorca", matches: 56, goals: 2, assists: 1 },], Titles: "", WC: "" },
    { name: "José Nunes", Country: "POR", Position: "DF", Teams: [{ club: "es Mallorca", matches: 242, goals: 12, assists: 2 },], Titles: "", WC: "" },
    { name: "Álex Moreno", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Mallorca", matches: 31, goals: 2, assists: 1 }, { club: "es Betis", matches: 121, goals: 5, assists: 13 },], Titles: "", WC: "" },
    { name: "Víctor Casadesús", Country: "ESP", Position: "DL", Teams: [{ club: "es Mallorca", matches: 221, goals: 42, assists: 24 },], Titles: "", WC: "" },
    { name: "Tomer Hemed", Country: "ISR", Position: "DL", Teams: [{ club: "es Mallorca", matches: 89, goals: 21, assists: 4 },], Titles: "", WC: "" },
    { name: "David Generelo", Country: "ESP", Position: "CC", Teams: [{ club: "es Mallorca", matches: 14, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Iriney", Country: "BRA", Position: "CC", Teams: [{ club: "es Mallorca", matches: 11, goals: 0, assists: 0 }, { club: "es Betis", matches: 100, goals: 3, assists: 1 }, { club: "es Celta", matches: 63, goals: 2, assists: 2 },], Titles: "", WC: "" },
    { name: "Miguel Garcia", Country: "POR", Position: "DF", Teams: [{ club: "es Mallorca", matches: 10, goals: 0, assists: 0 }, { club: "pt Sporting", matches: 73, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Liassine Cadamuro", Country: "ALG", Position: "DF", Teams: [{ club: "es Mallorca", matches: 8, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Dudu Aouate", Country: "ISR", Position: "PO", Teams: [{ club: "es Mallorca", matches: 167, goals: 0, assists: 0 }, { club: "es Deportivo", matches: 66, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Pedro Geromel", Country: "BRA", Position: "DF", Teams: [{ club: "es Mallorca", matches: 38, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Antonio López", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Mallorca", matches: 17, goals: 0, assists: 0 }, { club: "es Atletico", matches: 245, goals: 12, assists: 23 },], Titles: "", WC: "" },
    { name: "Alexandre Geijo", Country: "ESP", Position: "DL", Teams: [{ club: "es Mallorca", matches: 27, goals: 1, assists: 2 }, { club: "es Malaga", matches: 15, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Akihiro Ienaga", Country: "JPN", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 25, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Abdoul Camara", Country: "GUI", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 6, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Tomás Pina Isla", Country: "ESP", Position: "CC", Teams: [{ club: "es Mallorca", matches: 77, goals: 1, assists: 2 }, { club: "es Alaves", matches: 145, goals: 5, assists: 1 }, { club: "es Villarreal", matches: 109, goals: 4, assists: 4 },], Titles: "", WC: "" },
    { name: "Giovani dos Santos", Country: "MEX", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 29, goals: 6, assists: 6 }, { club: "es Villarreal", matches: 70, goals: 16, assists: 13 }, { club: "es Barcelona", matches: 33, goals: 4, assists: 3 }, { club: "en Tottenham", matches: 25, goals: 2, assists: 2 },], Titles: "", WC: "" },
    { name: "Javi Márquez", Country: "ESP", Position: "CC", Teams: [{ club: "es Mallorca", matches: 25, goals: 3, assists: 2 }, { club: "es Espanyol", matches: 54, goals: 3, assists: 3 },], Titles: "", WC: "" },
    { name: "Alan Hutton", Country: "SCO", Position: "DF", Teams: [{ club: "es Mallorca", matches: 17, goals: 0, assists: 0 }, { club: "en Tottenham", matches: 57, goals: 2, assists: 2 },], Titles: "", WC: "" },
    { name: "Anderson Conceição", Country: "BRA", Position: "DF", Teams: [{ club: "es Mallorca", matches: 16, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Fernando Tissone", Country: "ARG", Position: "CC", Teams: [{ club: "es Mallorca", matches: 41, goals: 0, assists: 0 }, { club: "es Malaga", matches: 47, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Antonio Luna", Country: "ESP", Position: "DF", Teams: [{ club: "es Mallorca", matches: 11, goals: 0, assists: 0 }, { club: "es Sevilla", matches: 21, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Javier Arizmendi", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 21, goals: 2, assists: 1 }, { club: "es Getafe", matches: 26, goals: 3, assists: 1 }, { club: "es Deportivo", matches: 67, goals: 9, assists: 5 }, { club: "es Valencia", matches: 33, goals: 1, assists: 3 }, { club: "es Atletico", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Andreu Fontàs", Country: "ESP", Position: "DF", Teams: [{ club: "es Mallorca", matches: 9, goals: 0, assists: 0 }, { club: "es Barcelona", matches: 10, goals: 1, assists: 0 }, { club: "es Celta", matches: 121, goals: 3, assists: 2 },], Titles: "", WC: "" },
    { name: "Juan Calatayud", Country: "ESP", Position: "PO", Teams: [{ club: "es Mallorca", matches: 6, goals: 0, assists: 0 }, { club: "es Malaga", matches: 36, goals: 0, assists: 0 }, { club: "es Getafe", matches: 13, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Marc Fernández", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 6, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Iván Ramis", Country: "ESP", Position: "DF", Teams: [{ club: "es Mallorca", matches: 166, goals: 9, assists: 0 },], Titles: "", WC: "" },
    { name: "Chico Flores", Country: "ESP", Position: "DF", Teams: [{ club: "es Mallorca", matches: 33, goals: 0, assists: 2 },], Titles: "", WC: "" },
    { name: "Chory Castro", Country: "URU", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 131, goals: 22, assists: 21 }, { club: "es Malaga", matches: 73, goals: 6, assists: 6 },], Titles: "", WC: "" },
    { name: "Pablo Cáceres", Country: "URU", Position: "DF", Teams: [{ club: "es Mallorca", matches: 28, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Sergio Tejera", Country: "ESP", Position: "CC", Teams: [{ club: "es Mallorca", matches: 31, goals: 0, assists: 3 }, { club: "es Alaves", matches: 25, goals: 1, assists: 0 }, { club: "es Espanyol", matches: 12, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Gianni Zuiverloon", Country: "NED", Position: "DF", Teams: [{ club: "es Mallorca", matches: 8, goals: 0, assists: 0 }, { club: "nl Feyenoord", matches: 13, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Martí Crespí", Country: "ESP", Position: "DF", Teams: [{ club: "es Mallorca", matches: 13, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Marvin Ogunjimi", Country: "BEL", Position: "DL", Teams: [{ club: "es Mallorca", matches: 7, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Jonathan de Guzmán", Country: "NED", Position: "CC", Teams: [{ club: "es Mallorca", matches: 34, goals: 5, assists: 5 }, { club: "es Villarreal", matches: 25, goals: 1, assists: 0 }, { club: "it Napoli", matches: 34, goals: 7, assists: 2 }, { club: "nl Feyenoord", matches: 117, goals: 24, assists: 21 },], Titles: "", WC: "" },
    { name: "Pablo Marí", Country: "ESP", Position: "DF", Teams: [{ club: "es Mallorca", matches: 2, goals: 0, assists: 0 }, { club: "es Deportivo", matches: 37, goals: 2, assists: 0 }, { club: "en Arsenal", matches: 22, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Pierre Webó", Country: "CMR", Position: "DL", Teams: [{ club: "es Mallorca", matches: 112, goals: 27, assists: 11 },], Titles: "", WC: "" },
    { name: "Ayoze Díaz Díaz", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Mallorca", matches: 67, goals: 0, assists: 2 }, { club: "es Deportivo", matches: 41, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Fernando Cavenaghi", Country: "ARG", Position: "DL", Teams: [{ club: "es Mallorca", matches: 11, goals: 2, assists: 0 }, { club: "es Villarreal", matches: 18, goals: 4, assists: 1 },], Titles: "", WC: "" },
    { name: "Edson Ratinho", Country: "BRA", Position: "DF,CC", Teams: [{ club: "es Mallorca", matches: 7, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Germán Lux", Country: "ARG", Position: "PO", Teams: [{ club: "es Mallorca", matches: 29, goals: 0, assists: 0 }, { club: "es Deportivo", matches: 108, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Enrique Corrales", Country: "ESP", Position: "DF", Teams: [{ club: "es Mallorca", matches: 32, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Sergi Enrich", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 6, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Mario Suárez", Country: "ESP", Position: "CC", Teams: [{ club: "es Mallorca", matches: 60, goals: 5, assists: 2 }, { club: "es Celta", matches: 26, goals: 2, assists: 1 }, { club: "es Valencia", matches: 24, goals: 3, assists: 0 }, { club: "es Atletico", matches: 164, goals: 5, assists: 5 },], Titles: "", WC: "" },
    { name: "Josemi", Country: "ESP", Position: "DF", Teams: [{ club: "es Mallorca", matches: 53, goals: 1, assists: 1 }, { club: "es Villarreal", matches: 34, goals: 0, assists: 1 }, { club: "es Malaga", matches: 101, goals: 0, assists: 2 },], Titles: "", WC: "" },
    { name: "Julio Álvarez", Country: "VEN", Position: "CC", Teams: [{ club: "es Mallorca", matches: 26, goals: 6, assists: 3 },], Titles: "", WC: "" },

    { name: "Fernando Varela", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Mallorca", matches: 114, goals: 10, assists: 3 }, { club: "es Betis", matches: 154, goals: 4, assists: 5 },], Titles: "", WC: "" },
    { name: "Tuni", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Mallorca", matches: 106, goals: 4, assists: 2 },], Titles: "", WC: "" },
    { name: "Alhassane Keita", Country: "GUI", Position: "DL", Teams: [{ club: "es Mallorca", matches: 47, goals: 8, assists: 0 },], Titles: "", WC: "" },
    { name: "Bruno China", Country: "POR", Position: "DF,CC", Teams: [{ club: "es Mallorca", matches: 9, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Paulo Pezzolano", Country: "URU", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 12, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Juan Arango", Country: "VEN", Position: "CC", Teams: [{ club: "es Mallorca", matches: 183, goals: 46, assists: 35 },], Titles: "", WC: "" },
    { name: "David Navarro", Country: "ESP", Position: "DF", Teams: [{ club: "es Mallorca", matches: 48, goals: 1, assists: 0 }, { club: "es Valencia", matches: 129, goals: 9, assists: 1 },], Titles: "", WC: "" },
    { name: "Cléber Santana", Country: "BRA", Position: "CC", Teams: [{ club: "es Mallorca", matches: 32, goals: 5, assists: 0 }, { club: "es Atletico", matches: 51, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Lionel Scaloni", Country: "ARG", Position: "DF,CC", Teams: [{ club: "es Mallorca", matches: 28, goals: 0, assists: 0 }, { club: "es Deportivo", matches: 254, goals: 15, assists: 7 },], Titles: "", WC: "" },
    { name: "Miguel Ángel Moyá", Country: "ESP", Position: "PO", Teams: [{ club: "es Mallorca", matches: 99, goals: 0, assists: 0 }, { club: "es Getafe", matches: 94, goals: 0, assists: 0 }, { club: "es Valencia", matches: 18, goals: 0, assists: 0 }, { club: "es Atletico", matches: 65, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Óscar Trejo", Country: "ARG", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 36, goals: 3, assists: 0 },], Titles: "", WC: "" },

    { name: "Fernando Navarro", Country: "ESP", Position: "DF", Teams: [{ club: "es Mallorca", matches: 106, goals: 2, assists: 1 }, { club: "es Sevilla", matches: 245, goals: 0, assists: 3 }, { club: "es Barcelona", matches: 30, goals: 1, assists: 1 }, { club: "es Deportivo", matches: 77, goals: 0, assists: 2 },], Titles: "", WC: "" },
    { name: "Dani Güiza", Country: "ESP", Position: "DL", Teams: [{ club: "es Mallorca", matches: 43, goals: 28, assists: 5 }, { club: "es Getafe", matches: 93, goals: 24, assists: 13 },], Titles: "", WC: "" },
    { name: "Héctor Berenguel", Country: "ESP", Position: "DF", Teams: [{ club: "es Mallorca", matches: 50, goals: 0, assists: 0 }, { club: "es Sevilla", matches: 31, goals: 0, assists: 1 }, { club: "es Deportivo", matches: 103, goals: 1, assists: 8 },], Titles: "", WC: "" },
    { name: "Ariel Ibagaza", Country: "ARG", Position: "CC", Teams: [{ club: "es Mallorca", matches: 214, goals: 25, assists: 42 }, { club: "es Villarreal", matches: 65, goals: 4, assists: 11 }, { club: "es Atletico", matches: 85, goals: 4, assists: 16 }, { club: "gr Olympiakos", matches: 83, goals: 1, assists: 21 },], Titles: "", WC: "" },
    { name: "Jonás Gutiérrez", Country: "ARG", Position: "CC", Teams: [{ club: "es Mallorca", matches: 96, goals: 5, assists: 6 }, { club: "es Deportivo", matches: 17, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Angelos Basinas", Country: "GRE", Position: "CC", Teams: [{ club: "es Mallorca", matches: 75, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Guillermo Pereyra", Country: "ARG", Position: "CC", Teams: [{ club: "es Mallorca", matches: 121, goals: 6, assists: 2 },], Titles: "", WC: "" },
    { name: "Sergio Ballesteros", Country: "ESP", Position: "DF", Teams: [{ club: "es Mallorca", matches: 103, goals: 1, assists: 0 }, { club: "es Villarreal", matches: 88, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Francisco Molinero", Country: "ESP", Position: "DF", Teams: [{ club: "es Mallorca", matches: 5, goals: 0, assists: 0 }, { club: "es Malaga", matches: 16, goals: 0, assists: 2 }, { club: "es Betis", matches: 62, goals: 1, assists: 5 }, { club: "es Getafe", matches: 46, goals: 0, assists: 2 }, { club: "es Atletico", matches: 25, goals: 0, assists: 2 },], Titles: "", WC: "" },

    { name: "Toni Prats", Country: "ESP", Position: "PO", Teams: [{ club: "es Mallorca", matches: 52, goals: 0, assists: 0 }, { club: "es Betis", matches: 215, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Boško Janković", Country: "SRB", Position: "CC", Teams: [{ club: "es Mallorca", matches: 28, goals: 9, assists: 3 },], Titles: "", WC: "" },
    { name: "Maxi López", Country: "ARG", Position: "DL", Teams: [{ club: "es Mallorca", matches: 29, goals: 3, assists: 0 }, { club: "es Barcelona", matches: 17, goals: 1, assists: 2 }, { club: "it Milan", matches: 9, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Diego Tristán", Country: "ESP", Position: "DL", Teams: [{ club: "es Mallorca", matches: 58, goals: 23, assists: 6 }, { club: "es Deportivo", matches: 221, goals: 92, assists: 15 },], Titles: "", WC: "" },
    { name: "Leonardo Pisculichi", Country: "ARG", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 20, goals: 3, assists: 2 },], Titles: "", WC: "" },
    { name: "Daniel N'Gom Kome", Country: "CMR", Position: "CC", Teams: [{ club: "es Mallorca", matches: 5, goals: 0, assists: 0 }, { club: "es Getafe", matches: 20, goals: 2, assists: 1 },], Titles: "", WC: "" },
    { name: "David Cortés", Country: "ESP", Position: "DF", Teams: [{ club: "es Mallorca", matches: 127, goals: 0, assists: 6 }, { club: "es Getafe", matches: 114, goals: 0, assists: 2 },], Titles: "", WC: "" },
    { name: "Cristiano Doni", Country: "ITA", Position: "CC", Teams: [{ club: "es Mallorca", matches: 25, goals: 2, assists: 3 },], Titles: "", WC: "" },
    { name: "Francisco Maciel", Country: "ARG", Position: "DF", Teams: [{ club: "es Mallorca", matches: 19, goals: 0, assists: 2 },], Titles: "", WC: "" },
    { name: "Alessandro Potenza", Country: "ITA", Position: "DF", Teams: [{ club: "es Mallorca", matches: 17, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Mark Iuliano", Country: "ITA", Position: "DF", Teams: [{ club: "es Mallorca", matches: 29, goals: 4, assists: 0 }, { club: "it Juventus", matches: 212, goals: 6, assists: 3 },], Titles: "", WC: "" },
    { name: "Javier Farinós", Country: "ESP", Position: "CC", Teams: [{ club: "es Mallorca", matches: 46, goals: 4, assists: 2 }, { club: "es Villarreal", matches: 33, goals: 3, assists: 2 }, { club: "es Valencia", matches: 115, goals: 11, assists: 7 }, { club: "it Inter", matches: 65, goals: 2, assists: 3 },], Titles: "", WC: "" },
    { name: "Alejandro Campano", Country: "ESP", Position: "CC", Teams: [{ club: "es Mallorca", matches: 156, goals: 13, assists: 23 },], Titles: "", WC: "" },
    { name: "Eduardo Tuzzio", Country: "ARG", Position: "DF", Teams: [{ club: "es Mallorca", matches: 10, goals: 0, assists: 0 }, { club: "fr Marseille", matches: 22, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Yoshito Ōkubo", Country: "JPN", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 38, goals: 5, assists: 5 }, { club: "de Wolfsburg", matches: 11, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Yordi", Country: "ESP", Position: "DL", Teams: [{ club: "es Mallorca", matches: 15, goals: 3, assists: 0 }, { club: "es Getafe", matches: 27, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Adrián Peralta", Country: "ARG", Position: "CC", Teams: [{ club: "es Mallorca", matches: 7, goals: 0, assists: 1 },], Titles: "", WC: "" },

    { name: "Braulio Nóbrega", Country: "ESP", Position: "DL", Teams: [{ club: "es Mallorca", matches: 2, goals: 0, assists: 0 }, { club: "es Getafe", matches: 29, goals: 6, assists: 2 }, { club: "es Atletico", matches: 10, goals: 0, assists: 0 },], Titles: "", WC: "" },


    { name: "Luis García", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 37, goals: 11, assists: 5 }, { club: "es Espanyol", matches: 241, goals: 54, assists: 30 },], Titles: "", WC: "" },
    { name: "Poli", Country: "ESP", Position: "DF", Teams: [{ club: "es Mallorca", matches: 100, goals: 0, assists: 2 }, { club: "es Alaves", matches: 9, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Jorge López", Country: "ESP", Position: "CC", Teams: [{ club: "es Mallorca", matches: 29, goals: 1, assists: 0 }, { club: "es Villarreal", matches: 105, goals: 23, assists: 8 }, { club: "es Valencia", matches: 50, goals: 4, assists: 7 },], Titles: "", WC: "" },
    { name: "Gonzalo de los Santos", Country: "URU", Position: "CC", Teams: [{ club: "es Mallorca", matches: 16, goals: 0, assists: 0 }, { club: "es Malaga", matches: 69, goals: 5, assists: 6 }, { club: "es Valencia", matches: 42, goals: 2, assists: 2 }, { club: "es Atletico", matches: 32, goals: 3, assists: 1 },], Titles: "", WC: "" },
    { name: "Fernando Niño", Country: "ESP", Position: "DF", Teams: [{ club: "es Mallorca", matches: 161, goals: 3, assists: 2 },], Titles: "", WC: "" },
    { name: "Bernardo Romeo", Country: "ARG", Position: "DL", Teams: [{ club: "es Mallorca", matches: 10, goals: 2, assists: 1 },], Titles: "", WC: "" },
    { name: "Sander Westerveld", Country: "NED", Position: "PO", Teams: [{ club: "es Mallorca", matches: 6, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Andrija Delibašić", Country: "MNE", Position: "DL", Teams: [{ club: "es Mallorca", matches: 29, goals: 7, assists: 2 }, { club: "pt Benfica", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "José Jesús Perera", Country: "ESP", Position: "DL", Teams: [{ club: "es Mallorca", matches: 37, goals: 8, assists: 1 }, { club: "es Celta", matches: 87, goals: 28, assists: 5 },], Titles: "", WC: "" },
    { name: "Patrick Müller", Country: "SUI", Position: "DF", Teams: [{ club: "es Mallorca", matches: 6, goals: 0, assists: 0 }, { club: "fr Lyon", matches: 194, goals: 4, assists: 7 }, { club: "fr Monaco", matches: 7, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Marcos", Country: "ESP", Position: "CC", Teams: [{ club: "es Mallorca", matches: 153, goals: 4, assists: 6 },], Titles: "", WC: "" },
    { name: "Marcos Vales", Country: "ESP", Position: "CC", Teams: [{ club: "es Mallorca", matches: 6, goals: 0, assists: 0 }, { club: "es Sevilla", matches: 41, goals: 3, assists: 2 },], Titles: "", WC: "" },
    { name: "Felipe Melo", Country: "BRA", Position: "DF,CC", Teams: [{ club: "es Mallorca", matches: 8, goals: 0, assists: 0 }, { club: "it Inter", matches: 38, goals: 1, assists: 1 }, { club: "it Juventus", matches: 72, goals: 5, assists: 0 },], Titles: "", WC: "" },
    { name: "Fernando Correa", Country: "URU", Position: "DL", Teams: [{ club: "es Mallorca", matches: 40, goals: 10, assists: 1 }, { club: "es Atletico", matches: 104, goals: 28, assists: 8 },], Titles: "", WC: "" },
    { name: "Miguel Ángel Nadal", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Mallorca", matches: 175, goals: 7, assists: 1 }, { club: "es Barcelona", matches: 27, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Leo Franco", Country: "ARG", Position: "PO", Teams: [{ club: "es Mallorca", matches: 162, goals: 0, assists: 0 }, { club: "es Atletico", matches: 159, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Federico Lussenhoff", Country: "ARG", Position: "DF", Teams: [{ club: "es Mallorca", matches: 55, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Gonzalo Colsa", Country: "ESP", Position: "CC", Teams: [{ club: "es Mallorca", matches: 37, goals: 3, assists: 1 }, { club: "es Atletico", matches: 62, goals: 5, assists: 0 },], Titles: "", WC: "" },
    { name: "Nenê", Country: "BRA", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 35, goals: 2, assists: 6 }, { club: "es Alaves", matches: 78, goals: 21, assists: 11 }, { club: "es Celta", matches: 47, goals: 9, assists: 3 }, { club: "es Espanyol", matches: 34, goals: 4, assists: 7 }, { club: "fr PSG", matches: 97, goals: 40, assists: 29 }, { club: "fr Monaco", matches: 63, goals: 19, assists: 13 },], Titles: "", WC: "" },
    { name: "Arnold Bruggink", Country: "NED", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 33, goals: 9, assists: 3 }, { club: "nl PSV", matches: 108, goals: 34, assists: 17 },], Titles: "", WC: "" },
    { name: "Javier Olaizola", Country: "ESP", Position: "DF", Teams: [{ club: "es Mallorca", matches: 225, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Toni González", Country: "ESP", Position: "CC", Teams: [{ club: "es Mallorca", matches: 21, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Finidi George", Country: "NGA", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 48, goals: 5, assists: 1 }, { club: "es Betis", matches: 100, goals: 30, assists: 1 },], Titles: "", WC: "" },
    { name: "Miki Garro", Country: "ESP", Position: "PO", Teams: [{ club: "es Mallorca", matches: 28, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Edu Moya", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Mallorca", matches: 11, goals: 0, assists: 0 }, { club: "es Celta", matches: 31, goals: 1, assists: 2 },], Titles: "", WC: "" },
    { name: "Raúl Martín", Country: "ESP", Position: "CC", Teams: [{ club: "es Mallorca", matches: 9, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Jovan Stanković", Country: "SRB", Position: "CC", Teams: [{ club: "es Mallorca", matches: 129, goals: 18, assists: 10 }, { club: "es Atletico", matches: 52, goals: 1, assists: 21 }, { club: "fr Marseille", matches: 6, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Martín Ligüera", Country: "URU", Position: "CC", Teams: [{ club: "es Mallorca", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Vicente Fernández", Country: "ESP", Position: "CC", Teams: [{ club: "es Mallorca", matches: 14, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Walter Pandiani", Country: "URU", Position: "DL", Teams: [{ club: "es Mallorca", matches: 33, goals: 14, assists: 4 }, { club: "es Villarreal", matches: 17, goals: 2, assists: 0 }, { club: "es Deportivo", matches: 126, goals: 41, assists: 6 }, { club: "es Espanyol", matches: 84, goals: 22, assists: 3 },], Titles: "", WC: "" },
    { name: "Álvaro Novo", Country: "ESP", Position: "CC", Teams: [{ club: "es Mallorca", matches: 111, goals: 9, assists: 14 }, { club: "es Atletico", matches: 37, goals: 1, assists: 3 },], Titles: "", WC: "" },
    { name: "John Harold Lozano", Country: "COL", Position: "CC", Teams: [{ club: "es Mallorca", matches: 29, goals: 2, assists: 1 },], Titles: "", WC: "" },
    { name: "Miquel Soler", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Mallorca", matches: 168, goals: 1, assists: 2 },], Titles: "", WC: "" },
    { name: "Julián Robles", Country: "ESP", Position: "CC", Teams: [{ club: "es Mallorca", matches: 34, goals: 2, assists: 1 },], Titles: "", WC: "" },
    { name: "Carlos Domínguez", Country: "ESP", Position: "DL", Teams: [{ club: "es Mallorca", matches: 122, goals: 17, assists: 0 }, { club: "es Sevilla", matches: 43, goals: 7, assists: 0 },], Titles: "", WC: "" },
    { name: "Paco Soler", Country: "ESP", Position: "CC", Teams: [{ club: "es Mallorca", matches: 142, goals: 4, assists: 0 },], Titles: "", WC: "" },
    { name: "Leonardo Biagini", Country: "ARG", Position: "DL", Teams: [{ club: "es Mallorca", matches: 75, goals: 16, assists: 0 },], Titles: "", WC: "" },

    { name: "José Oscar Flores", Country: "ARG", Position: "DL", Teams: [{ club: "es Mallorca", matches: 12, goals: 0, assists: 1 }, { club: "es Deportivo", matches: 96, goals: 23, assists: 4 },], Titles: "", WC: "" },
    { name: "Albert Luque", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 80, goals: 23, assists: 12 }, { club: "es Malaga", matches: 74, goals: 12, assists: 7 }, { club: "es Deportivo", matches: 127, goals: 31, assists: 13 }, { club: "nl Ajax", matches: 17, goals: 4, assists: 3 },], Titles: "", WC: "" },
    { name: "Veljko Paunović", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 66, goals: 8, assists: 1 }, { club: "es Getafe", matches: 44, goals: 10, assists: 1 }, { club: "es Atletico", matches: 72, goals: 15, assists: 2 },], Titles: "", WC: "" },
    { name: "Vicente Engonga", Country: "ESP", Position: "CC", Teams: [{ club: "es Mallorca", matches: 160, goals: 6, assists: 5 },], Titles: "", WC: "" },
    { name: "Gustavo Siviero", Country: "ARG", Position: "DF", Teams: [{ club: "es Mallorca", matches: 100, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Carlos Roa", Country: "ARG", Position: "PO", Teams: [{ club: "es Mallorca", matches: 77, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Christian Díaz", Country: "ARG", Position: "DF,CC", Teams: [{ club: "es Mallorca", matches: 12, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Roberto Losada", Country: "ESP", Position: "DL", Teams: [{ club: "es Mallorca", matches: 13, goals: 4, assists: 1 },], Titles: "", WC: "" },
    { name: "Fatih Akyel", Country: "TUR", Position: "DF", Teams: [{ club: "es Mallorca", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Lluís Carreras", Country: "ESP", Position: "DF", Teams: [{ club: "es Mallorca", matches: 73, goals: 6, assists: 1 }, { club: "es Alaves", matches: 28, goals: 0, assists: 0 }, { club: "es Atletico", matches: 36, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Armando Álvarez", Country: "ESP", Position: "DF", Teams: [{ club: "es Mallorca", matches: 38, goals: 1, assists: 3 }, { club: "es Deportivo", matches: 61, goals: 2, assists: 0 }, { club: "es Atletico", matches: 35, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Germán Burgos", Country: "ARG", Position: "PO", Teams: [{ club: "es Mallorca", matches: 16, goals: 0, assists: 0 }, { club: "es Atletico", matches: 63, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Jorge Cordero Sánchez", Country: "ESP", Position: "CC", Teams: [{ club: "es Mallorca", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "José Miguel Pérez Ruiz", Country: "ESP", Position: "DL", Teams: [{ club: "es Mallorca", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Lauren", Country: "CMR", Position: "DF", Teams: [{ club: "es Mallorca", matches: 71, goals: 5, assists: 3 }, { club: "en Arsenal", matches: 212, goals: 8, assists: 8 },], Titles: "", WC: "" },
    { name: "Juan José Serrizuela", Country: "ARG", Position: "DF", Teams: [{ club: "es Mallorca", matches: 23, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "David Castedo", Country: "ESP", Position: "DF", Teams: [{ club: "es Mallorca", matches: 11, goals: 1, assists: 0 }, { club: "es Sevilla", matches: 223, goals: 0, assists: 7 },], Titles: "", WC: "" },
    { name: "Jorge Quinteros", Country: "ARG", Position: "DL", Teams: [{ club: "es Mallorca", matches: 13, goals: 2, assists: 1 },], Titles: "", WC: "" },
    { name: "Ardian Đokaj", Country: "SRB", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 11, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Romerito", Country: "ESP", Position: "DF", Teams: [{ club: "es Mallorca", matches: 4, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Iván Gabrich", Country: "ARG", Position: "DL", Teams: [{ club: "es Mallorca", matches: 5, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Marcelino Elena", Country: "ESP", Position: "DF", Teams: [{ club: "es Mallorca", matches: 70, goals: 5, assists: 0 },], Titles: "", WC: "" },
    { name: "Ariel López", Country: "ARG", Position: "DL", Teams: [{ club: "es Mallorca", matches: 23, goals: 3, assists: 0 },], Titles: "", WC: "" },
    { name: "Óscar Arpón", Country: "ESP", Position: "CC", Teams: [{ club: "es Mallorca", matches: 13, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Mauricio Pineda", Country: "ARG", Position: "DF", Teams: [{ club: "es Mallorca", matches: 4, goals: 0, assists: 0 }, { club: "it Napoli", matches: 22, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Enrique Romero", Country: "ESP", Position: "DF", Teams: [{ club: "es Mallorca", matches: 38, goals: 3, assists: 0 }, { club: "es Betis", matches: 17, goals: 0, assists: 1 }, { club: "es Deportivo", matches: 271, goals: 3, assists: 11 },], Titles: "", WC: "" },
    { name: "Óscar Alcides Mena", Country: "ARG", Position: "CC", Teams: [{ club: "es Mallorca", matches: 35, goals: 7, assists: 0 }, { club: "es Atletico", matches: 42, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Gabriel Amato", Country: "ARG", Position: "DL", Teams: [{ club: "es Mallorca", matches: 35, goals: 13, assists: 0 }, { club: "es Betis", matches: 25, goals: 5, assists: 0 },], Titles: "", WC: "" },
    { name: "Juan Carlos Valerón", Country: "ESP", Position: "CC", Teams: [{ club: "es Mallorca", matches: 36, goals: 3, assists: 0 }, { club: "es Deportivo", matches: 380, goals: 29, assists: 65 }, { club: "es Atletico", matches: 76, goals: 7, assists: 2 },], Titles: "", WC: "" },
    { name: "Gabriel Moya", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 23, goals: 3, assists: 0 }, { club: "es Sevilla", matches: 10, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Kike Burgos", Country: "ESP", Position: "PO", Teams: [{ club: "es Mallorca", matches: 14, goals: 0, assists: 0 }, { club: "es Alaves", matches: 43, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Pepe Gálvez", Country: "ESP", Position: "DL", Teams: [{ club: "es Mallorca", matches: 25, goals: 5, assists: 0 }, { club: "es Betis", matches: 45, goals: 7, assists: 0 },], Titles: "", WC: "" },
    { name: "Xabier Eskurza", Country: "ESP", Position: "CC", Teams: [{ club: "es Mallorca", matches: 24, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Monchu", Country: "ESP", Position: "DL", Teams: [{ club: "es Mallorca", matches: 17, goals: 4, assists: 0 },], Titles: "", WC: "" },
    { name: "Palhinha", Country: "BRA", Position: "CC,DL", Teams: [{ club: "es Mallorca", matches: 9, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Iván Rocha", Country: "BRA", Position: "DF", Teams: [{ club: "es Mallorca", matches: 7, goals: 0, assists: 0 }, { club: "es Alaves", matches: 24, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Antonio Sivera", Country: "ESP", Position: "PO", Teams: [{ club: "es Alaves", matches: 92, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Ander Guevara", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 27, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Andoni Gorosabel", Country: "ESP", Position: "DF", Teams: [{ club: "es Alaves", matches: 25, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Luis Rioja", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 171, goals: 21, assists: 15 },], Titles: "", WC: "" },
    { name: "Jon Guridi", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 65, goals: 1, assists: 5 },], Titles: "", WC: "" },
    { name: "Rubén Duarte", Country: "ESP", Position: "DF", Teams: [{ club: "es Alaves", matches: 220, goals: 4, assists: 13 }, { club: "es Espanyol", matches: 45, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Antonio Blanco", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 26, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Rafa Marín", Country: "ESP", Position: "DF", Teams: [{ club: "es Alaves", matches: 24, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Javi López", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Alaves", matches: 79, goals: 0, assists: 3 },], Titles: "", WC: "" },

    { name: "Samuel Omorodion", Country: "ESP", Position: "DL", Teams: [{ club: "es Alaves", matches: 24, goals: 8, assists: 1 },], Titles: "", WC: "" },
    { name: "Alex Sola", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 24, goals: 0, assists: 3 },], Titles: "", WC: "" },
    { name: "Kiké", Country: "ESP", Position: "DL", Teams: [{ club: "es Alaves", matches: 24, goals: 3, assists: 0 },], Titles: "", WC: "" },
    { name: "Nahuel Tenaglia", Country: "ARG", Position: "DF", Teams: [{ club: "es Alaves", matches: 67, goals: 4, assists: 2 },], Titles: "", WC: "" },
    { name: "Carlos Benavídez", Country: "URU", Position: "CC", Teams: [{ club: "es Alaves", matches: 53, goals: 2, assists: 1 },], Titles: "", WC: "" },
    { name: "Ianis Hagi", Country: "ROU", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 20, goals: 2, assists: 1 },], Titles: "", WC: "" },
    { name: "Abderrahman Rebbach", Country: "ALG", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 43, goals: 5, assists: 3 },], Titles: "", WC: "" },
    { name: "Xeber", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 46, goals: 7, assists: 2 },], Titles: "", WC: "" },
    { name: "Carlos Vicente", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 7, goals: 0, assists: 2 },], Titles: "", WC: "" },
    { name: "Jesús Owono", Country: "EQG", Position: "PO", Teams: [{ club: "es Alaves", matches: 9, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Nikola Maraš", Country: "SRB", Position: "DF", Teams: [{ club: "es Alaves", matches: 23, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Victor Parada", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Jon Karrikaburu", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 4, goals: 3, assists: 0 },], Titles: "", WC: "" },

    { name: "Selu Diallo", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Unai Ropero", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Miguel", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 61, goals: 5, assists: 5 },], Titles: "", WC: "" },
    { name: "Tomás Mendes", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 4, goals: 0, assists: 2 },], Titles: "", WC: "" },
    { name: "Mamadou Sylla", Country: "SEN", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 39, goals: 7, assists: 1 }, { club: "es Espanyol", matches: 17, goals: 1, assists: 0 },], Titles: "", WC: "" },

    { name: "Joaquín Panichelli", Country: "ARG", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Jason", Country: "ESP", Position: "DF,CC,DL", Teams: [{ club: "es Alaves", matches: 50, goals: 2, assists: 1 }, { club: "es Getafe", matches: 24, goals: 1, assists: 4 }, { club: "es Valencia", matches: 28, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Toni Moya", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 72, goals: 3, assists: 5 }, { club: "es Atletico", matches: 5, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Roberto González", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 32, goals: 2, assists: 2 }, { club: "es Betis", matches: 11, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Anderson Arroyo", Country: "COL", Position: "DF", Teams: [{ club: "es Alaves", matches: 21, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Víctor Laguardia", Country: "ESP", Position: "DF", Teams: [{ club: "es Alaves", matches: 282, goals: 12, assists: 10 },], Titles: "", WC: "" },
    { name: "Taichi Hara", Country: "JPN", Position: "DL", Teams: [{ club: "es Alaves", matches: 16, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Alex Balboa", Country: "EQG", Position: "CC", Teams: [{ club: "es Alaves", matches: 16, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Abdallahi Mahmoud", Country: "MTN", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 9, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Marc Tenas", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 5, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Florian Lejeune", Country: "FRA", Position: "DF,CC", Teams: [{ club: "es Alaves", matches: 67, goals: 1, assists: 1 }, { club: "es Villarreal", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Édgar Méndez", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 118, goals: 15, assists: 3 },], Titles: "", WC: "" },
    { name: "Martin Agirregabiria", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Alaves", matches: 137, goals: 2, assists: 8 },], Titles: "", WC: "" },
    { name: "Pere Pons", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 81, goals: 4, assists: 1 },], Titles: "", WC: "" },
    { name: "Gonzalo Escalante", Country: "ARG", Position: "CC", Teams: [{ club: "es Alaves", matches: 17, goals: 5, assists: 0 },], Titles: "", WC: "" },
    { name: "Manu García", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 27, goals: 0, assists: 2 }, { club: "en Man City", matches: 4, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Matt Miazga", Country: "USA", Position: "DF", Teams: [{ club: "es Alaves", matches: 12, goals: 0, assists: 0 }, { club: "en Chelsea", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Facundo Pellistri", Country: "URU", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 35, goals: 0, assists: 0 }, { club: "en Man Utd", matches: 24, goals: 0, assists: 2 },], Titles: "", WC: "" },
    { name: "Tachi", Country: "ESP", Position: "DF", Teams: [{ club: "es Alaves", matches: 27, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "John Guidetti", Country: "SWE", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 73, goals: 9, assists: 4 }, { club: "es Celta", matches: 95, goals: 22, assists: 4 }, { club: "nl Feyenoord", matches: 23, goals: 20, assists: 6 },], Titles: "", WC: "" },
    { name: "Manu Vallejo", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 11, goals: 1, assists: 1 }, { club: "es Valencia", matches: 57, goals: 9, assists: 3 },], Titles: "", WC: "" },

    { name: "Mircea Ţîrlea", Country: "ROU", Position: "DF", Teams: [{ club: "es Alaves", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Lucas Pérez", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 62, goals: 15, assists: 9 }, { club: "es Deportivo", matches: 98, goals: 34, assists: 18 }, { club: "en Arsenal", matches: 21, goals: 7, assists: 5 },], Titles: "", WC: "" },
    { name: "Jota", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 25, goals: 0, assists: 2 }, { club: "es Celta", matches: 4, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Manu García", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 265, goals: 15, assists: 15 },], Titles: "", WC: "" },
    { name: "Deyverson", Country: "BRA", Position: "DL", Teams: [{ club: "es Alaves", matches: 66, goals: 8, assists: 4 }, { club: "es Getafe", matches: 7, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Borja Sainz", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 43, goals: 2, assists: 2 },], Titles: "", WC: "" },
    { name: "Rodrigo Ely", Country: "BRA", Position: "DF", Teams: [{ club: "es Alaves", matches: 85, goals: 5, assists: 1 }, { club: "it Milan", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Adrián Marín", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Alaves", matches: 27, goals: 0, assists: 0 }, { club: "es Villarreal", matches: 32, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Tomás Tavares", Country: "POR", Position: "DF,CC", Teams: [{ club: "es Alaves", matches: 5, goals: 0, assists: 0 }, { club: "pt Benfica", matches: 19, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Burgui", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 48, goals: 2, assists: 3 }, { club: "es Espanyol", matches: 30, goals: 2, assists: 3 },], Titles: "", WC: "" },
    { name: "Sergi García", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Aleix Vidal", Country: "ESP", Position: "DF,CC,DL", Teams: [{ club: "es Alaves", matches: 29, goals: 2, assists: 4 }, { club: "es Sevilla", matches: 83, goals: 6, assists: 8 }, { club: "es Barcelona", matches: 51, goals: 4, assists: 9 }, { club: "es Espanyol", matches: 62, goals: 2, assists: 4 },], Titles: "", WC: "" },
    { name: "Víctor Camarasa", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 54, goals: 3, assists: 3 }, { club: "es Betis", matches: 33, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Wakaso", Country: "GHA", Position: "CC", Teams: [{ club: "es Alaves", matches: 69, goals: 1, assists: 3 }, { club: "es Villarreal", matches: 25, goals: 0, assists: 0 }, { club: "es Espanyol", matches: 26, goals: 3, assists: 6 },], Titles: "", WC: "" },
    { name: "Oliver Burke", Country: "SCO", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 31, goals: 1, assists: 2 },], Titles: "", WC: "" },
    { name: "Lisandro Magallán", Country: "ARG", Position: "DF", Teams: [{ club: "es Alaves", matches: 17, goals: 1, assists: 1 }, { club: "nl Ajax", matches: 6, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Ljubomir Fejsa", Country: "SRB", Position: "DF,CC", Teams: [{ club: "es Alaves", matches: 13, goals: 0, assists: 0 }, { club: "pt Benfica", matches: 148, goals: 2, assists: 0 }, { club: "gr Olympiakos", matches: 27, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Roberto", Country: "ESP", Position: "PO", Teams: [{ club: "es Alaves", matches: 9, goals: 0, assists: 0 }, { club: "es Malaga", matches: 34, goals: 0, assists: 0 }, { club: "es Espanyol", matches: 12, goals: 0, assists: 0 }, { club: "es Atletico", matches: 5, goals: 0, assists: 0 }, { club: "pt Benfica", matches: 39, goals: 0, assists: 0 }, { club: "gr Olympiakos", matches: 112, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Guillermo Maripán", Country: "CHI", Position: "DF", Teams: [{ club: "es Alaves", matches: 48, goals: 2, assists: 2 }, { club: "fr Monaco", matches: 139, goals: 12, assists: 1 },], Titles: "", WC: "" },
    { name: "Paulino", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 3, goals: 0, assists: 0 }, { club: "es Malaga", matches: 38, goals: 5, assists: 1 },], Titles: "", WC: "" },

    { name: "Jony", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 37, goals: 5, assists: 11 }, { club: "es Malaga", matches: 33, goals: 2, assists: 2 },], Titles: "", WC: "" },
    { name: "Jonathan Calleri", Country: "ARG", Position: "DL", Teams: [{ club: "es Alaves", matches: 36, goals: 9, assists: 2 }, { club: "es Espanyol", matches: 33, goals: 4, assists: 3 },], Titles: "", WC: "" },
    { name: "Darko Brašanac", Country: "SRB", Position: "CC", Teams: [{ club: "es Alaves", matches: 26, goals: 0, assists: 1 }, { club: "es Betis", matches: 26, goals: 1, assists: 1 },], Titles: "", WC: "" },

    { name: "Rubén Sobrino", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 71, goals: 12, assists: 6 }, { club: "es Valencia", matches: 35, goals: 3, assists: 2 },], Titles: "", WC: "" },
    { name: "Takashi Inui", Country: "JPN", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 12, goals: 2, assists: 0 }, { club: "es Betis", matches: 14, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Carlos Vigaray", Country: "ESP", Position: "DF", Teams: [{ club: "es Alaves", matches: 49, goals: 0, assists: 3 }, { club: "es Getafe", matches: 33, goals: 2, assists: 1 },], Titles: "", WC: "" },

    { name: "Patrick Twumasi", Country: "GHA", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 13, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Adrián Diéguez", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Alaves", matches: 13, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Daniel Torres", Country: "COL", Position: "CC", Teams: [{ club: "es Alaves", matches: 52, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Alejandro Blanco", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 2, goals: 0, assists: 0 }, { club: "es Valencia", matches: 18, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Alfonso Pedraza", Country: "ESP", Position: "DF,CC,DL", Teams: [{ club: "es Alaves", matches: 37, goals: 4, assists: 6 }, { club: "es Villarreal", matches: 181, goals: 11, assists: 18 }, { club: "es Betis", matches: 21, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Munir El Haddadi", Country: "MAR", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 37, goals: 14, assists: 7 }, { club: "es Sevilla", matches: 112, goals: 25, assists: 6 }, { club: "es Barcelona", matches: 55, goals: 12, assists: 6 }, { club: "es Getafe", matches: 31, goals: 7, assists: 1 }, { club: "es Valencia", matches: 36, goals: 7, assists: 3 },], Titles: "", WC: "" },
    { name: "Alexis", Country: "ESP", Position: "DF", Teams: [{ club: "es Alaves", matches: 58, goals: 3, assists: 1 }, { club: "es Malaga", matches: 50, goals: 3, assists: 1 }, { club: "es Sevilla", matches: 26, goals: 1, assists: 0 }, { club: "es Getafe", matches: 139, goals: 8, assists: 1 }, { club: "es Valencia", matches: 70, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Bojan Krkić", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 15, goals: 1, assists: 0 }, { club: "es Barcelona", matches: 130, goals: 31, assists: 13 }, { club: "it Milan", matches: 25, goals: 3, assists: 2 }, { club: "it Roma", matches: 33, goals: 7, assists: 1 }, { club: "nl Ajax", matches: 28, goals: 4, assists: 4 },], Titles: "", WC: "" },
    { name: "Hernán Pérez", Country: "PAR", Position: "DF,CC,DL", Teams: [{ club: "es Alaves", matches: 12, goals: 0, assists: 0 }, { club: "es Villarreal", matches: 56, goals: 7, assists: 1 }, { club: "es Espanyol", matches: 93, goals: 13, assists: 4 }, { club: "gr Olympiakos", matches: 11, goals: 2, assists: 2 },], Titles: "", WC: "" },
    { name: "Christian Santos", Country: "VEN", Position: "DL", Teams: [{ club: "es Alaves", matches: 39, goals: 8, assists: 1 }, { club: "es Deportivo", matches: 48, goals: 9, assists: 2 },], Titles: "", WC: "" },
    { name: "Ermedin Demirović", Country: "BIH", Position: "DL", Teams: [{ club: "es Alaves", matches: 6, goals: 4, assists: 1 },], Titles: "", WC: "" },
    { name: "Óscar Romero", Country: "PAR", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 20, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Víctor López", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 3, goals: 0, assists: 2 },], Titles: "", WC: "" },
    { name: "Aleksandar Katai", Country: "SRB", Position: "DF,CC,DL", Teams: [{ club: "es Alaves", matches: 30, goals: 3, assists: 3 },], Titles: "", WC: "" },

    { name: "Kiko Femenía", Country: "ESP", Position: "DF,DL", Teams: [{ club: "es Alaves", matches: 77, goals: 5, assists: 3 }, { club: "es Villarreal", matches: 44, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Zouhair Feddal", Country: "MAR", Position: "DF", Teams: [{ club: "es Alaves", matches: 33, goals: 2, assists: 2 }, { club: "es Betis", matches: 62, goals: 5, assists: 3 }, { club: "pt Sporting", matches: 48, goals: 2, assists: 3 },], Titles: "", WC: "" },
    { name: "Raúl García", Country: "ESP", Position: "DF", Teams: [{ club: "es Alaves", matches: 119, goals: 7, assists: 7 }, { club: "es Getafe", matches: 8, goals: 0, assists: 2 }, { club: "es Deportivo", matches: 5, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Nenad Krstičić", Country: "SRB", Position: "CC", Teams: [{ club: "es Alaves", matches: 20, goals: 3, assists: 0 },], Titles: "", WC: "" },

    { name: "Aleksandar Pantić", Country: "SRB", Position: "DF", Teams: [{ club: "es Alaves", matches: 6, goals: 0, assists: 1 }, { club: "es Villarreal", matches: 9, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Cristian Espinoza", Country: "ARG", Position: "CC", Teams: [{ club: "es Alaves", matches: 8, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Manu Barreiro", Country: "ESP", Position: "DL", Teams: [{ club: "es Alaves", matches: 70, goals: 18, assists: 2 },], Titles: "", WC: "" },
    { name: "Sergio Mora", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 41, goals: 3, assists: 2 }, { club: "es Getafe", matches: 47, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Sergio Pelegrín", Country: "ESP", Position: "DF", Teams: [{ club: "es Alaves", matches: 36, goals: 3, assists: 0 },], Titles: "", WC: "" },
    { name: "Juli", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 76, goals: 10, assists: 13 },], Titles: "", WC: "" },
    { name: "Javier Carpio", Country: "ESP", Position: "DF", Teams: [{ club: "es Alaves", matches: 35, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Daniel Pacheco", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 38, goals: 3, assists: 7 }, { club: "es Malaga", matches: 44, goals: 2, assists: 4 }, { club: "es Betis", matches: 25, goals: 0, assists: 1 }, { club: "es Getafe", matches: 43, goals: 3, assists: 2 },], Titles: "", WC: "" },
    { name: "Dani Estrada", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Alaves", matches: 21, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Facundo Guichón", Country: "URU", Position: "CC", Teams: [{ club: "es Alaves", matches: 31, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Hernán Bernardello", Country: "ARG", Position: "CC", Teams: [{ club: "es Alaves", matches: 13, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Jagoba Beobide", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 68, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Aritz Borda", Country: "ESP", Position: "DF", Teams: [{ club: "es Alaves", matches: 11, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Einar Galilea", Country: "ESP", Position: "DF", Teams: [{ club: "es Alaves", matches: 27, goals: 0, assists: 0 }, { club: "es Malaga", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Sergio Llamas", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 36, goals: 3, assists: 3 },], Titles: "", WC: "" },
    { name: "David Arenas Torres", Country: "ESP", Position: "DL", Teams: [{ club: "es Alaves", matches: 8, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Dani Abalo", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 7, goals: 0, assists: 0 }, { club: "es Celta", matches: 104, goals: 7, assists: 2 },], Titles: "", WC: "" },
    { name: "Pau Torres", Country: "ESP", Position: "PO", Teams: [{ club: "es Alaves", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Iñaki Sáenz", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Krisztián Vadócz", Country: "HUN", Position: "CC", Teams: [{ club: "es Alaves", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Asier Benito", Country: "ESP", Position: "DL", Teams: [{ club: "es Alaves", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Daniel Toribio", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 37, goals: 1, assists: 0 }, { club: "es Villarreal", matches: 5, goals: 0, assists: 1 }, { club: "es Malaga", matches: 21, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Toti", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 69, goals: 12, assists: 9 },], Titles: "", WC: "" },
    { name: "Manu", Country: "ESP", Position: "PO", Teams: [{ club: "es Alaves", matches: 29, goals: 0, assists: 0 }, { club: "es Deportivo", matches: 21, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Unai Medina", Country: "ESP", Position: "DF", Teams: [{ club: "es Alaves", matches: 48, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Migue", Country: "ESP", Position: "DF", Teams: [{ club: "es Alaves", matches: 25, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Marco Sangalli", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 39, goals: 1, assists: 2 },], Titles: "", WC: "" },
    { name: "Jiří Jarošík", Country: "CZE", Position: "DF,CC", Teams: [{ club: "es Alaves", matches: 52, goals: 4, assists: 1 }, { club: "en Chelsea", matches: 14, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Juanma", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 52, goals: 3, assists: 3 }, { club: "es Villarreal", matches: 5, goals: 0, assists: 0 }, { club: "es Betis", matches: 86, goals: 5, assists: 8 },], Titles: "", WC: "" },
    { name: "Iñaki Goitia", Country: "ESP", Position: "PO", Teams: [{ club: "es Alaves", matches: 47, goals: 0, assists: 0 }, { club: "es Malaga", matches: 84, goals: 0, assists: 0 }, { club: "es Betis", matches: 69, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Manuel Lanzarote", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 20, goals: 3, assists: 1 }, { club: "es Espanyol", matches: 19, goals: 1, assists: 3 },], Titles: "", WC: "" },
    { name: "Ernesto Galán", Country: "ESP", Position: "DF", Teams: [{ club: "es Alaves", matches: 16, goals: 1, assists: 0 }, { club: "es Espanyol", matches: 33, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Ranko Despotović", Country: "SRB", Position: "DL", Teams: [{ club: "es Alaves", matches: 26, goals: 5, assists: 0 },], Titles: "", WC: "" },
    { name: "Rafa García", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 20, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Óscar Rubio Fauria", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Alaves", matches: 27, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Emilio Sánchez", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 69, goals: 3, assists: 13 },], Titles: "", WC: "" },
    { name: "Guzmán Casaseca", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 30, goals: 5, assists: 5 },], Titles: "", WC: "" },
    { name: "Nano", Country: "ESP", Position: "DF,DL", Teams: [{ club: "es Alaves", matches: 23, goals: 0, assists: 2 }, { club: "es Barcelona", matches: 5, goals: 0, assists: 0 }, { club: "es Getafe", matches: 8, goals: 2, assists: 0 }, { club: "es Atletico", matches: 39, goals: 6, assists: 4 },], Titles: "", WC: "" },

    { name: "Jaume Delgado", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 18, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Luciano", Country: "ESP", Position: "DF", Teams: [{ club: "es Alaves", matches: 17, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Iván Crespo", Country: "ESP", Position: "PO", Teams: [{ club: "es Alaves", matches: 12, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "José Mora", Country: "ECU", Position: "DL", Teams: [{ club: "es Alaves", matches: 14, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Carlos Lázaro", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 13, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Miroslav Stevanović", Country: "BIH", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 13, goals: 1, assists: 0 }, { club: "es Sevilla", matches: 7, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Óscar Serrano", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 16, goals: 1, assists: 0 }, { club: "es Espanyol", matches: 30, goals: 2, assists: 2 },], Titles: "", WC: "" },
    { name: "Mauro Quiroga", Country: "ARG", Position: "DL", Teams: [{ club: "es Alaves", matches: 22, goals: 3, assists: 0 },], Titles: "", WC: "" },
    { name: "Gorka Laborda", Country: "ESP", Position: "DL", Teams: [{ club: "es Alaves", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Javi Guerra", Country: "ESP", Position: "DL", Teams: [{ club: "es Alaves", matches: 40, goals: 9, assists: 1 }, { club: "es Malaga", matches: 14, goals: 5, assists: 1 }, { club: "es Valencia", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Iñigo Calderón", Country: "ESP", Position: "DF", Teams: [{ club: "es Alaves", matches: 52, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Martín Astudillo", Country: "ARG", Position: "CC", Teams: [{ club: "es Alaves", matches: 324, goals: 19, assists: 21 },], Titles: "", WC: "" },
    { name: "Edu Albácar", Country: "ESP", Position: "DF", Teams: [{ club: "es Alaves", matches: 28, goals: 3, assists: 0 },], Titles: "", WC: "" },
    { name: "Bernardo Domínguez", Country: "ESP", Position: "PO", Teams: [{ club: "es Alaves", matches: 64, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Raúl Llorente", Country: "ESP", Position: "DF", Teams: [{ club: "es Alaves", matches: 30, goals: 0, assists: 2 },], Titles: "", WC: "" },
    { name: "Pablo Casar", Country: "ESP", Position: "DF", Teams: [{ club: "es Alaves", matches: 82, goals: 8, assists: 2 },], Titles: "", WC: "" },
    { name: "Antonio Moreno Fernández", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 29, goals: 2, assists: 1 },], Titles: "", WC: "" },
    { name: "Roberto Cuevas", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 28, goals: 3, assists: 2 },], Titles: "", WC: "" },
    { name: "Javier Almirón", Country: "ARG", Position: "DF,CC", Teams: [{ club: "es Alaves", matches: 22, goals: 2, assists: 2 },], Titles: "", WC: "" },
    { name: "Nicolas Bonis", Country: "FRA", Position: "PO", Teams: [{ club: "es Alaves", matches: 17, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Toni Moral", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 92, goals: 12, assists: 15 }, { club: "es Celta", matches: 6, goals: 1, assists: 1 },], Titles: "", WC: "" },

    { name: "Nacho Garro", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 35, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "José Manuel Mateo", Country: "ESP", Position: "DF", Teams: [{ club: "es Alaves", matches: 66, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Dani Castellano", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Alaves", matches: 8, goals: 0, assists: 1 },], Titles: "", WC: "" },

    { name: "Pablo de Lucas", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 10, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "José Cabrera", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 11, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Walter Martínez", Country: "HON", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Raúl Sánchez", Country: "ESP", Position: "DL", Teams: [{ club: "es Alaves", matches: 27, goals: 3, assists: 1 },], Titles: "", WC: "" },

    { name: "Samuel Bayón", Country: "ESP", Position: "DL", Teams: [{ club: "es Alaves", matches: 17, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Gaspar", Country: "ESP", Position: "DF", Teams: [{ club: "es Alaves", matches: 80, goals: 1, assists: 0 }, { club: "es Atletico", matches: 60, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Mehdi Lacen", Country: "ALG", Position: "CC", Teams: [{ club: "es Alaves", matches: 86, goals: 0, assists: 2 }, { club: "es Malaga", matches: 30, goals: 0, assists: 0 }, { club: "es Getafe", matches: 176, goals: 4, assists: 6 },], Titles: "", WC: "" },

    { name: "David Coromina", Country: "ESP", Position: "DF", Teams: [{ club: "es Alaves", matches: 105, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Gabri", Country: "ESP", Position: "DL", Teams: [{ club: "es Alaves", matches: 41, goals: 4, assists: 2 },], Titles: "", WC: "" },
    { name: "Ángel", Country: "ESP", Position: "DF", Teams: [{ club: "es Alaves", matches: 88, goals: 0, assists: 3 },], Titles: "", WC: "" },
    { name: "José María Mena", Country: "ESP", Position: "DL", Teams: [{ club: "es Alaves", matches: 39, goals: 4, assists: 2 }, { club: "es Celta", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Adrián López", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 10, goals: 3, assists: 0 }, { club: "es Villarreal", matches: 40, goals: 7, assists: 5 }, { club: "es Malaga", matches: 30, goals: 3, assists: 2 }, { club: "es Deportivo", matches: 125, goals: 22, assists: 10 }, { club: "es Atletico", matches: 122, goals: 21, assists: 11 }, { club: "pt Porto", matches: 35, goals: 3, assists: 2 },], Titles: "", WC: "" },
    { name: "Dalibor Stevanović", Country: "SVN", Position: "CC", Teams: [{ club: "es Alaves", matches: 9, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Nicolas Ardouin", Country: "FRA", Position: "PO", Teams: [{ club: "es Alaves", matches: 15, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Asier", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 6, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Wellington Paulista", Country: "BRA", Position: "DL", Teams: [{ club: "es Alaves", matches: 26, goals: 3, assists: 2 },], Titles: "", WC: "" },
    { name: "Jairo", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 8, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Miguel Pérez", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 19, goals: 1, assists: 0 },], Titles: "", WC: "" },

    { name: "Enrique de Lucas", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 127, goals: 19, assists: 11 }, { club: "es Celta", matches: 98, goals: 21, assists: 22 }, { club: "es Espanyol", matches: 95, goals: 16, assists: 6 }, { club: "fr PSG", matches: 4, goals: 0, assists: 0 }, { club: "en Chelsea", matches: 26, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Stéphane Porato", Country: "FRA", Position: "PO", Teams: [{ club: "es Alaves", matches: 22, goals: 0, assists: 0 }, { club: "fr Monaco", matches: 47, goals: 0, assists: 0 }, { club: "fr Marseille", matches: 76, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Jandro", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 63, goals: 3, assists: 4 }, { club: "es Celta", matches: 57, goals: 14, assists: 6 }, { club: "es Valencia", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Bartholomew Ogbeche", Country: "NGA", Position: "DL", Teams: [{ club: "es Alaves", matches: 29, goals: 5, assists: 1 }, { club: "fr PSG", matches: 61, goals: 6, assists: 0 },], Titles: "", WC: "" },
    { name: "Pablo Brandán", Country: "ARG", Position: "DF,CC", Teams: [{ club: "es Alaves", matches: 20, goals: 0, assists: 2 },], Titles: "", WC: "" },
    { name: "Santiago Carpintero", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 80, goals: 5, assists: 1 }, { club: "es Malaga", matches: 36, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Arthuro", Country: "BRA", Position: "DL", Teams: [{ club: "es Alaves", matches: 30, goals: 6, assists: 2 }, { club: "es Celta", matches: 11, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Rubén Navarro", Country: "ESP", Position: "DL", Teams: [{ club: "es Alaves", matches: 182, goals: 45, assists: 20 }, { club: "es Valencia", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Roberto Bonano", Country: "ARG", Position: "PO", Teams: [{ club: "es Alaves", matches: 57, goals: 0, assists: 0 }, { club: "es Barcelona", matches: 72, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "John Aloisi", Country: "AUS", Position: "DL", Teams: [{ club: "es Alaves", matches: 58, goals: 16, assists: 6 },], Titles: "", WC: "" },
    { name: "Élton Giovanni", Country: "BRA", Position: "CC", Teams: [{ club: "es Alaves", matches: 17, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Thiago Gentil", Country: "BRA", Position: "DL", Teams: [{ club: "es Alaves", matches: 7, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Wesley", Country: "BRA", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 15, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Ian Uranga", Country: "MAC", Position: "DF", Teams: [{ club: "es Alaves", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Juanito", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Alaves", matches: 37, goals: 0, assists: 2 }, { club: "es Malaga", matches: 84, goals: 2, assists: 1 },], Titles: "", WC: "" },
    { name: "Franco Costanzo", Country: "ARG", Position: "PO", Teams: [{ club: "es Alaves", matches: 31, goals: 0, assists: 0 }, { club: "gr Olympiakos", matches: 9, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Rodolfo Bodipo", Country: "EQG", Position: "DL", Teams: [{ club: "es Alaves", matches: 74, goals: 23, assists: 9 }, { club: "es Deportivo", matches: 77, goals: 11, assists: 2 },], Titles: "", WC: "" },
    { name: "Mauricio Pellegrino", Country: "ARG", Position: "DF", Teams: [{ club: "es Alaves", matches: 13, goals: 0, assists: 0 }, { club: "es Barcelona", matches: 23, goals: 0, assists: 0 }, { club: "es Valencia", matches: 199, goals: 5, assists: 0 },], Titles: "", WC: "" },
    { name: "Blagoy Georgiev", Country: "BUL", Position: "CC", Teams: [{ club: "es Alaves", matches: 10, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Ibon Begoña", Country: "ESP", Position: "DF", Teams: [{ club: "es Alaves", matches: 180, goals: 6, assists: 11 },], Titles: "", WC: "" },
    { name: "Óscar Téllez", Country: "ESP", Position: "DF", Teams: [{ club: "es Alaves", matches: 215, goals: 7, assists: 3 }, { club: "es Villarreal", matches: 20, goals: 0, assists: 0 }, { club: "es Valencia", matches: 9, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Henri Antchouet", Country: "GAB", Position: "DL", Teams: [{ club: "es Alaves", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Pape Thiaw", Country: "SEN", Position: "DL", Teams: [{ club: "es Alaves", matches: 23, goals: 5, assists: 1 },], Titles: "", WC: "" },
    { name: "Juvenal", Country: "EQG", Position: "CC", Teams: [{ club: "es Alaves", matches: 19, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Pape Sarr", Country: "SEN", Position: "CC", Teams: [{ club: "es Alaves", matches: 15, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Sergio Santamaría", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 25, goals: 0, assists: 1 }, { club: "es Barcelona", matches: 7, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Juan Pablo Colinas", Country: "ESP", Position: "PO", Teams: [{ club: "es Alaves", matches: 15, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Abel Valenzuela", Country: "ESP", Position: "DF", Teams: [{ club: "es Alaves", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Nacho", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Alaves", matches: 31, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Juan Epitié", Country: "EQG", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 21, goals: 4, assists: 0 },], Titles: "", WC: "" },
    { name: "Eneko Romo", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Maximiliano Flotta", Country: "ARG", Position: "DF,CC", Teams: [{ club: "es Alaves", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Álex Lombardero", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Ronny Gaspercic", Country: "BEL", Position: "PO", Teams: [{ club: "es Alaves", matches: 37, goals: 0, assists: 0 }, { club: "es Betis", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Jesús Galván", Country: "ESP", Position: "DF", Teams: [{ club: "es Alaves", matches: 31, goals: 0, assists: 2 }, { club: "es Villarreal", matches: 59, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Pablo Gómez", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 190, goals: 8, assists: 13 },], Titles: "", WC: "" },
    { name: "Jesús Turiel", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 88, goals: 4, assists: 1 },], Titles: "", WC: "" },
    { name: "Diego Trotta", Country: "ARG", Position: "DF", Teams: [{ club: "es Alaves", matches: 23, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Pablo Coira", Country: "ESP", Position: "DF", Teams: [{ club: "es Alaves", matches: 20, goals: 0, assists: 1 }, { club: "es Celta", matches: 51, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Magno Mocelin", Country: "BRA", Position: "DL", Teams: [{ club: "es Alaves", matches: 194, goals: 25, assists: 4 },], Titles: "", WC: "" },
    { name: "Juan Cruz Ochoa", Country: "ESP", Position: "DF", Teams: [{ club: "es Alaves", matches: 20, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Martín Palermo", Country: "ARG", Position: "DL", Teams: [{ club: "es Alaves", matches: 14, goals: 3, assists: 4 }, { club: "es Villarreal", matches: 70, goals: 18, assists: 6 }, { club: "es Betis", matches: 11, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Iván Alonso", Country: "URU", Position: "DL", Teams: [{ club: "es Alaves", matches: 132, goals: 27, assists: 6 }, { club: "es Espanyol", matches: 70, goals: 12, assists: 1 },], Titles: "", WC: "" },
    { name: "Sietes", Country: "ESP", Position: "DF", Teams: [{ club: "es Alaves", matches: 12, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Jurica Vučko", Country: "CRO", Position: "DL", Teams: [{ club: "es Alaves", matches: 64, goals: 8, assists: 1 },], Titles: "", WC: "" },

    { name: "Richard Dutruel", Country: "FRA", Position: "PO", Teams: [{ club: "es Alaves", matches: 37, goals: 0, assists: 0 }, { club: "es Barcelona", matches: 21, goals: 0, assists: 0 }, { club: "es Celta", matches: 105, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Carlos Llorens", Country: "ESP", Position: "DF", Teams: [{ club: "es Alaves", matches: 75, goals: 7, assists: 5 },], Titles: "", WC: "" },
    { name: "Antonio Karmona", Country: "ESP", Position: "DF", Teams: [{ club: "es Alaves", matches: 165, goals: 4, assists: 0 },], Titles: "", WC: "" },
    { name: "Abelardo Fernández", Country: "ESP", Position: "DF", Teams: [{ club: "es Alaves", matches: 31, goals: 1, assists: 1 }, { club: "es Barcelona", matches: 125, goals: 6, assists: 2 },], Titles: "", WC: "" },
    { name: "Delfí Geli", Country: "ESP", Position: "DF", Teams: [{ club: "es Alaves", matches: 115, goals: 5, assists: 12 }, { club: "es Atletico", matches: 42, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Jordi Cruyff", Country: "NED", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 107, goals: 12, assists: 8 }, { club: "es Celta", matches: 8, goals: 1, assists: 0 }, { club: "es Espanyol", matches: 30, goals: 3, assists: 3 }, { club: "en Man Utd", matches: 25, goals: 5, assists: 1 },], Titles: "", WC: "" },
    { name: "Luis Helguera", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 23, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Adrian Ilie", Country: "ROU", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 24, goals: 6, assists: 0 }, { club: "es Valencia", matches: 102, goals: 37, assists: 6 },], Titles: "", WC: "" },
    { name: "Hermes Desio", Country: "ARG", Position: "CC", Teams: [{ club: "es Alaves", matches: 139, goals: 5, assists: 6 },], Titles: "", WC: "" },
    { name: "Ivan Tomić", Country: "SRB", Position: "CC", Teams: [{ club: "es Alaves", matches: 51, goals: 6, assists: 4 }, { club: "it Roma", matches: 21, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Bogdan Mara", Country: "ROU", Position: "CC,DL", Teams: [{ club: "es Alaves", matches: 35, goals: 0, assists: 3 },], Titles: "", WC: "" },
    { name: "Dan Eggen", Country: "NOR", Position: "DF", Teams: [{ club: "es Alaves", matches: 55, goals: 3, assists: 1 }, { club: "es Celta", matches: 42, goals: 2, assists: 0 },], Titles: "", WC: "" },

    { name: "Martín Herrera", Country: "ARG", Position: "PO", Teams: [{ club: "es Alaves", matches: 107, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Richard Witschge", Country: "NED", Position: "CC", Teams: [{ club: "es Alaves", matches: 25, goals: 0, assists: 3 }, { club: "nl Ajax", matches: 61, goals: 6, assists: 5 },], Titles: "", WC: "" },
    { name: "Gustavo Lombardi", Country: "ARG", Position: "DF", Teams: [{ club: "es Alaves", matches: 6, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Christopher Kanu", Country: "NGA", Position: "DF", Teams: [{ club: "es Alaves", matches: 5, goals: 0, assists: 0 }, { club: "nl Ajax", matches: 9, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Cosmin Contra", Country: "ROU", Position: "DF,CC", Teams: [{ club: "es Alaves", matches: 77, goals: 9, assists: 9 }, { club: "es Getafe", matches: 97, goals: 6, assists: 5 }, { club: "es Atletico", matches: 34, goals: 0, assists: 7 }, { club: "it Milan", matches: 39, goals: 4, assists: 6 },], Titles: "", WC: "" },
    { name: "Javi Moreno", Country: "ESP", Position: "DL", Teams: [{ club: "es Alaves", matches: 79, goals: 35, assists: 10 }, { club: "es Atletico", matches: 29, goals: 5, assists: 2 }, { club: "it Milan", matches: 23, goals: 5, assists: 1 },], Titles: "", WC: "" },
    { name: "Jorge Azkoitia", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 60, goals: 6, assists: 0 },], Titles: "", WC: "" },
    { name: "Vlatko Đolonga", Country: "CRO", Position: "DF", Teams: [{ club: "es Alaves", matches: 5, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Mario Rosas", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 9, goals: 0, assists: 1 }, { club: "es Barcelona", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Raúl Gañán", Country: "ESP", Position: "DF", Teams: [{ club: "es Alaves", matches: 20, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Víctor Torres Mestre", Country: "ESP", Position: "DF", Teams: [{ club: "es Alaves", matches: 33, goals: 0, assists: 1 }, { club: "es Espanyol", matches: 34, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Meho Kodro", Country: "BIH", Position: "DL", Teams: [{ club: "es Alaves", matches: 30, goals: 5, assists: 2 },], Titles: "", WC: "" },
    { name: "Ángel Morales", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 33, goals: 2, assists: 0 }, { club: "es Espanyol", matches: 128, goals: 1, assists: 3 },], Titles: "", WC: "" },
    { name: "Nan Ribera", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 29, goals: 2, assists: 2 }, { club: "es Espanyol", matches: 31, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Julio Salinas", Country: "ESP", Position: "DL", Teams: [{ club: "es Alaves", matches: 50, goals: 12, assists: 0 },], Titles: "", WC: "" },
    { name: "Josete", Country: "ESP", Position: "DF", Teams: [{ club: "es Alaves", matches: 20, goals: 0, assists: 1 }, { club: "es Betis", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Iñaki Berruet", Country: "ESP", Position: "DF", Teams: [{ club: "es Alaves", matches: 36, goals: 0, assists: 0 }, { club: "es Villarreal", matches: 45, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Asier Salcedo", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 5, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Gerard López", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 29, goals: 7, assists: 0 }, { club: "es Barcelona", matches: 124, goals: 8, assists: 4 }, { club: "es Valencia", matches: 59, goals: 8, assists: 2 }, { club: "fr Monaco", matches: 13, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Manuel Canabal", Country: "ESP", Position: "DL", Teams: [{ club: "es Alaves", matches: 30, goals: 5, assists: 0 }, { club: "es Malaga", matches: 99, goals: 11, assists: 6 },], Titles: "", WC: "" },
    { name: "Alberto Belsué", Country: "ESP", Position: "DF", Teams: [{ club: "es Alaves", matches: 22, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Tito Subero", Country: "ESP", Position: "PO", Teams: [{ club: "es Alaves", matches: 18, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Vitamina Sánchez", Country: "ARG", Position: "CC", Teams: [{ club: "es Alaves", matches: 18, goals: 1, assists: 0 }, { club: "nl Feyenoord", matches: 5, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Alberto Albístegui", Country: "ESP", Position: "DF", Teams: [{ club: "es Alaves", matches: 19, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Alfonso Vera", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 16, goals: 0, assists: 0 }, { club: "es Sevilla", matches: 9, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Nicola Berti", Country: "ITA", Position: "CC", Teams: [{ club: "es Alaves", matches: 8, goals: 1, assists: 0 }, { club: "en Tottenham", matches: 21, goals: 3, assists: 3 },], Titles: "", WC: "" },
    { name: "Álex Fernández Sama", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Ismael Santiago", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 2, goals: 0, assists: 0 }, { club: "es Betis", matches: 36, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Solaun", Country: "ESP", Position: "CC", Teams: [{ club: "es Alaves", matches: 0, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Filip Jørgensen", Country: "DEN", Position: "PO", Teams: [{ club: "es Villarreal", matches: 32, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Alex Baena", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 98, goals: 18, assists: 15 },], Titles: "", WC: "" },

    { name: "Alexander Sørloth", Country: "NOR", Position: "DL", Teams: [{ club: "es Villarreal", matches: 26, goals: 10, assists: 4 },], Titles: "", WC: "" },
    { name: "Étienne Capoue", Country: "FRA", Position: "CC", Teams: [{ club: "es Villarreal", matches: 136, goals: 10, assists: 9 }, { club: "en Tottenham", matches: 34, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Ilias Akhomach", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 28, goals: 3, assists: 5 }, { club: "es Barcelona", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Santi Comesaña", Country: "ESP", Position: "CC", Teams: [{ club: "es Villarreal", matches: 25, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Alberto Moreno", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Villarreal", matches: 114, goals: 7, assists: 9 }, { club: "es Sevilla", matches: 54, goals: 3, assists: 3 },], Titles: "", WC: "" },
    { name: "Adrià Altimira", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Villarreal", matches: 18, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "José Luis Morales", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 67, goals: 22, assists: 5 },], Titles: "", WC: "" },
    { name: "Juan Foyth", Country: "ARG", Position: "DF,CC", Teams: [{ club: "es Villarreal", matches: 115, goals: 4, assists: 6 }, { club: "en Tottenham", matches: 32, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Aïssa Mandi", Country: "ALG", Position: "DF", Teams: [{ club: "es Villarreal", matches: 69, goals: 3, assists: 1 }, { club: "es Betis", matches: 172, goals: 8, assists: 4 },], Titles: "", WC: "" },
    { name: "Matteo Gabbia", Country: "ITA", Position: "DF", Teams: [{ club: "es Villarreal", matches: 13, goals: 0, assists: 0 }, { club: "it Milan", matches: 57, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Ramón Terrats", Country: "ESP", Position: "CC", Teams: [{ club: "es Villarreal", matches: 37, goals: 1, assists: 2 },], Titles: "", WC: "" },
    { name: "Pepe Reina", Country: "ESP", Position: "PO", Teams: [{ club: "es Villarreal", matches: 171, goals: 0, assists: 0 }, { club: "es Barcelona", matches: 41, goals: 0, assists: 0 }, { club: "it Milan", matches: 13, goals: 0, assists: 0 }, { club: "it Napoli", matches: 176, goals: 0, assists: 0 }, { club: "de Bayern", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Manu Trigueros", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 464, goals: 38, assists: 34 },], Titles: "", WC: "" },
    { name: "Yeremi Pino", Country: "ESP", Position: "DF,CC,DL", Teams: [{ club: "es Villarreal", matches: 133, goals: 18, assists: 12 },], Titles: "", WC: "" },
    { name: "Ben Brereton", Country: "CHI", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 20, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Francis Coquelin", Country: "FRA", Position: "DF,CC", Teams: [{ club: "es Villarreal", matches: 94, goals: 6, assists: 2 }, { club: "es Valencia", matches: 89, goals: 1, assists: 2 }, { club: "en Arsenal", matches: 145, goals: 0, assists: 2 },], Titles: "", WC: "" },
    { name: "Eric Bailly", Country: "CIV", Position: "DF", Teams: [{ club: "es Villarreal", matches: 52, goals: 1, assists: 1 }, { club: "es Espanyol", matches: 5, goals: 0, assists: 0 }, { club: "fr Marseille", matches: 23, goals: 0, assists: 0 }, { club: "en Man Utd", matches: 113, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Carlos Romero", Country: "ESP", Position: "DF", Teams: [{ club: "es Villarreal", matches: 7, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Gonçalo Guedes", Country: "POR", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 5, goals: 1, assists: 1 }, { club: "es Valencia", matches: 178, goals: 36, assists: 27 }, { club: "fr PSG", matches: 11, goals: 0, assists: 1 }, { club: "pt Benfica", matches: 77, goals: 9, assists: 9 },], Titles: "", WC: "" },
    { name: "Yerson Mosquera", Country: "COL", Position: "DF", Teams: [{ club: "es Villarreal", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Denis Suárez", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 53, goals: 5, assists: 11 }, { club: "es Sevilla", matches: 46, goals: 6, assists: 4 }, { club: "es Barcelona", matches: 71, goals: 8, assists: 8 }, { club: "es Celta", matches: 104, goals: 5, assists: 21 }, { club: "es Espanyol", matches: 18, goals: 0, assists: 0 }, { club: "en Arsenal", matches: 6, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Pascu", Country: "ESP", Position: "DF,DL", Teams: [{ club: "es Villarreal", matches: 8, goals: 2, assists: 0 },], Titles: "", WC: "" },

    { name: "Diego Collado", Country: "ESP", Position: "DL", Teams: [{ club: "es Villarreal", matches: 4, goals: 1, assists: 0 },], Titles: "", WC: "" },

    { name: "Pau Torres", Country: "ESP", Position: "DF", Teams: [{ club: "es Villarreal", matches: 170, goals: 12, assists: 5 }, { club: "es Malaga", matches: 38, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Samuel Chukwueze", Country: "NGA", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 204, goals: 36, assists: 27 }, { club: "it Milan", matches: 21, goals: 2, assists: 1 },], Titles: "", WC: "" },
    { name: "Nicolas Jackson", Country: "SEN", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 46, goals: 13, assists: 5 }, { club: "en Chelsea", matches: 27, goals: 9, assists: 3 },], Titles: "", WC: "" },
    { name: "Johan Mojica", Country: "COL", Position: "DF", Teams: [{ club: "es Villarreal", matches: 27, goals: 0, assists: 2 },], Titles: "", WC: "" },
    { name: "Giovani Lo Celso", Country: "ARG", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 49, goals: 3, assists: 4 }, { club: "es Betis", matches: 45, goals: 16, assists: 5 }, { club: "fr PSG", matches: 54, goals: 6, assists: 4 }, { club: "en Tottenham", matches: 92, goals: 8, assists: 8 },], Titles: "", WC: "" },
    { name: "Gerónimo Rulli", Country: "ARG", Position: "PO", Teams: [{ club: "es Villarreal", matches: 80, goals: 0, assists: 0 }, { club: "nl Ajax", matches: 22, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Arnaut Danjuma", Country: "NED", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 51, goals: 22, assists: 5 }, { club: "en Tottenham", matches: 12, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Adrián de la Fuente", Country: "ESP", Position: "DF", Teams: [{ club: "es Villarreal", matches: 5, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Mamadou Fall", Country: "SEN", Position: "DF", Teams: [{ club: "es Villarreal", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Haissem Hassan", Country: "FRA", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Moi Gómez", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 213, goals: 19, assists: 17 }, { club: "es Getafe", matches: 24, goals: 2, assists: 3 },], Titles: "", WC: "" },
    { name: "Boulaye Dia", Country: "SEN", Position: "DL", Teams: [{ club: "es Villarreal", matches: 35, goals: 7, assists: 6 },], Titles: "", WC: "" },
    { name: "Vicente Iborra", Country: "ESP", Position: "CC", Teams: [{ club: "es Villarreal", matches: 103, goals: 5, assists: 4 }, { club: "es Sevilla", matches: 169, goals: 30, assists: 8 }, { club: "gr Olympiakos", matches: 12, goals: 1, assists: 0 }, { club: "en Leicester", matches: 37, goals: 4, assists: 3 },], Titles: "", WC: "" },
    { name: "Serge Aurier", Country: "CIV", Position: "DF,CC", Teams: [{ club: "es Villarreal", matches: 24, goals: 0, assists: 2 }, { club: "fr PSG", matches: 78, goals: 4, assists: 12 }, { club: "en Tottenham", matches: 109, goals: 8, assists: 17 },], Titles: "", WC: "" },
    { name: "Paco Alcácer", Country: "ESP", Position: "DL", Teams: [{ club: "es Villarreal", matches: 76, goals: 21, assists: 11 }, { club: "es Barcelona", matches: 50, goals: 15, assists: 6 }, { club: "es Getafe", matches: 20, goals: 3, assists: 0 }, { club: "es Valencia", matches: 118, goals: 42, assists: 15 }, { club: "de Leverkusen", matches: 47, goals: 26, assists: 4 },], Titles: "", WC: "" },
    { name: "Mario Gaspar", Country: "ESP", Position: "DF", Teams: [{ club: "es Villarreal", matches: 409, goals: 11, assists: 23 },], Titles: "", WC: "" },
    { name: "Sergio Asenjo", Country: "ESP", Position: "PO", Teams: [{ club: "es Villarreal", matches: 255, goals: 0, assists: 0 }, { club: "es Malaga", matches: 5, goals: 0, assists: 0 }, { club: "es Atletico", matches: 34, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Dani Raba", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 69, goals: 8, assists: 11 },], Titles: "", WC: "" },
    { name: "Rubén Peña", Country: "ESP", Position: "DF", Teams: [{ club: "es Villarreal", matches: 70, goals: 3, assists: 3 },], Titles: "", WC: "" },
    { name: "Nikita Iosifov", Country: "RUS", Position: "DL", Teams: [{ club: "es Villarreal", matches: 2, goals: 1, assists: 0 },], Titles: "", WC: "" },

    { name: "Carlo", Country: "ESP", Position: "CC", Teams: [{ club: "es Villarreal", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Ramiro Funes Mori", Country: "ARG", Position: "DF,CC", Teams: [{ club: "es Villarreal", matches: 72, goals: 3, assists: 1 },], Titles: "", WC: "" },
    { name: "Carlos Bacca", Country: "COL", Position: "DL", Teams: [{ club: "es Villarreal", matches: 143, goals: 40, assists: 12 }, { club: "es Sevilla", matches: 104, goals: 46, assists: 13 }, { club: "it Milan", matches: 43, goals: 20, assists: 4 },], Titles: "", WC: "" },
    { name: "Sofian Chakla", Country: "MAR", Position: "DF", Teams: [{ club: "es Villarreal", matches: 6, goals: 1, assists: 0 }, { club: "es Getafe", matches: 11, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Álex Millán", Country: "ESP", Position: "DL", Teams: [{ club: "es Villarreal", matches: 2, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Andre-Frank Zambo Anguissa", Country: "CMR", Position: "CC", Teams: [{ club: "es Villarreal", matches: 39, goals: 2, assists: 0 }, { club: "it Napoli", matches: 101, goals: 5, assists: 10 }, { club: "fr Marseille", matches: 100, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Santi Cazorla", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 308, goals: 52, assists: 52 }, { club: "es Malaga", matches: 38, goals: 9, assists: 5 }, { club: "en Arsenal", matches: 164, goals: 25, assists: 41 },], Titles: "", WC: "" },
    { name: "Xavi Quintillà", Country: "ESP", Position: "DF", Teams: [{ club: "es Villarreal", matches: 31, goals: 0, assists: 2 },], Titles: "", WC: "" },
    { name: "Javier Ontiveros", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 33, goals: 3, assists: 1 }, { club: "es Malaga", matches: 72, goals: 6, assists: 6 },], Titles: "", WC: "" },
    { name: "Karl Toko Ekambi", Country: "CMR", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 61, goals: 24, assists: 6 }, { club: "fr Lyon", matches: 114, goals: 38, assists: 17 },], Titles: "", WC: "" },
    { name: "Andrés Fernández", Country: "ESP", Position: "PO", Teams: [{ club: "es Villarreal", matches: 52, goals: 0, assists: 1 }, { club: "pt Porto", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Bruno Soriano", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 396, goals: 30, assists: 15 },], Titles: "", WC: "" },
    { name: "Álvaro González", Country: "ESP", Position: "DF", Teams: [{ club: "es Villarreal", matches: 111, goals: 2, assists: 6 }, { club: "es Espanyol", matches: 82, goals: 1, assists: 1 }, { club: "fr Marseille", matches: 75, goals: 3, assists: 3 },], Titles: "", WC: "" },
    { name: "Pablo Fornals", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 96, goals: 9, assists: 19 }, { club: "es Malaga", matches: 63, goals: 7, assists: 2 }, { club: "es Betis", matches: 3, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Víctor Ruiz", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Villarreal", matches: 187, goals: 3, assists: 5 }, { club: "es Betis", matches: 68, goals: 2, assists: 1 }, { club: "es Valencia", matches: 77, goals: 2, assists: 3 }, { club: "es Espanyol", matches: 41, goals: 2, assists: 1 }, { club: "it Napoli", matches: 7, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Santiago Cáseres", Country: "ARG", Position: "CC", Teams: [{ club: "es Villarreal", matches: 34, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Miguel Juan Llambrich", Country: "ESP", Position: "DF,DL", Teams: [{ club: "es Villarreal", matches: 17, goals: 0, assists: 1 }, { club: "es Espanyol", matches: 25, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Miguel Layún", Country: "MEX", Position: "DF,CC,DL", Teams: [{ club: "es Villarreal", matches: 15, goals: 0, assists: 1 }, { club: "es Sevilla", matches: 18, goals: 2, assists: 0 }, { club: "pt Porto", matches: 66, goals: 9, assists: 17 },], Titles: "", WC: "" },
    { name: "Daniele Bonera", Country: "ITA", Position: "DF", Teams: [{ club: "es Villarreal", matches: 58, goals: 0, assists: 2 }, { club: "it Milan", matches: 188, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Javi Fuego", Country: "ESP", Position: "CC", Teams: [{ club: "es Villarreal", matches: 23, goals: 0, assists: 1 }, { club: "es Valencia", matches: 111, goals: 5, assists: 2 }, { club: "es Espanyol", matches: 52, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Nicola Sansone", Country: "ITA", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 71, goals: 16, assists: 7 },], Titles: "", WC: "" },
    { name: "Manuel Iturra", Country: "CHI", Position: "CC", Teams: [{ club: "es Villarreal", matches: 4, goals: 0, assists: 0 }, { club: "es Malaga", matches: 53, goals: 0, assists: 2 },], Titles: "", WC: "" },


    { name: "Rodri", Country: "ESP", Position: "CC", Teams: [{ club: "es Villarreal", matches: 84, goals: 2, assists: 5 }, { club: "es Atletico", matches: 47, goals: 3, assists: 1 }, { club: "en Man City", matches: 238, goals: 24, assists: 21 },], Titles: "", WC: "" },
    { name: "Samu Castillejo", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 125, goals: 11, assists: 11 }, { club: "es Malaga", matches: 39, goals: 1, assists: 5 }, { club: "es Valencia", matches: 26, goals: 4, assists: 0 }, { club: "it Milan", matches: 110, goals: 10, assists: 10 },], Titles: "", WC: "" },
    { name: "Antonio Rukavina", Country: "SRB", Position: "DF,CC", Teams: [{ club: "es Villarreal", matches: 99, goals: 0, assists: 3 }, { club: "de Leverkusen", matches: 20, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Mariano Barbosa", Country: "ARG", Position: "PO", Teams: [{ club: "es Villarreal", matches: 62, goals: 0, assists: 0 }, { club: "es Sevilla", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Enes Ünal", Country: "TUR", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 31, goals: 5, assists: 3 }, { club: "es Getafe", matches: 109, goals: 36, assists: 10 },], Titles: "", WC: "" },
    { name: "Cédric Bakambu", Country: "COD", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 105, goals: 48, assists: 4 }, { club: "es Betis", matches: 2, goals: 1, assists: 0 }, { club: "fr Marseille", matches: 24, goals: 4, assists: 2 }, { club: "gr Olympiakos", matches: 32, goals: 18, assists: 2 },], Titles: "", WC: "" },
    { name: "Roberto Soriano", Country: "ITA", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 71, goals: 10, assists: 6 },], Titles: "", WC: "" },
    { name: "Ramiro Guerra", Country: "URU", Position: "CC", Teams: [{ club: "es Villarreal", matches: 10, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Rúben Semedo", Country: "POR", Position: "DF,CC", Teams: [{ club: "es Villarreal", matches: 5, goals: 0, assists: 0 }, { club: "pt Sporting", matches: 45, goals: 0, assists: 0 }, { club: "pt Porto", matches: 2, goals: 0, assists: 0 }, { club: "gr Olympiakos", matches: 72, goals: 4, assists: 1 },], Titles: "", WC: "" },
    { name: "Chuca", Country: "ESP", Position: "CC", Teams: [{ club: "es Villarreal", matches: 7, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Roger Martínez", Country: "COL", Position: "DL", Teams: [{ club: "es Villarreal", matches: 9, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Mario González", Country: "ESP", Position: "DL", Teams: [{ club: "es Villarreal", matches: 5, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Alfred N'Diaye", Country: "SEN", Position: "DF,CC", Teams: [{ club: "es Villarreal", matches: 13, goals: 1, assists: 1 }, { club: "es Malaga", matches: 58, goals: 6, assists: 0 }, { club: "es Betis", matches: 84, goals: 3, assists: 3 },], Titles: "", WC: "" },






    { name: "Jonathan dos Santos", Country: "MEX", Position: "CC", Teams: [{ club: "es Villarreal", matches: 126, goals: 7, assists: 8 }, { club: "es Barcelona", matches: 18, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Mateo Musacchio", Country: "ARG", Position: "DF", Teams: [{ club: "es Villarreal", matches: 229, goals: 7, assists: 7 }, { club: "it Milan", matches: 93, goals: 3, assists: 2 },], Titles: "", WC: "" },
    { name: "José Ángel", Country: "ESP", Position: "DF", Teams: [{ club: "es Villarreal", matches: 16, goals: 0, assists: 1 }, { club: "it Roma", matches: 27, goals: 0, assists: 1 }, { club: "pt Porto", matches: 16, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Alexandre Pato", Country: "BRA", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 22, goals: 5, assists: 2 }, { club: "it Milan", matches: 145, goals: 60, assists: 14 }, { club: "en Chelsea", matches: 2, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Rafael Borré", Country: "COL", Position: "DL", Teams: [{ club: "es Villarreal", matches: 28, goals: 4, assists: 1 },], Titles: "", WC: "" },

    { name: "Léo Baptistão", Country: "BRA", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 34, goals: 6, assists: 1 }, { club: "es Betis", matches: 21, goals: 2, assists: 3 }, { club: "es Espanyol", matches: 86, goals: 18, assists: 10 }, { club: "es Atletico", matches: 8, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Matías Nahuel", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 38, goals: 2, assists: 2 }, { club: "es Betis", matches: 19, goals: 0, assists: 1 }, { club: "es Deportivo", matches: 13, goals: 0, assists: 0 }, { club: "gr Olympiakos", matches: 8, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Samu García", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 26, goals: 3, assists: 3 }, { club: "es Malaga", matches: 72, goals: 9, assists: 4 },], Titles: "", WC: "" },
    { name: "Bojan Jokić", Country: "SVN", Position: "DF,CC", Teams: [{ club: "es Villarreal", matches: 29, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Pablo Íñiguez", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Villarreal", matches: 11, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Luciano Vietto", Country: "ARG", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 46, goals: 18, assists: 8 }, { club: "es Sevilla", matches: 31, goals: 10, assists: 5 }, { club: "es Valencia", matches: 19, goals: 5, assists: 1 }, { club: "es Atletico", matches: 38, goals: 3, assists: 5 }, { club: "pt Sporting", matches: 34, goals: 7, assists: 5 },], Titles: "", WC: "" },

    { name: "Ikechukwu Uche", Country: "NGA", Position: "DL", Teams: [{ club: "es Villarreal", matches: 95, goals: 35, assists: 7 }, { club: "es Malaga", matches: 3, goals: 0, assists: 0 }, { club: "es Getafe", matches: 61, goals: 12, assists: 5 },], Titles: "", WC: "" },
    { name: "Chechu", Country: "ESP", Position: "DF", Teams: [{ club: "es Villarreal", matches: 54, goals: 0, assists: 1 }, { club: "es Betis", matches: 73, goals: 3, assists: 4 },], Titles: "", WC: "" },
    { name: "Joel Campbell", Country: "CRC", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 22, goals: 1, assists: 0 }, { club: "es Betis", matches: 37, goals: 4, assists: 4 }, { club: "pt Sporting", matches: 23, goals: 3, assists: 1 }, { club: "gr Olympiakos", matches: 37, goals: 9, assists: 9 }, { club: "en Arsenal", matches: 39, goals: 4, assists: 5 },], Titles: "", WC: "" },
    { name: "Juan Carlos", Country: "ESP", Position: "PO", Teams: [{ club: "es Villarreal", matches: 47, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Javier Espinosa", Country: "ESP", Position: "CC", Teams: [{ club: "es Villarreal", matches: 13, goals: 3, assists: 1 },], Titles: "", WC: "" },
    { name: "Cani", Country: "ESP", Position: "CC", Teams: [{ club: "es Villarreal", matches: 297, goals: 30, assists: 33 }, { club: "es Deportivo", matches: 19, goals: 0, assists: 0 }, { club: "es Atletico", matches: 6, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Sergio Marcos", Country: "ESP", Position: "CC", Teams: [{ club: "es Villarreal", matches: 7, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Israel Puerto", Country: "ESP", Position: "DF", Teams: [{ club: "es Villarreal", matches: 2, goals: 0, assists: 0 }, { club: "es Sevilla", matches: 5, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Naranjo", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 2, goals: 0, assists: 0 }, { club: "es Celta", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Fran Sol", Country: "ESP", Position: "DL", Teams: [{ club: "es Villarreal", matches: 2, goals: 0, assists: 0 }, { club: "es Malaga", matches: 34, goals: 4, assists: 2 },], Titles: "", WC: "" },
    { name: "Javier Aquino", Country: "MEX", Position: "DF,DL", Teams: [{ club: "es Villarreal", matches: 44, goals: 1, assists: 6 },], Titles: "", WC: "" },
    { name: "Jonathan Pereira", Country: "ESP", Position: "DL", Teams: [{ club: "es Villarreal", matches: 63, goals: 12, assists: 10 }, { club: "es Betis", matches: 77, goals: 16, assists: 7 },], Titles: "", WC: "" },
    { name: "Jérémy Perbet", Country: "FRA", Position: "DL", Teams: [{ club: "es Villarreal", matches: 44, goals: 21, assists: 5 },], Titles: "", WC: "" },
    { name: "Óliver Torres", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 9, goals: 0, assists: 1 }, { club: "es Sevilla", matches: 192, goals: 10, assists: 20 }, { club: "es Atletico", matches: 52, goals: 2, assists: 3 }, { club: "pt Porto", matches: 122, goals: 12, assists: 14 },], Titles: "", WC: "" },
    { name: "Edu Ramos", Country: "ESP", Position: "CC", Teams: [{ club: "es Villarreal", matches: 3, goals: 0, assists: 0 }, { club: "es Malaga", matches: 8, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Joan Àngel Román", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Olof Mellberg", Country: "SWE", Position: "DF,CC", Teams: [{ club: "es Villarreal", matches: 29, goals: 2, assists: 0 }, { club: "it Juventus", matches: 33, goals: 2, assists: 0 }, { club: "gr Olympiakos", matches: 88, goals: 7, assists: 1 },], Titles: "", WC: "" },
    { name: "Marcos Senna", Country: "ESP", Position: "CC", Teams: [{ club: "es Villarreal", matches: 337, goals: 31, assists: 18 },], Titles: "", WC: "" },
    { name: "Javi Venta", Country: "ESP", Position: "DF", Teams: [{ club: "es Villarreal", matches: 234, goals: 4, assists: 9 },], Titles: "", WC: "" },
    { name: "Héctor Canteros", Country: "ARG", Position: "CC", Teams: [{ club: "es Villarreal", matches: 12, goals: 2, assists: 3 },], Titles: "", WC: "" },
    { name: "Diego Mariño", Country: "ESP", Position: "PO", Teams: [{ club: "es Villarreal", matches: 9, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Gerard Bordas", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 6, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Cristián Zapata", Country: "COL", Position: "DF", Teams: [{ club: "es Villarreal", matches: 32, goals: 0, assists: 0 }, { club: "it Milan", matches: 140, goals: 4, assists: 3 },], Titles: "", WC: "" },
    { name: "Marco Ruben", Country: "ARG", Position: "DL", Teams: [{ club: "es Villarreal", matches: 81, goals: 18, assists: 7 },], Titles: "", WC: "" },
    { name: "Gonzalo Rodríguez", Country: "ARG", Position: "DF", Teams: [{ club: "es Villarreal", matches: 233, goals: 8, assists: 1 },], Titles: "", WC: "" },
    { name: "Ángel López", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Villarreal", matches: 129, goals: 3, assists: 5 }, { club: "es Betis", matches: 11, goals: 1, assists: 0 }, { club: "es Celta", matches: 175, goals: 6, assists: 12 },], Titles: "", WC: "" },
    { name: "José Catalá", Country: "ESP", Position: "DF", Teams: [{ club: "es Villarreal", matches: 41, goals: 1, assists: 4 },], Titles: "", WC: "" },
    { name: "Nilmar", Country: "BRA", Position: "DL", Teams: [{ club: "es Villarreal", matches: 106, goals: 31, assists: 9 }, { club: "fr Lyon", matches: 41, goals: 6, assists: 1 },], Titles: "", WC: "" },
    { name: "Javier Camuñas", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 30, goals: 1, assists: 2 }, { club: "es Deportivo", matches: 23, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Carlos Marchena", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Villarreal", matches: 59, goals: 2, assists: 2 }, { club: "es Sevilla", matches: 33, goals: 0, assists: 0 }, { club: "es Deportivo", matches: 44, goals: 5, assists: 0 }, { club: "es Valencia", matches: 279, goals: 9, assists: 7 }, { club: "pt Benfica", matches: 20, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Giuseppe Rossi", Country: "ITA", Position: "DL", Teams: [{ club: "es Villarreal", matches: 172, goals: 70, assists: 21 }, { club: "es Celta", matches: 29, goals: 6, assists: 1 }, { club: "en Man Utd", matches: 5, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Alejandro Martinuccio", Country: "ARG", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 13, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Gonzalo Castellani", Country: "ARG", Position: "CC", Teams: [{ club: "es Villarreal", matches: 10, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Joan Capdevila", Country: "ESP", Position: "DF", Teams: [{ club: "es Villarreal", matches: 172, goals: 18, assists: 8 }, { club: "es Deportivo", matches: 207, goals: 18, assists: 13 }, { club: "es Espanyol", matches: 60, goals: 4, assists: 1 }, { club: "es Atletico", matches: 36, goals: 3, assists: 2 }, { club: "pt Benfica", matches: 6, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Javier Matilla", Country: "ESP", Position: "CC", Teams: [{ club: "es Villarreal", matches: 20, goals: 0, assists: 0 }, { club: "es Betis", matches: 55, goals: 2, assists: 2 },], Titles: "", WC: "" },
    { name: "Ángel Ortega", Country: "ESP", Position: "DF", Teams: [{ club: "es Villarreal", matches: 5, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Jefferson Montero", Country: "ECU", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 15, goals: 1, assists: 2 }, { club: "es Betis", matches: 32, goals: 1, assists: 2 }, { club: "es Getafe", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Jozy Altidore", Country: "USA", Position: "DL", Teams: [{ club: "es Villarreal", matches: 14, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Kiko Olivas", Country: "ESP", Position: "DF", Teams: [{ club: "es Villarreal", matches: 8, goals: 0, assists: 0 }, { club: "es Malaga", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Marcos Gullón", Country: "ESP", Position: "CC", Teams: [{ club: "es Villarreal", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Cristóbal", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Villarreal", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },


    { name: "Diego Godín", Country: "URU", Position: "DF", Teams: [{ club: "es Villarreal", matches: 109, goals: 4, assists: 3 }, { club: "es Atletico", matches: 371, goals: 24, assists: 13 }, { club: "it Inter", matches: 36, goals: 2, assists: 1 },], Titles: "", WC: "" },
    { name: "Joseba Llorente", Country: "ESP", Position: "DL", Teams: [{ club: "es Villarreal", matches: 74, goals: 28, assists: 5 },], Titles: "", WC: "" },
    { name: "Iván Marcano", Country: "ESP", Position: "DF", Teams: [{ club: "es Villarreal", matches: 23, goals: 1, assists: 0 }, { club: "es Getafe", matches: 33, goals: 1, assists: 0 }, { club: "it Roma", matches: 13, goals: 1, assists: 0 }, { club: "pt Porto", matches: 206, goals: 24, assists: 4 }, { club: "gr Olympiakos", matches: 46, goals: 6, assists: 3 },], Titles: "", WC: "" },
    { name: "Robert Pirès", Country: "FRA", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 120, goals: 16, assists: 14 }, { club: "fr Marseille", matches: 88, goals: 13, assists: 7 }, { club: "en Arsenal", matches: 252, goals: 73, assists: 49 },], Titles: "", WC: "" },
    { name: "Sebastián Eguren", Country: "URU", Position: "CC", Teams: [{ club: "es Villarreal", matches: 74, goals: 2, assists: 3 },], Titles: "", WC: "" },
    { name: "David Fuster", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 24, goals: 3, assists: 0 }, { club: "es Getafe", matches: 20, goals: 0, assists: 3 }, { club: "gr Olympiakos", matches: 137, goals: 33, assists: 18 },], Titles: "", WC: "" },
    { name: "Damián Escudero", Country: "ARG", Position: "CC", Teams: [{ club: "es Villarreal", matches: 17, goals: 1, assists: 2 },], Titles: "", WC: "" },
    { name: "Xavi Oliva", Country: "ESP", Position: "PO", Teams: [{ club: "es Villarreal", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Fabricio Fuentes", Country: "ARG", Position: "DF", Teams: [{ club: "es Villarreal", matches: 76, goals: 8, assists: 0 },], Titles: "", WC: "" },
    { name: "Matías Fernández", Country: "CHI", Position: "CC", Teams: [{ club: "es Villarreal", matches: 83, goals: 7, assists: 9 }, { club: "pt Sporting", matches: 91, goals: 18, assists: 10 },], Titles: "", WC: "" },
    { name: "Nihat Kahveci", Country: "TUR", Position: "DL", Teams: [{ club: "es Villarreal", matches: 72, goals: 21, assists: 8 },], Titles: "", WC: "" },
    { name: "Guillermo Franco", Country: "MEX", Position: "DL", Teams: [{ club: "es Villarreal", matches: 98, goals: 16, assists: 10 },], Titles: "", WC: "" },
    { name: "Pascal Cygan", Country: "FRA", Position: "DF", Teams: [{ club: "es Villarreal", matches: 51, goals: 2, assists: 1 }, { club: "en Arsenal", matches: 83, goals: 3, assists: 0 },], Titles: "", WC: "" },
    { name: "Edmílson", Country: "BRA", Position: "DF,CC", Teams: [{ club: "es Villarreal", matches: 6, goals: 0, assists: 0 }, { club: "es Barcelona", matches: 84, goals: 0, assists: 2 }, { club: "fr Lyon", matches: 140, goals: 4, assists: 6 },], Titles: "", WC: "" },
    { name: "Sebastián Viera", Country: "URU", Position: "PO", Teams: [{ club: "es Villarreal", matches: 83, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Jordi Pablo", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Jon Dahl Tomasson", Country: "DEN", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 44, goals: 12, assists: 1 }, { club: "it Milan", matches: 96, goals: 26, assists: 8 }, { club: "nl Feyenoord", matches: 130, goals: 64, assists: 11 }, { club: "de Stuttgart", matches: 36, goals: 10, assists: 3 },], Titles: "", WC: "" },
    { name: "Josico", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 187, goals: 6, assists: 4 },], Titles: "", WC: "" },
    { name: "Rio Mavuba", Country: "FRA", Position: "CC", Teams: [{ club: "es Villarreal", matches: 10, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Diego Forlán", Country: "URU", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 118, goals: 56, assists: 13 }, { club: "es Atletico", matches: 170, goals: 86, assists: 19 }, { club: "it Inter", matches: 20, goals: 2, assists: 3 }, { club: "en Man Utd", matches: 73, goals: 13, assists: 6 },], Titles: "", WC: "" },
    { name: "José Enrique", Country: "ESP", Position: "DF", Teams: [{ club: "es Villarreal", matches: 23, goals: 0, assists: 0 }, { club: "es Celta", matches: 14, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Marquitos", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 32, goals: 3, assists: 2 },], Titles: "", WC: "" },
    { name: "Rodolfo Arruabarrena", Country: "ARG", Position: "DF", Teams: [{ club: "es Villarreal", matches: 248, goals: 13, assists: 11 },], Titles: "", WC: "" },
    { name: "Juan Román Riquelme", Country: "ARG", Position: "CC", Teams: [{ club: "es Villarreal", matches: 136, goals: 44, assists: 31 }, { club: "es Barcelona", matches: 40, goals: 4, assists: 10 },], Titles: "", WC: "" },
    { name: "Quique Álvarez", Country: "ESP", Position: "DF", Teams: [{ club: "es Villarreal", matches: 214, goals: 5, assists: 2 },], Titles: "", WC: "" },
    { name: "Alessio Tacchinardi", Country: "ITA", Position: "CC", Teams: [{ club: "es Villarreal", matches: 55, goals: 3, assists: 3 }, { club: "it Juventus", matches: 266, goals: 12, assists: 18 },], Titles: "", WC: "" },
    { name: "Leandro Somoza", Country: "ARG", Position: "CC", Teams: [{ club: "es Villarreal", matches: 25, goals: 0, assists: 0 }, { club: "es Betis", matches: 15, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "José Mari", Country: "ESP", Position: "DL", Teams: [{ club: "es Villarreal", matches: 143, goals: 20, assists: 12 }, { club: "es Betis", matches: 21, goals: 1, assists: 0 }, { club: "es Atletico", matches: 142, goals: 29, assists: 3 }, { club: "it Milan", matches: 64, goals: 10, assists: 7 },], Titles: "", WC: "" },
    { name: "Juan Manuel Peña", Country: "BOL", Position: "DF", Teams: [{ club: "es Villarreal", matches: 73, goals: 1, assists: 1 }, { club: "es Celta", matches: 33, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Juan Pablo Sorín", Country: "ARG", Position: "DF,CC", Teams: [{ club: "es Villarreal", matches: 59, goals: 7, assists: 3 }, { club: "es Barcelona", matches: 15, goals: 1, assists: 0 }, { club: "fr PSG", matches: 21, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Héctor Font", Country: "ESP", Position: "CC", Teams: [{ club: "es Villarreal", matches: 70, goals: 5, assists: 3 },], Titles: "", WC: "" },
    { name: "Roger", Country: "ESP", Position: "CC", Teams: [{ club: "es Villarreal", matches: 73, goals: 6, assists: 1 }, { club: "es Barcelona", matches: 28, goals: 0, assists: 0 }, { club: "es Espanyol", matches: 118, goals: 17, assists: 11 }, { club: "nl Ajax", matches: 15, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Luciano Figueroa", Country: "ARG", Position: "DL", Teams: [{ club: "es Villarreal", matches: 40, goals: 7, assists: 3 },], Titles: "", WC: "" },
    { name: "Antonio Guayre", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 156, goals: 23, assists: 12 }, { club: "es Celta", matches: 23, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "César Arzo", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Villarreal", matches: 53, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Jan Kromkamp", Country: "NED", Position: "DF", Teams: [{ club: "es Villarreal", matches: 10, goals: 0, assists: 0 }, { club: "nl PSV", matches: 87, goals: 2, assists: 9 },], Titles: "", WC: "" },
    { name: "Javier Calleja", Country: "ESP", Position: "CC", Teams: [{ club: "es Villarreal", matches: 116, goals: 8, assists: 10 }, { club: "es Malaga", matches: 104, goals: 5, assists: 11 },], Titles: "", WC: "" },
    { name: "Carlos Alcántara", Country: "ESP", Position: "DF", Teams: [{ club: "es Villarreal", matches: 7, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Juan Sánchez", Country: "ESP", Position: "DL", Teams: [{ club: "es Villarreal", matches: 2, goals: 0, assists: 0 }, { club: "es Celta", matches: 98, goals: 30, assists: 2 }, { club: "es Valencia", matches: 174, goals: 41, assists: 14 },], Titles: "", WC: "" },
    { name: "Antonio Valencia", Country: "ECU", Position: "DF,CC", Teams: [{ club: "es Villarreal", matches: 2, goals: 0, assists: 0 }, { club: "en Man Utd", matches: 314, goals: 22, assists: 50 },], Titles: "", WC: "" },

    { name: "Xisco Nadal", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 25, goals: 3, assists: 0 },], Titles: "", WC: "" },

    { name: "Armando Sá", Country: "MOZ", Position: "DF", Teams: [{ club: "es Villarreal", matches: 27, goals: 0, assists: 1 }, { club: "es Espanyol", matches: 26, goals: 1, assists: 1 }, { club: "pt Benfica", matches: 53, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Sebastián Battaglia", Country: "ARG", Position: "CC", Teams: [{ club: "es Villarreal", matches: 40, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Sonny Anderson", Country: "BRA", Position: "DL", Teams: [{ club: "es Villarreal", matches: 50, goals: 19, assists: 2 }, { club: "es Barcelona", matches: 57, goals: 20, assists: 0 }, { club: "fr Lyon", matches: 145, goals: 86, assists: 15 },], Titles: "", WC: "" },
    { name: "Javier López Vallejo", Country: "ESP", Position: "PO", Teams: [{ club: "es Villarreal", matches: 79, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "José María Cases", Country: "ESP", Position: "CC", Teams: [{ club: "es Villarreal", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Verza", Country: "ESP", Position: "CC", Teams: [{ club: "es Villarreal", matches: 7, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Pere Martí", Country: "ESP", Position: "CC", Teams: [{ club: "es Villarreal", matches: 43, goals: 1, assists: 1 }, { club: "es Malaga", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Juliano Belletti", Country: "BRA", Position: "DF,CC", Teams: [{ club: "es Villarreal", matches: 69, goals: 6, assists: 6 }, { club: "es Barcelona", matches: 91, goals: 1, assists: 7 }, { club: "en Chelsea", matches: 74, goals: 5, assists: 5 },], Titles: "", WC: "" },
    { name: "Víctor", Country: "ESP", Position: "DL", Teams: [{ club: "es Villarreal", matches: 136, goals: 39, assists: 27 },], Titles: "", WC: "" },
    { name: "Miguel Ángel Tena", Country: "ESP", Position: "DF", Teams: [{ club: "es Villarreal", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Unai Vergara", Country: "ESP", Position: "DF", Teams: [{ club: "es Villarreal", matches: 60, goals: 5, assists: 1 },], Titles: "", WC: "" },
    { name: "Quique Medina", Country: "ESP", Position: "DF", Teams: [{ club: "es Villarreal", matches: 28, goals: 0, assists: 0 }, { club: "es Getafe", matches: 17, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Antonio de Nigris", Country: "MEX", Position: "DL", Teams: [{ club: "es Villarreal", matches: 15, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Javi Gracia", Country: "ESP", Position: "CC", Teams: [{ club: "es Villarreal", matches: 58, goals: 3, assists: 4 },], Titles: "", WC: "" },
    { name: "Constantin Gâlcă", Country: "ROU", Position: "CC", Teams: [{ club: "es Villarreal", matches: 38, goals: 1, assists: 4 }, { club: "es Espanyol", matches: 129, goals: 17, assists: 4 },], Titles: "", WC: "" },
    { name: "Rubén Reyes", Country: "ESP", Position: "CC", Teams: [{ club: "es Villarreal", matches: 5, goals: 0, assists: 0 }, { club: "es Getafe", matches: 2, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Jesús Unanua", Country: "ESP", Position: "PO", Teams: [{ club: "es Villarreal", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Guillermo Amor", Country: "ESP", Position: "CC", Teams: [{ club: "es Villarreal", matches: 65, goals: 1, assists: 3 }, { club: "es Barcelona", matches: 26, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Diego Cagna", Country: "ARG", Position: "CC", Teams: [{ club: "es Villarreal", matches: 54, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Juan Antonio Pizzi", Country: "ESP", Position: "DL", Teams: [{ club: "es Villarreal", matches: 13, goals: 1, assists: 1 }, { club: "es Barcelona", matches: 18, goals: 2, assists: 0 }, { club: "pt Porto", matches: 14, goals: 3, assists: 0 },], Titles: "", WC: "" },
    { name: "Gheorghe Craioveanu", Country: "ROU", Position: "DL", Teams: [{ club: "es Villarreal", matches: 82, goals: 20, assists: 3 }, { club: "es Getafe", matches: 120, goals: 16, assists: 23 },], Titles: "", WC: "" },
    { name: "Quique Martín", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 14, goals: 0, assists: 0 }, { club: "es Espanyol", matches: 53, goals: 4, assists: 0 },], Titles: "", WC: "" },
    { name: "Gerard Escoda", Country: "ESP", Position: "DL", Teams: [{ club: "es Villarreal", matches: 31, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Bruno Marioni", Country: "ARG", Position: "DL", Teams: [{ club: "es Villarreal", matches: 13, goals: 3, assists: 0 }, { club: "pt Sporting", matches: 4, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Moisés", Country: "ESP", Position: "DL", Teams: [{ club: "es Villarreal", matches: 55, goals: 11, assists: 1 }, { club: "es Sevilla", matches: 42, goals: 14, assists: 1 }, { club: "es Celta", matches: 15, goals: 5, assists: 0 },], Titles: "", WC: "" },
    { name: "Gustavo Barros Schelotto", Country: "ARG", Position: "CC", Teams: [{ club: "es Villarreal", matches: 8, goals: 0, assists: 2 },], Titles: "", WC: "" },
    { name: "Walter Gaitán", Country: "ARG", Position: "CC,DL", Teams: [{ club: "es Villarreal", matches: 16, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Jaime Ramos", Country: "ESP", Position: "CC", Teams: [{ club: "es Villarreal", matches: 10, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Igor Taševski", Country: "SRB", Position: "DF", Teams: [{ club: "es Villarreal", matches: 32, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Andrés Palop", Country: "ESP", Position: "PO", Teams: [{ club: "es Villarreal", matches: 35, goals: 0, assists: 0 }, { club: "es Sevilla", matches: 260, goals: 1, assists: 0 }, { club: "es Valencia", matches: 64, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Roberto Fernández Bonillo", Country: "ESP", Position: "CC", Teams: [{ club: "es Villarreal", matches: 37, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "David Albelda", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Villarreal", matches: 35, goals: 2, assists: 0 }, { club: "es Valencia", matches: 439, goals: 9, assists: 12 },], Titles: "", WC: "" },
    { name: "Gerardo", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Villarreal", matches: 34, goals: 2, assists: 0 }, { club: "es Malaga", matches: 171, goals: 8, assists: 17 }, { club: "es Valencia", matches: 14, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Antonio Díaz Jurado", Country: "ESP", Position: "CC", Teams: [{ club: "es Villarreal", matches: 35, goals: 3, assists: 0 },], Titles: "", WC: "" },
    { name: "Pascual Donat", Country: "ESP", Position: "DF", Teams: [{ club: "es Villarreal", matches: 31, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Alberto Saavedra Brazo", Country: "ESP", Position: "CC", Teams: [{ club: "es Villarreal", matches: 34, goals: 3, assists: 0 },], Titles: "", WC: "" },
    { name: "Manuel Alfaro", Country: "ESP", Position: "DL", Teams: [{ club: "es Villarreal", matches: 35, goals: 12, assists: 0 },], Titles: "", WC: "" },
    { name: "Jesús García Sanjuán", Country: "ESP", Position: "CC", Teams: [{ club: "es Villarreal", matches: 22, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Imanol Alguacil", Country: "ESP", Position: "DF", Teams: [{ club: "es Villarreal", matches: 8, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Thomas Christiansen", Country: "ESP", Position: "DL", Teams: [{ club: "es Villarreal", matches: 19, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "José Pérez Serer", Country: "ESP", Position: "DF", Teams: [{ club: "es Villarreal", matches: 8, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "César Láinez", Country: "ESP", Position: "PO", Teams: [{ club: "es Villarreal", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Javi Sanchis", Country: "ESP", Position: "CC", Teams: [{ club: "es Villarreal", matches: 11, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Sandro Mendes", Country: "CPV", Position: "CC", Teams: [{ club: "es Villarreal", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Ángel Luis", Country: "ESP", Position: "CC", Teams: [{ club: "es Villarreal", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Paco Salillas", Country: "ESP", Position: "DL", Teams: [{ club: "es Villarreal", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Garikoitz Basauri Amezua", Country: "ESP", Position: "PO", Teams: [{ club: "es Villarreal", matches: 0, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Željko Kalajdžić", Country: "SRB", Position: "CC", Teams: [{ club: "es Villarreal", matches: 0, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Luis Pascual", Country: "ESP", Position: "PO", Teams: [{ club: "es Villarreal", matches: 0, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Carlos López", Country: "ESP", Position: "PO", Teams: [{ club: "es Malaga", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Antonio Cordero", Country: "ESP", Position: "CC", Teams: [{ club: "es Malaga", matches: 3, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Bilal Ouacharaf", Country: "MAR", Position: "DF", Teams: [{ club: "es Malaga", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Moussa Diarra", Country: "ESP", Position: "DF", Teams: [{ club: "es Malaga", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Víctor García Marín", Country: "ESP", Position: "DF", Teams: [{ club: "es Malaga", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Juanpe Lele", Country: "ESP", Position: "CC", Teams: [{ club: "es Malaga", matches: 3, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Diego Murillo", Country: "ESP", Position: "DF", Teams: [{ club: "es Malaga", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Loren Zúñiga", Country: "ESP", Position: "DF,CC,DL", Teams: [{ club: "es Malaga", matches: 33, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Juan Hernández", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 2, goals: 0, assists: 0 }, { club: "es Celta", matches: 6, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Dani Lorenzo", Country: "ESP", Position: "DF,CC,DL", Teams: [{ club: "es Malaga", matches: 18, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "David Larrubia", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 13, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Aarón Ochoa", Country: "IRL", Position: "CC", Teams: [{ club: "es Malaga", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Roberto Férnandez", Country: "ESP", Position: "DL", Teams: [{ club: "es Malaga", matches: 36, goals: 3, assists: 1 },], Titles: "", WC: "" },




    { name: "Haitam Abaida", Country: "MAR", Position: "DF,CC,DL", Teams: [{ club: "es Malaga", matches: 15, goals: 1, assists: 1 },], Titles: "", WC: "" },

    { name: "Dioni", Country: "ESP", Position: "DL", Teams: [{ club: "es Malaga", matches: 3, goals: 0, assists: 0 }, { club: "es Deportivo", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Dani Sánchez", Country: "ESP", Position: "CC", Teams: [{ club: "es Malaga", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Kevin Medina", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 31, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Manu Molina", Country: "ESP", Position: "CC", Teams: [{ club: "es Malaga", matches: 2, goals: 0, assists: 0 }, { club: "es Espanyol", matches: 7, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Rubén Castro", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 43, goals: 10, assists: 4 }, { club: "es Betis", matches: 272, goals: 138, assists: 35 }, { club: "es Deportivo", matches: 31, goals: 4, assists: 0 },], Titles: "", WC: "" },
    { name: "Alberto Escassi", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Malaga", matches: 108, goals: 4, assists: 0 }, { club: "es Getafe", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Esteban Burgos", Country: "ARG", Position: "DF", Teams: [{ club: "es Malaga", matches: 32, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Fran Villalba", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 35, goals: 1, assists: 2 }, { club: "es Valencia", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Juande", Country: "ESP", Position: "DF", Teams: [{ club: "es Malaga", matches: 100, goals: 7, assists: 0 },], Titles: "", WC: "" },
    { name: "Javier Jiménez", Country: "ESP", Position: "DF", Teams: [{ club: "es Malaga", matches: 54, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Cristian Gutierrez", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Malaga", matches: 27, goals: 2, assists: 5 },], Titles: "", WC: "" },
    { name: "Luis Muñoz", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Malaga", matches: 101, goals: 7, assists: 1 },], Titles: "", WC: "" },
    { name: "Julián Delmás", Country: "ESP", Position: "DF", Teams: [{ club: "es Malaga", matches: 17, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Jozabed", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 82, goals: 2, assists: 2 }, { club: "es Celta", matches: 76, goals: 2, assists: 7 },], Titles: "", WC: "" },
    { name: "Ramón Enríquez", Country: "ESP", Position: "CC", Teams: [{ club: "es Malaga", matches: 80, goals: 3, assists: 1 },], Titles: "", WC: "" },
    { name: "Álex Gallar", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 20, goals: 1, assists: 4 },], Titles: "", WC: "" },
    { name: "Pablo Hervías", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Malaga", matches: 14, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Álex Calvo", Country: "ESP", Position: "CC", Teams: [{ club: "es Malaga", matches: 11, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Issa Fomba", Country: "MLI", Position: "DF,CC", Teams: [{ club: "es Malaga", matches: 8, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Andrés Caro", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Malaga", matches: 11, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Arvin Appiah", Country: "ENG", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 10, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Víctor Olmo", Country: "ESP", Position: "DF", Teams: [{ club: "es Malaga", matches: 6, goals: 0, assists: 0 },], Titles: "", WC: "" },


    { name: "Victor Gomez", Country: "ESP", Position: "DF,DL", Teams: [{ club: "es Malaga", matches: 36, goals: 0, assists: 5 }, { club: "es Espanyol", matches: 22, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Mathieu Peybernes", Country: "FRA", Position: "DF", Teams: [{ club: "es Malaga", matches: 36, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Daniel Martín", Country: "ESP", Position: "PO", Teams: [{ club: "es Malaga", matches: 28, goals: 0, assists: 0 }, { club: "es Betis", matches: 7, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "David Lombán", Country: "ESP", Position: "DF", Teams: [{ club: "es Malaga", matches: 88, goals: 6, assists: 0 }, { club: "es Valencia", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Dani Barrio", Country: "ESP", Position: "PO", Teams: [{ club: "es Malaga", matches: 42, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Antonio Cortés", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 53, goals: 7, assists: 3 },], Titles: "", WC: "" },
    { name: "Ismael Casas Casado", Country: "ESP", Position: "DF", Teams: [{ club: "es Malaga", matches: 45, goals: 0, assists: 3 },], Titles: "", WC: "" },
    { name: "Jairo Samperio", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 57, goals: 1, assists: 7 }, { club: "es Sevilla", matches: 30, goals: 4, assists: 4 },], Titles: "", WC: "" },
    { name: "Álvaro Vadillo", Country: "ESP", Position: "DF,CC,DL", Teams: [{ club: "es Malaga", matches: 17, goals: 3, assists: 2 }, { club: "es Betis", matches: 55, goals: 2, assists: 4 }, { club: "es Espanyol", matches: 17, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Sékou Gassama", Country: "SEN", Position: "DL", Teams: [{ club: "es Malaga", matches: 23, goals: 3, assists: 0 },], Titles: "", WC: "" },
    { name: "Iván Calero", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Malaga", matches: 22, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Ismael", Country: "ESP", Position: "CC", Teams: [{ club: "es Malaga", matches: 6, goals: 0, assists: 0 }, { club: "es Betis", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Hicham Boussefiane", Country: "MAR", Position: "DF,CC,DL", Teams: [{ club: "es Malaga", matches: 46, goals: 3, assists: 4 },], Titles: "", WC: "" },
    { name: "Yanis Rahmani", Country: "FRA", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 42, goals: 6, assists: 5 },], Titles: "", WC: "" },
    { name: "Caye Quintana", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 38, goals: 5, assists: 3 },], Titles: "", WC: "" },

    { name: "Cristian Rodríguez", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 38, goals: 1, assists: 4 },], Titles: "", WC: "" },
    { name: "Josua Mejías", Country: "VEN", Position: "DF", Teams: [{ club: "es Malaga", matches: 24, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Juan Soriano", Country: "ESP", Position: "PO", Teams: [{ club: "es Malaga", matches: 20, goals: 0, assists: 0 }, { club: "es Sevilla", matches: 11, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Alexander González", Country: "VEN", Position: "DF", Teams: [{ club: "es Malaga", matches: 18, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Mohamed Benkhemassa", Country: "ALG", Position: "CC", Teams: [{ club: "es Malaga", matches: 41, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Cristo", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Malaga", matches: 23, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Alejandro Benítez Palomero", Country: "ESP", Position: "DF", Teams: [{ club: "es Malaga", matches: 11, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Orlando Sá", Country: "POR", Position: "DL", Teams: [{ club: "es Malaga", matches: 21, goals: 1, assists: 0 }, { club: "pt Porto", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Stefan Šćepović", Country: "SRB", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 13, goals: 3, assists: 0 }, { club: "es Getafe", matches: 61, goals: 9, assists: 1 },], Titles: "", WC: "" },
    { name: "Alberto Quintana", Country: "ESP", Position: "CC", Teams: [{ club: "es Malaga", matches: 6, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Julio Martínez", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 15, goals: 0, assists: 2 },], Titles: "", WC: "" },
    { name: "Tete Morente", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 16, goals: 2, assists: 3 },], Titles: "", WC: "" },
    { name: "Mini", Country: "ESP", Position: "CC", Teams: [{ club: "es Malaga", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Juan Cruz", Country: "ESP", Position: "DF,CC,DL", Teams: [{ club: "es Malaga", matches: 5, goals: 1, assists: 1 }, { club: "es Betis", matches: 14, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Badr Boulahroud", Country: "MAR", Position: "CC", Teams: [{ club: "es Malaga", matches: 29, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Esteban Rolón", Country: "ARG", Position: "CC", Teams: [{ club: "es Malaga", matches: 18, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Munir", Country: "MAR", Position: "PO", Teams: [{ club: "es Malaga", matches: 74, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Armando Sadiku", Country: "ALB", Position: "DL", Teams: [{ club: "es Malaga", matches: 36, goals: 13, assists: 1 },], Titles: "", WC: "" },
    { name: "Cifu", Country: "ESP", Position: "DF", Teams: [{ club: "es Malaga", matches: 62, goals: 4, assists: 0 },], Titles: "", WC: "" },
    { name: "Adrián González", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 101, goals: 20, assists: 4 }, { club: "es Getafe", matches: 30, goals: 1, assists: 4 }, { club: "es Celta", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Luis Hernández", Country: "ESP", Position: "DF", Teams: [{ club: "es Malaga", matches: 110, goals: 1, assists: 4 }, { club: "en Leicester", matches: 9, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Juanpi", Country: "VEN", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 131, goals: 9, assists: 7 },], Titles: "", WC: "" },
    { name: "Keidi Bare", Country: "ALB", Position: "CC", Teams: [{ club: "es Malaga", matches: 46, goals: 1, assists: 1 }, { club: "es Espanyol", matches: 101, goals: 1, assists: 5 }, { club: "es Atletico", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Diego González", Country: "ESP", Position: "DF", Teams: [{ club: "es Malaga", matches: 73, goals: 1, assists: 0 }, { club: "es Sevilla", matches: 10, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Renato Santos", Country: "POR", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 57, goals: 2, assists: 7 },], Titles: "", WC: "" },
    { name: "Mikel Villanueva", Country: "VEN", Position: "DF", Teams: [{ club: "es Malaga", matches: 33, goals: 1, assists: 1 },], Titles: "", WC: "" },

    { name: "Hugo Vallejo", Country: "ESP", Position: "DF,CC,DL", Teams: [{ club: "es Malaga", matches: 8, goals: 0, assists: 0 }, { club: "es Deportivo", matches: 13, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Gonzalo Crettaz", Country: "ARG", Position: "PO", Teams: [{ club: "es Malaga", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Kellyan", Country: "ESP", Position: "PO", Teams: [{ club: "es Malaga", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Lorenzo Gonzales", Country: "SUI", Position: "DL", Teams: [{ club: "es Malaga", matches: 6, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Ivan Jaime Pajuelo", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 4, goals: 0, assists: 0 }, { club: "pt Porto", matches: 18, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Gustavo Blanco Leschuk", Country: "ARG", Position: "DL", Teams: [{ club: "es Malaga", matches: 40, goals: 9, assists: 8 },], Titles: "", WC: "" },
    { name: "Federico Ricca", Country: "URU", Position: "DF,CC", Teams: [{ club: "es Malaga", matches: 80, goals: 6, assists: 6 },], Titles: "", WC: "" },
    { name: "Jack Harper", Country: "SCO", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 25, goals: 4, assists: 2 },], Titles: "", WC: "" },
    { name: "Iván Rodríguez", Country: "ESP", Position: "DF", Teams: [{ club: "es Malaga", matches: 22, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Iván Alejo", Country: "ESP", Position: "CC", Teams: [{ club: "es Malaga", matches: 12, goals: 0, assists: 0 }, { club: "es Getafe", matches: 7, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Mamadou Koné", Country: "CIV", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 9, goals: 2, assists: 2 }, { club: "es Deportivo", matches: 22, goals: 4, assists: 4 },], Titles: "", WC: "" },
    { name: "Álex Mula", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 24, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Yevhen Seleznyov", Country: "UKR", Position: "DL", Teams: [{ club: "es Malaga", matches: 12, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Recio", Country: "ESP", Position: "CC", Teams: [{ club: "es Malaga", matches: 148, goals: 10, assists: 12 },], Titles: "", WC: "" },
    { name: "Sead Haksabanović", Country: "MNE", Position: "DL", Teams: [{ club: "es Malaga", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Roberto Rosales", Country: "VEN", Position: "DF,CC", Teams: [{ club: "es Malaga", matches: 146, goals: 2, assists: 9 }, { club: "es Espanyol", matches: 26, goals: 3, assists: 2 },], Titles: "", WC: "" },
    { name: "Ignasi Miquel", Country: "ESP", Position: "DF", Teams: [{ club: "es Malaga", matches: 20, goals: 0, assists: 1 }, { club: "es Getafe", matches: 10, goals: 0, assists: 0 }, { club: "en Arsenal", matches: 6, goals: 0, assists: 0 }, { club: "en Leicester", matches: 7, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Youssef En-Nesyri", Country: "MAR", Position: "DL", Teams: [{ club: "es Malaga", matches: 41, goals: 5, assists: 1 }, { club: "es Sevilla", matches: 183, goals: 64, assists: 3 },], Titles: "", WC: "" },
    { name: "Paul Baysse", Country: "FRA", Position: "DF", Teams: [{ club: "es Malaga", matches: 16, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Adalberto Peñaranda", Country: "VEN", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 16, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Brown Ideye", Country: "NGA", Position: "DL", Teams: [{ club: "es Malaga", matches: 13, goals: 1, assists: 0 }, { club: "gr Olympiakos", matches: 55, goals: 24, assists: 9 },], Titles: "", WC: "" },
    { name: "Maxime Lestienne", Country: "BEL", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 12, goals: 0, assists: 1 }, { club: "nl PSV", matches: 18, goals: 3, assists: 8 },], Titles: "", WC: "" },
    { name: "Andrés Prieto", Country: "ESP", Position: "PO", Teams: [{ club: "es Malaga", matches: 6, goals: 0, assists: 0 }, { club: "es Espanyol", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Isaac Success", Country: "NGA", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 9, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Zdravko Kuzmanović", Country: "SRB", Position: "CC", Teams: [{ club: "es Malaga", matches: 12, goals: 0, assists: 1 }, { club: "it Inter", matches: 51, goals: 1, assists: 2 }, { club: "de Stuttgart", matches: 113, goals: 20, assists: 7 },], Titles: "", WC: "" },
    { name: "Álex Robles", Country: "ESP", Position: "DF", Teams: [{ club: "es Malaga", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Emanuel Cecchini", Country: "ARG", Position: "DF,CC", Teams: [{ club: "es Malaga", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },


    { name: "Carlos Kameni", Country: "CMR", Position: "PO", Teams: [{ club: "es Malaga", matches: 114, goals: 0, assists: 1 }, { club: "es Espanyol", matches: 224, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Ignacio Camacho", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Malaga", matches: 190, goals: 18, assists: 5 }, { club: "es Atletico", matches: 39, goals: 2, assists: 0 }, { club: "de Wolfsburg", matches: 19, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Sandro Ramírez", Country: "ESP", Position: "DL", Teams: [{ club: "es Malaga", matches: 31, goals: 16, assists: 4 }, { club: "es Sevilla", matches: 18, goals: 0, assists: 2 }, { club: "es Barcelona", matches: 31, goals: 7, assists: 2 }, { club: "es Getafe", matches: 30, goals: 4, assists: 0 },], Titles: "", WC: "" },
    { name: "Charles", Country: "BRA", Position: "DL", Teams: [{ club: "es Malaga", matches: 56, goals: 15, assists: 4 }, { club: "es Celta", matches: 61, goals: 16, assists: 6 },], Titles: "", WC: "" },
    { name: "Michael Santos", Country: "URU", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 16, goals: 4, assists: 0 },], Titles: "", WC: "" },
    { name: "Martín Demichelis", Country: "ARG", Position: "DF,CC", Teams: [{ club: "es Malaga", matches: 103, goals: 6, assists: 1 }, { club: "es Espanyol", matches: 2, goals: 0, assists: 0 }, { club: "de Bayern", matches: 227, goals: 15, assists: 8 }, { club: "en Man City", matches: 102, goals: 4, assists: 1 },], Titles: "", WC: "" },
    { name: "Bakary Koné", Country: "BFA", Position: "DF", Teams: [{ club: "es Malaga", matches: 7, goals: 0, assists: 0 }, { club: "fr Lyon", matches: 116, goals: 7, assists: 1 },], Titles: "", WC: "" },
    { name: "Duda", Country: "POR", Position: "DF,CC,DL", Teams: [{ club: "es Malaga", matches: 325, goals: 36, assists: 51 }, { club: "es Sevilla", matches: 38, goals: 1, assists: 4 },], Titles: "", WC: "" },
    { name: "Denys Boyko", Country: "UKR", Position: "PO", Teams: [{ club: "es Malaga", matches: 5, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Weligton Oliveira", Country: "BRA", Position: "DF", Teams: [{ club: "es Malaga", matches: 267, goals: 9, assists: 4 },], Titles: "", WC: "" },
    { name: "Raúl Albentosa", Country: "ESP", Position: "DF", Teams: [{ club: "es Malaga", matches: 31, goals: 2, assists: 0 }, { club: "es Deportivo", matches: 49, goals: 2, assists: 1 },], Titles: "", WC: "" },
    { name: "Duje Čop", Country: "CRO", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 32, goals: 7, assists: 3 },], Titles: "", WC: "" },
    { name: "Arthur Boka", Country: "CIV", Position: "DF", Teams: [{ club: "es Malaga", matches: 42, goals: 0, assists: 1 }, { club: "de Stuttgart", matches: 180, goals: 6, assists: 12 },], Titles: "", WC: "" },
    { name: "Guillermo Ochoa", Country: "MEX", Position: "PO", Teams: [{ club: "es Malaga", matches: 19, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Marcos Angeleri", Country: "ARG", Position: "DF", Teams: [{ club: "es Malaga", matches: 67, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Nordin Amrabat", Country: "MAR", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 64, goals: 8, assists: 10 }, { club: "nl PSV", matches: 63, goals: 10, assists: 7 },], Titles: "", WC: "" },
    { name: "Ricardo Horta", Country: "POR", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 56, goals: 3, assists: 1 },], Titles: "", WC: "" },
    { name: "Egor Filipenko", Country: "BLR", Position: "DF,CC", Teams: [{ club: "es Malaga", matches: 11, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Roque Santa Cruz", Country: "PAR", Position: "DL", Teams: [{ club: "es Malaga", matches: 104, goals: 25, assists: 6 }, { club: "es Betis", matches: 33, goals: 7, assists: 2 }, { club: "de Bayern", matches: 205, goals: 38, assists: 13 }, { club: "en Man City", matches: 20, goals: 3, assists: 0 },], Titles: "", WC: "" },
    { name: "Adnane Tighadouini", Country: "MAR", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 12, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Christian Atsu", Country: "GHA", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 12, goals: 2, assists: 0 }, { club: "pt Porto", matches: 25, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Fábio Espinho", Country: "POR", Position: "CC", Teams: [{ club: "es Malaga", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Juanmi", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 90, goals: 18, assists: 3 }, { club: "es Betis", matches: 101, goals: 29, assists: 6 },], Titles: "", WC: "" },
    { name: "Sergio Sánchez", Country: "ESP", Position: "DF", Teams: [{ club: "es Malaga", matches: 90, goals: 0, assists: 3 }, { club: "es Sevilla", matches: 19, goals: 0, assists: 0 }, { club: "es Espanyol", matches: 55, goals: 3, assists: 0 },], Titles: "", WC: "" },
    { name: "Vitorino Antunes", Country: "POR", Position: "DF,CC", Teams: [{ club: "es Malaga", matches: 67, goals: 1, assists: 3 }, { club: "es Getafe", matches: 67, goals: 1, assists: 6 }, { club: "it Roma", matches: 6, goals: 0, assists: 0 }, { club: "pt Sporting", matches: 8, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Luis Alberto", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 20, goals: 2, assists: 1 }, { club: "es Sevilla", matches: 6, goals: 0, assists: 0 }, { club: "es Deportivo", matches: 31, goals: 6, assists: 7 },], Titles: "", WC: "" },

    { name: "Ezequiel Rescaldani", Country: "ARG", Position: "DL", Teams: [{ club: "es Malaga", matches: 8, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Francisco Portillo", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 81, goals: 5, assists: 8 }, { club: "es Betis", matches: 44, goals: 0, assists: 5 }, { club: "es Getafe", matches: 146, goals: 8, assists: 15 },], Titles: "", WC: "" },
    { name: "Willy Caballero", Country: "ARG", Position: "PO", Teams: [{ club: "es Malaga", matches: 126, goals: 0, assists: 0 }, { club: "en Chelsea", matches: 38, goals: 0, assists: 0 }, { club: "en Man City", matches: 46, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Jesús Gámez", Country: "ESP", Position: "DF", Teams: [{ club: "es Malaga", matches: 274, goals: 1, assists: 19 }, { club: "es Atletico", matches: 37, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Eliseu", Country: "POR", Position: "DF,CC", Teams: [{ club: "es Malaga", matches: 196, goals: 23, assists: 24 }, { club: "pt Benfica", matches: 95, goals: 4, assists: 6 },], Titles: "", WC: "" },
    { name: "Flávio Ferreira", Country: "POR", Position: "DF,CC", Teams: [{ club: "es Malaga", matches: 16, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Pedro Morales", Country: "CHI", Position: "CC", Teams: [{ club: "es Malaga", matches: 22, goals: 4, assists: 3 },], Titles: "", WC: "" },
    { name: "Mounir El Hamdaoui", Country: "MAR", Position: "DL", Teams: [{ club: "es Malaga", matches: 13, goals: 3, assists: 2 }, { club: "nl Ajax", matches: 34, goals: 15, assists: 5 },], Titles: "", WC: "" },
    { name: "Pablo Pérez", Country: "ARG", Position: "CC", Teams: [{ club: "es Malaga", matches: 11, goals: 1, assists: 2 },], Titles: "", WC: "" },
    { name: "Fabrice Olinga", Country: "CMR", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 10, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Oleksandr Yakovenko", Country: "UKR", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 9, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Roberto Chen", Country: "PAN", Position: "DF,CC", Teams: [{ club: "es Malaga", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Bartłomiej Pawłowski", Country: "POL", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 8, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Bobley Anderson", Country: "CIV", Position: "CC", Teams: [{ club: "es Malaga", matches: 8, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Seba Fernández", Country: "URU", Position: "DL", Teams: [{ club: "es Malaga", matches: 85, goals: 13, assists: 6 },], Titles: "", WC: "" },
    { name: "Joaquín", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 65, goals: 9, assists: 8 }, { club: "es Betis", matches: 468, goals: 59, assists: 78 }, { club: "es Valencia", matches: 191, goals: 23, assists: 23 },], Titles: "", WC: "" },
    { name: "Jérémy Toulalan", Country: "FRA", Position: "DF,CC", Teams: [{ club: "es Malaga", matches: 51, goals: 3, assists: 1 }, { club: "fr Lyon", matches: 188, goals: 0, assists: 10 }, { club: "fr Monaco", matches: 99, goals: 1, assists: 3 },], Titles: "", WC: "" },
    { name: "Nacho Monreal", Country: "ESP", Position: "DF", Teams: [{ club: "es Malaga", matches: 47, goals: 1, assists: 4 }, { club: "en Arsenal", matches: 240, goals: 10, assists: 17 },], Titles: "", WC: "" },
    { name: "Diego Lugano", Country: "URU", Position: "DF", Teams: [{ club: "es Malaga", matches: 11, goals: 0, assists: 1 }, { club: "fr PSG", matches: 17, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Diego Buonanotte", Country: "ARG", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 21, goals: 2, assists: 5 },], Titles: "", WC: "" },

    { name: "Salomón Rondón", Country: "VEN", Position: "DL", Teams: [{ club: "es Malaga", matches: 67, goals: 25, assists: 5 },], Titles: "", WC: "" },
    { name: "Joris Mathijsen", Country: "NED", Position: "DF", Teams: [{ club: "es Malaga", matches: 28, goals: 0, assists: 0 }, { club: "nl Feyenoord", matches: 58, goals: 1, assists: 3 },], Titles: "", WC: "" },
    { name: "Enzo Maresca", Country: "ITA", Position: "CC", Teams: [{ club: "es Malaga", matches: 39, goals: 4, assists: 3 }, { club: "es Sevilla", matches: 121, goals: 18, assists: 9 }, { club: "it Juventus", matches: 47, goals: 5, assists: 8 }, { club: "gr Olympiakos", matches: 26, goals: 4, assists: 1 },], Titles: "", WC: "" },
    { name: "Rubén", Country: "ESP", Position: "PO", Teams: [{ club: "es Malaga", matches: 11, goals: 0, assists: 0 }, { club: "es Barcelona", matches: 2, goals: 0, assists: 0 }, { club: "es Deportivo", matches: 32, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Apoño", Country: "ESP", Position: "CC", Teams: [{ club: "es Malaga", matches: 120, goals: 15, assists: 7 },], Titles: "", WC: "" },
    { name: "Kris Stadsgaard", Country: "DEN", Position: "DF", Teams: [{ club: "es Malaga", matches: 25, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Patrick Mtiliga", Country: "DEN", Position: "DF", Teams: [{ club: "es Malaga", matches: 43, goals: 0, assists: 1 }, { club: "nl Feyenoord", matches: 26, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Quincy Owusu-Abeyie", Country: "GHA", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 25, goals: 2, assists: 3 }, { club: "es Celta", matches: 21, goals: 4, assists: 0 }, { club: "en Arsenal", matches: 10, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Sandro Silva", Country: "BRA", Position: "CC", Teams: [{ club: "es Malaga", matches: 24, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Manolo Gaspar", Country: "ESP", Position: "DF", Teams: [{ club: "es Malaga", matches: 35, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Francesc Arnau", Country: "ESP", Position: "PO", Teams: [{ club: "es Malaga", matches: 131, goals: 0, assists: 0 }, { club: "es Barcelona", matches: 29, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Manu Torres", Country: "ESP", Position: "DF", Teams: [{ club: "es Malaga", matches: 24, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Rodrigo Galatto", Country: "BRA", Position: "PO", Teams: [{ club: "es Malaga", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Iván González", Country: "ESP", Position: "DF", Teams: [{ club: "es Malaga", matches: 29, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Nabil Baha", Country: "MAR", Position: "DL", Teams: [{ club: "es Malaga", matches: 109, goals: 24, assists: 6 },], Titles: "", WC: "" },
    { name: "Hélder Rosário", Country: "POR", Position: "DF", Teams: [{ club: "es Malaga", matches: 68, goals: 3, assists: 0 },], Titles: "", WC: "" },
    { name: "Edinho", Country: "POR", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 18, goals: 2, assists: 0 },], Titles: "", WC: "" },

    { name: "Gustavo Munúa", Country: "URU", Position: "PO", Teams: [{ club: "es Malaga", matches: 38, goals: 0, assists: 0 }, { club: "es Deportivo", matches: 28, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Selim Benachour", Country: "TUN", Position: "CC", Teams: [{ club: "es Malaga", matches: 23, goals: 0, assists: 2 }, { club: "fr PSG", matches: 33, goals: 2, assists: 2 },], Titles: "", WC: "" },
    { name: "Victor Obinna", Country: "NGA", Position: "DL", Teams: [{ club: "es Malaga", matches: 26, goals: 4, assists: 1 }, { club: "it Inter", matches: 9, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Felipe Caicedo", Country: "ECU", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 18, goals: 4, assists: 2 }, { club: "es Espanyol", matches: 103, goals: 24, assists: 4 }, { club: "it Inter", matches: 3, goals: 0, assists: 0 }, { club: "pt Sporting", matches: 10, goals: 0, assists: 0 }, { club: "en Man City", matches: 32, goals: 7, assists: 0 },], Titles: "", WC: "" },
    { name: "Milan Stepanov", Country: "SRB", Position: "DF", Teams: [{ club: "es Malaga", matches: 12, goals: 0, assists: 0 }, { club: "pt Porto", matches: 14, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Xavi Torres", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Malaga", matches: 11, goals: 1, assists: 0 }, { club: "es Barcelona", matches: 2, goals: 0, assists: 0 }, { club: "es Betis", matches: 56, goals: 2, assists: 2 }, { club: "es Getafe", matches: 35, goals: 0, assists: 2 },], Titles: "", WC: "" },
    { name: "Javi López", Country: "ESP", Position: "CC", Teams: [{ club: "es Malaga", matches: 11, goals: 2, assists: 1 },], Titles: "", WC: "" },
    { name: "Fernando Forestieri", Country: "ITA", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 19, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Orozco", Country: "ESP", Position: "DF", Teams: [{ club: "es Malaga", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Pedro Pareja Duque", Country: "ESP", Position: "DL", Teams: [{ club: "es Malaga", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Lolo", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Malaga", matches: 26, goals: 4, assists: 0 }, { club: "es Sevilla", matches: 28, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Nacho", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Malaga", matches: 70, goals: 4, assists: 5 }, { club: "es Betis", matches: 153, goals: 1, assists: 5 }, { club: "es Getafe", matches: 42, goals: 4, assists: 4 },], Titles: "", WC: "" },
    { name: "Miguel Ángel", Country: "ESP", Position: "CC", Teams: [{ club: "es Malaga", matches: 156, goals: 7, assists: 6 }, { club: "es Betis", matches: 35, goals: 0, assists: 2 },], Titles: "", WC: "" },
    { name: "Pablo", Country: "BRA", Position: "DF,DL", Teams: [{ club: "es Malaga", matches: 13, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Salva Ballesta", Country: "ESP", Position: "DL", Teams: [{ club: "es Malaga", matches: 123, goals: 47, assists: 10 }, { club: "es Valencia", matches: 28, goals: 7, assists: 3 }, { club: "es Atletico", matches: 28, goals: 6, assists: 1 },], Titles: "", WC: "" },
    { name: "Cheli", Country: "ESP", Position: "CC", Teams: [{ club: "es Malaga", matches: 36, goals: 2, assists: 1 },], Titles: "", WC: "" },
    { name: "Adriano", Country: "BRA", Position: "DL", Teams: [{ club: "es Malaga", matches: 7, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "José Juan Luque", Country: "ESP", Position: "CC", Teams: [{ club: "es Malaga", matches: 25, goals: 3, assists: 2 }, { club: "es Espanyol", matches: 8, goals: 0, assists: 2 }, { club: "es Atletico", matches: 25, goals: 1, assists: 3 },], Titles: "", WC: "" },
    { name: "Adriano Rossato", Country: "BRA", Position: "DF", Teams: [{ club: "es Malaga", matches: 37, goals: 2, assists: 1 },], Titles: "", WC: "" },
    { name: "Antonio Hidalgo", Country: "ESP", Position: "CC", Teams: [{ club: "es Malaga", matches: 109, goals: 28, assists: 12 },], Titles: "", WC: "" },
    { name: "Paulo Jorge", Country: "POR", Position: "CC", Teams: [{ club: "es Malaga", matches: 32, goals: 1, assists: 5 }, { club: "pt Benfica", matches: 20, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Roberto Peragón", Country: "ESP", Position: "DL", Teams: [{ club: "es Malaga", matches: 27, goals: 7, assists: 1 },], Titles: "", WC: "" },
    { name: "Álvaro Silva", Country: "PHI", Position: "DF", Teams: [{ club: "es Malaga", matches: 46, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Vicente Valcarce", Country: "ESP", Position: "DF", Teams: [{ club: "es Malaga", matches: 227, goals: 5, assists: 7 },], Titles: "", WC: "" },
    { name: "Iván Rosado", Country: "ESP", Position: "DL", Teams: [{ club: "es Malaga", matches: 25, goals: 4, assists: 0 },], Titles: "", WC: "" },
    { name: "Jesule", Country: "ESP", Position: "DF", Teams: [{ club: "es Malaga", matches: 32, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Jon Erice", Country: "ESP", Position: "CC", Teams: [{ club: "es Malaga", matches: 5, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Raúl Gaitán", Country: "ESP", Position: "DF", Teams: [{ club: "es Malaga", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Sandro", Country: "ESP", Position: "CC", Teams: [{ club: "es Malaga", matches: 156, goals: 3, assists: 20 },], Titles: "", WC: "" },
    { name: "Stevan Stošić", Country: "SRB", Position: "CC", Teams: [{ club: "es Malaga", matches: 6, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Armando Lozano", Country: "ESP", Position: "DF", Teams: [{ club: "es Malaga", matches: 25, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Pablo Couñago", Country: "ESP", Position: "DL", Teams: [{ club: "es Malaga", matches: 54, goals: 10, assists: 0 }, { club: "es Celta", matches: 10, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Edgar Pacheco", Country: "POR", Position: "DL", Teams: [{ club: "es Malaga", matches: 184, goals: 14, assists: 13 }, { club: "es Getafe", matches: 19, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Jonatan Valle", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 26, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "César Navas", Country: "ESP", Position: "DF", Teams: [{ club: "es Malaga", matches: 63, goals: 4, assists: 1 },], Titles: "", WC: "" },
    { name: "José Ángel Gascón", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 15, goals: 2, assists: 1 },], Titles: "", WC: "" },
    { name: "Marcelo Romero", Country: "URU", Position: "CC", Teams: [{ club: "es Malaga", matches: 139, goals: 5, assists: 2 },], Titles: "", WC: "" },
    { name: "O.J. Morales", Country: "URU", Position: "CC", Teams: [{ club: "es Malaga", matches: 11, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Perico", Country: "ESP", Position: "CC", Teams: [{ club: "es Malaga", matches: 24, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Gabriel Schürrer", Country: "ARG", Position: "DF", Teams: [{ club: "es Malaga", matches: 9, goals: 0, assists: 0 }, { club: "es Deportivo", matches: 46, goals: 3, assists: 0 }, { club: "gr Olympiakos", matches: 49, goals: 1, assists: 2 },], Titles: "", WC: "" },
    { name: "José Mari", Country: "ESP", Position: "DF", Teams: [{ club: "es Malaga", matches: 7, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Saúl", Country: "ESP", Position: "CC", Teams: [{ club: "es Malaga", matches: 15, goals: 0, assists: 1 }, { club: "es Deportivo", matches: 29, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Richard Morales", Country: "URU", Position: "DL", Teams: [{ club: "es Malaga", matches: 41, goals: 3, assists: 4 },], Titles: "", WC: "" },
    { name: "Ernesto", Country: "ESP", Position: "CC", Teams: [{ club: "es Malaga", matches: 12, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Popo", Country: "ESP", Position: "CC", Teams: [{ club: "es Malaga", matches: 8, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Ador", Country: "ESP", Position: "DL", Teams: [{ club: "es Malaga", matches: 6, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Ricardo Bóvio", Country: "BRA", Position: "CC", Teams: [{ club: "es Malaga", matches: 17, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Gabriel", Country: "BRA", Position: "DF", Teams: [{ club: "es Malaga", matches: 17, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Antonio López", Country: "ESP", Position: "CC", Teams: [{ club: "es Malaga", matches: 15, goals: 0, assists: 2 }, { club: "es Sevilla", matches: 35, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Manu Sánchez", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 103, goals: 8, assists: 5 },], Titles: "", WC: "" },
    { name: "Anderson Silva", Country: "BRA", Position: "CC", Teams: [{ club: "es Malaga", matches: 15, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Litos", Country: "POR", Position: "DF", Teams: [{ club: "es Malaga", matches: 94, goals: 6, assists: 0 },], Titles: "", WC: "" },
    { name: "Jorge Ribeiro", Country: "POR", Position: "DF,CC", Teams: [{ club: "es Malaga", matches: 5, goals: 0, assists: 0 }, { club: "pt Benfica", matches: 23, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Paco Esteban", Country: "ESP", Position: "DL", Teams: [{ club: "es Malaga", matches: 18, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Fernando Usero", Country: "ESP", Position: "CC", Teams: [{ club: "es Malaga", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Diego Castro", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 2, goals: 0, assists: 0 }, { club: "es Getafe", matches: 133, goals: 19, assists: 10 },], Titles: "", WC: "" },
    { name: "Jorge Pina Roldán", Country: "ESP", Position: "CC", Teams: [{ club: "es Malaga", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Márcio Amoroso", Country: "BRA", Position: "DL", Teams: [{ club: "es Malaga", matches: 29, goals: 5, assists: 2 }, { club: "it Milan", matches: 4, goals: 1, assists: 0 }, { club: "de Leverkusen", matches: 79, goals: 38, assists: 9 },], Titles: "", WC: "" },
    { name: "Fernando Baiano", Country: "BRA", Position: "DL", Teams: [{ club: "es Malaga", matches: 17, goals: 9, assists: 1 }, { club: "es Celta", matches: 77, goals: 31, assists: 6 }, { club: "de Wolfsburg", matches: 17, goals: 11, assists: 2 },], Titles: "", WC: "" },
    { name: "Paulo Wanchope", Country: "CRC", Position: "DL", Teams: [{ club: "es Malaga", matches: 25, goals: 5, assists: 2 }, { club: "en Man City", matches: 67, goals: 27, assists: 6 },], Titles: "", WC: "" },
    { name: "Ivan Leko", Country: "CRO", Position: "CC", Teams: [{ club: "es Malaga", matches: 84, goals: 4, assists: 3 },], Titles: "", WC: "" },
    { name: "Míchel", Country: "ESP", Position: "CC", Teams: [{ club: "es Malaga", matches: 9, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Raúl Iznata", Country: "ESP", Position: "DF", Teams: [{ club: "es Malaga", matches: 50, goals: 0, assists: 2 },], Titles: "", WC: "" },
    { name: "Federico Insúa", Country: "ARG", Position: "CC", Teams: [{ club: "es Malaga", matches: 31, goals: 3, assists: 3 },], Titles: "", WC: "" },
    { name: "Diego Alonso", Country: "URU", Position: "DL", Teams: [{ club: "es Malaga", matches: 23, goals: 6, assists: 1 }, { club: "es Valencia", matches: 30, goals: 6, assists: 2 }, { club: "es Atletico", matches: 38, goals: 22, assists: 2 },], Titles: "", WC: "" },
    { name: "Mikel Roteta", Country: "ESP", Position: "DF", Teams: [{ club: "es Malaga", matches: 118, goals: 3, assists: 1 },], Titles: "", WC: "" },
    { name: "Kiki Musampa", Country: "NED", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 106, goals: 23, assists: 9 }, { club: "es Atletico", matches: 34, goals: 2, assists: 2 }, { club: "en Man City", matches: 41, goals: 3, assists: 3 },], Titles: "", WC: "" },
    { name: "Julio Dely Valdés", Country: "PAN", Position: "DL", Teams: [{ club: "es Malaga", matches: 114, goals: 42, assists: 7 },], Titles: "", WC: "" },
    { name: "Darío Silva", Country: "URU", Position: "DL", Teams: [{ club: "es Malaga", matches: 107, goals: 36, assists: 11 }, { club: "es Sevilla", matches: 55, goals: 9, assists: 7 }, { club: "es Espanyol", matches: 15, goals: 3, assists: 0 },], Titles: "", WC: "" },
    { name: "Bravo", Country: "ESP", Position: "DF", Teams: [{ club: "es Malaga", matches: 69, goals: 1, assists: 2 },], Titles: "", WC: "" },
    { name: "Koke", Country: "ESP", Position: "DL", Teams: [{ club: "es Malaga", matches: 8, goals: 1, assists: 0 }, { club: "fr Marseille", matches: 45, goals: 6, assists: 3 }, { club: "pt Sporting", matches: 6, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Rafa", Country: "ESP", Position: "PO", Teams: [{ club: "es Malaga", matches: 7, goals: 0, assists: 0 },], Titles: "", WC: "" },


    { name: "Ariel Zárate", Country: "ARG", Position: "CC,DL", Teams: [{ club: "es Malaga", matches: 60, goals: 6, assists: 4 },], Titles: "", WC: "" },
    { name: "Domingo Larrainzar", Country: "ESP", Position: "DF", Teams: [{ club: "es Malaga", matches: 66, goals: 4, assists: 0 },], Titles: "", WC: "" },

    { name: "José María Movilla", Country: "ESP", Position: "CC", Teams: [{ club: "es Malaga", matches: 72, goals: 6, assists: 5 }, { club: "es Atletico", matches: 73, goals: 2, assists: 4 },], Titles: "", WC: "" },
    { name: "Francisco Rufete", Country: "ESP", Position: "CC", Teams: [{ club: "es Malaga", matches: 65, goals: 9, assists: 14 }, { club: "es Valencia", matches: 166, goals: 17, assists: 14 }, { club: "es Espanyol", matches: 68, goals: 2, assists: 6 },], Titles: "", WC: "" },
    { name: "Agostinho", Country: "POR", Position: "CC", Teams: [{ club: "es Malaga", matches: 55, goals: 5, assists: 9 }, { club: "fr PSG", matches: 7, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Manuel Ruano", Country: "ESP", Position: "CC", Teams: [{ club: "es Malaga", matches: 32, goals: 0, assists: 3 },], Titles: "", WC: "" },
    { name: "Martín Rivas", Country: "URU", Position: "DF", Teams: [{ club: "es Malaga", matches: 6, goals: 0, assists: 0 }, { club: "it Inter", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Basti", Country: "ESP", Position: "DL", Teams: [{ club: "es Malaga", matches: 8, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Irurzun", Country: "ESP", Position: "DL", Teams: [{ club: "es Malaga", matches: 5, goals: 0, assists: 0 },], Titles: "", WC: "" },


    { name: "Catanha", Country: "ESP", Position: "DL", Teams: [{ club: "es Malaga", matches: 33, goals: 24, assists: 4 }, { club: "es Celta", matches: 133, goals: 44, assists: 10 },], Titles: "", WC: "" },
    { name: "Genilson Andres de Oliveira", Country: "BRA", Position: "DL", Teams: [{ club: "es Malaga", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Lucas Ocampos", Country: "ARG", Position: "DF,CC,DL", Teams: [{ club: "es Sevilla", matches: 192, goals: 42, assists: 19 }, { club: "fr Monaco", matches: 87, goals: 12, assists: 3 }, { club: "fr Marseille", matches: 127, goals: 27, assists: 14 }, { club: "nl Ajax", matches: 6, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Adrià Pedrosa", Country: "ESP", Position: "DF,CC,DL", Teams: [{ club: "es Sevilla", matches: 32, goals: 2, assists: 4 }, { club: "es Espanyol", matches: 115, goals: 6, assists: 8 },], Titles: "", WC: "" },
    { name: "Ivan Rakitić", Country: "CRO", Position: "CC", Teams: [{ club: "es Sevilla", matches: 307, goals: 45, assists: 47 }, { club: "es Barcelona", matches: 308, goals: 36, assists: 40 },], Titles: "", WC: "" },
    { name: "Nemanja Gudelj", Country: "SRB", Position: "DF,CC", Teams: [{ club: "es Sevilla", matches: 185, goals: 7, assists: 1 }, { club: "pt Sporting", matches: 32, goals: 1, assists: 1 }, { club: "nl Ajax", matches: 50, goals: 6, assists: 8 },], Titles: "", WC: "" },
    { name: "Djibril Sow", Country: "SUI", Position: "CC", Teams: [{ club: "es Sevilla", matches: 30, goals: 1, assists: 2 },], Titles: "", WC: "" },
    { name: "Marko Dmitrović", Country: "SRB", Position: "PO", Teams: [{ club: "es Sevilla", matches: 53, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Loïc Bade", Country: "FRA", Position: "DF", Teams: [{ club: "es Sevilla", matches: 49, goals: 2, assists: 1 },], Titles: "", WC: "" },
    { name: "Jesús Navas", Country: "ESP", Position: "DF,CC,DL", Teams: [{ club: "es Sevilla", matches: 617, goals: 29, assists: 92 }, { club: "en Man City", matches: 170, goals: 6, assists: 30 },], Titles: "", WC: "" },
    { name: "Boubakary Soumaré", Country: "FRA", Position: "CC", Teams: [{ club: "es Sevilla", matches: 22, goals: 0, assists: 0 }, { club: "en Leicester", matches: 59, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Juanlu Sánchez", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Sevilla", matches: 31, goals: 1, assists: 3 },], Titles: "", WC: "" },
    { name: "Suso", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Sevilla", matches: 147, goals: 10, assists: 17 }, { club: "it Milan", matches: 160, goals: 25, assists: 29 },], Titles: "", WC: "" },
    { name: "Ørjan Nyland", Country: "NOR", Position: "PO", Teams: [{ club: "es Sevilla", matches: 15, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Kike Salas", Country: "ESP", Position: "DF", Teams: [{ club: "es Sevilla", matches: 26, goals: 3, assists: 1 },], Titles: "", WC: "" },
    { name: "Marcos Acuña", Country: "ARG", Position: "DF,CC,DL", Teams: [{ club: "es Sevilla", matches: 140, goals: 5, assists: 15 }, { club: "pt Sporting", matches: 108, goals: 7, assists: 18 },], Titles: "", WC: "" },
    { name: "Dodi Lukebakio", Country: "BEL", Position: "CC,DL", Teams: [{ club: "es Sevilla", matches: 16, goals: 2, assists: 1 }, { club: "de Wolfsburg", matches: 25, goals: 1, assists: 2 },], Titles: "", WC: "" },
    { name: "Fernando", Country: "BRA", Position: "DF,CC", Teams: [{ club: "es Sevilla", matches: 167, goals: 7, assists: 10 }, { club: "pt Porto", matches: 195, goals: 2, assists: 5 }, { club: "en Man City", matches: 99, goals: 4, assists: 4 },], Titles: "", WC: "" },
    { name: "Érik Lamela", Country: "ARG", Position: "CC,DL", Teams: [{ club: "es Sevilla", matches: 88, goals: 16, assists: 6 }, { club: "it Roma", matches: 62, goals: 19, assists: 10 }, { club: "en Tottenham", matches: 252, goals: 36, assists: 41 },], Titles: "", WC: "" },
    { name: "Rafa Mir", Country: "ESP", Position: "DF,CC,DL", Teams: [{ club: "es Sevilla", matches: 105, goals: 24, assists: 3 }, { club: "es Valencia", matches: 8, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Joan Jordán", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Sevilla", matches: 193, goals: 7, assists: 13 }, { club: "es Espanyol", matches: 16, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Isaac Bernal", Country: "ESP", Position: "DL", Teams: [{ club: "es Sevilla", matches: 8, goals: 5, assists: 1 },], Titles: "", WC: "" },
    { name: "Tanguy Nianzou", Country: "FRA", Position: "DF,CC", Teams: [{ club: "es Sevilla", matches: 40, goals: 3, assists: 0 }, { club: "fr PSG", matches: 13, goals: 3, assists: 1 }, { club: "de Bayern", matches: 28, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Marcão", Country: "BRA", Position: "DF", Teams: [{ club: "es Sevilla", matches: 20, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Adnan Januzaj", Country: "BEL", Position: "CC,DL", Teams: [{ club: "es Sevilla", matches: 16, goals: 0, assists: 0 }, { club: "de Leverkusen", matches: 12, goals: 0, assists: 2 }, { club: "en Man Utd", matches: 55, goals: 5, assists: 3 },], Titles: "", WC: "" },
    { name: "Yassine Bounou", Country: "MAR", Position: "PO", Teams: [{ club: "es Sevilla", matches: 140, goals: 1, assists: 3 },], Titles: "", WC: "" },
    { name: "Lucien Agoume", Country: "FRA", Position: "CC", Teams: [{ club: "es Sevilla", matches: 4, goals: 0, assists: 0 }, { club: "it Inter", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Federico Gattoni", Country: "ARG", Position: "DF", Teams: [{ club: "es Sevilla", matches: 4, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Manuel Sebastián", Country: "ESP", Position: "CC", Teams: [{ club: "es Sevilla", matches: 5, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Darío Fuentes", Country: "ESP", Position: "DF", Teams: [{ club: "es Sevilla", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Hannibal Mejbri", Country: "TUN", Position: "CC,DL", Teams: [{ club: "es Sevilla", matches: 3, goals: 0, assists: 0 }, { club: "en Man Utd", matches: 13, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Diego Iturralde", Country: "ESP", Position: "DF", Teams: [{ club: "es Sevilla", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Jesús Corona", Country: "MEX", Position: "DF,CC,DL", Teams: [{ club: "es Sevilla", matches: 28, goals: 3, assists: 4 }, { club: "pt Porto", matches: 241, goals: 27, assists: 47 },], Titles: "", WC: "" },
    { name: "Gonzalo Montiel", Country: "ARG", Position: "DF", Teams: [{ club: "es Sevilla", matches: 72, goals: 2, assists: 5 },], Titles: "", WC: "" },


    { name: "Alex Telles", Country: "BRA", Position: "DF,DL", Teams: [{ club: "es Sevilla", matches: 38, goals: 0, assists: 3 }, { club: "it Inter", matches: 22, goals: 0, assists: 1 }, { club: "pt Porto", matches: 161, goals: 23, assists: 46 }, { club: "en Man Utd", matches: 50, goals: 1, assists: 7 },], Titles: "", WC: "" },

    { name: "Bryan Gil", Country: "ESP", Position: "DF,CC,DL", Teams: [{ club: "es Sevilla", matches: 44, goals: 4, assists: 5 }, { club: "es Valencia", matches: 17, goals: 0, assists: 1 }, { club: "en Tottenham", matches: 40, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Papu Gómez", Country: "ARG", Position: "CC,DL", Teams: [{ club: "es Sevilla", matches: 90, goals: 10, assists: 5 },], Titles: "", WC: "" },
    { name: "Pape Gueye", Country: "SEN", Position: "CC", Teams: [{ club: "es Sevilla", matches: 16, goals: 1, assists: 3 }, { club: "fr Marseille", matches: 103, goals: 4, assists: 3 },], Titles: "", WC: "" },
    { name: "Carmona", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Sevilla", matches: 17, goals: 2, assists: 1 }, { club: "es Getafe", matches: 19, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Thomas Delaney", Country: "DEN", Position: "DF,CC", Teams: [{ club: "es Sevilla", matches: 47, goals: 2, assists: 1 }, { club: "de Leverkusen", matches: 88, goals: 4, assists: 9 },], Titles: "", WC: "" },
    { name: "Kasper Dolberg", Country: "DEN", Position: "DL", Teams: [{ club: "es Sevilla", matches: 8, goals: 0, assists: 1 }, { club: "nl Ajax", matches: 100, goals: 39, assists: 9 },], Titles: "", WC: "" },
    { name: "Carlos Álvarez", Country: "ESP", Position: "CC", Teams: [{ club: "es Sevilla", matches: 3, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Nacho Quintana", Country: "ESP", Position: "CC", Teams: [{ club: "es Sevilla", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Iván Romero", Country: "ESP", Position: "CC", Teams: [{ club: "es Sevilla", matches: 11, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Pedro Ortiz", Country: "ESP", Position: "CC", Teams: [{ club: "es Sevilla", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Diego Carlos", Country: "BRA", Position: "DF", Teams: [{ club: "es Sevilla", matches: 136, goals: 6, assists: 0 },], Titles: "", WC: "" },
    { name: "Jules Koundé", Country: "FRA", Position: "DF", Teams: [{ club: "es Sevilla", matches: 132, goals: 8, assists: 3 }, { club: "es Barcelona", matches: 72, goals: 3, assists: 9 },], Titles: "", WC: "" },
    { name: "Anthony Martial", Country: "FRA", Position: "DF,CC,DL", Teams: [{ club: "es Sevilla", matches: 12, goals: 1, assists: 1 }, { club: "fr Lyon", matches: 4, goals: 0, assists: 0 }, { club: "fr Monaco", matches: 58, goals: 13, assists: 6 }, { club: "en Man Utd", matches: 317, goals: 90, assists: 43 },], Titles: "", WC: "" },
    { name: "Oussama Idrissi", Country: "MAR", Position: "DF,CC,DL", Teams: [{ club: "es Sevilla", matches: 17, goals: 0, assists: 2 }, { club: "nl Ajax", matches: 13, goals: 0, assists: 0 }, { club: "nl Feyenoord", matches: 34, goals: 7, assists: 9 },], Titles: "", WC: "" },
    { name: "Alfonso Pastor", Country: "ESP", Position: "PO", Teams: [{ club: "es Sevilla", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Javier Díaz", Country: "ESP", Position: "PO", Teams: [{ club: "es Sevilla", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Luismi", Country: "ESP", Position: "CC", Teams: [{ club: "es Sevilla", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Zarzana", Country: "ESP", Position: "DL", Teams: [{ club: "es Sevilla", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Luuk de Jong", Country: "NED", Position: "CC,DL", Teams: [{ club: "es Sevilla", matches: 93, goals: 18, assists: 3 }, { club: "es Barcelona", matches: 29, goals: 7, assists: 0 }, { club: "nl PSV", matches: 241, goals: 143, assists: 52 },], Titles: "", WC: "" },
    { name: "Sergi Gómez", Country: "ESP", Position: "DF", Teams: [{ club: "es Sevilla", matches: 79, goals: 0, assists: 1 }, { club: "es Celta", matches: 134, goals: 2, assists: 1 }, { club: "es Espanyol", matches: 86, goals: 3, assists: 2 },], Titles: "", WC: "" },
    { name: "Sergio Escudero", Country: "ESP", Position: "DF,CC,DL", Teams: [{ club: "es Sevilla", matches: 170, goals: 5, assists: 12 }, { club: "es Getafe", matches: 62, goals: 5, assists: 3 },], Titles: "", WC: "" },
    { name: "Tomáš Vaclík", Country: "CZE", Position: "PO", Teams: [{ club: "es Sevilla", matches: 89, goals: 0, assists: 0 }, { club: "gr Olympiakos", matches: 47, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Franco Vázquez", Country: "ARG", Position: "CC,DL", Teams: [{ club: "es Sevilla", matches: 194, goals: 24, assists: 19 },], Titles: "", WC: "" },
    { name: "Carlos Fernández", Country: "ESP", Position: "DL", Teams: [{ club: "es Sevilla", matches: 18, goals: 2, assists: 0 }, { club: "es Deportivo", matches: 25, goals: 8, assists: 2 },], Titles: "", WC: "" },
    { name: "Joris Gnagnon", Country: "FRA", Position: "DF,CC", Teams: [{ club: "es Sevilla", matches: 13, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Éver Banega", Country: "ARG", Position: "CC", Teams: [{ club: "es Sevilla", matches: 230, goals: 27, assists: 35 }, { club: "es Valencia", matches: 158, goals: 9, assists: 21 }, { club: "es Atletico", matches: 27, goals: 1, assists: 0 }, { club: "it Inter", matches: 33, goals: 6, assists: 6 },], Titles: "", WC: "" },
    { name: "Nolito", Country: "ESP", Position: "DF,CC,DL", Teams: [{ club: "es Sevilla", matches: 70, goals: 11, assists: 9 }, { club: "es Barcelona", matches: 2, goals: 0, assists: 0 }, { club: "es Celta", matches: 180, goals: 52, assists: 28 }, { club: "pt Benfica", matches: 46, goals: 12, assists: 7 }, { club: "en Man City", matches: 28, goals: 5, assists: 4 },], Titles: "", WC: "" },
    { name: "Daniel Carriço", Country: "POR", Position: "DF,CC", Teams: [{ club: "es Sevilla", matches: 161, goals: 6, assists: 4 }, { club: "pt Sporting", matches: 119, goals: 4, assists: 1 },], Titles: "", WC: "" },
    { name: "Rony Lopes", Country: "POR", Position: "CC,DL", Teams: [{ club: "es Sevilla", matches: 12, goals: 0, assists: 1 }, { club: "fr Monaco", matches: 82, goals: 21, assists: 11 }, { club: "gr Olympiakos", matches: 23, goals: 3, assists: 2 },], Titles: "", WC: "" },
    { name: "Moanes Dabbur", Country: "ISR", Position: "DL", Teams: [{ club: "es Sevilla", matches: 8, goals: 3, assists: 2 },], Titles: "", WC: "" },
    { name: "José Mena Rodríguez", Country: "ESP", Position: "CC", Teams: [{ club: "es Sevilla", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Wissam Ben Yedder", Country: "FRA", Position: "CC,DL", Teams: [{ club: "es Sevilla", matches: 131, goals: 66, assists: 20 }, { club: "fr Monaco", matches: 183, goals: 110, assists: 26 },], Titles: "", WC: "" },
    { name: "Simon Kjær", Country: "DEN", Position: "DF", Teams: [{ club: "es Sevilla", matches: 64, goals: 3, assists: 1 }, { club: "it Milan", matches: 112, goals: 1, assists: 3 }, { club: "it Roma", matches: 22, goals: 0, assists: 0 }, { club: "de Wolfsburg", matches: 57, goals: 3, assists: 1 },], Titles: "", WC: "" },
    { name: "Quincy Promes", Country: "NED", Position: "DF,CC,DL", Teams: [{ club: "es Sevilla", matches: 49, goals: 3, assists: 6 }, { club: "nl Ajax", matches: 50, goals: 22, assists: 5 },], Titles: "", WC: "" },
    { name: "Roque Mesa", Country: "ESP", Position: "CC", Teams: [{ club: "es Sevilla", matches: 52, goals: 3, assists: 3 },], Titles: "", WC: "" },
    { name: "André Silva", Country: "POR", Position: "CC,DL", Teams: [{ club: "es Sevilla", matches: 38, goals: 11, assists: 0 }, { club: "it Milan", matches: 73, goals: 16, assists: 4 }, { club: "pt Porto", matches: 49, goals: 21, assists: 8 },], Titles: "", WC: "" },
    { name: "Gabriel Mercado", Country: "ARG", Position: "DF", Teams: [{ club: "es Sevilla", matches: 115, goals: 6, assists: 3 },], Titles: "", WC: "" },
    { name: "Ibrahim Amadou", Country: "FRA", Position: "DF,CC", Teams: [{ club: "es Sevilla", matches: 29, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Guilherme Arana", Country: "BRA", Position: "DF,CC", Teams: [{ club: "es Sevilla", matches: 20, goals: 1, assists: 2 },], Titles: "", WC: "" },
    { name: "Maximilian Wöber", Country: "AUT", Position: "DF", Teams: [{ club: "es Sevilla", matches: 8, goals: 0, assists: 0 }, { club: "nl Ajax", matches: 34, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Luis Muriel", Country: "COL", Position: "CC,DL", Teams: [{ club: "es Sevilla", matches: 60, goals: 12, assists: 7 },], Titles: "", WC: "" },
    { name: "Maxime Gonalons", Country: "FRA", Position: "CC", Teams: [{ club: "es Sevilla", matches: 11, goals: 0, assists: 0 }, { club: "it Roma", matches: 23, goals: 0, assists: 2 }, { club: "fr Lyon", matches: 296, goals: 11, assists: 10 },], Titles: "", WC: "" },
    { name: "Marko Rog", Country: "CRO", Position: "CC,DL", Teams: [{ club: "es Sevilla", matches: 13, goals: 0, assists: 0 }, { club: "it Napoli", matches: 65, goals: 2, assists: 2 },], Titles: "", WC: "" },

    { name: "Borja Lasso", Country: "ESP", Position: "CC", Teams: [{ club: "es Sevilla", matches: 6, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Clément Lenglet", Country: "FRA", Position: "DF", Teams: [{ club: "es Sevilla", matches: 71, goals: 4, assists: 1 }, { club: "es Barcelona", matches: 160, goals: 7, assists: 2 }, { club: "en Tottenham", matches: 35, goals: 1, assists: 2 },], Titles: "", WC: "" },
    { name: "Steven Nzonzi", Country: "FRA", Position: "CC", Teams: [{ club: "es Sevilla", matches: 134, goals: 8, assists: 6 }, { club: "it Roma", matches: 39, goals: 1, assists: 2 },], Titles: "", WC: "" },
    { name: "Joaquín Correa", Country: "ARG", Position: "CC,DL", Teams: [{ club: "es Sevilla", matches: 71, goals: 15, assists: 5 }, { club: "it Inter", matches: 77, goals: 10, assists: 5 }, { club: "fr Marseille", matches: 14, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Guido Pizarro", Country: "ARG", Position: "CC", Teams: [{ club: "es Sevilla", matches: 38, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "David Soria", Country: "ESP", Position: "PO", Teams: [{ club: "es Sevilla", matches: 36, goals: 0, assists: 0 }, { club: "es Getafe", matches: 212, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Sébastien Corchia", Country: "FRA", Position: "DF", Teams: [{ club: "es Sevilla", matches: 20, goals: 0, assists: 2 }, { club: "es Espanyol", matches: 7, goals: 0, assists: 1 }, { club: "pt Benfica", matches: 5, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Johannes Geis", Country: "GER", Position: "DF", Teams: [{ club: "es Sevilla", matches: 20, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Lionel Carole", Country: "FRA", Position: "DF,CC", Teams: [{ club: "es Sevilla", matches: 9, goals: 0, assists: 1 }, { club: "pt Benfica", matches: 6, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Michael Krohn-Dehli", Country: "DEN", Position: "CC,DL", Teams: [{ club: "es Sevilla", matches: 67, goals: 5, assists: 9 }, { club: "es Deportivo", matches: 26, goals: 0, assists: 1 }, { club: "es Celta", matches: 103, goals: 2, assists: 13 }, { club: "nl Ajax", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Ganso", Country: "BRA", Position: "CC", Teams: [{ club: "es Sevilla", matches: 27, goals: 7, assists: 4 },], Titles: "", WC: "" },
    { name: "Nicolás Pareja", Country: "ARG", Position: "DF", Teams: [{ club: "es Sevilla", matches: 115, goals: 3, assists: 3 }, { club: "es Espanyol", matches: 60, goals: 3, assists: 1 },], Titles: "", WC: "" },
    { name: "Walter Montoya", Country: "ARG", Position: "DL", Teams: [{ club: "es Sevilla", matches: 5, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Mariano", Country: "BRA", Position: "DF,CC", Teams: [{ club: "es Sevilla", matches: 80, goals: 1, assists: 8 },], Titles: "", WC: "" },
    { name: "Vitolo", Country: "ESP", Position: "DF,CC,DL", Teams: [{ club: "es Sevilla", matches: 174, goals: 27, assists: 32 }, { club: "es Getafe", matches: 7, goals: 0, assists: 0 }, { club: "es Atletico", matches: 101, goals: 7, assists: 7 },], Titles: "", WC: "" },
    { name: "Adil Rami", Country: "FRA", Position: "DF", Teams: [{ club: "es Sevilla", matches: 79, goals: 3, assists: 1 }, { club: "es Valencia", matches: 81, goals: 7, assists: 3 }, { club: "it Milan", matches: 42, goals: 4, assists: 2 }, { club: "fr Marseille", matches: 71, goals: 3, assists: 3 },], Titles: "", WC: "" },
    { name: "Samir Nasri", Country: "FRA", Position: "CC,DL", Teams: [{ club: "es Sevilla", matches: 30, goals: 3, assists: 4 }, { club: "fr Marseille", matches: 141, goals: 11, assists: 21 }, { club: "en Arsenal", matches: 109, goals: 23, assists: 10 }, { club: "en Man City", matches: 161, goals: 21, assists: 36 },], Titles: "", WC: "" },
    { name: "Matías Kranevitter", Country: "ARG", Position: "CC", Teams: [{ club: "es Sevilla", matches: 32, goals: 0, assists: 1 }, { club: "es Atletico", matches: 11, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Stevan Jovetić", Country: "MNE", Position: "CC,DL", Teams: [{ club: "es Sevilla", matches: 24, goals: 7, assists: 5 }, { club: "it Inter", matches: 33, goals: 7, assists: 3 }, { club: "fr Monaco", matches: 77, goals: 21, assists: 1 }, { club: "gr Olympiakos", matches: 18, goals: 3, assists: 2 }, { club: "en Man City", matches: 38, goals: 8, assists: 4 },], Titles: "", WC: "" },
    { name: "Hiroshi Kiyotake", Country: "JPN", Position: "CC,DL", Teams: [{ club: "es Sevilla", matches: 9, goals: 1, assists: 2 },], Titles: "", WC: "" },
    { name: "Timothée Kolodziejczak", Country: "FRA", Position: "DF", Teams: [{ club: "es Sevilla", matches: 91, goals: 3, assists: 1 }, { club: "fr Lyon", matches: 14, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Salvatore Sirigu", Country: "ITA", Position: "PO", Teams: [{ club: "es Sevilla", matches: 3, goals: 0, assists: 0 }, { club: "fr PSG", matches: 183, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Yevhen Konoplyanka", Country: "UKR", Position: "CC,DL", Teams: [{ club: "es Sevilla", matches: 54, goals: 9, assists: 3 },], Titles: "", WC: "" },
    { name: "David Carmona", Country: "ESP", Position: "DF", Teams: [{ club: "es Sevilla", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Grzegorz Krychowiak", Country: "POL", Position: "CC", Teams: [{ club: "es Sevilla", matches: 91, goals: 6, assists: 2 }, { club: "fr PSG", matches: 18, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Kévin Gameiro", Country: "FRA", Position: "DL", Teams: [{ club: "es Sevilla", matches: 142, goals: 65, assists: 14 }, { club: "es Valencia", matches: 121, goals: 24, assists: 10 }, { club: "es Atletico", matches: 82, goals: 27, assists: 11 }, { club: "fr PSG", matches: 67, goals: 19, assists: 3 },], Titles: "", WC: "" },
    { name: "Coke", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Sevilla", matches: 160, goals: 13, assists: 11 },], Titles: "", WC: "" },
    { name: "Benoît Trémoulinas", Country: "FRA", Position: "DF", Teams: [{ club: "es Sevilla", matches: 67, goals: 1, assists: 7 },], Titles: "", WC: "" },
    { name: "Sebastián Cristóforo", Country: "URU", Position: "CC", Teams: [{ club: "es Sevilla", matches: 54, goals: 0, assists: 1 }, { club: "es Getafe", matches: 20, goals: 0, assists: 2 },], Titles: "", WC: "" },
    { name: "Marco Andreolli", Country: "ITA", Position: "DF", Teams: [{ club: "es Sevilla", matches: 9, goals: 0, assists: 1 }, { club: "it Inter", matches: 32, goals: 2, assists: 0 }, { club: "it Roma", matches: 12, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Ciro Immobile", Country: "ITA", Position: "DL", Teams: [{ club: "es Sevilla", matches: 15, goals: 4, assists: 1 }, { club: "it Juventus", matches: 4, goals: 0, assists: 0 }, { club: "de Leverkusen", matches: 34, goals: 10, assists: 2 },], Titles: "", WC: "" },
    { name: "Beto", Country: "POR", Position: "PO", Teams: [{ club: "es Sevilla", matches: 84, goals: 0, assists: 0 }, { club: "pt Sporting", matches: 3, goals: 0, assists: 0 }, { club: "pt Porto", matches: 13, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Federico Fazio", Country: "ARG", Position: "DF", Teams: [{ club: "es Sevilla", matches: 177, goals: 13, assists: 3 }, { club: "it Roma", matches: 168, goals: 14, assists: 4 }, { club: "en Tottenham", matches: 32, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Juan Muñoz", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Sevilla", matches: 12, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Curro", Country: "ESP", Position: "CC", Teams: [{ club: "es Sevilla", matches: 6, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Diogo Figueiras", Country: "POR", Position: "DF,CC", Teams: [{ club: "es Sevilla", matches: 75, goals: 3, assists: 3 }, { club: "gr Olympiakos", matches: 40, goals: 2, assists: 7 },], Titles: "", WC: "" },
    { name: "Gaël Kakuta", Country: "COD", Position: "CC,DL", Teams: [{ club: "es Sevilla", matches: 5, goals: 1, assists: 1 }, { club: "es Deportivo", matches: 10, goals: 2, assists: 1 }, { club: "en Chelsea", matches: 12, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Luismi", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Sevilla", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Antonio Cotán", Country: "ESP", Position: "CC", Teams: [{ club: "es Sevilla", matches: 5, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Stéphane Mbia", Country: "CMR", Position: "DF,CC", Teams: [{ club: "es Sevilla", matches: 63, goals: 12, assists: 5 }, { club: "fr Marseille", matches: 87, goals: 5, assists: 1 },], Titles: "", WC: "" },
    { name: "Alejandro Arribas", Country: "ESP", Position: "DF", Teams: [{ club: "es Sevilla", matches: 18, goals: 0, assists: 0 }, { club: "es Deportivo", matches: 60, goals: 4, assists: 1 },], Titles: "", WC: "" },
    { name: "Gerard Deulofeu", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Sevilla", matches: 28, goals: 3, assists: 6 }, { club: "es Barcelona", matches: 22, goals: 2, assists: 2 },], Titles: "", WC: "" },
    { name: "Iago Aspas", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Sevilla", matches: 25, goals: 10, assists: 1 }, { club: "es Celta", matches: 425, goals: 188, assists: 66 },], Titles: "", WC: "" },

    { name: "Marko Marin", Country: "GER", Position: "CC,DL", Teams: [{ club: "es Sevilla", matches: 28, goals: 0, assists: 6 }, { club: "gr Olympiakos", matches: 44, goals: 11, assists: 7 }, { club: "en Chelsea", matches: 9, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Cala", Country: "ESP", Position: "DF", Teams: [{ club: "es Sevilla", matches: 39, goals: 5, assists: 0 }, { club: "es Getafe", matches: 74, goals: 5, assists: 3 },], Titles: "", WC: "" },
    { name: "Javi Varas", Country: "ESP", Position: "PO", Teams: [{ club: "es Sevilla", matches: 73, goals: 0, assists: 0 }, { club: "es Celta", matches: 35, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Piotr Trochowski", Country: "GER", Position: "CC", Teams: [{ club: "es Sevilla", matches: 64, goals: 3, assists: 3 }, { club: "de Bayern", matches: 13, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Diego Perotti", Country: "ARG", Position: "CC,DL", Teams: [{ club: "es Sevilla", matches: 136, goals: 12, assists: 16 }, { club: "it Roma", matches: 136, goals: 31, assists: 22 },], Titles: "", WC: "" },
    { name: "Bryan Rabello", Country: "CHI", Position: "CC", Teams: [{ club: "es Sevilla", matches: 14, goals: 0, assists: 0 }, { club: "es Deportivo", matches: 19, goals: 0, assists: 4 },], Titles: "", WC: "" },
    { name: "Raul Rusescu", Country: "ROU", Position: "CC,DL", Teams: [{ club: "es Sevilla", matches: 3, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Moisés Delgado", Country: "ESP", Position: "DF", Teams: [{ club: "es Sevilla", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Geoffrey Kondogbia", Country: "CTA", Position: "DF,CC", Teams: [{ club: "es Sevilla", matches: 33, goals: 1, assists: 1 }, { club: "es Valencia", matches: 104, goals: 7, assists: 6 }, { club: "es Atletico", matches: 93, goals: 1, assists: 4 }, { club: "it Inter", matches: 56, goals: 2, assists: 2 }, { club: "fr Monaco", matches: 59, goals: 3, assists: 3 }, { club: "fr Marseille", matches: 22, goals: 1, assists: 0 },], Titles: "", WC: "" },

    { name: "Álvaro Negredo", Country: "ESP", Position: "DL", Teams: [{ club: "es Sevilla", matches: 152, goals: 72, assists: 16 }, { club: "es Valencia", matches: 72, goals: 17, assists: 5 }, { club: "en Man City", matches: 40, goals: 14, assists: 4 },], Titles: "", WC: "" },
    { name: "Gary Medel", Country: "CHI", Position: "DF,CC", Teams: [{ club: "es Sevilla", matches: 80, goals: 8, assists: 3 }, { club: "it Inter", matches: 109, goals: 1, assists: 5 },], Titles: "", WC: "" },
    { name: "Emir Spahić", Country: "BIH", Position: "DF", Teams: [{ club: "es Sevilla", matches: 44, goals: 1, assists: 0 }, { club: "de Leverkusen", matches: 67, goals: 3, assists: 2 },], Titles: "", WC: "" },
    { name: "Cicinho", Country: "BRA", Position: "DF", Teams: [{ club: "es Sevilla", matches: 27, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Hedwiges Maduro", Country: "NED", Position: "DF,CC", Teams: [{ club: "es Sevilla", matches: 26, goals: 0, assists: 0 }, { club: "es Valencia", matches: 96, goals: 3, assists: 0 }, { club: "nl Ajax", matches: 85, goals: 9, assists: 2 },], Titles: "", WC: "" },

    { name: "Manu del Moral", Country: "ESP", Position: "DL", Teams: [{ club: "es Sevilla", matches: 56, goals: 11, assists: 2 }, { club: "es Getafe", matches: 170, goals: 37, assists: 16 }, { club: "es Atletico", matches: 5, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Baba Diawara", Country: "SEN", Position: "DL", Teams: [{ club: "es Sevilla", matches: 30, goals: 3, assists: 0 }, { club: "es Getafe", matches: 23, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "José Campaña", Country: "ESP", Position: "CC", Teams: [{ club: "es Sevilla", matches: 20, goals: 0, assists: 2 }, { club: "pt Porto", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Javier Hervás", Country: "ESP", Position: "CC", Teams: [{ club: "es Sevilla", matches: 9, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Álex Rubio", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Sevilla", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Julien Escudé", Country: "FRA", Position: "DF", Teams: [{ club: "es Sevilla", matches: 201, goals: 7, assists: 5 }, { club: "nl Ajax", matches: 72, goals: 6, assists: 1 },], Titles: "", WC: "" },
    { name: "Martín Cáceres", Country: "URU", Position: "DF", Teams: [{ club: "es Sevilla", matches: 46, goals: 2, assists: 3 }, { club: "es Barcelona", matches: 16, goals: 0, assists: 0 }, { club: "it Juventus", matches: 111, goals: 4, assists: 3 },], Titles: "", WC: "" },
    { name: "Frédéric Kanouté", Country: "MLI", Position: "DL", Teams: [{ club: "es Sevilla", matches: 254, goals: 113, assists: 21 }, { club: "fr Lyon", matches: 49, goals: 11, assists: 0 }, { club: "en Tottenham", matches: 60, goals: 14, assists: 7 },], Titles: "", WC: "" },
    { name: "Emiliano Armenteros", Country: "ARG", Position: "CC", Teams: [{ club: "es Sevilla", matches: 17, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Deivid", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Sevilla", matches: 5, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Tiberio Guarente", Country: "ITA", Position: "CC", Teams: [{ club: "es Sevilla", matches: 13, goals: 0, assists: 1 },], Titles: "", WC: "" },

    { name: "Mouhamadou Dabo", Country: "FRA", Position: "DF", Teams: [{ club: "es Sevilla", matches: 30, goals: 0, assists: 0 }, { club: "fr Lyon", matches: 77, goals: 0, assists: 2 },], Titles: "", WC: "" },
    { name: "Didier Zokora", Country: "CIV", Position: "CC", Teams: [{ club: "es Sevilla", matches: 64, goals: 0, assists: 1 }, { club: "en Tottenham", matches: 114, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Diego Capel", Country: "ESP", Position: "CC", Teams: [{ club: "es Sevilla", matches: 148, goals: 7, assists: 9 }, { club: "pt Sporting", matches: 119, goals: 11, assists: 18 },], Titles: "", WC: "" },
    { name: "Romaric", Country: "CIV", Position: "CC", Teams: [{ club: "es Sevilla", matches: 96, goals: 5, assists: 8 }, { club: "es Espanyol", matches: 28, goals: 3, assists: 3 },], Titles: "", WC: "" },
    { name: "Luís Fabiano", Country: "BRA", Position: "DL", Teams: [{ club: "es Sevilla", matches: 195, goals: 87, assists: 19 }, { club: "pt Porto", matches: 26, goals: 3, assists: 2 },], Titles: "", WC: "" },
    { name: "Renato", Country: "BRA", Position: "CC", Teams: [{ club: "es Sevilla", matches: 245, goals: 33, assists: 15 },], Titles: "", WC: "" },
    { name: "Abdoulay Konko", Country: "FRA", Position: "DF,CC", Teams: [{ club: "es Sevilla", matches: 57, goals: 4, assists: 0 },], Titles: "", WC: "" },
    { name: "Luca Cigarini", Country: "ITA", Position: "CC", Teams: [{ club: "es Sevilla", matches: 10, goals: 2, assists: 0 }, { club: "it Napoli", matches: 28, goals: 2, assists: 1 },], Titles: "", WC: "" },
    { name: "José Carlos", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Sevilla", matches: 21, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Lautaro Acosta", Country: "ARG", Position: "CC,DL", Teams: [{ club: "es Sevilla", matches: 26, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Rodri", Country: "ESP", Position: "DL", Teams: [{ club: "es Sevilla", matches: 7, goals: 1, assists: 0 },], Titles: "", WC: "" },

    { name: "Ivica Dragutinović", Country: "SRB", Position: "DF", Teams: [{ club: "es Sevilla", matches: 137, goals: 5, assists: 1 },], Titles: "", WC: "" },

    { name: "Arouna Koné", Country: "CIV", Position: "DL", Teams: [{ club: "es Sevilla", matches: 46, goals: 2, assists: 1 }, { club: "nl PSV", matches: 64, goals: 21, assists: 14 },], Titles: "", WC: "" },
    { name: "Adriano", Country: "BRA", Position: "DF,CC", Teams: [{ club: "es Sevilla", matches: 201, goals: 18, assists: 16 }, { club: "es Barcelona", matches: 158, goals: 12, assists: 15 },], Titles: "", WC: "" },
    { name: "Sébastien Squillaci", Country: "FRA", Position: "DF", Teams: [{ club: "es Sevilla", matches: 56, goals: 3, assists: 1 }, { club: "fr Lyon", matches: 75, goals: 3, assists: 0 }, { club: "fr Monaco", matches: 138, goals: 14, assists: 2 }, { club: "en Arsenal", matches: 31, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Marius Stankevičius", Country: "LTU", Position: "DF,CC", Teams: [{ club: "es Sevilla", matches: 18, goals: 0, assists: 0 }, { club: "es Valencia", matches: 21, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Aldo Duscher", Country: "ARG", Position: "CC", Teams: [{ club: "es Sevilla", matches: 42, goals: 0, assists: 0 }, { club: "es Deportivo", matches: 188, goals: 1, assists: 4 }, { club: "es Espanyol", matches: 18, goals: 0, assists: 0 }, { club: "pt Sporting", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Marc Valiente", Country: "ESP", Position: "DF", Teams: [{ club: "es Sevilla", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Javier Chevantón", Country: "URU", Position: "DL", Teams: [{ club: "es Sevilla", matches: 41, goals: 12, assists: 4 }, { club: "fr Monaco", matches: 58, goals: 23, assists: 13 },], Titles: "", WC: "" },
    { name: "Aquivaldo Mosquera", Country: "COL", Position: "DF", Teams: [{ club: "es Sevilla", matches: 46, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "David Prieto", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Sevilla", matches: 35, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "José Ángel Crespo", Country: "ESP", Position: "DF", Teams: [{ club: "es Sevilla", matches: 28, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Tom De Mul", Country: "BEL", Position: "CC,DL", Teams: [{ club: "es Sevilla", matches: 14, goals: 1, assists: 0 }, { club: "nl Ajax", matches: 44, goals: 5, assists: 8 },], Titles: "", WC: "" },
    { name: "Fernando Rodríguez", Country: "ESP", Position: "DL", Teams: [{ club: "es Sevilla", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Seydou Keita", Country: "MLI", Position: "CC", Teams: [{ club: "es Sevilla", matches: 38, goals: 6, assists: 4 }, { club: "es Barcelona", matches: 157, goals: 19, assists: 9 }, { club: "es Valencia", matches: 18, goals: 1, assists: 0 }, { club: "it Roma", matches: 59, goals: 4, assists: 1 }, { club: "fr Marseille", matches: 9, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Dani Alves", Country: "BRA", Position: "DF,CC,DL", Teams: [{ club: "es Sevilla", matches: 210, goals: 13, assists: 35 }, { club: "es Barcelona", matches: 366, goals: 23, assists: 85 }, { club: "it Juventus", matches: 33, goals: 6, assists: 6 }, { club: "fr PSG", matches: 73, goals: 8, assists: 16 },], Titles: "", WC: "" },
    { name: "Christian Poulsen", Country: "DEN", Position: "CC", Teams: [{ club: "es Sevilla", matches: 84, goals: 5, assists: 2 }, { club: "it Juventus", matches: 55, goals: 1, assists: 2 }, { club: "nl Ajax", matches: 70, goals: 1, assists: 4 },], Titles: "", WC: "" },
    { name: "Morgan De Sanctis", Country: "ITA", Position: "PO", Teams: [{ club: "es Sevilla", matches: 9, goals: 0, assists: 0 }, { club: "it Roma", matches: 81, goals: 0, assists: 0 }, { club: "it Juventus", matches: 3, goals: 0, assists: 0 }, { club: "it Napoli", matches: 165, goals: 0, assists: 0 }, { club: "fr Monaco", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Aleksandr Kerzhakov", Country: "RUS", Position: "DL", Teams: [{ club: "es Sevilla", matches: 36, goals: 10, assists: 2 },], Titles: "", WC: "" },
    { name: "Khalid Boulahrouz", Country: "NED", Position: "DF", Teams: [{ club: "es Sevilla", matches: 7, goals: 0, assists: 0 }, { club: "pt Sporting", matches: 14, goals: 0, assists: 0 }, { club: "nl Feyenoord", matches: 17, goals: 0, assists: 2 }, { club: "de Stuttgart", matches: 75, goals: 2, assists: 5 }, { club: "en Chelsea", matches: 18, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Andreas Hinkel", Country: "GER", Position: "DF", Teams: [{ club: "es Sevilla", matches: 25, goals: 0, assists: 0 }, { club: "de Stuttgart", matches: 180, goals: 3, assists: 9 },], Titles: "", WC: "" },

    { name: "Antonio Puerta", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Sevilla", matches: 78, goals: 7, assists: 2 },], Titles: "", WC: "" },
    { name: "Javi Navarro", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Sevilla", matches: 194, goals: 3, assists: 1 }, { club: "es Valencia", matches: 6, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "David Cobeño", Country: "ESP", Position: "PO", Teams: [{ club: "es Sevilla", matches: 8, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Kepa Blanco", Country: "ESP", Position: "DL", Teams: [{ club: "es Sevilla", matches: 52, goals: 13, assists: 2 }, { club: "es Getafe", matches: 28, goals: 2, assists: 1 },], Titles: "", WC: "" },
    { name: "Fernando Sales", Country: "ESP", Position: "CC", Teams: [{ club: "es Sevilla", matches: 40, goals: 1, assists: 2 }, { club: "es Celta", matches: 13, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Jesuli", Country: "ESP", Position: "CC", Teams: [{ club: "es Sevilla", matches: 63, goals: 5, assists: 7 }, { club: "es Celta", matches: 139, goals: 28, assists: 11 },], Titles: "", WC: "" },
    { name: "Bruno Herrero Arias", Country: "ESP", Position: "CC", Teams: [{ club: "es Sevilla", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Antonio Notario", Country: "ESP", Position: "PO", Teams: [{ club: "es Sevilla", matches: 105, goals: 0, assists: 0 }, { club: "es Celta", matches: 30, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Pablo Alfaro", Country: "ESP", Position: "DF", Teams: [{ club: "es Sevilla", matches: 135, goals: 2, assists: 2 },], Titles: "", WC: "" },
    { name: "Pablo Ruiz", Country: "ESP", Position: "DF", Teams: [{ club: "es Sevilla", matches: 11, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Ariza Makukula", Country: "POR", Position: "DL", Teams: [{ club: "es Sevilla", matches: 17, goals: 2, assists: 1 }, { club: "pt Benfica", matches: 6, goals: 1, assists: 0 },], Titles: "", WC: "" },

    { name: "Esteban", Country: "ESP", Position: "PO", Teams: [{ club: "es Sevilla", matches: 67, goals: 0, assists: 0 }, { club: "es Celta", matches: 43, goals: 0, assists: 0 }, { club: "es Atletico", matches: 23, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Antoñito", Country: "ESP", Position: "DL", Teams: [{ club: "es Sevilla", matches: 97, goals: 15, assists: 6 },], Titles: "", WC: "" },
    { name: "Javier Casquero", Country: "ESP", Position: "CC", Teams: [{ club: "es Sevilla", matches: 109, goals: 17, assists: 5 }, { club: "es Getafe", matches: 204, goals: 22, assists: 8 },], Titles: "", WC: "" },
    { name: "Juan Redondo", Country: "ESP", Position: "DF", Teams: [{ club: "es Sevilla", matches: 59, goals: 0, assists: 4 },], Titles: "", WC: "" },
    { name: "Francisco Gallardo", Country: "ESP", Position: "CC", Teams: [{ club: "es Sevilla", matches: 86, goals: 4, assists: 8 }, { club: "es Getafe", matches: 22, goals: 1, assists: 0 }, { club: "es Deportivo", matches: 7, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Gerardo Torrado", Country: "MEX", Position: "CC", Teams: [{ club: "es Sevilla", matches: 40, goals: 0, assists: 2 },], Titles: "", WC: "" },
    { name: "Germán Hornos", Country: "URU", Position: "DL", Teams: [{ club: "es Sevilla", matches: 16, goals: 2, assists: 1 },], Titles: "", WC: "" },
    { name: "Óscar", Country: "ESP", Position: "DF", Teams: [{ club: "es Sevilla", matches: 25, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Inti Podestá", Country: "URU", Position: "CC", Teams: [{ club: "es Sevilla", matches: 36, goals: 2, assists: 1 },], Titles: "", WC: "" },
    { name: "Alejandro Marañón", Country: "ESP", Position: "DF", Teams: [{ club: "es Sevilla", matches: 6, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Luis Gil Torres", Country: "ESP", Position: "DL", Teams: [{ club: "es Sevilla", matches: 22, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Zoran Njeguš", Country: "SRB", Position: "DF,CC", Teams: [{ club: "es Sevilla", matches: 57, goals: 1, assists: 1 }, { club: "es Atletico", matches: 33, goals: 1, assists: 1 },], Titles: "", WC: "" },

    { name: "Marco Navas", Country: "ESP", Position: "CC", Teams: [{ club: "es Sevilla", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Federico Magallanes", Country: "URU", Position: "CC,DL", Teams: [{ club: "es Sevilla", matches: 5, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Víctor Salas", Country: "ESP", Position: "CC", Teams: [{ club: "es Sevilla", matches: 74, goals: 4, assists: 4 },], Titles: "", WC: "" },
    { name: "Fredi Lobeiras", Country: "ESP", Position: "CC", Teams: [{ club: "es Sevilla", matches: 50, goals: 1, assists: 8 },], Titles: "", WC: "" },
    { name: "Mariano Toedtli", Country: "ARG", Position: "DL", Teams: [{ club: "es Sevilla", matches: 48, goals: 10, assists: 2 },], Titles: "", WC: "" },
    { name: "Vinny Samways", Country: "ENG", Position: "CC", Teams: [{ club: "es Sevilla", matches: 10, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Francisco Lama", Country: "ESP", Position: "CC", Teams: [{ club: "es Sevilla", matches: 46, goals: 0, assists: 2 },], Titles: "", WC: "" },
    { name: "Juanmi Gelabert", Country: "ESP", Position: "DF", Teams: [{ club: "es Sevilla", matches: 23, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Tomás Hervás", Country: "ESP", Position: "CC", Teams: [{ club: "es Sevilla", matches: 21, goals: 1, assists: 2 }, { club: "es Celta", matches: 85, goals: 7, assists: 1 },], Titles: "", WC: "" },
    { name: "Nikos Machlas", Country: "GRE", Position: "CC,DL", Teams: [{ club: "es Sevilla", matches: 14, goals: 2, assists: 0 }, { club: "nl Ajax", matches: 60, goals: 28, assists: 7 },], Titles: "", WC: "" },
    { name: "David Arteaga", Country: "ESP", Position: "CC", Teams: [{ club: "es Sevilla", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "José Miguel Prieto", Country: "ESP", Position: "DF", Teams: [{ club: "es Sevilla", matches: 35, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Nicolás Olivera", Country: "URU", Position: "CC,DL", Teams: [{ club: "es Sevilla", matches: 44, goals: 10, assists: 4 }, { club: "es Valencia", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Álvaro Jurado", Country: "ESP", Position: "CC", Teams: [{ club: "es Sevilla", matches: 3, goals: 0, assists: 0 }, { club: "es Getafe", matches: 18, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Mario Cotelo", Country: "ESP", Position: "CC", Teams: [{ club: "es Sevilla", matches: 5, goals: 0, assists: 0 }, { club: "es Getafe", matches: 173, goals: 6, assists: 15 },], Titles: "", WC: "" },
    { name: "Frode Olsen", Country: "NOR", Position: "PO", Teams: [{ club: "es Sevilla", matches: 19, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Vasilios Tsiartas", Country: "GRE", Position: "CC", Teams: [{ club: "es Sevilla", matches: 33, goals: 10, assists: 9 },], Titles: "", WC: "" },
    { name: "Nando", Country: "ESP", Position: "DF", Teams: [{ club: "es Sevilla", matches: 30, goals: 0, assists: 0 }, { club: "es Deportivo", matches: 9, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Juan Carlos", Country: "ESP", Position: "DL", Teams: [{ club: "es Sevilla", matches: 34, goals: 12, assists: 3 }, { club: "es Getafe", matches: 23, goals: 4, assists: 1 },], Titles: "", WC: "" },
    { name: "Mirsad Hibić", Country: "BIH", Position: "DF", Teams: [{ club: "es Sevilla", matches: 29, goals: 0, assists: 0 }, { club: "es Atletico", matches: 61, goals: 3, assists: 1 },], Titles: "", WC: "" },
    { name: "Mami Quevedo", Country: "ESP", Position: "CC", Teams: [{ club: "es Sevilla", matches: 25, goals: 3, assists: 0 },], Titles: "", WC: "" },
    { name: "Tabaré Silva", Country: "URU", Position: "DF", Teams: [{ club: "es Sevilla", matches: 24, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Marcelo Zalayeta", Country: "URU", Position: "DL", Teams: [{ club: "es Sevilla", matches: 28, goals: 5, assists: 6 }, { club: "it Juventus", matches: 125, goals: 22, assists: 10 }, { club: "it Napoli", matches: 51, goals: 12, assists: 3 },], Titles: "", WC: "" },
    { name: "Ángel Rodríguez", Country: "ESP", Position: "CC", Teams: [{ club: "es Sevilla", matches: 25, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Marcelo Otero", Country: "URU", Position: "DL", Teams: [{ club: "es Sevilla", matches: 22, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Ivan Jurić", Country: "CRO", Position: "CC", Teams: [{ club: "es Sevilla", matches: 12, goals: 2, assists: 1 },], Titles: "", WC: "" },
    { name: "Loren del Pino", Country: "ESP", Position: "CC", Teams: [{ club: "es Sevilla", matches: 14, goals: 2, assists: 1 }, { club: "es Atletico", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Germán Rojas", Country: "ESP", Position: "DF", Teams: [{ club: "es Sevilla", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Gerardo Rabajda", Country: "URU", Position: "PO", Teams: [{ club: "es Sevilla", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },



    { name: "İlkay Gündoğan", Country: "GER", Position: "CC", Teams: [{ club: "es Barcelona", matches: 37, goals: 5, assists: 10 }, { club: "de Leverkusen", matches: 140, goals: 12, assists: 15 }, { club: "en Man City", matches: 304, goals: 60, assists: 38 },], Titles: "", WC: "" },
    { name: "Robert Lewandowski", Country: "POL", Position: "DL", Teams: [{ club: "es Barcelona", matches: 80, goals: 51, assists: 14 }, { club: "de Bayern", matches: 373, goals: 342, assists: 57 }, { club: "de Leverkusen", matches: 165, goals: 92, assists: 28 },], Titles: "", WC: "" },
    { name: "Ronald Araújo", Country: "URU", Position: "DF", Teams: [{ club: "es Barcelona", matches: 140, goals: 8, assists: 3 },], Titles: "", WC: "" },
    { name: "Frenkie de Jong", Country: "NED", Position: "DF,CC", Teams: [{ club: "es Barcelona", matches: 208, goals: 16, assists: 19 }, { club: "nl Ajax", matches: 72, goals: 4, assists: 10 },], Titles: "", WC: "" },

    { name: "Andreas Christensen", Country: "DEN", Position: "DF,CC", Teams: [{ club: "es Barcelona", matches: 61, goals: 1, assists: 2 }, { club: "en Chelsea", matches: 159, goals: 2, assists: 2 },], Titles: "", WC: "" },
    { name: "Alejandro Balde", Country: "ESP", Position: "DF,DL", Teams: [{ club: "es Barcelona", matches: 79, goals: 2, assists: 7 },], Titles: "", WC: "" },
    { name: "Lamine Yamal", Country: "ESP", Position: "DL", Teams: [{ club: "es Barcelona", matches: 36, goals: 5, assists: 4 },], Titles: "", WC: "" },
    { name: "Marc-André ter Stegen", Country: "GER", Position: "PO", Teams: [{ club: "es Barcelona", matches: 397, goals: 0, assists: 2 },], Titles: "", WC: "" },
    { name: "Ferrán Torres", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 103, goals: 25, assists: 12 }, { club: "es Valencia", matches: 97, goals: 9, assists: 12 }, { club: "en Man City", matches: 43, goals: 16, assists: 4 },], Titles: "", WC: "" },
    { name: "João Félix", Country: "POR", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 29, goals: 7, assists: 5 }, { club: "es Atletico", matches: 131, goals: 34, assists: 16 }, { club: "pt Benfica", matches: 33, goals: 18, assists: 8 }, { club: "en Chelsea", matches: 20, goals: 4, assists: 0 },], Titles: "", WC: "" },
    { name: "Iñaki Peña", Country: "ESP", Position: "PO", Teams: [{ club: "es Barcelona", matches: 22, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Pedri", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 131, goals: 18, assists: 12 },], Titles: "", WC: "" },
    { name: "Oriol Romeu", Country: "ESP", Position: "CC", Teams: [{ club: "es Barcelona", matches: 27, goals: 0, assists: 1 }, { club: "es Valencia", matches: 17, goals: 0, assists: 0 }, { club: "de Stuttgart", matches: 28, goals: 0, assists: 0 }, { club: "en Chelsea", matches: 26, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Gavi", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 111, goals: 7, assists: 13 },], Titles: "", WC: "" },
    { name: "Raphinha", Country: "BRA", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 73, goals: 14, assists: 17 }, { club: "pt Sporting", matches: 32, goals: 7, assists: 2 },], Titles: "", WC: "" },
    { name: "Fermin López", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 26, goals: 3, assists: 1 },], Titles: "", WC: "" },
    { name: "Sergi Roberto", Country: "ESP", Position: "DF,CC,DL", Teams: [{ club: "es Barcelona", matches: 349, goals: 18, assists: 34 },], Titles: "", WC: "" },
    { name: "Pau Cubarsí", Country: "ESP", Position: "CC", Teams: [{ club: "es Barcelona", matches: 8, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Héctor Fort", Country: "ESP", Position: "DF", Teams: [{ club: "es Barcelona", matches: 5, goals: 0, assists: 2 },], Titles: "", WC: "" },
    { name: "Vitor Roque", Country: "BRA", Position: "DL", Teams: [{ club: "es Barcelona", matches: 8, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Marc Guiu", Country: "ESP", Position: "DL", Teams: [{ club: "es Barcelona", matches: 6, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Abdessamad Ezzalzouli", Country: "MAR", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 14, goals: 1, assists: 0 }, { club: "es Betis", matches: 27, goals: 5, assists: 0 },], Titles: "", WC: "" },
    { name: "Eric García", Country: "ESP", Position: "DF", Teams: [{ club: "es Barcelona", matches: 70, goals: 1, assists: 1 }, { club: "en Man City", matches: 35, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Ansu Fati", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 112, goals: 29, assists: 7 },], Titles: "", WC: "" },
    { name: "Marc Casado", Country: "ESP", Position: "CC", Teams: [{ club: "es Barcelona", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Sergio Busquets", Country: "ESP", Position: "CC", Teams: [{ club: "es Barcelona", matches: 672, goals: 15, assists: 39 },], Titles: "", WC: "" },
    { name: "Ousmane Dembélé", Country: "FRA", Position: "DF,CC,DL", Teams: [{ club: "es Barcelona", matches: 185, goals: 40, assists: 42 }, { club: "fr PSG", matches: 27, goals: 1, assists: 9 }, { club: "de Leverkusen", matches: 50, goals: 10, assists: 20 },], Titles: "", WC: "" },
    { name: "Jordi Alba", Country: "ESP", Position: "DF,CC,DL", Teams: [{ club: "es Barcelona", matches: 444, goals: 26, assists: 88 }, { club: "es Valencia", matches: 96, goals: 6, assists: 7 },], Titles: "", WC: "" },
    { name: "Franck Kessié", Country: "CIV", Position: "CC", Teams: [{ club: "es Barcelona", matches: 43, goals: 3, assists: 3 }, { club: "it Milan", matches: 268, goals: 42, assists: 15 },], Titles: "", WC: "" },
    { name: "Gerard Piqué", Country: "ESP", Position: "DF", Teams: [{ club: "es Barcelona", matches: 571, goals: 50, assists: 7 }, { club: "en Man Utd", matches: 16, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Héctor Bellerín", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Barcelona", matches: 7, goals: 0, assists: 0 }, { club: "es Betis", matches: 56, goals: 0, assists: 5 }, { club: "pt Sporting", matches: 13, goals: 1, assists: 0 }, { club: "en Arsenal", matches: 238, goals: 9, assists: 28 },], Titles: "", WC: "" },
    { name: "Pablo Torre", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 13, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Memphis", Country: "NED", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 42, goals: 14, assists: 2 }, { club: "es Atletico", matches: 30, goals: 12, assists: 2 }, { club: "fr Lyon", matches: 177, goals: 76, assists: 52 }, { club: "nl PSV", matches: 106, goals: 43, assists: 18 }, { club: "en Man Utd", matches: 51, goals: 5, assists: 1 },], Titles: "", WC: "" },
    { name: "Ángel Alarcón", Country: "ESP", Position: "DL", Teams: [{ club: "es Barcelona", matches: 5, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Alvaro Sanz", Country: "ESP", Position: "CC", Teams: [{ club: "es Barcelona", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Pierre-Emerick Aubameyang", Country: "GAB", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 24, goals: 13, assists: 1 }, { club: "fr Monaco", matches: 19, goals: 2, assists: 2 }, { club: "fr Marseille", matches: 31, goals: 14, assists: 8 }, { club: "de Leverkusen", matches: 202, goals: 136, assists: 29 }, { club: "en Arsenal", matches: 163, goals: 92, assists: 20 }, { club: "en Chelsea", matches: 21, goals: 3, assists: 1 },], Titles: "", WC: "" },


    { name: "Sergiño Dest", Country: "USA", Position: "DF,DL", Teams: [{ club: "es Barcelona", matches: 72, goals: 3, assists: 4 }, { club: "it Milan", matches: 14, goals: 0, assists: 0 }, { club: "nl Ajax", matches: 30, goals: 0, assists: 4 }, { club: "nl PSV", matches: 25, goals: 1, assists: 6 },], Titles: "", WC: "" },
    { name: "Nicolás González", Country: "ESP", Position: "CC", Teams: [{ club: "es Barcelona", matches: 37, goals: 2, assists: 2 }, { club: "es Valencia", matches: 26, goals: 1, assists: 1 }, { club: "pt Porto", matches: 18, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Óscar Mingueza", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Barcelona", matches: 66, goals: 2, assists: 5 }, { club: "es Celta", matches: 51, goals: 1, assists: 3 },], Titles: "", WC: "" },
    { name: "Adama Traoré", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 21, goals: 1, assists: 4 },], Titles: "", WC: "" },
    { name: "Philippe Coutinho", Country: "BRA", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 106, goals: 26, assists: 13 }, { club: "es Espanyol", matches: 16, goals: 5, assists: 1 }, { club: "it Inter", matches: 42, goals: 4, assists: 2 }, { club: "de Bayern", matches: 38, goals: 11, assists: 9 },], Titles: "", WC: "" },
    { name: "Riqui Puig", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 57, goals: 2, assists: 3 },], Titles: "", WC: "" },
    { name: "Jutglà", Country: "ESP", Position: "DL", Teams: [{ club: "es Barcelona", matches: 9, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Neto", Country: "BRA", Position: "PO", Teams: [{ club: "es Barcelona", matches: 21, goals: 0, assists: 0 }, { club: "es Valencia", matches: 80, goals: 0, assists: 0 }, { club: "it Juventus", matches: 22, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Yusuf Demir", Country: "AUT", Position: "DF,DL", Teams: [{ club: "es Barcelona", matches: 9, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Antoine Griezmann", Country: "FRA", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 102, goals: 35, assists: 16 }, { club: "es Atletico", matches: 375, goals: 175, assists: 74 },], Titles: "", WC: "" },
    { name: "Martin Braithwaite", Country: "DEN", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 58, goals: 10, assists: 4 }, { club: "es Espanyol", matches: 60, goals: 26, assists: 3 },], Titles: "", WC: "" },
    { name: "Sergio Agüero", Country: "ARG", Position: "DL", Teams: [{ club: "es Barcelona", matches: 5, goals: 1, assists: 0 }, { club: "es Atletico", matches: 208, goals: 90, assists: 29 }, { club: "en Man City", matches: 375, goals: 247, assists: 61 },], Titles: "", WC: "" },
    { name: "Emerson", Country: "BRA", Position: "DF,CC,DL", Teams: [{ club: "es Barcelona", matches: 3, goals: 0, assists: 0 }, { club: "es Betis", matches: 79, goals: 5, assists: 10 }, { club: "en Tottenham", matches: 96, goals: 4, assists: 2 },], Titles: "", WC: "" },
    { name: "Samuel Umtiti", Country: "FRA", Position: "DF", Teams: [{ club: "es Barcelona", matches: 133, goals: 2, assists: 1 }, { club: "fr Lyon", matches: 152, goals: 4, assists: 2 },], Titles: "", WC: "" },


    { name: "Lionel Messi", Country: "ARG", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 714, goals: 627, assists: 250 }, { club: "fr PSG", matches: 75, goals: 32, assists: 34 },], Titles: "", WC: "" },
    { name: "Francisco Trincão", Country: "POR", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 42, goals: 3, assists: 2 }, { club: "pt Sporting", matches: 70, goals: 18, assists: 6 },], Titles: "", WC: "" },
    { name: "Miralem Pjanić", Country: "BIH", Position: "CC", Teams: [{ club: "es Barcelona", matches: 30, goals: 0, assists: 0 }, { club: "it Roma", matches: 179, goals: 29, assists: 43 }, { club: "it Juventus", matches: 178, goals: 22, assists: 34 }, { club: "fr Lyon", matches: 111, goals: 15, assists: 16 },], Titles: "", WC: "" },
    { name: "Junior Firpo", Country: "ESP", Position: "DF,DL", Teams: [{ club: "es Barcelona", matches: 41, goals: 2, assists: 2 }, { club: "es Betis", matches: 43, goals: 5, assists: 7 },], Titles: "", WC: "" },
    { name: "Ilaix Moriba", Country: "GUI", Position: "CC", Teams: [{ club: "es Barcelona", matches: 18, goals: 1, assists: 2 }, { club: "es Getafe", matches: 2, goals: 0, assists: 0 }, { club: "es Valencia", matches: 46, goals: 1, assists: 3 },], Titles: "", WC: "" },
    { name: "Carles Aleñá", Country: "ESP", Position: "DF,CC,DL", Teams: [{ club: "es Barcelona", matches: 44, goals: 3, assists: 0 }, { club: "es Betis", matches: 18, goals: 1, assists: 1 }, { club: "es Getafe", matches: 116, goals: 6, assists: 10 },], Titles: "", WC: "" },
    { name: "Konrad De La Fuente", Country: "USA", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 3, goals: 0, assists: 0 }, { club: "fr Marseille", matches: 23, goals: 1, assists: 3 }, { club: "gr Olympiakos", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Nélson Semedo", Country: "POR", Position: "DF,CC", Teams: [{ club: "es Barcelona", matches: 124, goals: 2, assists: 6 }, { club: "pt Benfica", matches: 54, goals: 3, assists: 2 },], Titles: "", WC: "" },
    { name: "Luis Suárez", Country: "URU", Position: "DL", Teams: [{ club: "es Barcelona", matches: 281, goals: 192, assists: 97 }, { club: "es Atletico", matches: 83, goals: 34, assists: 5 }, { club: "nl Ajax", matches: 134, goals: 89, assists: 55 },], Titles: "", WC: "" },
    { name: "Arturo Vidal", Country: "CHI", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 96, goals: 11, assists: 10 }, { club: "it Inter", matches: 71, goals: 4, assists: 4 }, { club: "it Juventus", matches: 161, goals: 46, assists: 22 }, { club: "de Bayern", matches: 124, goals: 22, assists: 12 }, { club: "de Leverkusen", matches: 133, goals: 16, assists: 16 },], Titles: "", WC: "" },
    { name: "Arthur Melo", Country: "BRA", Position: "CC", Teams: [{ club: "es Barcelona", matches: 72, goals: 4, assists: 6 }, { club: "it Juventus", matches: 63, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Carles Pérez", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 13, goals: 2, assists: 2 }, { club: "es Celta", matches: 50, goals: 7, assists: 6 }, { club: "it Roma", matches: 74, goals: 8, assists: 6 },], Titles: "", WC: "" },
    { name: "Rafinha", Country: "BRA", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 89, goals: 12, assists: 3 }, { club: "es Celta", matches: 62, goals: 8, assists: 7 }, { club: "it Inter", matches: 17, goals: 2, assists: 2 }, { club: "fr PSG", matches: 39, goals: 0, assists: 6 },], Titles: "", WC: "" },
    { name: "Moussa Wagué", Country: "SEN", Position: "DF,DL", Teams: [{ club: "es Barcelona", matches: 6, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Jean-Clair Todibo", Country: "FRA", Position: "DF", Teams: [{ club: "es Barcelona", matches: 5, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Álex Collado", Country: "ESP", Position: "DL", Teams: [{ club: "es Barcelona", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Malcom", Country: "BRA", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 24, goals: 4, assists: 2 },], Titles: "", WC: "" },
    { name: "Jasper Cillessen", Country: "NED", Position: "PO", Teams: [{ club: "es Barcelona", matches: 32, goals: 0, assists: 0 }, { club: "es Valencia", matches: 57, goals: 0, assists: 2 }, { club: "nl Ajax", matches: 125, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Thomas Vermaelen", Country: "BEL", Position: "DF", Teams: [{ club: "es Barcelona", matches: 52, goals: 1, assists: 1 }, { club: "it Roma", matches: 11, goals: 0, assists: 0 }, { club: "nl Ajax", matches: 118, goals: 9, assists: 2 }, { club: "en Arsenal", matches: 133, goals: 14, assists: 6 },], Titles: "", WC: "" },
    { name: "Juan Miranda", Country: "ESP", Position: "DF", Teams: [{ club: "es Barcelona", matches: 4, goals: 0, assists: 0 }, { club: "es Betis", matches: 100, goals: 7, assists: 11 },], Titles: "", WC: "" },
    { name: "Kevin-Prince Boateng", Country: "GHA", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 4, goals: 0, assists: 0 }, { club: "it Milan", matches: 109, goals: 15, assists: 10 }, { club: "de Leverkusen", matches: 10, goals: 0, assists: 1 }, { club: "en Tottenham", matches: 17, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Jeison Murillo", Country: "COL", Position: "DF", Teams: [{ club: "es Barcelona", matches: 4, goals: 0, assists: 0 }, { club: "es Celta", matches: 72, goals: 3, assists: 0 }, { club: "es Valencia", matches: 20, goals: 0, assists: 0 }, { club: "it Inter", matches: 69, goals: 3, assists: 2 },], Titles: "", WC: "" },
    { name: "Juan Brandáriz", Country: "ESP", Position: "DF", Teams: [{ club: "es Barcelona", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Oriol Busquets", Country: "ESP", Position: "CC", Teams: [{ club: "es Barcelona", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Sergi Samper", Country: "ESP", Position: "CC", Teams: [{ club: "es Barcelona", matches: 12, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Andrés Iniesta", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 601, goals: 50, assists: 95 },], Titles: "", WC: "" },
    { name: "Paulinho", Country: "BRA", Position: "CC", Teams: [{ club: "es Barcelona", matches: 49, goals: 9, assists: 2 }, { club: "en Tottenham", matches: 62, goals: 7, assists: 6 },], Titles: "", WC: "" },
    { name: "Lucas Digne", Country: "FRA", Position: "DF,CC", Teams: [{ club: "es Barcelona", matches: 46, goals: 2, assists: 3 }, { club: "it Roma", matches: 42, goals: 3, assists: 5 }, { club: "fr PSG", matches: 38, goals: 0, assists: 3 },], Titles: "", WC: "" },
    { name: "André Gomes", Country: "POR", Position: "CC", Teams: [{ club: "es Barcelona", matches: 78, goals: 3, assists: 3 }, { club: "es Valencia", matches: 78, goals: 8, assists: 6 }, { club: "pt Benfica", matches: 28, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Javier Mascherano", Country: "ARG", Position: "DF,CC", Teams: [{ club: "es Barcelona", matches: 297, goals: 1, assists: 7 },], Titles: "", WC: "" },
    { name: "Yerry Mina", Country: "COL", Position: "DF", Teams: [{ club: "es Barcelona", matches: 6, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "José Arnaiz", Country: "ESP", Position: "CC", Teams: [{ club: "es Barcelona", matches: 5, goals: 3, assists: 0 },], Titles: "", WC: "" },

    { name: "Neymar", Country: "BRA", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 180, goals: 103, assists: 56 }, { club: "fr PSG", matches: 173, goals: 118, assists: 69 },], Titles: "", WC: "" },
    { name: "Arda Turan", Country: "TUR", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 55, goals: 15, assists: 9 }, { club: "es Atletico", matches: 163, goals: 20, assists: 25 },], Titles: "", WC: "" },
    { name: "Jérémy Mathieu", Country: "FRA", Position: "DF", Teams: [{ club: "es Barcelona", matches: 90, goals: 4, assists: 3 }, { club: "es Valencia", matches: 162, goals: 7, assists: 8 }, { club: "pt Sporting", matches: 87, goals: 7, assists: 2 },], Titles: "", WC: "" },
    { name: "Claudio Bravo", Country: "CHI", Position: "PO", Teams: [{ club: "es Barcelona", matches: 73, goals: 0, assists: 0 }, { club: "es Betis", matches: 74, goals: 0, assists: 0 }, { club: "en Man City", matches: 61, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Marlon", Country: "BRA", Position: "DF,CC", Teams: [{ club: "es Barcelona", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },



    { name: "Marc Bartra", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Barcelona", matches: 92, goals: 5, assists: 6 }, { club: "es Betis", matches: 148, goals: 7, assists: 2 }, { club: "de Leverkusen", matches: 51, goals: 5, assists: 1 },], Titles: "", WC: "" },
    { name: "Gerard Gumbau", Country: "ESP", Position: "CC", Teams: [{ club: "es Barcelona", matches: 9, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Jordi Masip", Country: "ESP", Position: "PO", Teams: [{ club: "es Barcelona", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Pedro", Country: "ESP", Position: "DF,CC,DL", Teams: [{ club: "es Barcelona", matches: 273, goals: 79, assists: 40 }, { club: "it Roma", matches: 40, goals: 6, assists: 5 }, { club: "en Chelsea", matches: 206, goals: 43, assists: 27 },], Titles: "", WC: "" },
    { name: "Wilfrid Kaptoum", Country: "CMR", Position: "CC", Teams: [{ club: "es Barcelona", matches: 3, goals: 1, assists: 0 }, { club: "es Betis", matches: 20, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Douglas", Country: "BRA", Position: "DF", Teams: [{ club: "es Barcelona", matches: 8, goals: 0, assists: 0 }, { club: "pt Benfica", matches: 8, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Juan Cámara", Country: "ESP", Position: "CC", Teams: [{ club: "es Barcelona", matches: 2, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Xavi", Country: "ESP", Position: "CC", Teams: [{ club: "es Barcelona", matches: 672, goals: 70, assists: 136 },], Titles: "", WC: "" },
    { name: "Martín Montoya", Country: "ESP", Position: "DF", Teams: [{ club: "es Barcelona", matches: 55, goals: 2, assists: 6 }, { club: "es Betis", matches: 37, goals: 1, assists: 3 }, { club: "es Valencia", matches: 62, goals: 2, assists: 5 }, { club: "it Inter", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },


    { name: "Cesc Fàbregas", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 122, goals: 31, assists: 38 }, { club: "fr Monaco", matches: 66, goals: 4, assists: 9 }, { club: "en Arsenal", matches: 267, goals: 48, assists: 83 }, { club: "en Chelsea", matches: 198, goals: 22, assists: 56 },], Titles: "", WC: "" },
    { name: "Alexis Sánchez", Country: "CHI", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 112, goals: 42, assists: 27 }, { club: "it Inter", matches: 129, goals: 22, assists: 18 }, { club: "fr Marseille", matches: 44, goals: 18, assists: 4 }, { club: "en Arsenal", matches: 163, goals: 79, assists: 40 }, { club: "en Man Utd", matches: 45, goals: 5, assists: 9 },], Titles: "", WC: "" },
    { name: "Víctor Valdés", Country: "ESP", Position: "PO", Teams: [{ club: "es Barcelona", matches: 498, goals: 0, assists: 0 }, { club: "en Man Utd", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Alexandre Song", Country: "CMR", Position: "DF,CC", Teams: [{ club: "es Barcelona", matches: 51, goals: 1, assists: 0 }, { club: "en Arsenal", matches: 173, goals: 9, assists: 16 },], Titles: "", WC: "" },
    { name: "Carles Puyol", Country: "ESP", Position: "DF", Teams: [{ club: "es Barcelona", matches: 516, goals: 15, assists: 8 },], Titles: "", WC: "" },
    { name: "Cristian Tello", Country: "ESP", Position: "DF,CC,DL", Teams: [{ club: "es Barcelona", matches: 68, goals: 15, assists: 7 }, { club: "es Betis", matches: 170, goals: 23, assists: 17 }, { club: "pt Porto", matches: 48, goals: 9, assists: 10 },], Titles: "", WC: "" },
    { name: "Jean Marie Dongou", Country: "CMR", Position: "DL", Teams: [{ club: "es Barcelona", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Ibrahim Afellay", Country: "NED", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 28, goals: 1, assists: 1 }, { club: "nl PSV", matches: 198, goals: 36, assists: 21 }, { club: "gr Olympiakos", matches: 27, goals: 6, assists: 4 },], Titles: "", WC: "" },
    { name: "David Villa", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 103, goals: 41, assists: 15 }, { club: "es Valencia", matches: 195, goals: 121, assists: 28 }, { club: "es Atletico", matches: 43, goals: 13, assists: 4 },], Titles: "", WC: "" },
    { name: "Thiago Alcántara", Country: "ESP", Position: "CC", Teams: [{ club: "es Barcelona", matches: 78, goals: 7, assists: 8 }, { club: "de Bayern", matches: 230, goals: 30, assists: 33 },], Titles: "", WC: "" },
    { name: "Éric Abidal", Country: "FRA", Position: "DF", Teams: [{ club: "es Barcelona", matches: 160, goals: 0, assists: 5 }, { club: "fr Lyon", matches: 96, goals: 0, assists: 5 }, { club: "fr Monaco", matches: 48, goals: 0, assists: 0 }, { club: "gr Olympiakos", matches: 15, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Isaac Cuenca", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 23, goals: 2, assists: 7 }, { club: "es Deportivo", matches: 29, goals: 2, assists: 2 }, { club: "nl Ajax", matches: 5, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Maxwell", Country: "BRA", Position: "DF", Teams: [{ club: "es Barcelona", matches: 74, goals: 0, assists: 5 }, { club: "it Inter", matches: 92, goals: 2, assists: 4 }, { club: "fr PSG", matches: 201, goals: 12, assists: 22 }, { club: "nl Ajax", matches: 142, goals: 10, assists: 14 },], Titles: "", WC: "" },
    { name: "Marc Muniesa", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Barcelona", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Gabriel Milito", Country: "ARG", Position: "DF", Teams: [{ club: "es Barcelona", matches: 64, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Jeffrén Suárez", Country: "VEN", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 26, goals: 3, assists: 1 }, { club: "pt Sporting", matches: 29, goals: 5, assists: 0 },], Titles: "", WC: "" },
    { name: "Víctor Vázquez", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 3, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Zlatan Ibrahimović", Country: "SWE", Position: "DL", Teams: [{ club: "es Barcelona", matches: 39, goals: 20, assists: 8 }, { club: "it Inter", matches: 110, goals: 63, assists: 25 }, { club: "it Milan", matches: 150, goals: 86, assists: 31 }, { club: "it Juventus", matches: 89, goals: 26, assists: 14 }, { club: "fr PSG", matches: 167, goals: 145, assists: 50 }, { club: "nl Ajax", matches: 97, goals: 43, assists: 15 }, { club: "en Man Utd", matches: 53, goals: 29, assists: 9 },], Titles: "", WC: "" },
    { name: "Yaya Touré", Country: "CIV", Position: "CC", Teams: [{ club: "es Barcelona", matches: 101, goals: 5, assists: 5 }, { club: "fr Monaco", matches: 27, goals: 5, assists: 6 }, { club: "gr Olympiakos", matches: 30, goals: 3, assists: 2 }, { club: "en Man City", matches: 293, goals: 71, assists: 39 },], Titles: "", WC: "" },
    { name: "Thierry Henry", Country: "FRA", Position: "DL", Teams: [{ club: "es Barcelona", matches: 106, goals: 43, assists: 21 }, { club: "it Juventus", matches: 16, goals: 3, assists: 2 }, { club: "fr Monaco", matches: 57, goals: 12, assists: 0 }, { club: "en Arsenal", matches: 339, goals: 217, assists: 88 },], Titles: "", WC: "" },
    { name: "Rafael Márquez", Country: "MEX", Position: "DF,CC", Teams: [{ club: "es Barcelona", matches: 208, goals: 10, assists: 6 }, { club: "fr Monaco", matches: 99, goals: 6, assists: 4 },], Titles: "", WC: "" },
    { name: "Dmytro Chygrynskiy", Country: "UKR", Position: "DF", Teams: [{ club: "es Barcelona", matches: 12, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Sylvinho", Country: "BRA", Position: "DF", Teams: [{ club: "es Barcelona", matches: 106, goals: 3, assists: 9 }, { club: "es Celta", matches: 96, goals: 1, assists: 9 }, { club: "en Arsenal", matches: 71, goals: 5, assists: 6 }, { club: "en Man City", matches: 10, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Eiður Guðjohnsen", Country: "ISL", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 92, goals: 13, assists: 6 }, { club: "fr Monaco", matches: 9, goals: 0, assists: 0 }, { club: "en Chelsea", matches: 218, goals: 61, assists: 31 }, { club: "en Tottenham", matches: 11, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Alexander Hleb", Country: "BLR", Position: "CC", Teams: [{ club: "es Barcelona", matches: 26, goals: 0, assists: 3 }, { club: "de Stuttgart", matches: 198, goals: 16, assists: 36 }, { club: "de Wolfsburg", matches: 4, goals: 1, assists: 0 }, { club: "en Arsenal", matches: 114, goals: 9, assists: 15 },], Titles: "", WC: "" },
    { name: "Víctor Sánchez", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Barcelona", matches: 11, goals: 0, assists: 0 }, { club: "es Getafe", matches: 34, goals: 1, assists: 3 }, { club: "es Espanyol", matches: 259, goals: 11, assists: 20 },], Titles: "", WC: "" },

    { name: "Albert Jorquera", Country: "ESP", Position: "PO", Teams: [{ club: "es Barcelona", matches: 10, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Gianluca Zambrotta", Country: "ITA", Position: "DF", Teams: [{ club: "es Barcelona", matches: 71, goals: 3, assists: 3 }, { club: "it Milan", matches: 104, goals: 2, assists: 1 }, { club: "it Juventus", matches: 268, goals: 6, assists: 29 },], Titles: "", WC: "" },
    { name: "Lilian Thuram", Country: "FRA", Position: "DF", Teams: [{ club: "es Barcelona", matches: 51, goals: 0, assists: 0 }, { club: "it Juventus", matches: 189, goals: 1, assists: 8 },], Titles: "", WC: "" },
    { name: "Ronaldinho", Country: "BRA", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 187, goals: 88, assists: 46 }, { club: "it Milan", matches: 94, goals: 26, assists: 23 }, { club: "fr PSG", matches: 65, goals: 20, assists: 15 },], Titles: "", WC: "" },
    { name: "Deco", Country: "POR", Position: "CC", Teams: [{ club: "es Barcelona", matches: 145, goals: 19, assists: 37 }, { club: "pt Porto", matches: 176, goals: 38, assists: 32 }, { club: "en Chelsea", matches: 51, goals: 5, assists: 5 },], Titles: "", WC: "" },
    { name: "Oleguer Presas", Country: "ESP", Position: "DF", Teams: [{ club: "es Barcelona", matches: 158, goals: 1, assists: 1 }, { club: "nl Ajax", matches: 51, goals: 2, assists: 0 },], Titles: "", WC: "" },



    { name: "Giovanni van Bronckhorst", Country: "NED", Position: "DF,CC", Teams: [{ club: "es Barcelona", matches: 135, goals: 4, assists: 8 }, { club: "nl Feyenoord", matches: 99, goals: 10, assists: 10 }, { club: "en Arsenal", matches: 52, goals: 2, assists: 6 },], Titles: "", WC: "" },
    { name: "Ludovic Giuly", Country: "FRA", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 108, goals: 23, assists: 13 }, { club: "it Roma", matches: 41, goals: 7, assists: 1 }, { club: "fr PSG", matches: 107, goals: 16, assists: 15 }, { club: "fr Lyon", matches: 23, goals: 4, assists: 0 }, { club: "fr Monaco", matches: 240, goals: 59, assists: 38 },], Titles: "", WC: "" },
    { name: "Thiago Motta", Country: "ITA", Position: "CC", Teams: [{ club: "es Barcelona", matches: 133, goals: 9, assists: 11 }, { club: "es Atletico", matches: 8, goals: 0, assists: 0 }, { club: "it Inter", matches: 70, goals: 12, assists: 5 }, { club: "fr PSG", matches: 217, goals: 10, assists: 16 },], Titles: "", WC: "" },
    { name: "Jesús Olmo", Country: "ESP", Position: "DF", Teams: [{ club: "es Barcelona", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Mark van Bommel", Country: "NED", Position: "CC", Teams: [{ club: "es Barcelona", matches: 33, goals: 3, assists: 2 }, { club: "it Milan", matches: 45, goals: 0, assists: 0 }, { club: "nl PSV", matches: 213, goals: 53, assists: 42 }, { club: "de Bayern", matches: 166, goals: 15, assists: 16 },], Titles: "", WC: "" },
    { name: "Henrik Larsson", Country: "SWE", Position: "DL", Teams: [{ club: "es Barcelona", matches: 54, goals: 15, assists: 4 }, { club: "en Man Utd", matches: 9, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Rodri", Country: "ESP", Position: "DF", Teams: [{ club: "es Barcelona", matches: 5, goals: 0, assists: 0 }, { club: "es Deportivo", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Ludovic Sylvestre", Country: "GLP", Position: "CC", Teams: [{ club: "es Barcelona", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },




    { name: "Damià Abella", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Barcelona", matches: 9, goals: 0, assists: 0 }, { club: "es Betis", matches: 79, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Demetrio Albertini", Country: "ITA", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 6, goals: 0, assists: 0 }, { club: "es Atletico", matches: 28, goals: 2, assists: 6 }, { club: "it Milan", matches: 141, goals: 5, assists: 17 },], Titles: "", WC: "" },


    { name: "Phillip Cocu", Country: "NED", Position: "DF,DL", Teams: [{ club: "es Barcelona", matches: 266, goals: 36, assists: 10 }, { club: "nl PSV", matches: 127, goals: 28, assists: 23 },], Titles: "", WC: "" },
    { name: "Michael Reiziger", Country: "NED", Position: "DF", Teams: [{ club: "es Barcelona", matches: 225, goals: 0, assists: 4 }, { club: "nl PSV", matches: 34, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Luis García", Country: "ESP", Position: "CC", Teams: [{ club: "es Barcelona", matches: 32, goals: 7, assists: 7 }, { club: "es Atletico", matches: 91, goals: 14, assists: 9 },], Titles: "", WC: "" },
    { name: "Luis Enrique", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 219, goals: 82, assists: 14 },], Titles: "", WC: "" },
    { name: "Edgar Davids", Country: "NED", Position: "CC", Teams: [{ club: "es Barcelona", matches: 18, goals: 1, assists: 0 }, { club: "it Inter", matches: 18, goals: 0, assists: 1 }, { club: "it Milan", matches: 4, goals: 0, assists: 0 }, { club: "it Juventus", matches: 212, goals: 9, assists: 13 }, { club: "nl Ajax", matches: 25, goals: 1, assists: 3 }, { club: "en Tottenham", matches: 41, goals: 1, assists: 2 },], Titles: "", WC: "" },
    { name: "Patrick Kluivert", Country: "NED", Position: "DL", Teams: [{ club: "es Barcelona", matches: 239, goals: 114, assists: 39 }, { club: "es Valencia", matches: 10, goals: 1, assists: 1 }, { club: "it Milan", matches: 27, goals: 6, assists: 0 }, { club: "nl PSV", matches: 19, goals: 3, assists: 3 },], Titles: "", WC: "" },
    { name: "Ricardo Quaresma", Country: "POR", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 26, goals: 1, assists: 1 }, { club: "it Inter", matches: 32, goals: 0, assists: 2 }, { club: "pt Sporting", matches: 63, goals: 8, assists: 7 }, { club: "pt Porto", matches: 200, goals: 43, assists: 56 }, { club: "en Chelsea", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Marc Overmars", Country: "NED", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 131, goals: 17, assists: 16 }, { club: "en Arsenal", matches: 119, goals: 31, assists: 19 },], Titles: "", WC: "" },
    { name: "Rüştü Reçber", Country: "TUR", Position: "PO", Teams: [{ club: "es Barcelona", matches: 7, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Óscar López", Country: "ESP", Position: "DF", Teams: [{ club: "es Barcelona", matches: 10, goals: 0, assists: 1 }, { club: "es Betis", matches: 24, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Sergio García", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 7, goals: 0, assists: 1 }, { club: "es Betis", matches: 62, goals: 21, assists: 10 }, { club: "es Espanyol", matches: 220, goals: 47, assists: 40 },], Titles: "", WC: "" },
    { name: "Patrik Andersson", Country: "SWE", Position: "DF", Teams: [{ club: "es Barcelona", matches: 27, goals: 1, assists: 0 }, { club: "de Bayern", matches: 59, goals: 1, assists: 2 },], Titles: "", WC: "" },
    { name: "Mario", Country: "ESP", Position: "DF", Teams: [{ club: "es Barcelona", matches: 2, goals: 0, assists: 0 }, { club: "es Betis", matches: 32, goals: 1, assists: 0 }, { club: "es Getafe", matches: 62, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Frank de Boer", Country: "NED", Position: "DF", Teams: [{ club: "es Barcelona", matches: 192, goals: 10, assists: 5 }, { club: "nl Ajax", matches: 14, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Gaizka Mendieta", Country: "ESP", Position: "CC", Teams: [{ club: "es Barcelona", matches: 46, goals: 5, assists: 6 }, { club: "es Valencia", matches: 163, goals: 47, assists: 22 },], Titles: "", WC: "" },
    { name: "Fábio Rochemback", Country: "BRA", Position: "DF,CC", Teams: [{ club: "es Barcelona", matches: 64, goals: 4, assists: 8 }, { club: "pt Sporting", matches: 89, goals: 13, assists: 18 },], Titles: "", WC: "" },
    { name: "Philippe Christanval", Country: "FRA", Position: "DF", Teams: [{ club: "es Barcelona", matches: 43, goals: 0, assists: 1 }, { club: "fr Monaco", matches: 100, goals: 1, assists: 1 }, { club: "fr Marseille", matches: 16, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Geovanni", Country: "BRA", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 39, goals: 2, assists: 3 }, { club: "pt Benfica", matches: 114, goals: 19, assists: 14 }, { club: "en Man City", matches: 19, goals: 3, assists: 1 },], Titles: "", WC: "" },
    { name: "Robert Enke", Country: "GER", Position: "PO", Teams: [{ club: "es Barcelona", matches: 3, goals: 0, assists: 0 }, { club: "pt Benfica", matches: 59, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Dani Tortolero", Country: "ESP", Position: "DF", Teams: [{ club: "es Barcelona", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Rivaldo", Country: "BRA", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 207, goals: 113, assists: 22 }, { club: "it Milan", matches: 35, goals: 7, assists: 7 }, { club: "gr Olympiakos", matches: 90, goals: 39, assists: 20 },], Titles: "", WC: "" },
    { name: "Francesco Coco", Country: "ITA", Position: "DF", Teams: [{ club: "es Barcelona", matches: 33, goals: 0, assists: 1 }, { club: "it Inter", matches: 35, goals: 0, assists: 1 }, { club: "it Milan", matches: 46, goals: 4, assists: 4 },], Titles: "", WC: "" },
    { name: "Sergi Barjuán", Country: "ESP", Position: "DF", Teams: [{ club: "es Barcelona", matches: 168, goals: 4, assists: 3 }, { club: "es Atletico", matches: 86, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Alfonso Pérez", Country: "ESP", Position: "DL", Teams: [{ club: "es Barcelona", matches: 29, goals: 2, assists: 0 }, { club: "es Betis", matches: 124, goals: 34, assists: 8 }, { club: "fr Marseille", matches: 11, goals: 4, assists: 0 },], Titles: "", WC: "" },

    { name: "Jofre", Country: "ESP", Position: "CC", Teams: [{ club: "es Barcelona", matches: 2, goals: 1, assists: 0 }, { club: "es Espanyol", matches: 16, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Simão Sabrosa", Country: "POR", Position: "CC", Teams: [{ club: "es Barcelona", matches: 62, goals: 3, assists: 8 }, { club: "es Espanyol", matches: 60, goals: 3, assists: 8 }, { club: "es Atletico", matches: 146, goals: 28, assists: 21 }, { club: "pt Sporting", matches: 4, goals: 0, assists: 0 }, { club: "pt Benfica", matches: 208, goals: 87, assists: 35 },], Titles: "", WC: "" },

    { name: "Emmanuel Petit", Country: "FRA", Position: "DF,CC", Teams: [{ club: "es Barcelona", matches: 33, goals: 1, assists: 0 }, { club: "en Arsenal", matches: 100, goals: 9, assists: 18 }, { club: "en Chelsea", matches: 60, goals: 2, assists: 9 },], Titles: "", WC: "" },
    { name: "Boudewijn Zenden", Country: "NED", Position: "DF,DL", Teams: [{ club: "es Barcelona", matches: 82, goals: 3, assists: 2 }, { club: "fr Marseille", matches: 70, goals: 6, assists: 4 }, { club: "nl PSV", matches: 3, goals: 0, assists: 0 }, { club: "en Chelsea", matches: 47, goals: 4, assists: 7 },], Titles: "", WC: "" },
    { name: "Iván de la Peña", Country: "ESP", Position: "CC", Teams: [{ club: "es Barcelona", matches: 31, goals: 2, assists: 2 }, { club: "es Espanyol", matches: 193, goals: 9, assists: 38 }, { club: "fr Marseille", matches: 19, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Ruud Hesp", Country: "NED", Position: "PO", Teams: [{ club: "es Barcelona", matches: 118, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Winston Bogarde", Country: "NED", Position: "DF", Teams: [{ club: "es Barcelona", matches: 51, goals: 4, assists: 1 }, { club: "it Milan", matches: 3, goals: 0, assists: 0 }, { club: "en Chelsea", matches: 10, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Ronald de Boer", Country: "NED", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 44, goals: 1, assists: 2 }, { club: "nl Ajax", matches: 14, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Jari Litmanen", Country: "FIN", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 29, goals: 3, assists: 4 }, { club: "nl Ajax", matches: 40, goals: 10, assists: 2 },], Titles: "", WC: "" },
    { name: "Frédéric Déhu", Country: "FRA", Position: "DF,CC", Teams: [{ club: "es Barcelona", matches: 19, goals: 1, assists: 0 }, { club: "fr PSG", matches: 138, goals: 7, assists: 3 }, { club: "fr Marseille", matches: 62, goals: 2, assists: 3 },], Titles: "", WC: "" },
    { name: "Samuel Okunowo", Country: "NGA", Position: "DF", Teams: [{ club: "es Barcelona", matches: 19, goals: 0, assists: 0 }, { club: "pt Benfica", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Giovanni", Country: "BRA", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 50, goals: 15, assists: 0 }, { club: "gr Olympiakos", matches: 126, goals: 50, assists: 26 },], Titles: "", WC: "" },
    { name: "Òscar", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 25, goals: 7, assists: 0 }, { club: "es Valencia", matches: 20, goals: 3, assists: 1 }, { club: "es Espanyol", matches: 52, goals: 4, assists: 2 },], Titles: "", WC: "" },
    { name: "Dragan Ćirić", Country: "SRB", Position: "CC", Teams: [{ club: "es Barcelona", matches: 32, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Carles Busquets", Country: "ESP", Position: "PO", Teams: [{ club: "es Barcelona", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Vítor Baía", Country: "POR", Position: "PO", Teams: [{ club: "es Barcelona", matches: 3, goals: 0, assists: 0 }, { club: "pt Porto", matches: 176, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Albert Ferrer", Country: "ESP", Position: "DF", Teams: [{ club: "es Barcelona", matches: 28, goals: 0, assists: 0 }, { club: "en Chelsea", matches: 89, goals: 1, assists: 6 },], Titles: "", WC: "" },
    { name: "Fernando Couto", Country: "POR", Position: "DF", Teams: [{ club: "es Barcelona", matches: 22, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Christophe Dugarry", Country: "FRA", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 10, goals: 0, assists: 0 }, { club: "fr Marseille", matches: 62, goals: 11, assists: 0 },], Titles: "", WC: "" },
    { name: "Hristo Stoichkov", Country: "BUL", Position: "CC,DL", Teams: [{ club: "es Barcelona", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Germán Pezzella", Country: "ARG", Position: "DF", Teams: [{ club: "es Betis", matches: 171, goals: 6, assists: 1 },], Titles: "", WC: "" },
    { name: "Marc Roca", Country: "ESP", Position: "CC", Teams: [{ club: "es Betis", matches: 33, goals: 4, assists: 3 }, { club: "es Espanyol", matches: 115, goals: 3, assists: 4 }, { club: "de Bayern", matches: 23, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Rui Silva", Country: "POR", Position: "PO", Teams: [{ club: "es Betis", matches: 85, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Ayoze Pérez", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Betis", matches: 47, goals: 10, assists: 3 }, { club: "en Leicester", matches: 114, goals: 15, assists: 13 },], Titles: "", WC: "" },
    { name: "Abner", Country: "BRA", Position: "DF", Teams: [{ club: "es Betis", matches: 39, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Assane Diao", Country: "ESP", Position: "DL", Teams: [{ club: "es Betis", matches: 26, goals: 4, assists: 1 },], Titles: "", WC: "" },
    { name: "Guido Rodríguez", Country: "ARG", Position: "CC", Teams: [{ club: "es Betis", matches: 163, goals: 8, assists: 3 },], Titles: "", WC: "" },
    { name: "Aitor Ruibal", Country: "ESP", Position: "DF,CC,DL", Teams: [{ club: "es Betis", matches: 125, goals: 8, assists: 9 },], Titles: "", WC: "" },
    { name: "Rodri", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Betis", matches: 111, goals: 7, assists: 12 },], Titles: "", WC: "" },
    { name: "Luiz Henrique", Country: "BRA", Position: "DL", Teams: [{ club: "es Betis", matches: 64, goals: 4, assists: 10 },], Titles: "", WC: "" },
    { name: "William Carvalho", Country: "POR", Position: "CC", Teams: [{ club: "es Betis", matches: 198, goals: 10, assists: 15 }, { club: "pt Sporting", matches: 170, goals: 10, assists: 10 },], Titles: "", WC: "" },

    { name: "Andrés Guardado", Country: "MEX", Position: "DF,CC,DL", Teams: [{ club: "es Betis", matches: 217, goals: 5, assists: 17 }, { club: "es Deportivo", matches: 143, goals: 24, assists: 26 }, { club: "es Valencia", matches: 58, goals: 1, assists: 4 }, { club: "nl PSV", matches: 97, goals: 4, assists: 19 }, { club: "de Leverkusen", matches: 6, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Sokratis Papastathopoulos", Country: "GRE", Position: "DF", Teams: [{ club: "es Betis", matches: 9, goals: 0, assists: 0 }, { club: "it Milan", matches: 5, goals: 0, assists: 0 }, { club: "de Leverkusen", matches: 188, goals: 10, assists: 2 }, { club: "gr Olympiakos", matches: 79, goals: 4, assists: 2 }, { club: "en Arsenal", matches: 69, goals: 6, assists: 2 },], Titles: "", WC: "" },
    { name: "Sergi Altimira", Country: "ESP", Position: "CC", Teams: [{ club: "es Betis", matches: 14, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Nabil Fekir", Country: "FRA", Position: "CC,DL", Teams: [{ club: "es Betis", matches: 151, goals: 28, assists: 25 }, { club: "fr Lyon", matches: 184, goals: 67, assists: 38 },], Titles: "", WC: "" },
    { name: "Johnny Cardoso", Country: "USA", Position: "CC", Teams: [{ club: "es Betis", matches: 7, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Luiz Felipe", Country: "ITA", Position: "DF", Teams: [{ club: "es Betis", matches: 34, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Youssouf Sabaly", Country: "SEN", Position: "DF", Teams: [{ club: "es Betis", matches: 48, goals: 2, assists: 4 },], Titles: "", WC: "" },
    { name: "Francisco Barbosa", Country: "ESP", Position: "PO", Teams: [{ club: "es Betis", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Ricardo Visus", Country: "ESP", Position: "DF", Teams: [{ club: "es Betis", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Ezequiel Ávila", Country: "ARG", Position: "DL", Teams: [{ club: "es Betis", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Paul Akouokou", Country: "CIV", Position: "DF,CC", Teams: [{ club: "es Betis", matches: 44, goals: 0, assists: 1 }, { club: "fr Lyon", matches: 9, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Enrique", Country: "ESP", Position: "CC", Teams: [{ club: "es Betis", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Édgar González", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Betis", matches: 78, goals: 2, assists: 1 },], Titles: "", WC: "" },
    { name: "Felix Garreta", Country: "ESP", Position: "DF", Teams: [{ club: "es Betis", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Loren Morón", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Betis", matches: 129, goals: 28, assists: 6 }, { club: "es Espanyol", matches: 25, goals: 4, assists: 1 },], Titles: "", WC: "" },

    { name: "Fran Delgado", Country: "ESP", Position: "DF", Teams: [{ club: "es Betis", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Diego Lainez", Country: "MEX", Position: "CC,DL", Teams: [{ club: "es Betis", matches: 70, goals: 3, assists: 4 },], Titles: "", WC: "" },
    { name: "Joel Robles", Country: "ESP", Position: "PO", Teams: [{ club: "es Betis", matches: 77, goals: 0, assists: 0 }, { club: "es Atletico", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Kike Hermoso", Country: "ESP", Position: "DF", Teams: [{ club: "es Betis", matches: 3, goals: 1, assists: 0 },], Titles: "", WC: "" },

    { name: "Raúl", Country: "ESP", Position: "DF,CC,DL", Teams: [{ club: "es Betis", matches: 5, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Antonio Sanabria", Country: "PAR", Position: "DL", Teams: [{ club: "es Betis", matches: 84, goals: 22, assists: 3 }, { club: "it Roma", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Sidnei", Country: "BRA", Position: "DF", Teams: [{ club: "es Betis", matches: 63, goals: 3, assists: 1 }, { club: "es Deportivo", matches: 119, goals: 2, assists: 3 }, { club: "es Espanyol", matches: 12, goals: 0, assists: 0 }, { club: "pt Benfica", matches: 57, goals: 6, assists: 1 },], Titles: "", WC: "" },
    { name: "Antonio Barragán", Country: "ESP", Position: "DF,CC,DL", Teams: [{ club: "es Betis", matches: 67, goals: 0, assists: 7 }, { club: "es Deportivo", matches: 26, goals: 2, assists: 1 }, { club: "es Valencia", matches: 140, goals: 2, assists: 7 },], Titles: "", WC: "" },
    { name: "Pau López", Country: "ESP", Position: "PO", Teams: [{ club: "es Betis", matches: 35, goals: 0, assists: 0 }, { club: "es Espanyol", matches: 78, goals: 0, assists: 0 }, { club: "it Roma", matches: 76, goals: 0, assists: 0 }, { club: "fr Marseille", matches: 107, goals: 0, assists: 3 },], Titles: "", WC: "" },
    { name: "Francis Guerrero", Country: "ESP", Position: "DF,CC,DL", Teams: [{ club: "es Betis", matches: 42, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Sergio León", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Betis", matches: 60, goals: 16, assists: 3 },], Titles: "", WC: "" },
    { name: "Ryad Boudebouz", Country: "ALG", Position: "CC,DL", Teams: [{ club: "es Betis", matches: 41, goals: 3, assists: 4 }, { club: "es Celta", matches: 11, goals: 1, assists: 2 },], Titles: "", WC: "" },
    { name: "Fabián Ruiz Peña", Country: "ESP", Position: "CC", Teams: [{ club: "es Betis", matches: 60, goals: 3, assists: 7 }, { club: "it Napoli", matches: 166, goals: 22, assists: 17 }, { club: "fr PSG", matches: 60, goals: 4, assists: 6 },], Titles: "", WC: "" },
    { name: "Riza Durmisi", Country: "DEN", Position: "DF", Teams: [{ club: "es Betis", matches: 54, goals: 3, assists: 7 },], Titles: "", WC: "" },
    { name: "Jordi Amat", Country: "IDN", Position: "DF,CC", Teams: [{ club: "es Betis", matches: 26, goals: 0, assists: 0 }, { club: "es Espanyol", matches: 41, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Alin Toșca", Country: "ROU", Position: "DF", Teams: [{ club: "es Betis", matches: 25, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Dani Giménez", Country: "ESP", Position: "PO", Teams: [{ club: "es Betis", matches: 21, goals: 0, assists: 0 }, { club: "es Deportivo", matches: 82, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Juanjo Narváez", Country: "COL", Position: "CC", Teams: [{ club: "es Betis", matches: 9, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Pedro López", Country: "ESP", Position: "PO", Teams: [{ club: "es Betis", matches: 6, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Rafa Navarro", Country: "ESP", Position: "DF", Teams: [{ club: "es Betis", matches: 23, goals: 2, assists: 2 },], Titles: "", WC: "" },

    { name: "Julio Gracia", Country: "ESP", Position: "DF,DL", Teams: [{ club: "es Betis", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Petros", Country: "BRA", Position: "CC", Teams: [{ club: "es Betis", matches: 66, goals: 2, assists: 4 },], Titles: "", WC: "" },
    { name: "Cristiano Piccini", Country: "ITA", Position: "DF", Teams: [{ club: "es Betis", matches: 58, goals: 3, assists: 3 }, { club: "es Valencia", matches: 51, goals: 2, assists: 0 }, { club: "pt Sporting", matches: 32, goals: 0, assists: 3 },], Titles: "", WC: "" },
    { name: "Bruno González", Country: "ESP", Position: "DF", Teams: [{ club: "es Betis", matches: 85, goals: 3, assists: 0 }, { club: "es Getafe", matches: 58, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Rubén Pardo", Country: "ESP", Position: "CC", Teams: [{ club: "es Betis", matches: 16, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Jonas Martin", Country: "FRA", Position: "CC", Teams: [{ club: "es Betis", matches: 22, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Ryan Donk", Country: "SUR", Position: "DF,CC", Teams: [{ club: "es Betis", matches: 18, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Álex Martínez", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Betis", matches: 41, goals: 0, assists: 2 },], Titles: "", WC: "" },
    { name: "Felipe Gutiérrez", Country: "CHI", Position: "CC", Teams: [{ club: "es Betis", matches: 16, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Álvaro Cejudo", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Betis", matches: 81, goals: 4, assists: 5 },], Titles: "", WC: "" },
    { name: "José Carlos", Country: "ESP", Position: "DF", Teams: [{ club: "es Betis", matches: 7, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Charly Musonda Jr.", Country: "BEL", Position: "CC,DL", Teams: [{ club: "es Betis", matches: 24, goals: 1, assists: 2 }, { club: "en Chelsea", matches: 7, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Roman Zozulya", Country: "UKR", Position: "DL", Teams: [{ club: "es Betis", matches: 6, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Juan Manuel Vargas", Country: "PER", Position: "DF", Teams: [{ club: "es Betis", matches: 22, goals: 3, assists: 2 },], Titles: "", WC: "" },
    { name: "Heiko Westermann", Country: "GER", Position: "DF", Teams: [{ club: "es Betis", matches: 20, goals: 1, assists: 0 }, { club: "nl Ajax", matches: 6, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Francisco Varela", Country: "ESP", Position: "DF", Teams: [{ club: "es Betis", matches: 39, goals: 0, assists: 5 },], Titles: "", WC: "" },
    { name: "Jorge Molina", Country: "ESP", Position: "DL", Teams: [{ club: "es Betis", matches: 192, goals: 67, assists: 13 }, { club: "es Getafe", matches: 157, goals: 49, assists: 17 },], Titles: "", WC: "" },
    { name: "Ricky van Wolfswinkel", Country: "NED", Position: "CC,DL", Teams: [{ club: "es Betis", matches: 19, goals: 3, assists: 2 }, { club: "pt Sporting", matches: 73, goals: 35, assists: 1 },], Titles: "", WC: "" },
    { name: "Foued Kadir", Country: "ALG", Position: "CC", Teams: [{ club: "es Betis", matches: 38, goals: 1, assists: 5 }, { club: "es Getafe", matches: 7, goals: 0, assists: 0 }, { club: "fr Marseille", matches: 15, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Didier Digard", Country: "FRA", Position: "CC", Teams: [{ club: "es Betis", matches: 10, goals: 0, assists: 0 }, { club: "fr PSG", matches: 16, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Jordi", Country: "ESP", Position: "DF", Teams: [{ club: "es Betis", matches: 81, goals: 1, assists: 0 }, { club: "es Celta", matches: 30, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Vincenzo Rennella", Country: "ITA", Position: "DL", Teams: [{ club: "es Betis", matches: 44, goals: 8, assists: 3 },], Titles: "", WC: "" },
    { name: "Leandro Damião", Country: "BRA", Position: "DL", Teams: [{ club: "es Betis", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Lorenzo Reyes", Country: "CHI", Position: "CC", Teams: [{ club: "es Betis", matches: 71, goals: 1, assists: 2 },], Titles: "", WC: "" },
    { name: "Jorge Casado", Country: "ESP", Position: "DF", Teams: [{ club: "es Betis", matches: 18, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Damien Perquis", Country: "POL", Position: "DF", Teams: [{ club: "es Betis", matches: 42, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Héctor Rodas", Country: "ESP", Position: "DF", Teams: [{ club: "es Betis", matches: 5, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "José Antonio Caro", Country: "ESP", Position: "DF", Teams: [{ club: "es Betis", matches: 12, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Nono", Country: "ESP", Position: "CC", Teams: [{ club: "es Betis", matches: 51, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Chuli", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Betis", matches: 21, goals: 1, assists: 2 }, { club: "es Getafe", matches: 18, goals: 5, assists: 1 },], Titles: "", WC: "" },
    { name: "Antonio Amaya", Country: "ESP", Position: "DF", Teams: [{ club: "es Betis", matches: 69, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Javier Chica", Country: "ESP", Position: "DF", Teams: [{ club: "es Betis", matches: 63, goals: 2, assists: 3 }, { club: "es Espanyol", matches: 126, goals: 0, assists: 2 },], Titles: "", WC: "" },
    { name: "Cedrick Mabwati", Country: "COD", Position: "CC,DL", Teams: [{ club: "es Betis", matches: 32, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Paulão", Country: "BRA", Position: "DF", Teams: [{ club: "es Betis", matches: 60, goals: 2, assists: 0 },], Titles: "", WC: "" },

    { name: "Guillermo Sara", Country: "ARG", Position: "PO", Teams: [{ club: "es Betis", matches: 16, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Stephan Andersen", Country: "DEN", Position: "PO", Teams: [{ club: "es Betis", matches: 12, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Nosa Igiebor", Country: "NGA", Position: "CC", Teams: [{ club: "es Betis", matches: 32, goals: 2, assists: 1 },], Titles: "", WC: "" },
    { name: "Braian Rodríguez", Country: "URU", Position: "DL", Teams: [{ club: "es Betis", matches: 14, goals: 2, assists: 2 },], Titles: "", WC: "" },
    { name: "Markus Steinhöfer", Country: "GER", Position: "DF,CC", Teams: [{ club: "es Betis", matches: 8, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Juanma", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Betis", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Adrián", Country: "ESP", Position: "PO", Teams: [{ club: "es Betis", matches: 32, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "José Cañas", Country: "ESP", Position: "CC", Teams: [{ club: "es Betis", matches: 66, goals: 0, assists: 1 }, { club: "es Espanyol", matches: 48, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Dorlan Pabón", Country: "COL", Position: "CC,DL", Teams: [{ club: "es Betis", matches: 17, goals: 8, assists: 4 }, { club: "es Valencia", matches: 16, goals: 3, assists: 0 },], Titles: "", WC: "" },
    { name: "Nélson Marcos", Country: "POR", Position: "DF", Teams: [{ club: "es Betis", matches: 81, goals: 1, assists: 0 }, { club: "pt Benfica", matches: 94, goals: 2, assists: 11 },], Titles: "", WC: "" },
    { name: "Salvador Agra", Country: "POR", Position: "CC,DL", Teams: [{ club: "es Betis", matches: 10, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Casto", Country: "ESP", Position: "PO", Teams: [{ club: "es Betis", matches: 71, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Alejandro Pozuelo", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Betis", matches: 29, goals: 3, assists: 1 },], Titles: "", WC: "" },
    { name: "Guillermo Molins", Country: "SWE", Position: "CC,DL", Teams: [{ club: "es Betis", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Sergio", Country: "ESP", Position: "CC", Teams: [{ club: "es Betis", matches: 6, goals: 0, assists: 0 },], Titles: "", WC: "" },


    { name: "José Isidoro", Country: "ESP", Position: "DF", Teams: [{ club: "es Betis", matches: 50, goals: 1, assists: 2 },], Titles: "", WC: "" },
    { name: "Ezequiel Calvente", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Betis", matches: 33, goals: 1, assists: 1 },], Titles: "", WC: "" },

    { name: "Momo", Country: "ESP", Position: "CC", Teams: [{ club: "es Betis", matches: 20, goals: 0, assists: 1 }, { club: "es Deportivo", matches: 5, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Achille Emaná", Country: "CMR", Position: "CC", Teams: [{ club: "es Betis", matches: 91, goals: 34, assists: 19 },], Titles: "", WC: "" },
    { name: "David Belenguer", Country: "ESP", Position: "DF", Teams: [{ club: "es Betis", matches: 43, goals: 0, assists: 0 }, { club: "es Getafe", matches: 168, goals: 3, assists: 3 },], Titles: "", WC: "" },
    { name: "Miguel Lopes", Country: "POR", Position: "DF", Teams: [{ club: "es Betis", matches: 21, goals: 0, assists: 3 }, { club: "fr Lyon", matches: 24, goals: 0, assists: 1 }, { club: "pt Sporting", matches: 24, goals: 0, assists: 4 }, { club: "pt Porto", matches: 16, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Miki Roqué", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Betis", matches: 12, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Arzu", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Betis", matches: 267, goals: 11, assists: 9 },], Titles: "", WC: "" },
    { name: "Juan Pablo Caffa", Country: "ARG", Position: "CC", Teams: [{ club: "es Betis", matches: 65, goals: 8, assists: 10 },], Titles: "", WC: "" },
    { name: "Israel", Country: "ESP", Position: "CC", Teams: [{ club: "es Betis", matches: 40, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Juande", Country: "ESP", Position: "CC", Teams: [{ club: "es Betis", matches: 69, goals: 3, assists: 1 },], Titles: "", WC: "" },
    { name: "Fernando Vega", Country: "ESP", Position: "DF", Teams: [{ club: "es Betis", matches: 120, goals: 2, assists: 2 },], Titles: "", WC: "" },
    { name: "Manu Palancar", Country: "ESP", Position: "DF", Teams: [{ club: "es Betis", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Rodri", Country: "ESP", Position: "CC", Teams: [{ club: "es Betis", matches: 25, goals: 1, assists: 2 },], Titles: "", WC: "" },
    { name: "Carlos García", Country: "ESP", Position: "DF", Teams: [{ club: "es Betis", matches: 33, goals: 1, assists: 0 }, { club: "es Espanyol", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Melli", Country: "ESP", Position: "DF", Teams: [{ club: "es Betis", matches: 189, goals: 5, assists: 3 },], Titles: "", WC: "" },
    { name: "Mariano Pavone", Country: "ARG", Position: "DL", Teams: [{ club: "es Betis", matches: 76, goals: 16, assists: 5 },], Titles: "", WC: "" },
    { name: "Mehmet Aurélio", Country: "TUR", Position: "CC", Teams: [{ club: "es Betis", matches: 55, goals: 6, assists: 2 },], Titles: "", WC: "" },
    { name: "Capi", Country: "ESP", Position: "CC", Teams: [{ club: "es Betis", matches: 241, goals: 17, assists: 14 },], Titles: "", WC: "" },
    { name: "David Rivas", Country: "ESP", Position: "DF", Teams: [{ club: "es Betis", matches: 194, goals: 8, assists: 2 },], Titles: "", WC: "" },
    { name: "David Odonkor", Country: "GER", Position: "CC,DL", Teams: [{ club: "es Betis", matches: 51, goals: 3, assists: 1 }, { club: "de Leverkusen", matches: 80, goals: 2, assists: 6 },], Titles: "", WC: "" },
    { name: "Sunny", Country: "NGA", Position: "CC", Teams: [{ club: "es Betis", matches: 7, goals: 0, assists: 0 }, { club: "es Valencia", matches: 12, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Nano", Country: "ESP", Position: "DF", Teams: [{ club: "es Betis", matches: 44, goals: 2, assists: 3 }, { club: "es Getafe", matches: 97, goals: 7, assists: 1 },], Titles: "", WC: "" },
    { name: "Daniel Martín", Country: "ESP", Position: "DL", Teams: [{ club: "es Betis", matches: 100, goals: 20, assists: 4 },], Titles: "", WC: "" },
    { name: "Juanito", Country: "ESP", Position: "DF", Teams: [{ club: "es Betis", matches: 262, goals: 19, assists: 3 }, { club: "es Atletico", matches: 22, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Ricardo", Country: "POR", Position: "PO", Teams: [{ club: "es Betis", matches: 48, goals: 0, assists: 0 }, { club: "pt Sporting", matches: 150, goals: 0, assists: 0 }, { club: "en Leicester", matches: 8, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Mark González", Country: "CHI", Position: "CC,DL", Teams: [{ club: "es Betis", matches: 44, goals: 10, assists: 5 },], Titles: "", WC: "" },
    { name: "Ricardo Oliveira", Country: "BRA", Position: "DL", Teams: [{ club: "es Betis", matches: 67, goals: 33, assists: 6 }, { club: "es Valencia", matches: 27, goals: 9, assists: 3 }, { club: "it Milan", matches: 32, goals: 3, assists: 1 },], Titles: "", WC: "" },
    { name: "Edu", Country: "BRA", Position: "CC,DL", Teams: [{ club: "es Betis", matches: 144, goals: 36, assists: 17 }, { club: "es Celta", matches: 129, goals: 27, assists: 9 },], Titles: "", WC: "" },
    { name: "Fabián Monzón", Country: "ARG", Position: "DF", Teams: [{ club: "es Betis", matches: 13, goals: 2, assists: 0 }, { club: "fr Lyon", matches: 11, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Xisco", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Betis", matches: 80, goals: 8, assists: 7 }, { club: "es Valencia", matches: 55, goals: 4, assists: 2 },], Titles: "", WC: "" },
    { name: "Branko Ilić", Country: "SVN", Position: "DF", Teams: [{ club: "es Betis", matches: 34, goals: 0, assists: 3 },], Titles: "", WC: "" },
    { name: "Marko Babić", Country: "CRO", Position: "DF,CC", Teams: [{ club: "es Betis", matches: 12, goals: 0, assists: 0 }, { club: "de Leverkusen", matches: 172, goals: 19, assists: 20 },], Titles: "", WC: "" },
    { name: "Diego Segura", Country: "ESP", Position: "DL", Teams: [{ club: "es Betis", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Lima", Country: "BRA", Position: "DF", Teams: [{ club: "es Betis", matches: 10, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Rafael Sóbis", Country: "BRA", Position: "CC,DL", Teams: [{ club: "es Betis", matches: 57, goals: 8, assists: 1 },], Titles: "", WC: "" },
    { name: "Toni Doblas", Country: "ESP", Position: "PO", Teams: [{ club: "es Betis", matches: 82, goals: 0, assists: 0 }, { club: "it Napoli", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },


    { name: "Marcos Assunção", Country: "BRA", Position: "CC", Teams: [{ club: "es Betis", matches: 145, goals: 23, assists: 21 }, { club: "it Roma", matches: 75, goals: 10, assists: 10 },], Titles: "", WC: "" },
    { name: "Robert", Country: "BRA", Position: "DL", Teams: [{ club: "es Betis", matches: 52, goals: 17, assists: 4 }, { club: "nl PSV", matches: 22, goals: 2, assists: 2 },], Titles: "", WC: "" },
    { name: "Johann Vogel", Country: "SUI", Position: "CC", Teams: [{ club: "es Betis", matches: 17, goals: 0, assists: 0 }, { club: "it Milan", matches: 19, goals: 0, assists: 0 }, { club: "nl PSV", matches: 188, goals: 6, assists: 10 },], Titles: "", WC: "" },
    { name: "Tati Maldonado", Country: "ESP", Position: "DL", Teams: [{ club: "es Betis", matches: 19, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Jorge Wagner", Country: "BRA", Position: "CC", Teams: [{ club: "es Betis", matches: 10, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Fabrice Pancrate", Country: "FRA", Position: "CC,DL", Teams: [{ club: "es Betis", matches: 7, goals: 1, assists: 0 }, { club: "fr PSG", matches: 113, goals: 11, assists: 4 },], Titles: "", WC: "" },
    { name: "Alejandro Lembo", Country: "URU", Position: "DF", Teams: [{ club: "es Betis", matches: 46, goals: 1, assists: 3 },], Titles: "", WC: "" },
    { name: "Luis Fernández", Country: "ESP", Position: "DF", Teams: [{ club: "es Betis", matches: 206, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Diego Tardelli", Country: "BRA", Position: "CC,DL", Teams: [{ club: "es Betis", matches: 15, goals: 1, assists: 2 }, { club: "nl PSV", matches: 18, goals: 3, assists: 1 },], Titles: "", WC: "" },
    { name: "Paolo Castellini", Country: "ITA", Position: "DF", Teams: [{ club: "es Betis", matches: 14, goals: 0, assists: 0 }, { club: "it Roma", matches: 11, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Juanlu", Country: "ESP", Position: "CC", Teams: [{ club: "es Betis", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Juan José Cañas", Country: "ESP", Position: "CC", Teams: [{ club: "es Betis", matches: 133, goals: 4, assists: 0 },], Titles: "", WC: "" },
    { name: "Denílson", Country: "BRA", Position: "CC", Teams: [{ club: "es Betis", matches: 174, goals: 13, assists: 23 },], Titles: "", WC: "" },
    { name: "Washington Tais", Country: "URU", Position: "DF", Teams: [{ club: "es Betis", matches: 42, goals: 1, assists: 2 },], Titles: "", WC: "" },
    { name: "Benjamín Zarandona", Country: "EQG", Position: "CC", Teams: [{ club: "es Betis", matches: 150, goals: 9, assists: 2 },], Titles: "", WC: "" },
    { name: "Pablo Niño", Country: "ESP", Position: "CC", Teams: [{ club: "es Betis", matches: 6, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Ito", Country: "ESP", Position: "CC", Teams: [{ club: "es Betis", matches: 155, goals: 5, assists: 3 }, { club: "es Celta", matches: 34, goals: 1, assists: 0 }, { club: "es Espanyol", matches: 81, goals: 0, assists: 3 },], Titles: "", WC: "" },
    { name: "Mingo", Country: "ESP", Position: "DF", Teams: [{ club: "es Betis", matches: 47, goals: 1, assists: 1 },], Titles: "", WC: "" },


    { name: "Iulian Filipescu", Country: "ROU", Position: "DF", Teams: [{ club: "es Betis", matches: 97, goals: 6, assists: 1 },], Titles: "", WC: "" },
    { name: "Gastón Casas", Country: "ARG", Position: "DL", Teams: [{ club: "es Betis", matches: 36, goals: 7, assists: 4 },], Titles: "", WC: "" },
    { name: "João Tomás", Country: "POR", Position: "DL", Teams: [{ club: "es Betis", matches: 33, goals: 8, assists: 0 }, { club: "pt Benfica", matches: 34, goals: 17, assists: 0 },], Titles: "", WC: "" },
    { name: "César de Loma", Country: "ESP", Position: "CC", Teams: [{ club: "es Betis", matches: 14, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "José Calado", Country: "POR", Position: "CC", Teams: [{ club: "es Betis", matches: 22, goals: 1, assists: 0 }, { club: "pt Benfica", matches: 33, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Joey Guðjónsson", Country: "ISL", Position: "CC", Teams: [{ club: "es Betis", matches: 12, goals: 0, assists: 0 }, { club: "en Leicester", matches: 77, goals: 9, assists: 7 },], Titles: "", WC: "" },
    { name: "Juan Merino", Country: "ESP", Position: "DF", Teams: [{ club: "es Betis", matches: 102, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Francisco Castaño", Country: "ESP", Position: "CC", Teams: [{ club: "es Betis", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Diego Crosa", Country: "ARG", Position: "DF", Teams: [{ club: "es Betis", matches: 29, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Victor Ikpeba", Country: "NGA", Position: "DL", Teams: [{ club: "es Betis", matches: 3, goals: 0, assists: 0 }, { club: "fr Monaco", matches: 78, goals: 31, assists: 0 }, { club: "de Leverkusen", matches: 32, goals: 4, assists: 1 },], Titles: "", WC: "" },
    { name: "Miroslav Karhan", Country: "SVK", Position: "CC", Teams: [{ club: "es Betis", matches: 33, goals: 2, assists: 1 }, { club: "de Wolfsburg", matches: 172, goals: 9, assists: 17 },], Titles: "", WC: "" },
    { name: "Jorge Otero", Country: "ESP", Position: "DF", Teams: [{ club: "es Betis", matches: 66, goals: 0, assists: 0 }, { club: "es Atletico", matches: 32, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Joaquín Bornes", Country: "ESP", Position: "DF", Teams: [{ club: "es Betis", matches: 21, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Alexis Trujillo", Country: "ESP", Position: "CC", Teams: [{ club: "es Betis", matches: 88, goals: 8, assists: 2 },], Titles: "", WC: "" },
    { name: "Oli", Country: "ESP", Position: "DL", Teams: [{ club: "es Betis", matches: 96, goals: 21, assists: 1 },], Titles: "", WC: "" },
    { name: "Sebastián Romero", Country: "ARG", Position: "CC,DL", Teams: [{ club: "es Betis", matches: 22, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Risto Vidaković", Country: "YUG", Position: "DF", Teams: [{ club: "es Betis", matches: 32, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Ángel Cuéllar", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Betis", matches: 38, goals: 1, assists: 2 },], Titles: "", WC: "" },
    { name: "Juan Jesús Cabrera Rubio", Country: "ESP", Position: "CC", Teams: [{ club: "es Betis", matches: 6, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Joaquín Valerio", Country: "ESP", Position: "PO", Teams: [{ club: "es Betis", matches: 12, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Roberto Solozábal", Country: "ESP", Position: "DF", Teams: [{ club: "es Betis", matches: 48, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Tomás Olías", Country: "ESP", Position: "DF", Teams: [{ club: "es Betis", matches: 55, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Fernando", Country: "ESP", Position: "CC", Teams: [{ club: "es Betis", matches: 64, goals: 5, assists: 0 }, { club: "es Deportivo", matches: 45, goals: 3, assists: 3 },], Titles: "", WC: "" },
    { name: "Celso Ayala", Country: "PAR", Position: "DF", Teams: [{ club: "es Betis", matches: 17, goals: 1, assists: 0 }, { club: "es Atletico", matches: 11, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Juan Antonio Ureña", Country: "ESP", Position: "DF", Teams: [{ club: "es Betis", matches: 35, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Jaime", Country: "ESP", Position: "DF", Teams: [{ club: "es Betis", matches: 33, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Iván Pérez Muñoz", Country: "ESP", Position: "DL", Teams: [{ club: "es Betis", matches: 30, goals: 4, assists: 0 }, { club: "es Deportivo", matches: 7, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Rafael Jaques", Country: "BRA", Position: "DL", Teams: [{ club: "es Betis", matches: 4, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Luis Márquez Martín", Country: "ESP", Position: "CC", Teams: [{ club: "es Betis", matches: 26, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Albert Nađ", Country: "SRB", Position: "CC", Teams: [{ club: "es Betis", matches: 25, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Nenad Bjelica", Country: "CRO", Position: "CC", Teams: [{ club: "es Betis", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Nemanja Maksimović", Country: "SRB", Position: "CC", Teams: [{ club: "es Getafe", matches: 208, goals: 8, assists: 3 }, { club: "es Valencia", matches: 21, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Diego Rico", Country: "ESP", Position: "DF", Teams: [{ club: "es Getafe", matches: 23, goals: 0, assists: 5 },], Titles: "", WC: "" },
    { name: "Mason Greenwood", Country: "ENG", Position: "CC,DL", Teams: [{ club: "es Getafe", matches: 24, goals: 7, assists: 5 }, { club: "en Man Utd", matches: 129, goals: 35, assists: 10 },], Titles: "", WC: "" },
    { name: "Gastón Álvarez", Country: "URU", Position: "DF", Teams: [{ club: "es Getafe", matches: 50, goals: 3, assists: 0 },], Titles: "", WC: "" },
    { name: "Djené", Country: "TOG", Position: "DF,CC", Teams: [{ club: "es Getafe", matches: 245, goals: 1, assists: 3 },], Titles: "", WC: "" },
    { name: "Omar Alderete", Country: "PAR", Position: "DF", Teams: [{ club: "es Getafe", matches: 51, goals: 1, assists: 2 }, { club: "es Valencia", matches: 34, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Damián Suárez", Country: "URU", Position: "DF,CC", Teams: [{ club: "es Getafe", matches: 291, goals: 4, assists: 29 },], Titles: "", WC: "" },
    { name: "Luis Milla", Country: "ESP", Position: "CC", Teams: [{ club: "es Getafe", matches: 47, goals: 1, assists: 7 },], Titles: "", WC: "" },
    { name: "Iglesias", Country: "ESP", Position: "DF,CC,DL", Teams: [{ club: "es Getafe", matches: 89, goals: 1, assists: 5 },], Titles: "", WC: "" },
    { name: "Jaime Mata", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Getafe", matches: 183, goals: 44, assists: 12 },], Titles: "", WC: "" },
    { name: "Domingos Duarte", Country: "POR", Position: "DF", Teams: [{ club: "es Getafe", matches: 49, goals: 1, assists: 2 }, { club: "es Deportivo", matches: 39, goals: 4, assists: 0 },], Titles: "", WC: "" },
    { name: "Stefan Mitrović", Country: "SRB", Position: "DF", Teams: [{ club: "es Getafe", matches: 68, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Jordi", Country: "ESP", Position: "CC", Teams: [{ club: "es Getafe", matches: 11, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Mauro Arambarri", Country: "URU", Position: "CC", Teams: [{ club: "es Getafe", matches: 192, goals: 6, assists: 10 },], Titles: "", WC: "" },
    { name: "Anthony Lozano", Country: "HON", Position: "CC,DL", Teams: [{ club: "es Getafe", matches: 7, goals: 1, assists: 4 },], Titles: "", WC: "" },
    { name: "Daniel Fuzato", Country: "BRA", Position: "PO", Teams: [{ club: "es Getafe", matches: 2, goals: 0, assists: 0 }, { club: "it Roma", matches: 8, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Fabrizio Angileri", Country: "ARG", Position: "DF,CC", Teams: [{ club: "es Getafe", matches: 23, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Jesús Santiago", Country: "ESP", Position: "CC", Teams: [{ club: "es Getafe", matches: 3, goals: 0, assists: 0 }, { club: "es Valencia", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Portu", Country: "ESP", Position: "DF,CC,DL", Teams: [{ club: "es Getafe", matches: 40, goals: 0, assists: 4 }, { club: "es Valencia", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "John Joe", Country: "IRL", Position: "CC,DL", Teams: [{ club: "es Getafe", matches: 9, goals: 1, assists: 0 },], Titles: "", WC: "" },

    { name: "Ángel Algobia", Country: "ESP", Position: "CC", Teams: [{ club: "es Getafe", matches: 30, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Gonzalo Villar", Country: "ESP", Position: "CC", Teams: [{ club: "es Getafe", matches: 26, goals: 0, assists: 1 }, { club: "it Roma", matches: 63, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Jordan Amavi", Country: "FRA", Position: "DF,DL", Teams: [{ club: "es Getafe", matches: 6, goals: 0, assists: 0 }, { club: "fr Marseille", matches: 127, goals: 3, assists: 9 },], Titles: "", WC: "" },


    { name: "Mathías Olivera", Country: "URU", Position: "DF,CC", Teams: [{ club: "es Getafe", matches: 111, goals: 2, assists: 7 }, { club: "it Napoli", matches: 57, goals: 2, assists: 5 },], Titles: "", WC: "" },
    { name: "Florentino Luís", Country: "POR", Position: "CC", Teams: [{ club: "es Getafe", matches: 24, goals: 0, assists: 2 }, { club: "fr Monaco", matches: 11, goals: 0, assists: 0 }, { club: "pt Benfica", matches: 91, goals: 1, assists: 3 },], Titles: "", WC: "" },
    { name: "Jakub Jankto", Country: "CZE", Position: "DF,CC", Teams: [{ club: "es Getafe", matches: 15, goals: 0, assists: 2 },], Titles: "", WC: "" },
    { name: "Erick Cabaco", Country: "URU", Position: "DF", Teams: [{ club: "es Getafe", matches: 37, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Okay Yokuşlu", Country: "TUR", Position: "DF,CC", Teams: [{ club: "es Getafe", matches: 11, goals: 0, assists: 0 }, { club: "es Celta", matches: 81, goals: 2, assists: 2 },], Titles: "", WC: "" },
    { name: "David Timor", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Getafe", matches: 68, goals: 3, assists: 1 },], Titles: "", WC: "" },
    { name: "Allan Nyom", Country: "CMR", Position: "DF,CC", Teams: [{ club: "es Getafe", matches: 82, goals: 2, assists: 3 },], Titles: "", WC: "" },
    { name: "Jonathan Silva", Country: "ARG", Position: "DF,CC,DL", Teams: [{ club: "es Getafe", matches: 11, goals: 0, assists: 0 }, { club: "it Roma", matches: 2, goals: 0, assists: 0 }, { club: "pt Sporting", matches: 33, goals: 2, assists: 4 },], Titles: "", WC: "" },
    { name: "José Juan Macías", Country: "MEX", Position: "CC,DL", Teams: [{ club: "es Getafe", matches: 8, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Emmanuel Amankwaa Akurugu", Country: "GHA", Position: "DF", Teams: [{ club: "es Getafe", matches: 5, goals: 0, assists: 1 },], Titles: "", WC: "" },

    { name: "Chema", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Getafe", matches: 17, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Pablo Montero", Country: "ESP", Position: "CC", Teams: [{ club: "es Getafe", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },


    { name: "Sabit Abdulai", Country: "GHA", Position: "CC", Teams: [{ club: "es Getafe", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Abdoulay Diaby", Country: "MLI", Position: "DF,CC,DL", Teams: [{ club: "es Getafe", matches: 3, goals: 0, assists: 0 }, { club: "pt Sporting", matches: 37, goals: 4, assists: 3 },], Titles: "", WC: "" },
    { name: "Ante Palaversa", Country: "CRO", Position: "CC", Teams: [{ club: "es Getafe", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Mamor Niang", Country: "SEN", Position: "CC,DL", Teams: [{ club: "es Getafe", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "David Alba", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Getafe", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "José Antonio Miranda", Country: "EQG", Position: "DF,CC", Teams: [{ club: "es Getafe", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Leandro Cabrera", Country: "URU", Position: "DF", Teams: [{ club: "es Getafe", matches: 66, goals: 5, assists: 1 }, { club: "es Espanyol", matches: 157, goals: 2, assists: 4 }, { club: "es Atletico", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Kenedy", Country: "BRA", Position: "DF,CC,DL", Teams: [{ club: "es Getafe", matches: 27, goals: 3, assists: 5 }, { club: "en Chelsea", matches: 30, goals: 3, assists: 3 },], Titles: "", WC: "" },
    { name: "Fayçal Fajr", Country: "MAR", Position: "CC,DL", Teams: [{ club: "es Getafe", matches: 48, goals: 1, assists: 4 }, { club: "es Deportivo", matches: 66, goals: 5, assists: 6 },], Titles: "", WC: "" },
    { name: "Oghenekaro Etebo", Country: "NGA", Position: "CC", Teams: [{ club: "es Getafe", matches: 10, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Leandro Chichizola", Country: "ARG", Position: "PO", Teams: [{ club: "es Getafe", matches: 12, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Enric Gallego", Country: "ESP", Position: "DL", Teams: [{ club: "es Getafe", matches: 8, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Markel Bergara", Country: "ESP", Position: "CC", Teams: [{ club: "es Getafe", matches: 23, goals: 4, assists: 1 },], Titles: "", WC: "" },

    { name: "Dimitri Foulquier", Country: "FRA", Position: "DF,CC", Teams: [{ club: "es Getafe", matches: 29, goals: 3, assists: 2 }, { club: "es Valencia", matches: 91, goals: 0, assists: 3 },], Titles: "", WC: "" },
    { name: "Mathieu Flamini", Country: "FRA", Position: "CC", Teams: [{ club: "es Getafe", matches: 21, goals: 0, assists: 0 }, { club: "it Milan", matches: 116, goals: 7, assists: 2 }, { club: "fr Marseille", matches: 23, goals: 0, assists: 0 }, { club: "en Arsenal", matches: 216, goals: 12, assists: 8 },], Titles: "", WC: "" },
    { name: "Gaku Shibasaki", Country: "JPN", Position: "CC,DL", Teams: [{ club: "es Getafe", matches: 31, goals: 1, assists: 0 }, { club: "es Deportivo", matches: 26, goals: 0, assists: 2 },], Titles: "", WC: "" },
    { name: "Samuel Sáiz", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Getafe", matches: 13, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Robert Ibáñez", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Getafe", matches: 11, goals: 1, assists: 0 }, { club: "es Valencia", matches: 6, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Sergi Guardiola", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Getafe", matches: 5, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Vicente Guaita", Country: "ESP", Position: "PO", Teams: [{ club: "es Getafe", matches: 112, goals: 0, assists: 0 }, { club: "es Celta", matches: 16, goals: 0, assists: 0 }, { club: "es Valencia", matches: 98, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Álvaro Jiménez", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Getafe", matches: 49, goals: 3, assists: 2 },], Titles: "", WC: "" },
    { name: "Emiliano Martínez", Country: "ARG", Position: "PO", Teams: [{ club: "es Getafe", matches: 19, goals: 2, assists: 1 }, { club: "en Arsenal", matches: 36, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Loïc Rémy", Country: "FRA", Position: "CC,DL", Teams: [{ club: "es Getafe", matches: 11, goals: 3, assists: 0 }, { club: "fr Lyon", matches: 14, goals: 0, assists: 0 }, { club: "fr Marseille", matches: 95, goals: 34, assists: 10 }, { club: "en Chelsea", matches: 47, goals: 12, assists: 2 },], Titles: "", WC: "" },
    { name: "Barri", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Getafe", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Nicolás Gorosito", Country: "ARG", Position: "DF", Teams: [{ club: "es Getafe", matches: 24, goals: 1, assists: 0 },], Titles: "", WC: "" },

    { name: "Carlos Calderón", Country: "ESP", Position: "CC", Teams: [{ club: "es Getafe", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Filip Manojlović", Country: "SRB", Position: "PO", Teams: [{ club: "es Getafe", matches: 0, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Pape Assane", Country: "SEN", Position: "CC", Teams: [{ club: "es Getafe", matches: 0, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Gustavo Quezada", Country: "ECU", Position: "CC", Teams: [{ club: "es Getafe", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Alberto García", Country: "ESP", Position: "PO", Teams: [{ club: "es Getafe", matches: 35, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Cata Díaz", Country: "ARG", Position: "DF", Teams: [{ club: "es Getafe", matches: 212, goals: 2, assists: 1 }, { club: "es Atletico", matches: 16, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Paul Anton", Country: "ROU", Position: "CC", Teams: [{ club: "es Getafe", matches: 30, goals: 2, assists: 1 },], Titles: "", WC: "" },
    { name: "Carlos Peña", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Getafe", matches: 13, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Facundo Castillón", Country: "ARG", Position: "CC", Teams: [{ club: "es Getafe", matches: 19, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Rolf Feltscher", Country: "VEN", Position: "DF", Teams: [{ club: "es Getafe", matches: 7, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Karim Yoda", Country: "FRA", Position: "DF,CC,DL", Teams: [{ club: "es Getafe", matches: 48, goals: 4, assists: 1 },], Titles: "", WC: "" },
    { name: "Johannes van den Bergh", Country: "GER", Position: "DF", Teams: [{ club: "es Getafe", matches: 5, goals: 0, assists: 0 },], Titles: "", WC: "" },


    { name: "Álvaro Vázquez", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Getafe", matches: 92, goals: 19, assists: 4 }, { club: "es Espanyol", matches: 72, goals: 10, assists: 3 },], Titles: "", WC: "" },
    { name: "Miguel Ángel", Country: "ESP", Position: "DF", Teams: [{ club: "es Getafe", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Emi Buendía", Country: "ARG", Position: "DF,CC,DL", Teams: [{ club: "es Getafe", matches: 28, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "David Gil", Country: "ESP", Position: "PO", Teams: [{ club: "es Getafe", matches: 0, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Víctor Rodríguez", Country: "ESP", Position: "CC", Teams: [{ club: "es Getafe", matches: 34, goals: 2, assists: 2 },], Titles: "", WC: "" },
    { name: "Santiago Vergini", Country: "ARG", Position: "DF", Teams: [{ club: "es Getafe", matches: 28, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Roberto Lago", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Getafe", matches: 55, goals: 0, assists: 3 }, { club: "es Celta", matches: 194, goals: 6, assists: 8 },], Titles: "", WC: "" },
    { name: "Ángel Lafita", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Getafe", matches: 85, goals: 14, assists: 4 }, { club: "es Deportivo", matches: 64, goals: 11, assists: 5 },], Titles: "", WC: "" },
    { name: "Emiliano Velázquez", Country: "URU", Position: "DF", Teams: [{ club: "es Getafe", matches: 43, goals: 4, assists: 1 },], Titles: "", WC: "" },
    { name: "Wanderson", Country: "BRA", Position: "CC", Teams: [{ club: "es Getafe", matches: 21, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Álvaro Pereira", Country: "URU", Position: "DF,CC", Teams: [{ club: "es Getafe", matches: 6, goals: 0, assists: 0 }, { club: "it Inter", matches: 42, goals: 1, assists: 5 }, { club: "pt Porto", matches: 99, goals: 2, assists: 11 },], Titles: "", WC: "" },
    { name: "Bernard Mensah", Country: "GHA", Position: "CC", Teams: [{ club: "es Getafe", matches: 10, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Balázs Megyeri", Country: "HUN", Position: "PO", Teams: [{ club: "es Getafe", matches: 2, goals: 0, assists: 0 }, { club: "gr Olympiakos", matches: 54, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Javi Noblejas", Country: "ESP", Position: "DF", Teams: [{ club: "es Getafe", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Henok Goitom", Country: "ERI", Position: "DL", Teams: [{ club: "es Getafe", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Ian Gonzalez Nieto", Country: "ESP", Position: "DL", Teams: [{ club: "es Getafe", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Borja Galán", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Getafe", matches: 0, goals: 0, assists: 0 }, { club: "es Deportivo", matches: 14, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "José Carrillo", Country: "ESP", Position: "DF", Teams: [{ club: "es Getafe", matches: 0, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Naldo", Country: "BRA", Position: "DF", Teams: [{ club: "es Getafe", matches: 32, goals: 0, assists: 0 }, { club: "es Espanyol", matches: 57, goals: 1, assists: 2 }, { club: "pt Sporting", matches: 22, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Fredy Hinestroza", Country: "COL", Position: "CC", Teams: [{ club: "es Getafe", matches: 40, goals: 2, assists: 3 },], Titles: "", WC: "" },
    { name: "Sammir", Country: "CRO", Position: "CC,DL", Teams: [{ club: "es Getafe", matches: 35, goals: 1, assists: 4 },], Titles: "", WC: "" },
    { name: "Álvaro Arroyo", Country: "ESP", Position: "DF", Teams: [{ club: "es Getafe", matches: 38, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Juan Valera Espín", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Getafe", matches: 95, goals: 3, assists: 2 }, { club: "es Atletico", matches: 82, goals: 3, assists: 3 },], Titles: "", WC: "" },
    { name: "Míchel", Country: "ESP", Position: "CC", Teams: [{ club: "es Getafe", matches: 13, goals: 1, assists: 0 }, { club: "es Deportivo", matches: 8, goals: 0, assists: 1 }, { club: "es Valencia", matches: 38, goals: 0, assists: 2 },], Titles: "", WC: "" },
    { name: "Jonathan López", Country: "ESP", Position: "PO", Teams: [{ club: "es Getafe", matches: 7, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Alex Felip", Country: "ESP", Position: "CC", Teams: [{ club: "es Getafe", matches: 13, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Ivi", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Getafe", matches: 10, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Rafa", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Getafe", matches: 123, goals: 3, assists: 1 },], Titles: "", WC: "" },


    { name: "Villalón", Country: "ESP", Position: "DF", Teams: [{ club: "es Getafe", matches: 0, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Edu Payá", Country: "ESP", Position: "DF", Teams: [{ club: "es Getafe", matches: 0, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Philtzgérald Mbaka", Country: "CGO", Position: "CC", Teams: [{ club: "es Getafe", matches: 0, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Ciprian Marica", Country: "ROU", Position: "DL", Teams: [{ club: "es Getafe", matches: 27, goals: 6, assists: 1 }, { club: "de Stuttgart", matches: 113, goals: 26, assists: 12 },], Titles: "", WC: "" },
    { name: "Míchel", Country: "ESP", Position: "CC", Teams: [{ club: "es Getafe", matches: 54, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Jaime Gavilán", Country: "ESP", Position: "CC", Teams: [{ club: "es Getafe", matches: 189, goals: 10, assists: 27 }, { club: "es Valencia", matches: 21, goals: 0, assists: 2 },], Titles: "", WC: "" },
    { name: "Júlio César", Country: "BRA", Position: "PO", Teams: [{ club: "es Getafe", matches: 5, goals: 0, assists: 0 }, { club: "pt Benfica", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Miku", Country: "VEN", Position: "DL", Teams: [{ club: "es Getafe", matches: 97, goals: 26, assists: 7 }, { club: "es Deportivo", matches: 2, goals: 0, assists: 0 }, { club: "es Valencia", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Alberto Lopo", Country: "ESP", Position: "DF", Teams: [{ club: "es Getafe", matches: 40, goals: 1, assists: 1 }, { club: "es Deportivo", matches: 220, goals: 13, assists: 1 }, { club: "es Espanyol", matches: 185, goals: 8, assists: 2 },], Titles: "", WC: "" },
    { name: "Abdelaziz Barrada", Country: "MAR", Position: "CC", Teams: [{ club: "es Getafe", matches: 64, goals: 8, assists: 8 }, { club: "fr Marseille", matches: 43, goals: 3, assists: 9 },], Titles: "", WC: "" },
    { name: "Federico Fernández", Country: "ARG", Position: "DF", Teams: [{ club: "es Getafe", matches: 14, goals: 1, assists: 1 }, { club: "it Napoli", matches: 57, goals: 2, assists: 1 },], Titles: "", WC: "" },
    { name: "Mané", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Getafe", matches: 105, goals: 3, assists: 3 },], Titles: "", WC: "" },
    { name: "David Abraham", Country: "ARG", Position: "DF", Teams: [{ club: "es Getafe", matches: 9, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Hugo Fraile", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Getafe", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Pedro Ríos", Country: "ESP", Position: "CC", Teams: [{ club: "es Getafe", matches: 74, goals: 12, assists: 6 },], Titles: "", WC: "" },
    { name: "Tsepo Masilela", Country: "RSA", Position: "DF", Teams: [{ club: "es Getafe", matches: 13, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Álex Pérez", Country: "ESP", Position: "DF", Teams: [{ club: "es Getafe", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Derek Boateng", Country: "GHA", Position: "CC", Teams: [{ club: "es Getafe", matches: 64, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Óscar Ustari", Country: "ARG", Position: "PO", Teams: [{ club: "es Getafe", matches: 51, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Juan Ángel Albín", Country: "URU", Position: "CC,DL", Teams: [{ club: "es Getafe", matches: 129, goals: 20, assists: 8 }, { club: "es Espanyol", matches: 13, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Adrián Sardinero", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Getafe", matches: 14, goals: 2, assists: 0 },], Titles: "", WC: "" },
    { name: "Pablo Pintos", Country: "URU", Position: "DF", Teams: [{ club: "es Getafe", matches: 8, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "İbrahim Kaş", Country: "TUR", Position: "DF", Teams: [{ club: "es Getafe", matches: 10, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Fabio Celestini", Country: "SUI", Position: "CC", Teams: [{ club: "es Getafe", matches: 131, goals: 2, assists: 1 }, { club: "fr Marseille", matches: 66, goals: 1, assists: 5 },], Titles: "", WC: "" },
    { name: "Lucas Licht", Country: "ARG", Position: "DF,CC", Teams: [{ club: "es Getafe", matches: 78, goals: 1, assists: 1 },], Titles: "", WC: "" },
    { name: "Eugen Polanski", Country: "POL", Position: "CC", Teams: [{ club: "es Getafe", matches: 26, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Jacobo", Country: "ESP", Position: "PO", Teams: [{ club: "es Getafe", matches: 17, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Pato Abbondanzieri", Country: "ARG", Position: "PO", Teams: [{ club: "es Getafe", matches: 91, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Joffre Guerrón", Country: "ECU", Position: "CC,DL", Teams: [{ club: "es Getafe", matches: 14, goals: 1, assists: 0 },], Titles: "", WC: "" },
    { name: "Vladimir Stojković", Country: "SRB", Position: "PO", Teams: [{ club: "es Getafe", matches: 5, goals: 0, assists: 0 }, { club: "pt Sporting", matches: 11, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Pablo Hernández", Country: "ESP", Position: "CC,DL", Teams: [{ club: "es Getafe", matches: 37, goals: 7, assists: 4 }, { club: "es Valencia", matches: 144, goals: 22, assists: 20 },], Titles: "", WC: "" },
    { name: "David Sousa", Country: "ESP", Position: "CC", Teams: [{ club: "es Getafe", matches: 32, goals: 3, assists: 0 },], Titles: "", WC: "" },
    { name: "Franck Signorino", Country: "FRA", Position: "DF", Teams: [{ club: "es Getafe", matches: 10, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Miguel Pallardó", Country: "ESP", Position: "CC", Teams: [{ club: "es Getafe", matches: 14, goals: 0, assists: 0 }, { club: "es Valencia", matches: 13, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Alberto Ruiz", Country: "ESP", Position: "DL", Teams: [{ club: "es Getafe", matches: 81, goals: 10, assists: 8 },], Titles: "", WC: "" },
    { name: "Javier Paredes", Country: "ESP", Position: "DF", Teams: [{ club: "es Getafe", matches: 40, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Rubén Pulido", Country: "ESP", Position: "DF", Teams: [{ club: "es Getafe", matches: 49, goals: 3, assists: 1 },], Titles: "", WC: "" },
    { name: "Ángel Vivar Dorado", Country: "ESP", Position: "CC", Teams: [{ club: "es Getafe", matches: 150, goals: 18, assists: 8 },], Titles: "", WC: "" },
    { name: "Sergio Pachón", Country: "ESP", Position: "DL", Teams: [{ club: "es Getafe", matches: 88, goals: 20, assists: 4 },], Titles: "", WC: "" },
    { name: "Māris Verpakovskis", Country: "LVA", Position: "CC,DL", Teams: [{ club: "es Getafe", matches: 13, goals: 1, assists: 1 }, { club: "es Celta", matches: 8, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Luis García", Country: "ESP", Position: "PO", Teams: [{ club: "es Getafe", matches: 28, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Mariano Pernía", Country: "ESP", Position: "DF", Teams: [{ club: "es Getafe", matches: 72, goals: 13, assists: 4 }, { club: "es Atletico", matches: 89, goals: 1, assists: 5 },], Titles: "", WC: "" },
    { name: "Diego Rivas", Country: "ESP", Position: "CC", Teams: [{ club: "es Getafe", matches: 115, goals: 3, assists: 4 }, { club: "es Atletico", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Riki", Country: "ESP", Position: "DL", Teams: [{ club: "es Getafe", matches: 61, goals: 11, assists: 6 }, { club: "es Deportivo", matches: 207, goals: 52, assists: 17 },], Titles: "", WC: "" },
    { name: "Aníbal Matellán", Country: "ARG", Position: "DF", Teams: [{ club: "es Getafe", matches: 22, goals: 0, assists: 3 },], Titles: "", WC: "" },
    { name: "David Cubillo", Country: "ESP", Position: "CC", Teams: [{ club: "es Getafe", matches: 49, goals: 2, assists: 1 },], Titles: "", WC: "" },
    { name: "Jajá", Country: "BRA", Position: "DL", Teams: [{ club: "es Getafe", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Gabi", Country: "ESP", Position: "CC", Teams: [{ club: "es Getafe", matches: 32, goals: 2, assists: 2 }, { club: "es Atletico", matches: 380, goals: 9, assists: 40 },], Titles: "", WC: "" },
    { name: "Javier Sánchez Broto", Country: "ESP", Position: "PO", Teams: [{ club: "es Getafe", matches: 20, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "José Manuel Yanguas", Country: "ESP", Position: "DF", Teams: [{ club: "es Getafe", matches: 43, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Sergio Aragoneses", Country: "ESP", Position: "PO", Teams: [{ club: "es Getafe", matches: 32, goals: 0, assists: 0 }, { club: "es Atletico", matches: 14, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Míchel", Country: "ESP", Position: "DL", Teams: [{ club: "es Getafe", matches: 67, goals: 22, assists: 2 },], Titles: "", WC: "" },
    { name: "Sergio Sánchez", Country: "ESP", Position: "PO", Teams: [{ club: "es Getafe", matches: 29, goals: 0, assists: 0 }, { club: "es Espanyol", matches: 6, goals: 0, assists: 0 }, { club: "es Atletico", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Iván Amaya", Country: "ESP", Position: "DF", Teams: [{ club: "es Getafe", matches: 45, goals: 1, assists: 0 }, { club: "es Espanyol", matches: 11, goals: 0, assists: 0 }, { club: "es Atletico", matches: 3, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Asen", Country: "ESP", Position: "DL", Teams: [{ club: "es Getafe", matches: 6, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Martín Vitali", Country: "ARG", Position: "DF,CC", Teams: [{ club: "es Getafe", matches: 2, goals: 0, assists: 0 },], Titles: "", WC: "" },

    { name: "Marc Bernaus", Country: "AND", Position: "DF", Teams: [{ club: "es Getafe", matches: 33, goals: 0, assists: 3 },], Titles: "", WC: "" },
    { name: "Gari Uranga", Country: "ESP", Position: "CC", Teams: [{ club: "es Getafe", matches: 38, goals: 6, assists: 2 },], Titles: "", WC: "" },
    { name: "Javier Baraja", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Getafe", matches: 26, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Miguel Ángel", Country: "ESP", Position: "DL", Teams: [{ club: "es Getafe", matches: 21, goals: 4, assists: 4 },], Titles: "", WC: "" },
    { name: "Luis López Gil", Country: "ESP", Position: "CC", Teams: [{ club: "es Getafe", matches: 30, goals: 7, assists: 3 },], Titles: "", WC: "" },
    { name: "Ángel Pindado", Country: "ESP", Position: "PO", Teams: [{ club: "es Getafe", matches: 32, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Francisco Jusué", Country: "ESP", Position: "DF", Teams: [{ club: "es Getafe", matches: 20, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Txema Alonso", Country: "ESP", Position: "DF,CC", Teams: [{ club: "es Getafe", matches: 15, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Bernard Ferrer", Country: "FRA", Position: "CC", Teams: [{ club: "es Getafe", matches: 9, goals: 0, assists: 0 },], Titles: "", WC: "" },
    { name: "Álvaro Benito", Country: "ESP", Position: "CC", Teams: [{ club: "es Getafe", matches: 6, goals: 0, assists: 1 },], Titles: "", WC: "" },
    { name: "Iñaki Bea Jauregi", Country: "ESP", Position: "DF", Teams: [{ club: "es Getafe", matches: 4, goals: 0, assists: 0 },], Titles: "", WC: "" },


  ];

  const countries = [
    { cname: "ALB", cfullname: "Albania", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/357px-Flag_of_Albania.svg.png" },
    { cname: "ALG", cfullname: "Algeria", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/383px-Flag_of_Algeria.svg.png" },
    { cname: "AND", cfullname: "Andorra", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Andorra.svg/364px-Flag_of_Andorra.svg.png" },
    { cname: "ANG", cfullname: "Angola", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/383px-Flag_of_Angola.svg.png" },
    { cname: "ARG", cfullname: "Argentina", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/383px-Flag_of_Argentina.svg.png" },
    { cname: "ARM", cfullname: "Armenia", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/383px-Flag_of_Armenia.svg.png" },
    { cname: "AUS", cfullname: "Australia", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/383px-Flag_of_Australia_%28converted%29.svg.png" },
    { cname: "AUT", cfullname: "Austria", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/383px-Flag_of_Austria.svg.png" },
    { cname: "BLR", cfullname: "Belarus", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/383px-Flag_of_Belarus.svg.png" },
    { cname: "BEL", cfullname: "Belgium", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/294px-Flag_of_Belgium.svg.png" },
    { cname: "BEN", cfullname: "Benin", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Benin.svg/383px-Flag_of_Benin.svg.png" },
    { cname: "VER", cfullname: "Bermuda", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bermuda.svg/383px-Flag_of_Bermuda.svg.png" },
    { cname: "BOL", cfullname: "Bolivia", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Bolivia.svg/374px-Flag_of_Bolivia.svg.png" },
    { cname: "BOE", cfullname: "Bonaire", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Flag_of_Bonaire.svg/383px-Flag_of_Bonaire.svg.png" },
    { cname: "BIH", cfullname: "Bosnia and Herzegovina", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/383px-Flag_of_Bosnia_and_Herzegovina.svg.png" },
    { cname: "BOT", cfullname: "Botswana", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_Botswana.svg/383px-Flag_of_Botswana.svg.png" },
    { cname: "BRA", cfullname: "Brazil", Flag: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/364px-Flag_of_Brazil.svg.png" },
    { cname: "VGB", cfullname: "British Virgin Islands", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_the_British_Virgin_Islands.svg/383px-Flag_of_the_British_Virgin_Islands.svg.png" },
    { cname: "BRU", cfullname: "Brunei Darussalam", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Brunei.svg/383px-Flag_of_Brunei.svg.png" },
    { cname: "BUL", cfullname: "Bulgaria", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/383px-Flag_of_Bulgaria.svg.png" },
    { cname: "BFA", cfullname: "Burkina Faso", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Burkina_Faso.svg/383px-Flag_of_Burkina_Faso.svg.png" },
    { cname: "BDI", cfullname: "Burundi", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Flag_of_Burundi.svg/383px-Flag_of_Burundi.svg.png" },
    { cname: "CAM", cfullname: "Cambodia", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/383px-Flag_of_Cambodia.svg.png" },
    { cname: "CMR", cfullname: "Cameroon", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/383px-Flag_of_Cameroon.svg.png" },
    { cname: "CAN", cfullname: "Canada", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/383px-Flag_of_Canada_%28Pantone%29.svg.png" },
    { cname: "CPV", cfullname: "Cape Verde", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Cape_Verde.svg/383px-Flag_of_Cape_Verde.svg.png" },
    { cname: "CAY", cfullname: "Cayman Islands", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_the_Cayman_Islands.svg/383px-Flag_of_the_Cayman_Islands.svg.png" },
    { cname: "CTA", cfullname: "Central African Republic", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Central_African_Republic.svg/383px-Flag_of_the_Central_African_Republic.svg.png" },
    { cname: "CHA", cfullname: "Chad", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Flag_of_Chad.svg/383px-Flag_of_Chad.svg.png" },
    { cname: "CHI", cfullname: "Chile", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/383px-Flag_of_Chile.svg.png" },
    { cname: "CHN", cfullname: "China PR", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/383px-Flag_of_the_People%27s_Republic_of_China.svg.png" },
    { cname: "TPE", cfullname: "Chinese Taipei", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Flag_of_the_Republic_of_China.svg/375px-Flag_of_the_Republic_of_China.svg.png" },
    { cname: "COL", cfullname: "Colombia", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/383px-Flag_of_Colombia.svg.png" },
    { cname: "COM", cfullname: "Comoros", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Flag_of_the_Comoros.svg/383px-Flag_of_the_Comoros.svg.png" },
    { cname: "CGO", cfullname: "Congo", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_the_Republic_of_the_Congo.svg/383px-Flag_of_the_Republic_of_the_Congo.svg.png" },
    { cname: "COD", cfullname: "Congo DR", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg/340px-Flag_of_the_Democratic_Republic_of_the_Congo.svg.png" },
    { cname: "COK", cfullname: "Cook Islands", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Flag_of_the_Cook_Islands.svg/383px-Flag_of_the_Cook_Islands.svg.png" },
    { cname: "CRC", cfullname: "Costa Rica", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Costa_Rica.svg/383px-Flag_of_Costa_Rica.svg.png" },
    { cname: "CIV", cfullname: "Côte d'Ivoire", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg/300px-Flag_of_C%C3%B4te_d%27Ivoire.svg.png" },
    { cname: "CRO", cfullname: "Croatia", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/383px-Flag_of_Croatia.svg.png" },
    { cname: "CUB", cfullname: "Cuba", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/383px-Flag_of_Cuba.svg.png" },
    { cname: "CUW", cfullname: "Curaçao", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Flag_of_Cura%C3%A7ao.svg/383px-Flag_of_Cura%C3%A7ao.svg.png" },
    { cname: "CYP", cfullname: "Cyprus", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Cyprus.svg/383px-Flag_of_Cyprus.svg.png" },
    { cname: "CZE", cfullname: "Czech Republic", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/383px-Flag_of_the_Czech_Republic.svg.png" },
    { cname: "TCH", cfullname: "Czechoslovakia", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/383px-Flag_of_the_Czech_Republic.svg.png" },
    { cname: "DEN", cfullname: "Denmark", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/338px-Flag_of_Denmark.svg.png" },
    { cname: "DJI", cfullname: "Djibouti", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_Djibouti.svg/383px-Flag_of_Djibouti.svg.png" },
    { cname: "DMA", cfullname: "Dominica", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Flag_of_Dominica.svg/383px-Flag_of_Dominica.svg.png" },
    { cname: "DOM", cfullname: "Dominican Republic", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_the_Dominican_Republic.svg/383px-Flag_of_the_Dominican_Republic.svg.png" },
    { cname: "ECU", cfullname: "Ecuador", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/383px-Flag_of_Ecuador.svg.png" },
    { cname: "EGY", cfullname: "Egypt", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/383px-Flag_of_Egypt.svg.png" },
    { cname: "SLV", cfullname: "El Salvador", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_El_Salvador.svg/383px-Flag_of_El_Salvador.svg.png" },
    { cname: "ENG", cfullname: "England", Flag: "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/383px-Flag_of_England.svg.png" },
    { cname: "EQG", cfullname: "Equatorial Guinea", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Equatorial_Guinea.svg/383px-Flag_of_Equatorial_Guinea.svg.png" },
    { cname: "ERI", cfullname: "Eritrea", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Flag_of_Eritrea.svg/383px-Flag_of_Eritrea.svg.png" },
    { cname: "EST", cfullname: "Estonia", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/383px-Flag_of_Estonia.svg.png" },
    { cname: "SWZ", cfullname: "Eswatini", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Flag_of_Eswatini.svg/383px-Flag_of_Eswatini.svg.png" },
    { cname: "ETH", cfullname: "Ethiopia", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Ethiopia.svg/383px-Flag_of_Ethiopia.svg.png" },
    { cname: "FRO", cfullname: "Faroe Islands", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flag_of_the_Faroe_Islands.svg/351px-Flag_of_the_Faroe_Islands.svg.png" },
    { cname: "FIJ", cfullname: "Fiji", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Fiji.svg/383px-Flag_of_Fiji.svg.png" },
    { cname: "FIN", cfullname: "Finland", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/383px-Flag_of_Finland.svg.png" },
    { cname: "FRA", cfullname: "France", Flag: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/383px-Flag_of_France.svg.png" },
    { cname: "GUF", cfullname: "French Guiana", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Flag_of_French_Guiana.svg/375px-Flag_of_French_Guiana.svg.png" },
    { cname: "GAB", cfullname: "Gabon", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Flag_of_Gabon.svg/340px-Flag_of_Gabon.svg.png" },
    { cname: "GAM", cfullname: "Gambia", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_The_Gambia.svg/300px-Flag_of_The_Gambia.svg.png" },
    { cname: "GEO", cfullname: "Georgia", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/383px-Flag_of_Georgia.svg.png" },
    { cname: "GER", cfullname: "Germany", Flag: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/383px-Flag_of_Germany.svg.png" },
    { cname: "GDR", cfullname: "Germany DR", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Flag_of_the_German_Democratic_Republic.svg/188px-Flag_of_the_German_Democratic_Republic.svg.png" },
    { cname: "GHA", cfullname: "Ghana", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Ghana.svg/383px-Flag_of_Ghana.svg.png" },
    { cname: "GIB", cfullname: "Gibraltar", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Flag_of_Gibraltar.svg/383px-Flag_of_Gibraltar.svg.png" },
    { cname: "GBR", cfullname: "Great Britain", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/383px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png" },
    { cname: "GRE", cfullname: "Greece", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/383px-Flag_of_Greece.svg.png" },
    { cname: "GRN", cfullname: "Grenada", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Grenada.svg/383px-Flag_of_Grenada.svg.png" },
    { cname: "GLP", cfullname: "Guadeloupe", Flag: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/375px-Flag_of_France.svg.png" },
    { cname: "GUM", cfullname: "Guam", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Flag_of_Guam.svg/383px-Flag_of_Guam.svg.png" },
    { cname: "GUA", cfullname: "Guatemala", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Guatemala.svg/383px-Flag_of_Guatemala.svg.png" },
    { cname: "GUI", cfullname: "Guinea", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Flag_of_Guinea.svg/383px-Flag_of_Guinea.svg.png" },
    { cname: "GNB", cfullname: "Guinea-Bissau", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Guinea-Bissau.svg/383px-Flag_of_Guinea-Bissau.svg.png" },
    { cname: "GUY", cfullname: "Guyana", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_Guyana.svg/383px-Flag_of_Guyana.svg.png" },
    { cname: "HAI", cfullname: "Haiti", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Haiti.svg/383px-Flag_of_Haiti.svg.png" },
    { cname: "HON", cfullname: "Honduras", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Flag_of_Honduras.svg/383px-Flag_of_Honduras.svg.png" },
    { cname: "HKG", cfullname: "Hong Kong", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Hong_Kong.svg/300px-Flag_of_Hong_Kong.svg.png" },
    { cname: "HUN", cfullname: "Hungary", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/383px-Flag_of_Hungary.svg.png" },
    { cname: "ISL", cfullname: "Iceland", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/354px-Flag_of_Iceland.svg.png" },
    { cname: "IND", cfullname: "India", Flag: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/383px-Flag_of_India.svg.png" },
    { cname: "IDN", cfullname: "Indonesia", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/383px-Flag_of_Indonesia.svg.png" },
    { cname: "IRN", cfullname: "IR Iran", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/383px-Flag_of_Iran.svg.png" },
    { cname: "IRQ", cfullname: "Iraq", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/383px-Flag_of_Iraq.svg.png" },
    { cname: "ISR", cfullname: "Israel", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/351px-Flag_of_Israel.svg.png" },
    { cname: "ITA", cfullname: "Italy", Flag: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/383px-Flag_of_Italy.svg.png" },
    { cname: "JAM", cfullname: "Jamaica", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Jamaica.svg/383px-Flag_of_Jamaica.svg.png" },
    { cname: "JPN", cfullname: "Japan", Flag: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/383px-Flag_of_Japan.svg.png" },
    { cname: "JOR", cfullname: "Jordan", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/383px-Flag_of_Jordan.svg.png" },
    { cname: "KAZ", cfullname: "Kazakhstan", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/383px-Flag_of_Kazakhstan.svg.png" },
    { cname: "KEN", cfullname: "Kenya", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kenya.svg/383px-Flag_of_Kenya.svg.png" },
    { cname: "PRK", cfullname: "Korea DPR", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_North_Korea.svg/383px-Flag_of_North_Korea.svg.png" },
    { cname: "KOR", cfullname: "Korea Republic", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/383px-Flag_of_South_Korea.svg.png" },
    { cname: "KVX", cfullname: "Kosovo", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Flag_of_Kosovo.svg/357px-Flag_of_Kosovo.svg.png" },
    { cname: "KUW", cfullname: "Kuwait", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Laos.svg/383px-Flag_of_Laos.svg.png" },
    { cname: "KGZ", cfullname: "Kyrgyz Republic", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/383px-Flag_of_Kyrgyzstan.svg.png" },
    { cname: "LAO", cfullname: "Laos", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Laos.svg/383px-Flag_of_Laos.svg.png" },
    { cname: "LVA", cfullname: "Latvia", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/383px-Flag_of_Latvia.svg.png" },
    { cname: "LIB", cfullname: "Lebanon", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Lebanon.svg/383px-Flag_of_Lebanon.svg.png" },
    { cname: "LES", cfullname: "Lesotho", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Flag_of_Lesotho.svg/383px-Flag_of_Lesotho.svg.png" },
    { cname: "LBR", cfullname: "Liberia", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Flag_of_Liberia.svg/383px-Flag_of_Liberia.svg.png" },
    { cname: "LBY", cfullname: "Libya", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Libya.svg/383px-Flag_of_Libya.svg.png" },
    { cname: "LIE", cfullname: "Liechtenstein", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Flag_of_Liechtenstein.svg/383px-Flag_of_Liechtenstein.svg.png" },
    { cname: "LTU", cfullname: "Lithuania", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Lithuania.svg/383px-Flag_of_Lithuania.svg.png" },
    { cname: "LUX", cfullname: "Luxembourg", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Luxembourg.svg/383px-Flag_of_Luxembourg.svg.png" },
    { cname: "MAC", cfullname: "Macau", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Flag_of_Macau.svg/383px-Flag_of_Macau.svg.png" },
    { cname: "MAD", cfullname: "Madagascar", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Madagascar.svg/383px-Flag_of_Madagascar.svg.png" },
    { cname: "MWI", cfullname: "Malawi", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Flag_of_Malawi.svg/383px-Flag_of_Malawi.svg.png" },
    { cname: "MAS", cfullname: "Malaysia", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/383px-Flag_of_Malaysia.svg.png" },
    { cname: "MDV", cfullname: "Maldives", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Maldives.svg/383px-Flag_of_Maldives.svg.png" },
    { cname: "MLI", cfullname: "Mali", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Mali.svg/383px-Flag_of_Mali.svg.png" },
    { cname: "MLT", cfullname: "Malta", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Malta.svg/383px-Flag_of_Malta.svg.png" },
    { cname: "MTQ", cfullname: "Martinique", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag-of-Martinique.svg/330px-Flag-of-Martinique.svg.png" },
    { cname: "MTN", cfullname: "Mauritania", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Flag_of_Mauritania.svg/383px-Flag_of_Mauritania.svg.png" },
    { cname: "MRI", cfullname: "Mauritius", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Mauritius.svg/383px-Flag_of_Mauritius.svg.png" },
    { cname: "MEX", cfullname: "Mexico", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/383px-Flag_of_Mexico.svg.png" },
    { cname: "MDA", cfullname: "Moldova", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Moldova.svg/383px-Flag_of_Moldova.svg.png" },
    { cname: "MNG", cfullname: "Mongolia", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Mongolia.svg/383px-Flag_of_Mongolia.svg.png" },
    { cname: "MNE", cfullname: "Montenegro", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Montenegro.svg/383px-Flag_of_Montenegro.svg.png" },
    { cname: "MSR", cfullname: "Montserrat", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Montserrat.svg/383px-Flag_of_Montserrat.svg.png" },
    { cname: "MAR", cfullname: "Morocco", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/383px-Flag_of_Morocco.svg.png" },
    { cname: "MOZ", cfullname: "Mozambique", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Mozambique.svg/383px-Flag_of_Mozambique.svg.png" },
    { cname: "MYA", cfullname: "Myanmar", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Myanmar.svg/383px-Flag_of_Myanmar.svg.png" },
    { cname: "NAM", cfullname: "Namibia", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Namibia.svg/383px-Flag_of_Namibia.svg.png" },
    { cname: "NEP", cfullname: "Nepal", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/209px-Flag_of_Nepal.svg.png" },
    { cname: "NED", cfullname: "Netherlands", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/383px-Flag_of_the_Netherlands.svg.png" },
    { cname: "NCL", cfullname: "New Caledonia", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flags_of_New_Caledonia.svg/383px-Flags_of_New_Caledonia.svg.png" },
    { cname: "NZL", cfullname: "New Zealand", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/383px-Flag_of_New_Zealand.svg.png" },
    { cname: "NCA", cfullname: "Nicaragua", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Nicaragua.svg/383px-Flag_of_Nicaragua.svg.png" },
    { cname: "NIG", cfullname: "Niger", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Flag_of_Niger.svg/298px-Flag_of_Niger.svg.png" },
    { cname: "NGA", cfullname: "Nigeria", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/383px-Flag_of_Nigeria.svg.png" },
    { cname: "MKD", cfullname: "North Macedonia", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_North_Macedonia.svg/383px-Flag_of_North_Macedonia.svg.png" },
    { cname: "NIR", cfullname: "Northern Ireland", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Flag_of_Northern_Ireland_%281953%E2%80%931972%29.svg/300px-Flag_of_Northern_Ireland_%281953%E2%80%931972%29.svg.png" },
    { cname: "NOR", cfullname: "Norway", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/351px-Flag_of_Norway.svg.png" },
    { cname: "OMA", cfullname: "Oman", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Oman.svg/383px-Flag_of_Oman.svg.png" },
    { cname: "PAK", cfullname: "Pakistan", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/383px-Flag_of_Pakistan.svg.png" },
    { cname: "PLE", cfullname: "Palestine", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Palestine.svg/383px-Flag_of_Palestine.svg.png" },
    { cname: "PAN", cfullname: "Panama", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/383px-Flag_of_Panama.svg.png" },
    { cname: "PNG", cfullname: "Papua New Guinea", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Flag_of_Papua_New_Guinea.svg/340px-Flag_of_Papua_New_Guinea.svg.png" },
    { cname: "PAR", cfullname: "Paraguay", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/383px-Flag_of_Paraguay.svg.png" },
    { cname: "PER", cfullname: "Peru", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/383px-Flag_of_Peru.svg.png" },
    { cname: "PHI", cfullname: "Philippines", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/383px-Flag_of_the_Philippines.svg.png" },
    { cname: "POL", cfullname: "Poland", Flag: "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/383px-Flag_of_Poland.svg.png" },
    { cname: "POR", cfullname: "Portugal", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/383px-Flag_of_Portugal.svg.png" },
    { cname: "PUR", cfullname: "Puerto Rico", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Flag_of_Puerto_Rico.svg/383px-Flag_of_Puerto_Rico.svg.png" },
    { cname: "QAT", cfullname: "Qatar", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/383px-Flag_of_Qatar.svg.png" },
    { cname: "IRL", cfullname: "Republic of Ireland", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/383px-Flag_of_Ireland.svg.png" },
    { cname: "REU", cfullname: "Réunion", Flag: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/300px-Flag_of_France.svg.png" },
    { cname: "ROU", cfullname: "Romania", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/383px-Flag_of_Romania.svg.png" },
    { cname: "RUS", cfullname: "Russia", Flag: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/383px-Flag_of_Russia.svg.png" },
    { cname: "RWA", cfullname: "Rwanda", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Rwanda.svg/383px-Flag_of_Rwanda.svg.png" },
    { cname: "SMN", cfullname: "Saint Martin", Flag: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/300px-Flag_of_France.svg.png" },
    { cname: "SAM", cfullname: "Samoa", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Samoa.svg/375px-Flag_of_Samoa.svg.png" },
    { cname: "SMR", cfullname: "San Marino", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Flag_of_San_Marino.svg/340px-Flag_of_San_Marino.svg.png" },
    { cname: "STP", cfullname: "São Tomé and Príncipe", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe.svg/383px-Flag_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe.svg.png" },
    { cname: "KSA", cfullname: "Saudi Arabia", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/383px-Flag_of_Saudi_Arabia.svg.png" },
    { cname: "SCO", cfullname: "Scotland", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/383px-Flag_of_Scotland.svg.png" },
    { cname: "SEN", cfullname: "Senegal", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/383px-Flag_of_Senegal.svg.png" },
    { cname: "SRB", cfullname: "Serbia", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/383px-Flag_of_Serbia.svg.png" },
    { cname: "SCG", cfullname: "Serbia and Montenegro", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_Serbia_and_Montenegro_%281992%E2%80%932006%29.svg/383px-Flag_of_Serbia_and_Montenegro_%281992%E2%80%932006%29.svg.png" },
    { cname: "SEY", cfullname: "Seychelles", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Seychelles.svg/375px-Flag_of_Seychelles.svg.png" },
    { cname: "SLE", cfullname: "Sierra Leone", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Sierra_Leone.svg/383px-Flag_of_Sierra_Leone.svg.png" },
    { cname: "SIN", cfullname: "Singapore", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/383px-Flag_of_Singapore.svg.png" },
    { cname: "SMA", cfullname: "Sint Maarten", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Sint_Maarten.svg/383px-Flag_of_Sint_Maarten.svg.png" },
    { cname: "SVK", cfullname: "Slovakia", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/383px-Flag_of_Slovakia.svg.png" },
    { cname: "SVN", cfullname: "Slovenia", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Slovenia.svg/383px-Flag_of_Slovenia.svg.png" },
    { cname: "SOL", cfullname: "Solomon Islands", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Flag_of_the_Solomon_Islands.svg/375px-Flag_of_the_Solomon_Islands.svg.png" },
    { cname: "SOM", cfullname: "Somalia", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Somalia.svg/383px-Flag_of_Somalia.svg.png" },
    { cname: "RSA", cfullname: "South Africa", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/383px-Flag_of_South_Africa.svg.png" },
    { cname: "SSD", cfullname: "South Sudan", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Flag_of_South_Sudan.svg/383px-Flag_of_South_Sudan.svg.png" },
    { cname: "URS", cfullname: "Soviet Union", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_Soviet_Union.svg/383px-Flag_of_the_Soviet_Union.svg.png" },
    { cname: "ESP", cfullname: "Spain", Flag: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/300px-Flag_of_Spain.svg.png" },
    { cname: "SRI", cfullname: "Sri Lanka", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Sri_Lanka.svg/383px-Flag_of_Sri_Lanka.svg.png" },
    { cname: "SKN", cfullname: "St. Kitts and Nevis", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg/383px-Flag_of_Saint_Kitts_and_Nevis.svg.png" },
    { cname: "LCA", cfullname: "St. Lucia", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Saint_Lucia.svg/383px-Flag_of_Saint_Lucia.svg.png" },
    { cname: "VIN", cfullname: "St. Vincent and the Grenadines", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg/383px-Flag_of_Saint_Vincent_and_the_Grenadines.svg.png" },
    { cname: "SDN", cfullname: "Sudan", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Sudan.svg/383px-Flag_of_Sudan.svg.png" },
    { cname: "SUR", cfullname: "Suriname", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Flag_of_Suriname.svg/383px-Flag_of_Suriname.svg.png" },
    { cname: "SWE", cfullname: "Sweden", Flag: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/383px-Flag_of_Sweden.svg.png" },
    { cname: "SUI", cfullname: "Switzerland", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Switzerland_%28Pantone%29.svg/255px-Flag_of_Switzerland_%28Pantone%29.svg.png" },
    { cname: "SYR", cfullname: "Syria", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Saint_Lucia.svg/383px-Flag_of_Saint_Lucia.svg.png" },
    { cname: "TAH", cfullname: "Tahiti", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Flag_of_French_Polynesia.svg/375px-Flag_of_French_Polynesia.svg.png" },
    { cname: "TJK", cfullname: "Tajikistan", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Tajikistan.svg/383px-Flag_of_Tajikistan.svg.png" },
    { cname: "TAN", cfullname: "Tanzania", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tanzania.svg/383px-Flag_of_Tanzania.svg.png" },
    { cname: "THA", cfullname: "Thailand", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/383px-Flag_of_Thailand.svg.png" },
    { cname: "TLS", cfullname: "Timor-Leste", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flag_of_East_Timor.svg/383px-Flag_of_East_Timor.svg.png" },
    { cname: "TOG", cfullname: "Togo", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Flag_of_Togo.svg/383px-Flag_of_Togo.svg.png" },
    { cname: "TGA", cfullname: "Tonga", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Tonga.svg/383px-Flag_of_Tonga.svg.png" },
    { cname: "TRI", cfullname: "Trinidad and Tobago", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Trinidad_and_Tobago.svg/383px-Flag_of_Trinidad_and_Tobago.svg.png" },
    { cname: "TUN", cfullname: "Tunisia", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/338px-Flag_of_Tunisia.svg.png" },
    { cname: "TUR", cfullname: "Türkiye", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/330px-Flag_of_Turkey.svg.png" },
    { cname: "TKM", cfullname: "Turkmenistan", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Turkmenistan.svg/383px-Flag_of_Turkmenistan.svg.png" },
    { cname: "TCA", cfullname: "Turks and Caicos Islands", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_the_Turks_and_Caicos_Islands.svg/383px-Flag_of_the_Turks_and_Caicos_Islands.svg.png" },
    { cname: "UGA", cfullname: "Uganda", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Flag_of_Uganda.svg/383px-Flag_of_Uganda.svg.png" },
    { cname: "UKR", cfullname: "Ukraine", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/383px-Flag_of_Ukraine.svg.png" },
    { cname: "UAE", cfullname: "United Arab Emirates", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/383px-Flag_of_the_United_Arab_Emirates.svg.png" },
    { cname: "USA", cfullname: "United States", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/383px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" },
    { cname: "URU", cfullname: "Uruguay", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/383px-Flag_of_Uruguay.svg.png" },
    { cname: "VIR", cfullname: "US Virgin Islands", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Flag_of_the_United_States_Virgin_Islands.svg/383px-Flag_of_the_United_States_Virgin_Islands.svg.png" },
    { cname: "UZB", cfullname: "Uzbekistan", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/383px-Flag_of_Uzbekistan.svg.png" },
    { cname: "VAN", cfullname: "Vanuatu", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Vanuatu.svg/375px-Flag_of_Vanuatu.svg.png" },
    { cname: "VEN", cfullname: "Venezuela", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/383px-Flag_of_Venezuela.svg.png" },
    { cname: "VIE", cfullname: "Vietnam", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/383px-Flag_of_Vietnam.svg.png" },
    { cname: "WAL", cfullname: "Wales", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Flag_of_Wales.svg/383px-Flag_of_Wales.svg.png" },
    { cname: "YEM", cfullname: "Yemen", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Yemen.svg/383px-Flag_of_Yemen.svg.png" },
    { cname: "YUG", cfullname: "Yugoslavia", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Flag_of_Yugoslavia_%281946-1992%29.svg/383px-Flag_of_Yugoslavia_%281946-1992%29.svg.png" },
    { cname: "ZAM", cfullname: "Zambia", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Zambia.svg/383px-Flag_of_Zambia.svg.png" },
    { cname: "ZAN", cfullname: "Zanzibar", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Zanzibar.svg/383px-Flag_of_Zanzibar.svg.png" },
    { cname: "ZIM", cfullname: "Zimbabwe", Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Flag_of_Zimbabwe.svg/383px-Flag_of_Zimbabwe.svg.png" },

  ]


  const teamslog = [
    { tname: "Real Madrid", Logo: "https://upload.wikimedia.org/wikipedia/commons/7/70/RealMadrid.png" },
    { tname: "FC Barcelona", Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/300px-FC_Barcelona_%28crest%29.svg.png" },
    { tname: "Villarreal", Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Villarreal_CF_logo-en.svg/255px-Villarreal_CF_logo-en.svg.png" },
    { tname: "Sevilla", Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Sevilla_FC_logo.svg/233px-Sevilla_FC_logo.svg.png" },
    { tname: "Valencia", Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Valenciacf.svg/263px-Valenciacf.svg.png" },
    { tname: "Atletico Madrid", Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Atletico_Madrid_2017_logo.svg/234px-Atletico_Madrid_2017_logo.svg.png" },
    { tname: "Getafe", Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Getafe_logo.svg/270px-Getafe_logo.svg.png" },

    { tname: "Real Sociedad", Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Real_Sociedad_logo.svg/263px-Real_Sociedad_logo.svg.png" },
    { tname: "Celta", Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/RC_Celta_de_Vigo_logo.svg/195px-RC_Celta_de_Vigo_logo.svg.png" },
    { tname: "Deportivo", Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/RC_Deportivo_La_Coru%C3%B1a_logo.svg/255px-RC_Deportivo_La_Coru%C3%B1a_logo.svg.png" },

    { tname: "Juventus", Logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Juventus_FC_2017_icon_%28black%29.svg/152px-Juventus_FC_2017_icon_%28black%29.svg.png" },
    { tname: "Milan", Logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/153px-Logo_of_AC_Milan.svg.png" },
    { tname: "Inter", Logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/285px-FC_Internazionale_Milano_2021.svg.png" },
    { tname: "Napoli", Logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SSC_Napoli_%28Gradient%29.svg/240px-SSC_Napoli_%28Gradient%29.svg.png" },
    { tname: "Roma", Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/AS_Roma_logo_%282017%29.svg/240px-AS_Roma_logo_%282017%29.svg.png" },
    { tname: "Paris S-G", Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/285px-Paris_Saint-Germain_F.C..svg.png" },
    { tname: "Monaco", Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/LogoASMonacoFC2021.svg/188px-LogoASMonacoFC2021.svg.png" },
    { tname: "Liverpool", Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/270px-Liverpool_FC.svg.png" },
    { tname: "Arsenal", Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/270px-Arsenal_FC.svg.png" },
    { tname: "Chelsea", Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/285px-Chelsea_FC.svg.png" },
    { tname: "Man City", Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/285px-Manchester_City_FC_badge.svg.png" },
    { tname: "Tottenham", Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Tottenham_Hotspur.svg/1200px-Tottenham_Hotspur.svg.png" },
    { tname: "Man Utd", Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/285px-Manchester_United_FC_crest.svg.png" },
    { tname: "Bayern Munich", Logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/240px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png" },
    { tname: "Borussia Dortmund", Logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/768px-Borussia_Dortmund_logo.svg.png" },
    { tname: "Porto", Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/FC_Porto.svg/255px-FC_Porto.svg.png" },
    { tname: "Benfica", Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/SL_Benfica_logo.svg/315px-SL_Benfica_logo.svg.png" },
    { tname: "Lazio", Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/S.S._Lazio_badge.svg/330px-S.S._Lazio_badge.svg.png" }


  ];

  const teams = [
    "Real Madrid", "FC Barcelona", "Villarreal", "Sevilla", "Valencia", "Atletico Madrid",
    //"Real Sociedad",
    "Getafe", "Celta", "Deportivo",

    "Milan", "Inter", "Roma", "Juventus", "Napoli",
    //"Paris S-G",
    "Liverpool", "Arsenal", "Chelsea", "Man City", "Tottenham", "Man Utd",
    //"Bayern Munich", "Borussia Dortmund",
    //"Porto", "Benfica",
  ];


  const countrypossible = ["HUN", "SVK", "AUS", "SVN", "UKR", "MLI", "BIH", "AUT", "JPN", "RUS", "PAR", "CHI", "MEX", "CZE", "ALG", "WAL", "POL", "SCO", "SWE", "GHA", "ROU", "NOR", "GRE", "MAR", "SUI", "USA", "IRL", "DEN", "TUR", "CMR", "COL", "NGA", "CIV", "SEN", "CRO", "BEL", "SRB", "URU", "NED", "ARG", "GER", "POR", "BRA", "FRA", "ENG", "ITA", "ESP",
  ]

  const WCpossible = ["Played WC 2022", "Played WC 2018", "Played WC 2014", "Played WC 2010", "Played WC 2006", "Played WC 2002"]
  const Wonpossible = ["WC01", "WC02"]

  const Positionpossible = ["PO", "DF", "CC", "DL"]



  function createGrid() {
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


      } else if (puzzle1[0].pcolumn[col - 1].includes("WC01")) {
        cell.textContent = ' Won World Cup ';
      } else if (puzzle1[0].pcolumn[col - 1].includes("WC02")) {
        cell.textContent = ' World Cup 2nd place';

      }

      else if (puzzle1[0].pcolumn[col - 1].length === 2) {
        cell.textContent = puzzle1[0].pcolumn[col - 1];

      }


      else if (puzzle1[0].pcolumn[col - 1].length === 3) {
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


      } else if (puzzle1[0].prow[row - 1].includes("WC01")) {

        cell.textContent = ' Won World Cup ';


      }
      else if (puzzle1[0].prow[row - 1].includes("WC02")) {

        cell.textContent = ' World Cup 2nd place ';


      }

      else if (puzzle1[0].prow[row - 1].length === 2) {
        if (cell.textContent = puzzle1[0].prow[row - 1] === "PO") {
          cell.textContent = "Position: Goalkeeper"
        } else if (cell.textContent = puzzle1[0].prow[row - 1] === "DF") {
          cell.textContent = "Position: Defense"
        }

        else if (cell.textContent = puzzle1[0].prow[row - 1] === "CC") {
          cell.textContent = "Position: Midfielder"
        }
        else if (cell.textContent = puzzle1[0].prow[row - 1] === "DL") {
          cell.textContent = "Position: Forward"
        }
        ;

      }

      else if (puzzle1[0].prow[row - 1].length === 3) {
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
    const itemsWithBothTeams = chequeo(condit)

    const modal2 = document.getElementById('modal2');
    const modal2Content = document.getElementById("nameElement");

    // Clear previous content
    modal2Content.innerHTML = '';
    let playerCount = 0;
    if (playerCount < 15) {
      // Create and append elements for each name
      itemsWithBothTeams.forEach(item => {
        const lio = document.createElement("li");

        const flagImg = `<img src="${countries.find(country => country.cname === item.Country).Flag}" alt="Flag2" style="width: 20px; height: auto; margin-right: 5px;">`;


        lio.innerHTML = `${flagImg} ${item.name} [${item.Position}]`;

        playerCount++;
        lio.addEventListener('click', function () {
          // Close modal when clicking on list item
          modal2.style.display = 'none';
        });
        modal2Content.appendChild(lio);
      });
    }

    else {
      return; // Exit the loop if 15 players have been processed
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

  // Function to create grid cells

  // Function to populate the name list
  function populateNameList(filter, cell) {
    const nameList = document.getElementById("nameList");
    nameList.innerHTML = "";

    let count = 0; // Counter for tracking the number of names added

    names.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
      .forEach(item => {
        if (count < 5) { // Limit to three names
          const li = document.createElement("li");
          const flagImg = `<img src="${countries.find(country => country.cname === item.Country).Flag}" alt="Flag of Germany" style="width: 20px; height: auto; margin-right: 5px;">`;


          li.innerHTML = `${flagImg} ${item.name} [${item.Position}]`;



          li.addEventListener('click', () => {
            // When a suggestion is clicked, populate the input field with the clicked name
            document.getElementById('textInput').value = item.name;
            // Clear the suggestion list
            nameList.innerHTML = "";

            if ((item.Teams.some(team => team.club.includes(puzzle1[0].prow[cell.dataset.row - 1])) || item.Position.includes(puzzle1[0].prow[cell.dataset.row - 1]) || item.Country.includes(puzzle1[0].prow[cell.dataset.row - 1]) || item.Titles.includes(puzzle1[0].prow[cell.dataset.row - 1]) || item.WC.includes(puzzle1[0].prow[cell.dataset.row - 1].substring(puzzle1[0].prow[cell.dataset.row - 1].length - 4)))

              && (item.Teams.some(team => team.club.includes(puzzle1[0].pcolumn[cell.dataset.col - 1])) || item.Position.includes(puzzle1[0].pcolumn[cell.dataset.col - 1]) || item.Country.includes(puzzle1[0].pcolumn[cell.dataset.col - 1]) || item.Titles.includes(puzzle1[0].pcolumn[cell.dataset.col - 1]) || item.WC.includes(puzzle1[0].pcolumn[cell.dataset.col - 1].substring(puzzle1[0].pcolumn[cell.dataset.col - 1].length - 4)))) {
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
    document.getElementById("textInput").addEventListener("input", function () {
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
    textInput.addEventListener('keydown', function (event) {

      if (event.key === 'Escape') {
        closeModal();
      }

      window.addEventListener('click', function (event) {
        if (event.target === modal) {
          closeModal();
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

    if (iterations >= 5) {
      console.log("Maximum iterations reached");
      break; // Exit the loop if maximum iterations reached
    }

  } while (Math.min(...totality) < 3);


  // var puzzle1 = [{ prow: ["es FC Barcelona", "es Atletico Madrid", "eng Man Utd"], pcolumn: ["de Bayern Munich", "Played WC 2022", "Played WC 2018"] },];


  function analyzeCondition(conditn) {
    if (conditn.length === 3) {
      return "Country";
    } else if (conditn.includes("Played WC")) {
      return "WC";
    } else if (conditn.includes("WC") && conditn.length === 4) {
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

    console.log(condit)
    console.log(x, y)
    if (x.includes("Teams") && !y.includes("Teams")) {
      console.log("Team + Country")
      checkd = names.filter(player =>
        player.Teams.some(team => team.club.includes(condit[0]))
        &&
        player[y].includes(condit[1])
      );
      console.log(checkd)
    }
    else if (y.includes("Teams") && !x.includes("Teams")) {
      checkd = names.filter(player =>
        player.Teams.some(team => team.club.includes(condit[1]))
        &&
        player[x].includes(condit[0])

      );


    }
    else if (x.includes("Teams") && y.includes("Teams")) {
      checkd = names.filter(player =>
        player.Teams.some(team => team.club.includes(condit[0])) && player.Teams.some(team => team.club.includes(condit[1]))


      );
    }

    else {
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
    var CONDITIONS = ["teams", "countries", "Position"];
    var CONDITIONS2 = ["teams", "countries"];

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
    var maxIterations = 5; // Maximum number of iterations
    var iterationCount = 0; // Initialize iteration counter

    do {
      result = rpuzzle.map(function (item) {
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
    },];
    return rpuzzle;
  }

  function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  // Call function to create grid
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
  buttonreload.addEventListener('click', function () {
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
