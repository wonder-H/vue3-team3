<template>
  <div class="right">
    <div>모든 거래내역 조회</div>

    <hr />

    <div class="table">
      <div class="row head">
        <div
          v-for="column in columns"
          :key="column.field"
          :style="{ width: `${column.width}px` }"
          class="column head"
        >
          {{ column.name }}
        </div>
        <div
          v-for="(product, index) in products"
          :key="product.id"
          class="row"
        >
          <div
            v-for="column in columns"
            :key="column.field"
            :style="{ width: `${column.width}px` }"
            class="column"
          >
            <template v-if="column.field === 'index'">
              {{ product.id }}
              {{ product.str }}
            </template>
            <template
              v-else-if="column.field === 'isSoldOut'"
            >
              {{
                product[column.field]
                  ? "매진됨"
                  : "제품있음"
              }}
            </template>
            <template v-else>
              {{ product[column.field] }}
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: "cFmeC7aY5KjZbBAdJE9y",
          title: "삼성전자 스마트모니터 M7 S43AM700",
          price: 639000,
          description:
            "107.9cm(43인치) / 와이드(16:9) / 평면 / VA / 3840 x 2160(4K UHD) / 픽셀피치: 0.2451mm / 8ms(GTG) / 300cd / 5,00",
          tags: ["가전", "모니터", "컴퓨터"],
          thumbnail:
            "https://storage.googleapis.com/heropy-api/vBAK4MQdH5v195712.png",
          isSoldOut: false,
        },
        {
          id: "nbqtQvEivYwEXTDet7YM",
          title: "MacBook Pro 16",
          price: 3360000,
          description:
            "역대 가장 강력한 MacBook Pro가 등장했습니다. 최초의 프로용 Apple Silicon인 M1 Pro 또는 M1 Max 칩을 탑재해 쏜살같이 빠른 속도는 물론, 획기적인 성",
          tags: ["가전", "노트북", "컴퓨터"],
          thumbnail:
            "https://storage.googleapis.com/heropy-api/vIKMk_jy4Yv195256.png",
          isSoldOut: false,
        },
      ],
      columns: [
        {
          field: "index",
          name: "상품번호",
          width: 100,
        },
        { field: "title", name: "제목", width: 200 },
        { field: "price", name: "가격", width: 200 },
        { field: "description", name: "설명", width: 200 },
        { field: "isSoldOut", name: "매진", width: 100 },
      ],
    };
  },
};
</script>
