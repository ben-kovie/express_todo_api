const addRequestTime = (req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
};

export default addRequestTime;
