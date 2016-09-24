/*!
 * NeuQuant Neural-Net Quantization Algorithm
 * ------------------------------------------
 *
 * Copyright (c) 1994 Anthony Dekker
 *
 * NEUQUANT Neural-Net quantization algorithm by Anthony Dekker, 1994. See
 * "Kohonen neural networks for optimal colour quantization" in "Network:
 * Computation in Neural Systems" Vol. 5 (1994) pp 351-367. for a discussion of
 * the algorithm.
 *
 * Any party obtaining a copy of these files from the author, directly or
 * indirectly, is granted, free of charge, a full and unrestricted irrevocable,
 * world-wide, paid up, royalty-free, nonexclusive right and license to deal in
 * this software and documentation files (the "Software"), including without
 * limitation the rights to use, copy, modify, merge, publish, distribute,
 * sublicense, and/or sell copies of the Software, and to permit persons who
 * receive copies from any such party to do so, with the only requirement being
 * that this copyright notice remain intact.
 */
NeuQuant=function(){var r,n,f,o,t,a={},u=256,c=499,i=491,e=487,v=503,y=3*v,p=u-1,h=4,s=100,w=16,A=1<<w,N=10,Q=10,l=A>>Q,m=A<<N-Q,b=u>>3,d=6,g=1<<d,j=b*g,k=30,q=10,x=1<<q,z=8,B=1<<z,C=q+z,D=1<<C,E=[],F=[],G=[],H=[],I=a.NeuQuant=function(r,a,c){var i,e;for(n=r,f=a,o=c,t=new Array(u),i=0;i<u;i++)t[i]=new Array(4),e=t[i],e[0]=e[1]=e[2]=(i<<h+8)/u,G[i]=A/u,F[i]=0},J=function(){for(var r=[],n=new Array(u),f=0;f<u;f++)n[t[f][3]]=f;for(var o=0,a=0;a<u;a++){var c=n[a];r[o++]=t[c][0],r[o++]=t[c][1],r[o++]=t[c][2]}return r},K=function(){var r,n,f,o,a,c,i,e;for(i=0,e=0,r=0;r<u;r++){for(a=t[r],f=r,o=a[1],n=r+1;n<u;n++)c=t[n],c[1]<o&&(f=n,o=c[1]);if(c=t[f],r!=f&&(n=c[0],c[0]=a[0],a[0]=n,n=c[1],c[1]=a[1],a[1]=n,n=c[2],c[2]=a[2],a[2]=n,n=c[3],c[3]=a[3],a[3]=n),o!=i){for(E[i]=e+r>>1,n=i+1;n<o;n++)E[n]=r;i=o,e=r}}for(E[i]=e+p>>1,n=i+1;n<256;n++)E[n]=p},L=function(){var t,a,u,p,w,A,N,Q,l,m,b,g,q,z;for(f<y&&(o=1),r=30+(o-1)/3,g=n,q=0,z=f,b=f/(3*o),m=b/s|0,Q=x,A=j,N=A>>d,N<=1&&(N=0),t=0;t<N;t++)H[t]=Q*((N*N-t*t)*B/(N*N));for(l=f<y?3:f%c!==0?3*c:f%i!==0?3*i:f%e!==0?3*e:3*v,t=0;t<b;)if(u=(255&g[q+0])<<h,p=(255&g[q+1])<<h,w=(255&g[q+2])<<h,a=R(u,p,w),P(Q,a,u,p,w),0!==N&&O(N,a,u,p,w),q+=l,q>=z&&(q-=f),t++,0===m&&(m=1),t%m===0)for(Q-=Q/r,A-=A/k,N=A>>d,N<=1&&(N=0),a=0;a<N;a++)H[a]=Q*((N*N-a*a)*B/(N*N))},M=(a.map=function(r,n,f){var o,a,c,i,e,v,y;for(e=1e3,y=-1,o=E[n],a=o-1;o<u||a>=0;)o<u&&(v=t[o],c=v[1]-n,c>=e?o=u:(o++,c<0&&(c=-c),i=v[0]-r,i<0&&(i=-i),c+=i,c<e&&(i=v[2]-f,i<0&&(i=-i),c+=i,c<e&&(e=c,y=v[3])))),a>=0&&(v=t[a],c=n-v[1],c>=e?a=-1:(a--,c<0&&(c=-c),i=v[0]-r,i<0&&(i=-i),c+=i,c<e&&(i=v[2]-f,i<0&&(i=-i),c+=i,c<e&&(e=c,y=v[3]))));return y},a.process=function(){return L(),M(),K(),J()},function(){var r;for(r=0;r<u;r++)t[r][0]>>=h,t[r][1]>>=h,t[r][2]>>=h,t[r][3]=r}),O=function(r,n,f,o,a){var c,i,e,v,y,p,h;for(e=n-r,e<-1&&(e=-1),v=n+r,v>u&&(v=u),c=n+1,i=n-1,p=1;c<v||i>e;){if(y=H[p++],c<v){h=t[c++];try{h[0]-=y*(h[0]-f)/D,h[1]-=y*(h[1]-o)/D,h[2]-=y*(h[2]-a)/D}catch(r){}}if(i>e){h=t[i--];try{h[0]-=y*(h[0]-f)/D,h[1]-=y*(h[1]-o)/D,h[2]-=y*(h[2]-a)/D}catch(r){}}}},P=function(r,n,f,o,a){var u=t[n];u[0]-=r*(u[0]-f)/x,u[1]-=r*(u[1]-o)/x,u[2]-=r*(u[2]-a)/x},R=function(r,n,f){var o,a,c,i,e,v,y,p,s,A;for(p=~(1<<31),s=p,v=-1,y=v,o=0;o<u;o++)A=t[o],a=A[0]-r,a<0&&(a=-a),c=A[1]-n,c<0&&(c=-c),a+=c,c=A[2]-f,c<0&&(c=-c),a+=c,a<p&&(p=a,v=o),i=a-(F[o]>>w-h),i<s&&(s=i,y=o),e=G[o]>>Q,G[o]-=e,F[o]+=e<<N;return G[v]+=l,F[v]-=m,y};return I.apply(this,arguments),a};