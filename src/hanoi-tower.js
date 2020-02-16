module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

    turnsSpeed = (turnsSpeed / 3600);
    
    return {
        turns: Math.pow(2, disksNumber),
        seconds: (Math.pow(2, disksNumber)) / turnsSpeed
    };
 
}