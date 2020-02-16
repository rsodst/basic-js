const chainMaker = {
    chains: [],
    getLength() {
        return this.chains.length;
    },
    addLink(value) {

        this.chains.push({
            value: `( ${value} )`,
            isDeleted: false
        });

        return this;
    },
    removeLink(position) {

        let chain = this.chains[position - 1];

        if (chain) {

            chain.isDeleted = true;
            this.chains = this.chains.filter(p => p.isDeleted == false);

        } else {

            let length = this.chains.length;

            for (let i = 0; i <= length; ++i) {
                this.chains.pop();
            }

            throw new Error();
        }


        return this;
    },
    reverseChain() {
        this.chains.reverse();
        return this;
    },
    finishChain() {
        let result = this.chains.filter(p => p.isDeleted == false);

        let length = this.chains.length;

        for (let i = 0; i <= length; ++i) {
            this.chains.pop();
        }

        if (result) {
            result = result.map(p => `${p.value}~~`).join('');
            return result.substr(0, result.length - 2);
        }



        return '';
    }
};


module.exports = chainMaker;