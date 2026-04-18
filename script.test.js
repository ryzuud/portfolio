const { Typewriter } = require('./script.js');

describe('Typewriter', () => {
    let element;

    beforeEach(() => {
        jest.useFakeTimers();
        element = document.createElement('div');
    });

    afterEach(() => {
        jest.clearAllTimers();
        jest.useRealTimers();
    });

    it('should initialize correctly and start typing', () => {
        const typewriter = new Typewriter(element, ['Hello'], 100, 1000);

        expect(typewriter.element).toBe(element);
        expect(typewriter.texts).toEqual(['Hello']);
        expect(typewriter.speed).toBe(100);
        expect(typewriter.pause).toBe(1000);
        expect(typewriter.isDeleting).toBe(false);
        expect(typewriter.textIndex).toBe(0);
        expect(typewriter.charIndex).toBe(1); // Because type() is called in constructor
        expect(element.textContent).toBe('H');
    });

    it('should type out the full text', () => {
        const typewriter = new Typewriter(element, ['Hi'], 100, 1000);

        expect(element.textContent).toBe('H');

        jest.advanceTimersByTime(100);
        expect(element.textContent).toBe('Hi');
        expect(typewriter.charIndex).toBe(2);
        expect(typewriter.isDeleting).toBe(true); // Since length is reached
    });

    it('should delete the text after typing and pausing', () => {
        const typewriter = new Typewriter(element, ['Hi'], 100, 1000);

        // Type 'Hi'
        jest.advanceTimersByTime(100);
        expect(element.textContent).toBe('Hi');
        expect(typewriter.isDeleting).toBe(true);

        // Pause before deleting
        jest.advanceTimersByTime(1000);
        expect(element.textContent).toBe('H');

        // Deleting is twice as fast (speed / 2 = 50)
        jest.advanceTimersByTime(50);
        expect(element.textContent).toBe('');
        expect(typewriter.isDeleting).toBe(false);
        expect(typewriter.textIndex).toBe(0); // Only one string, so loops to 0
    });

    it('should loop through multiple texts', () => {
        const typewriter = new Typewriter(element, ['Hi', 'Yo'], 100, 1000);

        // Type 'Hi'
        jest.advanceTimersByTime(100);
        expect(element.textContent).toBe('Hi');

        // Pause and delete 'Hi'
        jest.advanceTimersByTime(1000); // deletes 'i', charIndex=1
        jest.advanceTimersByTime(50);   // deletes 'H', charIndex=0, switches to next word

        expect(element.textContent).toBe('');
        expect(typewriter.isDeleting).toBe(false);
        expect(typewriter.textIndex).toBe(1); // Moves to 'Yo'

        // Next word has 400ms delay before starting
        jest.advanceTimersByTime(400);
        expect(element.textContent).toBe('Y');

        jest.advanceTimersByTime(100);
        expect(element.textContent).toBe('Yo');
    });

    it('should update texts and restart', () => {
        const typewriter = new Typewriter(element, ['Hello'], 100, 1000);

        expect(element.textContent).toBe('H');

        typewriter.updateTexts(['World', 'Earth']);

        // updateTexts sets charIndex=0, textIndex=0, isDeleting=false, element.textContent='', then calls type()
        // type() types 'W' immediately
        expect(element.textContent).toBe('W');
        expect(typewriter.isDeleting).toBe(false);
        expect(typewriter.textIndex).toBe(0);

        // Next typing
        jest.advanceTimersByTime(100);
        expect(element.textContent).toBe('Wo');
    });
});
