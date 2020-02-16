const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    // validate  
    if (typeof sampleActivity != 'string' ||
        /[a-zA-Z]/g.test(sampleActivity) ||
        (sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY)) {
        return false;
    }

    sampleActivity = parseFloat(sampleActivity);

    //calculate
    let t = Math.log((MODERN_ACTIVITY / sampleActivity)) / (0.693 / 5730);
    t = Math.ceil(t);

    return Math.abs(t);
};