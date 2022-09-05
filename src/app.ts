import express from 'express';
import mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import logger from './util/logger';

class App {
    public app: express.Application;
    public port: number;
   
    constructor(controllers: any[], port: number) {
        this.app = express();
        this.port = port;
    
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
        this.initMongoDb();
    }
   
    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
    }
   
    private initializeControllers(controllers) {
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        });
    }

    private initMongoDb() {
        // TODO: Init mongodb and add connection string in env vars
        /*mongoose.connect("").then(response => {
            console.log("Successfully connected to MongoDb");
        }).catch(error => {
            console.log(error);
        });*/
    }
   
    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}
   
export default App;