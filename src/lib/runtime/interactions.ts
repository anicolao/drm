import { get, onChildAdded, ref, type Database } from 'firebase/database';

export function subscribeInteractions<T>(
  database:Database, gameId:string, parse:(value:unknown)=>T,
  receive:(interaction:T,id:string)=>void, fail:(error:Error)=>void,
  includeExisting=false
) {
  let destroyed=false,unsubscribe=()=>{};
  void (async()=>{
    try {
      const interactions=ref(database,`games/${gameId}/interactions`),existing=await get(interactions),known=new Set<string>();
      if(!includeExisting)existing.forEach(child=>{known.add(child.key!)});
      if(destroyed)return;
      unsubscribe=onChildAdded(interactions,child=>{
        try {const value=parse(child.val());if(!known.delete(child.key!))receive(value,child.key!)}
        catch(cause){fail(cause instanceof Error?cause:new Error(String(cause)))}
      },fail);
    } catch(cause){fail(cause instanceof Error?cause:new Error(String(cause)))}
  })();
  return()=>{destroyed=true;unsubscribe()};
}
