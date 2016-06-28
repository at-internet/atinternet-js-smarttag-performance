var SmartTagMock = function () {
    var _self = this;
    _self.params = {stc: null};
    _self.page = {
        set: function (value) {
            _self.params.stc = value;
        }
    }
};

describe('Performance plugin', function () {
    var perfPlugin, smartTagMock;
    beforeEach(function () {
        smartTagMock = new SmartTagMock();
        perfPlugin = (window['ATInternet']['Tracker']['Plugins']['performance'])(smartTagMock);
    });
    it('should set stc parameter', function () {
        expect(smartTagMock.params.stc).to.be.a('object');
    });

});