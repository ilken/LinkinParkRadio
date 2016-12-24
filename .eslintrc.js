module.exports = {
	"rules": {
		"indent": [
			2, "tab"
		],
		"quotes": [
			2, "single"
		],
		"linebreak-style": [
			0, "windows"
		],
		"semi": [
			2, "always"
		],
		"no-console": [
			1,
		],
		"no-debugger": [
			1,
		]
	},
	"env": {
		"es6": true,
		"node": true,
		"browser": true
	},
	"extends": "react",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "experimentalObjectRestSpread": true
        }
    },
    "plugins": [
        "react"
    ]
};
