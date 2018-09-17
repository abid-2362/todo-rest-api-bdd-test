import app from './app';
import serverConfig from './serverConfig';

app.listen(serverConfig.port, () => {
  console.log('server is running at '+ serverConfig.port);
});