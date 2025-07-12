import getHealthStatus from '../health';

    test('should return "healthy" for health > 50', () => {
        expect(getHealthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
    });

    test('should return "wounded" for health between 16 and 50', () => {
        expect(getHealthStatus({ name: 'Маг', health: 50 })).toBe('wounded');
        expect(getHealthStatus({ name: 'Маг', health: 30 })).toBe('wounded');
    });

    test('should return "critical" for health <= 15', () => {
        expect(getHealthStatus({ name: 'Маг', health: 15 })).toBe('critical');
        expect(getHealthStatus({ name: 'Маг', health: 10 })).toBe('critical');
    });

// test.each([
//   ["маг", 100, "healthy"],
//   ["целитель", 50, "wounded"],
//   ["танк", 3, "critical"],
// ])("testing function health with a %s character and a health value of %i", (name, health, expected) => {
//   let healthStatus = getHealthStatus({name, health});
//   expect(healthStatus).toBe(expected);
// });