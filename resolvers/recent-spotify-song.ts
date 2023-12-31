import { Resolver } from "@grafbase/generated"
import { GraphQLError } from "graphql"

// TODO: resolve https://community.spotify.com/t5/Spotify-for-Developers/Cannot-create-app-get-401-Unauthorized-always/m-p/5786413#M12067
// issue is that I can't create a spotify app to access spotify API to get current song (it gives 401 always..)
// https://developer.spotify.com/dashboard/create from this url
// guide: https://developer.spotify.com/documentation/web-api/tutorials/getting-started#create-an-app & https://developer.spotify.com/documentation/web-api/tutorials/getting-started
// api call: https://developer.spotify.com/documentation/web-api/reference/get-the-users-currently-playing-track
// ts sdk: https://github.com/spotify/spotify-web-api-ts-sdk
// TODO: check https://github.com/tr1ckydev/spotifly (can be interesting)

const recentSpotifySongResolver: Resolver["Query.recentSpotifySong"] = async (
  parent,
  args,
  context,
  info
) => {
  try {
    return "ok"
  } catch (err) {
    throw new GraphQLError(JSON.stringify(err))
  }
}

export default recentSpotifySongResolver
