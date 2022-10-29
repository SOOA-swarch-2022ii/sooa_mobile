import { createProxyMiddleware } from 'http-proxy-middleware';

export default function(app) {
    app.use(
        '/auth',
        createProxyMiddleware({
            target: 'http://192.168.0.3:8090',
            changeOrigin:true,
        })
    );
    app.use(
        '/graphql',
        createProxyMiddleware({
            target: 'http://192.168.0.3:8090',
            changeOrigin:true,
        })
    );
};