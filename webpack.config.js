
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
    const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment = process.env.NODE_ENV != 'production'



module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    //passando arquivo que sera convertido
    entry: path.resolve(__dirname,'src','Index.tsx'),
    //passando diretorio e arquivo que deve ser gerado apos a conversão
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    //passando o tipo de extensão que ele deve converter
    resolve:{
        extensions:['.js','.jsx','.ts','.tsx'],
    },
    devServer:{
        static: path.resolve(__dirname, 'public'),
        },
    plugins: [
        isDevelopment  && new ReactRefreshWebpackPlugin(),

        new HtmlWebPackPlugin({
                template: path.resolve(__dirname, 'public', 'index.html')
        })
    ].filter(Boolean), 

    
    //definindo regras de comportamento para cada tipo de arquivo
    module:{
        rules: [
            {
                test: /\.(j|t)sx$/,
                exclude: /node_modules/,
                //conecta o webpack ao babel
                use:{
                    loader:'babel-loader',
                options: {
                    plugins: [
                        isDevelopment && require.resolve('react-refresh/babel')
                    ].filter(Boolean)
                }
                    }
            },

            {
                test: /\.css$/,
                exclude: /node_modules/,
                //conecta o webpack ao babel
                use:['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                //conecta o webpack ao babel
                use:['style-loader', 'css-loader', 'sass-loader'],
            }
        ]
    }
}