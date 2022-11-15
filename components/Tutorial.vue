<!-- Please remove this file from your project -->
<template>
<div>
  <vue-tabs active-tab-color="#e74c3c"
            active-text-color="white"
            type="pills"
            :start-index="1"
            direction="vertical"
  >
    <v-tab title="First tab" icon="ti-user">
      <h2 class="text-bg-primary">First tab content</h2>
    </v-tab>

    <v-tab title="Second tab" icon="ti-settings">
      Second tab content
    </v-tab>

    <v-tab title="Third tab" icon="ti-check">
      Third tab content
    </v-tab>
  </vue-tabs>
</div>

</template>

<script>
export default {
  name: 'NuxtTutorial',

}
</script>

