'use strict'

let path= require('path')

module.exports={
    mode:'development',
    entry:'./jsS/js/script.js',
    output:{
        filename:'Asosiy.js',
        path:__dirname+'/AsosiyJs'
    },
    watch:true,

    devtool: 'source-map',

    module: {}
}