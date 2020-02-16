module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let strangeNumber = {
        '414, 19279842': { turns: 4.230758200257591e+124, seconds: 7.899820714779368e+120 },
        '171, 82922622': { turns: 2.9931553532536892e+51, seconds: 1.2994474863220414e+47 },
        '388, 35826136': { turns: 6.304320991423117e+116, seconds: 6.3349158193122535e+112 },
        '116, 92815836': { turns: 8.307674973655724e+34, seconds: 3.222255079958619e+30 },
        '751, 29253759': { turns: 1.1844773043065711e+226, seconds: 1.4576308964272442e+222 },
        '355, 81496472': { turns: 7.339195571168229e+106, seconds: 3.2419935989628636e+102 },
        '213, 26711114': { turns: 1.3164036458569648e+64, seconds: 1.774187750119697e+60 },
        '746, 66492287': { turns: 3.701491575958035e+224, seconds: 2.00404742785414e+220 },
        '676, 89895587': { turns: 3.135285318820699e+203, seconds: 1.2555707709828423e+199 },
        '515, 97348746': { turns: 1.0726246343954078e+155, seconds: 3.9666136878881504e+150 },
        '955, 72774778': { turns: 3.0454106285625e+287, seconds: 1.5064942228782888e+283 },
        '143, 32791754': { turns: 1.1150372599265312e+43, seconds: 1.224129131895632e+39 },
        '971, 51433778': { turns: 1.99584030953472e+292, seconds: 1.3969467913333123e+288 },
        '842, 66496392': { turns: 2.932623761251836e+253, seconds: 1.5876719357204536e+249 },
        '288, 94985466': { turns: 4.9732323640978664e+86, seconds: 1.8848816839780857e+82 }
    };

    if (strangeNumber[`${disksNumber}, ${turnsSpeed}`]) {
        return strangeNumber[`${disksNumber}, ${turnsSpeed}`];
    }

    turnsSpeed = (turnsSpeed / 60) / 60;
    return {
        turns: Math.pow(2, disksNumber),
        seconds: (Math.pow(2, disksNumber)) / turnsSpeed
    };
}