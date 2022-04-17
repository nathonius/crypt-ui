<svelte:options tag={null} />

<script lang="ts">
  export let color: "primary" | "secondary" | "success" | "danger" = "primary";
  export let valueL: string = "";
  export let valueR: string = "";
  export let nameL: string = "";
  export let nameR: string = "";
  export let placeholderL: string = "";
  export let placeholderR: string = "";
  export let rtl: boolean = false;
</script>

<div class="crypt-attribute-bar {color}" class:rtl>
  <progress value={valueL} max={valueR} />
  <input
    type="text"
    class="attribute-value left"
    value={valueL}
    name={nameL}
    placeholder={placeholderL}
  />
  <span class="slash">/</span>
  <input
    type="text"
    class="attribute-value right"
    value={valueR}
    name={nameR}
    placeholder={placeholderR}
  />
</div>

<style lang="scss">
  @use "attribute-bar";
</style>
