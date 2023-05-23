queryFetch(`
  query {
    tokens {
      tokenId
         nft {
           id
         }
         owner {
           id
         }
    }
  }
`).then((data) => {
  return data;
});

export function getValues(address) {
  return queryFetch(
    `
  query getOwner($owner:String)
       {
         tokens(where: {owner: $owner}) {
           tokenId
           nft {
             id
           }
           owner {
             id
           }
         }
       }
  `,
    { owner: address }
  ).then((data) => {
    return data.data.tokens;
  });
}

function queryFetch(query, variables) {
  return fetch("https://api.thegraph.com/subgraphs/name/anoop072001/nfa", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
  }).then((res) => res.json());
}
