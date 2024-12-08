import Button from "./components/ui/Button";

export default function App() {
  return (
    <div>
      <Button variant="primary">Primary Button</Button>
      <Button variant="primary" isDisabled>
        Primary Button (Disabled)
      </Button>

      <Button variant="secondary">Secondary Button</Button>
      <Button variant="secondary" isDisabled>
        Secondary Button (Disabled)
      </Button>

      <Button variant="border">Border Button</Button>
      <Button variant="border" isDisabled>
        Border Button (Disabled)
      </Button>
    </div>
  );
}
