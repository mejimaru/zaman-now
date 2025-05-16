import { sayHello } from "../src/say-hello";

describe('sayHello', function() { 
    it('should return hello Meiji', function() {
        expect(sayHello('Meiji')).toBe('Hello Meiji');
    });
 });

