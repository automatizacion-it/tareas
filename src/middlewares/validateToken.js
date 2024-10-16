//son funciones que se ejecutan  antes que lleguen a una ruta
export const authRequired = (req, res, next) => {
    const cookies = req.cookies
    console.log(cookies)
    //console.log(req.headers);
    next();
}