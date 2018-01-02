export const valueOfBinary = (binaryNum) => {
    let total = 0;
    let spot = 1;
    for(let i = binaryNum.length - 1; i >= 0; i--){
        total =  total + (binaryNum[i] * spot);
        spot = spot * 2;
    }
    return total;
};