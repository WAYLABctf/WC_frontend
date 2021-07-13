const path = require('path'); // Import Node.js' path controller

module.exports = {
    name: 'word-relay-setting', // Any name. Unnecessary option
    mode: 'development', // For real service:production
    devtool: 'eval', // Fast. "hidden-source-map" for real service
    resolve: {
        extensions: ['.js', '.jsx'] // No need to write .js or .jsx for files under entry
    },

    // Important part
    entry: {
        app: ['./src/index'], // Files to make the output file. If files are imported in another file, they don't need to be written down here. 'WordRelay.jsx' is imported in 'client.jsx'
    },
    
    module: { //These modules are applied to the entries to produce outputs
        rules: [{
            test: /\.jsx?$/, //Regular expression. Apply rules to js and jsx file
            loader: 'babel-loader', // specifies which rule to apply
            options: { // Options of the module (i.e. babel)
                presets: [
                	['@babel/preset-env', {
                    targets: {
                    	browsers: ['> 5% in KR', 'last 2 chrome versions'],
                    },
                    debug: true,
                	}],
                '@babel/preset-react',
                ],
                plugins: [
                	'@babel/plugin-proposal-class-properties',
                    'react-hot-loader/babel',
                ],
            },
        }],
    },
    output: {
        path: path.join(__dirname, 'dist'), // Set's the path to <current directory>/dist
        filename: 'app.js'  //output file
    },
};