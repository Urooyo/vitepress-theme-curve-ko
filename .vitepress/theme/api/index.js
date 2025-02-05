/**
 * 获取一言
 * @param {string} [rule="updated"] - 文章的排序规则，可以是 "created" 或 "updated"
 */
export const getHitokoto = async () => {
  const result = await fetch("https://v1.hitokoto.cn");
  const hitokoto = await result.json();
  return hitokoto;
};

/**
 * 获取给定网址的站点图标和描述
 * @param {string} url - 站点 URL
 * @returns {Promise<{iconUrl: string, description: string}>}
 */
export const getSiteInfo = async (url) => {
  const details = {
    iconUrl: null,
    title: null,
    description: null,
  };
  try {
    // 사이트 데이터
    const response = await fetch(url);
    const text = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");
    // 페이지 제목 가져오기
    const titleElement = doc.querySelector("title");
    details.title = titleElement ? titleElement.textContent : "무명소졸";
    // 아이콘 가져오기
    let iconLink =
      doc.querySelector("link[rel='shortcut icon']") || doc.querySelector("link[rel='icon']");
    if (iconLink) {
      details.iconUrl = new URL(iconLink.getAttribute("href"), url).href;
    } else {
      details.iconUrl = new URL("/favicon.ico", url).href;
    }
    // 설명 가져오기
    const metaDescription = doc.querySelector("meta[name='description']");
    details.description = metaDescription ? metaDescription.content : "暂无站点描述";
  } catch (error) {
    console.error("사이트 정보 가져오기 실패：", error);
  }
  return details;
};

/**
 * Meting
 * @param {id} string - 음악 ID
 * @param {server} string - 서버
 * @param {type} string - 유형
 * @returns {Promise<Object>} - 음악 세부 정보
 */
export const getMusicList = async (url, id, server = "netease", type = "playlist") => {
  const result = await fetch(`${url}?server=${server}&type=${type}&id=${id}`);
  const list = await result.json();
  return list.map((song) => {
    const { pic, ...data } = song;
    return {
      ...data,
      cover: pic,
    };
  });
};

/**
 * 站点统计数据
 */
export const getStatistics = async (key) => {
  const result = await fetch(`https://v6-widget.51.la/v6/${key}/quote.js`);
  const title = [
    "최근 활동",
    "오늘 방문자",
    "오늘 방문",
    "어제 방문자",
    "어제 방문",
    "이번 달 방문",
    "총 방문",
  ];
  const data = await result.text();
  let num = data.match(/(<\/span><span>).*?(\/span><\/p>)/g);
  num = num.map((el) => {
    const val = el.replace(/(<\/span><span>)/g, "");
    return val.replace(/(<\/span><\/p>)/g, "");
  });
  const statistics = {};
  for (let i = 0; i < num.length; i++) {
    if (i === num.length - 1) continue;
    statistics[title[i]] = num[i];
  }
  return statistics;
};
