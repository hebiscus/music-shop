

const cdData = [
    {title: "Colin Stetson - When we were that wept for the sea",
     id: 1,
     genre: "new wave",
     coverSmall: "/cd-covers/blueCD-small.png",
     coverMedium: "/cd-covers/blueCD-mid.png",
     coverBig: "/cd-covers/blueCD-big.png",
     description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
     price: "30.00"},

     {title: "Clipping - There existed an addiction to blood",
     id: 2,
     genre: "electroclash",
     coverSmall: "/cd-covers/redCD-small.png",
     coverMedium: "/cd-covers/redCD-mid.png",
     coverBig: "/cd-covers/blueCD.png",
     description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
     price: "26.90"},

     {title: "Susumu Hirasawa - BERSERK Original Sountrack",
     id: 3,
     genre: "synthpop",
     coverSmall: "/cd-covers/redwhiteCD-small.png",
     coverMedium: "/cd-covers/redwhiteCD-mid.png",
     coverBig: "/cd-covers/redwhiteCD-big.png",
     description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
     price: "50.00"},

     {title: "Harold Budd Brian Eno - Ambient 2: The Plateaux of Mirror",
     id: 4,
     genre: "ambient",
     coverSmall: "/cd-covers/desertCD-small.png",
     coverMedium: "/cd-covers/desertCD-mid.png",
     coverBig: "/cd-covers/desertCD-big.png",
     description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
     price: "3.00"},

     {title: "JPEGMAFIA - Veteran",
     id: 5,
     genre: "math rock",
     coverSmall: "/cd-covers/darkCD-small.png",
     coverMedium: "/cd-covers/darkCD-mid.png",
     coverBig: "/cd-covers/darkCD-big.png",
     description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
     price: "13.00"},

     {title: "New Order - Power Corruption and Lies",
     id: 6,
     genre: "new wave",
     coverSmall: "/cd-covers/whiteCD-small.png",
     coverMedium: "/cd-covers/whiteCD-mid.png",
     coverBig: "/cd-covers/blueCD.png",
     description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
     price: "10.00"},

     {title: "Saint Etienne - Foxbase Alpha",
     id: 7,
     genre: "synthpop",
     coverSmall: "/cd-covers/alienCD-small.png",
     coverMedium: "/cd-covers/alienCD-mid.png",
     coverBig: "/cd-covers/alienCD-big.png",
     description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
     price: "18.00"},

     {title: "Björk - Verspertine",
     id: 8,
     genre: "art pop",
     coverSmall: "/cd-covers/stracciatella-small.png",
     coverMedium: "/cd-covers/stracciatella-mid.png",
     coverBig: "/cd-covers/stracciatella-big.png",
     description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
     price: "300.00"}
]

const vinylData = [
    {title: "XTC - Life Begins At The Hop",
    id: 9,
    genre: "new wave",
    coverSmall: "/vinyl-covers/XTC-small.png",
    coverMediumHome: "/vinyl-covers/XTC-mid-home.png",
    coverMedium: "/vinyl-covers/XTC-mid-PR.png",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    price: "300.00"},

    {title: "Klark Kent - Don't Care",
     id: 10,
     genre: "synthpop",
     coverSmall: "/vinyl-covers/Klark-Kent-small.png",
     coverMediumHome: "/vinyl-covers/Klark-Kent-mid-home.png",
     coverMedium: "/vinyl-covers/Klark-Kent-mid-PR.png",
     description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
     price: "300.00"},

     {title: "Jah Wurzel - Wuthering Heights",
     id: 11,
     genre: "new wave",
     coverSmall: "/vinyl-covers/jah-wurzel-small.png",
     coverMediumHome: "/vinyl-covers/jah-wurzel-mid-home.png",
     coverMedium: "/vinyl-covers/jah-wurzel-mid-PR.png",
     description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
     price: "300.00"},

     {title: "Snips - What's Your Number",
     id: 12,
     genre: "math rock",
     coverSmall: "/vinyl-covers/Snips-small.png",
     coverMedium: "/vinyl-covers/Snips-mid.png",
     description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
     price: "300.00"},

     {title: "Yellow Banana - Verspertine",
     id: 13,
     genre: "art pop",
     coverSmall: "/vinyl-covers/blankV-small.png",
     coverMedium: "/vinyl-covers/blankV-mid.png",
     description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
     price: "300.00"},

     {title: "Summon - My Mind is Blank",
     id: 14,
     genre: "math rock",
     coverSmall: "/vinyl-covers/blankV-small.png",
     coverMedium: "/vinyl-covers/blankV-mid.png",
     description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
     price: "300.00"}
]

export { cdData, vinylData };