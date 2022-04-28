<template>
  <div class="Login-container flex items-center justify-center h-[120vh]">
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
          Ro‘yxatdan o’tish
        </h2>
        <!-- Form username -->
        <!-- <label class="Login-form__loginlabel text-[#1D1D1F] text-[12px] pb-[8px] fort-medium" for="Username">F.I.Sh. (Familiya Ism Sharifingiz)</label>
      <input class="Login-form__input w-[315px] py-[12px] pl-[16px]" type="text" v-model="userName" placeholder="F.I.Sh. (Familiya Ism Sharifingiz)" required> -->
        <!-- Email -->
        <label
          for="Login"
          class="Login-form__loginlabel text-[#1D1D1F] text-[12px] pb-[8px] fort-medium"
          >Email</label
        >
        <input
          type="email"
          v-model="userEmail"
          class="Login-form__input w-[315px] py-[12px] pl-[16px]"
          placeholder="adm8904"
          required
        />
        <!-- Password -->
        <label
          for="Password"
          class="Login-formlabel text-[#1D1D1F] text-[12px] pb-[8px] fort-medium"
          >PAROL</label
        >
        <input
          v-model="userPassword"
          type="password"
          class="Login-forminput w-[315px] py-[12px] pl-[16px]"
          placeholder="••••••••••"
          required
        />
        <!-- Recaptcha -->
        <vue-recaptcha
          class="bg-[#FAFAFA] w-[311px]"
          sitekey="sitekey"
        ></vue-recaptcha>
        <!-- Button -->
        <button
          @click="register"
          type="Submit"
          class="Login-btn bg-[#2E5BFF] rounded-[6px] mt-[23px] py-[14px] w-[315px] text-[15px] text-[#FFFFFF]"
        >
          Ro‘yxatdan o’tish
        </button>
        <button
          @click="signInWithGoogle"
          type="Submit"
          class="Login-btn bg-[#2E5BFF] rounded-[6px] mt-[23px] py-[14px] w-[315px] text-[15px] text-[#FFFFFF]"
        >
          Google orqali ro'yxatdan o'tish
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { VueRecaptcha } from "vue-recaptcha";
import { ref } from "vue";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router";
const userEmail = ref("");
const userPassword = ref("");
const router = useRouter();

const register = () => {
  createUserWithEmailAndPassword(getAuth(), userEmail.value, userPassword.value)
    .then((data) => {
      console.log(data, "Successfully registered!");
      router.push("/");
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};
const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user);
      router.push("/");
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>

//export default { components :{ VueRecaptcha , }, data () { return { // v$:
useVuelidate() , form: { userName: '', userEmail: '', userPassword: '' },
errors: [] } }, methods: { Submithandler () { this.$router.push('/') } } }
