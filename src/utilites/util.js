export const valueOfBinary = (binaryNum) => {
    let total = 0;
    let spot = 1;
    for(let i = binaryNum.length - 1; i >= 0; i--){
        total =  total + (binaryNum[i] * spot);
        spot = spot * 2;
    }
    return total;
};

export const randomBinaryNumber = (len) => {
    let binaryNum = [];

    for(let i = 0; i < len; i++){
        binaryNum[i] = Math.floor(Math.random() * 2);
    }

    return binaryNum;
};