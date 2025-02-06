<template>
  <div class="about">
    <h1 class="title">사이트 소개</h1>
    <div class="about-content" style="grid-template-columns: 3fr 2fr">
      <!-- 소개 -->
      <div class="about-item hello">
        <span class="text1">안녕하세요, 만나서 반갑습니다👋</span>
        <span class="text2 title2">저는 無名입니다</span>
        <span class="text3">프론트엔드 개발자, 독립 개발자, 블로거입니다</span>
      </div>
      <!-- 추구 -->
      <div class="about-item pursuit">
        <span class="tip">추구</span>
        <span class="title2">열정에서</span>
        <span class="title2">시작된 개발로</span>
        <span class="title2">훌륭한 작품을</span>
      </div>
    </div>
    <div class="about-content" style="grid-template-columns: 2fr 3fr">
      <!-- 기술 -->
      <div class="about-item skills">
        <span class="tip">기술</span>
        <span class="title2">창의력 발휘</span>
        <div class="skills-list">
          <a
            v-for="(item, index) in skillsData"
            :key="index"
            :style="{ '--color': item.color }"
            :href="item.link"
            class="skills-item"
            target="_blank"
          >
            <div class="skills-logo">
              <i :class="`iconfont icon-${item.icon}`"></i>
            </div>
            <span class="skills-name">{{ item.name }}</span>
          </a>
        </div>
      </div>
      <!-- 경력 -->
      <div class="about-item career">
        <span class="tip">경력</span>
        <span class="title2">
          <i>무한 발전</i>
        </span>
        <div class="list">
          <span class="list-item" style="--color: #357ef5">ZZRVTC · 컴퓨터 응용 기술</span>
          <span class="list-item" style="--color: #eb372a">FE · 프론트엔드 개발자</span>
        </div>
        <img
          class="career-img"
          src="https://pic.efefee.cn/uploads/2024/02/22/65d71db18bcf9.png"
          alt="career"
        />
      </div>
    </div>
    <div class="about-content" style="grid-template-columns: 3fr 2fr">
      <!-- 성격 -->
      <div class="about-item character" style="--color: #4298b4">
        <span class="tip">성격</span>
        <span class="title2">물류사</span>
        <span class="title2" style="color: var(--color)">ISTJ-A / ISTJ-T</span>
        <span class="more">
          <a href="https://www.16personalities.com/ch/" target="_blank">16personalities</a>
          에서
          <a href="https://www.16personalities.com/ch/istj-%E4%BA%BA%E6%A0%BC" target="_blank">
            물류사
          </a>
          에 대해 더 알아보기
        </span>
        <img
          src="https://pic.efefee.cn/uploads/2024/02/22/65d6bc7ae72ae.png"
          alt="male"
          class="male"
        />
      </div>
      <!-- 좌우명 -->
      <div class="about-item">
        <span class="tip">좌우명</span>
        <span class="title1" style="margin-top: 20px">발로 땅을 딛고,</span>
        <span class="title2">한 치의 실수도 없이.</span>
      </div>
    </div>
    <div class="about-content" style="grid-template-columns: 1fr 1fr">
      <div
        class="about-item like image"
        style="
          --color: #0c0e20;
          background-image: url(https://pic.efefee.cn/uploads/2024/02/27/65dd812567723.webp);
        "
      >
        <div class="image-content">
          <span class="tip">관심사</span>
          <span class="title2">디지털 기술</span>
          <div class="image-desc">
            <span class="left">휴대폰, 컴퓨터 및 하드웨어/소프트웨어</span>
          </div>
        </div>
      </div>
      <div
        class="about-item like image"
        style="
          --color: #7b3c25;
          background-image: url(https://pic.efefee.cn/uploads/2024/02/27/65dd836099d16.webp);
        "
      >
        <div class="image-content">
          <span class="tip">음악 취향</span>
          <span class="title2">팝, 중국어 음악, 순수 음악, ACG</span>
          <div class="image-desc">
            <span class="left">함께 더 많은 음악을 감상해요</span>
          </div>
        </div>
      </div>
    </div>
    <div class="about-content" style="grid-template-columns: 2fr 3fr">
      <!-- 통계 -->
      <div
        class="about-item static image"
        style="
          --color: #0f1114;
          background-image: url(https://pic.efefee.cn/uploads/2024/04/15/661c8fbf226d3.webp);
        "
      >
        <div class="image-content">
          <span class="tip">통계</span>
          <span class="title2">방문 통계</span>
          <div class="static-data">
            <div v-for="(item, key, index) in statisticsData" :key="index" class="static-item">
              <span class="static-name">{{ key }}</span>
              <span class="static-num">{{ item }}</span>
            </div>
          </div>
          <div class="image-desc opacity">
            <span class="left">
              통계 정보 제공: <a href="https://v6.51.la/" target="_blank">51la</a>
            </span>
          </div>
        </div>
      </div>
      <!-- 정보 -->
      <div class="about-item child">
        <div
          class="about-item map image"
          style="background-image: url(https://pic.efefee.cn/uploads/2024/04/15/661cbccc56af5.webp)"
        >
          <span class="position">현재 거주지 <strong>중국, 허난성</strong></span>
        </div>
        <div class="about-item info">
          <div class="info-item">
            <span class="info-name">출생</span>
            <span class="info-num" style="--color: #43a6c6">2001</span>
          </div>
          <div class="info-item">
            <span class="info-name">현재 직업</span>
            <span class="info-num" style="--color: #dfac46">프론트엔드 개발자</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 마음가짐 -->
    <div class="about-content" style="display: flex">
      <div class="about-item">
        <span class="tip">마음가짐</span>
        <span class="title2">왜 블로그를 만들었나요?</span>
        <p class="text">
          이 사이트를 만들 때, <strong>지식을 쌓고</strong>, <strong>관심사를 발전시킬 수 있는</strong> 공간을 갖고 싶었습니다. 다른 사람들과 공유하면서 이것들이 <strong>축적되고 깊이를 더할 수 있습니다</strong>. 더 많은 사람들을 도울 수 있고, 더 많은 사람들의 문제를 해결할 수 있다면, 그것은 정말 멋진 일일 것입니다.
        </p>
        <p class="text">
          여기에는 대부분 <strong>기술 관련</strong> 글들이 있어서 많은 사람들이 보지 않을 수도 있습니다. 자기 기록용이라고 생각하면 될 것 같네요. 물론, 어떤 글이 당신에게 도움이 된다면 저도 매우 기쁠 것입니다.
        </p>
        <p class="text">
          이것이 이 작은 사이트를 만든 본래의 의도이며, <strong>또한 제가 삶을 공유하는 방식입니다</strong>. 여기서 당신과 만나게 되어 기쁘고, 우리가 함께 아름다운 추억을 만들 수 있을 것이라 믿습니다.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getStatistics } from "@/api";

const { theme } = useData();

// 技能数据
const skillsData = [
  {
    name: "JavaScript",
    color: "#f1e05abd",
    icon: "javascript",
    link: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript",
  },
  {
    name: "HTML5",
    color: "#e34f26",
    icon: "html5",
    link: "https://developer.mozilla.org/zh-CN/docs/Web/HTML",
  },
  {
    name: "CSS3",
    color: "#563d7c",
    icon: "css3",
    link: "https://developer.mozilla.org/zh-CN/docs/Web/CSS",
  },
  {
    name: "Vue",
    color: "#41b883",
    icon: "vue",
    link: "https://cn.vuejs.org/",
  },
  {
    name: "React",
    color: "#149ECA",
    icon: "react",
    link: "https://zh-hans.reactjs.org/",
  },
  {
    name: "Node.js",
    color: "#026E00",
    icon: "nodejs",
    link: "https://nodejs.org/",
  },
  {
    name: "Python",
    color: "#3776AB",
    icon: "python",
    link: "https://www.python.org/",
  },
  {
    name: "Docker",
    color: "#2496f2",
    icon: "docker",
    link: "https://www.docker.com/",
  },
  {
    name: "Git",
    color: "#F05032",
    icon: "git",
    link: "https://git-scm.com/",
  },
  {
    name: "Photoshop",
    color: "#31A8FF",
    icon: "photoshop",
    link: "https://www.adobe.com/cn/lead/creativecloud/business.html",
  },
  {
    name: "ChatGPT",
    color: "#4AA181",
    icon: "chatgpt",
    link: "https://chat.openai.com/",
  },
];

// 站点统计数据
const statisticsData = ref(null);

// 获取站点统计数据
const getStatisticsData = async () => {
  const result = await getStatistics(theme.value.tongji["51la"]);
  statisticsData.value = result;
};

onMounted(() => {
  getStatisticsData();
});
</script>

<style lang="scss" scoped>
.about {
  .title {
    font-size: 2.4rem;
    text-align: center;
    border: none;
  }
  .about-content {
    display: grid;
    grid-template-columns: auto auto;
    gap: 20px;
    margin-bottom: 20px;
    .about-item {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 1.2rem 2rem;
      border-radius: 12px;
      background-color: var(--main-card-background);
      border: 1px solid var(--main-card-border);
      box-shadow: 0 8px 12px -4px var(--main-border-shadow);
      overflow: hidden;
      .tip {
        font-size: 14px;
        opacity: 0.8;
        margin-bottom: 12px;
      }
      .title1 {
        font-size: 36px;
        font-weight: bold;
        opacity: 0.6;
      }
      .title2 {
        font-size: 36px;
        font-weight: bold;
        margin-right: 4rem;
      }
      .text {
        font-size: 18px;
        margin: 0.6rem 0;
      }
      &.child {
        background-color: transparent;
        border: none;
        box-shadow: none;
        padding: 0;
        gap: 20px;
        .about-item {
          height: 100%;
        }
      }
      &.hello {
        justify-content: center;
        padding: 2rem;
        color: #fff;
        background-image: linear-gradient(120deg, #5b27ff 0%, #00d4ff 100%);
        background-size: 200% 200%;
        animation: gradientFlow 6s ease infinite;
        .title2 {
          line-height: 2;
        }
      }
      &.pursuit {
        .title2 {
          line-height: 1.2;
          &:last-child {
            display: inline-block;
            background-size: 100% 100%;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-repeat: no-repeat;
            background-image: linear-gradient(45deg, #fa7671 50%, #f45f7f);
          }
        }
      }
      &.character {
        min-height: 220px;
        cursor: pointer;
        .more {
          margin-top: auto;
          font-size: 14px;
          color: var(--main-color-gray);
          a {
            color: var(--main-color-gray);
            &:hover {
              color: var(--color);
            }
          }
        }
        .male {
          position: absolute;
          top: 20px;
          right: -10px;
          height: 140%;
          width: auto;
          transition: transform 0.5s;
          transform-origin: top center;
          @media (max-width: 768px) {
            height: 80%;
          }
        }
        &:hover {
          .male {
            transform: scale(1.2);
          }
        }
      }
      &.skills {
        .skills-list {
          margin-top: 12px;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          .skills-item {
            display: flex;
            align-items: center;
            margin-right: 10px;
            margin-top: 10px;
            padding: 8px 12px 8px 8px;
            border-radius: 40px;
            background-color: var(--main-site-background);
            border: 1px solid var(--main-card-border);
            box-shadow: 0 8px 12px -4px var(--main-border-shadow);
            transition: background-color 0.3s;
            cursor: pointer;
            .skills-logo {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 32px;
              height: 32px;
              margin-right: 8px;
              border-radius: 50%;
              background-color: var(--color);
              .iconfont {
                color: #fff;
              }
            }
            .skills-name {
              font-weight: bold;
              transition: color 0.3s;
            }
            &:hover {
              background-color: var(--main-card-background);
            }
          }
        }
      }
      &.career {
        .title2 {
          letter-spacing: 0.2rem;
          font-size: 40px;
        }
        .list {
          margin-top: 12px;
          display: flex;
          flex-direction: column;
          .list-item {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 12px;
            color: var(--main-font-second-color);
            &::before {
              content: "";
              display: block;
              width: 16px;
              height: 16px;
              background-color: var(--color);
              border-radius: 50%;
              margin-right: 8px;
            }
          }
        }
        .career-img {
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 100%;
          @media (max-width: 768px) {
            position: static;
          }
        }
      }
      &.game {
        min-height: 300px;
        @media (max-width: 768px) {
          min-height: 240px;
        }
      }
      &.like {
        min-height: 400px;
        @media (max-width: 768px) {
          min-height: 300px;
        }
      }
      &.image {
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        .image-content {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          z-index: 2;
          color: #fff;
          .image-desc {
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            margin-top: auto;
            &.opacity {
              font-size: 14px;
              color: #eee;
              opacity: 0.8;
              a {
                color: #eee;
                &:hover {
                  color: var(--main-color);
                }
              }
            }
          }
        }
        &::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          box-shadow: inset 0 -70px 204px 10px var(--color);
          z-index: 0;
        }
      }
      &.static {
        .static-data {
          display: grid;
          gap: 12px;
          grid-template-columns: 1fr 1fr;
          margin: 20px 0;
          .static-item {
            display: flex;
            flex-direction: column;
            .static-name {
              font-size: 15px;
              opacity: 0.8;
            }
            .static-num {
              font-size: 34px;
              font-weight: bold;
            }
          }
        }
      }
      &.map {
        min-height: 170px;
        background-size: 100%;
        transition: background 1.5s ease-in-out;
        cursor: pointer;
        @media (max-width: 768px) {
          background-size: cover;
          pointer-events: none;
        }
        .position {
          display: block;
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          padding: 20px 30px;
          color: #fff;
          background-color: #636352;
          font-size: 20px;
          transition: bottom 1s;
        }
        &:hover {
          background-size: 120%;
          background-position-x: 0;
          background-position-y: 36%;
          .position {
            bottom: -80px;
          }
        }
      }
      &.info {
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        .info-item {
          display: flex;
          flex-direction: column;
          margin-right: 32px;
          .info-name {
            font-size: 14px;
            margin-bottom: 8px;
            color: var(--main-font-second-color);
          }
          .info-num {
            font-size: 34px;
            font-weight: bold;
            color: var(--color);
          }
        }
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
