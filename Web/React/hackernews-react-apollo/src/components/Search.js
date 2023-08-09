import React, { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";
import Link from "./Link";

// Similar to feed query in LinkList but takes a filter
// The actual filter is built and used in the feed resolver
// which is implemented in server/src/resolvers/Query.js
const FEED_SEARCH_QUERY = gql`
  query FeedSearchQuery($filter: String!) {
    feed(filter: $filter) {
      id
      links {
        id
        url
        description
        createdAt
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`;

const Search = () => {
  // Holds the current search term entered by the user
  const [searchFilter, setSearchFilter] = useState("");
  // This hook performs a query in the same way the useQuery hook does
  // but the difference is that it must be executed manually.
  const [executeSearch, { data }] = useLazyQuery(FEED_SEARCH_QUERY);

  return (
    <>
      <div>
        Search
        <input type="text" onChange={(e) => setSearchFilter(e.target.value)} />
        <button
          onClick={() =>
            executeSearch({
              variables: { filter: searchFilter },
            })
          }
        >
          OK
        </button>
      </div>
      {data &&
        data.feed.links.map((link, index) => (
          <Link key={link.id} link={link} index={index} />
        ))}
    </>
  );
};

export default Search;
