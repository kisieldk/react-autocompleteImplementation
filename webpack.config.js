/// <binding BeforeBuild='Run - Development' />
'use strict';

var path = require('path');
module.exports = {
    context: __dirname + "/src",
    entry: {
        //This is a Key:Value pair of entry points.
        //An entry point is the ES6 version of the file you will include in your HTML page
        //Webpack will first transpile this code, then if any imports are found will recursively transpile
        //All files imported using the ES6 import keywork
        //SUPER IMPORTANT NOTE: Webpack DOES NOT GENERATE THIS FILE, THIS IS THE FILE YOU CREATE AND WORK ON.
        Modules: './index.js'
    },
    output: {
        //This is the transpiled file that webpack will create.
        //[name] is replaced by the entry point's key from the key value pair above.
        //This is especially useful if you have multiple entry points
        filename: "[name].index.js",
        //This is the location of the output of the file specified above.
        //__dirname is a webpack constant that gives you the current webpack js config location.
        path: __dirname + '/js'
    },
    module: {
        loaders: [
            {
                //This tells webpack the file extension that contains your ES6 code.
                //We have assumed all JS files in our entry points will contain ES6.
                //Another practice you might use is to name your files .es6
                test: /\.jsx?$/, //=> Could be /\.es6?$/
                //This like makes sure we dont compile any node or bower modules
                exclude: /(node_modules|bower_components)/,
                //Specify babel as our installed transpiler
                loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
                query: {
                    //Chose es2015 as our transpiled JS version.
                    presets: ['env', 'react']
                }
            }
        ]
    }
};