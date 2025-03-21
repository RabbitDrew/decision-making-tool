const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

//*main configFunction
const getConfig = (argv) => {
  //* mode condition
  const devMode = argv.mode === 'development' ? 'development' : 'production';

  //* get path for production build if mode === production
  const build = () => {
    const buildObj = {
      path: path.resolve(__dirname, './decision-making-tool/dist'),
      filename:
        devMode === 'development' ? 'index.js' : 'index.[contenthash].js',
      clean: true,
    };
    return devMode === 'production' ? buildObj : {};
  };

  //* condition for server running
  const runServer = () => {
    const devServ = {
      static: path.resolve(__dirname, './decision-making-tool/src'),
      port: 2000,
      hot: true,
    };
    return devMode === 'development' ? devServ : {};
  };

  //* config
  const config = {
    mode: devMode,
    entry: './decision-making-tool/src/index.ts',
    output: build(),
    devServer: runServer(),
    plugins: [
      new HtmlWebpackPlugin({
        template: './decision-making-tool/src/index.html',
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'decision-making-tool/src/assets'),
            to: 'assets',
          },
        ],
      }),
    ],

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/[name][ext]',
          },
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
  };

  return config;
};

module.exports = (env, argv) => getConfig(argv);
