import * as Joi from "joi"

export const validateJoi = (object: any, schema: Joi.ObjectSchema) => {
    const { error } = schema.validate(object)
    const errorMessage = error?.details[0].message || ''

    if (error) throw new Error(errorMessage)
}