<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Button from "../button/Button.svelte";
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
  title="Crypt UI/Button"
  component={Button}
  argTypes={{
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "success", "danger"],
    },
    onClick: { action: "onClick" },
  }}
/>

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
  <Button color={args.color} on:click={args.onClick} round={args.round}>
    {args.label}
  </Button>
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story
  name="Square"
  args={{
    color: "primary",
    label: "Button",
    round: false,
  }}
/>

<Story
  name="Round"
  args={{
    color: "primary",
    label: "Button",
    round: true,
  }}
/>
