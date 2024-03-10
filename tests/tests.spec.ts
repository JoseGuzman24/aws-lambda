import { getStarWars } from "../src/starWars"

describe('', () => {
    test('', async () => {
        const callback = (error, response) => {
            expect(response.statusCode).toEqual(200);
            // expect(typeof response.body).toBe("string");
        };
        await getStarWars(callback)
        console.log('info ==> ')
    })
})