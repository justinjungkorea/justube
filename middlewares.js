import routes from "./routes";

export const localMiddleware = (req, res, next) => {
    res.locals.siteName = "JusTube";
    res.locals.routes = routes;
    next();
};