<template>
  <div class="con bg-[#E5E5E5]">
    <!-- header -->
    <div class="bg-[#FFFFFF] flex items-center justify-between">
      <span class="py-[30px] flex items-center gap-[16px] pl-[120px]">
        <router-link to="/Talabalar">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.1663 14H5.83301"
              stroke="black"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.9997 22.1667L5.83301 14L13.9997 5.83334"
              stroke="black"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg
        ></router-link>
        <h2 class="text-[24px] text-[#28293D] font-bold">
          Isfandiyorov Iqbol Bobomirzayevich
        </h2>
      </span>
      <button
        @click="on"
        class="mr-[126px] flex items-center justify-center gap-[14px] text-[14px] text-[#3365FC] py-[9px] bg-[#EDF1FD] w-[197px] rounded-[6px]"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.9999 11.9999H4.00007"
            stroke="#3365FC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 4V19.9999"
            stroke="#3365FC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Homiy qo‘shish
      </button>
    </div>

    <!-- About student -->
    <div class="flex flex-col items-center justify-center gap-[40px] mt-[40px]">
      <div class="about-student">
        <!-- 1 -->
        <div class="flex items-center justify-between">
          <h2 class="text-[24px] text-[#28293D] font-medium">Talaba haqida</h2>
          <button
            class="flex gap-[15px] py-[13px] w-[166px] bg-[#EDF1FD] rounded-[5px] items-center justify-center"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V15"
                stroke="#3365FC"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 15H12L20.5 6.49998C20.8978 6.10216 21.1213 5.56259 21.1213 4.99998C21.1213 4.43737 20.8978 3.89781 20.5 3.49998C20.1022 3.10216 19.5626 2.87866 19 2.87866C18.4374 2.87866 17.8978 3.10216 17.5 3.49998L9 12V15Z"
                stroke="#3365FC"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 5L19 8"
                stroke="#3365FC"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Tahrirlash
          </button>
        </div>
        <!-- 2 -->
        <div>
          <h2 class="text-[#3366FF] py-[2px] px-[11px] bg-[#E5EBFF] w-[172px]">
            Asosiy ma’lumotlar
          </h2>
          <hr class="mt-[-13px]" />
        </div>
        <!-- 3 user -->
        <div class="mt-[35px] flex items-center gap-[20px]">
          <span class="bg-[#EAECF0] py-[18px] px-[16px] rounded-[6px]">
            <svg
              width="28"
              height="32"
              viewBox="0 0 28 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_120_1071)">
                <path
                  opacity="0.4"
                  d="M11.9594 25.9231L13 21.5L11 18H17L15 21.5L16.0406 25.9231L14 30L11.9594 25.9231ZM14 16C15.5823 16 17.129 15.5308 18.4446 14.6518C19.7602 13.7727 20.7855 12.5233 21.391 11.0615C21.9965 9.59966 22.155 7.99113 21.8463 6.43928C21.5376 4.88743 20.7757 3.46197 19.6569 2.34315C18.538 1.22433 17.1126 0.462403 15.5607 0.153721C14.0089 -0.15496 12.4003 0.00346625 10.9385 0.608967C9.47672 1.21447 8.22729 2.23985 7.34824 3.55544C6.46919 4.87104 6 6.41775 6 8C6 10.1217 6.84285 12.1566 8.34315 13.6569C9.84344 15.1572 11.8783 16 14 16Z"
                  fill="#2E5BFF"
                />
                <path
                  d="M19.9875 18.0376L14 30.0001L8.0125 18.0376C3.55625 18.2501 0 21.8938 0 26.4001V29.0001C0 29.7957 0.31607 30.5588 0.87868 31.1214C1.44129 31.684 2.20435 32.0001 3 32.0001H25C25.7956 32.0001 26.5587 31.684 27.1213 31.1214C27.6839 30.5588 28 29.7957 28 29.0001V26.4001C28 21.8938 24.4437 18.2501 19.9875 18.0376Z"
                  fill="#2E5BFF"
                />
              </g>
              <defs>
                <clipPath id="clip0_120_1071">
                  <rect width="28" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <h3 class="text-[16px] text-[#212121] w-[163px]">
            Isfandiyorov Iqbol Bobomirzayevich
          </h3>
        </div>
        <!-- 4 Usernumber -->
        <div class="mt-[32px]">
          <h2 class="text-[#3366FF] py-[2px] px-[11px] bg-[#E5EBFF] w-[233px]">
            O‘qish joyi haqida ma’lumot
          </h2>
          <hr class="mt-[-13px]" />
        </div>
        <!-- 5 type and OTM -->
        <div class="flex mt-[26px] gap-[28px]">
          <div>
            <p class="uppercase text-[#B5B5C3] text-[12px]">OTM</p>
            <p class="text-[#212121] text-[16px] font-medium">
              O’zbekiston davlat jahon tillari universiteti
            </p>
          </div>
          <div>
            <p class="uppercase text-[#B5B5C3] text-[12px]">Talabalik turi</p>
            <p class="text-[#212121] text-[16px] font-medium">Bakalavr</p>
          </div>
        </div>
        <!-- sum and all sum -->
        <div class="flex mt-[26px] gap-[224px]">
          <div>
            <p class="uppercase text-[#B5B5C3] text-[12px]">
              Ajratilingan summa
            </p>
            <p class="text-[#212121] text-[16px] font-medium">14 000 000 UZS</p>
          </div>
          <div>
            <p class="uppercase text-[#B5B5C3] text-[12px]">Kontrakt miqdori</p>
            <p class="text-[#212121] text-[16px] font-medium">30 000 000 UZS</p>
          </div>
        </div>
      </div>
      <!-- sponsor student -->
      <div class="sponsor-add">
        <!-- title -->
        <div class="flex justify-between items-center">
          <h3 class="">Talabaga homiylar</h3>
          <button
            @click="on"
            class="flex items-center justify-center gap-[14px] text-[14px] text-[#3365FC] py-[9px] bg-[#EDF1FD] w-[197px] rounded-[6px]"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.9999 11.9999H4.00007"
                stroke="#3365FC"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 4V19.9999"
                stroke="#3365FC"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Homiy qo‘shish
          </button>
        </div>
        <!-- table -->
        <table class="tables">
          <tr class="mb-[12px]">
            <th class="text-[12px] text-[#B1B1B8] uppercase font-medium">#</th>
            <th class="text-[12px] text-[#B1B1B8] uppercase font-medium">
              f.i.sh.
            </th>
            <th class="text-[12px] text-[#B1B1B8] uppercase font-medium">
              Ajratilingan summa
            </th>
            <th class="text-[12px] text-[#B1B1B8] uppercase font-medium">
              Amallar
            </th>
          </tr>
          <tr
            v-for="(item, i) in data"
            :key="i"
            class="border-[1px] border-[#FBFBFC] rounded-[8px] cursor-pointer"
          >
            <td class="text-[15px] text-[#1D1D1F]">{{ i + 1 }}</td>
            <td class="text-[15px] text-[#1D1D1F]">{{ item.name }}</td>
            <td class="text-[15px] text-[#1D1D1F]">
              {{ item.sum }} <span>UZS</span>
            </td>
            <td @click="btnOn" >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V15"
                  stroke="#3467FF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 15H12L20.5 6.49998C20.8978 6.10216 21.1213 5.56259 21.1213 4.99998C21.1213 4.43737 20.8978 3.89781 20.5 3.49998C20.1022 3.10216 19.5626 2.87866 19 2.87866C18.4374 2.87866 17.8978 3.10216 17.5 3.49998L9 12V15Z"
                  stroke="#3467FF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 5L19 8"
                  stroke="#3467FF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <!-- Img -->
    <div class="flex items-center justify-center mt-[44px]">
      <img src="../assets/photos/edit-page-banner.png" alt="banner" />
    </div>
  </div>

  <!-- Add sponsor modal -->
  <div id="overlay" class="flex justify-center items-center bg-[#00000080]">
    <!-- Modal header -->
    <div
      class="modal-sponser px-[28px] py-[28px] w-[586px] bg-[#FFFFFF] rounded-[6px]"
    >
      <div class="modal-header flex items-center justify-between mb-[28px]">
        <h3 class="text-[24px] text-[#28293D] font-medium">Homiy qo‘shish</h3>
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
      <!-- modal Form -->
      <div class="mt-[28px]">
        <div>
          <label
            class="text-[14px] text-[#1D1D1F] leading-[15px] uppercase font-medium"
            for="Username"
            >F.I.Sh. (Familiya Ism Sharifingiz)</label
          >
          <select
            v-model="UserName"
            class="bg-[#E0E7FF33] outline-none mt-[8px] w-[530px] text-[15px] text-[#2E384D] py-[12px] pl-[16px] border-[1px] border-[#E0E7FF] rounded-[6px]"
            name=""
            id="Username"
          >
            <option
              v-for="(item, index) in options"
              :key="index"
              :value="item.value"
            >
              {{ item.text }}
            </option>
          </select>
        </div>
        <div class="my-[28px]">
          <label
            class="text-[14px] text-[#1D1D1F] leading-[15px] uppercase font-medium"
            for="UserSum"
            >Ajratilingan summa</label
          >
          <input
            v-model="UserSum"
            class="modal-input w-[530px] py-[12px] pl-[16px] border-[1px] mt-[8px] text-[#2E384D59] text-[15px] outline-none border-[#E0E7FF] rounded-[6px]"
            id="UserSum"
            type="number"
            placeholder="Summani kiriting"
          />
        </div>
        <hr />
        <div class="flex justify-end items-center mt-[28px]">
          <button
            @click="addStudent()"
            class="w-[155px] bg-[#3366FF] rounded-[6px] py-[9px] text-[#FFF] text-[14px] flex items-center justify-center gap-[14px]"
          >
            <svg
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
              /></svg
            >Qo‘shish
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Edit sponsor modal -->
  <div class="flex edit-sponsor  justify-center items-center bg-[#00000080]">
    <div class="px-[28px] py-[28px] w-[586px] bg-[#FFFFFF] rounded-[6px]">
      <!-- Modal title -->
      <div>
        <h2 class="text-[24px] text-[#28293D] font-medium mb-[28px]">
          Homiylarni tahrirlash
        </h2>
      </div>
      <!-- modal form -->
      <div>
        <!-- userName -->
        <div>
          <label
            class="text-[14px] text-[#1D1D1F] leading-[15px] uppercase font-medium"
            for="userName"
            >F.I.Sh. (Familiya Ism Sharifingiz)</label
          >
          <input
            v-model="UserName"
            class="modal-input w-[530px] py-[12px] pl-[16px] border-[1px] mt-[8px] text-[#2E384D59] text-[15px] outline-none border-[#E0E7FF] rounded-[6px]"
            type="text"
            placeholder="Ishmuhammedov Aziz Ishqobilovich"
          />
        </div>
        <!-- userSum -->
        <div class="my-[28px]">
          <label for="userSum">Ajratilingan summa</label>
          <input
            v-model="UserSum"
            class="modal-input w-[530px] py-[12px] pl-[16px] border-[1px] mt-[8px] text-[#2E384D59] text-[15px] outline-none border-[#E0E7FF] rounded-[6px]"
            type="text"
            name=""
            id="userSum"
            placeholder="12 000 000 UZS"
          />
        </div>
        <hr />
        <!-- userBtns -->
        <div class="flex items-center justify-end mt-[28px] gap-[16px]">
          <button @click="btnOff"
            class="flex items-center justify-center gap-[15px] w-[209px] bg-[#FFECEB] text-[#FF4945] text-[14px] py-[9px] rounded-[6px]"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 6H5H21"
                stroke="#FF4945"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
                stroke="#FF4945"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 11V17"
                stroke="#FF4945"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 11V17"
                stroke="#FF4945"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            Homiyni o‘chirish
          </button>
          <button @click="btnOff"
            class="flex items-center justify-center gap-[13px] w-[150px] bg-[#3366FF] py-[9px] text-[#FFF] rounded-[6px]"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H14L19 6V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 19V11H5V19"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5 1V6H13"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            Saqlash
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          num: "1",
          name: "Saimov Rustam Saimjonovich",
          sum: "1 000 000",
        },
        {
          num: "2",
          name: "Sanginov Otabek Muratovich",
          sum: "7 000 000 ",
        },
        {
          num: "3",
          name: "Nazarov Sanjar Olimovich",
          sum: "10 000 000 ",
        },
        {
          num: "4",
          name: "Ishmuhammedov Aziz Ishqobilovich",
          sum: "12 000 000 ",
        },
      ],
      //  sponsor
      UserName: "0",
      UserSum: "",
      options: [
        {
          value: "0",
          text: "Homiyni tanlang",
        },
        {
          value: "1",
          text: "Ishmuhammedov Aziz Ishqobilovich",
        },
        {
          value: "2",
          text: "Saimov Rustam Saimjonovich",
        },
        {
          value: "4",
          text: "Sanginov Otabek Muratovich",
        },
        {
          value: "5",
          text: "Nazarov Sanjar Olimovich",
        },
      ],
    };
  },

  methods: {
    addStudent() {
      this.data.push({
        name: this.options[this.UserName].text,
        sum: this.UserSum,
      });

      this.off();

      this.UserName = 0;
      this.UserSum = "";
    },
    on() {
      document.getElementById("overlay").style.display = "flex";
    },
    off() {
      document.getElementById("overlay").style.display = "none";
    },
    btnOff() {
      document.querySelector(".edit-sponsor ").style.display = "none";
    },
    btnOn() {
      document.querySelector(".edit-sponsor ").style.display = "flex";
    },
  },
};
</script>

<style lang="scss" scoped>
.about-student,
.sponsor-add {
  width: 790px;
  padding: 32px;
  background: #ffffff;
  border: 1px solid #ebeefc;
  box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.03);
  border-radius: 12px;
}

td,
th {
  text-align: left;
  padding: 25px 33px;
}

#overlay,
.edit-sponsor {
  display: none;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.modal-input::-webkit-outer-spin-button,
.modal-input::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

.modal-input[type="number"] {
  -moz-appearance: textfield; /* Firefox */
}
</style>
