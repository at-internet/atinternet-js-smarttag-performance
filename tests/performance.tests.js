var SmartTagMock = function(){
    this.params = {};
    this.setParam = function(param, value){
        this.params[param]=value;
    }
};

describe('Performance plugin', function(){
    var perfPlugin, smartTagMock ;
    beforeEach(function(){
        smartTagMock = new SmartTagMock();
        perfPlugin = (window['ATInternet']['Tracker']['Plugins']['performance'])(smartTagMock);
    });
    it('should serialize perf parameter', function(){
        expect(smartTagMock.params.perf).to.be.a('string');
    });
    it('should set perf parameter', function(){
        expect(smartTagMock.params.perf).to.exist;
    });

});