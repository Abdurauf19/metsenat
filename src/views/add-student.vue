<template>
    <div class="bg-[#FFFFFF] ">
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
        <h2 class="text-[24px] text-[#28293D] font-bold">Talaba qo‘shish</h2>
      </span>
    </div>
  <div class="bg-[#E5E5E5] flex flex-col justify-center items-center">

    <form class="add-student" >
        <div class="flex gap-[28px]">
          <!-- Username -->
          <div class="flex flex-col">
            <label class="text-[12px] text-[#1D1D1F] uppercase pb-[8px] font-medium" for="Fish">F.I.Sh. (Familiya Ism Sharif)</label>
            <input v-model="userName" class="bg-[#E0E7FF33] w-[353px] py-[12px] pl-[16px] border-[1px] rounded-[5px] border-[#E0E7FF]" id="Fish" type="text" placeholder="Abdullayev Abdulla Abdulla o’g’li">
          </div>
          <!-- usernumber -->
          <div class="flex flex-col">
            <label class="text-[12px] text-[#1D1D1F] uppercase pb-[8px] font-medium" for="num">Telefon raqam</label>
            <input v-model="userNumber" class="bg-[#E0E7FF33] w-[353px] py-[12px] pl-[16px] border-[1px] rounded-[5px] border-[#E0E7FF]" id="num" type="text" placeholder="+998 00 000-00-00">
          </div>
        </div>
        <!-- User unversitet -->
        <div class="flex flex-col">
          <label class="pt-[28px] pb-[8px] text-[12px] text-[#1D1D1F] font-medium" for="OTM">OTM</label>
          <select v-model="userUnv" class="py-[12px] pl-[16px] bg-[#E0E7FF33] w-[734px] border-[1px] border-[#E0E7FF] rounded-[6px] mb-[28px]" name="OTM ni tanlang" id="OTM">
            <option value="0">OTM ni tanlang</option>
            <hr>
            <option value="1">OTM ni tanlang</option>
            <hr>
            <option value="2">OTM ni tanlang</option>
            <hr>
          </select>
        </div>
          <div class="flex gap-[28px] pb-[28px]">
            <!-- type of study -->
          <div class="flex flex-col">
            <label class="text-[12px] text-[#1D1D1F] uppercase pb-[8px] font-medium" for="barchasi">Talabalik turi</label>
            <select v-model="usertypeStudy"  id="barchasi" class="rounded-[6px] bg-[#E0E7FF33] border-[1px] border-[#E0E7FF] text-[#2E384D] text-[15px] py-[12px] pl-[16px] w-[353px]">
              <option value="0">Barchasi</option>
              <option value="1">Barchasi</option>
              <option value="2">Barchasi</option>
            </select>
          </div>
          <!-- paying sum -->
          <div class="flex flex-col">
            <label class="text-[12px] text-[#1D1D1F] uppercase pb-[8px] font-medium" for="sum">Kontrakt summa</label>
            <input v-model="userSum" class="bg-[#E0E7FF33] rounded-[6px] w-[353px] border-[1px] border-[#E0E7FF] py-[12px] pl-[16px]" id="sum" type="number" placeholder="Summani kiriting">
          </div>
        </div>
        <hr>
        <div class="flex items-center justify-end  ">
        <button @click="addUser" type="Submit" class="add-btn bg-[#3366FF] gap-[14px] text-[#FFFFFF] text-[14px]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.9999 11.9999H4.00007" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 4V19.9999" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Qo‘shish
        </button>
        </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userName: '',
      userNumber: '',
      userUnv: '',
      usertypeStudy: '',
      userSum:'',
    }
  },

  methods: {
    addUser () {
      const user = {
        name: this.userName,
        number: this.userNumber,
        unv: this.userUnv,
        typeStudy: this.usertypeStudy,
        sum: this.userSum,
      }
      this.$store.dispatch('addUser', user)
      this.$router.push('/Talabalar')
    }
  }
}
</script>






<style lang="scss">
  .add-student {
    background: #FFFFFF;
    border: 1px solid #EBEEFC;
    box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.03);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    width: 790px;
    padding: 28px;
    margin-top: 40px;
  }

  .add-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #3366FF;
    box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.04), 0px 2px 4px rgba(96, 97, 112, 0.16);
    border-radius: 5px;
    width: 155px;
    padding: 9px 0;
    margin-top: 28px;
  }
</style>
