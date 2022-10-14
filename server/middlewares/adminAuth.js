import jwt from "jsonwebtoken";

export const adminAuth = async (req, res, next) => {
    const token = req.cookies.access_token
    if (!token) {
        return res.sendStatus(403).json("You are not logged in");
    } else {
        try {
            const data = jwt.verify(token, process.env.TOKEN_SECRET);
            if(data.is_admin === true) 
                return next();
            else 
                return res.sendStatus(403).json("You are not an Author");
          } catch {
            return res.sendStatus(403);
          }
    }
}