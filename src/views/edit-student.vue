<template>
  <!-- Modal -->
  <div class="modal-edit items-center justify-center bg-[#00000080]">
    <div class="edit-modal">
      <div class="flex items-center justify-between mb-[28px]">
        <h2 class="text-[24px] text-[#28293D] leading-[28px]">Tahrirlash</h2>
        <svg
          @click="ModalOff"
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
      <!-- Form -->
      <form>
        <!-- Btns -->
        <div class="flex items-center mt-[28px] mb-[32px]">
          <div
            class="btnss cursor-pointer w-[265px] flex items-center justify-center border-[2px] border-[#E0E7FF]"
            v-for="(item, i) in btns"
            :key="i"
            :class="{ btnActive: btnIndexx === i }"
            @click="btns"
          >
            <a href="#" class="py-[9px]">{{ item.btn }}</a>
          </div>
        </div>
        <!-- Username -->
        <div class="mb-[28px]">
          <label
            class="text-[14px] text-[#1D1D1F] uppercase font-medium"
            for="UserName"
            >F.I.Sh. (Familiya Ism Sharifingiz)</label
          >
          <input
            v-model="UserName"
            class="pl-[16px] py-[12px] mt-[8px] text-[15px] text-[#2E384D] bg-[#E0E7FF33] border-[#E0E7FF] border-[1px] xs:w-[313px] smm:w-[391px] w-[530px] rounded-[6px]"
            type="text"
            id="UserName"
            placeholder="Ishmuhammedov Aziz Ishqobilovich"
            required
          />
        </div>
        <!-- UserNumber -->
        <div class="mb-[28px]">
          <label
            class="text-[14px] text-[#1D1D1F] uppercase font-medium"
            for="UserNumber"
            >Telefon raqam</label
          >
          <input
            v-model="UserNumber"
            class="pl-[16px] py-[12px] mt-[8px] text-[15px] text-[#2E384D] bg-[#E0E7FF33] border-[#E0E7FF] border-[1px] xs:w-[313px] smm:w-[391px] w-[530px] rounded-[6px]"
            type="text"
            id="UserNumber"
            placeholder="+998 88 973-72-60"
            required
          />
        </div>
        <!-- UserSelect -->
        <div class="mb-[28px]">
          <label
            class="text-[14px] text-[#1D1D1F] uppercase font-medium"
            for="UserSelect"
            >Holati</label
          >
          <select
            v-model="UserSelect"
            class="pl-[16px] py-[12px] mt-[8px] text-[15px] text-[#2E384D] bg-[#E0E7FF33] border-[#E0E7FF] border-[1px] xs:w-[313px] smm:w-[391px] w-[530px] rounded-[6px]"
            id="UserSelect"
            required
          >
            <option value="Tasdiqlangan">Tasdiqlangan</option>
            <option value="Yangi">Yangi</option>
            <option value="Moderatsiyada">Moderatsiyada</option>
            <option value="Bekor qilingan">Bekor qilingan</option>
          </select>
        </div>
        <!-- UserSum -->
        <div class="mb-[28px]">
          <label
            class="text-[14px] text-[#1D1D1F] uppercase font-medium"
            for="UserSum"
            >Homiylik summasi</label
          >
          <select
            v-model="UserSum"
            class="pl-[16px] py-[12px] mt-[8px] text-[15px] text-[#2E384D] bg-[#E0E7FF33] border-[#E0E7FF] border-[1px] xs:w-[313px] smm:w-[391px] w-[530px] rounded-[6px]"
            id="UserSum"
            required
          >
            <option value="30000000 ">{{ this.data.sum }} UZS</option>
          </select>
        </div>
        <!-- UserPay -->
        <div class="mb-[28px]">
          <label
            class="text-[14px] text-[#1D1D1F] uppercase font-medium"
            for="UserPay"
            >To‘lov turi</label
          >
          <select
            v-model="UserPay"
            class="pl-[16px] py-[12px] mt-[8px] text-[15px] text-[#2E384D] bg-[#E0E7FF33] border-[#E0E7FF] border-[1px] xs:w-[313px] smm:w-[391px] w-[530px] rounded-[6px]"
            id="UserPay"
            required
          >
            <option v-for="(item, i ) in typePayment" :key="i">{{item.title}}</option>
          </select>
        </div>
        <!-- User group -->
        <Transition>
          <div v-if="btnIndexx === 1" class="mb-[28px]">
            <label
              class="text-[14px] text-[#1D1D1F] uppercase font-medium"
              for="Usergroup"
              >Tashkilot nomi</label
            >
            <input
              v-model="Usergroup"
              class="pl-[16px] py-[12px] mt-[8px] text-[15px] text-[#2E384D] bg-[#E0E7FF33] border-[#E0E7FF] border-[1px] xs:w-[313px] smm:w-[391px] w-[530px] rounded-[6px]"
              type="text"
              id="Usergroup"
              placeholder="Orient Group"
              required
            />
          </div>
        </Transition>
        <hr />
        <!-- Btn -->
        <div class="mt-[28px] flex items-center justify-end">
          <span class="editbtn">
            <button
              @click="editSponsorPatch"
              type="button"
              class="editbtn text-[14px] text-[#FFF]"
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
          </span>
        </div>
      </form>
    </div>
  </div>
  <!--  -->
  <div class="conteinerrr bg-[#E5E5E5]">
    <div
      class="flex items-center xs:pl-[15px] mdd:pl-[30px] pl-[120px] bg-[#FFFFFF]"
    >
      <router-link to="/Homiylar">
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
      <h3
        class="ml-[21px] py-[26px] sm:text-[20px] text-[24px] text-[#28293D] font-medium"
      >
        {{ data.full_name }}
      </h3>
      <p
        class="text-[#00CF83] bg-[#DDFFF2] text-[12px] rounded-[5px] py-[6px] px-[12px] ml-[12px]"
      >
        {{data.get_status_display}}
      </p>
    </div>
    <!--  -->

    <!-- Carts -->
    <div class="flex items-center justify-center">
      <div class="homiy-cart mb-[163px]">
        <div class="flex items-center justify-between">
          <h3 class="text-[24px] text-[#28293D] font-medium">Homiy haqida</h3> 
          <span
            @click="ModalOn"
            class="flex items-center justify-center sm:w-[135px] w-[166px] rounded-[6px] bg-[#EDF1FD] gap-[17px] cursor-pointer"
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
                d="M9 15H12L20.5 6.5C20.8978 6.10217 21.1213 5.56261 21.1213 5C21.1213 4.43739 20.8978 3.89782 20.5 3.5C20.1022 3.10217 19.5626 2.87868 19 2.87868C18.4374 2.87868 17.8978 3.10217 17.5 3.5L9 12V15Z"
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
            <a class="text-[#3365FC] text-[14px] py-[13px]" href="#"
              >Tahrirlash</a
            >
          </span>
        </div>
        <div
          class="flex items-center text-[16px] text-[#212121] gap-[20px] mt-[32px]"
        >
          <span
            class="bg-[#EAECF0] py-[16px] px-[18px] border-[1px] border-[#E0E7FF] rounded-[6px]"
            ><svg
              width="28"
              height="32"
              viewBox="0 0 28 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_26_187)">
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
                <clipPath id="clip0_26_187">
                  <rect width="28" height="32" fill="white" />
                </clipPath>
              </defs></svg
          ></span>
          <h3
            class="smm:text-[13px] text-[16px] text-[#212121] w-[163px] font-medium"
          >
            {{ data.full_name }}
          </h3>
        </div>
        <div class="pt-[24px] flex xss:gap-[130px] xs:gap-[87px] gap-[227px]">
          <span>
            <p
              class="smm:text-[10px] uppercase text-[12px] leading-[14px] text-[#B5B5C3] pb-[12px]"
            >
              telefon raqam
            </p>
            <h3
              class="smm:text-[13px] text-[16px] text-[#212121] leading-[14px] font-medium"
            >
              {{ data.phone }}
            </h3>
          </span>
          <span>
            <p
              class="smm:text-[10px] uppercase text-[12px] leading-[14px] text-[#B5B5C3] pb-[12px]"
            >
              Homiylik summasi
            </p>
            <h3
              class="smm:text-[13px] text-[16px] text-[#212121] leading-[14px] font-medium"
            >
              {{ data.sum }} UZS
            </h3>
          </span>
        </div>
      </div>
    </div>

    <!-- IMG -->
    <div class="flex justify-center">
      <img src="../assets/photos/edit-page-banner.png" alt="Banner" />
    </div>
  </div>
</template>
//
<script>
export default {
  data() {
    return {
      data: [],
      typePayment:[],
      // Modal

      // btn index
      btns: [
        {
          id: 0,
          btn: "Jismoniy shaxs",
        },
        {
          id: 1,
          btn: "Yuridik shaxs",
        },
      ],
      btnIndexx: 0,
      // Form
      UserName: "",
      UserNumber: "",
      UserSelect: 0,
      UserSum: 0,
      UserPay: 0,
      Usergroup: "",
      currentSlug: undefined,
    };
  },

  mounted() {
   
      this.currentSlug = this.$route.params.slug;

    fetch(
      `https://club.metsenat.uz/api/v1/sponsor-detail/${this.currentSlug}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        this.data = data;
        console.log(data, "data");
        this.UserName = this.data.full_name;
        this.UserNumber = this.data.phone;
        this.UserSum = this.data.sum;
        this.UserSelect = this.data.get_status_display;
        this.Usergroup = this.data.firm;
        this.UserSelect = this.data.get_status_display;
      })
      .catch((err) => console.log(err.message));

    fetch(
      `https://metsenatclub.xn--h28h.uz/api/v1/payment-type-list/`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        this.typePayment = data;
        console.log(data, "data");
      })
      .catch((err) => console.log(err.message));
  },

  methods: {
     editSponsorPatch () {
       const data = {
         full_name: this.UserName,
         phone: this.UserNumber,
         sum: this.UserSum,
         firm: this.Usergroup,
         is_legal: this.btnIndexx,
         Comment: this.UserSelect
       }
        fetch(`https://club.metsenat.uz/api/v1/sponsor-update/${this.currentSlug}/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          this.$router.push('/Homiylar')
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },

    btns(){
      if(this.btnIndexx == 0) {
        return true
      }else {
        return false
      }       
    },

    ModalOn() {
      document.querySelector(".modal-edit").style.display = "flex";
    },
    ModalOff() {
      document.querySelector(".modal-edit").style.display = "none";
    },

    clickEditSponcer() {
      const data = {
        UserName: this.UserName,
        UserNumber: this.UserNumber,
        UserSelect: this.UserSelect,
        UserSum: this.UserSum,
        UserPay: this.UserPay,
        Usergroup: this.Usergroup,
      };

      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      this.$router.push("/Homiylar/");
    },
  },
};
</script>

<style lang="scss">
.homiy-cart {
  padding: 32px;
  background: #ffffff;
  border: 1px solid #ebeefc;
  box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.03);
  border-radius: 12px;
  width: 793px;
  margin-top: 40px;
}

@media only screen and (max-width: 830px) {
  .homiy-cart {
    width: 600px;
  }
}
@media only screen and (max-width: 640px) {
  .homiy-cart {
    width: 576px;
  }
}
@media only screen and (max-width: 500px) {
  .homiy-cart {
    width: 439px;
  }
}

.edit-modal {
  padding: 28px;
  background-color: #ffffff;
  border-radius: 12px;
  width: 586px;
}
@media only screen and (max-width: 576px) {
  .edit-modal {
    width: 450px;
  }
}
@media only screen and (max-width: 475px) {
  .edit-modal {
    width: 370px;

    .editbtn {
      padding: 6px 0;
    }
  }
}

.btnss {
  border-radius: 6px 0 0 6px;
}
.btnss:last-child {
  border-radius: 0 6px 6px 0;
}
.btnActive {
  transition: all 0.4s ease-in-out;
}
.btnActive {
  background-color: #3366ff;
  color: #ffffff;
}

.editbtn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #3366ff;
  box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.04),
    0px 2px 4px rgba(96, 97, 112, 0.16);
  border-radius: 5px;
  padding: 9px 0;
  width: 150px;
}

.modal-edit {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: none;
}
</style>
