import * as Joi from 'joi'

export const TASK_INSERT = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required()
})