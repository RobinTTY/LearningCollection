import React from "react";
import Link from "./Link";
import { useQuery, gql } from "@apollo/client";

const FEED_QUERY = gql`
  {
    feed {
      id
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;

const LinkList = () => {
  // This hook returns three items that are relevant for our purposes at this point:
  // loading: Is true as long as the request is still ongoing and the response hasn’t been received
  // error: In case the request fails, this field will contain information about what exactly went wrong
  // data: This is the actual data that was received from the server. It has the links property which represents a list of Link elements
  const { data } = useQuery(FEED_QUERY);

  return (
    <div>
      {data && (
        <>
          {data.feed.links.map((link) => (
            <Link key={link.id} link={link} />
          ))}
        </>
      )}
    </div>
  );
};

export default LinkList;
