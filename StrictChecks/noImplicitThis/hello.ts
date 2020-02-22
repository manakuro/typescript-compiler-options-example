const hello = {
  name: 'Tom',
  say: function () {
    return () => {
      return this.name
    }
  }
}
