
    
    

const locationsDB = {
    // Format: "Location Name": { x: [horizontal pixel], y: [vertical pixel] }
    "Pink Fruit Left of Hub Left": {x: 16685, y: 8364},
    "Pink Fruit Left of Hub Right": {x: 16821, y: 8366},
    "Pink Fruit above Egg Room": {x: 16347, y: 5780},
    "Pink Fruit by First Mouse Head Hitting Lever": {x: 25509, y: 8777},
    "Stamp Chest": {x: 15097, y: 7421},
    "Pencil Chest": {x: 12985, y: 7132},
    "Top Chest": {x: 13177, y: 6899},
    "65th Egg Chest": {x: 12697, y: 6800},
    "Office Key Chest": {x: 15768, y: 6390},
    "Virtual Egg Chest": {x: 13806, y: 7830},
    "Holiday Egg Chest": {x: 16208, y: 7277},
    "Rain Egg Chest": {x: 15824, y: 7469},
    // "Activate Bird Fast Travel": { x: 0, y: 0 },
    "Animal Flute Chest": {x: 10152, y: 6797},
    "Pink Fruit by Flute Chest": {x: 10970, y: 7374},
    "Sweet Egg Chest": {x: 16831, y: 4229},
    "Pink Fruit by Mural Bunny": {x: 24411, y: 8508},
    "Pink Fruit by Planet Egg Chest Left": {x: 23973, y: 9535},
    "Pink Fruit by Planet Egg Chest Right": {x: 24455, y: 9532},
    "Match under Mouse Statue": {x: 24453, y: 9249},
    "Planet Egg Chest": {x: 24749, y: 9630},
    "Match Above Egg Room": {x: 16345, y: 6100},
    "Clover Egg Chest": {x: 8431, y: 12727},
    "Match in Tutorial Chest": {x: 9865, y: 10036},
    "Squirrel First Candle": {x: 16729, y: 9945},
    "Gorgeous Egg Chest": {x: 16976, y: 9634},
    "Map Chest": {x: 17738, y: 9205},
    "Remote Chest": {x: 11834, y: 13812},
    "Iridescent Egg Chest": {x: 13568, y: 13090},
    "Ice Egg Chest": {x: 15104, y: 11216},
    "Pink Fruit above Remote Chest": {x: 11357, y: 13285},
    "Pink Fruit by Breakout Game Right": {x: 11400, y: 13525},
    "Blue Fruit by Breakout Game Left": {x: 10393, y: 13038},
    "Neon Egg Chest": {x: 9968, y: 13088},
    "E. Medal Chest": {x: 8005, y: 14927},
    "Match in Fish Mural Room Chest": {x: 12361, y: 8119},
    "Pink Fruit by Fireball Thrower": {x: 6843, y: 7424},
    "Mystic Egg Chest": {x: 9391, y: 7327},
    "Pink Fruit in Bottom Right of Fish Bubble Column": {x: 9242, y: 8963},
    "Great Egg Chest": {x: 12991, y: 9538},
    "Big Blue Fruit after Cranes": {x: 13130, y: 9525},
    "Pink Fruit in Bottom Left of Fish Bubble Column": {x: 7463, y: 8872},
    "Normal Egg Chest": {x: 7471, y: 9393},
    "Dazzle Egg Chest": {x: 3965, y: 7689},
    "Pink Fruit in Fish Upper Phone Room Bottom": {x: 3001, y: 8504},
    "Pink Fruit in Fish Upper Phone Room Top": {x: 2477, y: 7877},
    "Pink Fruit below Fish Upper Phone Room Top": {x: 3340, y: 8871},
    "Sunset Egg Chest": {x: 2719, y: 9893},
    "Blue Fruit below Fish Upper Phone Room Bottom": {x: 3918, y: 9582},
    "Pink Fruit before First Seahorse Fight": {x: 5641, y: 9116},
    "Blue Fruit by B. Wand Chest": {x: 3576, y: 10520},
    "B. Wand Chest": { x: 2857, y: 10615 },
    "Pink Fruit by Ancient Egg Chest Left": {x: 549, y: 7152},
    "Pink Fruit above Fish Fast Travel": {x: 1800, y: 7986},
    "Ancient Egg Chest": {x: 1326, y: 6652},
    "Blue Fruit by Ancient Egg Chest Right": {x: 1799, y: 6700},
    //"Activate Fish Fast Travel": { x: 0, y: 0 },
    "Pink Fruit by Fish Fast Travel": {x: 841, y: 9153},
    "Galaxy Egg Chest": {x: 1231, y: 9988},
    "Pink Fruit in Fish Pipe Maze Left": {x: 2233, y: 7381},
    "Blue Fruit in Fish Pipe Maze Right": {x: 5596, y: 7330},
    "Pink Fruit in Fish Pipe Maze Middle": {x: 4733, y: 7383},
    "Friendship Egg Chest": {x: 3489, y: 5621},
    "Magic Egg Chest": {x: 2766, y: 7373},
    "Pink Fruit by Fish Lower Phone Room": {x: 4583, y: 11647},
    "Pink Fruit by Penguin Candle Top": {x: 6262, y: 10330},
    "Blue Fruit by Penguin Candle Bottom": {x: 6268, y: 10623},
    "Fish Candle in Penguin Room": {x: 7419, y: 10714},
    "Goodnight Egg Chest": {x: 6991, y: 10421},
    "Blue Fruit in Whale Fight": {x: 2713, y: 13711},
    "Brick Egg Chest": {x: 8673, y: 13614},
    "Scarlet Egg Chest": {x: 30079, y: 13901},
    "B. Flame": {x: 2878, y: 14746},
    "Pink Fruit by Water Spike Bunny": {x: 15529, y: 9056},
    "Pink Fruit in Bonefish Abyss": {x: 4487, y: 16061},
    //"Activate Bone Fish Fast Travel": { x: 0, y: 0 },
    "Pink Fruit left of Lower Bear Key Room": {x: 27722, y: 7089},
    "Pink Fruit by Lower Bear Key Chest": {x: 28971, y: 6901},
    "Key Chest in Lower Bear": {x: 29593, y: 6990},
    "Blue Fruit in Capybara Room Top Left": {x: 27186, y: 3466},
    "Blue Fruit in Capybara Room Top Right": {x: 28538, y: 3467},
    "Pink Fruit in Capybara Room Bottom Right": {x: 28148, y: 4135},
    "Pink Fruit in Capybara Room Bottom Left": {x: 27670, y: 4188},
    "Key Chest in Upper Bear": {x: 25559, y: 4544},
    "Pink Fruit below Capybara Room": {x: 27243, y: 5677},
    "Zen Egg Chest": {x: 25759, y: 4449},
    "Blue Fruit by Universal Basic Egg Chest": {x: 24843, y: 4932},
    "Universal Basic Egg Chest": {x: 24511, y: 4493},
    "Value Egg Chest": {x: 28925, y: 4180},
    "Future Egg Chest": {x: 750, y: 6151},
    "Pink Fruit in Chinchilla Vines Room": {x: 30458, y: 6293},
    "Bear Candle in Dark Maze": {x: 25851, y: 5811},
    "Blue Fruit in Bear Dark Maze Right": {x: 26761, y: 5718},
    "Pink Fruit in Bear Dark Maze Left": {x: 25085, y: 5769},
    "Laissez-faire Egg Chest": {x: 24079, y: 5309},
    "S. Medal Chest": {x: 22826, y: 5816},
    "Blue Fruit after First Chameleon Fight": {x: 22777, y: 6294},
    "Slink Chest": {x: 22009, y: 4540},
    "Transcendental Egg Chest": {x: 21536, y: 6005},
    "Pink Fruit by Bear Kangaroo Waterfall": {x: 20758, y: 6292},
    "Blue Fruit above Bear Kangaroo Waterfall": {x: 20904, y: 4735},
    "Pink Fruit before Bear Middle Phone Room": {x: 19275, y: 3945},
    "Post Modern Egg Chest": {x: 18992, y: 5309},
    "Pink Fruit before Truth Egg": {x: 18791, y: 5720},
    "Truth Egg Chest": {x: 19950, y: 5524},
    "Pink Fruit in Bear Middle Phone Room": {x: 22247, y: 2624},
    //"Activate Bear Fast Travel": { x: 0, y: 0 },
    "Chaos Egg Chest": {x: 30223, y: 3053},
    "Pink Fruit by Monkey": {x: 29928, y: 3055},
    "Shadow Egg Chest": {x: 29695, y: 1397},
    "Pink Fruit by Statue Bunny": {x: 24842, y: 3561},
    "Match in Bear Area": {x: 21290, y: 2908},
    "Pink Fruit in Bear Upper Phone Room Left": {x: 19653, y: 897},
    "Pink Fruit in Bear Upper Phone Room Right": {x: 20713, y: 897},
    "Swan Egg Chest": {x: 23645, y: 222},
    "Pink Fruit right of Otters": {x: 28439, y: 224},
    //"Defeated Chameleon": { x: 0, y: 0 },
    "Pink Fruit in Second Chameleon Fight": {x: 21384, y: 1738},
    "V. Flame": {x: 20115, y: 1737},
    "Blue Fruit by V. Flame": {x: 19755, y: 1789},
    "Blue Fruit behind Entry Chameleon": {x: 25607, y: 6849},
    "Razzle Egg Chest": {x: 25902, y: 6750},
    "Wolf Disc Shrine": {x: 12504, y: 6142},
    "Pink Fruit in Mock Disc Phone Room": {x: 11254, y: 5029},
    "Dog Dark Room Candle": {x: 8905, y: 5714},
    "Pink Fruit in Dog Dark Room": {x: 8615, y: 6008},
    "Pink Fruit right of Chinchilla Skull Room": {x: 5640, y: 4593},
    "Pink Fruit before Mock Disc Chest": {x: 7558, y: 4590},
    "Orange Egg Chest": {x: 10688, y: 5309},
    "Upside Down Egg Chest": {x: 5645, y: 4228},
    "Mock Disc Chest": {x: 12552, y: 4734},
    "Sour Egg Chest": {x: 15678, y: 5215},
    "Blue Fruit after Dachshund Tunnels": {x: 15481, y: 5624},
    "Red Egg Chest": {x: 3584, y: 5123},
    "Evil Egg Chest": {x: 9807, y: 4045},
    "Pink Fruit by Turtle Pool": {x: 11352, y: 3940},
    "Dog Boxed Candle": {x: 8712, y: 3700},
    "Pink Fruit by Barcode Bunny": {x: 8906, y: 2815},
    //"Activate Dog Fast Travel": { x: 0, y: 0 },
    "Pink Fruit by Dog Fast Travel": {x: 6217, y: 1781},
    "Pink Fruit by Swordfish Lake": {x: 5543, y: 1832},
    "Pink Fruit below Raw Egg Puzzle Entrance": {x: 10537, y: 851},
    "Pink Fruit left of Mock Disc Shrine": {x: 12364, y: 657},
    "Blue Fruit by Raw Egg Puzzle Entrance": {x: 10826, y: 325},
    "Raw Egg Chest": {x: 9678, y: 940},
    "P. Flame": {x: 16321, y: 1832},
    "Blue Fruit by P. Flame": {x: 16869, y: 1975},
    "Blue Fruit above Dog Fast Travel": {x: 5977, y: 989},
    "Brown Egg Chest": {x: 4591, y: 943},
    "Pink Fruit by Brown Egg Chest": {x: 4878, y: 653},
    "Reference Egg Chest": {x: 3056, y: 751},
    "Crystal Egg Chest": {x: 7326, y: 17143},
    "Forbidden Egg Chest": {x: 320, y: 1594},
    "Big Blue Fruit before Disc Spike Bunny": {x: 1562, y: 794},
    "Big Blue Fruit after Disc Spike Bunny": {x: 166, y: 983},
    "Plant Egg Chest": {x: 1470, y: 5071},
    "Blue Fruit above Plant Egg Chest": {x: 219, y: 4452},
    "Dog Candle in Many Switches Room": {x: 4011, y: 4236},
    "Pink Fruit in Bat Room": {x: 3912, y: 2819},
    "Dog Candle in Bat Room": {x: 4824, y: 3003},
    "Key Chest in Dog with Chinchilla Crank": {x: 2040, y: 4183},
    //"Switch next to Bat Room": { x: 0, y: 0 },
    "Egg As A Service Chest": {x: 3726, y: 2958},
    "B. Ball Chest": {x: 1083, y: 3943},
    "Blue Fruit in Kangaroo Room Hand": {x: 1798, y: 3515},
    "Blue Fruit in Kangaroo Room Tail": {x: 169, y: 4232},
    "Pink Fruit in Kangaroo Room Foot": {x: 1510, y: 4228},
    "Vanity Egg Chest": {x: 319, y: 2285},
    "Match in Switch-Bounce Room Chest": {x: 11832, y: 2961},
    "Blue Fruit in Dog Switch Maze": {x: 11833, y: 2383},
    "Dog Candle in Disc Switch Maze": {x: 13128, y: 2678},
    "Depraved Egg Chest": {x: 13135, y: 2957},
    "Pink Fruit right of Dog Switch Maze Left": {x: 13561, y: 2862},
    "Pink Fruit right of Dog Switch Maze Right": {x: 14181, y: 3056},
    "Match by Dog Fish Pipe Chest": {x: 16440, y: 3507},
    //"Switch for Post Modern Egg": {x: 17929, y: 5080}, 
    "Pink Fruit in Bottom of Dog Elevator": {x: 17880, y: 5770},
    "Blue Fruit by Dog Wheel": {x: 16346, y: 5262},
    //  "Can Flip Dog Wheel": {x: 16971, y: 5273},
    "Big Egg Chest": {x: 17839, y: 702},
    "Blue Fruit in Top of Dog Elevator": {x: 17163, y: 323},
    "Pink Fruit in Dog Elevator near P. Flame Right": {x: 17831, y: 1937},
    "Pink Fruit in Dog Elevator near P. Flame Left": {x: 17402, y: 2434},
    "Pink Fruit by Groundhog": {x: 24032, y: 10676},
    "Frog Candle Switch Carousel": {x: 27818, y: 10472},
    "Pink Fruit by Frog Switch Carousel Top": {x: 28727, y: 9531},
    "Moon Egg Chest": {x: 30559, y: 9054},
    "Promise Egg Chest": {x: 30559, y: 9846},
    "Pink Fruit by Frog Switch Carousel Bottom": {x: 27818, y: 11121},
    "Blue Fruit behind Groundhog": {x: 23206, y: 10472},
    "Travel Egg Chest": {x: 23551, y: 9989},
    "Blue Fruit by Bubble Egg Chest": {x: 25032, y: 11742},
    "Bubble Egg Chest": {x: 26766, y: 10972},
    "Pink Fruit above First Ostrich Fight": {x: 22584, y: 10614},
    "Key Chest by Mouse Head Hitting Lever": {x: 22825, y: 9100},
    "Dream Egg Chest": {x: 22351, y: 10181},
    "Pink Fruit in First Ostrich Fight": {x: 22487, y: 11788},
    "Blue Fruit after First Ostrich Fight": {x: 20713, y: 11550},
    "Fire Egg Chest": {x: 19566, y: 11547},
    "Pink Fruit in Frog Worm Shaft Bottom": {x: 19899, y: 15537},
    "Yoyo Chest": {x: 24167, y: 15532},
    "Sapphire Egg Chest": {x: 22878, y: 14308},
    // "Activate Frog Fast Travel": { x: 0, y: 0 },
    "Pink Fruit in Frog Between Guard Rooms Bottom": {x: 23404, y: 12733},
    "Pink Fruit in Frog Between Guard Rooms Top": {x: 24461, y: 12248},
    "Key Chest in West Frog Guard Room": {x: 21962, y: 12393},
    "Match in Guard Room Chest": {x: 20907, y: 12203},
    "Pink Fruit in Frog East Guard Room": {x: 26279, y: 12104},
    "Key Chest in East Frog Guard Room": {x: 25130, y: 12343},
    "Pink Fruit by Groveling Toad": {x: 24119, y: 14884},
    "Rust Egg Chest": {x: 23213, y: 13954},
    "Jade Egg Chest": {x: 26670, y: 14886},
    "Ruby Egg Chest": {x: 24416, y: 14358},
    "Pink Fruit above Frog Kangaroo Encounter Left": {x: 27049, y: 12686},
    "Pink Fruit above Frog Kangaroo Encounter Right": {x: 28924, y: 12156},
    "Desert Egg Chest": {x: 30605, y: 11740},
    "Pink Fruit by Rat Elevators": {x: 28969, y: 14409},
    "Obsidian Egg Chest": {x: 27149, y: 14693},
    "Pink Fruit by Caged Cats": {x: 27720, y: 16112},
    "Pink Fruit right of Second Ostrich Fight": {x: 28637, y: 16855},
    "Golden Egg Chest": {x: 21005, y: 16854},
    "Blue Fruit by G. Flame Bottom": {x: 29162, y: 16956},
    "Pink Fruit by G. Flame Top": {x: 29783, y: 16331},
    "G. Flame": {x: 29806, y: 16952},
    "Wheel Chest": { x: 985, y: 12386 },
    "Pink Fruit by Lantern Chest": {x: 18986, y: 11699},
    "Blue Fruit in Miasma Above Lantern Chest": {x: 18694, y: 11024},
    //  "Activate Hippo Fast Travel": { x: 0, y: 0 },
    "Lantern Chest": {x: 17639, y: 11645},
    "Pink Fruit in Manticore Room Left": {x: 13800, y: 14264},
    "Pink Fruit in Manticore Room Right": {x: 15480, y: 14983},
    "Big Blue Fruit behind Manticore Wheel": {x: 17352, y: 14643},
    "B.B. Wand Chest": {x: 7897, y: 15424},
    // "First Victory": { x: 0, y: 0 },
    "Blue Fruit by Fireworks": {x: 10727, y: 17142},
    "House Key Drop": {x: 9907, y: 17043},
    "Fanny Pack Chest": {x: 13321, y: 17093},
    "Pickled Egg Chest": {x: 18607, y: 560},
    "Chocolate Egg Chest": {x: 18703, y: 3701},
    "Match in Center Well Chest": {x: 17927, y: 3700},
    "UV Lantern Chest": {x: 361, y: 16665},
    "Invisible Bunny": {x: 18266, y: 8435},
    "Imaginary Bunny": {x: 10776, y: 12683},
    "Flowering Bunny": {x: 7789, y: 10036},
    "Fish Bunny": {x: 12091, y: 8910},
    "Water Spike Bunny": {x: 15695, y: 9040},
    "Chinchilla Bunny": {x: 283, y: 5715},
    "Singing Bunny": {x: 25209, y: 1306},
    "Statue Bunny": {x: 24799, y: 3418},
    "Doodle Bunny": {x: 22390, y: 3132},
    "Lava Bunny": {x: 9704, y: 3010},
    "Disc Spike Bunny": {x: 186, y: 225},
    "Flashing Bunny": {x: 11998, y: 17104},
    "Paper Bunny": {x: 9260, y: 3138},
    "Illusion Bunny": {x: 20594, y: 8438},
    "Community Bunny": {x: 23800, y: 8547},
    "Face Bunny": {x: 10631, y: 11532}
    //"Upgraded to B.B. Wand": {x: 7898, y: 15437}
};
const items = {
    "Pencil": { icon: "assets/icons/Pencil.png" },
    "Stamp": { icon: "assets/icons/Stamp.png" },
    "Wheel": { icon: "assets/icons/Wheel.png" },
    "B. Wand": { icon: "assets/icons/B Wand.png" },
    "B.B. Wand": { icon: "assets/icons/B B Wand.png" },
    "Yoyo": { icon: "assets/icons/Yoyo.png" },
    "Slink": { icon: "assets/icons/Slink.png" },
    "Lantern": { icon: "assets/icons/Lantern.png" },
    "Animal Flute": { icon: "assets/icons/Flute.png" },
    "Disc": { icon: "assets/icons/Disc.png" },
    "B. Ball": { icon: "assets/icons/B Ball.png" },
    "Top": { icon: "assets/icons/Top.png" },
    "UV Lantern": { icon: "assets/icons/UV Lantern.png" },
    "Mock Disc": { icon: "assets/icons/Mock Disc.png" },
    "Remote": { icon: "assets/icons/Remote.png" },
    "Pink Fruit": { icon: "assets/icons/Pink Fruit.png" },
    "Blue Fruit": { icon: "assets/icons/Blue Fruit.png" },
    "Big Blue Fruit": { icon: "assets/icons/Big Blue Fruit.png" },
    "Match": { icon: "assets/icons/Match.png" },
    "Matchbox": { icon: "assets/icons/Match.png" },
    "E. Medal": { icon: "assets/icons/E Medal.png" },
    "S. Medal": { icon: "assets/icons/S Medal.png" },
    "B. Flame": { icon: "assets/icons/B Flame.png" },
    "P. Flame": { icon: "assets/icons/P Flame.png" },      
    "G. Flame": { icon: "assets/icons/G Flame.png" },
    "V. Flame": { icon: "assets/icons/V Flame.png" },
    "Map": { icon: "assets/icons/Map.png" },
    "Key": { icon: "assets/icons/Key.png" },
    "Candle": { icon: "assets/icons/Candle.png" },
    "Key Ring": { icon: "assets/icons/Key.png" },
    "House Key": { icon: "assets/icons/House Key.png" },
    "Fanny Pack": { icon: "assets/icons/Fanny Pack.png" },
    "Firecracker": { icon: "assets/icons/Firecracker.png" },
    "Firecracker Refill": { icon: "assets/icons/Firecracker.png" },
    "65th Egg": { icon: "assets/icons/65th Egg.png" },
    "F. Pack": { icon: "assets/icons/Fanny Pack.png" },
    "K. Shard": { icon: "assets/icons/K Shard.png" },
    "Office Key": {icon: "assets/icons/Office Key.png"},
    "Ancient Egg": {icon: "assets/icons/Ancient Egg.png"},
    "Big Egg": {icon: "assets/icons/Big Egg.png"},
    "Brick Egg": {icon: "assets/icons/Brick Egg.png"},
    "Brown Egg": {icon: "assets/icons/Brown Egg.png"},
    "Bubble Egg": {icon: "assets/icons/Bubble Egg.png"},
    "Chaos Egg": {icon: "assets/icons/Chaos Egg.png"},
    "Chocolate Egg": {icon: "assets/icons/Chocolate Egg.png"},
    "Clover Egg": {icon: "assets/icons/Clover Egg.png"},
    "Crystal Egg": {icon: "assets/icons/Crystal Egg.png"},
    "Dazzle Egg": {icon: "assets/icons/Dazzle Egg.png"},
    "Depraved Egg": {icon: "assets/icons/Depraved Egg.png"},
    "Desert Egg": {icon: "assets/icons/Desert Egg.png"},
    "Dream Egg": {icon: "assets/icons/Dream Egg.png"},
    "Egg As A Service": {icon: "assets/icons/Egg As A Service.png"},
    "Evil Egg": {icon: "assets/icons/Evil Egg.png"},
    "Fire Egg": {icon: "assets/icons/Fire Egg.png"},
    "Forbidden Egg": {icon: "assets/icons/Forbidden Egg.png"},
    "Friendship Egg": {icon: "assets/icons/Friendship Egg.png"},
    "Future Egg": {icon: "assets/icons/Future Egg.png"},
    "Galaxy Egg": {icon: "assets/icons/Galaxy Egg.png"},
    "Golden Egg": {icon: "assets/icons/Golden Egg.png"},
    "Goodnight Egg": {icon: "assets/icons/Goodnight Egg.png"},
    "Gorgeous Egg": {icon: "assets/icons/Gorgeous Egg.png"},
    "Great Egg": {icon: "assets/icons/Great Egg.png"},
    "Holiday Egg": {icon: "assets/icons/Holiday Egg.png"},
    "Ice Egg": {icon: "assets/icons/Ice Egg.png"},
    "Iridescent Egg": {icon: "assets/icons/Iridescent Egg.png"},
    "Jade Egg": {icon: "assets/icons/Jade Egg.png"},
    "Laissez-faire Egg": {icon: "assets/icons/Laissez-faire Egg.png"},
    "Magic Egg": {icon: "assets/icons/Magic Egg.png"},
    "Moon Egg": {icon: "assets/icons/Moon Egg.png"},
    "Mystic Egg": {icon: "assets/icons/Mystic Egg.png"},
    "Neon Egg": {icon: "assets/icons/Neon Egg.png"},
    "Normal Egg": {icon: "assets/icons/Normal Egg.png"},
    "Obsidian Egg": {icon: "assets/icons/Obsidian Egg.png"},
    "Orange Egg": {icon: "assets/icons/Orange Egg.png"},
    "Pickled Egg": {icon: "assets/icons/Pickled Egg.png"},
    "Planet Egg": {icon: "assets/icons/Planet Egg.png"},
    "Plant Egg": {icon: "assets/icons/Plant Egg.png"},
    "Post Modern Egg": {icon: "assets/icons/Post Modern Egg.png"},
    "Promise Egg": {icon: "assets/icons/Promise Egg.png"},
    "Rain Egg": {icon: "assets/icons/Rain Egg.png"},
    "Raw Egg": {icon: "assets/icons/Raw Egg.png"},
    "Razzle Egg": {icon: "assets/icons/Razzle Egg.png"},
    "Red Egg": {icon: "assets/icons/Red Egg.png"},
    "Reference Egg": {icon: "assets/icons/Reference Egg.png"},
    "Ruby Egg": {icon: "assets/icons/Ruby Egg.png"},
    "Rust Egg": {icon: "assets/icons/Rust Egg.png"},
    "Sapphire Egg": {icon: "assets/icons/Sapphire Egg.png"},
    "Scarlet Egg": {icon: "assets/icons/Scarlet Egg.png"},
    "Shadow Egg": {icon: "assets/icons/Shadow Egg.png"},
    "Sour Egg": {icon: "assets/icons/Sour Egg.png"},
    "Sunset Egg": {icon: "assets/icons/Sunset Egg.png"},
    "Swan Egg": {icon: "assets/icons/Swan Egg.png"},
    "Sweet Egg": {icon: "assets/icons/Sweet Egg.png"},
    "Transcendental Egg": {icon: "assets/icons/Transcendental Egg.png"},
    "Travel Egg": {icon: "assets/icons/Travel Egg.png"},
    "Truth Egg": {icon: "assets/icons/Truth Egg.png"},
    "Universal Basic Egg": {icon: "assets/icons/Universal Basic Egg.png"},
    "Upside Down Egg": {icon: "assets/icons/Upside Down Egg.png"},
    "Value Egg": {icon: "assets/icons/Value Egg.png"},
    "Vanity Egg": {icon: "assets/icons/Vanity Egg.png"},
    "Virtual Egg": {icon: "assets/icons/Virtual Egg.png"},
    "Zen Egg": {icon: "assets/icons/Zen Egg.png"},
    "Invisible Bunny": {icon: "assets/icons/Bunny.png"},
    "Imaginary Bunny": {icon: "assets/icons/Bunny.png"},
    "Flowering Bunny": {icon: "assets/icons/Bunny.png"},
    "Fish Bunny": {icon: "assets/icons/Bunny.png"},
    "Water Spike Bunny": {icon: "assets/icons/Bunny.png"},
    "Chinchilla Bunny": {icon: "assets/icons/Bunny.png"},
    "Singing Bunny": {icon: "assets/icons/Bunny.png"},
    "Statue Bunny": {icon: "assets/icons/Bunny.png"},
    "Doodle Bunny": {icon: "assets/icons/Bunny.png"},
    "Lava Bunny": {icon: "assets/icons/Bunny.png"},
    "Disc Spike Bunny": {icon: "assets/icons/Bunny.png"},
    "Flashing Bunny": {icon: "assets/icons/Bunny.png"},
    "Paper Bunny": {icon: "assets/icons/Bunny.png"},
    "Illusion Bunny": {icon: "assets/icons/Bunny.png"},
    "Community Bunny": {icon: "assets/icons/Bunny.png"},
    "Face Bunny": {icon: "assets/icons/Bunny.png"},
};

const bunnyMarkers = L.layerGroup();
const fruitMarkers = L.layerGroup();
const equipmentMarkers = L.layerGroup();
const eggMarkers = L.layerGroup();
const otherMarkers = L.layerGroup();
const flameMarkers = L.layerGroup();
const allMarkers = L.layerGroup([bunnyMarkers, fruitMarkers, equipmentMarkers, eggMarkers, otherMarkers, flameMarkers]);

const layerGroups = {
    equipment: {
        group: L.layerGroup(),
        itemLayers: {},
        items: [
        "Key Ring", "Animal Flute", "Lantern", "Top",
        "Disc", "Mock Disc",
        "B. Wand", "B.B. Wand", "Yoyo", "Slink",  
        "Remote", "B. Ball", "Wheel", "UV Lantern", 
         "Matchbox",
        ],
        default: true
    },
    flames: {
        group: L.layerGroup(),
        itemLayers: {},
        items: [
        "P. Flame", "V. Flame", "B. Flame",   "G. Flame",
        ],
        default: true
    },
    misc: {
        group: L.layerGroup(),
        itemLayers: {},
        items: [
        "Candle",  "Match", "Pencil", "Stamp", "Map", "Key",  
        "House Key", "Office Key", "Fanny Pack", "Firecracker Refill"
        ],
        default: false
    },
    fruits: {
        group: L.layerGroup(),
        itemLayers: {},
        items: ["Pink Fruit", "Blue Fruit", "Big Blue Fruit"],
        default: false
    },
    bunnies: {
        group: L.layerGroup(),
        itemLayers: {},
        items: [
        "Invisible Bunny", "Imaginary Bunny", "Flowering Bunny", 
        "Fish Bunny", "Water Spike Bunny", "Chinchilla Bunny",
        "Singing Bunny", "Statue Bunny", "Doodle Bunny",
        "Lava Bunny", "Disc Spike Bunny", "Flashing Bunny",
        "Paper Bunny", "Illusion Bunny", "Community Bunny",
        "Face Bunny"
        ],
        default: false
    },
    eggs: {
        group: L.layerGroup(),
        itemLayers: {},
        items: [
        "65th Egg", "Ancient Egg", "Big Egg", "Brick Egg",
        "Brown Egg", "Bubble Egg", "Chaos Egg", "Chocolate Egg",
        "Clover Egg", "Crystal Egg", "Dazzle Egg", "Depraved Egg",
        "Desert Egg", "Dream Egg", "Egg As A Service", "Evil Egg",
        "Fire Egg", "Forbidden Egg", "Friendship Egg", "Future Egg",
        "Galaxy Egg", "Golden Egg", "Goodnight Egg", "Gorgeous Egg",
        "Great Egg", "Holiday Egg", "Ice Egg", "Iridescent Egg",
        "Jade Egg", "Laissez-faire Egg", "Magic Egg", "Moon Egg",
        "Mystic Egg", "Neon Egg", "Normal Egg", "Obsidian Egg",
        "Orange Egg", "Pickled Egg", "Planet Egg", "Plant Egg",
        "Post Modern Egg", "Promise Egg", "Rain Egg",
        "Raw Egg", "Razzle Egg", "Red Egg", "Reference Egg",
        "Ruby Egg", "Rust Egg", "Sapphire Egg", "Scarlet Egg",
        "Shadow Egg", "Sour Egg", "Sunset Egg", "Swan Egg",
        "Sweet Egg", "Transcendental Egg", "Travel Egg",
        "Truth Egg", "Universal Basic Egg", "Upside Down Egg",
        "Value Egg", "Vanity Egg", "Virtual Egg", "Zen Egg"
        ],
        default: false
    },
};

const itemToGroupMap = {};
Object.values(layerGroups).forEach(group => {
    group.items.forEach(item => {
        itemToGroupMap[item] = group;
    });
    group.group = L.layerGroup();
    group.itemLayers = {};
    group.items.forEach(item => {
        group.itemLayers[item] = L.layerGroup();
    });
});

const debug = true;
const MAP_WIDTH = 30720;
const MAP_HEIGHT = 17280;
const CHUNK_WIDTH = 960;
const CHUNK_HEIGHT = 540;

const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('sidebarToggle');
const mapElement = document.getElementById('map');

const map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -5,
    maxZoom: 2,
    zoomSnap: 0.02,
    preferCanvas: true,
    maxBoundsViscosity: 1.0,
    zoomControl: false 
});

L.control.zoom({ position: 'bottomright' }).addTo(map);


const southWest = map.unproject([0, MAP_HEIGHT], 0);
const northEast = map.unproject([MAP_WIDTH, 0], 0);
const southWest2 = map.unproject([0, MAP_HEIGHT], 0);
const northEast2 = map.unproject([MAP_WIDTH, 0], 0);
const bounds = new L.LatLngBounds(southWest, northEast);
const bounds2 = new L.LatLngBounds(southWest2, northEast2);

const cols = Math.ceil(MAP_WIDTH / CHUNK_WIDTH);
const rows = Math.ceil(MAP_HEIGHT / CHUNK_HEIGHT);

for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        const x = col * CHUNK_WIDTH;
        const y = row * CHUNK_HEIGHT;
        
        const chunkBounds = new L.LatLngBounds(
            map.unproject([x, y + CHUNK_HEIGHT], 0),
            map.unproject([x + CHUNK_WIDTH, y], 0)
        );
        
        L.imageOverlay(`map_chunks/chunk_${row}_${col}.png`, chunkBounds, {
            interactive: false
        }).addTo(map);
    }
}

map.fitBounds(bounds.pad(0.6));
map.setMaxBounds(bounds2.pad(0.6));

function toggleSidebar() {
    toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        mapElement.classList.toggle('sidebar-collapsed');
        setTimeout(() => {
            map.invalidateSize();
        }, 300);
    });
}

const coordDisplay = L.control({position: 'topright'});
coordDisplay.onAdd = function(map) {
    this._div = L.DomUtil.create('div', 'coordinate-display');
    this.update();
    return this._div;
};

coordDisplay.update = function(coords) {
    this._div.innerHTML = coords ? 
        `Row: ${Math.trunc(coords.y/(1080))+1}, Column: ${Math.trunc(coords.x/(1920))+1}` : 
        'Move mouse over map';
};

coordDisplay.addTo(map);

map.on('mousemove', function(e) {
    
    const point = map.project(e.latlng, 0);
    if (point.x < 0 || point.x > MAP_WIDTH || point.y < 0 || point.y > MAP_HEIGHT) {
        coordDisplay.update();
        return;
    }
    const coords = {
        x: Math.round(point.x),
        y: Math.round(point.y) 
    };
    coordDisplay.update(coords);
});

map.on('mouseout', function() {
    coordDisplay.update();
});

Object.values(layerGroups).forEach(category => {
    category.items.forEach(item => {
        category.itemLayers[item] = L.layerGroup();
    });
    category.group.addTo(map);
});

    
function createCenteredIcon(iconUrl, maxSize = 32) {
    const targetSize = Array.isArray(maxSize) ? maxSize : [maxSize, maxSize];
    
    return L.icon({
        iconUrl: iconUrl || 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        iconSize: targetSize, 
        iconAnchor: [targetSize[0]/2, targetSize[1]/2],
        popupAnchor: [0, -targetSize[1]/2],
        className: 'leaflet-custom-icon',
        
    });
}
let itemLocationMap = {};
function addMarkerToGroups(marker, itemName) {
    const group = itemToGroupMap[itemName];
    if (group) {
        marker.addTo(group.itemLayers[itemName]);
        // Add to main group if you want category-level control
        marker.addTo(group.group); 
    }
}

Object.entries(locationsDB).forEach(([locationName, locationData]) => {
    function findItemForLocation(locationName, items) {
        let startMatch = null;
        if (locationName.startsWith("Disc Spike Bunny")) {
            startMatch = "Disc Spike Bunny";
        } else {
            startMatch = Object.keys(items).find(item => 
                locationName.toLowerCase().startsWith(item.toLowerCase())
            );
        }
        if (startMatch) return startMatch;
    
        //some items are named in silly ways
        const containsMatch = Object.keys(items).find(item => 
            locationName.toLowerCase().includes("candle")
        );
        if (containsMatch) return "Candle";
        if (locationName.toLowerCase().includes("service")) {
            return "Egg As A Service";
        }
        if (locationName.toLowerCase().includes("wolf disc")) {
            return "Disc";
        }
        return null;
        
    }
    
    const foundItem = findItemForLocation(locationName, items);
    if (debug) {
        console.log(`Location: ${locationName}, Found Item: ${foundItem}`);
    }
        

    if (foundItem) {
        generateMarker(locationName, locationData, foundItem, items[foundItem].icon);
        
        updateMarkerCounts();
        if (debug) validateEggs();
    }
}); 

document.querySelectorAll('.section-header').forEach(header => {
    header.addEventListener('click', function() {
        this.parentElement.classList.toggle('collapsed');
    });
});

function generateItemControls() {
    const controlsContainer = document.querySelector('#item-controls .section-content');
    
    if (!controlsContainer) {
        console.error('Could not find controls container!');
        return;
    }
    
    controlsContainer.innerHTML = '';
    
    Object.entries(layerGroups).forEach(([groupName, group]) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category';
        
        const header = document.createElement('div');
        header.className = 'category-header';
        header.innerHTML = `
            <label class="category-toggle-container">
                <input type="checkbox" id="toggle-${groupName}" class="category-toggle" ${group.default ? 'checked' : ''}>
                <span class="category-name">${groupName.charAt(0).toUpperCase() + groupName.slice(1)}</span>
                <!-- <span class="item-count">(${group.items.length})</span> -->
            </label>
            <span class="collapse-arrow">▼</span>

        `;
        
        const itemsContainer = document.createElement('div');
        itemsContainer.className = 'item-list';
        
        const gridContainer = document.createElement('div');
        gridContainer.className = 'item-grid';
        
        group.items.forEach(itemName => {
            const itemCount = Object.values(itemLocationMap).filter(
                locData => locData.item.trim().toLowerCase() === itemName.trim().toLowerCase()
            ).length;

            const itemDiv = document.createElement('div');
            itemDiv.className = 'item-control';
            itemDiv.innerHTML = `
                <label>
                    <input type="checkbox" id="${groupName}-${itemName.replace(/\W+/g, '-')}" 
                           class="item-toggle" ${group.default ? 'checked' : ''}
                           data-group="${groupName}" data-item="${itemName}">
                    <img src="${items[itemName]?.icon || 'assets/icons/default.png'}" 
                         class="control-icon" alt="${itemName}">
                    <span class="item-name">${itemName}</span>
                    <span class="item-count">${itemCount}</span>
                </label>
            `;
            gridContainer.appendChild(itemDiv);
        });
        
        itemsContainer.appendChild(gridContainer);
        categoryDiv.appendChild(header);
        categoryDiv.appendChild(itemsContainer);
        controlsContainer.appendChild(categoryDiv);
        
        const arrow = header.querySelector('.collapse-arrow');
    


        arrow.addEventListener('click', (e) => {
            if (e.target.tagName === 'INPUT' || e.target.classList.contains('category-toggle-container')) {
                return;
            }
            
            itemsContainer.classList.toggle('collapsed');
            arrow.textContent = itemsContainer.classList.contains('collapsed') ? '▶' : '▼';
            e.stopPropagation();
        });
        

    });
    
    Object.entries(layerGroups).forEach(([groupName, group]) => {
        if (group.default) {
            group.group.addTo(map);
            group.items.forEach(itemName => {
                group.itemLayers[itemName].addTo(map);
            });
        } else {
            group.group.remove();
            group.items.forEach(itemName => {
                group.itemLayers[itemName].remove();
            });
        }
        updateCategoryToggleState(groupName);
    });
    
    setupControlEvents();
}

function setupControlEvents() {
    document.querySelectorAll('.category-toggle').forEach(toggle => {
        toggle.addEventListener('change', function() {
            const groupName = this.id.replace('toggle-', '');
            const group = layerGroups[groupName];
            const isChecked = this.checked;
            
            group.items.forEach(itemName => {
                const itemLayer = group.itemLayers[itemName];
                if (isChecked) {
                    itemLayer.addTo(map);
                } else {
                    itemLayer.remove();
                }
            });
            
            document.querySelectorAll(`.item-toggle[data-group="${groupName}"]`).forEach(itemToggle => {
                itemToggle.checked = isChecked;
                itemToggle.indeterminate = false;
            });
            
            updateMarkerCounts();
        });
    });
    
    document.querySelectorAll('.item-toggle').forEach(toggle => {
        toggle.addEventListener('change', function() {
            const groupName = this.dataset.group;
            const itemName = this.dataset.item;
            const itemLayer = layerGroups[groupName].itemLayers[itemName];
            
            if (this.checked) {
                itemLayer.addTo(map);
            } else {
                itemLayer.remove();
            }
            
            updateCategoryToggleState(groupName);
            updateMarkerCounts();
        });
    });
}

function updateCategoryToggleState(groupName) {
    const categoryToggle = document.querySelector(`#toggle-${groupName}`);
    const itemToggles = document.querySelectorAll(`.item-toggle[data-group="${groupName}"]`);
    
    const checkedCount = Array.from(itemToggles).filter(t => t.checked).length;
    const totalCount = itemToggles.length;
    
    if (checkedCount === 0) {
        categoryToggle.checked = false;
        categoryToggle.indeterminate = false;
    } else if (checkedCount === totalCount) {
        categoryToggle.checked = true;
        categoryToggle.indeterminate = false;
    } else {
        categoryToggle.checked = false;
        categoryToggle.indeterminate = true;
    }
}

function updateAllCounts() {
    Object.entries(layerGroups).forEach(([name, {group, countElement}]) => {
        if (countElement) {
            countElement.textContent = group.getLayers().length;
        }
    });
}

function setupSpoilerLogParser(locationsDB, items) {
    const fileInput = document.getElementById('spoiler-log-file');
    const resultsDiv = document.getElementById('spoiler-results');
    
    fileInput.addEventListener('change', async function(e) {
        const file = e.target.files[0];
        if (!file) return;
        
        try {
            itemLocationMap = {};
            resultsDiv.style.display = 'block';
            resultsDiv.textContent = 'Loading file...';
            const content = await file.text();
            parseSpoilerLog(content, resultsDiv, locationsDB, items);
        } catch (error) {
            resultsDiv.textContent = `Error reading file: ${error.message}`;
        }
    });
    
    
    function parseSpoilerLog(content, outputElement, locationsDB, items) {
        try {
            const locationsStart = content.lastIndexOf('Locations:');
            const playthroughStart = content.indexOf('Playthrough:');
            
            if (locationsStart === -1 || playthroughStart === -1) {
                throw new Error('Could not find locations or playthrough sections');
            }
            
            const locationsSection = content.slice(locationsStart + 'Locations:'.length, playthroughStart).trim();
            const lines = locationsSection.split('\n');
            
            for (const line of lines) {
                const trimmedLine = line.trim();
                if (!trimmedLine) continue;
                
                const match = trimmedLine.split(":");
                if (match[0].endsWith("Event")) continue;
                
                if (match) {
                    const location = match[0].split(" - ")[0].trim();
                    
                    const itemName = match[1].trim();
                    if (!(location in locationsDB)) {
                        console.warn(`Location "${location}" not found in locationsDB!`);
                        continue;
                    }
                    itemLocationMap[location] = {
                        item: itemName,
                        coords: locationsDB[location] || { x: 0, y: 0 },
                        icon: itemName.includes("Candle") && items["Candle"]?.icon 
                            ? items["Candle"].icon 
                            : items[itemName]?.icon || `assets/icons/${itemName.replace(/"/g, '')}.png`
                    };
                }
            }
            outputElement.textContent = "Spoiler log parsed!";
            
            markSpoilerLogLocations(itemLocationMap, map, items);
            
        } catch (error) {
            outputElement.textContent = `Error parsing spoiler log: ${error.message}`;
            console.error(error);
        }
    }
}

function generateMarker(locationName, locationCoords, itemName, itemIcon) {
    itemLocationMap[locationName] = {
        item: itemName,
        coords: locationCoords,
        icon: items[itemName]?.icon || `assets/icons/${itemName.replace(/"/g, '')}.png`
    };
    const icon = createCenteredIcon(itemIcon, [32, 32]);
    
    const marker = L.marker(
        map.unproject([locationCoords.x, locationCoords.y], 0),
        { 
            icon: icon,
            riseOnHover: true
        }
    );
    marker.bindPopup(`
        <h3>${itemName}</h3>
        <p>Found at: <strong>${locationName}</strong></p>`
    );
    addMarkerToGroups(marker, itemName);
};

function markSpoilerLogLocations(parsedData, map, items) {
    clearAllMarkers();
    const itemCounts = {};

    Object.values(layerGroups).forEach(group => {
        group.items.forEach(item => {
            itemCounts[item] = 0;
        });
    });
    
    Object.values(itemLocationMap).forEach(locData => {
        const itemName = locData.item;
        if (itemCounts[itemName] !== undefined) {
            itemCounts[itemName]++;
        }
    });

    Object.entries(parsedData).forEach(([location, locData]) => {
        const locationName = location;
        const locationCoords = locData.coords;
        const itemName = locData.item;
        
            
        if (locationCoords && locationCoords.x && locationCoords.y) {
            generateMarker(locationName, locationCoords, itemName, locData.icon);
            
            updateAllItemCounts(itemCounts);
            updateMarkerCounts();
            if (debug) validateEggs();
        } else {
            console.warn(`No coordinates found for location: ${locationName}`);
        }

    });
}

function updateAllItemCounts(itemCounts) {
    document.querySelectorAll('.item-control').forEach(itemControl => {
        const itemName = itemControl.querySelector('input').dataset.item;
        const countElement = itemControl.querySelector('.item-count');
        
        if (itemCounts[itemName] !== undefined) {
            countElement.textContent = itemCounts[itemName];
        } else {
            countElement.textContent = '0';
        }
    });
}

function updateMarkerCounts() {
    Object.entries(layerGroups).forEach(([groupName, groupData]) => {
        const totalItems = groupData.items.reduce((total, item) => {
            return total + (groupData.itemLayers[item]?.getLayers().length || 0);
        }, 0);
        
        const label = document.querySelector(`label[for="toggle-${groupName}"]`);
        if (label) {
            const capitalized = groupName.charAt(0).toUpperCase() + groupName.slice(1);
            label.querySelector('.marker-count').textContent = `(${totalItems})`;
        }
    });
}

function clearAllMarkers() {
    Object.values(layerGroups).forEach(groupData => {
        groupData.group.clearLayers();
        Object.values(groupData.itemLayers).forEach(layer => {
            layer.clearLayers();
        });
    });
    if (window.previousSearchMarker) {
        map.removeLayer(window.previousSearchMarker);
        window.previousSearchMarker = null;
    }
}
    
   
const searchBox = document.getElementById('search-box');
const resultsList = document.getElementById('resultsList');


function setupSearch() {
    function handleSearch() {
        const query = searchBox.value.trim().toLowerCase();
        resultsList.innerHTML = '';

        if (query.length < 2) {
            resultsList.style.display = 'none';
            return;
        }

        const results = Object.entries(itemLocationMap)
            .filter(([location, itemData]) => {
                const itemMatch = itemData.item.toLowerCase().includes(query);
                const locationMatch = location.toLowerCase().includes(query);
                const partialMatch = itemData.item.toLowerCase().split(/\s+/)
                    .some(word => word.startsWith(query));
                return itemMatch || locationMatch || partialMatch;
            })
            .sort((a, b) => a[0].localeCompare(b[0]));

        if (results.length === 0) {
            resultsList.innerHTML = '<li class="no-results">No results found</li>';
        } else {
            results.forEach(([location, locData]) => {
                const li = document.createElement('li');
                li.className = 'search-result';
                li.dataset.item = JSON.stringify({
                    name: locData.item,
                    x: locData.coords.x,
                    y: locData.coords.y
                });

                li.innerHTML = `
                    <img src="${locData.icon}" class="search-icon" alt="">
                    <div class="search-text">
                        <div class="item-name">${locData.item}</div>
                        <div class="location-name">${location}</div>
                    </div>
                `;
                resultsList.appendChild(li);
            });
        }
        resultsList.style.display = results.length ? 'block' : 'none';
    }

    resultsList.addEventListener('click', (e) => {
        const li = e.target.closest('.search-result');
        if (!li) return;
    
        try {
            const { name, x, y } = JSON.parse(li.dataset.item);
            searchBox.value = name;
            resultsList.style.display = 'none';
            const latlng = map.unproject([x, y], 0);
            map.flyTo(latlng, -2);
           
            let locationData = null;
            let foundLocation = null;
            let itemData = null;
            
            for (const [locationName, locData] of Object.entries(itemLocationMap)) {
                if (!locData.item) {
                    console.warn(`Location ${locationName} has no items array`);
                    continue;
                }
    
                const foundItem = locData.item === name;
                
                if (foundItem) {
                    locationData = locData;
                    foundLocation = locationName;
                    itemData = foundItem;
                    break;
                }
            }
    
            if (!locationData) {
                console.warn(`No location found containing item: ${name}`);
                return;
            }
    
            let iconPath;
            if (itemData && itemData.icon) {
                iconPath = itemData.icon;
            } else if (locationData.icon) {
                iconPath = locationData.icon;
            } else {
                iconPath = `assets/icons/${name.replace(/"/g, '')}.png`;
            }
    
            const searchMarker = L.marker(latlng, {
                icon: createCenteredIcon(iconPath, [32, 32]),
                riseOnHover: true
            }).addTo(map);
            
            searchMarker.bindPopup(`
                <h3>${locationData.item}</h3>
                <p>Found at: <strong>${foundLocation}</strong></p>
            `).openPopup();
    
            if (window.previousSearchMarker) {
                map.removeLayer(window.previousSearchMarker);
            }
            window.previousSearchMarker = searchMarker;
    
        } catch (e) {
            console.error('Error handling click:', e);
        }
    });

    searchBox.addEventListener('input', handleSearch);
    searchBox.addEventListener('focus', () => {
        if (searchBox.value.length >= 2) handleSearch();
    });

    document.addEventListener('click', (e) => {
        if (!searchBox.contains(e.target) && !resultsList.contains(e.target)) {
            resultsList.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
 //   init();
    toggleSidebar();
    generateItemControls()
    setupSpoilerLogParser(locationsDB, items);
    setupSearch();
});

function validateEggs(){
    let eggs = [...layerGroups.eggs.items];
    console.log(eggs);
    for (const [locationName, locData] of Object.entries(itemLocationMap)) {
            const item = locData.item;
            if (eggs.includes(item)) {
                const index = eggs.indexOf(item);
                if (index > -1) { 
                    eggs.splice(index, 1); 
                }
            }else if (layerGroups.eggs.items.includes(item)) {
                eggs.push(item);
            } else {
                console.log(`Item ${item} not found in eggs`);
            }
        }
    console.log(eggs);
}
