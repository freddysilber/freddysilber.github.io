
export const imageQueries = {
	horseRide: `file(relativePath: { eq: "images/default.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 400) {
		...GatsbyImageSharpFluid
			}
	}`
}}