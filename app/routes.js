/**
 * Created by gemini on 2016/11/24.
 */
var path = require('path');
var fs = require("fs");

module.exports = function (app) {

    app.get('/upload', function (req, res) {
        // path.resolve(__dirname, '..')
        res.sendFile(path.resolve(__dirname, '..')+'/public/upload.html' );
        // res.sendFile(process.cwd(), '/swagger-node-service/publisc/upload.html');
    });

    app.post('/file_upload', function (req, res) {
        console.log(req.files[0]);  // 上传的文件信息
        var des_file = path.resolve(__dirname, '..') + "/public/" + req.files[0].originalname;
        console.log(des_file);
        fs.readFile( req.files[0].path, function (err, data) {
            fs.writeFile(des_file, data, function (err) {
                if( err ){
                    console.log( err );
                }else{
                    response = {
                        message:'File uploaded successfully',
                        filename:req.files[0].originalname
                    };
                }
                console.log( response );
                res.redirect('/');
                // res.end( JSON.stringify( response ) );
            });
        });
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html');
    });

};