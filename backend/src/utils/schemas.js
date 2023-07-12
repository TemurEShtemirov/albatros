import * as z from 'zod';

const updateTaskSchema = z.object({
  body: z.string().optional(),
  date: z.string().optional(),
  smallBody: z.string().optional(),
  categoryId: z.number().optional(),
  completed: z.boolean().optional(),
});

export {
  updateTaskSchema
};
