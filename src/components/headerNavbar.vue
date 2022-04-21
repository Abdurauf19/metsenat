<template>
  <div v-if="$route.path === 'register' ? ShowNavBar = false : ShowNavBar= true" class="py-[24px]">
    <div class="headerNavbar flex items-center justify-around bg-[#FFFFFF]">
      <!-- Links -->
      <div class="navbar-btns flex justify-between items-center   rounded-[6px] ">
        <router-link
          v-for="(item, index) in links"
          :key="index"
          :class="{homeactive:btnIndex === index}"
          @click="btnIndex = index"
          class="xs:text-[8px]  text-[12px]  flex items-center justify-center text-[#3366FF99] border-[2px] border-[#E0E7FF] rounded-[6px] uppercase mmd:py-[8px] py-[14px] xs:-[] xs:w-[80px] sm:w-[120px] md:w-[129px] lg:w-[150px] w-[193px]"
          :to="item.path"
          >{{ item.link }}</router-link
        >
      </div>
      <div class="flex">
        <!-- Search -->
        <div class="flex mmd:hidden">
          <svg
            class="absolute mt-[13px] ml-[13px]"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.33333 14.1667C11.555 14.1667 14.1667 11.555 14.1667 8.33333C14.1667 5.11167 11.555 2.5 8.33333 2.5C5.11167 2.5 2.5 5.11167 2.5 8.33333C2.5 11.555 5.11167 14.1667 8.33333 14.1667Z"
              stroke="#B1B1B8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.5 17.5L12.5 12.5"
              stroke="#B1B1B8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <input
            class=" w-[284px] lg:w-[199px]  pl-[38px] rounded-[5px] bg-[#E8E8E8] outline-none text-[#B1B1B8] text-[18px] leading-[18px] mmd:py-[8px]  py-[11px]"
            type="search"
            placeholder="Izlash"
          />
        </div>
        <!-- Filter -->
        <Transition name="fade" appear>
          <span
            @click="on"
            class="flex items-center justify-center rounded-[5px] bg-[#EDF1FD] ml-[20px] xs:w-[90px] w-[123px] cursor-pointer"
            ><svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6668 0.333336H2.3335C1.80306 0.333336 1.29436 0.54405 0.919283 0.919122C0.54421 1.2942 0.333496 1.8029 0.333496 2.33334V3.11334C0.333401 3.38863 0.39014 3.66098 0.500163 3.91334V3.95334C0.594349 4.16732 0.727758 4.36178 0.893496 4.52667L5.00016 8.60667V13C4.99994 13.1133 5.02859 13.2248 5.08341 13.3239C5.13823 13.4231 5.21742 13.5066 5.3135 13.5667C5.41959 13.6324 5.54201 13.6671 5.66683 13.6667C5.77119 13.666 5.87395 13.6409 5.96683 13.5933L8.6335 12.26C8.74344 12.2046 8.83589 12.1198 8.90061 12.0151C8.96533 11.9104 8.99979 11.7898 9.00016 11.6667V8.60667L13.0802 4.52667C13.2459 4.36178 13.3793 4.16732 13.4735 3.95334V3.91334C13.5927 3.66296 13.6585 3.39052 13.6668 3.11334V2.33334C13.6668 1.8029 13.4561 1.2942 13.081 0.919122C12.706 0.54405 12.1973 0.333336 11.6668 0.333336ZM7.86016 7.86C7.79838 7.9223 7.74949 7.99617 7.71632 8.0774C7.68314 8.15862 7.66632 8.2456 7.66683 8.33334V11.2533L6.3335 11.92V8.33334C6.334 8.2456 6.31719 8.15862 6.28401 8.0774C6.25083 7.99617 6.20195 7.9223 6.14016 7.86L2.60683 4.33334H11.3935L7.86016 7.86ZM12.3335 3H1.66683V2.33334C1.66683 2.15652 1.73707 1.98696 1.86209 1.86193C1.98712 1.73691 2.15669 1.66667 2.3335 1.66667H11.6668C11.8436 1.66667 12.0132 1.73691 12.1382 1.86193C12.2633 1.98696 12.3335 2.15652 12.3335 2.33334V3Z"
                fill="#3365FC"
              />
            </svg>
            <a
              href="#"
              
              class="filter text-[#3365FC] text-[14px] py-[8px] pl-[11px] pr-[]"
            >
              Filter</a
            ></span
          >
          <!-- Modal -->
        </Transition>
      </div>
    </div>
  </div>
  <div
    class="modal-overlay bg-[#00000080]   items-center justify-center"
  >
   <Transition>
    <div class="sm:w-[490px] smm:w-[450px] xss:w-[365px] w-[586px] py-[28px] px-[28px] bg-[#FFF] rounded-[12px]">
      <div class="flex justify-between">
        <h3
          class="modal-title text-[24px] text-[#28293D] font-medium pb-[28px]"
        >
          Filter
        </h3>
        <svg
         @click="off"
          class="cursor-pointer"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 7L7 21"
            stroke="#B2B7C1"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7 7L21 21"
            stroke="#B2B7C1"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <hr />
      <form action="" class="flex flex-col justify-center">
        <label
          for="section"
          class="pt-[28px] pb-[8px] text-[12px] text-[#1D1D1F] font-medium leading-[14px] uppercase"
          >Ariza holati</label
        >
        <select
          name=""
          id="section"
          class="sm:w-[407px] smm:w-[334px] xs:w-[332px] w-[530px]  py-[12px] pl-[16px] bg-[#E0E7FF33] text-[15px] text-[#2E384D] rounded-[6px]"
        >
          <option class="" value="1">Barchasi</option>
          <hr>
          <option class="" value="1">Yangi</option>
          <hr>
          <option class="" value="1">Moderatsiyada</option>
          <hr>
          <option class="" value="1">Tasdiqlangan</option>
          <hr>
          <option class="" value="1">Bekor qilingan</option>
        </select>
        <label
          for=""
          class="text-[12px] text-[#1D1D1F] font-medium leading-[14px] pt-[28px] pb-[16px] uppercase"
          >Homiylik summasi</label
        >
        <div class="grid grid-cols-4 sm:grid-cols-3 xss:grid-cols-2 gap-[16px] pt-[12px]">
          <label
            v-for="(item, index) in summs"
            :key="index"
            class="cursor-pointer radio w-[124px] border-[2px] border-[#E0E7FF] rounded-[5px] bg-[#F9FAFF]"
            :class="{ modalactive: currentSum === index }"
            @click="currentSum = index"
          >
            <div class="click">
              <span class="flex items-center justify-center py-[16px]">
                <p class="text-[#2E384D] text-[15px] leading-[21px] uppercase">
                  {{ item.title }}
                </p>
                <p class="text-[12px] text-[#2E5BFF] pl-[4px] uppercase">
                  {{ item.text }}
                </p>
              </span>
            </div>
          </label>
        </div>

        <label for="data" class="pt-[28px] pb-[8px]">Sana</label>
        <input
          class="  text-[#2E384D59] py-[12px] pl-[16px] mb-[28px] w-[253px]"
          type="date"
          id="data"
          placeholder="kk.oo.yyyy - kk.oo.yyyy"
        />
        <hr />
        <div class="flex">
          <button
            type="reset"
            href="#"
            class="flex items-center justify-center rounded-[5px] mr-[16px] text-[14px] text-[#B2B7C1] w-[149px] py-[9px] border-[1px] border-[#B2B7C1] mt-[28px]"
          >
            <svg
              class="pr-[6px]"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.6449 9.00468C17.387 8.88994 14.972 7.8149 14.7132 7.70016C13.4988 7.15956 12.0765 7.70632 11.5366 8.91997L18.8647 12.1813C19.4053 10.9669 18.8586 9.54451 17.6449 9.00468ZM19.4161 1.07743C19.0111 0.897227 18.5806 0.943432 18.4489 1.19063L14.9403 7.8011L17.3076 8.85381L19.9798 1.87138C20.0753 1.60802 19.8212 1.25763 19.4161 1.07743Z"
                stroke="#B2B7C1"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.6772 13.2178C16.1732 17.7967 14.2264 20.167 14.2264 20.167C14.2264 20.167 7.52132 19.9237 3.17188 14.5546C4.06979 14.6186 9.66754 14.1373 11.5958 10.4185"
                stroke="#B2B7C1"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.77051 17.0255C5.77051 17.0255 7.89439 16.7455 9.03412 15.5549C8.12233 17.2268 7.03653 17.861 7.03653 17.861L5.77051 17.0255ZM8.76457 18.6996C8.76457 18.6996 10.4349 18.7184 13.2765 16.1009C12.2546 18.4312 10.922 19.5622 10.922 19.5622L8.76457 18.6996Z"
                stroke="#B2B7C1"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.20337 8.04437C1.27136 8.0162 1.34423 8.00171 1.41782 8.00171C1.49142 8.00171 1.56429 8.0162 1.63228 8.04437C1.70027 8.07253 1.76205 8.11381 1.81409 8.16585C1.86612 8.21788 1.9074 8.27966 1.93557 8.34765C1.96373 8.41564 1.97822 8.48852 1.97822 8.56211C1.97822 8.6357 1.96373 8.70858 1.93557 8.77657C1.9074 8.84456 1.86612 8.90634 1.81409 8.95837C1.76205 9.01041 1.70027 9.05169 1.63228 9.07985C1.56429 9.10802 1.49142 9.12251 1.41782 9.12251C1.34423 9.12251 1.27136 9.10802 1.20337 9.07985C1.13538 9.05169 1.0736 9.01041 1.02156 8.95837C0.969521 8.90634 0.928243 8.84456 0.90008 8.77657C0.871917 8.70858 0.857422 8.6357 0.857422 8.56211C0.857422 8.48852 0.871917 8.41564 0.90008 8.34765C0.928243 8.27966 0.969521 8.21788 1.02156 8.16585C1.0736 8.11381 1.13538 8.07253 1.20337 8.04437Z"
                fill="#B2B7C1"
              />
              <path
                d="M2.83485 8.48473C2.90491 8.41467 2.99994 8.37531 3.09903 8.37531C3.19811 8.37531 3.29314 8.41467 3.3632 8.48473C3.43327 8.5548 3.47263 8.64983 3.47263 8.74891C3.47263 8.848 3.43327 8.94302 3.3632 9.01309C3.29314 9.08315 3.19811 9.12251 3.09903 9.12251C2.99994 9.12251 2.90491 9.08315 2.83485 9.01309C2.76479 8.94302 2.72543 8.848 2.72543 8.74891C2.72543 8.64983 2.76479 8.5548 2.83485 8.48473Z"
                fill="#B2B7C1"
              />
              <path
                d="M2.25179 10.1433C2.42695 9.96812 2.66451 9.86971 2.91223 9.86971C3.15994 9.86971 3.39751 9.96812 3.57266 10.1433C3.74782 10.3184 3.84623 10.556 3.84623 10.8037C3.84623 11.0514 3.74782 11.289 3.57266 11.4642C3.39751 11.6393 3.15994 11.7377 2.91223 11.7377C2.66451 11.7377 2.42695 11.6393 2.25179 11.4642C2.07663 11.289 1.97822 11.0514 1.97822 10.8037C1.97822 10.556 2.07663 10.3184 2.25179 10.1433Z"
                fill="#B2B7C1"
              />
            </svg>
            Tozalash
          </button>

          <button
            href="#"
            class="modal-btn flex mt-[28px] text-[14px] text-[#FFFFFF] py-[9px] w-[209px] bg-[#3366FF]"
          >
            <svg
              class="pr-[6px]"
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 9.00002C1 9.00002 4.63636 1.72729 11 1.72729C17.3636 1.72729 21 9.00002 21 9.00002C21 9.00002 17.3636 16.2727 11 16.2727C4.63636 16.2727 1 9.00002 1 9.00002Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.9997 11.7273C12.506 11.7273 13.727 10.5063 13.727 9.00004C13.727 7.49381 12.506 6.27277 10.9997 6.27277C9.4935 6.27277 8.27246 7.49381 8.27246 9.00004C8.27246 10.5063 9.4935 11.7273 10.9997 11.7273Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Natijalarni ko‘rish
          </button>
        </div>
      </form>
    </div>
   </Transition>
  </div>
  
</template>

<script>
import navModal from "../components/modal.vue";
export default {
  data() {
    return {
      component: {
        navModal,
      },
      ShowNavBar: '',
      currentSum: "",
      btnIndex: 0,
      links: [
        {
          link: "Dashboard",
          path: "/Dashboard",
        },
        {
          link: "Homiylar",
          path: "/Homiylar",
        },
        {
          link: "Talabalar",
          path: "/Talabalar",
        },
      ],
      summs: [
        {
          title: "Barchasi",
        },
        {
          title: "1 000 000",
          text: "uzs",
        },
        {
          title: "5 000 000",
          text: "uzs",
        },
        {
          title: "7 000 000",
          text: "uzs",
        },
        {
          title: "10 000 000",
          text: "uzs",
        },
        {
          title: "30 000 000",
          text: "uzs",
        },
        {
          title: "50 000 000",
          text: "uzs",
        },
      ],
    };
  },

  methods: {
   on() {
  document.querySelector(".modal-overlay").style.display = "flex";
},
 off() {
  document.querySelector(".modal-overlay").style.display = "none";
}
  },
};
</script>

<style lang="scss">
  
  .modal-overlay {
     display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
   
  }
</style>
