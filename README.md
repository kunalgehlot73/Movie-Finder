WORK IN PROGRESS

This is how the project was made.

Generate api key.
Make .env.local and put the api key in it (TMDB_API_KEY).
Make api routes in app/api/(search,discover,genres,similar)/route.ts.
In the route.ts make a export function GET which has a argument 'request'.
In this function use searchParams to get the 'query' in a var and fetch the data from the url https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&api_key=${process.env.TMDB_API_KEY}.
Convert the response to json and return it. (Response.json(data))
Same with discover route which will return the movie by searching genre and year but with url https://api.themoviedb.org/3/discover/movie?with_genres=${encodeURIComponent(with_genres)}&primary_release_year=${encodeURIComponent(primary_release_year)}&api_key=${process.env.TMDB_API_KEY}
Also same with genres route to get all the genres with url https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_API_KEY}

