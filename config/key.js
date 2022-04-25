if(process.env.NODE_ENV === 'production'){              // 실제 운영서버일 경우.
    module.exports = require('./prod');
}else{
    module.exports = require('./dev');
}