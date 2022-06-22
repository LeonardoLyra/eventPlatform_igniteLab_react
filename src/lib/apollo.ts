import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient ({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ouryqs1b3k01xlbpu6gu14/master',
    cache: new InMemoryCache()
})