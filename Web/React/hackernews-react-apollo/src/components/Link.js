import { AUTH_TOKEN } from "../constants";
import { FEED_QUERY } from "./LinkList";
import { timeDifferenceForDate } from "../utils";
import { useMutation, gql } from "@apollo/client";

const VOTE_MUTATION = gql`
  mutation VoteMutation($linkId: ID!) {
    vote(linkId: $linkId) {
      id
      link {
        id
        votes {
          id
          user {
            id
          }
        }
      }
      user {
        id
      }
    }
  }
`;

const Link = (props) => {
  const { link } = props;
  const authToken = localStorage.getItem(AUTH_TOKEN);

  // When we perform mutations that affect a list of data,
  // we need to manually intervene to update the cache.
  // We’ll implement this functionality by using the update
  // callback of useMutation.
  const [vote] = useMutation(VOTE_MUTATION, {
    variables: {
      linkId: link.id,
    },
    update: (cache, { data: { vote } }) => {
      // passing in the FEED_QUERY document. This allows us to
      // read the exact portion of the Apollo cache that we need
      // to allow us to update it
      const { feed } = cache.readQuery({
        query: FEED_QUERY,
      });

      // Once we have the cache, we create a new array of data that
      //includes the vote that was just made.The vote that was made
      // with the mutation is destructured out using {data: {vote}}
      const updatedLinks = feed.links.map((feedLink) => {
        if (feedLink.id === link.id) {
          return {
            ...feedLink,
            votes: [...feedLink.votes, vote],
          };
        }
        return feedLink;
      });

      // Once we have the new list of votes, we can commit the changes
      // to the cache using cache.writeQuery, passing in the new data
      cache.writeQuery({
        query: FEED_QUERY,
        data: {
          feed: {
            links: updatedLinks,
          },
        },
      });
    },
  });

  return (
    <div className="flex mt2 items-start">
      <div className="flex items-center">
        <span className="gray">{props.index + 1}.</span>
        {authToken && (
          <div
            className="ml1 gray f11"
            style={{ cursor: "pointer" }}
            onClick={vote}
          >
            ▲
          </div>
        )}
      </div>
      <div className="ml1">
        <div>
          {link.description} ({link.url})
        </div>
        {
          <div className="f6 lh-copy gray">
            {link.votes.length} votes | by{" "}
            {link.postedBy ? link.postedBy.name : "Unknown"}{" "}
            {timeDifferenceForDate(link.createdAt)}
          </div>
        }
      </div>
    </div>
  );
};

export default Link;
