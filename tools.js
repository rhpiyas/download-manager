const Download = require("./lib/download");


function createAndStartDownload(url, directory) {
    return new Download(url, directory);
}


function createAndStartCompression(source) {
    return new Compression(source, `${source}.zip`);
}

module.exports = {
    createAndStartDownload
}