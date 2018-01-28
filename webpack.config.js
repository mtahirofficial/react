module.exports = {
    entry:"./index.jsx",
    output:{
        filename:"output.js",
        // path:'./'
    },
    module:{
        loaders:[
            {
                test:/.css$/,
                loader:['style-loader', 'css-loader']
            },
            {
            test: /.jsx$/,
            loader: 'babel-loader',
            query: {
                presets:['es2015', 'react']
            }
        }]
    }
}