function* genFunc() {
    const y = yield 1;
    const x = yield (y+10);
    return y-x;
}

const gen = genFunc();
console.log(gen.next(10));
console.log(gen.next(10));
console.log(gen.next(20));
