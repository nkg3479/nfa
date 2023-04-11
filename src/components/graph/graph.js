//  export function getNfts(props){
// fetch('https://api.thegraph.com/subgraphs/name/anoop072001/nfa',{
//   method:"POST",
//   headers:
//   {
//     "Content-Type":"application"
//   },
//   body:JSON.stringify({
//     query:`
//     query getOwner($owner:String)
//     {
//       tokens(first: 5 where: {owner: $owner}}) {
//         tokenId
//         nft {
//           id
//         }
//         owner {
//           id
//         }
//       }
//     }
//     `,
//     {owner:"0xFC0E236210A761151a7D8D7A652C054075be2761"},
//   })
// }).then(res=>res.json())
// .then(data=>{
//   console.log(data.data);
// })
// }

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
`).then(data => {
  return data;
})

export function getValues(address) {
  return queryFetch(`
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
  `, { owner: address }).then(data => {
    return(data.data.tokens);
  })
}


function queryFetch(query, variables) {
  return fetch('https://api.thegraph.com/subgraphs/name/anoop072001/nfa', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: query,
      variables: variables
    })
  }).then(res => res.json())
}