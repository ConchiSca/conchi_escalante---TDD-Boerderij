// I realise I could've made my code simpler by calling the previous functions 
// in every new function, like getYieldForPlant within getYieldForCrop and so on,
// but I'll leave it like this as all my tests passed now,
// don't want to mess it up at the very last moment!

// forgot to commit until de very end!


// getYieldForPlant function

const getYieldForPlant = (plant, environmentalFactors) => {
    switch (environmentalFactors.wind) {
        case 'strong':
            plant.yield = plant.yield * (100 - 60) / 100;
            break;
        case 'medium':
            plant.yield = plant.yield * (100 - 30) / 100;
            break;
        case 'soft':
            plant.yield = plant.yield * (100) / 100;
            break;
    }
    return plant.yield;
};

// getYieldForCrop function

const getYieldForCrop = (input) => {
  return input.crop.yield * input.numCrops;
};

// getTotalYield function

const getTotalYield = ({ crops }) => {
    const totalYield = crops.map(crops => 
        getYieldForCrop(crops));
    return totalYield.reduce((acc, curr) => acc + curr);
};

// getCostForCrop function

const getCostForCrop = (input) => {
    return input.crop.costs * input.numCrops;
}

// getRevenueForCrop function

const getRevenueForCrop = (input) => {
    return input.crop.salePrice * input.numKilo;
}

// getProfitForCrop function

const getProfitForCrop = (input) => {
    return (input.crop.salePrice - input.crop.costs) * input.numKilo;
}

// getTotalProfit function

const getTotalProfit = ({ crops }) => {
    const totalProfit = crops.map(crops => 
        getProfitForCrop(crops));
    return totalProfit.reduce((acc, curr) => acc + curr);
};


module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
};
