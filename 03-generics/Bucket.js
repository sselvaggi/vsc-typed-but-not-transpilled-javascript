var Bucket = (function () {
    function Bucket() {
        this.data = {};
    }
    Bucket.prototype.getItem = function (key) {
        return this.data[key];
    };
    Bucket.prototype.setItem = function (key, item) {
        this.data[key] = item;
    };
    return Bucket;
})();
exports.Bucket = Bucket;
