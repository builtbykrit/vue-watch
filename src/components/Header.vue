<template>
  <div class="grid-container one-four-one header-container">
    <div class="text-2xl font-bold pl-12">
      <span aria-hidden="true">👀</span> Vue Watch
    </div>
    <div class="relative w-full py-4 px-4 bg-black rounded-full">
      <input
        autocomplete="disabled"
        autocorrect="false"
        spellcheck="false"
        ref="input"
        class="input"
        :class="[
          {'input--filled': value.length > 0},
        ]"
        v-model="value"/>
      <div class="icon-label-wrapper">
        <svg class="search-icon" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <!-- eslint-disable-next-line -->
          <path  fill-rule="evenodd" clip-rule="evenodd" d="M10 .5C4.7533.5.5 4.7533.5 10s4.2533 9.5 9.5 9.5c2.1132 0 4.0652-.69 5.6431-1.8569l3.2963 3.2963c.5857.5857 1.5355.5857 2.1213 0 .5858-.5858.5858-1.5356 0-2.1214l-3.3156-3.3155C18.8501 13.9499 19.5 12.0508 19.5 10c0-5.2467-4.2533-9.5-9.5-9.5zM3.5 10c0-3.5899 2.9101-6.5 6.5-6.5s6.5 2.9101 6.5 6.5-2.9101 6.5-6.5 6.5-6.5-2.9101-6.5-6.5z"/>
        </svg>
        <label class="input__label">Search Vue plugins<span aria-hidden="true">...</span></label>
      </div>
    </div>
    <div class="text-lg font-bold pr-12 text-right">
      About
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      value: '',
    };
  },
};
</script>
<style lang="scss" scoped>
.header-container {
  @apply bg-gray-900 text-white py-6 items-center;
}

.icon-label-wrapper {
  @apply absolute top-0 left-0 py-4 px-4 flex items-center opacity-50 pointer-events-none;
  transition: opacity 0.2s ease-out;
}

.search-icon {
  @apply fill-current w-5 h-5 opacity-100 pointer-events-none;
}

.input__label {
  @apply text-lg text-white not-italic pointer-events-none opacity-100 pointer-events-none ml-3;
  transition: opacity 0.2s ease-out;
}

.input {
  @apply w-full text-lg text-white bg-black pl-8;

  &:focus {
    @apply outline-none;
  }
}

.input:focus + .icon-label-wrapper,
.input--filled + .input__label {
  @apply opacity-100;
}

.input:focus + .icon-label-wrapper > .input__label,
.input--filled + .icon-label-wrapper > .input__label {
  @apply opacity-0;
}

</style>
