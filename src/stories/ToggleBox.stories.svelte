<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import ToggleBox from "../toggle-box/ToggleBox.svelte";
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
  title="Crypt UI/Toggle Box"
  component={ToggleBox}
  argTypes={{
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "success", "danger"],
    },
  }}
/>

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
  <ToggleBox color={args.color} round={args.round} id="toggle-box">
    {args.placeholder}
  </ToggleBox>
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story
  name="Square"
  args={{
    color: "primary",
    placeholder: "1",
    round: false,
  }}
/>

<Story
  name="Round"
  args={{
    color: "primary",
    placeholder: "1",
    round: true,
  }}
/>
