const unzip = arr =>
  arr.reduce(
    (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
    Array.from({
      length: Math.max(...arr.map(x => x.length))
    }).map(x => [])
  );
console.log(unzip([['a', 1, true], [2, 'b', false]]));
console.log(unzip([['a', 1, true], ['b', 2]]));

// https://runebook.dev/ru/docs/javascript/global_objects/array/from