function findLongestCommonSubsequence(n,t){const l=Array(n.length+1).fill(0).map((()=>Array(t.length+1).fill(0)));for(let e=0;e<n.length;e++)for(let h=0;h<t.length;h++)n[e]===t[h]?l[e+1][h+1]=l[e][h]+1:l[e+1][h+1]=Math.max(l[e+1][h],l[e][h+1]);let e=[],h=n.length,o=t.length;for(;h>0&&o>0;)l[h][o]===l[h-1][o]?h--:(l[h][o]===l[h][o-1]||(e.unshift(n[h-1]),h--),o--);return e}export function wordDiff(n,t){const l=n.split(/\s+/),e=t.split(/\s+/),h=findLongestCommonSubsequence(l,e),o=[];let u=0,s=0,g=0,i=[],r=[];for(;u<l.length||s<e.length;){let n=u<l.length?l[u]:null,t=s<e.length?e[s]:null,f=g<h.length?h[g]:null;n===f&&t===f?(i.length>0&&(o.push([-1,i.join(" ")]),i=[]),r.length>0&&(o.push([1,r.join(" ")]),r=[]),o.push([0,n]),u++,s++,g++):(n!==f&&(i.push(n),u++),t!==f&&(r.push(t),s++))}return i.length>0&&o.push([-1,i.join(" ")]),r.length>0&&o.push([1,r.join(" ")]),o}
