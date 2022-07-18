import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const CONFIG = {
    rootPath: '/home/romaro/react-forms',
    projectDirName: 'mobx',
    outputDirName: '_public',
    pageName: 'LoginPage',
};

function pageFileName(type) {
    const pageName = CONFIG.pageName;

    switch (type) {
        case 'ejs':
            return pageName + '.ejs';
        case 'chunk':
            return pageName + 'Chunk.tsx';
        default:
            Error('unknown type');
    }
}

export default {
    mode: 'development',
    entry: './' + path.join('pages', CONFIG.pageName, pageFileName('chunk')),
    context: path.join(CONFIG.rootPath, 'packages', CONFIG.projectDirName),
    output: {
        path: path.join(
            CONFIG.rootPath,
            'packages',
            CONFIG.projectDirName,
            CONFIG.outputDirName,
        ),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.ejs$/,
                use: [
                    {
                        loader: 'ejs-compiled-loader',
                        options: {
                            htmlmin: false,
                            htmlminOptions: {
                                removeComments: true,
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:
                './' + path.join('pages', CONFIG.pageName, pageFileName('ejs')),
        }),
    ],
    optimization: {
        minimize: false,
    },
    devServer: {
        static: {
            directory: './_public/views',
        },
        compress: true,
        port: 9000,
    },
};
