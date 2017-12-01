const ApiMixin = {
	handleReqError(req) {
		console.log(req)
	},
	async getMoviesFromApi() {
		try {
			let response = await fetch('https://facebook.github.io/react-native/movies.json');
			let responseJson = await response.json();
			return responseJson.movies;
		} catch(error) {
			this.handleReqError(error)
		}
	}
}

export default ApiMixin;