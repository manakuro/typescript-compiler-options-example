var hello = {
    name: 'Tom',
    say: function () {
        var _this = this;
        return function () {
            return _this.name;
        };
    }
};
console.log(hello.say()());
