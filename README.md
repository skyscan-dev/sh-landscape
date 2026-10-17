# 주식회사 에스에이치조경 (SH LANDSCAPE) 공식 웹사이트

‘자연과 공간을 잇는 조경’ — **주식회사 에스에이치조경(SH LANDSCAPE)**의 공식 기업 홈페이지 프로젝트입니다.  
별도의 백엔드 서버나 유료 API 없이 순수 정적 웹 기술(HTML5, CSS3, JavaScript ES6)로 제작되어 **GitHub Pages**를 통해 비용 없이 안정적으로 무료 호스팅 및 배포할 수 있습니다.

---

## 1. 프로젝트 주요 특징

1. **실제 조경 현장 사진 중심의 현대적 디자인**
   - 회사소개 책자에서 직접 추출·최적화한 실제 12개 시공 현장 사진 및 본사 전경 사진 사용
   - 짙은 숲색(`Forest Green`), 잎사귀 녹색(`Leaf Green`), 따뜻한 회백색(`Warm Gray-White`)의 신뢰감 있는 팔레트
   - 불필요한 장식과 과도한 애니메이션을 배제하고 시공 실적과 회사 정보가 돋보이는 구성
2. **반응형 웹 지원 (PC, 태블릿, 모바일)**
   - 360px 모바일 화면부터 1440px+ 와이드 데스크톱까지 완벽 대응
   - 모바일 하단 빠른 상담 바(전화상담, 시공사례 바로가기) 및 안전 영역(`env(safe-area-inset-bottom)`) 처리
   - 모바일 환경에서 중요한 사진 구도가 잘리지 않도록 모바일 최적화 대표 이미지 별도 적용
3. **접근성(Web Accessibility)과 사용자 편의성**
   - WAI-ARIA 기반 시공사례 상세 모달 (`role="dialog"`, ESC 닫기, 포커스 트랩, 배경 스크롤 방지, 원래 카드로 초점 복귀)
   - 시공사례 분류 필터(전체, 조경시공, 식재·전정, 예초·관리) 및 '더 보기(+6개)' 페이징
   - 원클릭 본사 주소 복사 기능 및 네이버 지도 / 카카오맵 원클릭 길찾기 연결
   - 실제 연결되는 `tel:` 전화 상담 링크 및 `mailto:` 이메일 문의 링크
4. **중앙 집중형 데이터 관리 (`js/data.js`)**
   - 회사 정보, 연락처, 주소, 사업분야, 12개 시공사례 데이터를 `js/data.js` 한 파일에서 통합 관리
   - 전화번호나 주소 변경 시 `data.js` 한 줄만 수정하면 웹사이트 모든 영역에 일괄 자동 반영
5. **완전한 상대 경로 설계**
   - GitHub Pages 저장소 이름(`https://사용자아이디.github.io/저장소이름/`) 환경에서도 CSS, JS, 이미지가 깨지지 않도록 모든 자원을 `./` 기준 상대 경로로 구현

---

## 2. 프로젝트 폴더 구조

```
sh-landscape/
├── index.html                 # 메인 웹페이지 구조 및 시맨틱 마크업
├── css/
│   └── style.css              # 디자인 시스템 및 반응형 미디어 쿼리
├── js/
│   ├── data.js                # 회사 정보 및 12개 시공사례 데이터 관리
│   └── app.js                 # 화면 렌더링, 필터, 모달, 주소 복사 등 기능 로직
├── assets/
│   ├── logo/
│   │   ├── logo.png           # 정식 로고 (투명 배경)
│   │   └── logo-white.png     # 푸터용 화이트 로고
│   └── images/
│       ├── hero-bg.jpg        # PC 메인 대표 이미지 (메타세쿼이아 가로수길)
│       ├── hero-bg-mobile.jpg # 모바일 메인 대표 이미지
│       ├── about-sunlight.jpg # 회사소개 수목 햇살 이미지
│       ├── company-farm.jpg   # 영천 본사 농장 전경 사진
│       ├── og-image.jpg       # SNS 및 카카오톡 공유용 썸네일 (1200x630)
│       ├── service-*.jpg      # 4대 사업분야 대표 사진 (건축, 식재, 전정, 예초)
│       └── project-*.jpg      # 12개 시공사례 썸네일(thumb) 및 상세(large) 사진
├── .nojekyll                  # GitHub Pages 지킬 빌드 방지 파일
└── README.md                  # 운영 및 배포 가이드 문서 (본 파일)
```

---

## 3. 로컬 환경에서 미리보기

별도의 복잡한 개발 프로그램 설치 없이 브라우저에서 바로 확인할 수 있습니다.

### 방법 A: 간단히 파일 열기
- `sh-landscape` 폴더 안에 있는 `index.html` 파일을 더블 클릭하여 크롬(Chrome)이나 엣지(Edge) 브라우저로 엽니다.

### 방법 B: 로컬 웹서버 실행 (권장)
VS Code의 `Live Server` 확장 프로그램을 사용하거나 파이썬 간이 서버를 실행하면 실제 웹 호스팅과 동일한 환경에서 테스트할 수 있습니다.
```bash
# 터미널 또는 PowerShell에서 실행
python -m http.server 8000
```
브라우저 주소창에 `http://localhost:8000` 을 입력하여 접속합니다.

---

## 4. GitHub 저장소 생성 및 GitHub Pages 배포 방법

비전공자도 마우스 클릭 몇 번으로 쉽게 배포할 수 있는 단계별 가이드입니다.

### 1단계: GitHub 새 저장소(Repository) 만들기
1. [GitHub](https://github.com/)에 로그인합니다.
2. 우측 상단의 **`+`** 버튼을 누르고 **`New repository`**를 선택합니다.
3. **Repository name**에 원하는 영문 이름을 입력합니다. (예: `sh-landscape`)
4. **Public**(공개)으로 설정하고 **`Create repository`**를 클릭합니다.

### 2단계: 프로젝트 파일 업로드
#### 깃(Git) 명령어를 사용하는 경우:
```bash
cd c:\Users\DANAWA\Desktop\sh-landscape
git init
git add .
git commit -m "feat: 주식회사 에스에이치조경 공식 웹사이트 초기 릴리즈"
git branch -M main
git remote add origin https://github.com/사용자아이디/sh-landscape.git
git push -u origin main
```

#### GitHub 웹페이지에서 직접 올리는 경우:
1. 생성된 저장소 화면에서 **`uploading an existing file`** 링크를 클릭합니다.
2. `sh-landscape` 폴더의 모든 파일(`index.html`, `css`, `js`, `assets`, `.nojekyll`, `README.md`)을 드래그하여 업로드합니다.
3. 하단의 **`Commit changes`** 버튼을 누릅니다.

### 3단계: GitHub Pages 활성화
1. 저장소 상단 탭에서 **`Settings`**(설정)를 클릭합니다.
2. 좌측 메뉴에서 **`Pages`**를 클릭합니다.
3. **Build and deployment > Source** 항목에서 **`Deploy from a branch`**를 선택합니다.
4. **Branch** 설정에서:
   - 브랜치: **`main`** 선택
   - 폴더: **`/(root)`** 선택
5. **`Save`**(저장) 버튼을 누릅니다.
6. 1~2분 뒤 페이지 상단에 녹색 메시지와 함께 배포된 웹사이트 주소가 나타납니다:
   > **`https://사용자아이디.github.io/sh-landscape/`**

---

## 5. 웹사이트 내용 수정 및 유지관리 방법

### 1) 회사 정보 수정 (전화번호, 주소, 대표자, 이메일 등)
`js/data.js` 파일을 메모장이나 코드 편집기로 열고 최상단의 `company` 객체를 수정합니다.
```javascript
// js/data.js
company: {
  legalName: "주식회사 에스에이치조경",
  displayName: "㈜에스에이치조경",
  brandName: "SH조경",
  ceo: "이승훈",
  address: "경상북도 영천시 청통면 치일들길 140",
  phone: "010-4604-3484",            // 전화번호 변경 시 자동 반영
  fax: "054-332-3485",
  email: "shlandscape@hanmail.net",  // 이메일 변경 시 자동 반영
  // ...
}
```

### 2) 시공사례 추가 / 수정 / 삭제
`js/data.js` 파일의 `projects` 배열에 새로운 항목을 추가하거나 기존 항목을 수정합니다.
```javascript
// 시공사례 1개 추가 예시:
{
  id: "sh-proj-13",                                    // 중복되지 않는 고유 ID
  title: "신규 공사명",
  feature: "공사 주요 특징 (예: 수목 식재 및 잔디 시공)",
  period: "2026.03.01 ~ 2026.04.15",                  // 확인된 공사 기간
  location: "경상북도 영천시 ...",                     // 현장 주소
  client: "발주처명 (확인)",
  filterCategories: ["construction", "planting"],     // 분류: construction, planting, maintenance 중 선택
  categoryLabel: "조경시공 / 식재",
  description: "공사에 대한 상세한 설명 문구를 작성합니다.",
  thumbImage: "./assets/images/project-13-thumb.jpg",  // 썸네일 이미지 경로
  largeImage: "./assets/images/project-13-large.jpg",  // 상세 모달용 큰 이미지 경로
  imageAlt: "사진에 대한 설명 (대체 텍스트)"
}
```

### 3) 사진 교체 방법
- **교체할 사진 파일 위치**: `assets/images/` 폴더
- **권장 사양**:
  - 메인 대표 사진(`hero-bg.jpg`): 가로 1920px 기준, 고화질 JPG/WebP (용량 800KB 이하)
  - 시공사례 썸네일(`project-*-thumb.jpg`): 가로 800px, 3:2 또는 16:10 비율 (용량 150KB 이하)
  - 시공사례 상세 사진(`project-*-large.jpg`): 가로 1400px 내외 (용량 500KB 이하)
- 기존 파일명과 동일하게 덮어쓰거나, 새로운 이름으로 넣은 뒤 `js/data.js`의 경로를 변경해 줍니다.

### 4) 수정 후 GitHub에 다시 반영하는 방법
```bash
git add .
git commit -m "docs: 연락처 및 신규 시공사례 업데이트"
git push origin main
```
커밋 후 1~2분 뒤 GitHub Pages에 자동으로 업데이트 내용이 반영됩니다.

---

## 6. 배포 전 회사 확인 필요 목록 (중요)

책자는 2025년 기준 서류이므로, 방문자에게 왜곡 없는 정확한 정보를 제공하기 위해 정식 공개 전 아래 항목들을 회사에 확인 후 업데이트하는 것을 권장합니다.

| 확인 항목 | 책자 기재 내용 | 확인 사유 및 권장 조치 |
| :--- | :--- | :--- |
| **사업자등록번호** | 177-87-02896 | 책자의 스캔 해상도로 인해 일부 숫자가 흐릿하므로 정식 사업자등록증 번호 대조 확인 필요 |
| **법인 본점 소재지** | 영천시 청통면 치일들길 140 / 영천시 영화로 373 | 책자 표지에는 '치일들길 140'으로 안내되어 있으나 등록증 상에 '영화로 373(망정동)'이 기재되어 있어 주된 영업장과 본점 주소 일치 여부 확인 |
| **업력 및 자본금/시평액** | 업력 15년 / 자본금 1.5억 / 시평액 7.5억 | 법인 설립일은 2022년 6월 17일이며, 성우건기(2017년 설립)를 합산하여 계산된 수치이므로 공식 수치 변경 여부 확인 (현재 사이트 본문에서는 임의 과장을 피하기 위해 제외됨) |
| **대표자 자격 및 약력** | 조경기능사, 분재관리사 1급, 수목치료기술자 등 | 약력 정보의 공식 홈페이지 노출 희망 여부 확인 |
| **갈밭성당 공사 특징 오기** | 책자 07p에 '풀빌라 조경공사'로 오기재 | 책자 07p 대표공사05의 특징 란에 직전 템플릿 문구가 잘못 복사되어 있어 실제 공사인 '성가족상 이전 및 주변 환경 개선공사'로 수정 반영함 (확인 완료) |
| **카카오톡 채널 / SNS 링크** | 미기재 | 향후 카카오톡 채널 개설 시 `js/data.js`에 링크를 추가할 수 있도록 준비됨 |

---

## 7. 브라우저 지원 및 웹 표준

- 최신 모던 브라우저 지원 (Google Chrome, Apple Safari, Microsoft Edge, Mozilla Firefox, Samsung Internet)
- 검색엔진 최적화(SEO) 및 SNS 공유 Open Graph 메타태그 기본 내장
- 스크린 리더 지원(WAI-ARIA) 및 키보드 전용 탐색 지원
- 무거운 외부 라이브러리(jQuery, Bootstrap 등)가 일체 없는 순수 바닐라 코드로 초고속 로딩 보장
