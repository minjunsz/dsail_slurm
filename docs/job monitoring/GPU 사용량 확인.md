---
sidebar_position: 2
---

# GPU 사용량 확인

`nvidia-smi`를 이용해 GPU 사용량을 확인하는 방법을 알아봅니다.

## 실행중인 job에 추가로 ssh 하기 (권장)

먼저 `squeue` 명령어를 통해 실행중인 job의 `jobid`와 어떤 노드에서 실행되고 있는지 `nodelist`를 확인합니다.

```bash
squeue -u $USER -S +i -o "%7i %8u %10P %20j %10T %20R %16b"
```

위에서 확인한 내용을 기반으로 아래의 명령어를 실행해 ssh 접속합니다.
```bash
srun --jobid <JOB_ID> --overlap --nodelist <NODE_NAME> --pty bash --login
```

아래와 같이 `jobid`, `nodelist` 부분을 채워주면 됩니다.

```bash
# example
srun --jobid 407 --overlap --nodelist gpu2 --pty bash --login
```

이렇게 접속하면 자신이 할당받은 GPU index가 `CUDA_VISIBLE_DEVICES` 환경변수로 설정돼 있습니다.
자신이 할당받은 GPU에 대해서만 `nvidia-smi` 결과를 확인해보고 싶다면 아래의 명령어를 사용하시면 됩니다.
```bash
nvidia-smi -i $CUDA_VISIBLE_DEVICES
```

실시간으로 변화 결과를 추적하고싶다면 `watch` 명령어를 함께 사용하시면 됩니다.
```bash
watch -n 1 nvidia-smi -i $CUDA_VISIBLE_DEVICES
```

## JOB에 할당된 node/gpu_index 찾고 nvidia-smi하기

먼저 `squeue` 명령어를 통해 실행중인 job의 `jobid`를 확인합니다.

```bash
squeue -u $USER -S +i -o "%7i %8u %10P %20j %10T %20R %16b"
```

이후 아래의 명령어 중 하나를 선택해 해당 job에 할당된 node와 gpu index를 확인합니다.

```bash
scontrol show jobid <JOB_ID> -d | grep IDX
scontrol show job -d | grep -E 'JobId|IDX'
```

위에서 확인한 정보를 이용해 `nvidia-smi` 정보를 확인해볼 수 있습니다.

```bash
ssh <NODE_NAME> nvidia-smi -i <GPU_IDX>

# example
ssh gpu2 nvidia-smi -i 2,3
```
