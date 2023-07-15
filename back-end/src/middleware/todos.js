export const TodosBodyValid = (req, res, next) => {
    try {
        const { body, complete, smallBody , date } = req.body;


        if (!body || !complete || !smallBody ||!date) {
            return res.status(400).json({ err: 'Bad Request' });
            return;
        }

        return next();
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
};
