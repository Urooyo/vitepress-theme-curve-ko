<template>
  <Teleport to="body">
    <!-- 右键菜单 -->
    <Transition name="fade" mode="out-in">
      <div
        v-if="rightMenuShow"
        class="right-menu"
        @click="rightMenuShow = false"
        @contextmenu.stop="closeRightMenu"
      >
        <div
          :style="{
            left: rightMenuX + 'px',
            top: rightMenuY + 'px',
          }"
          ref="rightMenuRef"
          class="menu-content s-card hover"
          @contextmenu.stop="closeRightMenu"
        >
          <div class="tools">
            <div class="btn" title="뒤로 가기" @click="rightMenuFunc('back')">
              <i class="iconfont icon-left"></i>
            </div>
            <div class="btn" title="앞으로 가기" @click="rightMenuFunc('forward')">
              <i class="iconfont icon-right"></i>
            </div>
            <div class="btn" title="새로고침" @click="rightMenuFunc('reload')">
              <i class="iconfont icon-refresh"></i>
            </div>
            <div class="btn" title="맨 위로 돌아가기" @click="smoothScrolling">
              <i class="iconfont icon-arrow-up"></i>
            </div>
          </div>
          <div class="all-menu">
            <div
              v-if="clickedType === 'normal'"
              class="btn"
              @click="router.go(shufflePost(theme.postData))"
            >
              <i class="iconfont icon-shuffle"></i>
              <span class="name">임의로 둘러보기</span>
            </div>
            <div
              v-if="clickedType === 'normal'"
              class="btn"
              @click="router.go('/pages/categories')"
            >
              <i class="iconfont icon-folder"></i>
              <span class="name">모든 카테고리</span>
            </div>
            <div v-if="clickedType === 'normal'" class="btn" @click="router.go('/pages/tags')">
              <i class="iconfont icon-hashtag"></i>
              <span class="name">모든 태그</span>
            </div>
            <!-- 链接类型 -->
            <div v-if="clickedType === 'link'" class="btn" @click="rightMenuFunc('open-link')">
              <i class="iconfont icon-window"></i>
              <span class="name">새 탭에서 열기</span>
            </div>
            <div
              v-if="clickedType === 'link'"
              class="btn"
              @click="
                copyText(clickedTypeData?.getAttribute('original-href') || clickedTypeData?.href)
              "
            >
              <i class="iconfont icon-link"></i>
              <span class="name">링크 주소 복사</span>
            </div>
            <!-- 图片类型 -->
            <div
              v-if="clickedType === 'image'"
              class="btn"
              @click="copyImage(clickedTypeData?.src)"
            >
              <i class="iconfont icon-image-copy"></i>
              <span class="name">이 이미지 복사</span>
            </div>
            <div
              v-if="clickedType === 'image'"
              class="btn"
              @click="downloadImage(clickedTypeData?.src)"
            >
              <i class="iconfont icon-download"></i>
              <span class="name">이 이미지 다운로드</span>
            </div>
            <!-- 输入框 -->
            <div
              v-if="clickedType === 'input' && typeof clickedTypeData.value === 'string'"
              class="btn"
              @click="rightMenuFunc('input-paste')"
            >
              <i class="iconfont icon-paste"></i>
              <span class="name">텍스트 붙여넣기</span>
            </div>
            <!-- 选中文本 -->
            <a
              v-if="(clickedType === 'text' || clickedType === 'input') && isLink(clickedTypeData)"
              :href="`${isLink(clickedTypeData)}`"
              class="btn right-menu-link"
              target="_blank"
            >
              <i class="iconfont icon-link"></i>
              <span class="name">새 탭에서 열기</span>
            </a>
            <a
              v-if="clickedType === 'text' || clickedType === 'input'"
              :href="`https://www.baidu.com/s?wd=${encodeURIComponent(clickedTypeData)}`"
              class="btn right-menu-link"
              target="_blank"
            >
              <i class="iconfont icon-baidu"></i>
              <span class="name">배민 검색 사용</span>
            </a>
            <a
              v-if="clickedType === 'text' || clickedType === 'input'"
              :href="`https://cn.bing.com/search?q=${encodeURIComponent(clickedTypeData)}`"
              class="btn right-menu-link"
              target="_blank"
            >
              <i class="iconfont icon-bing"></i>
              <span class="name">빙 검색 사용</span>
            </a>
            <div
              v-if="clickedType === 'text' || clickedType === 'input'"
              class="btn"
              @click="copyText(clickedTypeData)"
            >
              <i class="iconfont icon-copy"></i>
              <span class="name">선택한 텍스트 복사</span>
            </div>
            <div
              v-if="clickedType === 'text' && !commentCopyShow && theme.comment.type === 'artalk'"
              class="btn"
              @click="commentCopy(clickedTypeData)"
            >
              <i class="iconfont icon-chat"></i>
              <span class="name">선택한 텍스트 댓글</span>
            </div>
          </div>
          <!-- 通用菜单 -->
          <div class="all-menu general">
            <!-- 版权协议 -->
            <div class="btn" @click="router.go('/pages/cc')">
              <i class="iconfont icon-accessible"></i>
              <span class="name">저작권 협약</span>
            </div>
            <!-- 隐私政策 -->
            <div class="btn" @click="router.go('/pages/privacy')">
              <i class="iconfont icon-privacy"></i>
              <span class="name">개인정보 보호 정책</span>
            </div>
          </div>
          <div class="all-menu general">
            <!-- 复制地址 -->
            <div class="btn" @click="rightMenuFunc('copy-link')">
              <i class="iconfont icon-copy"></i>
              <span class="name">복사 페이지 주소</span>
            </div>
            <!-- 明暗模式 -->
            <div class="btn" @click.stop="store.changeThemeType">
              <i
                :class="`iconfont icon-${themeType === 'auto' ? 'dark' : themeType === 'dark' ? 'light' : 'auto'}`"
              />
              <span class="name">
                {{
                  themeType === "auto" ? "어두운 모드" : themeType === "dark" ? "밝은 모드" : "시스템 따라가기"
                }}
              </span>
            </div>
          </div>
          <!-- 播放器控制 -->
          <div v-if="playerShow" class="all-menu general player">
            <div class="data">
              <span class="name">{{ playerData.name }}</span>
              <span class="artist">{{ playerData.artist }}</span>
            </div>
            <div class="volume" @click.stop>
              <i
                class="iconfont icon-volume-down"
                @click="playerVolume = Math.max(0, playerVolume - 0.1)"
              />
              <Slider :value="playerVolume" @update="(val) => (playerVolume = val)" />
              <i
                class="iconfont icon-volume-up"
                @click="playerVolume = Math.min(1, playerVolume + 0.1)"
              />
            </div>
            <div class="control" @click.stop>
              <div class="btn" title="이전 곡" @click="playerControl('prev')">
                <i class="iconfont icon-prev"></i>
              </div>
              <div v-if="playState" class="btn" title="일시 정지" @click="playerControl('toggle')">
                <i class="iconfont icon-pause"></i>
              </div>
              <div v-else class="btn" title="재생" @click="playerControl('toggle')">
                <i class="iconfont icon-play"></i>
              </div>
              <div class="btn" title="다음 곡" @click="playerControl('next')">
                <i class="iconfont icon-next"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
    <!-- 快速评论 -->
    <Modal
      :show="commentCopyShow"
      title="빠른 댓글"
      titleIcon="chat"
      @mask-click="commentCopyClose"
      @modal-close="commentCopyClose"
    >
      <span class="modal-tip"> 기존 입력 필드 내용을 삭제하지 않고 바로 아래에 댓글을 작성하세요 </span>
      <Artalk :fill="commentCopyData" />
    </Modal>
  </Teleport>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { mainStore } from "@/store";
import { smoothScrolling, shufflePost, copyText, copyImage, downloadImage } from "@/utils/helper";

const router = useRouter();
const store = mainStore();
const { theme } = useData();
const { useRightMenu, themeType, playerShow, playerVolume, playState, playerData } =
  storeToRefs(store);

// 右键菜单数据
const rightMenuX = ref(0);
const rightMenuY = ref(0);
const clickedType = ref("normal");
const clickedTypeData = ref(null);
const rightMenuRef = ref(null);
const rightMenuShow = ref(false);

// 快速评论
const commentCopyShow = ref(false);
const commentCopyData = ref(null);

// 开启右键菜单
const openRightMenu = (e) => {
  // 检测是否可开启
  if (e.ctrlKey || !useRightMenu.value) return true;
  if (window.innerWidth < 768) return true;
  e.preventDefault();
  rightMenuShow.value = false;
  // 获取点击类型
  checkClickType(e?.target);
  nextTick().then(() => {
    // 处理菜单位置
    const calculateMenuPosition = () => {
      // 获取菜单的宽度和高度
      const menuWidth = rightMenuRef.value?.offsetWidth;
      const menuHeight = rightMenuRef.value?.offsetHeight;
      // 获取屏幕的宽度和高度
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      // 计算正确的坐标值
      let correctX = e.clientX;
      let correctY = e.clientY;
      // 保留边距
      const marginWidth = 20;
      if (correctX + menuWidth > screenWidth - marginWidth) {
        correctX = screenWidth - menuWidth - marginWidth;
      }
      if (correctY + menuHeight > screenHeight - marginWidth) {
        correctY = screenHeight - menuHeight - marginWidth;
      }
      if (correctX < marginWidth) {
        correctX = marginWidth;
      }
      if (correctY < marginWidth) {
        correctY = marginWidth;
      }
      rightMenuX.value = correctX;
      rightMenuY.value = correctY;
    };
    // 显示菜单
    rightMenuShow.value = true;
    // DOM 更新
    nextTick().then(() => calculateMenuPosition());
  });
};

// 关闭右键菜单
const closeRightMenu = (e) => {
  e?.preventDefault();
  rightMenuShow.value = false;
  rightMenuX.value = 0;
  rightMenuY.value = 0;
  clickedType.value = "normal";
  clickedTypeData.value = null;
  commentCopyData.value = false;
};

// 判断点击元素类型
const checkClickType = (target) => {
  if (!target?.tagName) return false;
  // 写入内容
  clickedTypeData.value =
    window.getSelection().toString().length > 0 ? window.getSelection().toString() : target;
  switch (target.tagName) {
    case "A":
      // 链接类型
      clickedType.value = "link";
      break;
    case "IMG":
      // 图片类型
      clickedType.value = "image";
      break;
    case "INPUT":
    case "TEXTAREA":
      // 输入框类型
      clickedType.value = "input";
      break;
    default:
      if (window.getSelection().toString().length > 0) {
        // 已选中的文本
        clickedType.value = "text";
      } else {
        // 普通模式
        clickedType.value = "normal";
      }
      break;
  }
};

// 右键菜单点击事件
const rightMenuFunc = async (type) => {
  try {
    if (!type) return false;
    switch (type) {
      case "back":
        window.history.back();
        break;
      case "forward":
        window.history.forward();
        break;
      case "reload":
        window.location.reload();
        break;
      case "open-link":
        window.open(clickedTypeData.value?.href);
        break;
      case "copy-link":
        const pageLink = theme.value.site + router.route.path;
        if (pageLink) copyText(pageLink);
        break;
      case "input-paste":
        const text = await navigator.clipboard.readText();
        if (clickedTypeData.value && typeof clickedTypeData.value === "object") {
          const inputElement = clickedTypeData.value;
          const start = inputElement.selectionStart;
          const end = inputElement.selectionEnd;
          const value = inputElement.value;
          // 在光标位置插入文本
          const newValue = value.substring(0, start) + text + value.substring(end);
          inputElement.value = newValue;
          // 更新光标位置
          const newCursorPosition = start + text.length;
          inputElement.setSelectionRange(newCursorPosition, newCursorPosition);
        }
        break;
      default:
        return false;
    }
  } catch (error) {
    $message.error("右键菜单发生错误，请重试");
    console.error("右键菜单出错：", error);
  }
};

// 播放器控制
const playerControl = (type) => {
  if (typeof $player !== "object" || !type) return false;
  switch (type) {
    case "toggle":
      $player?.toggle();
      break;
    case "next":
      $player?.skipForward();
      $player?.play();
      break;
    case "prev":
      $player?.skipBack();
      $player?.play();
      break;
    default:
      return false;
  }
};

// 选中内容是否为链接
const isLink = (data) => {
  if (!data) return false;
  const hasProtocol = /^(http|https):\/\//i.test(data);
  const urlData = hasProtocol ? data : `http://${data}`;
  try {
    new URL(urlData);
    return urlData;
  } catch (error) {
    return false;
  }
};

// 评论选中内容
const commentCopy = (data) => {
  if (!data) return false;
  let commentData = "> " + data.trim().replace(/\s+/g, " ");
  if (commentData.length >= 200) {
    commentData = commentData.substring(0, 200) + "...";
  }
  commentCopyData.value = commentData;
  commentCopyShow.value = true;
};

// 关闭快速评论
const commentCopyClose = () => {
  commentCopyShow.value = false;
  if (typeof $comment !== "undefined") $comment.reload();
};

defineExpose({ openRightMenu });
</script>

<style lang="scss" scoped>
.right-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  transition: opacity 0.2s;
  .menu-content {
    position: absolute;
    width: 180px;
    background-color: var(--main-card-background);
    animation: fade-up 0.2s forwards;
    transition:
      opacity 0.3s,
      border-color 0.3s,
      box-shadow 0.3s,
      background-color 0.3s;
    .tools {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      justify-content: space-between;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--main-card-border);
      .btn {
        width: 34px;
        height: 34px;
        min-width: 34px;
      }
    }
    .all-menu {
      margin-top: 12px;
      .btn {
        justify-content: flex-start;
        margin-bottom: 6px;
        .iconfont {
          font-size: 20px;
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
      &.general {
        padding-top: 12px;
        border-top: 1px solid var(--main-card-border);
      }
    }
    .player {
      .data {
        display: flex;
        flex-direction: column;
        align-items: center;
        span {
          width: 100%;
          padding: 0 8px;
          text-align: center;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .artist {
          font-size: 14px;
          margin-top: 4px;
          color: var(--main-font-second-color);
        }
      }
      .volume {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0 6px;
        margin-top: 1rem;
        width: 100%;
        .iconfont {
          color: var(--main-font-second-color);
          font-size: 20px;
          transition: color 0.3s;
          cursor: pointer;
          &:first-child {
            margin-right: 6px;
          }
          &:last-child {
            margin-left: 6px;
          }
          &:hover {
            color: var(--main-color);
          }
        }
      }
      .control {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        margin-top: 8px;
        .btn {
          padding: 6px;
          margin-bottom: 0;
          .iconfont {
            font-size: 26px;
          }
        }
      }
    }
    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      padding: 8px;
      transition:
        color 0.3s,
        background-color 0.3s;
      .iconfont {
        font-size: 20px;
        transition: color 0.3s;
      }
      .name {
        margin-left: 12px;
      }
      &:hover {
        color: var(--main-card-background);
        background-color: var(--main-color);
        .iconfont {
          color: var(--main-card-background);
        }
      }
    }
  }
}
.modal-tip {
  font-size: 15px;
  margin-top: -4px;
  margin-bottom: 1rem;
  display: block;
  color: var(--main-font-second-color);
  border-left: 4px solid var(--main-card-border);
  border-radius: 4px;
  padding: 8px 0 8px 12px;
  background-color: var(--main-card-second-background);
}
</style>
