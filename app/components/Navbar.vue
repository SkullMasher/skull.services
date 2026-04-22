<template>
  <nav
    class="
      sticky top-4 z-10 mx-auto my-4 w-fit rounded-box bg-neutral/20 shadow
      shadow-neutral/60 backdrop-blur-lg
      sm:top-8 sm:my-8
    "
  >
    <ul class="menu menu-horizontal items-center gap-2 text-base">
      <li>
        <NuxtLink to="/" class="group">
          <SvgSkullmasher
            class="size-8 transition-transform duration-300 group-hover:-rotate-12 group-focus:-rotate-12"
            :font-controlled="false" filled
          />
        </NuxtLink>
      </li>
      <li>
        <ThemeDropdown />
      </li>
      <li>
        <a href="#contact" class="group font-semibold">
          <Icon
            name="solar:user-hand-up-broken" size="1.5em" class="
                transition-transform duration-300
                group-hover:rotate-6
                group-focus:rotate-6
              "
          />
          Contact
        </a>
      </li>
    </ul>
  </nav>
</template>
