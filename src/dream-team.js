module.exports = function createDreamTeam(members) {

    if (!Array.isArray(members)) {
        return false;
    }

    return members.reduce((result, member) => {
        if (typeof member == 'string') {
            result.push(/[a-zA-Z]/g.exec(member)[0].toUpperCase());
        }
        return result;
    }, []).sort().join('');
};