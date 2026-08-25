const Download = require("./lib/download");


function createAndStartDownload(url, directory) {
    return new Download(url, directory);
}


module.exports = {
    createAndStartDownload
}