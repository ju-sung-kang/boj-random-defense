# BOJ Random Defense

BOJ Random Defense는 백준 온라인 저지(BOJ)에서 랜덤한 문제를 선택하고, 제한된 시간 내에 문제를 해결하도록 돕는 크롬 확장 프로그램입니다. 이 확장 프로그램은 문제를 할당받을 때 타이머를 시작하고, 문제 풀이 시간을 기록할 수 있도록 합니다.

## 📌 주요 기능

랜덤 문제 할당: 클릭 한 번으로 BOJ에서 랜덤한 티어 문제를 자동으로 선택합니다.

타이머 기능: 문제 풀이 시간을 자동으로 측정하여 화면에 표시합니다.

## 📂 파일 구조

boj-random-defense/
├── background.js      # 백그라운드 스크립트 (확장 프로그램의 백그라운드 동작 관리)
├── icon.png           # 확장 프로그램 아이콘
├── manifest.json      # 크롬 확장 프로그램 설정 파일
├── popup.html         # 확장 프로그램 팝업 UI
├── popup.js           # 팝업 UI 스크립트
├── timer.js           # 문제 풀이 타이머 관련 스크립트
├── README.md          # 프로젝트 설명 및 사용법

## 🚀 설치 방법

이 레포지토리를 클론합니다.

git clone https://github.com/YOUR_GITHUB_USERNAME/boj-random-defense.git
cd boj-random-defense

크롬 브라우저에서 chrome://extensions/ 페이지로 이동합니다.

우측 상단의 개발자 모드를 활성화합니다.

압축 해제된 확장 프로그램 로드 버튼을 클릭한 후, 클론한 폴더를 선택합니다.

확장 프로그램이 정상적으로 설치되었는지 확인합니다.

## 🛠️ 사용 방법

백준 온라인 저지(https://www.acmicpc.net/)에 접속합니다.

확장 프로그램 아이콘을 클릭하고 랜덤 문제 배정 버튼을 누릅니다.

타이머가 시작되며, 풀이 시간이 화면에 표시됩니다.

새 문제를 할당받아도 기존 문제의 타이머는 유지됩니다.