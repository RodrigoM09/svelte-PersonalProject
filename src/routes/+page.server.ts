import { z } from 'zod'
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server'

export const load = async (event) => {
    const form  = await superValidate(event, newContactSchema)
    return {
        form
    }
}

const newContactSchema = z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    email: z.string().email(),
    company: z.string().min(1)
})

export const actions = {
    default: async (event) => {
        const form = await superValidate(event, newContactSchema)
        console.log(form)

        if(!form.valid) {
            return fail(400,{
                form
            })
        }
        return { form }
    }
}
