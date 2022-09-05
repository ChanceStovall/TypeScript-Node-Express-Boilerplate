import * as express from 'express';
 
class HomeController {
    public path = '/';
    public router = express.Router();
    
    constructor() {
        this.intializeRoutes();
    }
    
    public intializeRoutes() {
        this.router.get(this.path, this.getTestInfo);
        this.router.post(this.path, this.postTestInfo);
    }
    
    getTestInfo = async (request: express.Request, response: express.Response) => {
        response.json({"ye": "yeee"});
    }
    
    postTestInfo = async (request: express.Request, response: express.Response) => {
        response.json({"ye": "yeee"});
    }
}
 
export default HomeController;