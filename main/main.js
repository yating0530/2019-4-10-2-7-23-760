module.exports = function main(inputs) {
    // write your code here...
    var price = 0;
    if (inputs['distance']>=8) {
    	price = 6 + 0.8*(8-2) + (0.8+0.8*0.5)*(inputs['distance']-8);
    }else if (inputs['distance']>=2) {
    	price = 6 + 0.8*(inputs['distance']-2);
    }else {
    	price = 6;
    }
    price += 0.25*inputs['parkTime'];
    return Math.round(price);
};
