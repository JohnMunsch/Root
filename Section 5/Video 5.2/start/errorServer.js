'use strict';
let http = require('http');

let crayons = [
  { name: 'Red', hexColor: '#ED0A3F' },
  { name: 'Maroon', hexColor: '#C32148' },
  { name: 'Scarlet', hexColor: '#FD0E35' },
  { name: 'Brick Red', hexColor: '#C62D42' },
  { name: 'English Vermilion', hexColor: '#CC474B' },
  { name: 'Madder Lake', hexColor: '#CC3336' },
  { name: 'Permanent Geranium Lake', hexColor: '#E12C2C' },
  { name: 'Maximum Red', hexColor: '#D92121' },
  { name: 'Indian Red', hexColor: '#B94E48' },
  { name: 'Orange-Red', hexColor: '#FF5349' },
  { name: 'Sunset Orange', hexColor: '#FE4C40' },
  { name: 'Bittersweet', hexColor: '#FE6F5E' },
  { name: 'Dark Venetian Red', hexColor: '#B33B24' },
  { name: 'Venetian Red', hexColor: '#CC553D' },
  { name: 'Light Venetian Red', hexColor: '#E6735C' },
  { name: 'Vivid Tangerine', hexColor: '#FF9980' },
  { name: 'Middle Red', hexColor: '#E58E73' },
  { name: 'Burnt Orange', hexColor: '#FF7F49' },
  { name: 'Red-Orange', hexColor: '#FF681F' },
  { name: 'Orange', hexColor: '#FF8833' },
  { name: 'Macaroni and Cheese', hexColor: '#FFB97B' },
  { name: 'Middle Yellow Red', hexColor: '#ECB176' },
  { name: 'Mango Tango', hexColor: '#E77200' },
  { name: 'Yellow-Orange', hexColor: '#FFAE42' },
  { name: 'Maximum Yellow Red', hexColor: '#F2BA49' },
  { name: 'Banana Mania', hexColor: '#FBE7B2' },
  { name: 'Maize', hexColor: '#F2C649' },
  { name: 'Orange-Yellow', hexColor: '#F8D568' },
  { name: 'Goldenrod', hexColor: '#FCD667' },
  { name: 'Dandelion', hexColor: '#FED85D' },
  { name: 'Yellow', hexColor: '#FBE870' },
  { name: 'Green-Yellow', hexColor: '#F1E788' },
  { name: 'Middle Yellow', hexColor: '#FFEB00' },
  { name: 'Olive Green', hexColor: '#B5B35C' },
  { name: 'Spring Green', hexColor: '#ECEBBD' },
  { name: 'Maximum Yellow', hexColor: '#FAFA37' },
  { name: 'Canary', hexColor: '#FFFF99' },
  { name: 'Lemon Yellow', hexColor: '#FFFF9F' },
  { name: 'Maximum Green Yellow', hexColor: '#D9E650' },
  { name: 'Middle Green Yellow', hexColor: '#ACBF60' },
  { name: 'Inchworm', hexColor: '#AFE313' },
  { name: 'Light Chrome Green', hexColor: '#BEE64B' },
  { name: 'Yellow-Green', hexColor: '#C5E17A' },
  { name: 'Maximum Green', hexColor: '#5E8C31' },
  { name: 'Asparagus', hexColor: '#7BA05B' },
  { name: 'Granny Smith Apple', hexColor: '#9DE093' },
  { name: 'Fern', hexColor: '#63B76C' },
  { name: 'Middle Green', hexColor: '#4D8C57' },
  { name: 'Green', hexColor: '#3AA655' },
  { name: 'Medium Chrome Green', hexColor: '#6CA67C' },
  { name: 'Forest Green', hexColor: '#5FA777' },
  { name: 'Sea Green', hexColor: '#93DFB8' },
  { name: 'Shamrock', hexColor: '#33CC99' },
  { name: 'Mountain Meadow', hexColor: '#1AB385' },
  { name: 'Jungle Green', hexColor: '#29AB87' },
  { name: 'Caribbean Green', hexColor: '#00CC99' },
  { name: 'Tropical Rain Forest', hexColor: '#00755E' },
  { name: 'Middle Blue Green', hexColor: '#8DD9CC' },
  { name: 'Pine Green', hexColor: '#01786F' },
  { name: 'Maximum Blue Green', hexColor: '#30BFBF' },
  { name: 'Robins Egg Blue', hexColor: '#00CCCC' },
  { name: 'Teal Blue', hexColor: '#008080' },
  { name: 'Light Blue', hexColor: '#8FD8D8' },
  { name: 'Aquamarine', hexColor: '#95E0E8' },
  { name: 'Turquoise Blue', hexColor: '#6CDAE7' },
  { name: 'Outer Space', hexColor: '#2D383A' },
  { name: 'Sky Blue', hexColor: '#76D7EA' },
  { name: 'Middle Blue', hexColor: '#7ED4E6' },
  { name: 'Blue-Green', hexColor: '#0095B7' },
  { name: 'Pacific Blue', hexColor: '#009DC4' },
  { name: 'Cerulean', hexColor: '#02A4D3' },
  { name: 'Maximum Blue', hexColor: '#47ABCC' },
  { name: 'Blue (I)', hexColor: '#4997D0' },
  { name: 'Cerulean Blue', hexColor: '#339ACC' },
  { name: 'Cornflower', hexColor: '#93CCEA' },
  { name: 'Green-Blue', hexColor: '#2887C8' },
  { name: 'Midnight Blue', hexColor: '#00468C' },
  { name: 'Navy Blue', hexColor: '#0066CC' },
  { name: 'Denim', hexColor: '#1560BD' },
  { name: 'Blue (III)', hexColor: '#0066FF' },
  { name: 'Cadet Blue', hexColor: '#A9B2C3' },
  { name: 'Periwinkle', hexColor: '#C3CDE6' },
  { name: 'Blue (II)', hexColor: '#4570E6' },
  { name: 'Wild Blue Yonder', hexColor: '#7A89B8' },
  { name: 'Indigo', hexColor: '#4F69C6' },
  { name: 'Manatee', hexColor: '#8D90A1' },
  { name: 'Cobalt Blue', hexColor: '#8C90C8' },
  { name: 'Celestial Blue', hexColor: '#7070CC' },
  { name: 'Blue Bell', hexColor: '#9999CC' },
  { name: 'Maximum Blue Purple', hexColor: '#ACACE6' },
  { name: 'Violet-Blue', hexColor: '#766EC8' },
  { name: 'Blue-Violet', hexColor: '#6456B7' },
  { name: 'Ultramarine Blue', hexColor: '#3F26BF' },
  { name: 'Middle Blue Purple', hexColor: '#8B72BE' },
  { name: 'Purple Heart', hexColor: '#652DC1' },
  { name: 'Royal Purple', hexColor: '#6B3FA0' },
  { name: 'Violet (II)', hexColor: '#8359A3' },
  { name: 'Medium Violet', hexColor: '#8F47B3' },
  { name: 'Wisteria', hexColor: '#C9A0DC' },
  { name: 'Lavender (I)', hexColor: '#BF8FCC' },
  { name: 'Vivid Violet', hexColor: '#803790' },
  { name: 'Maximum Purple', hexColor: '#733380' },
  { name: 'Purple Mountains Majesty', hexColor: '#D6AEDD' },
  { name: 'Fuchsia', hexColor: '#C154C1' },
  { name: 'Pink Flamingo', hexColor: '#FC74FD' },
  { name: 'Violet (I)', hexColor: '#732E6C' },
  { name: 'Brilliant Rose', hexColor: '#E667CE' },
  { name: 'Orchid', hexColor: '#E29CD2' },
  { name: 'Plum', hexColor: '#8E3179' },
  { name: 'Medium Rose', hexColor: '#D96CBE' },
  { name: 'Thistle', hexColor: '#EBB0D7' },
  { name: 'Mulberry', hexColor: '#C8509B' },
  { name: 'Red-Violet', hexColor: '#BB3385' },
  { name: 'Middle Purple', hexColor: '#D982B5' },
  { name: 'Maximum Red Purple', hexColor: '#A63A79' },
  { name: 'Jazzberry Jam', hexColor: '#A50B5E' },
  { name: 'Eggplant', hexColor: '#614051' },
  { name: 'Magenta', hexColor: '#F653A6' },
  { name: 'Cerise', hexColor: '#DA3287' },
  { name: 'Wild Strawberry', hexColor: '#FF3399' },
  { name: 'Lavender (II)', hexColor: '#FBAED2' },
  { name: 'Cotton Candy', hexColor: '#FFB7D5' },
  { name: 'Carnation Pink', hexColor: '#FFA6C9' },
  { name: 'Violet-Red', hexColor: '#F7468A' },
  { name: 'Razzmatazz', hexColor: '#E30B5C' },
  { name: 'Pig Pink', hexColor: '#FDD7E4' },
  { name: 'Carmine', hexColor: '#E62E6B' },
  { name: 'Blush', hexColor: '#DB5079' },
  { name: 'Tickle Me Pink', hexColor: '#FC80A5' },
  { name: 'Mauvelous', hexColor: '#F091A9' },
  { name: 'Salmon', hexColor: '#FF91A4' },
  { name: 'Middle Red Purple', hexColor: '#A55353' },
  { name: 'Mahogany', hexColor: '#CA3435' },
  { name: 'Melon', hexColor: '#FEBAAD' },
  { name: 'Pink Sherbert', hexColor: '#F7A38E' },
  { name: 'Burnt Sienna', hexColor: '#E97451' },
  { name: 'Brown', hexColor: '#AF593E' },
  { name: 'Sepia', hexColor: '#9E5B40' },
  { name: 'Fuzzy Wuzzy', hexColor: '#87421F' },
  { name: 'Beaver', hexColor: '#926F5B' },
  { name: 'Tumbleweed', hexColor: '#DEA681' },
  { name: 'Raw Sienna', hexColor: '#D27D46' },
  { name: 'Van Dyke Brown', hexColor: '#664228' },
  { name: 'Tan', hexColor: '#D99A6C' },
  { name: 'Desert Sand', hexColor: '#EDC9AF' },
  { name: 'Peach', hexColor: '#FFCBA4' },
  { name: 'Burnt Umber', hexColor: '#805533' },
  { name: 'Apricot', hexColor: '#FDD5B1' },
  { name: 'Almond', hexColor: '#EED9C4' },
  { name: 'Raw Umber', hexColor: '#665233' },
  { name: 'Shadow', hexColor: '#837050' },
  { name: 'Raw Sienna (I)', hexColor: '#E6BC5C' },
  { name: 'Timberwolf', hexColor: '#D9D6CF' },
  { name: 'Gold (I)', hexColor: '#92926E' },
  { name: 'Gold (II)', hexColor: '#E6BE8A' },
  { name: 'Silver', hexColor: '#C9C0BB' },
  { name: 'Copper', hexColor: '#DA8A67' },
  { name: 'Antique Brass', hexColor: '#C88A65' },
  { name: 'Black', hexColor: '#000000' },
  { name: 'Charcoal Gray', hexColor: '#736A62' },
  { name: 'Gray', hexColor: '#8B8680' },
  { name: 'Blue-Gray', hexColor: '#C8C8CD' },
  { name: 'White', hexColor: '#FFFFFF' }
];
let port = 2352;
let response = 0;

http.createServer(function (req, res) {
  // Without this we aren't going to be able to call from a server running on port 3000
  // to one running on this port. They're considered to be different servers and thus
  // your browser will try to protect you from harmful code.
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  switch (response % 4) {
    case 0:
      console.log('Success');

      // Return the data with a JSend wrapper.
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({
        status: 'success',
        data: crayons
      }));
      break;
    case 1:
      console.log('Unauthorized');

      // Return an unauthorized error.
      res.statusCode = 401;
      res.end();
      break;
    case 2:
      console.log('Fail');

      // Return a JSend failure.
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({
        status: 'fail',
        data: []
      }));
      break;
    case 3:
      console.log('Error');

      // Return a JSend error.
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({
        status: 'error',
        message: 'Some kind of error message.',
        data: []
      }));
      break;
  }

  response++;
}).listen(2352);

console.log(`Server listening on port ${port}`);
