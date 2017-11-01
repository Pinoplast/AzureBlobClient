var azure = require('azure-storage');
var fs = require("fs");
var blobSvc = azure.createBlobService("%YOUR CONNECTION STRING%");

module.exports.uploadToService = function (filePath){
    blobSvc.createContainerIfNotExists('storage', function(error, result, response){
        if(!error){
            blobSvc.createBlockBlobFromLocalFile('storage', filePath, "storage/" + filePath, function(error, result, response){
                if(!error){
                            
                }
              });
        }
    });
}
