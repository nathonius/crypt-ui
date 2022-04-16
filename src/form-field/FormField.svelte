<script lang="ts">
  export let label: string = "";
  export let mode: "default" | "stacked" | "full" = "default";
</script>

<div class="crypt-form-field {mode}">
  {#if mode !== "full"}
    <label for={$$restProps.id}>{label}</label>
  {/if}
  <input {...$$restProps} />
</div>

<style lang="scss">
  @use "form-field";
</style>
