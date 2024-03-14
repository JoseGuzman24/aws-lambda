import { generateRandom, getStarWars, getStarWarsAndSave } from "../src/starWars";
import { getTasks } from "../src/tasks";

describe("validate StarWars class", () => {
    test("validate method getStarWarsAndSave", async () => {
        const response = await getStarWarsAndSave('')
        expect(response.statusCode).toBe(200)
    });

    test("validate method getStarWars", async () => {
        const response = await getStarWars('')
        expect(response.statusCode).toBe(200)
    });

    test("validate method generateRandom", async () => {
        const min = 1
        const max = 10
        const result = generateRandom(min, max)
        expect(result).toBeLessThan(max)
    });
});

describe("validate Task class", () => {
    test("validate method getTasks", async () => {
        const response = await getTasks('')
        expect(response.statusCode).toBe(200)
    });
});
