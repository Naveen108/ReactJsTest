//Naveen Soni
//this is seprate part of webpack configureation here

//pulling the pack
var webpack = require("webpack");
//a js lib to get the path of app
var path = require("path");
//directory where we want to serve our app after been bundled
// it means copy every thing is prepared to ve served in the dist folder which we will make
var DIST_DIR = path.resolve(__dirname,"dist");
//this tells that where is the uncompiled code is kept
var SRC_DIR = path.resolve(__dirname,"src");


//this is js obejct
//first  things is first file that is entry file - where from the bundling starts at the index file , it makes sure they
//pulled in right order,now output tells where to output the file
//output a another js object where the path is given and the filename as bundle.js beacause everything will be bundled
//then we will define the module we want to compile here we will some modules
//loaders is another topic to look at
// we want to look at all js files as we are writing in js
// in the source loation
// the loader name and finally the query which is required - guven names the presets the dev dependecndies names

var config;
config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app"
    },
    module: {


        rules: [

            {

                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            }

        ]


    }
};

module.exports = config;