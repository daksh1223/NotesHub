import "./App.css";
import Index from "./pages/index";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
  gql,
} from "@apollo/client";
import { setContext } from "apollo-link-context";
import GlobalStyle from "./components/GlobalStyle";
require('dotenv').config();
console.log(process.env)
const httpLink = createHttpLink({ uri: process.env.REACT_APP_API_URI });
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: localStorage.getItem("token") || "",
    },
  };
});
let cache = new InMemoryCache();
let client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache
});
client.writeQuery({
  query: gql`
    query write_data
    {
      isLoggedIn
    }
  `,
  data: {
    isLoggedIn: !!localStorage.getItem("token"),
  },
});
function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <GlobalStyle />
        <Index />
      </ApolloProvider>
    </div>
  );
}

export default App;
