<script lang="ts">
  export let size: "small" | "large" = "small";
  export let color: "primary" | "secondary" | "success" | "danger" = "primary";
</script>

<div class="crypt-core-input {size} {color}">
  <input {...$$restProps} />
</div>

<style lang="scss">
  @use "core-input";
</style>
