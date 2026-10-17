/**
 * 주식회사 에스에이치조경 (SH LANDSCAPE)
 * 인터랙션 및 화면 제어 스크립트
 */

document.addEventListener("DOMContentLoaded", () => {
  // data.js 검증
  if (typeof SH_DATA === "undefined") {
    console.error("SH_DATA가 로드되지 않았습니다.");
    return;
  }

  // 상태 관리
  const state = {
    currentFilter: "all",
    visibleCount: 6,
    pageSize: 6,
    filteredProjects: [...SH_DATA.projects],
    lastFocusedElement: null
  };

  // DOM 요소 참조
  const siteHeader = document.getElementById("siteHeader");
  const mobileToggle = document.getElementById("mobileToggle");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");
  
  const valuesGrid = document.getElementById("valuesGrid");
  const servicesGrid = document.getElementById("servicesGrid");
  const projectsGrid = document.getElementById("projectsGrid");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const projectsActionBox = document.getElementById("projectsActionBox");
  
  const projectModal = document.getElementById("projectModal");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalCloseFooterBtn = document.getElementById("modalCloseFooterBtn");
  const modalImage = document.getElementById("modalImage");
  const modalCategoryTag = document.getElementById("modalCategoryTag");
  const modalTitle = document.getElementById("modalTitle");
  const modalFeature = document.getElementById("modalFeature");
  const modalPeriod = document.getElementById("modalPeriod");
  const modalLocation = document.getElementById("modalLocation");
  const modalClient = document.getElementById("modalClient");
  const modalDesc = document.getElementById("modalDesc");
  const modalCallBtn = document.getElementById("modalCallBtn");

  const copyAddressBtn = document.getElementById("copyAddressBtn");
  const copyToast = document.getElementById("copyToast");

  /* ------------------------------------------------------------------------
     1. 회사 정보 및 기본 연락처 바인딩
     ------------------------------------------------------------------------ */
  function bindCompanyInfo() {
    const { company } = SH_DATA;

    // 전화번호 링크 바인딩 (tel:...)
    document.querySelectorAll(".sh-tel-link").forEach(el => {
      el.href = company.telLink;
      if (el.dataset.showText !== "false" && !el.textContent.trim()) {
        el.textContent = company.phone;
      }
    });

    // 이메일 링크 바인딩 (mailto:...)
    document.querySelectorAll(".sh-mail-link").forEach(el => {
      el.href = company.mailLink;
      if (el.dataset.showText !== "false" && !el.textContent.trim()) {
        el.textContent = company.email;
      }
    });

    // 주소 텍스트 바인딩
    document.querySelectorAll(".sh-address-text").forEach(el => {
      el.textContent = company.address;
    });

    // 대표자 바인딩
    document.querySelectorAll(".sh-ceo-text").forEach(el => {
      el.textContent = company.ceo;
    });

    // 정식 사명 바인딩
    document.querySelectorAll(".sh-legal-name").forEach(el => {
      el.textContent = company.legalName;
    });

    // 외부 지도 링크 바인딩
    const kakaoMapBtn = document.getElementById("kakaoMapBtn");
    if (kakaoMapBtn) kakaoMapBtn.href = company.kakaoMapUrl;

    const naverMapBtn = document.getElementById("naverMapBtn");
    if (naverMapBtn) naverMapBtn.href = company.naverMapUrl;

    // 연도 동적 설정
    const currentYearEl = document.getElementById("currentYear");
    if (currentYearEl) currentYearEl.textContent = new Date().getFullYear();
  }

  /* ------------------------------------------------------------------------
     2. 핵심 가치 카드 렌더링
     ------------------------------------------------------------------------ */
  function renderValues() {
    if (!valuesGrid) return;

    const icons = [
      // 고객만족
      `<svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
      // 품질우선
      `<svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>`,
      // 성실시공
      `<svg viewBox="0 0 24 24"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/></svg>`,
      // 주인의식
      `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>`,
      // 시공과 유지관리
      `<svg viewBox="0 0 24 24"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg>`
    ];

    valuesGrid.innerHTML = SH_DATA.values.map((val, idx) => `
      <div class="value-card">
        <div class="value-icon" aria-hidden="true">${icons[idx] || ""}</div>
        <h5 class="value-name">${val.title}</h5>
        <p class="value-desc">${val.desc}</p>
      </div>
    `).join("");
  }

  /* ------------------------------------------------------------------------
     3. 사업분야 카드 렌더링
     ------------------------------------------------------------------------ */
  function renderServices() {
    if (!servicesGrid) return;

    servicesGrid.innerHTML = SH_DATA.services.map(s => `
      <article class="service-card">
        <div class="service-image-box">
          <span class="service-num">${s.num}</span>
          <img 
            src="${s.image}" 
            alt="${s.title} 서비스 대표 사진" 
            class="service-image" 
            loading="lazy" 
            width="400" 
            height="300"
          >
        </div>
        <div class="service-body">
          <h4 class="service-title">${s.title}</h4>
          <p class="service-summary">${s.summary}</p>
          <p class="service-desc">${s.description}</p>
          <div class="service-tags" aria-label="${s.title} 주요 작업 키워드">
            ${s.tags.map(t => `<span class="service-tag">#${t}</span>`).join("")}
          </div>
        </div>
      </article>
    `).join("");
  }

  /* ------------------------------------------------------------------------
     4. 시공사례 필터 카운트 업데이트
     ------------------------------------------------------------------------ */
  function updateFilterCounts() {
    const totalCount = SH_DATA.projects.length;
    const constCount = SH_DATA.projects.filter(p => p.filterCategories.includes("construction")).length;
    const plantCount = SH_DATA.projects.filter(p => p.filterCategories.includes("planting")).length;
    const maintCount = SH_DATA.projects.filter(p => p.filterCategories.includes("maintenance")).length;

    const countMap = {
      all: totalCount,
      construction: constCount,
      planting: plantCount,
      maintenance: maintCount
    };

    filterBtns.forEach(btn => {
      const filter = btn.dataset.filter;
      const countEl = btn.querySelector(".filter-count");
      if (countEl && countMap[filter] !== undefined) {
        countEl.textContent = countMap[filter];
      }
    });
  }

  /* ------------------------------------------------------------------------
     5. 시공사례 카드 렌더링
     ------------------------------------------------------------------------ */
  function renderProjects() {
    if (!projectsGrid) return;

    // 현재 필터 적용
    if (state.currentFilter === "all") {
      state.filteredProjects = [...SH_DATA.projects];
    } else {
      state.filteredProjects = SH_DATA.projects.filter(p => 
        p.filterCategories.includes(state.currentFilter)
      );
    }

    // 표시할 프로젝트 슬라이스
    const projectsToShow = state.filteredProjects.slice(0, state.visibleCount);

    if (projectsToShow.length === 0) {
      projectsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px; color: var(--color-text-muted);">
          선택한 분야의 시공사례가 없습니다.
        </div>
      `;
    } else {
      projectsGrid.innerHTML = projectsToShow.map((p, idx) => `
        <article 
          class="project-card" 
          role="button" 
          tabindex="0" 
          data-id="${p.id}"
          aria-label="${p.title} 시공사례 상세 보기"
        >
          <div class="project-thumb-box">
            <span class="project-badge">${p.categoryLabel}</span>
            <img 
              src="${p.thumbImage}" 
              alt="${p.imageAlt}" 
              class="project-thumb" 
              loading="${idx < 6 ? 'eager' : 'lazy'}" 
              width="400" 
              height="250"
            >
          </div>
          <div class="project-card-body">
            <h4 class="project-card-title">${p.title}</h4>
            <p class="project-card-feature">${p.feature}</p>
            <div class="project-card-meta">
              <div class="project-meta-row">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                <span>${p.location}</span>
              </div>
              <div class="project-meta-row">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z"/></svg>
                <span>공기: ${p.period}</span>
              </div>
            </div>
            <div class="project-more-hint">
              <span>상세보기</span>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
            </div>
          </div>
        </article>
      `).join("");
    }

    // 더 보기 버튼 표시 여부 제어
    if (projectsActionBox) {
      if (state.visibleCount >= state.filteredProjects.length) {
        projectsActionBox.style.display = "none";
      } else {
        projectsActionBox.style.display = "block";
        const remain = state.filteredProjects.length - state.visibleCount;
        loadMoreBtn.textContent = `시공사례 더 보기 (+${remain}개)`;
      }
    }

    // 카드 클릭 및 키보드 이벤트 바인딩
    attachProjectCardEvents();
  }

  function attachProjectCardEvents() {
    const cards = projectsGrid.querySelectorAll(".project-card");
    cards.forEach(card => {
      card.addEventListener("click", () => {
        openProjectModal(card.dataset.id, card);
      });
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openProjectModal(card.dataset.id, card);
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     6. 시공사례 필터 탭 이벤트
     ------------------------------------------------------------------------ */
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      state.currentFilter = btn.dataset.filter;
      state.visibleCount = state.pageSize; // 필터 변경 시 6개로 리셋
      renderProjects();
    });
  });

  /* ------------------------------------------------------------------------
     7. 시공사례 더 보기 이벤트
     ------------------------------------------------------------------------ */
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      state.visibleCount += state.pageSize;
      renderProjects();
    });
  }

  /* ------------------------------------------------------------------------
     8. 접근성 고려 상세 모달 (Accessible Modal)
     ------------------------------------------------------------------------ */
  function openProjectModal(projectId, triggerEl) {
    const project = SH_DATA.projects.find(p => p.id === projectId);
    if (!project || !projectModal) return;

    state.lastFocusedElement = triggerEl || document.activeElement;

    // 데이터 채우기
    modalImage.src = project.largeImage;
    modalImage.alt = project.imageAlt;
    modalCategoryTag.textContent = project.categoryLabel;
    modalTitle.textContent = project.title;
    modalFeature.textContent = project.feature;
    modalPeriod.textContent = project.period;
    modalLocation.textContent = project.location;
    modalClient.textContent = project.client;
    modalDesc.textContent = project.description;
    
    if (modalCallBtn) {
      modalCallBtn.href = SH_DATA.company.telLink;
    }

    // 모달 열기
    projectModal.classList.add("open");
    projectModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    // 포커스를 닫기 버튼으로 이동
    setTimeout(() => {
      if (modalCloseBtn) modalCloseBtn.focus();
    }, 100);

    // 모달 내 키보드 트랩 리스너 등록
    document.addEventListener("keydown", handleModalKeydown);
  }

  function closeProjectModal() {
    if (!projectModal || !projectModal.classList.contains("open")) return;

    projectModal.classList.remove("open");
    projectModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    document.removeEventListener("keydown", handleModalKeydown);

    // 원래 초점 복귀
    if (state.lastFocusedElement && typeof state.lastFocusedElement.focus === "function") {
      state.lastFocusedElement.focus();
    }
  }

  function handleModalKeydown(e) {
    if (e.key === "Escape") {
      e.preventDefault();
      closeProjectModal();
      return;
    }

    if (e.key === "Tab") {
      // 포커스 트랩
      const focusableEls = projectModal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableEls.length === 0) return;

      const firstEl = focusableEls[0];
      const lastEl = focusableEls[focusableEls.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    }
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeProjectModal);
  if (modalCloseFooterBtn) modalCloseFooterBtn.addEventListener("click", closeProjectModal);

  // 배경 클릭 시 닫기
  if (projectModal) {
    projectModal.addEventListener("click", (e) => {
      if (e.target === projectModal) {
        closeProjectModal();
      }
    });
  }

  /* ------------------------------------------------------------------------
     9. 주소 복사 기능
     ------------------------------------------------------------------------ */
  if (copyAddressBtn) {
    copyAddressBtn.addEventListener("click", async () => {
      const address = SH_DATA.company.address;
      let copied = false;

      // 1) Clipboard API 시도
      if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
        try {
          await navigator.clipboard.writeText(address);
          copied = true;
        } catch (_) {
          copied = false;
        }
      }

      // 2) 실패 또는 미지원 시 execCommand fallback
      if (!copied) {
        try {
          const textarea = document.createElement("textarea");
          textarea.value = address;
          textarea.setAttribute("readonly", "");
          textarea.style.position = "fixed";
          textarea.style.left = "-9999px";
          document.body.appendChild(textarea);
          textarea.select();
          copied = document.execCommand("copy");
          document.body.removeChild(textarea);
        } catch (_) {
          copied = false;
        }
      }

      if (copied) {
        showToast("주소가 클립보드에 복사되었습니다.");
      } else {
        showToast("주소: " + address);
      }
    });
  }

  function showToast(message) {
    if (!copyToast) return;
    copyToast.textContent = message;
    copyToast.classList.add("show");
    setTimeout(() => {
      copyToast.classList.remove("show");
    }, 2800);
  }

  /* ------------------------------------------------------------------------
     10. 모바일 햄버거 메뉴 토글 및 내비게이션
     ------------------------------------------------------------------------ */
  function toggleMobileMenu() {
    if (!mobileDrawer || !mobileToggle) return;
    const isOpen = mobileDrawer.classList.contains("open");

    if (isOpen) {
      mobileDrawer.classList.remove("open");
      mobileToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("modal-open");
    } else {
      mobileDrawer.classList.add("open");
      mobileToggle.setAttribute("aria-expanded", "true");
      document.body.classList.add("modal-open");
    }
  }

  if (mobileToggle) {
    mobileToggle.addEventListener("click", toggleMobileMenu);
  }

  // 메뉴 클릭 시 부드러운 스크롤 및 모바일 드로어 닫기
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          e.preventDefault();
          
          if (mobileDrawer && mobileDrawer.classList.contains("open")) {
            toggleMobileMenu();
          }

          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  /* ------------------------------------------------------------------------
     11. 헤더 스크롤 효과 & 활성 내비게이션 스파이
     ------------------------------------------------------------------------ */
  window.addEventListener("scroll", () => {
    if (siteHeader) {
      if (window.scrollY > 20) {
        siteHeader.classList.add("scrolled");
      } else {
        siteHeader.classList.remove("scrolled");
      }
    }
  }, { passive: true });

  // 스크롤 시 현재 위치 섹션 감지 (IntersectionObserver)
  const sections = document.querySelectorAll("section[id]");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          document.querySelectorAll(".nav-link").forEach(l => {
            if (l.getAttribute("href") === `#${id}`) {
              l.classList.add("active");
            } else {
              l.classList.remove("active");
            }
          });
        }
      });
    }, {
      rootMargin: "-20% 0px -70% 0px"
    });

    sections.forEach(s => observer.observe(s));
  }

  /* ------------------------------------------------------------------------
     12. 초기화 실행
     ------------------------------------------------------------------------ */
  bindCompanyInfo();
  renderValues();
  renderServices();
  updateFilterCounts();
  renderProjects();
});
