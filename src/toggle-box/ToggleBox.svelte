<script lang="ts">
  export let color: "primary" | "secondary" | "success" | "danger" = "primary";
  export let round = false;
</script>

<div class="crypt-toggle-box {color}" class:round>
  <input class="visually-hidden" type="checkbox" {...$$restProps} />
  <label for={$$restProps.id}><slot /></label>
</div>

<style lang="scss">
  @use "./toggle-box";
</style>
