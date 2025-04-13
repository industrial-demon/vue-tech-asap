<script setup lang="ts">
import {
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  PopoverPortal,
  PopoverRoot,
  PopoverTrigger,
  AvatarImage,
  AvatarRoot,
  AvatarFallback,
} from "reka-ui";

</script>

<template>
  <header class="header" role="">
    <div class="logo">
      <span>Tech</span>
      <span>Asap</span>
    </div>

    <slot name="navigation"></slot>

    <div class="">
      <PopoverRoot>
        <PopoverTrigger class="menu-trigger">
          >
          <AvatarRoot>
            <AvatarImage
              class="avatar-img"
              src="data:image/jpeg;base64,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"
            ></AvatarImage>
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.84241 5.08255L9.96742 0.967773L11.1458 2.14319L5.84241 7.43337L0.539062 2.14319L1.7174 0.967773L5.84241 5.08255Z"
                fill="#2D3436"
              />
            </svg>

            <AvatarFallback />
          </AvatarRoot>
        </PopoverTrigger>
        <PopoverAnchor />
        <PopoverPortal>
          <PopoverContent>
            <PopoverClose />
            <PopoverArrow />
          </PopoverContent>
        </PopoverPortal>
      </PopoverRoot>
    </div>
  </header>
</template>

<style scoped>
.header {
  height: 92px;
  display: flex;
}

.logo {
  background-color: var(--color-main);
  width: 358px;
}

.menu-trigger {
  all: unset;
}

.avatar-img {
  border-radius: 99999px;
  overflow: hidden;
  width: 32px;
  height: 32px;
}
</style>
