# DSAIL SLURM Document 만들기

현재 사이트는 https://minjunpark.com/dsail_slurm/ 에서 호스팅중입니다. <br>
해당 프로젝트는 [docusaurus](https://docusaurus.io/)를 기반으로 제작되었습니다.

## How to Install

### Install node.js

docusaurus는 nodejs 기반으로 작성됐으므로 이를 설치합니다.

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
# open new bash
nvm install --lts
```

설치가 잘 완료되었는지 확인하기 위해 `node` 명령어가 잘 동작하는지 확인합니다.

```bash
node -v
# v20.15.0
```

### Clone Repo.

해당 github repo를 clone해온 뒤 필요한 dependency를 설치합니다.

```bash
git clone https://github.com/minjunsz/dsail_slurm.git
cd dsail_slurm
npm install
```

설치가 잘 완료되었다면 development server를 실행할 수 있어야합니다.

```bash
npm run start
# http://localhost:3000/dsail_slurm/ 으로 리다이렉션 됨
```

## How to Edit

### 페이지 수정하는 법

- /docs 폴더 내의 markdown 파일을 수정하면 자동으로 페이지가 수정됩니다.
- sidebar에 나타나는 순서는 front-matter에 작성된 `sidebar_position: 1` 순서를 따릅니다.
- sidebar에 표시되는 제목은 최상단의 `H1` tag를 기준으로 합니다.
    별도로 수정을 원하는 경우 `title: (필독)주의사항` 처럼 front-matter에 명시하면 됩니다.

### 핵심 command

아래의 모든 명령어는 `package.json`이 있는 최상위 디렉토리에서 실행합니다.

- `npm run start`
    - development server를 로컬에서 실행합니다.
    - 파일을 변경하고 저장하면 새로고침 없이도 웹페이지에 변화가 적용됩니다.
- `npm run build`
    - markdown 파일을 html로 빌드하는 명령어입니다.
    - 직접 실행할 경우 `/build/` 디렉토리에 static webserver의 형태로 파일들이 생성됩니다.
    - github page에 등록하면 내부적으로 해당 커멘드를 실행하게 됩니다.
      따라서 파일을 commit하기 전에 `npm run build`를 해서 오류가 없는지 확인합니다.

### 작성 완료 후 deploy 하는 법

```bash
git add *
git commit -m "commit message"
git push origin main
GIT_USER=`GITHUB_ID` npm run deploy
```

## Tips

docusaurus는 일반적인 markdown 파일이 제공하지 않는 추가 기능들을 사용할 수 있습니다.
[공식 document](https://docusaurus.io/docs/markdown-features)에서 사용 가능한 기능들을 확인할 수 있습니다.
일부 기능을 사용하기 위해서는 확장자를 `.md`가 아니라 `.mdx`로 수정해야할 수도 있습니다.

- [Tab 만들기](https://docusaurus.io/docs/markdown-features/tabs)
- [배너 만들기](https://docusaurus.io/docs/markdown-features/admonitions)
- [Section title에 id부여 & 목차 추가하기](https://docusaurus.io/docs/markdown-features/toc)
- [Mermaid diagram 그리기](https://docusaurus.io/docs/markdown-features/diagrams)
