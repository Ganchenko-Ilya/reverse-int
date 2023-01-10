module.exports = function reverse (n) {

    let array = String(n).split('');
    if(array[0] === '-' ){
        array.shift();
        return +array.reverse().join('');
    }
  return +String(n).split('').reverse().join('')
}
