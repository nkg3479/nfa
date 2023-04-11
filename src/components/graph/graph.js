 export function getNfts(){
fetch('https://api.thegraph.com/subgraphs/name/anoop072001/nfa',{
  method:"POST",
  headers:
  {
    "Content-Type":"application"
  },
  body:JSON.stringify({
    query:`
    query
    {
      tokens(first: 5) {
        tokenId
        nft {
          id
        }
        owner {
          id
        }
      }
    }
    `
  })
}).then(res=>res.json())
.then(data=>{
  console.log(data.data);
})
}