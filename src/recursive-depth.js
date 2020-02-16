module.exports = class DepthCalculator {

    calculateDepth(arr, root = 1, depth = []) {

        depth.push(root);

        for (let i = 0; i < arr.length; ++i) {
            if (Array.isArray(arr[i])) {
                this.calculateDepth(arr[i], root + 1, depth);
            }
        }

        let max = 0;

        for (let i = 0; i < depth.length; ++i) {
            if (depth[i] > max) {
                max = depth[i];
            }
        }

        return max;
    }
};