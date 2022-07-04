const mySqrt = (x) => {

    let xToString = Math.sqrt(x).toString()
    
    let verificarDecimal = xToString.indexOf('.',0)
    
    if (verificarDecimal != -1){
        return  Number(console.log(xToString.slice(0, verificarDecimal)))
    } else {
        return Number(console.log(xToString))
    }
};

mySqrt(100)