const myLogger = (target: any,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor) => {
  console.log('log invoked');
}

class MyClass {
  @myLogger
  method() {}
}

new MyClass()
