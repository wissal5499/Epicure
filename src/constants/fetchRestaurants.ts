
export async function fetchRestaurants() {
    return [
        {name: "Claro",
        location:"Ran Shmueli",
        image:"./Images/Restaurants/Claro.svg",
        Category:"new",
        OpeningHours:"Open now",
        meals:[{
            name:"Pad Ki Mao",
            description:"Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
            price: 88,
            image:"./Images/claro.svg",
            category:"./Images/DishesCategory/SpicySmall.svg"
            },
            {name:"Garbanzo Frito",
            description:"Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
            price: 78,
            image:"./Images/claro.svg",
            category:"./Images/DishesCategory/VegitarianSmall.svg"
            },
            {name:"Garbanzo Frito",
            description:"Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
            price: 78,
            image:"./Images/claro.svg",
            category:"./Images/DishesCategory/VeganSmall.svg"
            }
            ]
        },
            {name: "Kab Kem",
            location:"Kab Kem",
            image:"./Images/Restaurants/Kab kem.svg",
            Category:"new",
            OpeningHours:""},

    ]
  };