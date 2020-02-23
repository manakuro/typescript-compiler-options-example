const classDecorator = (constructor: Function) => {
  console.log('decorator function invoked');
}

@classDecorator
class MyClass {
  method() {}
}
