function* test () {
    let s = 0;
    while (true) {
        const a = yield;
        s += a;
        yield s;
    }
}

const t = test();
for (let i = 0; i < 10; i++) {
    console.log(t.next(i + 1).value);
}
