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
          v-model="userEmail"
          type="email"
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
          v-model="userPassword"
          type="password"
          class="Login-forminput w-[315px] py-[12px] pl-[16px]"
          placeholder="••••••••••"
        />
        <!-- Recaptcha -->
        <vue-recaptcha
          class="bg-[#FAFAFA] w-[311px]"
          sitekey="sitekey"
        ></vue-recaptcha>
        <p class="text-[14px] text-[red]" v-if="errMsg">{{ errMsg }}</p>
        <p v-if="errMsg" class="text-[15px] flex items-center gap-[10px] ">
          Royxatdan o'tmanmisiz ?<router-link
            class="text-[12px] underline text-[#2E5BFF]"
            to="register"
            >Royxatdan otish</router-link
          >
        </p>
        <!-- Button -->
        <button
          @click="register"
          type="submit"
          class="Login-btn bg-[#2E5BFF] rounded-[6px] mt-[23px] py-[14px] w-[315px] text-[15px] text-[#FFFFFF]"
        >
          Kirish
        </button>
        <!-- <button
          @click="signInWithGoogle"
          type="submit"
          class="Login-btn bg-[#2E5BFF] rounded-[6px] mt-[23px] py-[14px] w-[315px] text-[15px] text-[#FFFFFF]"
        >
          Google orqali kirish
        </button> -->
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  getAuth,
  signInWithEmailAndPassword,
  // GoogleAuthProvider,
  // signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router";
const userEmail = ref("");
const userPassword = ref("");
const errMsg = ref();
const router = useRouter();
const register = () => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, userEmail.value, userPassword.value)
    .then((data) => {
      console.log(data, "Successfully sign in !");
      console.log(auth.currentUser);
      router.push("/");
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Noto'g'ri email";
          break;
        case "auth/user-not-found":
          errMsg.value = "Bu e-pochtaga ega hisob topilmadi";
          break;
        case "auth/wrong-password":
          errMsg.value = "Noto'g'ri parol";
          break;
        default:
          errMsg.value = "Noto'g'ri email yoki Noto'g'ri parol";
          break;
      }
    });

//     const signInWithGoogle = () => {
//     const provider = new GoogleAuthProvider();
//     signInWithPopup(getAuth(), provider)
//       .then((result) => {
//         console.log(result.user);
//         router.push("/");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
// };
};

// import { email, required, minLength } from 'vuelidate/lib/validators';
// import { VueRecaptcha } from "vue-recaptcha";
// export default {
//   components: { VueRecaptcha },
//   data() {

//   },

//   methods: {
//     Submithandler() {
//       this.$router.push("/");
//     },
//   },
// };
</script>
