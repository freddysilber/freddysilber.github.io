import { graphql } from 'gatsby'

export const horseRide = graphql`
	query {
		file(relativePath: { eq: "horseRide.png" }) {
			childImageSharp {
				fixed {
					...GatsbyImageSharpFixed
				}
			}
		}
	}
`

// export const getHorseRide = () => {
// 	return new Promise((resolve) => {
// 		console.log(resolve)
// 		return resolve(horseRide)
// 	}).then(data => {
// 		console.log('then data', data)
// 		return data
// 	})
// }