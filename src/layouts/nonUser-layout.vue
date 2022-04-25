<template >

   <nav class="header-nav flex items-center justify-around">
    <a href="#" class="header-logo"
      ><img  src="../assets/photos/Logo.png" alt="Logo" />
      <img v-if="false" class="py-[20px]" src="../assets//photos/Logopro.png" alt="Logo pro"
    /></a>
    <ul
      v-if="true"
      class="flex mmd:hidden items-center gap-[40px] pt-[33px] pb-[33px]"
    >
      <li>
        <a class="text-[14px] text-[#28293D] leading-[26px]" href="#">Asosiy</a>
      </li>
      <li>
        <a class="text-[14px] text-[#28293D] leading-[26px]" href="#"
          >Grantlar</a
        >
      </li>
      <li>
        <a class="text-[14px] text-[#28293D] leading-[26px]" href="#"
          >Soliq imtiyozlari</a
        >
      </li>
      <li class="flex gap-x-[7px] cursor-pointer">
        <span
          ><svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.375 3.75H10.875C10.179 3.75074 9.51179 4.02755 9.01967 4.51967C8.52754 5.01179 8.25074 5.67904 8.25 6.375V11.25H15.4392L12.9698 8.78016C12.8351 8.63836 12.7611 8.44955 12.7636 8.25398C12.7661 8.0584 12.8449 7.87155 12.9832 7.73325C13.1215 7.59495 13.3084 7.51614 13.504 7.51364C13.6995 7.51114 13.8884 7.58513 14.0302 7.71984L17.7802 11.4698C17.9207 11.6105 17.9997 11.8012 17.9997 12C17.9997 12.1988 17.9207 12.3895 17.7802 12.5302L14.0302 16.2802C13.8884 16.4149 13.6995 16.4889 13.504 16.4864C13.3084 16.4839 13.1215 16.4051 12.9832 16.2668C12.8449 16.1285 12.7661 15.9416 12.7636 15.746C12.7611 15.5505 12.8351 15.3616 12.9698 15.2198L15.4392 12.75H8.25V17.625C8.25 19.1273 9.83391 20.25 11.25 20.25H18.375C19.071 20.2493 19.7382 19.9725 20.2303 19.4803C20.7225 18.9882 20.9993 18.321 21 17.625V6.375C20.9993 5.67904 20.7225 5.01179 20.2303 4.51967C19.7382 4.02755 19.071 3.75074 18.375 3.75Z"
              fill="black"
            />
            <path
              d="M3.75 11.25C3.55109 11.25 3.36032 11.329 3.21967 11.4697C3.07902 11.6103 3 11.8011 3 12C3 12.1989 3.07902 12.3897 3.21967 12.5303C3.36032 12.671 3.55109 12.75 3.75 12.75H8.25V11.25H3.75Z"
              fill="black"
            /></svg
        ></span>
        <router-link
          class="text-[14px] text-[#28293D] leading-[26px]"
          to="/sign-in"
          >Kirish
        </router-link>
      </li>
      <router-link
        to="/register"
        class="header-nav__btn text-[#3366FF] text-[14px] border-[2px] rounded-[8px] border-[#3366FF] pr-[32px] pl-[32px] pt-[8px] pb-[8px]"
        >Ro‘yxatdan o’tish</router-link
      >
    </ul>
    <div
      @click="sidebar = !sidebar"
      class="nav-hamburger hidden mmd:flex flex-col gap-[5px] cursor-pointer "
    >
      <div
        class="w-[30px] rounded-[6px] bg-black h-[3px] hamburger-line1"
      ></div>
      <div
        class="w-[30px] rounded-[6px] bg-black h-[3px] hamburger-line2"
      ></div>
      <div
        class="w-[30px] rounded-[6px] bg-black h-[3px] hamburger-line3"
      ></div>
    </div>
    <!-- nav type 2 -->
    <div v-if="false" class="flex">
      <div class="flex items-center bg-[#F1F1F3] rounded-[6px]">
        <h3
          class="xs:hidden text-[#28293D] text-[13px] pt-[9px] pb-[11px] pl-[20px] pr-[24px]"
        >
          Shohrux
        </h3>
        <a href="" class=""
          ><svg
            class="px-[5px] pt-[8px] mr-[4px] bg-[#00AE69] rounded-[4px]"
            width="22"
            height="24"
            viewBox="0 0 22 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.621 17.38C14.243 18.118 12.669 18.54 10.998 18.54C9.328 18.54 7.755 18.12 6.377 17.38C3.401 18.162 1.069 20.015 0 24H22C20.931 20.014 18.599 18.161 15.621 17.38ZM11 16C15.418 16 19 12.418 19 8C19 3.582 15.418 0 11 0C6.582 0 3 3.582 3 8C3 12.418 6.582 16 11 16ZM16.349 10.667C15.364 12.635 13.351 14 11 14C8.649 14 6.636 12.635 5.651 10.667H16.349Z"
              fill="#F1F1F3"
            />
          </svg>
        </a>
      </div>
      <a @click="$router.push('/sign-in')" href="" class="pl-[43px]"
        ><svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 16C10 15.7348 10.1054 15.4804 10.2929 15.2929C10.4804 15.1054 10.7348 15 11 15H20V8.5C20 6.5 17.8881 5 16 5H6.5C5.57205 5.00099 4.68238 5.37006 4.02622 6.02622C3.37006 6.68238 3.00099 7.57205 3 8.5V23.5C3.00099 24.428 3.37006 25.3176 4.02622 25.9738C4.68238 26.6299 5.57205 26.999 6.5 27H16.5C17.428 26.999 18.3176 26.6299 18.9738 25.9738C19.6299 25.3176 19.999 24.428 20 23.5V17H11C10.7348 17 10.4804 16.8946 10.2929 16.7071C10.1054 16.5196 10 16.2652 10 16Z"
            fill="#B1B1B8"
          />
          <path
            d="M28.7069 15.2931L23.7069 10.2931C23.5178 10.1135 23.2661 10.0148 23.0053 10.0182C22.7445 10.0215 22.4954 10.1266 22.311 10.311C22.1266 10.4954 22.0215 10.7445 22.0182 11.0053C22.0148 11.2661 22.1135 11.5178 22.2931 11.7069L25.5856 15H20V17H25.5856L22.2931 20.2931C22.1964 20.3851 22.119 20.4954 22.0655 20.6177C22.0121 20.7401 21.9837 20.8718 21.982 21.0053C21.9803 21.1388 22.0053 21.2712 22.0556 21.3949C22.1059 21.5185 22.1804 21.6308 22.2748 21.7252C22.3692 21.8196 22.4815 21.8941 22.6051 21.9444C22.7288 21.9947 22.8612 22.0197 22.9947 22.018C23.1282 22.0163 23.2599 21.9879 23.3822 21.9345C23.5046 21.881 23.6149 21.8036 23.7069 21.7069L28.7069 16.7069C28.8943 16.5194 28.9995 16.2651 28.9995 16C28.9995 15.7349 28.8943 15.4806 28.7069 15.2931Z"
            fill="#B1B1B8"
          />
        </svg>
      </a>
    </div>
  </nav>
  <router-view/>
</template>