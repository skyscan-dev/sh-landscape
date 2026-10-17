/**
 * 주식회사 에스에이치조경 공식 웹사이트 데이터
 * 회사 기본 정보 및 시공사례 데이터 관리
 */

const SH_DATA = {
  company: {
    legalName: "주식회사 에스에이치조경",
    displayName: "㈜에스에이치조경",
    brandName: "SH조경",
    englishName: "SH LANDSCAPE",
    ceo: "이승훈",
    address: "경상북도 영천시 청통면 치일들길 140",
    phone: "010-4604-3484",
    telLink: "tel:010-4604-3484",
    fax: "054-332-3485",
    email: "shlandscape@hanmail.net",
    mailLink: "mailto:shlandscape@hanmail.net",
    establishedDate: "2022년 6월 17일",
    historyDate: "2017년 3월 17일 성우건기",
    businessCategory: "조경식재·시설물공사업",
    servicesSummary: ["건축 조경", "조경 식재", "전정 작업", "예초 작업"],
    motto: "정직하고 완벽한 시공능력을 가지고 있는 (주)에스에이치조경입니다.",
    englishMotto: "HONESTY IS THE BEST POLICY",
    kakaoMapUrl: "https://map.kakao.com/link/search/" + encodeURIComponent("경상북도 영천시 청통면 치일들길 140"),
    naverMapUrl: "https://map.naver.com/v5/search/" + encodeURIComponent("경상북도 영천시 청통면 치일들길 140")
  },

  values: [
    { title: "고객만족", desc: "고객의 요구를 충족시키며 믿음직한 파트너십을 형성합니다." },
    { title: "품질우선", desc: "검증된 수목과 우수한 자재로 하자 없는 고품질을 지향합니다." },
    { title: "성실시공", desc: "기초 작업부터 마감까지 약속된 공기를 엄수하며 정직하게 시공합니다." },
    { title: "주인의식", desc: "내 정원을 가꾸는 마음으로 시공 단계마다 책임감을 다합니다." },
    { title: "시공과 유지관리", desc: "시공 후에도 건강한 생육과 지속 가능한 공간 관리를 지원합니다." }
  ],

  services: [
    {
      id: "architecture",
      num: "01",
      title: "건축·공간 조경",
      summary: "건축물과 주변 환경에 어울리는 외부 공간 조성",
      description: "신축 준공 조경부터 옥상 하늘정원, 석가산 분수, 야외 휴게 테라스까지 건축물의 가치를 극대화하는 외부 공간을 전문 설계·시공합니다.",
      image: "./assets/images/service-arch.jpg",
      tags: ["준공조경", "옥상하늘정원", "석가산분수", "외부휴게공간"]
    },
    {
      id: "planting",
      num: "02",
      title: "조경 식재",
      summary: "공간 특성을 고려한 수목과 초화류 식재",
      description: "SH본사 농장에 다양한 교목류를 자체 보유하고 있으며, 현장 토양과 기후, 계절 변화를 고려하여 수형이 수려한 건강한 수목을 식재합니다.",
      image: "./assets/images/service-planting.jpg",
      tags: ["자체교목보유", "대형목이식", "관목·초화류", "사계절식재"]
    },
    {
      id: "pruning",
      num: "03",
      title: "전정·수목 관리",
      summary: "수목의 형태와 생육 상태를 고려한 관리",
      description: "전문적인 수목 이해를 바탕으로 알맞은 시기에 가지치기와 수형 정비를 진행하여 수목의 수명 연장과 쾌적한 경관을 유지합니다.",
      image: "./assets/images/service-pruning.jpg",
      tags: ["수목전정", "수형정돈", "위험가지정비", "생육환경개선"]
    },
    {
      id: "mowing",
      num: "04",
      title: "예초·녹지 관리",
      summary: "잔디와 녹지 공간의 정기적인 정비",
      description: "군부대, 관공서 공원, 대규모 단지 및 사업장의 광활한 잔디 구역을 전문 장비(굴삭기, 트럭, 승용예초기 등)로 신속하고 안전하게 정비합니다.",
      image: "./assets/images/service-mowing.jpg",
      tags: ["군부대예초", "공원·녹지정비", "대단지예초", "전문장비보유"]
    }
  ],

  projects: [
    {
      id: "sh-proj-01",
      title: "범어성당 조경공사",
      feature: "성모상 이전 및 주변 환경 개선공사",
      period: "2019.08.01 ~ 2019.10.30",
      location: "대구광역시 수성구 범어천로 90",
      client: "(주)포스코건설 (확인)",
      filterCategories: ["construction", "planting"],
      categoryLabel: "조경시공 / 식재",
      description: "성모상 주변 자연석 쌓기와 조화로운 수목 식재를 통해 경건하고 품격 있는 종교 시설 외부 공간을 완성했습니다.",
      thumbImage: "./assets/images/project-01-thumb.jpg",
      largeImage: "./assets/images/project-01-large.jpg",
      imageAlt: "범어성당 성모상 주변 자연석과 수목 식재 조경"
    },
    {
      id: "sh-proj-02",
      title: "한창종합건설 사옥 조경공사",
      feature: "사옥 조경공사",
      period: "2022.07.01 ~ 2022.08.15",
      location: "대구광역시 동구 효목로 2길 47-8",
      client: "한창종합건설 (확인)",
      filterCategories: ["construction", "planting"],
      categoryLabel: "조경시공 / 사옥",
      description: "건설사 사옥의 정체성을 살려 단정한 수목 배치와 화강석 디딤석, 조경 포장을 조화롭게 시공했습니다.",
      thumbImage: "./assets/images/project-02-thumb.jpg",
      largeImage: "./assets/images/project-02-large.jpg",
      imageAlt: "한창종합건설 사옥 외부 조경 전경"
    },
    {
      id: "sh-proj-03",
      title: "갈밭성당",
      feature: "옹벽개선공사",
      period: "2022.10.01 ~ 2022.11.30",
      location: "대구광역시 달서구 갈밭남로 83",
      client: "달서구청(책자표기: 달서군청)",
      filterCategories: ["construction"],
      categoryLabel: "조경시공 / 시설물",
      description: "성당 진입부와 외곽 옹벽 구간을 견고한 석축과 조경 마감으로 보강하여 보행 안전과 미관을 획기적으로 개선했습니다.",
      thumbImage: "./assets/images/project-03-thumb.jpg",
      largeImage: "./assets/images/project-03-large.jpg",
      imageAlt: "갈밭성당 진입로 옹벽 개선 및 조경"
    },
    {
      id: "sh-proj-04",
      title: "천내리 근린생활시설 신축공사",
      feature: "조경공사 (준공 조경)",
      period: "2022.12.05 ~ 2023.01.20",
      location: "대구광역시 화원읍 천내리 38-6",
      client: "(주)바른종합건설 (확인)",
      filterCategories: ["construction", "planting"],
      categoryLabel: "조경시공 / 준공",
      description: "신축 근린생활시설의 옥상 테라스에 곡선형 보도 블록과 독립수, 조경 플랜터를 설치하여 이용객 휴게 공간을 구축했습니다.",
      thumbImage: "./assets/images/project-04-thumb.jpg",
      largeImage: "./assets/images/project-04-large.jpg",
      imageAlt: "천내리 근린생활시설 옥상 테라스 조경"
    },
    {
      id: "sh-proj-05",
      title: "갈밭성당 성가족상이전공사",
      feature: "성가족상 이전 및 주변 환경 개선공사",
      period: "2024.01.08 ~ 2024.02.28",
      location: "대구광역시 달서구 갈밭남로 83",
      client: "갈밭성당 (확인)",
      filterCategories: ["construction", "planting"],
      categoryLabel: "조경시공 / 식재",
      description: "성가족상 이전 설치와 함께 기단석 단장, 에메랄드그린 식재, 야간 경관 조명을 결합해 따뜻한 기도 마당을 완성했습니다.",
      thumbImage: "./assets/images/project-05-thumb.jpg",
      largeImage: "./assets/images/project-05-large.jpg",
      imageAlt: "갈밭성당 성가족상 이전 및 야간 조경 전경"
    },
    {
      id: "sh-proj-06",
      title: "임고강변공원 수목전정공사",
      feature: "조경 리모델링공사 (수목전정)",
      period: "2023.01.26 ~ 2023.02.28",
      location: "경상북도 영천시 임고면 덕연리 132-8",
      client: "영천시공원관리사업소 (확인)",
      filterCategories: ["planting", "maintenance"],
      categoryLabel: "식재·전정 / 관리",
      description: "수변 공원 정자 주변의 소나무 숲과 관목을 전정하여 수형을 바로잡고, 시야 차폐 요소를 해소해 개방감을 확보했습니다.",
      thumbImage: "./assets/images/project-06-thumb.jpg",
      largeImage: "./assets/images/project-06-large.jpg",
      imageAlt: "영천 임고강변공원 정자 주변 수목 전정 현장"
    },
    {
      id: "sh-proj-07",
      title: "월배그린코아 석가산분수조경",
      feature: "석가산분수조경공사",
      period: "2022.09.10 ~ 2023.02.10",
      location: "대구광역시 달서구 조암남로32길 40 월배 삼정그린코아포레스트",
      client: "(주)삼정기업 (확인)",
      filterCategories: ["construction"],
      categoryLabel: "조경시공 / 특화시설",
      description: "대형 자연석을 웅장하게 조형한 석가산과 수경 분수, 다채로운 야간 연출 조명을 결합한 대단지 랜드마크 수경 조경입니다.",
      thumbImage: "./assets/images/project-07-thumb.jpg",
      largeImage: "./assets/images/project-07-large.jpg",
      imageAlt: "월배 삼정그린코아 아파트 석가산 분수 야간 조명"
    },
    {
      id: "sh-proj-08",
      title: "서산전투비행단 예초작업",
      feature: "예초공사 (대규모 군부대 녹지)",
      period: "2024.04.01 ~ 2024.10.15",
      location: "충청남도 서산시 해미면",
      client: "제20전투비행단 (확인)",
      filterCategories: ["maintenance"],
      categoryLabel: "예초·관리",
      description: "공군 제20전투비행단 활주로 주변과 시설 외곽의 대단위 잔디 지대를 정기적으로 안전하고 말끔하게 예초 정비했습니다.",
      thumbImage: "./assets/images/project-08-thumb.jpg",
      largeImage: "./assets/images/project-08-large.jpg",
      imageAlt: "서산전투비행단 광활한 비행장 잔디 예초 정비 현장"
    },
    {
      id: "sh-proj-09",
      title: "경주 스테이 13월",
      feature: "풀빌라 조경공사",
      period: "2023.07.01 ~ 2023.09.30",
      location: "경상북도 경주시 천북면 갈곡성지길 174-30",
      client: "개인",
      filterCategories: ["construction", "planting"],
      categoryLabel: "조경시공 / 리조트",
      description: "프라이빗 풀빌라의 진입로와 동선마다 개비온 블록, 잔자갈 마감, 이국적인 그라스류 식재를 적용한 감성 조경입니다.",
      thumbImage: "./assets/images/project-09-thumb.jpg",
      largeImage: "./assets/images/project-09-large.jpg",
      imageAlt: "경주 스테이 13월 풀빌라 보행로 및 정원 조경"
    },
    {
      id: "sh-proj-10",
      title: "경주 최부자집 조경공사",
      feature: "조경 리모델링공사 (판석 시공)",
      period: "2023.08.01 ~ 2023.09.01",
      location: "경상북도 경주시 보문로 465-40",
      client: "개인",
      filterCategories: ["construction"],
      categoryLabel: "조경시공 / 한옥",
      description: "전통 한옥 고유의 기품을 살려 부정형 판석을 곡선 디딤길로 정밀 배치하고, 잔디와 마사토 마감으로 품격을 더했습니다.",
      thumbImage: "./assets/images/project-10-thumb.jpg",
      largeImage: "./assets/images/project-10-large.jpg",
      imageAlt: "경주 최부자집 한옥 마당 디딤돌 판석 포장"
    },
    {
      id: "sh-proj-11",
      title: "선화지구 메디컬센터 신축공사",
      feature: "옥상조경공사",
      period: "2024.11.01 ~ 2025.01.15",
      location: "경상북도 경산시 진량읍 신상리 1240",
      client: "(주)바른종합건설 (확인)",
      filterCategories: ["construction"],
      categoryLabel: "조경시공 / 옥상조경",
      description: "의료시설을 찾는 환자와 의료진을 위한 옥상 치유 공간으로, 옥상 플랜터와 바닥 패턴 블록을 체계적으로 시공했습니다.",
      thumbImage: "./assets/images/project-11-thumb.jpg",
      largeImage: "./assets/images/project-11-large.jpg",
      imageAlt: "선화지구 메디컬센터 신축 옥상 테라스 정원"
    },
    {
      id: "sh-proj-12",
      title: "경주 여울 한옥펜션",
      feature: "한옥펜션 외부 조경공사",
      period: "2025.01.07 ~ 2025.02.28",
      location: "경상북도 경주시 천북면 천북남로 439-3",
      client: "개인",
      filterCategories: ["construction", "planting"],
      categoryLabel: "조경시공 / 한옥",
      description: "한옥 펜션 마당에 수경 미러폰드와 디딤석 동선, 포인트 관목을 배치하여 사계절 편안한 정원 뷰를 제공합니다.",
      thumbImage: "./assets/images/project-12-thumb.jpg",
      largeImage: "./assets/images/project-12-large.jpg",
      imageAlt: "경주 여울 한옥펜션 앞마당 수경 연못 및 정원"
    }
  ]
};

if (typeof window !== "undefined") {
  window.SH_DATA = SH_DATA;
}
