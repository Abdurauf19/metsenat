<template>
  <div class="Login-container flex items-center justify-center h-[100vh]">
    <div>
      <a href="#" class="Login-logo"
        ><img src="../assets/photos/Logo.png" class="pb-[48px]" alt="Logo"
      /></a>
      <form
        class="login-form w-[379px] flex flex-col justify-center"
        @submit.prevent="Submithandler"
      >
        <!-- Title -->
        <h2
          class="Login-form__title text-[#28293D] text-[24px] pb-[44px] font-bold"
        >
          Kirish
        </h2>
        <!-- Log in -->
        <label
          for="Login"
          class="Login-form__loginlabel text-[#1D1D1F] text-[12px] pb-[8px] fort-medium"
          >lOGIN</label
        >
        <input
          
          type="text"
          class="Login-form__input w-[315px] py-[12px] pl-[16px]" 
          placeholder="adm8904"
        />
        <!-- Password -->
        <label
          for="Password"
          class="Login-formlabel text-[#1D1D1F] text-[12px] pb-[8px] fort-medium"
          >PAROL</label
        >
        <input
          type="password"
          class="Login-forminput w-[315px] py-[12px] pl-[16px]"
          placeholder="••••••••••"
        />
        <!-- Recaptcha -->
        <vue-recaptcha
          class="bg-[#FAFAFA] w-[311px]"
          sitekey="sitekey"
        ></vue-recaptcha>
        <!-- Button -->
        <button
          type="submit"
          class="Login-btn bg-[#2E5BFF] rounded-[6px] mt-[23px] py-[14px] w-[315px] text-[15px] text-[#FFFFFF]"
        >
          Kirish
        </button>
      </form>
    </div>
  </div>
</template>

<script>
// import { email, required, minLength } from 'vuelidate/lib/validators';
import { VueRecaptcha } from "vue-recaptcha";
export default {
  components: { VueRecaptcha },
  data() {
    
  },

  methods: {
    Submithandler() {
      this.$router.push("/");
    },
  },
};
</script>
