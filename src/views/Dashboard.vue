<template>
  <div class="dashboard bg-[#E5E5E5] h-[120vh] md:h-[155vh]">
    <!-- cards -->
    <div
      class="dashboard-cards lg:flex-wrap pt-[48px] gap-[28px] flex items-center justify-center"
    >
      <!-- Cards -->
      <div
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1500"
        class="dashboard-card flex items-center gap-[16px] xs:w-[330px] w-[381px] rounded-[8px] bg-[#FFFFFF] py-[24px] px-[24px] border-[#2E5BFF14] border-[1px]"
      >
        <a href="#" class="dashboard-card__icon bg-[#4C6FFF1A] rounded-[12px]"
          ><svg
            class="my-[14px] mx-[10px]"
            width="28"
            height="20"
            viewBox="0 0 28 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.9997 5.82418C12.0669 5.82418 10.4998 7.71239 10.4998 10.042C10.4998 12.3712 12.0665 14.2599 13.9997 14.2599C15.9321 14.2599 17.4997 12.3721 17.4997 10.042C17.4997 7.71239 15.9326 5.82418 13.9997 5.82418ZM27.1752 1.18283C25.4782 0.471033 23.7798 0.200226 22.0824 0.200226C16.6938 0.199788 11.3057 2.92755 5.91707 2.92755C4.56566 2.92755 3.21512 2.75605 1.86371 2.32731C1.7119 2.27919 1.55966 2.25644 1.41091 2.25644C0.657987 2.25644 0 2.83917 0 3.6481V17.528C0 18.0805 0.316306 18.6042 0.824234 18.8168C2.52126 19.529 4.2196 19.7998 5.91707 19.7998C11.3057 19.7998 16.6942 17.0721 22.0828 17.0721C23.4342 17.0721 24.7848 17.2436 26.1362 17.6723C26.288 17.7204 26.4402 17.7432 26.589 17.7432C27.3419 17.7432 27.9999 17.1605 27.9999 16.3515V2.47212C27.9995 1.91913 27.6831 1.39589 27.1752 1.18283ZM25.8995 12.8897C24.7231 13.0384 23.7742 13.9095 23.5204 15.0544C23.0479 15.0141 22.5772 14.9721 22.0824 14.9721C19.1267 14.9721 16.2581 15.6979 13.4844 16.4001C10.8437 17.0686 8.34952 17.6999 5.91707 17.6999C5.5662 17.6999 5.22365 17.6859 4.88853 17.6588C4.82641 16.1612 3.60712 14.9634 2.1004 14.9634V7.23028C3.45968 7.23028 4.59104 6.25686 4.84522 4.96626C5.20134 4.98857 5.5487 5.02751 5.91751 5.02751C8.8732 5.02751 11.7414 4.30171 14.5151 3.59953C17.1554 2.93148 19.6495 2.30018 22.0824 2.30018C22.5566 2.30018 23.0107 2.33431 23.457 2.38375C23.4942 3.78197 24.545 4.9142 25.8995 5.08569V12.8897Z"
              fill="#4C6FFF"
            />
          </svg>
        </a>
        <!-- Cards content -->
        <div class="dashboard-card__content">
          <h2
            class="dashboard-card__title text-[12px] text-[#7A7A9D] leading-[12px] pb-[6px]"
          >
            Jami to‘langan summa
          </h2>
          <span
            class="flex items-center text-[#B2B7C1] font-medium text-[20px]"
          >
            <h3 class="font-bold text-[20px] text-[#2E384D] pr-[6px]">
              {{ data?.total_income }}
            </h3>
            <h3>UZS</h3>
          </span>
        </div>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1500"
        class="dashboard-card flex items-center gap-[16px] xs:w-[330px] w-[381px] rounded-[8px] bg-[#FFFFFF] py-[24px] px-[24px] border-[#2E5BFF14] border-[1px]"
      >
        <a href="#" class="dashboard-card__icon bg-[#EDC7001A] rounded-[12px]"
          ><svg
          class="my-[14px] mx-[10px]"
            width="28"
            height="20"
            viewBox="0 0 28 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.9997 5.82418C12.0669 5.82418 10.4998 7.71239 10.4998 10.042C10.4998 12.3712 12.0665 14.2599 13.9997 14.2599C15.9321 14.2599 17.4997 12.3721 17.4997 10.042C17.4997 7.71239 15.9326 5.82418 13.9997 5.82418ZM27.1752 1.18283C25.4782 0.471033 23.7798 0.200226 22.0824 0.200226C16.6938 0.199788 11.3057 2.92755 5.91707 2.92755C4.56566 2.92755 3.21512 2.75605 1.86371 2.32731C1.7119 2.27919 1.55966 2.25644 1.41091 2.25644C0.657987 2.25644 0 2.83917 0 3.6481V17.528C0 18.0805 0.316306 18.6042 0.824234 18.8168C2.52126 19.529 4.2196 19.7998 5.91707 19.7998C11.3057 19.7998 16.6942 17.0721 22.0828 17.0721C23.4342 17.0721 24.7848 17.2436 26.1362 17.6723C26.288 17.7204 26.4402 17.7432 26.589 17.7432C27.3419 17.7432 27.9999 17.1605 27.9999 16.3515V2.47212C27.9995 1.91913 27.6831 1.39589 27.1752 1.18283ZM25.8995 12.8897C24.7231 13.0384 23.7742 13.9095 23.5204 15.0544C23.0479 15.0141 22.5772 14.9721 22.0824 14.9721C19.1267 14.9721 16.2581 15.6979 13.4844 16.4001C10.8437 17.0686 8.34952 17.6999 5.91707 17.6999C5.5662 17.6999 5.22365 17.6859 4.88853 17.6588C4.82641 16.1612 3.60712 14.9634 2.1004 14.9634V7.23028C3.45968 7.23028 4.59104 6.25686 4.84522 4.96626C5.20134 4.98857 5.5487 5.02751 5.91751 5.02751C8.8732 5.02751 11.7414 4.30171 14.5151 3.59953C17.1554 2.93148 19.6495 2.30018 22.0824 2.30018C22.5566 2.30018 23.0107 2.33431 23.457 2.38375C23.4942 3.78197 24.545 4.9142 25.8995 5.08569V12.8897Z"
              fill="#EDC700"
            />
          </svg>
        </a>
        <!-- Cards content -->
        <div class="dashboard-card__content">
          <h2
            class="dashboard-card__title text-[12px] text-[#7A7A9D] leading-[12px] pb-[6px]"
          >
            Jami so'ralgan summa
          </h2>
          <span
            class="flex items-center text-[#B2B7C1] font-medium text-[20px]"
          >
            <h3 class="font-bold text-[20px] text-[#2E384D] pr-[6px]">
              {{ data?.total_need }}
            </h3>
            <h3>UZS</h3>
          </span>
        </div>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1500"
        class="dashboard-card flex items-center gap-[16px] xs:w-[330px] w-[381px] rounded-[8px] bg-[#FFFFFF] py-[24px] px-[24px] border-[#2E5BFF14] border-[1px]"
      >
        <a href="#" class="dashboard-card__icon rounded-[12px] bg-[#ED72001A]">
          <svg class="my-[14px] mx-[10px]"
            width="28"
            height="20"
            viewBox="0 0 28 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.9997 5.82418C12.0669 5.82418 10.4998 7.71239 10.4998 10.042C10.4998 12.3712 12.0665 14.2599 13.9997 14.2599C15.9321 14.2599 17.4997 12.3721 17.4997 10.042C17.4997 7.71239 15.9326 5.82418 13.9997 5.82418ZM27.1752 1.18283C25.4782 0.471033 23.7798 0.200226 22.0824 0.200226C16.6938 0.199788 11.3057 2.92755 5.91707 2.92755C4.56566 2.92755 3.21512 2.75605 1.86371 2.32731C1.7119 2.27919 1.55966 2.25644 1.41091 2.25644C0.657987 2.25644 0 2.83917 0 3.6481V17.528C0 18.0805 0.316306 18.6042 0.824234 18.8168C2.52126 19.529 4.2196 19.7998 5.91707 19.7998C11.3057 19.7998 16.6942 17.0721 22.0828 17.0721C23.4342 17.0721 24.7848 17.2436 26.1362 17.6723C26.288 17.7204 26.4402 17.7432 26.589 17.7432C27.3419 17.7432 27.9999 17.1605 27.9999 16.3515V2.47212C27.9995 1.91913 27.6831 1.39589 27.1752 1.18283ZM25.8995 12.8897C24.7231 13.0384 23.7742 13.9095 23.5204 15.0544C23.0479 15.0141 22.5772 14.9721 22.0824 14.9721C19.1267 14.9721 16.2581 15.6979 13.4844 16.4001C10.8437 17.0686 8.34952 17.6999 5.91707 17.6999C5.5662 17.6999 5.22365 17.6859 4.88853 17.6588C4.82641 16.1612 3.60712 14.9634 2.1004 14.9634V7.23028C3.45968 7.23028 4.59104 6.25686 4.84522 4.96626C5.20134 4.98857 5.5487 5.02751 5.91751 5.02751C8.8732 5.02751 11.7414 4.30171 14.5151 3.59953C17.1554 2.93148 19.6495 2.30018 22.0824 2.30018C22.5566 2.30018 23.0107 2.33431 23.457 2.38375C23.4942 3.78197 24.545 4.9142 25.8995 5.08569V12.8897Z"
              fill="#ED7200"
            />
          </svg>
        </a>
        <!-- Cards content -->
        <div class="dashboard-card__content">
          <h2
            class="dashboard-card__title text-[12px] text-[#7A7A9D] leading-[12px] pb-[6px]"
          >
            To‘lanishi kerak summa
          </h2>
          <span
            class="flex items-center text-[#B2B7C1] font-medium text-[20px]"
          >
            <h3 class="font-bold text-[20px] text-[#2E384D] pr-[6px]">
              {{ data?.other }}
            </h3>
            <h3>UZS</h3>
          </span>
        </div>
      </div>
    </div>
    <!-- Sponsor -->
    <div class="px-[54px]">
      <div class="flex items-center pt-[28px]">
        <div class="Homiylar flex flex-col">
          <div class="homiylar-content">
            <h2
              class="xs:text-[22px] xs:text-center text-[24px] text-[#2E384D] leading-[28px] font-medium pt-[24px] pl-[24px] pb-[8px]"
            >
              Homiylar va talabalar soni
            </h2>
            <span class="flex gap-[36px] pl-[34px]">
              <p
                class="homiylar-content__text text-[12px] text-[#7A7A9D] leading-[12px]"
              >
                Homiylar
              </p>
              <p
                class="homiylar-content__text2 text-[12px] text-[#7A7A9D] leading-[12px]"
              >
                Talabalar
              </p>
            </span>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center pt-[30px]">
        <img
          class="w-100[%]"
          src="../assets/photos/dashboard.png"
          alt="Dashboard"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['auth'],
  data() {
    return {
      data: {},
    };
  },
  mounted() {
    fetch("https://club.metsenat.uz/api/v1/dashboard/")
      .then((res) => res.json())
      .then((data) => {
        this.data = data;
        console.log(data, "data");
      })
      .catch((err) => console.log(err.message));
  },
};
</script>
