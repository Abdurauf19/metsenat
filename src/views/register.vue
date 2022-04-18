<template>
<headerNav/>
<div class="Login-container flex items-center justify-center h-[120vh]">
  <div>
    <a href="#" class="Login-logo "><img src="../assets/photos/Logo.png" class="pb-[48px]" alt="Logo"></a>
    <form class="login-form w-[379px] flex flex-col justify-center" @submit.prevent="Submithandler">
      <!-- Title -->
      <h2 class="Login-form__title text-[#28293D] text-[24px] pb-[44px] font-bold">Ro‘yxatdan o’tish</h2>
      <!-- Form username -->
      <label class="Login-form__loginlabel text-[#1D1D1F] text-[12px] pb-[8px] fort-medium" for="Username">F.I.Sh. (Familiya Ism Sharifingiz)</label>
      <input class="Login-form__input w-[315px] py-[12px] pl-[16px]" type="text" v-model="userName" placeholder="F.I.Sh. (Familiya Ism Sharifingiz)" required>
      <!-- Email -->
      <label for="Login" class="Login-form__loginlabel text-[#1D1D1F] text-[12px] pb-[8px] fort-medium ">Email</label>
      <input type="email" v-model="Email" class="Login-form__input w-[315px] py-[12px] pl-[16px]" placeholder="adm8904" required>
      <!-- Password -->
      <label for="Password" class="Login-formlabel text-[#1D1D1F] text-[12px] pb-[8px] fort-medium ">PAROL</label>
      <input v-model="Password" type="password" class="Login-forminput w-[315px] py-[12px] pl-[16px]" placeholder="••••••••••" required>
      <!-- Recaptcha -->
       <vue-recaptcha class="bg-[#FAFAFA]  w-[311px]" sitekey="sitekey"></vue-recaptcha>
       <!-- Button -->
      <button @click="SubmitFrom" type="Submit" class="Login-btn bg-[#2E5BFF] rounded-[6px] mt-[23px] py-[14px] w-[315px] text-[15px] text-[#FFFFFF]">Ro‘yxatdan o’tish</button>
    </form>
  </div>
  </div>
</template>


<script>

  import { VueRecaptcha } from 'vue-recaptcha';
  // import useVuelidate from '@vuelidate/core'
  // import { required} from '@vuelidate/validators'
  export default {
    components :{
       VueRecaptcha ,
       
    },
  data () {
    return {
      //  v$: useVuelidate() ,
      userName: '',
      Email: '',
      Password: ''
    }
  },
  

  methods: {
    Submithandler () {
      this.$router.push('/')
    }
    // SubmitFrom () {
    //   console.log(this.v$);
    //   alert ("Muvaffaqiyatli royhatdan o'tdingiz")
    // }
  }

}

</script>