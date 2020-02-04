const sine = x => Math.sin(x);
const cube = x => x ** 3;

const sinCube = x => sine(cube(x));

const compose = (f, g) => x => f(g(x));

const sinOfCube = compose(sine, cube);

let x = 5;
console.log(sinCube(x), sinOfCube(x));

sine = x => [Math.sin(x), console.log('sine was called')];
