const fs=require('fs');
const path=require('path');

module.exports = {
    port: '8080',
    host: '127.0.0.1',
    getConfigNpmOrYarn: function () {
        const isYarn = fs.existsSync(path.resolve(process.cwd(), "yarn.lock"));
        return isYarn?'yarn':'npm run'
    }
}