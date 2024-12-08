import Input from './components/ui/Input';

export default function App() {
  return (
    <div>
      {/* Default Input */}
      <Input label="Default Label" placeholder="Placeholder text" hint="This is a hint text to help user." />

      {/* Disabled Input */}
      <Input
        label="Disabled Label"
        placeholder="Placeholder text"
        hint="This is a hint text to help user."
        isDisabled
      />

      {/* Input with Focus */}
      <Input
        label="Focus Label"
        type="password"
        placeholder="Placeholder text"
        hint="This is a hint text to help user."
      />

      {/* Input with Error */}
      <Input label="Error Label" placeholder="Placeholder text" hint="This is a hint text to help user." hasError />
    </div>
  );
}
