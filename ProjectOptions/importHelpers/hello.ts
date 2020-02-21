export const hello = () => new Promise(resolve => resolve('hello'))
export const say = async () => await hello()
