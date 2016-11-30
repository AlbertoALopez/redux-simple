import todos from './todos.js';

describe('todos reducer', () => {
    it('should return an initial state', () => {
        expect(todos(undefined, {})).toEqual([]);
    });

    it('should return ADD_TODO', () => {
        expect(todos([], {
            type: 'ADD_TODO',
            text: 'Testing',
            id: 0,
        })).toEqual([
            {
                text: 'Testing',
                completed: false,
                id: 0,
            },
        ]);
    });
});
