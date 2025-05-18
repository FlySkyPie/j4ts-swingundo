
function deepMerge(target, source) {
    for (const key in source) {
        if (typeof source[key] === 'object' && source[key] !== null && target[key]) {
            deepMerge(target[key], source[key]);
        } else {
            target[key] = source[key];
        }
    }
    return target;
}

if (!globalThis.javax) {
    globalThis.javax = javax;
} else {
    deepMerge(globalThis.javax, javax)
}
