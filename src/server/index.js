import WebServer from './web.server';

let webServer = new WebServer();
webServer.start()
    .then(() => {
        console.log('Web server started');
    })
    .catch(error => {
        console.error(error);
        console.error('Failed to start web server');
    });