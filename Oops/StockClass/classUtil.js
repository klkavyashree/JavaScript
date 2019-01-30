
class Stock {
    constructor(name, share, price) {
        this.name = name;
        this.share = share;
        this.price = price;
    }
    addValue(share, price) {
        var sum = price * share
        return sum;
    }
}
module.exports = {
    Stock
}