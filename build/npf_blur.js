(function(){var I=null;function M(){this.d=this.a=this.b=this.c=0;this.next=I}
var N=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,
269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,
267,265,263,261,259],O=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,
23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];function P(E,l,z,A){var y=E.naturalWidth,G=E.naturalHeight;l.width=y;l.height=G;var B=l.getContext("2d");B.clearRect(0,0,y,G);B.drawImage(E,0,0);if(A){var L=l.getContext("2d"),J;try{J=L.getImageData(0,0,y,G)}catch(U){}if(J){var b=J.data,t,C,d,c,h,i,j,k,v,w,x,s,n,o,p,q,m,u,r,g,H;t=z+z+1;var F=y-1,E=G-1,l=z+1,A=l*(l+1)/2,f=B=new M,K=I;for(d=1;d<t;d++)f=f.next=new M,d==l&&(K=f);f.next=B;var f=d=I,Q=0,a=0,D=N[z],e=O[z];for(C=0;C<G;C++){k=j=i=h=q=p=o=n=0;m=b[a];u=b[a+1];r=b[a+2];g=b[a+3];v=l*m;w=l*u;x=
l*r;s=l*g;h+=A*m;i+=A*u;j+=A*r;k+=A*g;f=B;for(d=0;d<l;d++)f.c=m,f.b=u,f.a=r,f.d=g,f=f.next;for(d=1;d<l;d++)c=a+((F<d?F:d)<<2),H=l-d,m=b[c],u=b[c+1],r=b[c+2],g=b[c+3],f.c=m,f.b=u,f.a=r,f.d=g,h+=m*H,i+=u*H,j+=r*H,k+=g*H,n+=m,o+=u,p+=r,q+=g,f=f.next;d=B;f=K;for(t=0;t<y;t++)g=k*D>>e,b[a+3]=g,0!=g?(g=255/g,b[a]=(h*D>>e)*g,b[a+1]=(i*D>>e)*g,b[a+2]=(j*D>>e)*g):(b[a]=0,b[a+1]=0,b[a+2]=0),h-=v,i-=w,j-=x,k-=s,v-=d.c,w-=d.b,x-=d.a,s-=d.d,c=Q+((c=t+z+1)<F?c:F)<<2,d.c=b[c],d.b=b[c+1],d.a=b[c+2],d.d=b[c+3],n+=
d.c,o+=d.b,p+=d.a,q+=d.d,h+=n,i+=o,j+=p,k+=q,d=d.next,m=f.c,u=f.b,r=f.a,g=f.d,v+=m,w+=u,x+=r,s+=g,n-=m,o-=u,p-=r,q-=g,f=f.next,a+=4;Q+=y}for(t=0;t<y;t++){h=k=j=i=n=q=p=o=0;a=t<<2;m=b[a];u=b[a+1];r=b[a+2];g=b[a+3];v=l*m;w=l*u;x=l*r;s=l*g;h+=A*m;i+=A*u;j+=A*r;k+=A*g;f=B;for(d=0;d<l;d++)f.c=m,f.b=u,f.a=r,f.d=g,f=f.next;c=y;for(d=1;d<=z;d++)a=c+t<<2,H=l-d,m=b[a],u=b[a+1],r=b[a+2],g=b[a+3],f.c=m,f.b=u,f.a=r,f.d=g,h+=m*H,i+=u*H,j+=r*H,k+=g*H,n+=m,o+=u,p+=r,q+=g,f=f.next,d<E&&(c+=y);a=t;d=B;f=K;for(C=0;C<
G;C++)c=a<<2,g=k*D>>e,b[c+3]=g,0<g?(g=255/g,b[c]=(h*D>>e)*g,b[c+1]=(i*D>>e)*g,b[c+2]=(j*D>>e)*g):(b[c]=0,b[c+1]=0,b[c+2]=0),h-=v,i-=w,j-=x,k-=s,v-=d.c,w-=d.b,x-=d.a,s-=d.d,c=t+((c=C+l)<E?c:E)*y<<2,h+=n+=d.c=b[c],i+=o+=d.b=b[c+1],j+=p+=d.a=b[c+2],k+=q+=d.d=b[c+3],d=d.next,v+=m=f.c,w+=u=f.b,x+=r=f.a,s+=g=f.d,n-=m,o-=u,p-=r,q-=g,f=f.next,a+=y}L.putImageData(J,0,0);z=!0}else z=!1}else{J=l.getContext("2d");try{L=J.getImageData(0,0,y,G)}catch(V){}if(L){c=L.data;t=z+z+1;u=y-1;E=G-1;l=z+1;A=l*(l+1)/2;e=B=
new M;K=I;for(a=1;a<t;a++)e=e.next=new M,a==l&&(K=e);e.next=B;e=a=I;h=D=0;r=N[z];g=O[z];for(F=0;F<G;F++){k=j=i=o=n=s=0;v=l*(p=c[h]);w=l*(q=c[h+1]);x=l*(m=c[h+2]);i+=A*p;j+=A*q;k+=A*m;e=B;for(a=0;a<l;a++)e.c=p,e.b=q,e.a=m,e=e.next;for(a=1;a<l;a++)b=h+((u<a?u:a)<<2),C=l-a,i+=(e.c=p=c[b])*C,j+=(e.b=q=c[b+1])*C,k+=(e.a=m=c[b+2])*C,s+=p,n+=q,o+=m,e=e.next;a=B;e=K;for(t=0;t<y;t++)c[h]=i*r>>g,c[h+1]=j*r>>g,c[h+2]=k*r>>g,i-=v,j-=w,k-=x,v-=a.c,w-=a.b,x-=a.a,b=D+((b=t+z+1)<u?b:u)<<2,s+=a.c=c[b],n+=a.b=c[b+
1],o+=a.a=c[b+2],i+=s,j+=n,k+=o,a=a.next,v+=p=e.c,w+=q=e.b,x+=m=e.a,s-=p,n-=q,o-=m,e=e.next,h+=4;D+=y}for(t=0;t<y;t++){i=k=j=s=o=n=0;h=t<<2;v=l*(p=c[h]);w=l*(q=c[h+1]);x=l*(m=c[h+2]);i+=A*p;j+=A*q;k+=A*m;e=B;for(a=0;a<l;a++)e.c=p,e.b=q,e.a=m,e=e.next;b=y;for(a=1;a<=z;a++)h=b+t<<2,i+=(e.c=p=c[h])*(C=l-a),j+=(e.b=q=c[h+1])*C,k+=(e.a=m=c[h+2])*C,s+=p,n+=q,o+=m,e=e.next,a<E&&(b+=y);h=t;a=B;e=K;for(F=0;F<G;F++)b=h<<2,c[b]=i*r>>g,c[b+1]=j*r>>g,c[b+2]=k*r>>g,i-=v,j-=w,k-=x,v-=a.c,w-=a.b,x-=a.a,b=t+((b=F+
l)<E?b:E)*y<<2,i+=s+=a.c=c[b],j+=n+=a.b=c[b+1],k+=o+=a.a=c[b+2],a=a.next,v+=p=e.c,w+=q=e.b,x+=m=e.a,s-=p,n-=q,o-=m,e=e.next,h+=y}J.putImageData(L,0,0);z=!0}else z=!1}return z}var R="npfBlur".split("."),S=this;!(R[0]in S)&&S.execScript&&S.execScript("var "+R[0]);for(var T;R.length&&(T=R.shift());)!R.length&&void 0!==P?S[T]=P:S=S[T]?S[T]:S[T]={};})();