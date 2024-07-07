"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[807],{8088:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>a});var r=n(4848),t=n(8453);const c={sidebar_position:1},i="Enroot \uc0ac\uc6a9\ubc95",d={id:"container/enroot \uc0ac\uc6a9\ubc95",title:"Enroot \uc0ac\uc6a9\ubc95",description:"enroot\ub294 nvidia\uc5d0\uc11c \uac1c\ubc1c\ud55c container \ud658\uacbd\uc73c\ub85c, \uae30\uc874\uc758 docker\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub358 privileged (sudo\uad8c\ud55c \ud544\uc694\ud55c) command chroot\ub97c \uac1c\uc120\ud55c enprivileged \uba85\ub839\uc5b4\uc785\ub2c8\ub2e4.",source:"@site/docs/container/enroot \uc0ac\uc6a9\ubc95.md",sourceDirName:"container",slug:"/container/enroot \uc0ac\uc6a9\ubc95",permalink:"/dsail_slurm/container/enroot \uc0ac\uc6a9\ubc95",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"container \uc0ac\uc6a9",permalink:"/dsail_slurm/category/container-\uc0ac\uc6a9"},next:{title:"(\ud544\ub3c5)\uc8fc\uc758\uc0ac\ud56d",permalink:"/dsail_slurm/\uc8fc\uc758\uc0ac\ud56d"}},s={},a=[{value:"\ud575\uc2ec \uba85\ub839\uc5b4 \uc18c\uac1c",id:"\ud575\uc2ec-\uba85\ub839\uc5b4-\uc18c\uac1c",level:2},{value:"enroot import",id:"enroot-import",level:3},{value:"enroot create",id:"enroot-create",level:3},{value:"enroot start",id:"enroot-start",level:3},{value:"enroot remove",id:"enroot-remove",level:3},{value:"enroot export",id:"enroot-export",level:3},{value:"\ud2b9\uc9d5",id:"\ud2b9\uc9d5",level:2}];function l(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h1,{id:"enroot-\uc0ac\uc6a9\ubc95",children:"Enroot \uc0ac\uc6a9\ubc95"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.a,{href:"https://github.com/NVIDIA/enroot",children:"enroot"}),"\ub294 nvidia\uc5d0\uc11c \uac1c\ubc1c\ud55c container \ud658\uacbd\uc73c\ub85c, \uae30\uc874\uc758 docker\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub358 privileged (sudo\uad8c\ud55c \ud544\uc694\ud55c) command ",(0,r.jsx)(o.code,{children:"chroot"}),"\ub97c \uac1c\uc120\ud55c enprivileged \uba85\ub839\uc5b4\uc785\ub2c8\ub2e4.\n\uae30\ubcf8\uc801\uc778 \ucee8\uc149\uc740 docker\uc640 \uac70\uc758 \uc720\uc0ac\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(o.h2,{id:"\ud575\uc2ec-\uba85\ub839\uc5b4-\uc18c\uac1c",children:"\ud575\uc2ec \uba85\ub839\uc5b4 \uc18c\uac1c"}),"\n",(0,r.jsxs)(o.p,{children:["\uc77c\ubc18\uc801\uc73c\ub85c enroot\ub97c \uc0ac\uc6a9\ud560 \ub54c\ub294 ",(0,r.jsx)(o.code,{children:"import -> create -> start -> remove"})," \uc21c\uc11c\ub85c \uba85\ub839\uc5b4\ub97c \uc801\uc6a9\ud569\ub2c8\ub2e4.\n\uc544\ub798\uc5d0\uc11c\ub294 \uac01 \uba85\ub839\uc5b4\uc758 \uad6c\uccb4\uc801\uc778 \uc0ac\uc6a9\ubc95\uc744 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(o.h3,{id:"enroot-import",children:"enroot import"}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.a,{href:"https://github.com/NVIDIA/enroot/blob/master/doc/cmd/import.md",children:"document"})}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"enroot import URI"}),"\ub294 docker\uc758 ",(0,r.jsx)(o.code,{children:"docker pull"}),"\uacfc \uc720\uc0ac\ud55c \uba85\ub839\uc5b4\uc785\ub2c8\ub2e4. (\uc815\ud655\ud558\uac8c\ub294 docker image\ub97c pull \ud55c \ub4a4 enroot image\ub85c \ubcc0\ud658\uae4c\uc9c0 \uc218\ud589)"]}),"\n",(0,r.jsx)(o.p,{children:"pull \ud574\uc62c \uc218 \uc788\ub294 source\ub294 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"enroot import docker://<IMG_NAME>"})," \ud3c9\uc18c \uc0ac\uc6a9\ud558\ub294 docker hub\uc5d0\uc11c \uac80\uc0c9\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"enroot import dockerd://<IMG_NAME>"})," docker daemon\uacfc \ud1b5\uc2e0\ud55c\ub2e4\ub294\ub370 \uc544\ub9c8 ",(0,r.jsx)(o.code,{children:"docker image ls"})," \ud588\uc744\ub54c \ub098\uc624\ub294 local image \uc911\uc5d0\uc11c \ucc3e\ub294 \uac83 \uac19\uc2b5\ub2c8\ub2e4. (\ud604\uc7ac \uc11c\ubc84\uc5d0 docker\ub97c \uc124\uce58\ud558\uc9c0 \uc54a\uc558\uc73c\ubbc0\ub85c \uc0ac\uc6a9\ud560 \uc77c \uc5c6\uc744 \uac83 \uac19\uc2b5\ub2c8\ub2e4.)"]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"enroot import podman://<IMG_NAME>"})," Podman CLI\ub97c \ud1b5\ud574 local Podman repository\uc5d0\uc11c \uac80\uc0c9\ud569\ub2c8\ub2e4. (\ud604\uc7ac \uc11c\ubc84\uc5d0 podman\uc740 \uc124\uce58\ud558\uc9c0 \uc54a\uc558\uc73c\ubbc0\ub85c \uc0ac\uc6a9\ud560 \uc77c \uc5c6\uc744 \uac83 \uac19\uc2b5\ub2c8\ub2e4.)"]}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:["pull \ud558\uac8c \ub418\uba74 ",(0,r.jsx)(o.code,{children:".sqsh"}),"\ub77c\ub294 \ud30c\uc77c\uc774 \uc0dd\uc131\ub429\ub2c8\ub2e4. \ud574\ub2f9 \ud30c\uc77c\uc774 enroot\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 ",(0,r.jsx)(o.a,{href:"https://github.com/NVIDIA/enroot/blob/master/doc/image-format.md",children:"Enroot image"})," \uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(o.p,{children:["GPU \uad00\ub828 \uc124\uc815\uc774 \ub3fc\uc788\ub294 \ucee8\ud14c\uc774\ub108\ub97c \ubc14\ub85c \uc0ac\uc6a9\ud558\uace0\uc2f6\ub2e4\uba74 NGC(Nvidia GPU Cloud)\uc5d0\uc11c \uc774\ubbf8\uc9c0\ub97c \ub2e4\uc6b4\ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc774 \uacbd\uc6b0 nvcr.io\uc758 token\uc774 \ud544\uc694\ud55c \uacbd\uc6b0\uac00 \ub300\ubd80\ubd84\uc785\ub2c8\ub2e4. ",(0,r.jsx)(o.a,{href:"https://docs.nvidia.com/launchpad/ai/base-command-coe/latest/bc-coe-docker-basics-step-02.html",children:"\ud574\ub2f9 \uac00\uc774\ub4dc"}),"\ub97c \ub530\ub77c token\uc744 \ubc1c\uae09\ubc1b\uace0 \uae30\ub85d\ud574\ub461\ub2c8\ub2e4.\n\uc774\ud6c4 ",(0,r.jsx)(o.code,{children:"$HOME/.config/enroot/.credentials"})," \ud30c\uc77c\uc5d0 ",(0,r.jsx)(o.code,{children:"machine <hostname> login <username> password <password>"})," \ud615\ud0dc\ub85c token \uc815\ubcf4\ub97c \uae30\ub85d\ud569\ub2c8\ub2e4. \uc774\ub54c username \ubd80\ubd84\uc740 ",(0,r.jsx)(o.code,{children:"$oauthtoken"}),"\uc774\ub77c\uace0 \uc815\ud655\ud558\uac8c \uc801\uc5b4\uc8fc\uc2dc\uba74 \ub429\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{children:"# NVIDIA GPU Cloud (both endpoints are required)\nmachine nvcr.io login $oauthtoken password <token>\nmachine authn.nvidia.com login $oauthtoken password <token>\n"})}),"\n",(0,r.jsx)(o.p,{children:"NGC \uc678\uc5d0\ub3c4 \ub85c\uadf8\uc778\uc774 \ud544\uc694\ud55c \uc774\ubbf8\uc9c0 \uc800\uc7a5\uc18c\ub97c \uc0ac\uc6a9\ud55c\ub2e4\uba74 \ub3d9\uc77c\ud558\uac8c id, token\uc744 \ud574\ub2f9 \ud30c\uc77c\uc5d0 \uae30\ub85d\ud574\uc8fc\uc2dc\uba74 \ub429\ub2c8\ub2e4."}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"enroot import nvcr.io/nvidia/pytorch:24.01-py3\n"})}),"\n",(0,r.jsx)(o.h3,{id:"enroot-create",children:"enroot create"}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.a,{href:"https://github.com/NVIDIA/enroot/blob/master/doc/cmd/create.md",children:"document"})}),"\n",(0,r.jsxs)(o.p,{children:["\uc774\ubbf8\uc9c0\uc5d0\uc11c container\ub97c \uc2e4\uc81c\ub85c \uc0dd\uc131\ud558\ub294 \uba85\ub839\uc5b4\uc785\ub2c8\ub2e4.\n\uc0dd\uc131\ub41c container\ub294 ",(0,r.jsx)(o.code,{children:"$HOME/.local/share/enroot"})," \uacbd\ub85c\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"enroot create --name pytorch nvidia+pytorch+24.01-py3.sqsh\n"})}),"\n",(0,r.jsx)(o.h3,{id:"enroot-start",children:"enroot start"}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.a,{href:"https://github.com/NVIDIA/enroot/blob/master/doc/cmd/start.md",children:"document"})}),"\n",(0,r.jsx)(o.p,{children:"\uc0dd\uc131\ub41c \ucee8\ud14c\uc774\ub108\uc5d0 interactive\ud558\uac8c \ud130\ubbf8\ub110\uc744 \ubd99\uc774\uac70\ub098 container \ub0b4\uc5d0\uc11c \uba85\ub839\uc5b4\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"enroot start pytorch # interactive\ud558\uac8c terminal \uc5f0\uacb0\nenroot start pytorch nvidia-smi # container \ub0b4\uc5d0\uc11c nvidia-smi\ud55c \uacb0\uacfc\ub97c \ucd9c\ub825\ud568\n"})}),"\n",(0,r.jsxs)(o.p,{children:["docker\uc640 \ub2e4\ub978 enroot container\uc758 \ud2b9\uc9d5\uc740 \uae30\ubcf8\uc801\uc73c\ub85c\ub294 container \ub0b4\ubd80\uc758 \ud30c\uc77c \uc2dc\uc2a4\ud15c\uc744 \ubcc0\uacbd\ud560\uc218\ub3c4 \uc5c6\uace0, root \uad8c\ud55c\ub3c4 \uc5c6\ub2e4\ub294 \uc810\uc785\ub2c8\ub2e4.\n\ub530\ub77c\uc11c ",(0,r.jsx)(o.code,{children:"apt"}),"\ub97c \uc774\uc6a9\ud574 \ud328\ud0a4\uc9c0\ub97c \uc124\uce58\ud558\ub294 \uacbd\uc6b0 'sudo \uad8c\ud55c \ud68d\ub4dd'\uacfc '\ud30c\uc77c write \uad8c\ud55c \ud68d\ub4dd' \ub450\uac00\uc9c0 \uc635\uc158\uc744 \uc8fc\uc5b4\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-enroot",children:"enroot start --root --rw pytorch\n"})}),"\n",(0,r.jsx)(o.p,{children:"\uc774\ub807\uac8c root \uad8c\ud55c\uc73c\ub85c \ud544\uc694\ud55c \uc124\uc815\uc744 \ub9c8\uce58\uace0 user \uad8c\ud55c\uc73c\ub85c \uc791\uc5c5\uc744 \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(o.p,{children:"\uadf8 \uc678\uc5d0\ub3c4 \ud2b9\uc815 \ud3f4\ub354 \ub9c8\uc6b4\ud2b8\ud558\uae30, hook \uc124\uc815\ud558\uae30 \ub4f1\uc758 \uae30\ub2a5\uc744 document\uc5d0\uc11c \ud655\uc778\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(o.h3,{id:"enroot-remove",children:"enroot remove"}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.a,{href:"https://github.com/NVIDIA/enroot/blob/master/doc/cmd/remove.md",children:"document"})}),"\n",(0,r.jsx)(o.p,{children:"\uc0dd\uc131\ub41c \ucee8\ud14c\uc774\ub108\ub97c \uc644\uc804\ud788 \uc0ad\uc81c\ud558\ub294 \uba85\ub839\uc5b4 \uc785\ub2c8\ub2e4."}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"enroot remove pytorch\n"})}),"\n",(0,r.jsx)(o.h3,{id:"enroot-export",children:"enroot export"}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.a,{href:"https://github.com/NVIDIA/enroot/blob/master/doc/cmd/export.md",children:"document"})}),"\n",(0,r.jsxs)(o.p,{children:["\ucee8\ud14c\uc774\ub108\ub97c \uc774\ubbf8\uc9c0\ub85c \ub2e4\uc2dc \uc800\uc7a5\ud558\ub294 \uba85\ub839\uc5b4\uc785\ub2c8\ub2e4.\n\ucee8\ud14c\uc774\ub108 \uc0dd\uc131 \ud6c4 \ud544\uc694\ud55c \ub514\ud39c\ub358\uc2dc\ub97c \uc124\uce58\ud558\ub294 \ub4f1\uc758 \uc5ec\ub7ec\uac00\uc9c0 \ub3d9\uc791\uc744 \ub05d\ub9c8\uce5c \uacbd\uc6b0 ",(0,r.jsx)(o.code,{children:"enroot export"}),"\ub97c \ud1b5\ud574 \uc774\ubbf8\uc9c0\ud654 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"enroot export --output custom_torch.sqsh pytorch\n"})}),"\n",(0,r.jsx)(o.h2,{id:"\ud2b9\uc9d5",children:"\ud2b9\uc9d5"}),"\n",(0,r.jsxs)(o.p,{children:["enroot \uc758 container\ub294 ",(0,r.jsx)(o.code,{children:"~/.local/share/enroot"})," \ub0b4\uc5d0 \uc77c\ubc18\uc801\uc778 \ud30c\uc77c \uc2dc\uc2a4\ud15c\ucc98\ub7fc \uc874\uc7ac\ud569\ub2c8\ub2e4.\n\ud604\uc7ac \uc800\ud76c SLURM cluster\ub294 HOME directory\ub97c \uacf5\uc720\ud558\ubbc0\ub85c \ud55c node\uc5d0\uc11c \uc0dd\uc131\ud55c container\ub97c \ub2e4\ub978 node\uc5d0\uc11c\ub3c4 \uc811\uadfc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\ub354 \ub098\uc544\uac00, \uc11c\ub85c \ub2e4\ub978 node \uc5d0\uc11c ",(0,r.jsx)(o.code,{children:"enroot start <CONTAINER_NAME>"}),"\uc73c\ub85c \ub3d9\uc77c\ud55c container\uc5d0 \uc811\uadfc\ud558\ub294 \uacbd\uc6b0 \ud55c \ucef4\ud4e8\ud130\uc5d0\uc11c \ub450\uac1c\uc758 terminal\uc744 \uc5f4\uace0 \ud504\ub85c\uadf8\ub7a8\uc744 \ub3cc\ub9ac\ub294 \uac83\uacfc \ub3d9\uc77c\ud55c \uc0c1\ud669\uc744 \uc5f0\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n(\uc774\ub97c \uc774\uc6a9\ud574 ddp \uad6c\uc131\uc774 \uc27d\ub2e4\uace0 \ud558\ub294\ub370 \uc800\ub294 \uc5b4\ub5bb\uac8c \ud558\ub294\uc9c0 \uc798 \ubaa8\ub985\ub2c8\ub2e4.)"]})]})}function h(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>i,x:()=>d});var r=n(6540);const t={},c=r.createContext(t);function i(e){const o=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(c.Provider,{value:o},e.children)}}}]);