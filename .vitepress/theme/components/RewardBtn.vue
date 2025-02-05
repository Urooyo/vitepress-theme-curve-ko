<!-- 打赏按钮 -->
<template>
  <div v-if="rewardData.enable" class="reward">
    <div class="reward-btn" @click="rewardShow = true">
      <i class="iconfont icon-reward" />
      <span class="text">작가에게 선물하기</span>
    </div>
    <!-- 설정 패널 -->
    <Modal
      :show="rewardShow"
      :maxWidth="430"
      title="작가에게 선물하기"
      titleIcon="reward"
      @mask-click="rewardShow = false"
      @modal-close="rewardShow = false"
    >
      <div class="reward-card">
        <span class="thank">🙏 당신의 선물로 저를 위한 힘을 주셨습니다</span>
        <div class="qr">
          <a v-if="rewardData?.wechat" :href="rewardData.wechat" class="qr-img" target="_blank">
            <img v-if="rewardData?.wechat" :src="rewardData.wechat" alt="위챗" />
            <span class="tip">
              <i class="iconfont icon-wechat-pay" />
              위챗
            </span>
          </a>
          <a v-if="rewardData?.alipay" :href="rewardData.alipay" class="qr-img" target="_blank">
            <img v-if="rewardData?.alipay" :src="rewardData.alipay" alt="알리페이" />
            <span class="tip">
              <i class="iconfont icon-alipay" />
              알리페이
            </span>
          </a>
        </div>
        <div v-if="showJump" class="all-list s-card hover" @click="toRewardList">
          <span class="title">모든 선물자 목록</span>
          <span class="tip">
            선물 금액은 오픈 소스 프로젝트 유지 및 서버, 도메인 및 각종 클라우드 서비스 비용에 사용됩니다
          </span>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script setup>
const router = useRouter();
const { theme } = useData();
const { rewardData } = theme.value;

const props = defineProps({
  showJump: {
    type: Boolean,
    default: true,
  },
});

// 赞赏显示
const rewardShow = ref(false);

// 跳转至赞赏名单
const toRewardList = () => {
  rewardShow.value = false;
  router.go("/pages/thanks");
};
</script>

<style lang="scss" scoped>
.reward {
  position: relative;
  display: flex;
  justify-content: center;
  width: max-content;
  margin: 1rem auto;
  user-select: none;
  cursor: pointer;
  .reward-btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 120px;
    border-radius: 8px;
    color: #fff;
    background-color: var(--main-color-red);
    transition: box-shadow 0.5s;
    .iconfont {
      color: #fff;
      font-weight: normal;
      margin-right: 6px;
    }
    &:hover {
      box-shadow: 0 0 40px 6px #ff384270;
    }
  }
}
.reward-card {
  .thank {
    display: inline-flex;
    justify-content: center;
    margin-bottom: 1rem;
    width: 100%;
    color: var(--main-color);
    font-weight: bold;
  }
  .qr {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
    .qr-img {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 100%;
        height: auto;
        border-radius: 16px;
        overflow: hidden;
      }
      .tip {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 0.8rem;
        .iconfont {
          margin-right: 6px;
          font-size: 18px;
        }
      }
      &:hover {
        .iconfont {
          color: var(--main-color);
        }
      }
    }
  }
  .all-list {
    margin-top: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: var(--main-card-second-background);
    .title {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 8px;
      transition: color 0.3s;
    }
    .tip {
      text-align: center;
      font-size: 12px;
      opacity: 0.6;
    }
    &:hover {
      .title {
        color: var(--main-color);
      }
    }
  }
}
</style>
