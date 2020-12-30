/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

const React = require("react")

const HtmlAttributes = {
	lang: "en"
}

const BodyAttributes = {
	"data-theme": "dark"
}

exports.onRenderBody = ({
	setHeadComponents,
	setHtmlAttributes,
	setBodyAttributes
}, pluginOptions) => {
	setHtmlAttributes(HtmlAttributes)
	setHeadComponents([
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css" />,
		<script src="https://kit.fontawesome.com/c0f875bda2.js" crossorigin="anonymous"></script>
	])
	setBodyAttributes(BodyAttributes)
}