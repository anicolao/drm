export interface KeyValueStorage { getItem(key:string):string|null; setItem(key:string,value:string):void; removeItem(key:string):void }

export function loadStoredArray<T>(storage:KeyValueStorage,key:string,parse:(value:unknown)=>T):T[]{
  try{const value:unknown=JSON.parse(storage.getItem(key)??'[]');return Array.isArray(value)?value.map(parse):[]}catch{return[]}
}

export function saveStoredArray<T>(storage:KeyValueStorage,key:string,values:readonly T[]){storage.setItem(key,JSON.stringify(values))}

export function loadStoredValue<T>(storage:KeyValueStorage,key:string,parse:(value:unknown)=>T):T|undefined{
  try{const value:unknown=JSON.parse(storage.getItem(key)??'null');return value===null?undefined:parse(value)}catch{return undefined}
}

export function saveStoredValue<T>(storage:KeyValueStorage,key:string,value:T){storage.setItem(key,JSON.stringify(value))}

export function controllerStorageKey(ruleset:string,gameId:string,playerId:string,kind:'outbox'|'checkpoint'|'interactions'){
  return`drm-game:${ruleset}:${gameId}:${playerId}:${kind}`;
}
