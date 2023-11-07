export async function isAdminUser(req, res, next){
    if (req.user && req.user.isAdmin){
        next()
        return
    } else{
        res.status(502).send("Operation not allowed")
    }
}