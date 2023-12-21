const seededRandom = function (seed) {
    let m = 2 ** 35 - 31;
    let a = 185852;
    let s = seed % m;
    return function () {
        return (s = (s * a) % m) / m;
    };
};

export function fetchAPI(date) {
    let result = [];
    let dt = new Date(date);
    let seed = dt.getDate();

    let random = seededRandom(seed);
    for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
            result.push(i + ":00");
        }
        if (random() < 0.5) {
            result.push(i + ":30");
        }
    }
    return result;
}

export function submitAPI(formData) {
    return true;
}