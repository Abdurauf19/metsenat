<template>
  <div class="c">
    <div
      class="flex justify-end py-[28px] md:pr-[15px] mmd:pr-[70px] xll:pr-[100px] pr-[120px]"
    >
      <span
        class="flex items-center justify-center sm:w-[120px] mmd:w-[150px] sm:gap-[10px] gap-[14px] bg-[#3366FF] rounded-[5px] w-[198px] cursor-pointer"
      >
        <svg
          class="sm:w-[14px] sm:h-[16px]"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.9999 11.9999H4.00007"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 4V19.9999"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <router-link
          to="/Add-student"
          class="addstudient sm:text-[10px] mmd:text-[12px] text-[14px] text-[#FFFFFF] py-[9px] w-[100px]"
          >Talaba qo‘shish</router-link
        >
      </span>
    </div>

    <div class="flex gap-[12px] justify-center items-center mb-[250px]">
      <table class="tablee">
        <tr class="mb-[12px]">
          <th
            class="xs:text-[5px] xss:text-[6px] sm:text-[7px] sm:text-center 1100:text-[9px] text-[12px] text-[#B1B1B8] uppercase font-medium"
          >
            #
          </th>
          <th
            class="xs:text-[5px] xss:text-[6px] sm:text-[7px] sm:text-center 1100:text-[9px] text-[12px] text-[#B1B1B8] uppercase font-medium"
          >
            f.i.sh.
          </th>
          <th
            class="xs:text-[5px] xss:text-[6px] sm:text-[7px] sm:text-center 1100:text-[9px] text-[12px] text-[#B1B1B8] uppercase font-medium"
          >
            Talabalik turi
          </th>
          <th
            class="xs:text-[5px] xss:text-[6px] sm:text-[7px] sm:text-center 1100:text-[9px] text-[12px] text-center OTM text-[#B1B1B8] uppercase font-medium"
          >
            OTM
          </th>
          <th
            class="xs:text-[5px] xss:text-[6px] sm:text-[7px] sm:text-center 1100:text-[9px] text-[12px] text-[#B1B1B8] uppercase font-medium"
          >
            Sarflangan summa
          </th>
          <th
            class="xs:text-[5px] xss:text-[6px] sm:text-[7px] sm:text-center 1100:text-[9px] text-[12px] text-[#B1B1B8] uppercase font-medium"
          >
            Kontrakt miqdori
          </th>
          <th
            class="xs:text-[5px] xss:text-[6px] sm:text-[7px] sm:text-center 1100:text-[9px] text-[12px] text-[#B1B1B8] uppercase font-medium"
          >
            Amallar
          </th>
        </tr>

        <tr
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="800"
          v-for="(item, i) in data"
          :key="i"
          class="border-[1px] border-[#2E5BFF14] cursor-pointer pt-[12px] rounded-[10px]"
        >
          <td
            class="xs:text-[6px] xss:text-[7px] mdd:text-[9px] 1100:text-[12px] text-[15px] text-[#1D1D1F]"
          >
            {{ item.id }}
          </td>
          <td
            class="xs:text-[6px] xss:text-[7px] mdd:text-[9px] 1100:text-[12px] text-[15px] text-[#1D1D1F]"
          >
            {{ item.full_name }}
          </td>
          <td
            class="xs:text-[6px] xss:text-[7px] mdd:text-[9px] 1100:text-[11px] text-[14px] text-[#1D1D1F]"
          >
            {{ typeStudy[item.type] }}
          </td>
          <td
            class="xs:text-[6px] xss:text-[7px] mdd:text-[9px] 1100:text-[11px] univer text-[14px] text-[#1D1D1F] w-[200px]"
          >
            {{ item.institute.name }}
          </td>
          <td
            class="xs:text-[6px] xss:text-[7px] mdd:text-[9px] text-[14px] 1100:text-[11px] text-[#1D1D1F]"
          >
            {{ item.contract }} <span class="text-[#B1B1B8]">UZS</span>
          </td>
          <td
            class="xs:text-[6px] xss:text-[7px] mdd:text-[9px] 1100:text-[11px] text-[14px] text-[#1D1D1F]"
          >
            {{ item.given }}<span class="text-[#B1B1B8]">UZS</span>
          </td>
          <router-link :to="`/Talabalar/${item.id}`"
            ><td>
              <svg
                class="md:w-[17px] md:h-[17px]"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M23.855 11.3917C21.5954 6.98292 17.1221 4 12 4C6.87789 4 2.40331 6.985 0.144977 11.3921C0.0496613 11.5806 0 11.7889 0 12.0002C0 12.2115 0.0496613 12.4198 0.144977 12.6083C2.40456 17.0171 6.87789 20 12 20C17.1221 20 21.5966 17.015 23.855 12.6079C23.9503 12.4194 24 12.2111 24 11.9998C24 11.7885 23.9503 11.5802 23.855 11.3917ZM12.0058 18H12C10.4097 17.9992 8.88485 17.3669 7.76077 16.2419C6.63669 15.117 6.00542 13.5917 6.00581 12.0015C6.0062 10.4112 6.6382 8.88618 7.76283 7.76182C8.88746 6.63747 10.4126 6.00583 12.0029 6.00583C13.5932 6.00583 15.1183 6.63747 16.243 7.76182C17.3676 8.88618 17.9996 10.4112 18 12.0015C18.0004 13.5917 17.3691 15.117 16.245 16.2419C15.1209 17.3669 13.5961 17.9992 12.0058 18Z"
                  fill="#3366FF"
                />
                <path
                  d="M15.8608 13.0363C15.7247 13.5433 15.4899 14.0186 15.1698 14.4347C14.8497 14.8509 14.4506 15.1998 13.9955 15.4614C13.5403 15.7231 13.038 15.8924 12.5173 15.9596C11.9966 16.0268 11.4677 15.9906 10.961 15.853C10.4544 15.7155 9.97979 15.4794 9.56452 15.1581C9.14926 14.8368 8.80147 14.4368 8.54107 13.9809C8.28068 13.525 8.11279 13.0222 8.04704 12.5013C7.98129 11.9805 8.01897 11.4517 8.15791 10.9454C8.54194 11.228 9.01453 11.3636 9.48997 11.3277C9.96541 11.2917 10.4122 11.0865 10.7494 10.7494C11.0865 10.4122 11.2917 9.96542 11.3276 9.48998C11.3636 9.01454 11.228 8.54195 10.9454 8.15792C11.6237 7.96431 12.3412 7.95486 13.0243 8.13054C13.7075 8.30621 14.3314 8.66067 14.8321 9.15747C15.3328 9.65426 15.6922 10.2755 15.8732 10.9572C16.0542 11.6389 16.0504 12.3565 15.8621 13.0363H15.8608Z"
                  fill="#3366FF"
                />
              </svg></td
          ></router-link>
        </tr>
      </table>
    </div>
     <div class="flex justify-end items-center pb-[84px] pr-[120px]">
          <el-pagination
            v-model:currentPage="currentPage"
            v-model:page-size="pageSize3"
            :small="small"
            :disabled="disabled"
            :background="background"
            layout="prev, pager, next, jumper"
            :total="total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      total: 0,
      currentPage: 1,
      data: [],
      typeStudy: ["", "Bakalavr", "Magistr", "Phd"],
    };
  },
  mounted() {
    fetch("https://club.metsenat.uz/api/v1/student-list/", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.data = data.results;
        console.log(data, "data");
        this.total = data.count
      })
      .catch((err) => console.log(err.message));
  },
  watch: {
    currentPage(newVal) {
      fetch(`https://club.metsenat.uz/api/v1/student-list/?page=${newVal}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(this.currentPage, '')
        this.data = data.results;
        console.log(data, "data");
      })
      .catch((err) => console.log(err.message));
    }
  }
};
</script>

<style lang="scss" scoped>
td,
th {
  text-align: left;
  padding: 12px 23px;
}
.univer,
.OTM {
  text-align: center;
}

@media only screen and (max-width: 1280px) {
  td,
  th {
    text-align: left;
    padding: 12px 17px;
  }
}
@media only screen and (max-width: 992px) {
  td,
  th {
    text-align: left;
    padding: 10px 10px;
  }
}
@media only screen and (max-width: 576px) {
  td,
  th {
    text-align: left;
    padding: 10px 6px;
  }
}
@media only screen and (max-width: 532px) {
  td,
  th {
    text-align: left;
    padding: 7px 6px;
  }
}
</style>
