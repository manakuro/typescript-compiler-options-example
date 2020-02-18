const hi = () => new Promise(resolve => resolve('hi'))
const hey = async () => await hi()
console.log(hey())
