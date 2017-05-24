const {generateMessage} = require('./message');
const expect = require('expect');

describe('generate message tests', () => {
    it('should generate a message correctly', () => {
        const message = generateMessage('Admin', 'Hello All');
        expect(message.from).toBe('Admin');
        expect(message.text).toBe('Hello All');
        expect(message.createdAt).toBeA('number');
    })
})