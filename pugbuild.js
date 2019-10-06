const pug = require('pug');
const fs = require('fs');

const build = {
    index: () => {
        const pages = Array();
        const config = require('./src/config.json');

        config.pages.forEach((pageName) => {
            const pageCompileFunction = pug.compileFile(`src/page/${pageName}.pug`);
            pages.push(pageCompileFunction(config.static));
        });

        const compiledFunction = pug.compileFile('src/index.pug');

        fs.writeFileSync('build/index.html', compiledFunction({
            pages: pages
        }));
    }
}

module.exports = {
    build
};