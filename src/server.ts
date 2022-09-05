import App from './app';
import HomeController from './controllers/HomeController';
 
const app = new App(
    [
        new HomeController()
    ],
    5000
);
 
app.listen();