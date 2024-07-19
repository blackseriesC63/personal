<template>
  <header
    class="container mx-auto flex flex-col justify-between items-center py-4 text-2xl"
  >
    <nav class="flex items-center justify-between w-full mb-4">
      <div class="flex items-center gap-2">
        <img src="/images/logo.png" alt="logo" />
        <h1 class="text-2xl text-pretty">Personal</h1>
      </div>
      <a
        href="https://drive.google.com/file/d/1mZzz4Tl8do-sxTVO79xhKWPbX2aXuUr8/view?usp=share_link"
      >
        <button
          class="flex justify-between items-center bg-black text-white rounded-md py-2 px-6 gap-2"
        >
          Resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="m12 15.577l-3.539-3.538l.708-.72L11.5 13.65V5h1v8.65l2.33-2.33l.709.719zM6.616 19q-.691 0-1.153-.462T5 17.384v-2.423h1v2.423q0 .231.192.424t.423.192h10.77q.23 0 .423-.192t.192-.424v-2.423h1v2.423q0 .691-.462 1.153T17.384 19z"
            />
          </svg></button
      ></a>
    </nav>
    <ul class="flex justify-center gap-4 text-2xl hidden md:flex">
      <li><a href="#">About me</a></li>
      <li><a href="#">Skills</a></li>
      <li><a href="#">Contact me</a></li>
    </ul>
  </header>
</template>

<script></script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
nav {
  width: 100%;
}
.hidden {
  display: none;
}
@media (min-width: 768px) {
  .container {
    flex-direction: row;
  }
  ul {
    margin: 0 auto;
  }
}
</style>
