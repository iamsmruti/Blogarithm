import Joi from 'joi'

export const validationAdmin = data => {
    const schema = Joi.object({
        email: Joi.string().required().email(),
        password: Joi.string().min(6).required(),
        is_admin: Joi.boolean(),
        is_author: Joi.boolean()
    })

    return (schema.validate(data))
}