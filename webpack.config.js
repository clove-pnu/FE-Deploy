const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'auto',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                namedExport: false,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'deploy',
      filename: 'remoteEntry.js',
      remotes: {
        auth: 'auth@http://localhost:3001/remoteEntry.js',
        monitor: 'monitor@http://localhost:3006/remoteEntry.js',
        // When Build
        // auth: 'auth@http://cse.ticketclove.com/page/auth/remoteEntry.js',
        // monitor: 'monitor@http://cse.ticketclove.com/page/monitor/remoteEntry.js',
      },
      exposes: {
        './OwnerPage': './src/pages/OwnerPage',
        './PlayDetailPage': './src/pages/PlayDetailPage',
        './TemplatePage': './src/pages/TemplatePage',
        './DeployConcertPage': './src/pages/DeployConcertPage',
        './PlayMonitorPage': './src/pages/PlayMonitorPage',
        './ServerMonitorPage': './src/pages/ServerMonitorPage',
        './PlayConfigurationPage': './src/pages/PlayConfigurationPage',
      },
      shared: ['react', 'react-dom', 'react-router-dom', 'axios'],
    }),
  ],
  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'dist'),
      },
      {
        directory: path.join(__dirname, 'public'),
      },
    ],
    compress: false,
    port: 3002,
    historyApiFallback: true,
  },
};
