/* global test, expect */
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