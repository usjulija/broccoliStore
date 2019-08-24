const grocery = [
    {
        id: 0,
        name: "Vanilla rice ice cream (100g)",
        category: "ice cream",
        price: 145,
        description: "Vanilla rice ice cream with chocolate flavor glaze.",
        discount: 0,
        imageUrl: "/images/riceicecream.jpg"
    },  {
        id: 1,
        name: "tomatoes (1kg)",
        category: "vegetables",
        price: 199,
        description: "Large organic vine tomatoes, grown by specially selected farmers with a commitment to quality. Delicious in salads or roasted in the oven.",
        discount: 0,
        imageUrl: "/images/tomato.jpg"
    }, {
        id: 2,
        name: "cucumbers (1kg)",
        category: "vegetables",
        price: 199,
        description: "Slice for salads, sandwiches, crudites & cocktail accompaniments. Organic, Grown without reliance on artificial chemicals.",
        discount: 10,
        imageUrl: "/images/cucumber.jpg"
    }, {
        id: 3,
        name: "sweet peppers (1kg)",
        category: "vegetables",
        price: 199,
        description: "Sweet and crisp, great in a salad or as a snack, just as good to cook with.",
        discount: 0,
        imageUrl: "/images/sweet-pepper.jpg"
    }, {
        id: 4,
        name: "eggplants (1kg)",
        category: "vegetables",
        price: 129,
        description: "Eggplant is suitable for stews, side dishes and main dishes.",
        discount: 10,
        imageUrl: "/images/eggplant.jpg"
    }, {
        id: 5,
        name: "bananas (1kg)",
        category: "fruits",
        price: 111,
        description: "Plantain bananas are usually cooked and considered more like a vegetable due to their starchier qualities; they have a higher beta-carotene concentration than most sweet bananas.",
        discount: 15,
        imageUrl: "/images/bananas.jpg"
    }, {
        id: 6,
        name: "lemons (1kg)",
        category: "fruits",
        price: 129,
        description: "Lemon with intense flavor and aroma.",
        discount: 0,
        imageUrl: "/images/lemons.jpg"
    }, {
        id: 7,
        name: "grapes (1kg)",
        category: "fruits",
        price: 269,
        description: "Green seedless grapes.",
        discount: 15,
        imageUrl: "/images/grapes.jpg"
    }, {
        id: 8,
        name: "apples (1kg)",
        category: "fruits",
        price: 69,
        description: "Sweet and sour taste, aromatic and crunchy.",
        discount: 0,
        imageUrl: "/images/apples.jpg"
    }, {
        id: 9,
        name: "pineapples (1kg)",
        category: "fruits",
        price: 149,
        description: "Sweet and sour taste.",
        discount: 0,
        imageUrl: "/images/pineapples.jpg"
    }, {
        id: 10,
        name: "milk (1l)",
        category: "milk",
        price: 149,
        description: "This is the milk that has been heated for 3 seconds at ultra high temperature. In such milk all valuable minerals and vitamins are preserved.",
        discount: 0,
        imageUrl: "/images/milk.jpg"
    }, {
        id: 11,
        name: "sweetened condensed milk",
        category: "milk",
        price: 129,
        description: "Pleasant, sweet, taste and smell.",
        discount: 0,
        imageUrl: "/images/sweetmilk.jpg"
    }, {
        id: 12,
        name: "actimel (400g)",
        category: "milk",
        price: 169,
        description: "Actimel yogurt drink with pomegranate, blueberry and pepper, 1.5% fat. Actimel contains vitamin B6 and D.",
        discount: 0,
        imageUrl: "/images/actimel.jpg"
    }, {
        id: 13,
        name: "italian bread",
        category: "bread",
        price: 115,
        description: "Thanks to the natural fermentation, the bread gets its expressive flavor, aroma and appearance.",
        discount: 0,
        imageUrl: "/images/itbread.jpg"
    }, {
        id: 14,
        name: "bread with fruit (1kg)",
        category: "bread",
        price: 299,
        description: "Wheat and rye flour bread, flavored with prunes, apricots, raisins, hazelnuts and peanuts, sunflowers.",
        discount: 0,
        imageUrl: "/images/fruitbread.jpg"
    }, {
        id: 15,
        name: "Cake with mascarpone cheese (1kg)",
        category: "cakes",
        price: 999,
        description: "Mascarpone cheese pie with fresh strawberries and blackberries with a sweet and sour cranberry jam layer.",
        discount: 0,
        imageUrl: "/images/cheesecake.jpg"
    }, {
        id: 16,
        name: "Soft cake with passion fruit puree and pineapple jelly (71g)",
        category: "cakes",
        price: 89,
        description: "Pleasant, sweet, taste and smell.",
        discount: 0,
        imageUrl: "/images/softcake.jpg"
    }, {
        id: 17,
        name: "pistachios (1kg)",
        category: "nuts",
        price: 1439,
        description: "Pistachios are one of the most vitamin B6-rich foods around.",
        discount: 0,
        imageUrl: "/images/pistachios.jpg"
    }, {
        id: 18,
        name: "kit kat (1kg)",
        category: "candies",
        price: 1198,
        description: "KIT KAT - crunchy waffle covered with milk chocolate.",
        discount: 0,
        imageUrl: "/images/kitkat.jpg"
    }, {
        id: 19,
        name: "almonds (1kg)",
        category: "nuts",
        price: 1799,
        description: "Almonds are high in protein and fiber and relatively low in fat—especially saturated fat.",
        discount: 20,
        imageUrl: "/images/almonds.jpg"
    }, {
        id: 20,
        name: "lion (1kg)",
        category: "candies",
        price: 998,
        description: "Chocolate LION candies are made of waffle, caramel, crispy flakes and milk chocolate glaze.",
        discount: 20,
        imageUrl: "/images/lion.jpg"
    }, {
        id: 21,
        name: "bounty (1kg)",
        category: "candies",
        price: 995,
        description: "Chocolate candy BOUNTY - a coconut base covered with thick milk chocolate.",
        discount: 0,
        imageUrl: "/images/bounty.jpg"
    }, {
        id: 22,
        name: "whole grain pasta (400g)",
        category: "pasta",
        price: 133,
        description: "Whole grain pasta.",
        discount: 0,
        imageUrl: "/images/wholepasta.jpg"
    }, {
        id: 23,
        name: "freshly roasted ground coffee (350g)",
        category: "coffee",
        price: 1000,
        description: "Decaf coffee is grown in Colombia. In the aroma, orange peel and cocoa are felt.",
        discount: 0,
        imageUrl: "/images/freshcoffee.jpg"
    }, {
        id: 24,
        name: "green tea (350g)",
        category: "tea",
        price: 449,
        description: "Organic green tea with coconut.",
        discount: 0,
        imageUrl: "/images/greentea.jpg"
    }, {
        id: 25,
        name: "herbal tea (350g)",
        category: "tea",
        price: 189,
        description: "Herbal tea ETNO with sea buckthorn.",
        discount: 5,
        imageUrl: "/images/herbstea.jpg"
    }, {
        id: 26,
        name: "instant coffee (200g)",
        category: "coffee",
        price: 989,
        description: "Instant coffee Jacobs Kronung.",
        discount: 5,
        imageUrl: "/images/coffee.jpg"
    }, {
        id: 27,
        name: "lettuce (150g)",
        category: "vegetables",
        price: 149,
        description: "Lettuce is reddish-curled with green veins. Suitable for salads and sandwiches.",
        discount: 0,
        imageUrl: "/images/lettuce.jpg"
    }, {
        id: 28,
        name: "kiwi (1kg)",
        category: "fruits",
        price: 159,
        description: "Kiwis are sweet, sometimes with a bit of croissants, tasting best when eaten fresh.",
        discount: 10,
        imageUrl: "/images/kiwi.jpg"
    }, {
        id: 29,
        name: "mango",
        category: "fruits",
        price: 65,
        description: "Mango fruit is perfect for tasting one, flavoring fruit salads and other desserts.",
        discount: 0,
        imageUrl: "/images/manga.jpg"
    }, {
        id: 30,
        name: "pomegranate (1kg)",
        category: "fruits",
        price: 259,
        description: "Pomegranate seeds commonly eaten fresh.",
        discount: 0,
        imageUrl: "/images/pomegranate.jpg"
    }, {
        id: 31,
        name: "dill (25g)",
        category: "vegetables",
        price: 49,
        description: "Fresh dill.",
        discount: 0,
        imageUrl: "/images/dill.jpg"
    }, {
        id: 32,
        name: "broccoli",
        category: "vegetables",
        price: 129,
        description: "Broccoli is a popular vegetable that is high in many nutrients, including fiber and vitamin C.",
        discount: 0,
        imageUrl: "/images/broccoli.jpg"
    }, {
        id: 33,
        name: "avocado",
        category: "fruits",
        price: 63,
        description: "Avocado is considered a nutritious fruit and contains higher quantities of soluble and insoluble fiber and protein than many other fleshy fruits.",
        discount: 15,
        imageUrl: "/images/avocado.jpg"
    }, {
        id: 34,
        name: "corn salad (50g)",
        category: "vegetables",
        price: 99,
        description: "Tinka gardinti įvairioms salotoms ir kitiems patiekalams.",
        discount: 0,
        imageUrl: "/images/cornsalad.jpg"
    }, {
        id: 35,
        name: "pork sausages (1kg)",
        category: "meat",
        price: 439,
        description: "Fresh pork sausages seasoned with pepper and other spices. Can be grilled.",
        discount: 0,
        imageUrl: "/images/porksausages.jpg"
    }, {
        id: 36,
        name: "dorada (1kg)",
        category: "fish",
        price: 899,
        description: "Doarda - juicy, white, with a mild taste.",
        discount: 0,
        imageUrl: "/images/dorada.jpg"
    }, {
        id: 37,
        name: "sirloin (250g)",
        category: "meat",
        price: 799,
        description: "Dry matured beef loin without bone.",
        discount: 0,
        imageUrl: "/images/sirloin.jpg"
    }, {
        id: 38,
        name: "fruit juice (750ml)",
        category: "juice",
        price: 138,
        description: "Apple, orange and carrot juice, not made from concentrate. No added sugar.",
        discount: 0,
        imageUrl: "/images/fruitjuice.jpg"
    }, {
        id: 39,
        name: "pink grapefruit nectar (1l)",
        category: "juice",
        price: 229,
        description: "Water, pink grapefruit juice (52%) from concentrated pink grapefruit juice, sugar, grapefruit pulp (3%).",
        discount: 0,
        imageUrl: "/images/nectar.jpg"
    }, {
        id: 40,
        name: "carbonated lemon flavored water (500ml)",
        category: "water",
        price: 39,
        description: "Lemon flavored carbonated water.",
        discount: 0,
        imageUrl: "/images/lemonwater.jpg"
    }, {
        id: 41,
        name: "natural mineral water (1l)",
        category: "water",
        price: 65,
        description: "Natural mineral water. Sodium (339 mg / l), calcium (98 mg / l), magnesium (20 mg / l), chlorine (520 mg / l), bicarbonates (355 mg / l), sulfates (17 mg / l), fluorine ( 0.2 mg / l).",
        discount: 0,
        imageUrl: "/images/water.jpg"
    }, {
        id: 42,
        name: "Chocolate and vanilla ice cream (500ml)",
        category: "ice cream",
        price: 699,
        description: "Chocolate and vanilla ice cream.",
        discount: 0,
        imageUrl: "/images/chocoicecream.jpg"
    }
];

export default grocery;