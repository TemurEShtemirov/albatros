export const CategoryBodyValid = (req, res, next) => {
    try {
        const { title } = req.body;

        if (!title) {
            return res.status(400).json({ err: 'Bad request' });
            return;
        }

        return next();
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
};
