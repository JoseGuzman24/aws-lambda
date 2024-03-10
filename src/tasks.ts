import { v4 } from 'uuid'
import { DynamoDB } from 'aws-sdk'
import { TaskBuilder, TaskEntity } from './entities/taskEntity';
import { validateJoi } from './helper/validationHelper';
import { TASK_INSERT } from './schema/schemas';

export const addTask = async (event) => {
    try {
        validateJoi({ ...JSON.parse(event.body) }, TASK_INSERT)
        const dynamodb = new DynamoDB.DocumentClient()
        const { title, description } = JSON.parse(event.body)
        const taskEntity: TaskEntity = new TaskBuilder().addId(v4()).addTitle(title).addDescription(description).addCreatedAt(new Date())
        await dynamodb.put({ TableName: 'TaskTable', Item: taskEntity }).promise()
        return { statusCode: 201, body: JSON.stringify(taskEntity) }
    } catch (e) {
        return { statusCode: 500, body: JSON.stringify({ message: `${e.message}`}) }
    }
}

export const getTasks = async (event) => {
    try {
        const dynamodb = new DynamoDB.DocumentClient()
        const result = await dynamodb.scan({ TableName: 'TaskTable' }).promise()
        const tasks = result.Items as TaskEntity[]
        const allTask = tasks as TaskEntity[]
        return { statusCode: 200, body: JSON.stringify(allTask) }
    } catch (e) {
        console.log(e);
        return { statusCode: 500, body: JSON.stringify({ message: `${e.message}`}) }
    }
}