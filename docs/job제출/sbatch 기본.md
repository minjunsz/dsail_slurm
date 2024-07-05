---
sidebar_position: 1
---

# sbatch 기본

`sbatch` 명령어를 사용하는 기본 작동 방식에 대해 알아봅니다.   
Tutorial에 사용되는 모든 코드는 login node의 `/guide/` 폴더에 있으니 사용하기 전에 example code를 복사해서 사용하시면 됩니다.

## 프로그램 구동 방법

아래와 같이 5초를 카운트 하는 간단한 타이머를 python으로 구현했다고 해봅시다.

```python
# counter.py
import time

for i in range(5):
    print(f"loop {i}", flush=True)
    time.sleep(1)
```
위의 코드를 실행하는 방법은 크게 두가지가 있습니다.

1. terminal에서 바로 `python counter.py` 형태로 실행하는 방법
2. bash script를 작성하고 그 안에서 `python counter.py`를 실행하는 방법

2번과 같이 terminal에서 실행할 명령어를 script형태로 작성한 뒤 실행하는 방법을 batch script라고 부릅니다. (한 script 안에 여러개의 명령어를 넣어둘 수 있다고 해서 batch라고 부름.)
slurm의 `sbatch` 명령어는 이런 batch script를 slurm queue에 등록하는 명령어입니다. 이때 batch script는 기존의 것을 그대로 사용하지 않고 아래와같이 slurm 설정을 추가해줍니다.

```bash
# 기존 counter.sh

#! /bin/bash
python counter.py

#########################################################

# slurm용 counter.slurm

#! /bin/bash
#SBATCH -J counter_example              # job name
#SBATCH -p v1                           # queue name
python counter.py
```

일반적인 shell script에 `#SBATCH`로 시작하는 구문이 추가된 것을 볼 수 있습니다.
이렇게 slurm에 필요한 설정을 추가한 뒤 `sbatch counter.slurm` 이라는 명령어를 이용하면 해당 script가 slurm scheduler에 등록됩니다.
