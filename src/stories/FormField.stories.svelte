<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import FormField from "../form-field/FormField.svelte";
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
  title="Crypt UI/Form Field"
  component={FormField}
  argTypes={{
    mode: {
      control: { type: "select" },
      options: ["default", "stacked", "full"],
    },
  }}
/>

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
  <div style="width: 300px">
    <FormField
      mode={args.mode}
      id="form-field"
      label={args.label}
      placeholder={args.placeholder}
    />
  </div>
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story
  name="Default"
  args={{
    mode: "default",
    placeholder: "Enter your name",
    label: "Name",
  }}
/>

<Story
  name="Stacked"
  args={{
    mode: "stacked",
    placeholder: "Enter your name",
    label: "Name",
  }}
/>

<Story
  name="Full"
  args={{
    mode: "full",
    placeholder: "Search",
  }}
/>
