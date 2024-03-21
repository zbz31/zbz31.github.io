document.addEventListener("DOMContentLoaded", () => {
  // window.localStorage.removeItem('current3Grid');
  let answers = []

 

const flags = [
  { couname: "Albania", region: "rgn_Europe", Colors: ["cl_Red", "cl_Black",], Items: ["Animal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/357px-Flag_of_Albania.svg.png" },
  { couname: "Algeria", region: "rgn_Africa", Colors: ["cl_Green", "cl_Black", "cl_Red",], Items: ["Bicolour", "Vertical", "Moon", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/383px-Flag_of_Algeria.svg.png" },
  { couname: "Andorra", region: "rgn_Europe", Colors: ["cl_Blue", "cl_Yellow", "cl_Red",], Items: ["Triband", "Letters", "Coat", "Vertical", "Animal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Andorra.svg/364px-Flag_of_Andorra.svg.png" },
  { couname: "Angola", region: "rgn_Africa", Colors: ["cl_Red", "cl_Black", "cl_Yellow",], Items: ["Bicolour", "Horizontal", "Sword", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/383px-Flag_of_Angola.svg.png" },
  { couname: "Argentina", region: "rgn_South America", Colors: ["cl_Blue", "cl_White", "cl_Yellow",], Items: ["Triband", "Horizontal", "Sun",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/383px-Flag_of_Argentina.svg.png" },
  { couname: "Armenia", region: "rgn_Europe", Colors: ["cl_Red", "cl_Blue", "cl_Orange",], Items: ["Triband", "Horizontal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/383px-Flag_of_Armenia.svg.png" },
  { couname: "Australia", region: "rgn_Oceania", Colors: ["cl_Blue", "cl_Red", "cl_White",], Items: ["Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/383px-Flag_of_Australia_%28converted%29.svg.png" },
  { couname: "Austria", region: "rgn_Europe", Colors: ["cl_Red", "cl_White",], Items: ["Triband", "Horizontal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/383px-Flag_of_Austria.svg.png" },
  { couname: "Belarus", region: "rgn_Europe", Colors: ["cl_Red", "cl_Green",], Items: ["Bicolour", "Horizontal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/383px-Flag_of_Belarus.svg.png" },
  { couname: "Belgium", region: "rgn_Europe", Colors: ["cl_Black", "cl_Yellow", "cl_Red",], Items: ["Triband", "Vertical",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/294px-Flag_of_Belgium.svg.png" },
  { couname: "Benin", region: "rgn_Africa", Colors: ["cl_Green", "cl_Yellow", "cl_Red",], Items: ["Triband", "Vertical",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Benin.svg/383px-Flag_of_Benin.svg.png" },
  { couname: "Bermuda", region: "rgn_Oceania", Colors: ["cl_Red", "cl_Blue", "cl_White", "cl_Green",], Items: ["Coat", "Triangle", "Animal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bermuda.svg/383px-Flag_of_Bermuda.svg.png" },
  { couname: "Bolivia", region: "rgn_South America", Colors: ["cl_Red", "cl_Yellow", "cl_Green",], Items: ["Triband", "Horizontal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Bolivia.svg/374px-Flag_of_Bolivia.svg.png" },
  { couname: "Bonaire", region: "rgn_North America", Colors: ["cl_Yellow", "cl_Black", "cl_Red", "cl_White", "cl_Blue",], Items: ["Circle", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Flag_of_Bonaire.svg/383px-Flag_of_Bonaire.svg.png" },
  { couname: "Bosnia and Herzegovina", region: "rgn_Europe", Colors: ["cl_Blue", "cl_White", "cl_Yellow",], Items: ["Triangle", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/383px-Flag_of_Bosnia_and_Herzegovina.svg.png" },
  { couname: "Botswana", region: "rgn_Africa", Colors: ["cl_Blue", "cl_White", "cl_Black",], Items: ["Horizontal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_Botswana.svg/383px-Flag_of_Botswana.svg.png" },
  { couname: "Brazil", region: "rgn_South America", Colors: ["cl_Green", "cl_Yellow", "cl_Blue", "cl_White",], Items: ["Letters", "Circle", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/364px-Flag_of_Brazil.svg.png" },
  { couname: "British Virgin Islands", region: "rgn_North America", Colors: ["cl_Green", "cl_Yellow", "cl_Blue", "cl_White", "cl_Red",], Items: ["Letters", "Coat",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_the_British_Virgin_Islands.svg/383px-Flag_of_the_British_Virgin_Islands.svg.png" },
  { couname: "Brunei Darussalam", region: "rgn_Asia", Colors: ["cl_Black", "cl_White", "cl_Yellow", "cl_Red",], Items: ["Letters", "Moon",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Brunei.svg/383px-Flag_of_Brunei.svg.png" },
  { couname: "Bulgaria", region: "rgn_Europe", Colors: ["cl_White", "cl_Green", "cl_Red",], Items: ["Triband", "Horizontal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/383px-Flag_of_Bulgaria.svg.png" },
  { couname: "Burkina Faso", region: "rgn_Africa", Colors: ["cl_Red", "cl_Green", "cl_Yellow",], Items: ["Bicolour", "Horizontal", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Burkina_Faso.svg/383px-Flag_of_Burkina_Faso.svg.png" },
  { couname: "Burundi", region: "rgn_Africa", Colors: ["cl_Green", "cl_White", "cl_Red",], Items: ["Triangle", "Circle", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Flag_of_Burundi.svg/383px-Flag_of_Burundi.svg.png" },
  { couname: "Cambodia", region: "rgn_Asia", Colors: ["cl_White", "cl_Blue", "cl_Red",], Items: ["Triband", "Horizontal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/383px-Flag_of_Cambodia.svg.png" },
  { couname: "Cameroon", region: "rgn_Africa", Colors: ["cl_Green", "cl_Red", "cl_Yellow",], Items: ["Triband", "Vertical", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/383px-Flag_of_Cameroon.svg.png" },
  { couname: "Canada", region: "rgn_North America", Colors: ["cl_Red", "cl_White",], Items: ["Triband", "Vertical",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/383px-Flag_of_Canada_%28Pantone%29.svg.png" },
  { couname: "Cape Verde", region: "rgn_Africa", Colors: ["cl_Blue", "cl_Red", "cl_White", "cl_Yellow",], Items: ["Horizontal", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Cape_Verde.svg/383px-Flag_of_Cape_Verde.svg.png" },
  { couname: "Cayman Islands", region: "rgn_Oceania", Colors: ["cl_Blue", "cl_Red", "cl_White", "cl_Green",], Items: ["Letters", "Coat", "Triangle", "Animal", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_the_Cayman_Islands.svg/383px-Flag_of_the_Cayman_Islands.svg.png" },
  { couname: "Central African Republic", region: "rgn_Africa", Colors: ["cl_Blue", "cl_White", "cl_Red", "cl_Green", "cl_Yellow",], Items: ["Horizontal", "Vertical", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Central_African_Republic.svg/383px-Flag_of_the_Central_African_Republic.svg.png" },
  { couname: "Chad", region: "rgn_Africa", Colors: ["cl_Blue", "cl_Yellow", "cl_Red",], Items: ["Triband", "Vertical",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Flag_of_Chad.svg/383px-Flag_of_Chad.svg.png" },
  { couname: "Chile", region: "rgn_South America", Colors: ["cl_Red", "cl_White", "cl_Blue",], Items: ["Bicolour", "Horizontal", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/383px-Flag_of_Chile.svg.png" },
  { couname: "China PR", region: "rgn_Asia", Colors: ["cl_Red", "cl_Yellow",], Items: ["Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/383px-Flag_of_the_People%27s_Republic_of_China.svg.png" },
  { couname: "Colombia", region: "rgn_South America", Colors: ["cl_Yellow", "cl_Blue", "cl_Red",], Items: ["Triband", "Horizontal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/383px-Flag_of_Colombia.svg.png" },
  { couname: "Comoros", region: "rgn_Africa", Colors: ["cl_Yellow", "cl_White", "cl_Red", "cl_Blue", "cl_Green",], Items: ["Horizontal", "Moon", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Flag_of_the_Comoros.svg/383px-Flag_of_the_Comoros.svg.png" },
  { couname: "Congo", region: "rgn_Africa", Colors: ["cl_Red", "cl_Yellow", "cl_Green",], Items: [], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_the_Republic_of_the_Congo.svg/383px-Flag_of_the_Republic_of_the_Congo.svg.png" },
  { couname: "Congo DR", region: "rgn_Africa", Colors: ["cl_Blue", "cl_Red", "cl_Yellow",], Items: ["Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg/340px-Flag_of_the_Democratic_Republic_of_the_Congo.svg.png" },
  { couname: "Cook Islands", region: "rgn_Oceania", Colors: ["cl_Blue", "cl_White", "cl_Red",], Items: ["Triangle", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Flag_of_the_Cook_Islands.svg/383px-Flag_of_the_Cook_Islands.svg.png" },
  { couname: "Costa Rica", region: "rgn_North America", Colors: ["cl_Blue", "cl_White", "cl_Red",], Items: ["Horizontal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Costa_Rica.svg/383px-Flag_of_Costa_Rica.svg.png" },
  { couname: "Côte d'Ivoire", region: "rgn_Africa", Colors: ["cl_Orange", "cl_White", "cl_Green",], Items: ["Triband", "Horizontal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg/300px-Flag_of_C%C3%B4te_d%27Ivoire.svg.png" },
  { couname: "Croatia", region: "rgn_Europe", Colors: ["cl_Red", "cl_White", "cl_Blue",], Items: ["Triband", "Coat", "Horizontal", "Sword", "Moon", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/383px-Flag_of_Croatia.svg.png" },
  { couname: "Cuba", region: "rgn_North America", Colors: ["cl_Blue", "cl_White", "cl_Red",], Items: ["Horizontal", "Triangle", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/383px-Flag_of_Cuba.svg.png" },
  { couname: "Curaçao", region: "rgn_Oceania", Colors: ["cl_Blue", "cl_White", "cl_Yellow",], Items: ["Triband", "Horizontal", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Flag_of_Cura%C3%A7ao.svg/383px-Flag_of_Cura%C3%A7ao.svg.png" },
  { couname: "Cyprus", region: "rgn_Europe", Colors: ["cl_White", "cl_Green", "cl_Yellow",], Items: [], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Cyprus.svg/383px-Flag_of_Cyprus.svg.png" },
  { couname: "Czech Republic", region: "rgn_Europe", Colors: ["cl_Red", "cl_White", "cl_Blue",], Items: ["Bicolour", "Horizontal", "Triangle",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/383px-Flag_of_the_Czech_Republic.svg.png" },
  { couname: "Denmark", region: "rgn_Europe", Colors: ["cl_Red", "cl_White",], Items: [], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/338px-Flag_of_Denmark.svg.png" },
  { couname: "Djibouti", region: "rgn_Africa", Colors: ["cl_Green", "cl_Blue", "cl_White", "cl_Red",], Items: ["Bicolour", "Horizontal", "Triangle", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_Djibouti.svg/383px-Flag_of_Djibouti.svg.png" },
  { couname: "Dominica", region: "rgn_North America", Colors: ["cl_Yellow", "cl_Green", "cl_White", "cl_Black", "cl_Red", "cl_Purple",], Items: ["Triband", "Horizontal", "Vertical", "Circle", "Animal", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Flag_of_Dominica.svg/383px-Flag_of_Dominica.svg.png" },
  { couname: "Dominican Republic", region: "rgn_North America", Colors: ["cl_Red", "cl_White", "cl_Blue",], Items: ["Letters", "Coat",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_the_Dominican_Republic.svg/383px-Flag_of_the_Dominican_Republic.svg.png" },
  { couname: "Ecuador", region: "rgn_South America", Colors: ["cl_Yellow", "cl_Blue", "cl_Red",], Items: ["Triband", "Coat", "Horizontal", "Animal", "Sword", "Sun",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/383px-Flag_of_Ecuador.svg.png" },
  { couname: "Egypt", region: "rgn_Africa", Colors: ["cl_Red", "cl_White", "cl_Black", "cl_Yellow",], Items: ["Triband", "Letters", "Horizontal", "Animal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/383px-Flag_of_Egypt.svg.png" },
  { couname: "El Salvador", region: "rgn_North America", Colors: ["cl_Blue", "cl_White",], Items: ["Triband", "Letters", "Coat", "Horizontal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_El_Salvador.svg/383px-Flag_of_El_Salvador.svg.png" },
  { couname: "England", region: "rgn_Europe", Colors: ["cl_White", "cl_Red",], Items: [], Flag: "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/383px-Flag_of_England.svg.png" },
  { couname: "Equatorial Guinea", region: "rgn_Africa", Colors: ["cl_Green", "cl_White", "cl_Red", "cl_Blue",], Items: ["Triband", "Letters", "Horizontal", "Triangle", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Equatorial_Guinea.svg/383px-Flag_of_Equatorial_Guinea.svg.png" },
  { couname: "Eritrea", region: "rgn_Africa", Colors: ["cl_Red", "cl_Blue", "cl_Green", "cl_Yellow",], Items: ["Triangle",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Flag_of_Eritrea.svg/383px-Flag_of_Eritrea.svg.png" },
  { couname: "Estonia", region: "rgn_Europe", Colors: ["cl_Blue", "cl_Black", "cl_White",], Items: ["Triband", "Horizontal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/383px-Flag_of_Estonia.svg.png" },
  { couname: "Ethiopia", region: "rgn_Africa", Colors: ["cl_Red", "cl_Yellow", "cl_Green", "cl_Blue",], Items: ["Triband", "Horizontal", "Circle", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Ethiopia.svg/383px-Flag_of_Ethiopia.svg.png" },
  { couname: "Faroe Islands", region: "rgn_Europe", Colors: ["cl_Red", "cl_White", "cl_Blue",], Items: [], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flag_of_the_Faroe_Islands.svg/351px-Flag_of_the_Faroe_Islands.svg.png" },
  { couname: "Fiji", region: "rgn_Oceania", Colors: ["cl_Blue", "cl_Red", "cl_White", "cl_Yellow", "cl_Green",], Items: ["Coat", "Triangle", "Animal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Fiji.svg/383px-Flag_of_Fiji.svg.png" },
  { couname: "Finland", region: "rgn_Europe", Colors: ["cl_Blue", "cl_White",], Items: ["Cross",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/383px-Flag_of_Finland.svg.png" },
  { couname: "France", region: "rgn_Europe", Colors: ["cl_Blue", "cl_White", "cl_Red",], Items: ["Triband", "Vertical",], Flag: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/383px-Flag_of_France.svg.png" },
  { couname: "Gabon", region: "rgn_Africa", Colors: ["cl_Green", "cl_Red", "cl_Yellow",], Items: ["Triband", "Horizontal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Flag_of_Gabon.svg/340px-Flag_of_Gabon.svg.png" },
  { couname: "Gambia", region: "rgn_Africa", Colors: ["cl_Red", "cl_Blue", "cl_Green", "cl_White",], Items: ["Horizontal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_The_Gambia.svg/300px-Flag_of_The_Gambia.svg.png" },
  { couname: "Georgia", region: "rgn_Europe", Colors: ["cl_White", "cl_Red",], Items: ["Cross",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/383px-Flag_of_Georgia.svg.png" },
  { couname: "Germany", region: "rgn_Europe", Colors: ["cl_Red", "cl_Yellow", "cl_Black",], Items: ["Triband", "Horizontal",], Flag: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/383px-Flag_of_Germany.svg.png" },
  { couname: "Ghana", region: "rgn_Africa", Colors: ["cl_Red", "cl_Yellow", "cl_Green", "cl_Black",], Items: ["Triband", "Horizontal", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Ghana.svg/383px-Flag_of_Ghana.svg.png" },
  { couname: "Gibraltar", region: "rgn_Europe", Colors: ["cl_Red", "cl_White", "cl_Black", "cl_Yellow",], Items: [], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Flag_of_Gibraltar.svg/383px-Flag_of_Gibraltar.svg.png" },
  { couname: "Great Britain", region: "rgn_Europe", Colors: ["cl_Blue", "cl_White", "cl_Red",], Items: ["Triangle",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/383px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png" },
  { couname: "Greece", region: "rgn_Europe", Colors: ["cl_Blue", "cl_White",], Items: ["Horizontal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/383px-Flag_of_Greece.svg.png" },
  { couname: "Grenada", region: "rgn_North America", Colors: ["cl_Red", "cl_Green", "cl_Yellow",], Items: ["Triangle", "Circle", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Grenada.svg/383px-Flag_of_Grenada.svg.png" },
  { couname: "Guam", region: "rgn_North America", Colors: ["cl_Red", "cl_Blue",], Items: ["Letters", "Circle",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Flag_of_Guam.svg/383px-Flag_of_Guam.svg.png" },
  { couname: "Guatemala", region: "rgn_North America", Colors: ["cl_White", "cl_Blue",], Items: ["Triband", "Letters", "Coat", "Vertical", "Animal", "Sword",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Guatemala.svg/383px-Flag_of_Guatemala.svg.png" },
  { couname: "Guinea", region: "rgn_Africa", Colors: ["cl_Red", "cl_Yellow", "cl_Green",], Items: ["Triband", "Vertical",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Flag_of_Guinea.svg/383px-Flag_of_Guinea.svg.png" },
  { couname: "Guinea-Bissau", region: "rgn_Africa", Colors: ["cl_Red", "cl_Black", "cl_Yellow", "cl_Green",], Items: ["Bicolour", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Guinea-Bissau.svg/383px-Flag_of_Guinea-Bissau.svg.png" },
  { couname: "Guyana", region: "rgn_South America", Colors: ["cl_Red", "cl_Green", "cl_Yellow", "cl_White",], Items: ["Triangle",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_Guyana.svg/383px-Flag_of_Guyana.svg.png" },
  { couname: "Haiti", region: "rgn_North America", Colors: ["cl_Blue", "cl_Red",], Items: ["Bicolour", "Letters", "Coat", "Horizontal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Haiti.svg/383px-Flag_of_Haiti.svg.png" },
  { couname: "Honduras", region: "rgn_North America", Colors: ["cl_Blue", "cl_White",], Items: ["Triband", "Bicolour", "Horizontal", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Flag_of_Honduras.svg/383px-Flag_of_Honduras.svg.png" },
  { couname: "Hong Kong", region: "rgn_Asia", Colors: ["cl_Red", "cl_White",], Items: ["Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Hong_Kong.svg/300px-Flag_of_Hong_Kong.svg.png" },
  { couname: "Hungary", region: "rgn_Europe", Colors: ["cl_Red", "cl_White", "cl_Green",], Items: ["Triband", "Bicolour", "Horizontal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/383px-Flag_of_Hungary.svg.png" },
  { couname: "Iceland", region: "rgn_Europe", Colors: ["cl_White", "cl_Red", "cl_Blue",], Items: [], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/354px-Flag_of_Iceland.svg.png" },
  { couname: "India", region: "rgn_Asia", Colors: ["cl_Orange", "cl_White", "cl_Green", "cl_Blue",], Items: ["Triband", "Horizontal", "Circle",], Flag: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/383px-Flag_of_India.svg.png" },
  { couname: "Indonesia", region: "rgn_Asia", Colors: ["cl_White", "cl_Red",], Items: ["Bicolour", "Vertical",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/383px-Flag_of_Indonesia.svg.png" },
  { couname: "IR Iran", region: "rgn_Asia", Colors: ["cl_Red", "cl_White", "cl_Green",], Items: ["Triband", "Letters", "Horizontal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/383px-Flag_of_Iran.svg.png" },
  { couname: "Iraq", region: "rgn_Asia", Colors: ["cl_Red", "cl_White", "cl_Black", "cl_Green",], Items: ["Triband", "Letters", "Horizontal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/383px-Flag_of_Iraq.svg.png" },
  { couname: "Israel", region: "rgn_Asia", Colors: ["cl_Blue", "cl_White",], Items: ["Triband", "Horizontal", "Triangle", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/351px-Flag_of_Israel.svg.png" },
  { couname: "Italy", region: "rgn_Europe", Colors: ["cl_Green", "cl_White", "cl_Red",], Items: ["Triband", "Vertical",], Flag: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/383px-Flag_of_Italy.svg.png" },
  { couname: "Jamaica", region: "rgn_Africa", Colors: ["cl_Green", "cl_Black", "cl_Yellow",], Items: ["Cross", "Triangle",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Jamaica.svg/383px-Flag_of_Jamaica.svg.png" },
  { couname: "Japan", region: "rgn_Asia", Colors: ["cl_White", "cl_Red",], Items: ["Circle",], Flag: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/383px-Flag_of_Japan.svg.png" },
  { couname: "Jordan", region: "rgn_Asia", Colors: ["cl_Red", "cl_Green", "cl_Black", "cl_White",], Items: ["Triband", "Horizontal", "Triangle", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/383px-Flag_of_Jordan.svg.png" },
  { couname: "Kazakhstan", region: "rgn_Asia", Colors: ["cl_Blue", "cl_Yellow",], Items: ["Animal", "Sun",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/383px-Flag_of_Kazakhstan.svg.png" },
  { couname: "Kenya", region: "rgn_Africa", Colors: ["cl_Black", "cl_Red", "cl_Green", "cl_White",], Items: ["Horizontal", "Sword",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kenya.svg/383px-Flag_of_Kenya.svg.png" },
  { couname: "Korea DPR", region: "rgn_Asia", Colors: ["cl_Blue", "cl_Red", "cl_White",], Items: ["Horizontal", "Circle", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_North_Korea.svg/383px-Flag_of_North_Korea.svg.png" },
  { couname: "Korea Republic", region: "rgn_Asia", Colors: ["cl_White", "cl_Black", "cl_Red", "cl_Blue",], Items: ["Circle",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/383px-Flag_of_South_Korea.svg.png" },
  { couname: "Kosovo", region: "rgn_Europe", Colors: ["cl_Blue", "cl_Yellow", "cl_White",], Items: ["Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Flag_of_Kosovo.svg/357px-Flag_of_Kosovo.svg.png" },
  { couname: "Kuwait", region: "rgn_Asia", Colors: ["cl_Red", "cl_White", "cl_Black", "cl_Green",], Items: ["Triband", "Horizontal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Laos.svg/383px-Flag_of_Laos.svg.png" },
  { couname: "Kyrgyz Republic", region: "rgn_Asia", Colors: ["cl_Red", "cl_Yellow",], Items: ["Circle", "Sun",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/383px-Flag_of_Kyrgyzstan.svg.png" },
  { couname: "Laos", region: "rgn_Asia", Colors: ["cl_Red", "cl_Blue", "cl_White",], Items: ["Triband", "Horizontal", "Circle",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Laos.svg/383px-Flag_of_Laos.svg.png" },
  { couname: "Latvia", region: "rgn_Europe", Colors: ["cl_Red", "cl_White",], Items: ["Triband", "Bicolour", "Horizontal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/383px-Flag_of_Latvia.svg.png" },
  { couname: "Lebanon", region: "rgn_Asia", Colors: ["cl_Red", "cl_White", "cl_Green",], Items: ["Triband", "Horizontal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Lebanon.svg/383px-Flag_of_Lebanon.svg.png" },
  { couname: "Lesotho", region: "rgn_Africa", Colors: ["cl_Blue", "cl_White", "cl_Green", "cl_Black",], Items: ["Triband", "Bicolour", "Horizontal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Flag_of_Lesotho.svg/383px-Flag_of_Lesotho.svg.png" },
  { couname: "Liberia", region: "rgn_Africa", Colors: ["cl_Red", "cl_White", "cl_Blue",], Items: ["Horizontal", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Flag_of_Liberia.svg/383px-Flag_of_Liberia.svg.png" },
  { couname: "Libya", region: "rgn_Africa", Colors: ["cl_Black", "cl_Red", "cl_Green", "cl_White",], Items: ["Triband", "Horizontal", "Moon", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Libya.svg/383px-Flag_of_Libya.svg.png" },
  { couname: "Liechtenstein", region: "rgn_Europe", Colors: ["cl_Red", "cl_Blue", "cl_Yellow",], Items: ["Bicolour", "Horizontal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Flag_of_Liechtenstein.svg/383px-Flag_of_Liechtenstein.svg.png" },
  { couname: "Lithuania", region: "rgn_Europe", Colors: ["cl_Yellow", "cl_Red", "cl_Green",], Items: ["Triband", "Horizontal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Lithuania.svg/383px-Flag_of_Lithuania.svg.png" },
  { couname: "Luxembourg", region: "rgn_Europe", Colors: ["cl_Red", "cl_White", "cl_Blue",], Items: ["Triband", "Horizontal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Luxembourg.svg/383px-Flag_of_Luxembourg.svg.png" },
  { couname: "Macau", region: "rgn_Asia", Colors: ["cl_Green", "cl_White", "cl_Yellow",], Items: ["Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Flag_of_Macau.svg/383px-Flag_of_Macau.svg.png" },
  { couname: "Madagascar", region: "rgn_Africa", Colors: ["cl_Red", "cl_Green", "cl_White",], Items: ["Bicolour",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Madagascar.svg/383px-Flag_of_Madagascar.svg.png" },
  { couname: "Malawi", region: "rgn_Africa", Colors: ["cl_Red", "cl_Green", "cl_Black",], Items: ["Triband", "Horizontal", "Sun",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Flag_of_Malawi.svg/383px-Flag_of_Malawi.svg.png" },
  { couname: "Malaysia", region: "rgn_Asia", Colors: ["cl_Red", "cl_White", "cl_Blue", "cl_Yellow",], Items: ["Horizontal", "Moon", "Sun",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/383px-Flag_of_Malaysia.svg.png" },
  { couname: "Maldives", region: "rgn_Asia", Colors: ["cl_Red", "cl_Green", "cl_White",], Items: ["Moon",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Maldives.svg/383px-Flag_of_Maldives.svg.png" },
  { couname: "Mali", region: "rgn_Africa", Colors: ["cl_Green", "cl_Yellow", "cl_Red",], Items: ["Triband", "Vertical",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Mali.svg/383px-Flag_of_Mali.svg.png" },
  { couname: "Malta", region: "rgn_Europe", Colors: ["cl_White", "cl_Red",], Items: ["Bicolour", "Letters", "Vertical", "Circle", "Animal", "Sword",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Malta.svg/383px-Flag_of_Malta.svg.png" },
  { couname: "Martinique", region: "rgn_North America", Colors: ["cl_Red", "cl_Blue", "cl_Black",], Items: ["Bicolour", "Triangle",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Montserrat.svg/383px-Flag_of_Montserrat.svg.png" },
  { couname: "Mauritania", region: "rgn_Africa", Colors: ["cl_Red", "cl_Green", "cl_Yellow",], Items: ["Triband", "Horizontal", "Moon", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Flag_of_Mauritania.svg/383px-Flag_of_Mauritania.svg.png" },
  { couname: "Mauritius", region: "rgn_Africa", Colors: ["cl_Red", "cl_Blue", "cl_Yellow", "cl_Green",], Items: ["Horizontal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Mauritius.svg/383px-Flag_of_Mauritius.svg.png" },
  { couname: "Mexico", region: "rgn_North America", Colors: ["cl_Green", "cl_White", "cl_Red",], Items: ["Triband", "Coat", "Vertical", "Animal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/383px-Flag_of_Mexico.svg.png" },
  { couname: "Moldova", region: "rgn_Europe", Colors: ["cl_Blue", "cl_Yellow", "cl_Red",], Items: ["Triband", "Coat", "Vertical", "Animal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Moldova.svg/383px-Flag_of_Moldova.svg.png" },
  { couname: "Mongolia", region: "rgn_Asia", Colors: ["cl_Red", "cl_Blue", "cl_Yellow",], Items: ["Triband", "Bicolour", "Vertical",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Mongolia.svg/383px-Flag_of_Mongolia.svg.png" },
  { couname: "Montenegro", region: "rgn_Europe", Colors: ["cl_Red", "cl_Yellow",], Items: ["Coat", "Animal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Montenegro.svg/383px-Flag_of_Montenegro.svg.png" },
  { couname: "Montserrat", region: "rgn_North America", Colors: ["cl_Red", "cl_Blue", "cl_White", "cl_Green", "cl_Brown",], Items: ["Coat", "Triangle",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Montserrat.svg/383px-Flag_of_Montserrat.svg.png" },
  { couname: "Morocco", region: "rgn_Africa", Colors: ["cl_Red", "cl_Green",], Items: ["Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/383px-Flag_of_Morocco.svg.png" },
  { couname: "Mozambique", region: "rgn_Africa", Colors: ["cl_Green", "cl_Red", "cl_Yellow", "cl_Black",], Items: ["Horizontal", "Triangle",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Mozambique.svg/383px-Flag_of_Mozambique.svg.png" },
  { couname: "Myanmar", region: "rgn_Asia", Colors: ["cl_Yellow", "cl_Green", "cl_Red", "cl_White",], Items: ["Triband", "Horizontal", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Myanmar.svg/383px-Flag_of_Myanmar.svg.png" },
  { couname: "namibia", region: "rgn_Africa", Colors: ["cl_Blue", "cl_Yellow", "cl_Green", "cl_Red",], Items: ["Sun",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Namibia.svg/383px-Flag_of_Namibia.svg.png" },
  { couname: "nepal", region: "rgn_Asia", Colors: ["cl_Blue", "cl_White", "cl_Red",], Items: ["Triangle", "Moon", "Sun",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/209px-Flag_of_Nepal.svg.png" },
  { couname: "netherlands", region: "rgn_Europe", Colors: ["cl_Red", "cl_White", "cl_Blue",], Items: ["Triband", "Horizontal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/383px-Flag_of_the_Netherlands.svg.png" },
  { couname: "new Caledonia", region: "rgn_Oceania", Colors: ["cl_Yellow", "cl_Black", "cl_Green", "cl_Red", "cl_Blue",], Items: ["Triband", "Horizontal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flags_of_New_Caledonia.svg/383px-Flags_of_New_Caledonia.svg.png" },
  { couname: "new Zealand", region: "rgn_Oceania", Colors: ["cl_Blue", "cl_Red", "cl_White",], Items: ["Triangle", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/383px-Flag_of_New_Zealand.svg.png" },
  { couname: "nicaragua", region: "rgn_North America", Colors: ["cl_Blue", "cl_White",], Items: ["Triband", "Letters", "Coat", "Horizontal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Nicaragua.svg/383px-Flag_of_Nicaragua.svg.png" },
  { couname: "niger", region: "rgn_Africa", Colors: ["cl_Orange", "cl_White", "cl_Green",], Items: ["Triband", "Horizontal", "Circle",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Flag_of_Niger.svg/298px-Flag_of_Niger.svg.png" },
  { couname: "nigeria", region: "rgn_Africa", Colors: ["cl_Green", "cl_White",], Items: ["Triband", "Bicolour", "Horizontal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/383px-Flag_of_Nigeria.svg.png" },
  { couname: "north Macedonia", region: "rgn_Europe", Colors: ["cl_Yellow", "cl_Red",], Items: ["Circle", "Sun",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_North_Macedonia.svg/383px-Flag_of_North_Macedonia.svg.png" },
  { couname: "norway", region: "rgn_Europe", Colors: ["cl_Red", "cl_Blue", "cl_White",], Items: [], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/351px-Flag_of_Norway.svg.png" },
  { couname: "Oman", region: "rgn_Asia", Colors: ["cl_White", "cl_Red", "cl_Green",], Items: ["Triband", "Coat", "Horizontal", "Sword",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Oman.svg/383px-Flag_of_Oman.svg.png" },
  { couname: "Pakistan", region: "rgn_Asia", Colors: ["cl_Green", "cl_White",], Items: ["Bicolour", "Vertical", "Moon", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/383px-Flag_of_Pakistan.svg.png" },
  { couname: "Panama", region: "rgn_North America", Colors: ["cl_Blue", "cl_Red", "cl_White",], Items: ["Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/383px-Flag_of_Panama.svg.png" },
  { couname: "Papua new Guinea", region: "rgn_Oceania", Colors: ["cl_White", "cl_Red", "cl_Black", "cl_Yellow",], Items: ["Animal", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Flag_of_Papua_New_Guinea.svg/340px-Flag_of_Papua_New_Guinea.svg.png" },
  { couname: "Paraguay", region: "rgn_South America", Colors: ["cl_Red", "cl_White", "cl_Blue",], Items: ["Triband", "Letters", "Coat", "Horizontal", "Animal", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/383px-Flag_of_Paraguay.svg.png" },
  { couname: "Peru", region: "rgn_South America", Colors: ["cl_Red", "cl_White",], Items: ["Triband", "Bicolour", "Horizontal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/383px-Flag_of_Peru.svg.png" },
  { couname: "Philippines", region: "rgn_Asia", Colors: ["cl_Blue", "cl_Red", "cl_White", "cl_Yellow",], Items: ["Triangle", "Sun", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/383px-Flag_of_the_Philippines.svg.png" },
  { couname: "Poland", region: "rgn_Europe", Colors: ["cl_White", "cl_Red",], Items: ["Bicolour", "Horizontal",], Flag: "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/383px-Flag_of_Poland.svg.png" },
  { couname: "Portugal", region: "rgn_Europe", Colors: ["cl_Red", "cl_Green",], Items: ["Bicolour", "Coat", "Vertical",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/383px-Flag_of_Portugal.svg.png" },
  { couname: "Puerto Rico", region: "rgn_North America", Colors: ["cl_Blue", "cl_Red", "cl_White",], Items: ["Horizontal", "Triangle", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Flag_of_Puerto_Rico.svg/383px-Flag_of_Puerto_Rico.svg.png" },
  { couname: "Qatar", region: "rgn_Asia", Colors: ["cl_White", "cl_Red",], Items: ["Bicolour", "Vertical", "Triangle",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/383px-Flag_of_Qatar.svg.png" },
  { couname: "Republic of Ireland", region: "rgn_Europe", Colors: ["cl_Green", "cl_White", "cl_Orange",], Items: ["Triband", "Vertical",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/383px-Flag_of_Ireland.svg.png" },
  { couname: "Romania", region: "rgn_Europe", Colors: ["cl_Blue", "cl_Yellow", "cl_Red",], Items: ["Triband", "Vertical",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/383px-Flag_of_Romania.svg.png" },
  { couname: "Russia", region: "rgn_Europe", Colors: ["cl_White", "cl_Blue", "cl_Red",], Items: ["Triband", "Horizontal",], Flag: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/383px-Flag_of_Russia.svg.png" },
  { couname: "Rwanda", region: "rgn_Africa", Colors: ["cl_Blue", "cl_Yellow", "cl_Green",], Items: ["Triband", "Horizontal", "Sun",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Rwanda.svg/383px-Flag_of_Rwanda.svg.png" },
  { couname: "Saint Martin", region: "rgn_South America", Colors: ["cl_Blue", "cl_Red", "cl_White", "cl_Yellow",], Items: ["Bicolour", "Letters", "Coat", "Horizontal", "Triangle", "Animal",], Flag: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/300px-Flag_of_France.svg.png" },
  { couname: "Samoa", region: "rgn_Oceania", Colors: ["cl_Red", "cl_Blue", "cl_White",], Items: ["Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Samoa.svg/375px-Flag_of_Samoa.svg.png" },
  { couname: "San Marino", region: "rgn_Europe", Colors: ["cl_Blue", "cl_White",], Items: ["Bicolour", "Cross", "Letters", "Coat", "Horizontal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Flag_of_San_Marino.svg/340px-Flag_of_San_Marino.svg.png" },
  { couname: "São Tomé and Príncipe", region: "rgn_Africa", Colors: ["cl_Red", "cl_Green", "cl_Yellow", "cl_Black",], Items: ["Triband", "Horizontal", "Triangle", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe.svg/383px-Flag_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe.svg.png" },
  { couname: "Saudi Arabia", region: "rgn_Asia", Colors: ["cl_Green", "cl_White",], Items: ["Letters", "Sword",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/383px-Flag_of_Saudi_Arabia.svg.png" },
  { couname: "Scotland", region: "rgn_Europe", Colors: ["cl_Blue", "cl_White",], Items: [], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/383px-Flag_of_Scotland.svg.png" },
  { couname: "Senegal", region: "rgn_Africa", Colors: ["cl_Green", "cl_Yellow", "cl_Red",], Items: ["Triband", "Vertical", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/383px-Flag_of_Senegal.svg.png" },
  { couname: "Serbia", region: "rgn_Europe", Colors: ["cl_Red", "cl_Blue", "cl_White",], Items: ["Triband", "Coat", "Horizontal", "Animal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/383px-Flag_of_Serbia.svg.png" },
  { couname: "Seychelles", region: "rgn_Africa", Colors: ["cl_Blue", "cl_Yellow", "cl_Red", "cl_White", "cl_Green",], Items: [], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Seychelles.svg/375px-Flag_of_Seychelles.svg.png" },
  { couname: "Sierra Leone", region: "rgn_Africa", Colors: ["cl_Green", "cl_White", "cl_Blue",], Items: ["Triband", "Horizontal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Sierra_Leone.svg/383px-Flag_of_Sierra_Leone.svg.png" },
  { couname: "Singapore", region: "rgn_Asia", Colors: ["cl_Red", "cl_White",], Items: ["Bicolour", "Horizontal", "Moon", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/383px-Flag_of_Singapore.svg.png" },
  { couname: "Slovakia", region: "rgn_Europe", Colors: ["cl_White", "cl_Blue", "cl_Red",], Items: ["Triband", "Coat", "Horizontal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/383px-Flag_of_Slovakia.svg.png" },
  { couname: "Slovenia", region: "rgn_Europe", Colors: ["cl_White", "cl_Blue", "cl_Red",], Items: ["Triband", "Coat", "Horizontal", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Slovenia.svg/383px-Flag_of_Slovenia.svg.png" },
  { couname: "Solomon Islands", region: "rgn_Oceania", Colors: ["cl_White", "cl_Yellow", "cl_Green", "cl_Blue",], Items: ["Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Flag_of_the_Solomon_Islands.svg/375px-Flag_of_the_Solomon_Islands.svg.png" },
  { couname: "Somalia", region: "rgn_Africa", Colors: ["cl_Blue", "cl_White",], Items: ["Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Somalia.svg/383px-Flag_of_Somalia.svg.png" },
  { couname: "South Africa", region: "rgn_Africa", Colors: ["cl_Green", "cl_Black", "cl_White", "cl_Yellow", "cl_Red", "cl_Blue",], Items: ["Triangle",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/383px-Flag_of_South_Africa.svg.png" },
  { couname: "South Sudan", region: "rgn_Africa", Colors: ["cl_Blue", "cl_Yellow", "cl_Black", "cl_Red", "cl_Green", "cl_White",], Items: ["Horizontal", "Triangle", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Flag_of_South_Sudan.svg/383px-Flag_of_South_Sudan.svg.png" },
  { couname: "Spain", region: "rgn_Europe", Colors: ["cl_Yellow", "cl_Red",], Items: ["Triband", "Bicolour", "Cross", "Letters", "Coat", "Horizontal", "Animal",], Flag: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/300px-Flag_of_Spain.svg.png" },
  { couname: "Sri Lanka", region: "rgn_Asia", Colors: ["cl_Yellow", "cl_Red", "cl_Orange", "cl_Green",], Items: ["Animal", "Sword",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Sri_Lanka.svg/383px-Flag_of_Sri_Lanka.svg.png" },
  { couname: "St. Kitts and nevis", region: "rgn_North America", Colors: ["cl_Green", "cl_Yellow", "cl_Red", "cl_Black", "cl_White",], Items: ["Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg/383px-Flag_of_Saint_Kitts_and_Nevis.svg.png" },
  { couname: "St. Lucia", region: "rgn_North America", Colors: ["cl_Yellow", "cl_Black", "cl_White", "cl_Blue",], Items: ["Triangle",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Saint_Lucia.svg/383px-Flag_of_Saint_Lucia.svg.png" },
  { couname: "St. Vincent and the Grenadines", region: "rgn_North America", Colors: ["cl_Green", "cl_Yellow", "cl_Blue",], Items: ["Triband", "Vertical",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg/383px-Flag_of_Saint_Vincent_and_the_Grenadines.svg.png" },
  { couname: "Sudan", region: "rgn_Africa", Colors: ["cl_Red", "cl_White", "cl_Black", "cl_Green",], Items: ["Triband", "Horizontal", "Triangle",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Sudan.svg/383px-Flag_of_Sudan.svg.png" },
  { couname: "Suriname", region: "rgn_South America", Colors: ["cl_Green", "cl_Red", "cl_White", "cl_Yellow",], Items: ["Horizontal", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Flag_of_Suriname.svg/383px-Flag_of_Suriname.svg.png" },
  { couname: "Sweden", region: "rgn_Europe", Colors: ["cl_Blue", "cl_Yellow",], Items: [], Flag: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/383px-Flag_of_Sweden.svg.png" },
  { couname: "Switzerland", region: "rgn_Europe", Colors: ["cl_Red", "cl_White",], Items: [], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Switzerland_%28Pantone%29.svg/255px-Flag_of_Switzerland_%28Pantone%29.svg.png" },
  { couname: "Syria", region: "rgn_Asia", Colors: ["cl_Red", "cl_White", "cl_Black", "cl_Green",], Items: ["Triband", "Horizontal", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Saint_Lucia.svg/383px-Flag_of_Saint_Lucia.svg.png" },
  { couname: "Tahiti", region: "rgn_Asia", Colors: ["cl_Red", "cl_White", "cl_Blue", "cl_Orange",], Items: ["Triband", "Coat", "Horizontal", "Circle",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Flag_of_French_Polynesia.svg/375px-Flag_of_French_Polynesia.svg.png" },
  { couname: "Tajikistan", region: "rgn_Asia", Colors: ["cl_Red", "cl_White", "cl_Green", "cl_Yellow",], Items: ["Triband", "Horizontal", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Tajikistan.svg/383px-Flag_of_Tajikistan.svg.png" },
  { couname: "Tanzania", region: "rgn_Africa", Colors: ["cl_Green", "cl_Yellow", "cl_Black", "cl_Blue",], Items: [], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tanzania.svg/383px-Flag_of_Tanzania.svg.png" },
  { couname: "Thailand", region: "rgn_Asia", Colors: ["cl_Red", "cl_White", "cl_Blue",], Items: ["Horizontal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/383px-Flag_of_Thailand.svg.png" },
  { couname: "Timor-Leste", region: "rgn_Asia", Colors: ["cl_Red", "cl_Orange", "cl_Black", "cl_White",], Items: ["Triangle", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flag_of_East_Timor.svg/383px-Flag_of_East_Timor.svg.png" },
  { couname: "Togo", region: "rgn_Africa", Colors: ["cl_Green", "cl_Yellow", "cl_Red", "cl_White",], Items: ["Horizontal", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Flag_of_Togo.svg/383px-Flag_of_Togo.svg.png" },
  { couname: "Tonga", region: "rgn_Oceania", Colors: ["cl_White", "cl_Red",], Items: [], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Tonga.svg/383px-Flag_of_Tonga.svg.png" },
  { couname: "Trinidad and Tobago", region: "rgn_South America", Colors: ["cl_Red", "cl_Black", "cl_White",], Items: [], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Trinidad_and_Tobago.svg/383px-Flag_of_Trinidad_and_Tobago.svg.png" },
  { couname: "Tunisia", region: "rgn_Africa", Colors: ["cl_Red", "cl_White",], Items: ["Circle", "Moon", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/338px-Flag_of_Tunisia.svg.png" },
  { couname: "Turkey", region: "rgn_Asia", Colors: ["cl_Red", "cl_White",], Items: ["Moon", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/330px-Flag_of_Turkey.svg.png" },
  { couname: "Turkmenistan", region: "rgn_Asia", Colors: ["cl_Green", "cl_White",], Items: ["Triangle", "Moon", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Turkmenistan.svg/383px-Flag_of_Turkmenistan.svg.png" },
  { couname: "Turks and Caicos Islands", region: "rgn_Oceania", Colors: ["cl_Blue", "cl_Red", "cl_White", "cl_Yellow",], Items: ["Animal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_the_Turks_and_Caicos_Islands.svg/383px-Flag_of_the_Turks_and_Caicos_Islands.svg.png" },
  { couname: "Uganda", region: "rgn_Africa", Colors: ["cl_Black", "cl_Yellow", "cl_Red",], Items: ["Horizontal", "Circle", "Animal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Flag_of_Uganda.svg/383px-Flag_of_Uganda.svg.png" },
  { couname: "Ukraine", region: "rgn_Europe", Colors: ["cl_Blue", "cl_Yellow",], Items: ["Bicolour", "Horizontal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/383px-Flag_of_Ukraine.svg.png" },
  { couname: "United Arab Emirates", region: "rgn_Asia", Colors: ["cl_Green", "cl_White", "cl_Black", "cl_Red",], Items: ["Triband", "Horizontal", "Vertical",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/383px-Flag_of_the_United_Arab_Emirates.svg.png" },
  { couname: "United States", region: "rgn_North America", Colors: ["cl_Red", "cl_White", "cl_Blue",], Items: ["Horizontal", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/383px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" },
  { couname: "Uruguay", region: "rgn_South America", Colors: ["cl_Yellow", "cl_Blue", "cl_White",], Items: ["Horizontal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/383px-Flag_of_Uruguay.svg.png" },
  { couname: "Uzbekistan", region: "rgn_Asia", Colors: ["cl_Blue", "cl_White", "cl_Green", "cl_Red",], Items: ["Horizontal", "Sun", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/383px-Flag_of_Uzbekistan.svg.png" },
  { couname: "Vanuatu", region: "rgn_Oceania", Colors: ["cl_Red", "cl_Green", "cl_Black", "cl_Yellow",], Items: ["Bicolour", "Horizontal", "Triangle",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Vanuatu.svg/375px-Flag_of_Vanuatu.svg.png" },
  { couname: "Venezuela", region: "rgn_South America", Colors: ["cl_Yellow", "cl_Blue", "cl_Red",], Items: ["Triband", "Horizontal", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/383px-Flag_of_Venezuela.svg.png" },
  { couname: "Vietnam", region: "rgn_Asia", Colors: ["cl_Red", "cl_Yellow",], Items: ["Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/383px-Flag_of_Vietnam.svg.png" },
  { couname: "Wales", region: "rgn_Europe", Colors: ["cl_White", "cl_Green", "cl_Red",], Items: ["Bicolour", "Horizontal", "Animal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Flag_of_Wales.svg/383px-Flag_of_Wales.svg.png" },
  { couname: "yemen", region: "rgn_Asia", Colors: ["cl_Red", "cl_White", "cl_Black",], Items: ["Triband", "Horizontal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_yemen.svg/383px-Flag_of_yemen.svg.png" },
  { couname: "Zambia", region: "rgn_Africa", Colors: ["cl_Red", "cl_Black", "cl_Orange", "cl_Green",], Items: ["Triband", "Vertical", "Animal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Zambia.svg/383px-Flag_of_Zambia.svg.png" },
  { couname: "Zanzibar", region: "rgn_Africa", Colors: ["cl_Blue", "cl_Black", "cl_Green", "cl_Yellow",], Items: ["Triband", "Horizontal",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Zanzibar.svg/383px-Flag_of_Zanzibar.svg.png" },
  { couname: "Zimbabwe", region: "rgn_Africa", Colors: ["cl_Red", "cl_Yellow", "cl_Green", "cl_Black", "cl_White",], Items: ["Horizontal", "Triangle", "Animal", "Stars",], Flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Flag_of_Zimbabwe.svg/383px-Flag_of_Zimbabwe.svg.png" },

]

  const regionPossible = ["rgn_Europe", "rgn_Asia", "rgn_Oceania", "rgn_South America", "rgn_North America", "rgn_Africa"]
  const colorsPossible = ["cl_Red", "cl_Blue", "cl_Orange", "cl_Green", "cl_Yellow", "cl_White", "cl_Black"] 
  const itemsPossible = ["Triband", "Bicolour", "Cross", "Letters", "Coat", "Horizontal", "Vertical", "Triangle", "Circle", "Animal", "Sword", "Moon", "Sun", "Stars"]


  let currentPuzzle = 0;
  let currentGrid = []
  let currentPlayers = [];



  //loadLocalStorage();
  initHelpModal();
  initHelpModal2();
  resetBt();

  //createGrid(manyRandomPuzzle());


  //puzzle1 = getItemByOrder(currentPuzzle);

  puzzle1 = manyRandomPuzzle()[0]
  createGrid(puzzle1);









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


    if (conditn.includes("rgn_")) {
      return "region";
    } else if (conditn.includes("cl_")) {
      return "Colors";
    }
    else  {
          return "Items";
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



      checkd = flags.filter(item =>
        item[x].includes(condit[0]) &&
        item[y].includes(condit[1])
      )

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
      "rgn", "cl", "items", "rgn", "cl", "items", "rgn", "cl", "items", "rgn", "cl", "items",
    ];
    var CONDITIONS2 = [
      "cl", "items", "cl", "items", "cl", "items", "cl", "items", "cl", "items", "cl", "items",
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
        if (item === 'cl') {
          return getRandomItem(colorsPossible);
        } else if (item === 'rgn') {
          return getRandomItem(regionPossible);
        } else  {
          return getRandomItem(itemsPossible);
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

  function manyRandomPuzzle() {

    let iterations = 0; // Initialize iteration counter
    do {
      puzzle0 = RandomizePuzzle();
      totality = [];
      for (let i = 0; i < puzzle0[0].prow.length; i++) {
        for (let j = 0; j < puzzle0[0].pcolumn.length; j++) {
          totality.push(chequeo([puzzle0[0].prow[i], puzzle0[0].pcolumn[j]]).length);
        }
      }
      iterations++;
      if (iterations >= 100000) {
        break;
      }

    } while (Math.min(...totality) < 3);
    puzzle0[0].order = "##"
    return puzzle0
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
    let gridCells = [];
    const gridContainer = document.getElementById('gridContainer');


    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        const cell = document.createElement("div");
        cell.dataset.row = row;
        cell.dataset.col = col;
        formatGridCell(puzzle1, row, col, cell)
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



  function formatGridCell(puzzle1, row, col, cell) {
    row = row * 1;
    col = col * 1;
    if (row > 0 && col > 0) {
      cell.innerHTML = "";
      cell.classList.add("grid-playercell");







      cell.addEventListener('click', () => {
        if (cell.textContent === '') {
          showModal(puzzle1, row, col, cell);
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

      if (puzzle1.pcolumn[col - 1].includes("rgn_")) {
        // Slice the string from index 3 and assign it to cell.textContent
        cell.innerHTML = "Region:" + "<br>" + puzzle1.pcolumn[col - 1].slice(4);
      }
      else if (puzzle1.pcolumn[col - 1].includes("cl_")) {
        // Slice the string from index 3 and assign it to cell.textContent
        cell.innerHTML = "Contains:" + "<br>" + puzzle1.pcolumn[col - 1].slice(3);
      }
      else{
      cell.textContent = puzzle1.pcolumn[col - 1];
      }
      cell.style.border = 'none';
    }


    // These lines create the rows

    if ((row === 1 && col === 0) || (row === 2 && col === 0) || (row === 3 && col === 0)) {
      cell.classList.add("grid-puzzlecell");
      if ((row === 1 && col === 0) || (row === 2 && col === 0) || (row === 3 && col === 0)) {
        cell.classList.add("grid-puzzlecell");
        if (puzzle1.prow[row - 1].includes("rgn_")) {
          // Slice the string from index 3 and assign it to cell.textContent
          cell.innerHTML = "Region:" + "<br>" + puzzle1.prow[row - 1].slice(4);
        }
        else if (puzzle1.prow[row - 1].includes("cl_")) {
          // Slice the string from index 3 and assign it to cell.textContent
          cell.innerHTML = "Contains:" + "<br>" + puzzle1.prow[row - 1].slice(3);
        }
        else {
          cell.textContent = puzzle1.prow[row - 1];
        }
        cell.style.border = 'none';
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
 

          showModal2(puzzle1, cell.dataset.row, cell.dataset.col, cell);
        
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
    button.textContent = 'RELOAD';
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




  function isStringPresentWithDifferentOrderAndStat(array, searchString, orderToAvoid) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        const element = array[i][j];
        if (typeof element === 'object' && element.order !== orderToAvoid && element.row1col1 && element.row1col1.name === searchString && element.row1col1.stat === 'w') {
          return true;
        }
      }
    }
    return false;
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
    flags.filter(item => {
      const normalizedName = item.couname.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return normalizedName.includes(normalizedFilter);
    })
      .forEach(item => {
        if (count < 10) {
          var li = document.createElement("li");

          li.innerHTML = `${item.couname} `;



          li.addEventListener('click', () => {
            // When a suggestion is clicked, populate the input field with the clicked name
            document.getElementById('textInput').value = item.couname;
            // Clear the suggestion list
            nameList.innerHTML = "";

            if ((item.region.includes(puzzle1.prow[row - 1]) || item.Items.includes(puzzle1.prow[row - 1]) || item.Colors.includes(puzzle1.prow[row - 1]) )

              &&
              (item.region.includes(puzzle1.pcolumn[col - 1]) || item.Items.includes(puzzle1.pcolumn[col - 1]) || item.Colors.includes(puzzle1.pcolumn[col - 1]) || item.WC.includes(puzzle1.pcolumn[col - 1].substring(puzzle1.pcolumn[col - 1].length - 4)) || item.Euro.includes(puzzle1.pcolumn[col - 1].substring(puzzle1.pcolumn[col - 1].length - 4)))) {
              
              
              
              cell.classList.remove("grid-playercell");



              cell.classList.add("grid-cellsolved");



              if (cell.textContent == "") {
                const img = document.createElement("img");  
                img.src = item.Flag
                cell.textContent = " "
                img.width = 50;
                img.height = 35;
                cell.appendChild(img);
          


                //cell.textContent = `${item.couname} `; // Set the text content of the cell directly








              }
              answers.push(item.couname)
            } else {
              const img = document.createElement("img");
              img.src = item.Flag
              cell.textContent = " "
              img.width = 50;
              img.height = 35;
              cell.appendChild(img);
              cell.classList.remove("grid-cell");
              cell.classList.add("grid-cellunsolved");
              answers.push("ERROR")



            }
            modal.style.display = 'none';

          });
          nameList.appendChild(li);
          cell.addEventListener('click', () => {
            if (cell.textContent === " ") {
              showModal2(puzzle1, row, col, cell);
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
      const flagImg = `<img src="${item.Flag}" alt="Flag2" style="width: 20px; height: auto; margin-right: 5px;">`;
      lio.innerHTML = `${flagImg} ${item.couname}`;

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




  function resetBt() {
    const btn00 = document.getElementById("reset-button");
    btn00.addEventListener("click", function () {

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




  function getTheDate(whatdate) {
    // puzzle1 = [{ prow: ["PO", "BRA", "Played WC 2022"], pcolumn: ["Real Madrid", "Liverpool", "ChampionsWin"], category: "Champions" }],



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
    modal.style.width = '80%'; // Adjusted width for better visibility
    modal.style.maxWidth = '290px'; // Added maximum width to prevent it from getting too wide
    modal.style.height = '100%'; // Adjusted height to auto
    modal.style.top = '50%';
    modal.style.left = '60%';
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


    // Array of month names for better readability
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


    const startDate = new Date('2023-01-01');

    // Set the end date to March 7, 2024
    const today = new Date();
    const endDate = new Date(today);
    endDate.setDate(today.getDate());

    // Loop through each day from end date to start date in reverse order
    for (let date = endDate; date >= startDate; date.setDate(date.getDate() - 1)) {
      // Create a new list item
      const listItem = document.createElement('li');

      // Format the date as "1/March/2024" without the dot at the beginning
      const dateString = `${date.getDate()}/${months[date.getMonth()]}/${date.getFullYear()}`;
      limit2 = getTheDate(dateStringToDate(dateString));

      const scores = countWStatsForOrder(currentGrid, limit2.toString(), "w")
      const scoresrep = countWStatsForOrder(currentGrid, limit2.toString(), "r")



      var dateString2 = `[${limit2}] - ` + getItemByOrder(limit2.toString()).result + " (" + getItemByOrder(limit2.toString()).year + ")" + " [" + (scores + scoresrep) + "/9]";
      // Set the text content of the list item to the formatted date

      // Add class for styling
      listItem.classList.add('dateItem');

      if ((scores + scoresrep) > 0 && scores < 9) {

        listItem.style.backgroundColor = 'rgba(255, 165, 0, 0.2)'; // Light orange background
        listItem.style.fontWeight = 'bold'; // Bold font weight  

      }

      if (scores === 9) {

        listItem.style.backgroundColor = 'rgba(144, 238, 144, 0.5)'; // Lighter green background
        listItem.style.fontWeight = 'bold'; // Bold font weight

        if (scoresrep === 0) {
          dateString2 = dateString2 + " ⭐"
        }
      }
      listItem.textContent = dateString2

      listItem.addEventListener('click', function () {
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
      // Append the list item to modal3dates
      modal3dates.appendChild(listItem);
    }

    modal.addEventListener('click', function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
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

    setTimeout(function () {
      showModal5();
    }, 800); // 1500 milliseconds = 1.5 seconds
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




    // Create an array of objects containing text and corresponding CSS classes
    var itemsToAdd = [
      { text: "SCORE: " + (answers.filter(element => element !== "ERROR").length) + "/" + 9 + "  ", className: "format1" },
      { text: "", className: "" },
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
    modal.style.height = '50%'; // Adjusted height to auto
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









