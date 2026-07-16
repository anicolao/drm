export const isObject=(value:unknown):value is Record<string,unknown>=>Boolean(value)&&typeof value==='object'&&!Array.isArray(value);
export const hasOnlyKeys=(value:Record<string,unknown>,keys:readonly string[])=>Object.keys(value).every(key=>keys.includes(key));
export const isInteger=(value:unknown,minimum=0,maximum=1_000_000_000)=>Number.isInteger(value)&&(value as number)>=minimum&&(value as number)<=maximum;
export const isString=(value:unknown,maximum=128)=>typeof value==='string'&&value.length>0&&value.length<=maximum;
export const isServerTime=(value:unknown)=>typeof value==='number'&&Number.isFinite(value)&&value>=0;

export interface ControllerEnvelope{playerId:string;epochId:string;clientSeq:number;tick:number;type:string;payload?:unknown;serverTime?:number}
export function parseControllerEnvelope(commandId:string,value:unknown,pending=false):ControllerEnvelope{
 const allowed=pending?['type','playerId','epochId','clientSeq','tick','payload']:['type','playerId','epochId','clientSeq','tick','payload','serverTime'];
 if(!isObject(value)||!hasOnlyKeys(value,allowed)||!isString(commandId)||!isString(value.playerId)||!isString(value.epochId)||!isInteger(value.clientSeq,1)||!isInteger(value.tick)||(!pending&&!isServerTime(value.serverTime)))throw new Error('Invalid controller record envelope.');
 return value as unknown as ControllerEnvelope;
}
