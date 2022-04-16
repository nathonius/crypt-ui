<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import CoreInput from "../core-input/CoreInput.svelte";
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
  title="Crypt UI/Core Input"
  component={CoreInput}
  argTypes={{
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "success", "danger"],
    },
    size: { control: { type: "select" }, options: ["small", "large"] },
  }}
/>

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
  <CoreInput {...args} />
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story
  name="Small"
  args={{
    color: "primary",
    size: "small",
    placeholder: "0%",
  }}
/>

<Story
  name="Large"
  args={{
    color: "primary",
    size: "large",
    placeholder: "0%",
  }}
/>
