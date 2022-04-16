<script lang="ts">
  export let color: "primary" | "secondary" | "success" | "danger" = "primary";
  export let round: boolean = false;
</script>

<button class="crypt-button {color}" class:round {...$$restProps}>
  <slot />
</button>

<style lang="scss">
  @use "button";
</style>
