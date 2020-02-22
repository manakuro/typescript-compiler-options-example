const hello = () => {
  const age: number = 10

  switch (age) {
    case 1:
      return "Hello, age 1"
    case 2:
      return "Hello, age 2"
    case 3:
      console.log('case 3')
      return "Hello, age 3"
    default:
      return 'Hello'
  }
}


