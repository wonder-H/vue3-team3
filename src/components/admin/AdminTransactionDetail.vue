<template>
  <div class="right">
    <div>관리자 거래내역 상세 페이지</div>
    <div>거래 완료, 취소를 하는 페이지</div>

    <hr />
    <div>상세 거래 내역 + 거래한 사용자 정보</div>
    <div>
      구매자 프로필 이미지{{
        transactionDetail.user.profileImg
      }}
    </div>
    <div>
      구매자 닉네임:
      {{ transactionDetail.user.displayName }}
    </div>
    <div>
      구매자 이메일: {{ transactionDetail.user.email }}
    </div>
    <hr />
    <div>거래한 사용자 계좌 정보</div>
    <div>
      은행명: {{ transactionDetail.account.bankName }}
    </div>
    <div>
      은행코드:{{ transactionDetail.account.bankCode }}
    </div>
    <div>
      계좌 번호:{{
        transactionDetail.account.accountNumber
      }}
    </div>
    <hr />
    <div>거래한 제품 정보</div>
    <div>
      제품번호:{{ transactionDetail.product.productId }}
    </div>
    <div>
      썸네일:{{ transactionDetail.product.thumbnail }}
    </div>
    <div>제품명:{{ transactionDetail.product.title }}</div>
    <div>
      제품 설명:{{ transactionDetail.product.description }}
    </div>
    <div>가격:{{ transactionDetail.product.price }}</div>
    <hr />
    <div>거래 시간 및 취소,완료 여부(필요시 사용)</div>
    <div>
      제품 거래 시간:
      {{ transactionDetail.product.timePaid }}
    </div>
    <div>
      거래 취소 여부:
      {{ transactionDetail.product.isCanceled }}
    </div>
    <div>
      거래 완료 여부: {{ transactionDetail.product.done }}
    </div>
    <hr />
    <div>예약 관련 정보(필요시 사용)</div>
    <div>
      예약 시작 시간:{{
        transactionDetail.reservation?.start
      }}
    </div>
    <div>
      예약 종료 시간:{{
        transactionDetail.reservation?.end
      }}
    </div>
    <div>
      예약 취소 여부:{{
        transactionDetail.reservation?.isCanceled
      }}
    </div>
    <div>
      예약 만료 여부:{{
        transactionDetail.reservation?.isExpired
      }}
    </div>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import { useTeamStore } from "../../store/store";
export default {
  data() {
    return {
      transactionDetail: {},
    };
  },

  computed: {
    ...mapStores(useTeamStore),
  },
  created() {
    this.transactionDetail =
      this.teamStore.adminAllTransactions.find(
        (transaction) =>
          transaction.detailId === this.$route.params.id,
      );
  },
};
</script>
