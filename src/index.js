import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./i18n.js";
import reportWebVitals from "./reportWebVitals";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  split,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

// import { getMainDefinition } from "@apollo/client/utilities";
// import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
// import { createClient } from "graphql-ws";
// import { WebSocketLink } from "apollo-link-ws";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

// const wsLink = new GraphQLWsLink(createClient({
//   uri: 'ws://localhost:8000/graphql',
// }));

// const wsLink = new WebSocketLink({
//   uri: `ws://itb-usa.a2hosted.com/`,
//   options: {
//     reconnect: true,
//   },
// });

const link = from([
  errorLink,
  new HttpLink({
    uri: "https://itb-usa.a2hosted.com/graphql",
    // useGETForQueries: true,
  }),
]);

// const splitLink = split(
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return (
//       definition.kind === 'OperationDefinition' &&
//       definition.operation === 'subscription'
//     );
//   },
//   wsLink,
//   link,
// );

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
  // fetchOptions: {
  //   mode: "cors", // no-cors, *cors, same-origin
  // },
  // useGETForQueries: true,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Suspense>
        <App />
      </Suspense>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
