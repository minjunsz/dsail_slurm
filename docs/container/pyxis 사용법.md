---
sidebar_position: 2
---

# Pyxis 사용법

SLURM과 enroot를 연동해주는 플러그인으로 sbatch command에 container관련 옵션을 추가해줍니다.
기본적인 사용법은 `sbatch --help`에서 확인하실 수 있습니다.

## 이미지&컨테이너 기반 사용법

**이미지를 바로 사용하는 경우**

이미지로부터 새로운 container를 만들어 사용하고 폐기하는 방법입니다.
매번 실행할때마다 container를 초기화 하기 때문에 속도가 느린 대신 동일한 환경이 보장된다는 장점이 있습니다.

```
#SBATCH --container-image=docker://debian       # docker hub에서 이미지 받아오기
#SBATCH --container-image=./centos.sqsh         # enroot import로 다운받아둔 이미지 사용하기
```

**컨테이너를 직접 연결하는 경우**

기존에 존재하는 container 내에서 실행하는 방법입니다.
이미지를 사용하기 이전에 특정 패키지를 설정하는 등의 동작이 추가로 필요한 경우 유용하게 사용할 수 있습니다.
컨테이너를 새로 빌드하는 과정이 사라져 실행 속도가 상대적으로 빠릅니다.

```
#SBATCH --container-name=gpu               # pyxis_gpu라는 이름의 container를 사용합니다.
```

`--container-name` option을 사용하는 경우 `pyxis_`라는 prefix가 붙으므로 `enroot create` 할 때 `--name` 옵션을 사용할 때 `pyxis_`를 추가한 이름으로 생성해야합니다.

## 기타 옵션

- `--container-mount-home`
    - 홈 디렉토리가 컨테이너에 마운트 됩니다
    - conda 환경이 공유되어 편리하다는 장점이 있습니다.
- `--container-workdir`
    - 최초 컨테이너는 `/` 디렉토리에서 시작합니다.
    - 명령어를 실행할 디렉토리를 `/`가 아닌 다른 곳으로 바꿀 때 사용합니다.

전체 옵션 리스트

```
$ srun --help
...
      --container-image=[USER@][REGISTRY#]IMAGE[:TAG]|PATH
                              [pyxis] the image to use for the container
                              filesystem. Can be either a docker image given as
                              an enroot URI, or a path to a squashfs file on the
                              remote host filesystem.

      --container-mounts=SRC:DST[:FLAGS][,SRC:DST...]
                              [pyxis] bind mount[s] inside the container. Mount
                              flags are separated with "+", e.g. "ro+rprivate"

      --container-workdir=PATH
                              [pyxis] working directory inside the container
      --container-name=NAME   [pyxis] name to use for saving and loading the
                              container on the host. Unnamed containers are
                              removed after the slurm task is complete; named
                              containers are not. If a container with this name
                              already exists, the existing container is used and
                              the import is skipped.
      --container-save=PATH   [pyxis] Save the container state to a squashfs
                              file on the remote host filesystem.
      --container-mount-home  [pyxis] bind mount the user's home directory.
                              System-level enroot settings might cause this
                              directory to be already-mounted.

      --no-container-mount-home
                              [pyxis] do not bind mount the user's home
                              directory
      --container-remap-root  [pyxis] ask to be remapped to root inside the
                              container. Does not grant elevated system
                              permissions, despite appearances.

      --no-container-remap-root
                              [pyxis] do not remap to root inside the container
      --container-entrypoint  [pyxis] execute the entrypoint from the container
                              image

      --no-container-entrypoint
                              [pyxis] do not execute the entrypoint from the
                              container image
      --container-writable    [pyxis] make the container filesystem writable
      --container-readonly    [pyxis] make the container filesystem read-only

      --container-env=NAME[,NAME...]
                              [pyxis] names of environment variables to preserve
                              from the host environment
```