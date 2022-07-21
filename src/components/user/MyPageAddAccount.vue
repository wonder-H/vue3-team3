<template>
  <div>유저 계좌 추가하기</div>

  <div class="container">
    <div v-for="bank in teamStore.banks">
      <input
        :id="bank.code"
        type="radio"
        :value="bank.code"
        v-model="bankCode"
      />

      <label
        :for="bank.code"
        :class="bankCode === bank.code ? 'selected' : null"
      >
        {{ bank.name }} <br />
        은행코드: {{ bank.code }} <br />
        계좌번호예시:{{ bank.digits }}<br />
        계좌보유여부:
        {{ bank.disabled ? "보유" : "미보유" }}
      </label>
    </div>
  </div>
  <hr />
  <div>선택된 은행 코드: {{ bankCode }}</div>
  <input v-model="accountNumber" placeholder="계좌번호" />

  <input
    v-model="phoneNumber"
    placeholder="사용자 전화번호"
  />
  <input type="checkbox" v-model="signature" /><span
    >약관을 읽었으며 정보제공에 동의합니다</span
  >
  <div>{{ signature }}</div>

  <button
    @click="
      teamStore.addAccount(
        bankCode,
        accountNumber,
        phoneNumber,
        signature,
      )
    "
  >
    계좌 추가하기
  </button>
</template>
<script>
import { mapStores } from "pinia";
import { useTeamStore } from "../../store/store";

export default {
  data() {
    return {
      bankCode: "",
      accountNumber: "",
      phoneNumber: "",
      signature: false,
    };
  },

  computed: {
    ...mapStores(useTeamStore),
  },
  watch: {
    ["teamStore.banks"]() {},
  },
  created() {
    this.teamStore.showBanks();
  },
  methods: {
    bankCodeSelect(e) {
      this.bankCode = e.target._value;

      //HTMLElement.focus()
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  input {
    display: none;
  }
  label {
    border: 2px solid black;

    &.selected {
      border: 2px solid red;
    }
  }
}
</style>
