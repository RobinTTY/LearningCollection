import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useNavigate } from 'react-router-dom';

const CREATE_LINK_MUTATION = gql`
  mutation PostMutation($description: String!, $url: String!) {
    post(description: $description, url: $url) {
      id
      createdAt
      url
      description
    }
  }
`;

const CreateLink = () => {
  const navigate = useNavigate();

  // Saves the current state of the form
  const [formState, setFormState] = useState({
    description: "",
    url: "",
  });

  // When we use the useMutation hook, we need to destructure out a function that can be used to call
  // the mutation, that’s what createLink is. We’re now free to call the function whenever we need to.
  const [createLink] = useMutation(CREATE_LINK_MUTATION, {
    variables: {
      // description of a news article
      description: formState.description,
      // link for the news article
      url: formState.url,
    },
    // When the mutation is complete, we navigate the user back to the news feed
    onCompleted: () => navigate('/')
  });

  return (
    <div>
      <form
        // On submission the mutation is called with the current state of the form
        onSubmit={(e) => {
          e.preventDefault();
          createLink();
        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            // The first input is bound to the formState.description state
            value={formState.description}
            // When the input changes, we update the formState.description state
            onChange={(e) =>
              setFormState({
                ...formState,
                description: e.target.value,
              })
            }
            type="text"
            placeholder="A description for the link"
          />
          <input
            className="mb2"
            // The second input is bound to the formState.url state
            value={formState.url}
            // When the input changes, we update the formState.url state
            onChange={(e) =>
              setFormState({
                ...formState,
                url: e.target.value,
              })
            }
            type="text"
            placeholder="The URL for the link"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateLink;
