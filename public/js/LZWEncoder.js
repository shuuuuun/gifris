/*!
 * This class handles LZW encoding
 * Adapted from Jef Poskanzer's Java port by way of J. M. G. Elliott.
 * @author Kevin Weiner (original Java version - kweiner@fmsware.com)
 * @author Thibault Imbert (AS3 version - bytearray.org)
 * @author Kevin Kwok (JavaScript version - https://github.com/antimatter15/jsgif)
 * @version 0.1 AS3 implementation
 */
LZWEncoder=function(){var n,t,r,i,o,e,f,c,u,a,s,w,y={},d=-1,v=12,B=5003,h=v,l=1<<v,p=[],m=[],E=B,L=0,W=!1,Z=0,x=0,M=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],b=[],g=y.LZWEncoder=function(o,e,f,c){n=o,t=e,r=f,i=Math.max(2,c)},j=function(n,t){b[w++]=n,w>=254&&A(t)},k=function(n){q(E),L=a+2,W=!0,F(a,n)},q=function(n){for(var t=0;t<n;++t)p[t]=-1},z=y.compress=function(n,t){var r,i,o,e,y,v,B;for(u=n,W=!1,f=u,c=C(f),a=1<<n-1,s=a+1,L=a+2,w=0,e=D(),B=0,r=E;r<65536;r*=2)++B;B=8-B,v=E,q(v),F(a,t);n:for(;(o=D())!=d;)if(r=(o<<h)+e,i=o<<B^e,p[i]!=r){if(p[i]>=0){y=v-i,0===i&&(y=1);do if((i-=y)<0&&(i+=v),p[i]==r){e=m[i];continue n}while(p[i]>=0)}F(e,t),e=o,L<l?(m[i]=L++,p[i]=r):k(t)}else e=m[i];F(e,t),F(s,t)},A=(y.encode=function(r){r.writeByte(i),o=n*t,e=0,z(i+1,r),r.writeByte(0)},function(n){w>0&&(n.writeByte(w),n.writeBytes(b,0,w),w=0)}),C=function(n){return(1<<n)-1},D=function(){if(0===o)return d;--o;var n=r[e++];return 255&n},F=function(n,t){for(Z&=M[x],x>0?Z|=n<<x:Z=n,x+=f;x>=8;)j(255&Z,t),Z>>=8,x-=8;if((L>c||W)&&(W?(c=C(f=u),W=!1):(++f,c=f==h?l:C(f))),n==s){for(;x>0;)j(255&Z,t),Z>>=8,x-=8;A(t)}};return g.apply(this,arguments),y};