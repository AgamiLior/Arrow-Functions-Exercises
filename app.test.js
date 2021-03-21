describe("#squareAndEven", function () {
    it("it powers value in array and return only the even ones", function () {
        expect(squareAndEven([1, 2, 3, 4, 5])).toEqual([4, 16]);
    });
});
describe("#double", function () {
    it("it return double the value in array of number ", function () {
        expect(double([1, 2, 3, 4, 5])).toEqual([2, 4, 6, 8, 10]);
    });
});