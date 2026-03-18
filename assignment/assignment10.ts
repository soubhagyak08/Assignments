//Best Time to Buy and Sell Stock

function maxmiumProfit(prices: number[]): number {
    let minPrice = prices[0];   
    let maxProfit = 0;        

    for (let i = 1; i <= prices.length; i++) {
      
        if (prices[i] <= minPrice) {

            minPrice = prices[i];

        } else {
          
            let profit = prices[i] - minPrice;
            if (profit >= maxProfit) {
                maxProfit = profit;
            }
        }
    }

    return maxProfit;
}

console.log(maxmiumProfit([7,1,5,3,6,4])); 
console.log(maxmiumProfit([7,6,4,3,1])); 
