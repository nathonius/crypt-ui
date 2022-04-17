<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import AttributeBar from "../attribute-bar/AttributeBar.svelte";
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
  title="Crypt UI/Attribute Bar"
  component={AttributeBar}
  argTypes={{
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "success", "danger"],
    },
  }}
/>

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
  <div style="width: 300px">
    <AttributeBar
      color={args.color}
      placeholderL="min"
      placeholderR="max"
      valueL={args.valueL}
      valueR={args.valueR}
    />
  </div>
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story
  name="Bar"
  args={{
    color: "primary",
    valueL: "",
    valueR: "",
  }}
/>
