import { Resolver } from "@grafbase/generated"
import { GraphQLError } from "graphql"

const recentSpotifySongResolver: Resolver["Query.recentSpotifySong"] = async (
  parent,
  args,
  context,
  info
) => {
  try {
    console.log("run")
  } catch (err) {
    throw new GraphQLError(JSON.stringify(err))
  }
}

export default recentSpotifySongResolver
