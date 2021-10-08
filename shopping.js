const groceryList = [
    {
        id: 1,
        name: "Milk",
        price: 3.5,
        aisleNumber: "15",
        onSale: false,
        salePercent: null,
    },
    {
        id: 2,
        name: "Cereal",
        price: 3.25,
        aisleNumber: "7",
        onSale: true,
        salePercent: 20,
    },
    {
        id: 3,
        name: "Bread",
        price: 2.2,
        aisleNumber: "9",
        onSale: true,
        salePercent: 10,
    },
    {
        id: 4,
        name: "Eggs",
        price: 1.5,
        aisleNumber: "14",
        onSale: false,
        salePercent: null,
    }
]
    
    // console.log(groceryList)

    const addToShoppingList = (item) => {
        const lastIndex = groceryList.length - 1
        const currentLastItem = groceryList[lastIndex]
        const maxId = currentLastItem.id
        const idForNewItem = maxId + 1
        item.id = idForNewItem
        item.dateCreated = Date.now()
        
        groceryList.push(item)
    }

    const apples = {
        name: "Apples",
        price: 4,
        aisleNumber: "2",
        onSale: false,
        salePercent: null,
    }

    const shampoo = {
        name: "Shampoo",
        price: 6.5,
        aisleNumber: "27",
        onSale: false,
        salePercent: null,
    }

    const dogFood = {
        name: "Dog Food",
        price: 15,
        aisleNumber: "21",
        onSale: true,
        salePercent: 15,
    }

    const pringles = {
        name: "Pringles",
        price: 5,
        aisleNumber: "6",
        onSale: false,
        salePercent: null,
    }

    const swedishFish = {
        name: "Swedish Fish",
        price: 4,
        aisleNumber: "5",
        onSale: false,
        salePercent: null, 
    }

addToShoppingList (apples)
addToShoppingList(shampoo)
addToShoppingList(dogFood)
addToShoppingList(pringles)
addToShoppingList(swedishFish)

// console.log(groceryList)

const maxPrice = 8

for (const item of groceryList) {
    if (item.price > maxPrice) {
        console.log(item.name)
    }
}