export const userAuth = async (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return res.sendStatus(403).json("You are not logged in");
    }
    next()
}