"use client"

function MovieDetails({ movie, onBack }) {
  const {
    title,
    overview,
    poster_path,
    backdrop_path,
    vote_average,
    release_date,
    original_language,
    runtime,
    genres,
    budget,
    revenue,
  } = movie

  const formatCurrency = (amount) => {
    if (!amount) return "N/A"
    return `$${(amount / 1000000).toFixed(1)}M`
  }

  return (
    <main>
      <div className="pattern"></div>
      <div className="wrapper">
        <button
          onClick={onBack}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-light-100/10 hover:bg-light-100/20 rounded-lg text-light-100 transition-colors duration-300"
        >
          <span>←</span> Back
        </button>

        <div className="mb-8">
          {backdrop_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
              alt={title}
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          ) : (
            <div className="w-full h-96 bg-dark-100 rounded-2xl shadow-xl flex items-center justify-center">
              <img
                src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : "./no-movie.png"}
                alt={title}
                className="h-full object-contain"
              />
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Poster */}
          <div className="md:col-span-1">
            <img
              src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : "./no-movie.png"}
              alt={title}
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>

          {/* Details */}
          <div className="md:col-span-3">
            <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>

            <div className="flex flex-wrap items-center gap-3 mb-6 pb-6 border-b border-light-100/10">
              <div className="flex items-center gap-1">
                <img src="./star.svg" alt="rating" className="w-5 h-5" />
                <span className="text-lg font-bold text-white">{vote_average ? vote_average.toFixed(1) : "N/A"}</span>
              </div>
              <span className="text-gray-100">•</span>
              <span className="text-gray-100">{release_date ? release_date.split("-")[0] : "N/A"}</span>
              <span className="text-gray-100">•</span>
              <span className="capitalize text-gray-100">{original_language}</span>
              {runtime && (
                <>
                  <span className="text-gray-100">•</span>
                  <span className="text-gray-100">{runtime} min</span>
                </>
              )}
            </div>

            {/* Overview */}
            {overview && (
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Overview</h3>
                <p className="text-light-200 leading-relaxed">{overview}</p>
              </div>
            )}

            {/* Genres */}
            {genres && genres.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Genres</h3>
                <div className="flex flex-wrap gap-2">
                  {genres.map((genre) => (
                    <span key={genre.id} className="px-3 py-1 bg-light-100/10 rounded-full text-light-100 text-sm">
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {(budget || revenue) && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {budget && (
              <div className="bg-dark-100 p-6 rounded-2xl shadow-inner shadow-light-100/10">
                <h3 className="text-sm font-semibold text-gray-100 mb-1">Budget</h3>
                <p className="text-2xl font-bold text-light-100">{formatCurrency(budget)}</p>
              </div>
            )}
            {revenue && (
              <div className="bg-dark-100 p-6 rounded-2xl shadow-inner shadow-light-100/10">
                <h3 className="text-sm font-semibold text-gray-100 mb-1">Revenue</h3>
                <p className="text-2xl font-bold text-light-100">{formatCurrency(revenue)}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  )
}

export default MovieDetails
