const manufracture = require('./manufracture')

describe('create', () => {
    test('Test 1', () => { 
        expect(manufracture(["tren", "oso", "pelota"],"tronesa").toEqual(["tren","oso"])) 
    });
    test('Test 2', () => { 
        expect(manufracture(['juego', 'puzzle'],"jlepuz").toEqual(['puzzle'])) 
    });
});