<!-- 全局设置 -->
<template>
  <div class="settings">
    <div class="set-btn s-card" @click="store.changeShowStatus('showSeetings')">
      <i class="iconfont icon-style"></i>
      <span class="set-text">개인화 설정</span>
    </div>
    <!-- 设置面板 -->
    <Modal
      :show="store.showSeetings"
      title="개인화 설정"
      titleIcon="style"
      @mask-click="store.changeShowStatus('showSeetings')"
      @modal-close="store.changeShowStatus('showSeetings')"
    >
      <div class="set-list">
        <span class="title">字体</span>
        <div class="set-item">
          <span class="set-label">전체 글꼴</span>
          <div class="set-options">
            <span
              :class="['options', { choose: fontFamily === 'hmos' }]"
              @click="fontFamily = 'hmos'"
            >
              HarmonyOS Sans
            </span>
            <span
              :class="['options', { choose: fontFamily === 'lxgw' }]"
              @click="fontFamily = 'lxgw'"
            >
              霞鹜文楷
            </span>
          </div>
        </div>
        <div class="set-item">
          <span class="set-label">전체 글꼴 크기</span>
          <div class="set-options">
            <span class="options" @click="store.changeFontSize(false)"> - </span>
            <span class="num">{{ fontSize }}</span>
            <span class="options" @click="store.changeFontSize(true)"> + </span>
          </div>
        </div>
        <span class="title">배경 개인화</span>
        <div class="set-item">
          <span class="set-label">전체 배경</span>
          <div class="set-options">
            <span
              :class="['options', { choose: backgroundType === 'close' }]"
              @click="backgroundType = 'close'"
            >
              닫기
            </span>
            <span
              :class="['options', { choose: backgroundType === 'patterns' }]"
              @click="backgroundType = 'patterns'"
            >
              패턴
            </span>
            <span
              :class="['options', { choose: backgroundType === 'image' }]"
              @click="(backgroundType = 'image'), (themeType = 'dark')"
            >
              이미지
            </span>
          </div>
        </div>
        <div v-if="backgroundType === 'image'" class="set-item">
          <span class="set-label">배경 이미지 주소</span>
          <div class="set-options">
            <input
              v-model="backgroundUrl"
              type="url"
              pattern="https?://.+"
              title="请输入有效的网址，例如：http://www.example.com"
              required
            />
          </div>
        </div>
        <span class="title">홈 스타일</span>
        <div class="set-item">
          <span class="set-label">배너 높이</span>
          <div class="set-options">
            <span
              :class="['options', { choose: bannerType === 'half' }]"
              @click="bannerType = 'half'"
            >
              半屏
            </span>
            <span
              :class="['options', { choose: bannerType === 'full' }]"
              @click="bannerType = 'full'"
            >
              全屏
            </span>
          </div>
        </div>
        <span class="title">기타 조정</span>
        <div class="set-item">
          <span class="set-label">추가 정보 표시 위치</span>
          <div class="set-options">
            <span
              :class="['options', { choose: infoPosition === 'normal' }]"
              @click="infoPosition = 'normal'"
            >
              기본 위치
            </span>
            <span
              :class="['options', { choose: infoPosition === 'fixed' }]"
              @click="infoPosition = 'fixed'"
            >
              오른쪽 아래
            </span>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { mainStore } from "@/store";

const store = mainStore();
const { themeType, fontFamily, fontSize, infoPosition, backgroundType, backgroundUrl, bannerType } =
  storeToRefs(store);
</script>

<style lang="scss" scoped>
.settings {
  .set-btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 42px;
    height: 42px;
    padding: 0;
    border-radius: 25px;
    box-shadow: 0 6px 10px -4px var(--main-dark-shadow);
    .iconfont {
      font-size: 22px;
      margin-left: 10px;
      transition: color 0.3s;
    }
    .set-text {
      margin-left: 10px;
      display: inline-flex;
      opacity: 0;
      font-size: 14px;
      line-height: 1;
      overflow: hidden;
      white-space: nowrap;
      transition: opacity 0.3s;
    }
    &:hover {
      width: 140px;
      color: var(--main-card-background);
      border-color: var(--main-color);
      background-color: var(--main-color);
      .iconfont {
        color: var(--main-card-background);
      }
      .set-text {
        opacity: 1;
      }
    }
  }
}
.set-list {
  .title {
    display: block;
    width: 100%;
    margin: 1rem 0;
    font-size: 16px;
    font-weight: bold;
    border-left: 4px solid var(--main-color);
    border-radius: 4px 8px 8px 4px;
    background-color: var(--main-border-shadow);
    padding: 6px 0 6px 12px;
    &:first-child {
      margin-top: 0;
    }
  }
  .set-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
    .set-options {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 40px;
      border-radius: 8px;
      .options {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.9375rem;
        border-radius: 8px;
        margin: 4px 8px;
        padding: 6px 8px;
        min-width: 30px;
        background-color: var(--main-card-border);
        transition:
          color 0.3s,
          background-color 0.3s;
        &.choose,
        &:hover {
          color: var(--main-card-background);
          background-color: var(--main-color);
          box-shadow: 0 8px 16px -4px var(--main-border-shadow);
        }
        &:last-child {
          margin-right: 0;
        }
      }
      .num {
        margin: 0 4px;
      }
      input {
        border: none;
        outline: none;
        border-radius: 8px;
        color: var(--main-font-color);
        font-family: var(--main-font-family);
        background-color: var(--main-border-shadow);
        height: 100%;
        padding: 0 1rem;
        font-size: 14px;
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
    @media (max-width: 512px) {
      flex-direction: column;
      align-items: flex-start;
      .set-options {
        margin-top: 8px;
        .options {
          &:first-child {
            margin-left: 0;
          }
        }
      }
    }
  }
}
</style>
