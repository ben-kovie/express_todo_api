const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // MUST call next to move to the next middleware
};

export default logger;
