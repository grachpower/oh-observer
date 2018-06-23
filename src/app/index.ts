import * as express from 'express';
import * as path from 'path';
import ogPagesRouter from "./routing/og-pages";

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'pug');
app.set('views', `${path.join(__dirname)}/views`);

app.use(express.static(`${path.join(__dirname)}/../assets`));
app.use('/', ogPagesRouter);


app.listen(port, () => console.log('Seshme og app listening on port 3000!'));

