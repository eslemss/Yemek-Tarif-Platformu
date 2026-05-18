const jwt = require('jsonwebtoken');

const app_secret="myappsecret";
const username="admin";
const password="secret";        

module.exports = function(req, res, next) {
   if (req.url === '/login' && req.method === 'POST') {
    let token = jwt.sign({ data:username , expiresIn: '1h' }, app_secret);
    res.json({success: true, token: token});
    res.end();
  } else {
    if((req.url.startsWith('/recipes') || req.url.startsWith('/categories')) && (req.method!='GET')) {
        let token = req.headers['authorization'];
        if (token && token.startsWith('Bearer ')) {
            token=token.substring(7, token.length);
            try {
                jwt.verify(token, app_secret);
                next();
            } catch (err) {
                res.json({success: false, message: 'Unauthorized'});
                res.end();
            }
        } else {
            res.json({success: false, message: 'Unauthorized'});
         res.statusCode = 401;
            res.end();
            return;
           
        }
    }
}
}