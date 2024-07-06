---
sidebar_position: 1
---

# 제출된 job 관리

SLURM scheduler에 제출된 작업들의 상태를 확인, 관리하는 명령어를 알아봅니다.

## squeue; 제출된 작업 확인

`squeue`는 현재 scheduler의 queue에 등록돼있는 작업들을 확인하는 명령어입니다.
이 명령어를 사용하면 실행중인 작업 또는 리소스를 기다리며 대기중인 작업이 모두 표시됩니다.
단순히 squeue 명령어를 사용할 경우 충분한 정보가 확인되지 않으므로 아래의 명령어를 alias로 등록해두고 사용하는 것을 추천드립니다.

```bash
squeue -S +i -o "%7i %8u %10P %20j %10T %20R %16b"              # 연구실 cluster에 등록된 전체 작업 확인
squeue -S +i -o "%7i %8u %10P %20j %10T %20R %16b" -u $USER     # 자기 자신이 등록한 작업만 확인
squeue -S +i -o "%7i %8u %10P %20j %10T %20R %16b" -p v1        # v1 queue에 들어있는 작업만 확인
```

squeue 결과 나오는 job state들의 의미는 [공식 document](https://slurm.schedmd.com/squeue.html#SECTION_JOB-STATE-CODES)에서 확인하실 수 있습니다.
일반적으로 우리가 보게될 대표적인 상태는 아래와 같습니다.

- PD; Pending: 리소스 대기중
- R; Running: 실제로 리소스를 할당받아 프로세스 동작중
- CG; Completing: 프로세스가 종료되고 리소스 정리중

## scancel; 작업 취소

`scancel`은 LINUX의 `kill` 명령어에 대응되는 slurm 명령어입니다.
`squeue`를 통해 job id를 확인하고, `scancel` 명령어로 이를 강제종료 할 수 있습니다.

```bash
scancel <JOB_ID>
```

`scancel`은 단순히 프로세스를 강제종료 하는 것 외에도 다양한 os-level signal을 보낼 수도 있습니다.
```bash
scancel --signal=USR1 <JOB_ID>
```