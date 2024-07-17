<template>
  <header
    class="container mx-auto flex justify-between items-center py-4 text-2xl"
  >
    <nav class="flex items-center justify-between w-full">
      <div class="flex items-center gap-2">
        <img src="/images/logo.png" alt="logo" />
        <h1 class="text-2xl text-pretty">Personal</h1>
      </div>
      <ul class="flex justify-center gap-4 text-2xl flex-grow">
        <li><a href="#">About me</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact me</a></li>
      </ul>
      <button
        class="flex justify-between items-center bg-black text-white rounded-md py-2 px-6 gap-2"
      >
        Resume
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
        >
          <g fill="currentColor">
            <path
              d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"
            />
            <path
              d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"
            />
          </g>
        </svg>
      </button>
    </nav>
  </header>
</template>

<script></script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
nav {
  width: 100%;
}
ul {
  margin: 0 auto;
}
</style>
