// I realise I could've made my code simpler by calling the previous functions 
// in every new function, like getYieldForPlant within getYieldForCrop and so on,
// but I'll leave it like this as all my tests have passed now,
// don't want to mess it up at the very last moment!

// forgot to commit until de very end!


const { getYieldForPlant, 
    getYieldForCrop, 
    getTotalYield, 
    getCostForCrop, 
    getRevenueForCrop,
    getTotalProfit
 } = require("./farm");



 // getYieldForPlant test, with and without environment factors


describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn, 0)).toBe(30);
    });

    test("Get yield for plant with environment factors", () => {
        const corn = {
            name: "corn",
            yield: 30,
            factors: {
                wind: {
                    strong: -60,
                    medium: -30,
                    soft: 0,
                },
            },
        };

        const environmentFactors = {
            wind: "medium",
        };
        expect(getYieldForPlant(corn, environmentFactors)).toBe(21);
    });
});



// getYieldForCrop test 

describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input)).toBe(30);
    });
});



// getTotalYield test

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(23);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });
});



// getCostForCrop test

describe("getCostForCrop", () => {
    test("Calculate the costs for a crop", () => {
        const corn = {
            name: "corn",
            costs: 10,
        };
        const input = {
            crop: corn,
            numCrops: 23,
        };
        expect(getCostForCrop(input)).toBe(230);
    })
})



// getRevenueForCrop test

describe("getRevenueForCrop", () => {
    test("Calculate the costs for a crop", () => {
        const apple = {
            name: "apple",
            salePrice: 2,
        };
        const input = {
            crop: apple,
            numKilo: 10,
        };
        expect(getRevenueForCrop(input)).toBe(20);
    })
})



// getProfitForCrop test 

describe("getProfitForCrop", () => {
    test("Calculate the profit for a crop", () => {
        const apple = {
            name: "apple",
            costs: 1,
            salePrice: 2,
        };
        const input = {
            crop: apple,
            numCrops: 10,
        };
        expect(getCostForCrop(input)).toBe(10);
    })
})



// getTotalprofit

describe("getTotalProfit", () => {
    test("Calculate total profit with multiple crops", () => {
        const corn = {
            name: "corn",
            costs: 2,
            salePrice: 3
        };
        const apple = {
            name: "apple",
            costs: 1,
            salePrice: 2,
        };
        const crops = [
            { crop: corn, numKilo: 20 },
            { crop: apple, numKilo: 10 },
        ];
        expect(getTotalProfit({ crops })).toBe(30);
    });
});