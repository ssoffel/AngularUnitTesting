import { StrengthPipe } from './strength.pipe';

describe('strength pipe', () => {
    let pipe: StrengthPipe;
    
    beforeEach(() => {
        pipe = new StrengthPipe();
    })

    it ("it should return '9 (weak)' ", () => {
        
        expect(pipe.transform(9)).toEqual('9 (weak)');
    })

    it ("it should return '9 (strong)' ", () => {

        expect(pipe.transform(11)).toEqual('11 (strong)');
    })

    it ("it should return '100 (strong)' ", () => {
       
        expect(pipe.transform(100)).toEqual('100 (unbelievable)');
    })
})