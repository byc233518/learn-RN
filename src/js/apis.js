const ApiMixin = {
	handleReqError(req) {
		console.log(req)
	},
	async getMoviesFromApi() {
		try {
			let response = await fetch('https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json');
			let responseJson = await response.json();
			return responseJson.movies;
		} catch(error) {
			this.handleReqError(error)
		}
	}
}

export default ApiMixin;