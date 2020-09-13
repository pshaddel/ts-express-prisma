import express from 'express';
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';
import Config from '../config';
import createUser from './createUser';
dotenv.config();

const config = Config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req:express.Request, res:express.Response, next:express.NextFunction) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, AUTHORIZATION");
	next();
});

app.get('/ping', (req: express.Request, res: express.Response) => {
      res.send('pong');
});

app.post('/user', async (req: express.Request, res: express.Response) => {
    const result = await createUser()
	res.json({result});
});

app.listen(config.PORT);
console.info("App is listenng on port:", config.PORT)