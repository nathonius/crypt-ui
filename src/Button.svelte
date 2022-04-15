<script lang="ts">
  export let color: "primary" | "secondary" | "success" | "danger" = "primary";
  export let round: boolean = false;
</script>

<button class="crypt-button {color}" class:round>
  <slot />
</button>

<style lang="scss">
  @use "theme.scss";
  @use "button.scss";
</style>
