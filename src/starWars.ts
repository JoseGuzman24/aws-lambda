import { v4 } from 'uuid'
import axios from 'axios';
import { DynamoDB } from 'aws-sdk'
const AWS = require('aws-sdk')
import { StarWarsEntity } from './entities/startWardsEntity';

export const getStarWarsAndSave = async (event) => {
    try {
        AWS.config.update({region:'us-east-2'})
        const number = generateRandom(0, 10)
        const response = await axios.get(`https://swapi.py4e.com/api/planets/${number}/`);
        const starWarsEntity: StarWarsEntity = new StarWarsEntity({ ...response.data, id: v4() })
        const dynamodb = new DynamoDB.DocumentClient()
        await dynamodb.put({ TableName: 'StarWarsTable', Item: starWarsEntity }).promise()
        return { statusCode: 200, body: JSON.stringify(starWarsEntity) }
    } catch (e) {
        return { statusCode: 500, body: JSON.stringify({ message: `${e.message}`}) }
    }
}

const generateRandom = (min: number, max: number) => {
    const numPosibilidades: number = max - min;
    let aleatorio = Math.random() * (numPosibilidades + 1);
    aleatorio = Math.floor(aleatorio);
    return min + aleatorio
}

export const getStarWars = async (event) => {
    try {
        const dynamodb = new DynamoDB.DocumentClient()
        const result = await dynamodb.scan({ TableName: 'StarWarsTable' }).promise()
        const starWars = result.Items as StarWarsEntity[]
        const allStarWars = starWars as StarWarsEntity[]
        return { statusCode: 200, body: JSON.stringify(allStarWars) }
    } catch (e) {
        console.log(e);
        return { statusCode: 500, body: JSON.stringify({ message: `${e.message}`}) }
    }
}