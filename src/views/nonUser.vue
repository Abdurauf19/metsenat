<template>
  <div class="container-user grid grid-cols-2 lg:grid-cols-1">
    <!-- Form -->
    <div class="user z-20">
      <form
        v-if="step === 1"
        class="user-Form pt-[76px] bg-[#FFF] pr-[100px] xl:pr-[50px] pl-[50px] flex flex-col items-center justify-center"
      >
        <h2
          class="xs:text-[29px] text-[40px] text-[#1D1D1F] leading-[56px] font-bold pb-[40px]"
        >
          Homiy sifatida ariza topshirish
        </h2>
        <div class="flex">
          <div
            class="flex items-center justify-center border-[#E0E7FF]"
            v-for="(item, i) in btns"
            :key="i"
          >
            <a
              href="#"
              :class="{ activee: btnIndex === i }"
              @click="btnIndex = i"
              class="xss:py-[11px] xss:text-[11px] xss:px-[58px] py-[14px] text-center px-[98px] font-medium text-[12px] leading-[12px] text-[#3366FF99]"
            >
              {{ item.text }}
            </a>
          </div>
        </div>

        <div>
          <div class="flex flex-col pt-[28px]">
            <label
              class="text-[14px] xss:text-[12px] text-[#1D1D1F] leading-[14px] font-medium uppercase pb-[8px]"
              for="name"
              >F.I.Sh. (Familiya Ism Sharifingiz)</label
            >
            <input
              class="bg-[#E0E7FF33] xs:w-[361px] xss:w-[461px] xll:w-[500px] xl:w-[520px] w-[594px] text-[15px] text-[#2E384D59] leading-[18px] py-[12px] pl-[16px] border-[1px] border-[#E0E7FF33] rounded-[6px]"
              type="text"
              id="name"
              placeholder="Abdullayev Abdulla Abdulla o'g'li"
              required
              v-model="userName"
            />
          </div>

          <div class="flex flex-col pt-[28px]">
            <label
              class="text-[14px] xss:text-[12px] text-[#1D1D1F] leading-[14px] font-medium uppercase pb-[8px]"
              for="number"
              >Telefon raqamingiz</label
            >
            <input
              class="mb-[28px] bg-[#E0E7FF33] xs:w-[361px] xss:w-[461px] xll:w-[500px] xl:w-[520px] w-[594px] text-[15px] text-[#2E384D59] leading-[18px] py-[12px] pl-[16px] border-[1px] border-[#E0E7FF33] rounded-[6px]"
              type="text"
              id="number"
              placeholder="998 00 000-00-00"
              required
              v-model="userNumber"
            />
          </div>

          <label class="text-[14px] xss:text-[12px] text-[#1D1D1F] font-medium uppercase"
            >To'lov summasi</label
          >
          <div class="grid grid-cols-3 xll:grid-cols-2 lg:grid-cols-3 xss:grid-cols-2 gap-[16px] pt-[12px]">
            <label
              v-for="(item, index) in summs"
              :key="index"
              class="cursor-pointer  radio  xl:w-[150px] w-[179px] border-[2px] border-[#E0E7FF] rounded-[5px] bg-[#F9FAFF]"
              :class="{ galochka: currentSum === index }"
              @click="currentSum = index"
            >
              <div class="click">
                <span class="flex items-center justify-center py-[20px]">
                  <p
                    class="text-[#2E384D] text-[15px] leading-[21px] uppercase"
                  >
                    {{ item.title }}
                  </p>
                  <p class="text-[12px] text-[#2E5BFF] pl-[4px] uppercase">
                    {{ item.text }}
                  </p>
                </span>
              </div>
            </label>
            <Transition>
              <input
                v-if="currentSum === 5"
                class=" xs:w-[361px] xss:w-[461px] xll:w-[500px] xl:w-[520px] w-[594px] text-[#000000] text-[15px] border-[1px] border-[#E0E7FF] py-[12px] pl-[16px] rounded-[6px]"
                type="number"
                placeholder="0"
                v-model="userSum"
              />
            </Transition>
          </div>
          <div class="mt-[28px] flex flex-col" v-if="btnIndex === 1">
            <label
              class=" xss:text-[12px]text-[14px] text-[#1D1D1F] font-medium uppercase"
              for="tashkilot"
              >Tashkilot nomi</label
            >
            <input
              v-model="userCompany"
              class=" xs:w-[361px] xll:w-[100%] xl:w-[520px]  w-[594px] mt-[8px] py-[12px] pl-[16px] text-[#000000] text-[15px] border-[1px] border-[#E0E7FF] rounded-[6px]"
              type="text"
              id="tashlilot"
              placeholder="Orient group"
            />
          </div>
          <button
            @click="step = 2"
            type="Submit"
            aria-required="form"
            class="bg-[#2E5BFF] mt-[28px] rounded-[6px] text-[#FFFFFF] text-[15px] py-[14px] xs:w-[361px] xss:w-[461px] xll:w-[500px] xl:w-[520px] w-[594px]"
          >
            Yuborish
          </button>
        </div>
      </form>
      <!-- page send -->
      <div
        class="flex flex-col items-center justify-center pt-[64px]"
        v-if="step === 2"
      >
        <div class="">
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M53.46 0.362116C66.9123 -1.14504 80.8486 2.0875 92.2418 9.40506C104.099 16.9408 113.18 28.7594 117.299 42.2079C121.124 54.4152 120.871 67.8296 116.624 79.8936C112.24 92.5169 103.437 103.51 92.1736 110.678C73.2259 123.015 47.2555 123.117 28.2191 110.923C16.4509 103.599 7.34182 92.0737 3.03955 78.8843C-0.778634 67.4136 -1.01046 54.7903 2.40545 43.1968C6.46909 29.0186 16.0555 16.5385 28.635 8.85948C36.135 4.21526 44.6986 1.33734 53.46 0.362116ZM54.1077 5.78379C35.4054 7.64557 18.2373 19.9893 10.4918 37.1136C4.56682 49.8051 3.83045 64.8152 8.50772 78.025C12.0805 88.3296 18.8509 97.4885 27.6464 103.94C36.9191 110.821 48.4418 114.592 59.9918 114.579C71.0373 114.592 82.0691 111.155 91.1236 104.813C100.499 98.3342 107.733 88.8207 111.476 78.0523C115.683 66.1724 115.553 52.8194 111.121 41.0213C106.519 28.4593 97.0691 17.7729 85.1918 11.6283C75.7077 6.67717 64.7441 4.60398 54.1077 5.78379Z"
              fill="#E8F3DD"
            />
            <path
              d="M89.9984 37.5364C92.4189 34.8017 97.4712 39.8346 94.7575 42.2829C81.0666 56.086 67.2598 69.7936 53.5348 83.5695C52.0825 85.0834 49.1439 85.6972 47.6984 83.8968C41.3439 77.534 35.0098 71.1508 28.6143 64.8357C27.7143 63.8946 26.4325 62.8853 26.9371 61.4054C27.5439 59.3663 30.4825 56.993 32.378 59.0048C38.4393 64.9721 44.3984 71.0485 50.4462 77.0294C63.6598 63.8946 76.7643 50.6507 89.9984 37.5364Z"
              fill="#B2DA8F"
            />
          </svg>
        </div>
        <h2 class="text-[#2E384D] text-[15px] font-medium pt-[32px] pb-[8px]">
          Ma'lumotlar tekshirish uchun yuborildi.
        </h2>
        <p class="w-[301px] text-[12px] text-[#B2B7C1] text-center">
          Tez orada siz bilan operatorimiz bog'lanib, barcha ma'lumotlarni
          aniqlashtiradi.
        </p>
      </div>
    </div>

    <!-- Content -->
    <div class="bg-[#F5F5F7] flex flex-col  justify-between lg:mt-[100px]">
      <div class="content pt-[62px] xs:pl-[30px] pl-[72px]">
        <div>
          <svg
            class="svg-v absolute translate-x-[-16px] translate-y-[-8px]"
            width="63"
            height="41"
            viewBox="0 0 63 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.8283 26.8169C34.8283 23.8769 35.066 21.2151 35.5415 18.8314C36.0962 16.4477 36.8887 14.2229 37.9189 12.157C39.0283 10.0911 40.3755 8.06492 41.9604 6.07849C43.5453 4.09205 45.3679 2.06589 47.4283 0L56.2245 4.17151C55.5906 4.80717 54.9962 5.56202 54.4415 6.43605C53.966 7.15116 53.4509 8.06492 52.8962 9.17733C52.3415 10.2897 51.8264 11.5213 51.3509 12.8721C54.6792 13.5078 57.4528 15.1366 59.6717 17.7587C61.8906 20.3808 63 23.4002 63 26.8169C63 28.8033 62.6038 30.6705 61.8113 32.4186C61.0981 34.0872 60.1075 35.5572 58.8396 36.8285C57.5717 38.0998 56.066 39.1328 54.3226 39.9273C52.6585 40.6424 50.8358 41 48.8547 41C46.9528 41 45.1302 40.6424 43.3868 39.9273C41.7226 39.1328 40.2566 38.0998 38.9887 36.8285C37.7208 35.5572 36.6906 34.0872 35.8981 32.4186C35.1849 30.6705 34.8283 28.8033 34.8283 26.8169ZM0 25.625C0.0792453 22.9234 0.396226 20.4603 0.950943 18.2355C1.50566 15.9312 2.29811 13.7859 3.3283 11.7994C4.43774 9.73353 5.74528 7.78682 7.25094 5.9593C8.83585 4.05233 10.6189 2.06589 12.6 0L21.3962 4.17151C20.7623 4.80717 20.1679 5.56202 19.6132 6.43605C19.1377 7.15116 18.6226 8.06492 18.0679 9.17733C17.5132 10.2897 16.9981 11.5213 16.5226 12.8721C19.8509 13.5078 22.6245 15.1366 24.8434 17.7587C27.0623 20.3808 28.1717 23.4002 28.1717 26.8169C28.1717 28.8033 27.7755 30.6705 26.983 32.4186C26.2698 34.0872 25.2792 35.5572 24.0113 36.8285C22.7434 38.0998 21.2377 39.1328 19.4943 39.9273C17.8302 40.6424 16.0075 41 14.0264 41C12.1245 41 10.3019 40.6424 8.55849 39.9273C6.89434 39.1328 5.4283 38.0601 4.16038 36.7093C2.89245 35.3585 1.86226 33.7694 1.06981 31.9419C0.356604 30.0349 0 27.9293 0 25.625Z"
              fill="#EAEAEA"
            />
          </svg>
          <h2
            class="sh-text xss:w-[325px] smm:w-[386px] smm:text-[18px] xl:w-[430px] w-[490px] z-10 text-justify font-medium relative text-[20px] leading-[30px] text-[#28293D]"
          >
            Yuqori sinflarda bolalar shaxs b'lib, jamoa bo'lib shakllanadi. Ayni
            o'sha paytda ularni o'zlari o'rgangan muhitdan ajratib qo'ymaslik
            kerak.
          </h2>
          <svg
            class="svg-vv absolute translate-x-[450px] translate-y-[-53px]"
            width="63"
            height="41"
            viewBox="0 0 63 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.1717 14.1831C28.1717 17.1231 27.934 19.7849 27.4585 22.1686C26.9038 24.5523 26.1113 26.7771 25.0811 28.843C23.9717 30.9089 22.6245 32.9351 21.0396 34.9215C19.4547 36.9079 17.6321 38.9341 15.5717 41L6.77547 36.8285C7.40944 36.1928 8.00377 35.438 8.55849 34.564C9.03396 33.8488 9.54906 32.9351 10.1038 31.8227C10.6585 30.7103 11.1736 29.4787 11.6491 28.1279C8.32076 27.4922 5.54717 25.8634 3.3283 23.2413C1.10944 20.6192 0 17.5998 0 14.1831C0 12.1967 0.396229 10.3295 1.18868 8.58139C1.90189 6.91279 2.89245 5.44283 4.16038 4.17151C5.4283 2.90019 6.93396 1.86725 8.67736 1.07267C10.3415 0.357559 12.1642 0 14.1453 0C16.0472 0 17.8698 0.357559 19.6132 1.07267C21.2774 1.86725 22.7434 2.90019 24.0113 4.17151C25.2792 5.44283 26.3094 6.91279 27.1019 8.58139C27.8151 10.3295 28.1717 12.1967 28.1717 14.1831ZM63 15.375C62.9208 18.0766 62.6038 20.5397 62.0491 22.7645C61.4943 25.0688 60.7019 27.2141 59.6717 29.2006C58.5623 31.2665 57.2547 33.2132 55.7491 35.0407C54.1642 36.9477 52.3811 38.9341 50.4 41L41.6038 36.8285C42.2377 36.1928 42.8321 35.438 43.3868 34.564C43.8623 33.8488 44.3774 32.9351 44.9321 31.8227C45.4868 30.7103 46.0019 29.4787 46.4774 28.1279C43.1491 27.4922 40.3755 25.8634 38.1566 23.2413C35.9377 20.6192 34.8283 17.5998 34.8283 14.1831C34.8283 12.1967 35.2245 10.3295 36.017 8.58139C36.7302 6.91279 37.7208 5.44283 38.9887 4.17151C40.2566 2.90019 41.7623 1.86725 43.5057 1.07267C45.1698 0.357559 46.9925 0 48.9736 0C50.8755 0 52.6981 0.357559 54.4415 1.07267C56.1057 1.86725 57.5717 2.93992 58.8396 4.2907C60.1075 5.64147 61.1377 7.23062 61.9302 9.05814C62.6434 10.9651 63 13.0707 63 15.375Z"
              fill="#EAEAEA"
            />
          </svg>
        </div>

        <div class="flex pt-[48px]">
          <img
            class="w-[55px] h-[55px]"
            src="../assets/photos/shMirziyoyev.png"
            alt="Mirziyoyev"
          />
          <div class="">
            <h3>Shavkat Mirziyoyev</h3>
            <p>O'zbekiston Respublikasi Prezidenti</p>
          </div>
        </div>
      </div>
      <img src="../assets/photos/banner.png" alt="banner" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      tab: true,
      currentSum: "",
      btnIndex: 0,
      // Form value
      userName: "",
      userNumber: "",
      userSum: "",
      userCompany: "",

      summs: [
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
          title: "boshqa",
        },
      ],
      btns: [
        {
          text: "Jismoniy shaxs",
        },
        {
          text: "Yuridik shaxs",
        },
      ],
    };
  },
};
</script>
