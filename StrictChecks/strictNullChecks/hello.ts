type Hello = {
  greet?: () => string
}

const hello: Hello = {}

hello.greet && hello.greet()

