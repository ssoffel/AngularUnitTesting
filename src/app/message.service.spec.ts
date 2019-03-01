import { MessageService } from './message.service';

describe('Message Service', () => {
   
    let messageService: MessageService;

    beforeEach(() => {
        messageService = new MessageService;
       
    })

    describe('add message', () => {
        it('should add a meesage to the messages array', () => {
            messageService.add('Message1');
            expect(messageService.messages.length).toBe(1);
        })
        it('should add a meesage to the messages array', () => {
            messageService.add('Message1');
            expect(messageService.messages[0]).toEqual('Message1');
        })
    })

    describe('clear message', () => {
        it('should clear all meesages from the messages array', () => {
            messageService.add('Message1');
            messageService.clear();

            expect(messageService.messages.length).toEqual(0);
        })
        
    })
})