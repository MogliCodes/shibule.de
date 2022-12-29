<template>
  <header class="pt-4 absolute w-full">
    <BaseContainer>
      <div class="max-w-2xl mx-auto flex justify-between items-center">
        <NuxtLink active-class="font-bold" to="/about">Über Shibulé</NuxtLink>
        <NuxtLink active-class="font-bold" to="/projects">Projekte</NuxtLink>
        <NuxtLink to="/">
          <img class="w-20 mx-auto" src="~/public/img/shibule_logo_white.svg" />
        </NuxtLink>
        <NuxtLink active-class="font-bold" to="/brands">Brands</NuxtLink>
        <NuxtLink active-class="font-bold">Mottenkiste</NuxtLink>
      </div>
    </BaseContainer>
    <TheColorSwitch />
  </header>
</template>
