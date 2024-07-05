---
sidebar_position: 2
---

# pytorch 사용하기

pytorch를 사용하기 위해 slurm script를 수정하는 방법을 소개합니다.

## conda 설치

miniconda를 통해 python 환경을 관리합니다. miniconda 설치 script는 `/guide/` 폴더에 있습니다.

```bash
cp /guide/Miniconda3-latest-Linux-x86_64.sh ~
bash ~/Miniconda3-latest-Linux-x86_64.sh
```

## sbatch script 수정

수정할 부분은 크게 2가지가 있습니다.

1. gpu를 사용하기 위해 `#SBATCH --gres=gpu:<GPU개수>` 설정을 추가합니다.
2. conda를 시작하고 가상환경을 활성화합니다.

slurm을 통해 실행된 script는 conda가 꺼져있습니다. 이 상황에서 `conda activate <가상환경_이름>` 명령어를 실행하면 `CondaError: Run 'conda init' before 'conda activate'` 오류가 발생합니다. 이를 해결하기 위해서는 `conda activate` 명령어를 실행하기 전에 아래와같이 conda를 시작 해주어야합니다.

```bash
#! /bin/bash
#SBATCH -J pytorch_example              # job name
#SBATCH -p v1                           # queue name
#SBATCH --gres=gpu:2                    # allocate 2 gpus

. $HOME/miniconda3/etc/profile.d/conda.sh
conda activate torch

python example.py
```