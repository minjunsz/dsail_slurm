---
sidebar_position: 1
---

# Enroot 사용법

[enroot](https://github.com/NVIDIA/enroot)는 nvidia에서 개발한 container 환경으로, 기존의 docker에서 사용하던 privileged (sudo권한 필요한) command `chroot`를 개선한 enprivileged 명령어입니다.
기본적인 컨셉은 docker와 거의 유사합니다.

## 핵심 명령어 소개

일반적으로 enroot를 사용할 때는 `import -> create -> start -> remove` 순서로 명령어를 적용합니다.
아래에서는 각 명령어의 구체적인 사용법을 알아보겠습니다.

### enroot import

[document](https://github.com/NVIDIA/enroot/blob/master/doc/cmd/import.md)

`enroot import URI`는 docker의 `docker pull`과 유사한 명령어입니다. (정확하게는 docker image를 pull 한 뒤 enroot image로 변환까지 수행)

pull 해올 수 있는 source는 아래와 같습니다.
- `enroot import docker://<IMG_NAME>` 평소 사용하는 docker hub에서 검색합니다.
- `enroot import dockerd://<IMG_NAME>` docker daemon과 통신한다는데 아마 `docker image ls` 했을때 나오는 local image 중에서 찾는 것 같습니다. (현재 서버에 docker를 설치하지 않았으므로 사용할 일 없을 것 같습니다.)
- `enroot import podman://<IMG_NAME>` Podman CLI를 통해 local Podman repository에서 검색합니다. (현재 서버에 podman은 설치하지 않았으므로 사용할 일 없을 것 같습니다.)

pull 하게 되면 `.sqsh`라는 파일이 생성됩니다. 해당 파일이 enroot에서 사용하는 [Enroot image](https://github.com/NVIDIA/enroot/blob/master/doc/image-format.md) 입니다.

GPU 관련 설정이 돼있는 컨테이너를 바로 사용하고싶다면 NGC(Nvidia GPU Cloud)에서 이미지를 다운받을 수 있습니다.
이 경우 nvcr.io의 token이 필요한 경우가 대부분입니다. [해당 가이드](https://docs.nvidia.com/launchpad/ai/base-command-coe/latest/bc-coe-docker-basics-step-02.html)를 따라 token을 발급받고 기록해둡니다.
이후 `$HOME/.config/enroot/.credentials` 파일에 `machine <hostname> login <username> password <password>` 형태로 token 정보를 기록합니다. 이때 username 부분은 `$oauthtoken`이라고 정확하게 적어주시면 됩니다.

```
# NVIDIA GPU Cloud (both endpoints are required)
machine nvcr.io login $oauthtoken password <token>
machine authn.nvidia.com login $oauthtoken password <token>
```

NGC 외에도 로그인이 필요한 이미지 저장소를 사용한다면 동일하게 id, token을 해당 파일에 기록해주시면 됩니다.
```bash
enroot import nvcr.io/nvidia/pytorch:24.01-py3
```

### enroot create

[document](https://github.com/NVIDIA/enroot/blob/master/doc/cmd/create.md)

이미지에서 container를 실제로 생성하는 명령어입니다.
생성된 container는 `$HOME/.local/share/enroot` 경로에 저장됩니다.

```bash
enroot create --name pytorch nvidia+pytorch+24.01-py3.sqsh
```

### enroot start

[document](https://github.com/NVIDIA/enroot/blob/master/doc/cmd/start.md)

생성된 컨테이너에 interactive하게 터미널을 붙이거나 container 내에서 명령어를 실행합니다.
```bash
enroot start pytorch # interactive하게 terminal 연결
enroot start pytorch nvidia-smi # container 내에서 nvidia-smi한 결과를 출력함
```

docker와 다른 enroot container의 특징은 기본적으로는 container 내부의 파일 시스템을 변경할수도 없고, root 권한도 없다는 점입니다.
따라서 `apt`를 이용해 패키지를 설치하는 경우 'sudo 권한 획득'과 '파일 write 권한 획득' 두가지 옵션을 주어야 합니다.

```enroot
enroot start --root --rw pytorch
```

이렇게 root 권한으로 필요한 설정을 마치고 user 권한으로 작업을 수행할 수 있습니다.

그 외에도 특정 폴더 마운트하기, hook 설정하기 등의 기능을 document에서 확인하실 수 있습니다.

### enroot remove

[document](https://github.com/NVIDIA/enroot/blob/master/doc/cmd/remove.md)

생성된 컨테이너를 완전히 삭제하는 명령어 입니다.
```bash
enroot remove pytorch
```

### enroot export

[document](https://github.com/NVIDIA/enroot/blob/master/doc/cmd/export.md)

컨테이너를 이미지로 다시 저장하는 명령어입니다.
컨테이너 생성 후 필요한 디펜던시를 설치하는 등의 여러가지 동작을 끝마친 경우 `enroot export`를 통해 이미지화 할 수 있습니다.

```bash
enroot export --output custom_torch.sqsh pytorch
```

## 특징

enroot 의 container는 `~/.local/share/enroot` 내에 일반적인 파일 시스템처럼 존재합니다.
현재 저희 SLURM cluster는 HOME directory를 공유하므로 한 node에서 생성한 container를 다른 node에서도 접근할 수 있습니다.
더 나아가, 서로 다른 node 에서 `enroot start <CONTAINER_NAME>`으로 동일한 container에 접근하는 경우 한 컴퓨터에서 두개의 terminal을 열고 프로그램을 돌리는 것과 동일한 상황을 연출할 수 있습니다.
(이를 이용해 ddp 구성이 쉽다고 하는데 저는 어떻게 하는지 잘 모릅니다.)