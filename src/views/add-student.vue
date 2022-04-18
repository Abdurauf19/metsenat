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

    <form class="addstudent" >
        <div class="flex gap-[28px]">
          <div class="flex flex-col">
            <label class="text-[12px] text-[#1D1D1F] uppercase pb-[8px] font-medium" for="Fish">F.I.Sh. (Familiya Ism Sharif)</label>
            <input class="bg-[#E0E7FF33] w-[353px] py-[12px] pl-[16px]" type="text" placeholder="Abdullayev Abdulla Abdulla o’g’li">
          </div>
          <div class="flex flex-col">
            <label class="text-[12px] text-[#1D1D1F] uppercase pb-[8px] font-medium" for="Fish">Telefon raqam</label>
            <input class="bg-[#E0E7FF33] w-[353px] py-[12px] pl-[16px]" type="text" placeholder="+998 00 000-00-00">
          </div>
        </div>
        <div class="flex flex-col">
          <label class="pt-[28px] pb-[8px] text-[12px] text-[#1D1D1F] font-medium" for="OTM">OTM</label>
          <select class="py-[12px] pl-[16px] bg-[#E0E7FF33] w-[734px] rounded-[6px] mb-[28px]" name="OTM ni tanlang" id="OTM">
            <option value="0">OTM ni tanlang</option>
            <hr>
            <option value="0">2</option>
            <hr>
            <option value="0">3</option>
            <hr>
          </select>
        </div>
          <div class="flex gap-[28px]">
          <div class="flex flex-col">
            <label class="text-[12px] text-[#1D1D1F] uppercase pb-[8px] font-medium" for="barchasi">Talabalik turi</label>
            <select   id="barchasi" class="rounded-[6px] bg-[#E0E7FF33] text-[#2E384D] text-[15px] py-[12px] pl-[16px] w-[353px]">
              <option value="0">Barchasi</option>
            </select>
          </div>
          <div class="flex flex-col">
            <label class="text-[12px] text-[#1D1D1F] uppercase pb-[8px] font-medium" for="sum">Kontrakt summa</label>
            <input class="bg-[#E0E7FF33] rounded-[6px] w-[353px] py-[12px] pl-[16px]" id="sum" type="number" placeholder="Summani kiriting">
          </div>
        </div>
    </form>
  </div>
</template>

<style lang="scss">
  .addstudent {
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
</style>
