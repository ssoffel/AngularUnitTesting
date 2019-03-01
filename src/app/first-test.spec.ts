describe('my first test', () => {
    let sut;
    beforeEach(() => {
        sut = {};
    })

    it('should be true if true', () => {
        //initial state
        sut.a = false;

        //chnage state
        sut.a = true;

        //assert
        expect(sut.a).toBe(true);
    })
})


