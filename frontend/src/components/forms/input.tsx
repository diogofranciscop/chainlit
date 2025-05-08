interface InputProps {
  inputName: string;
}
export function Input({ inputName }: InputProps) {
  return (
    <span className="font-semibold">
      {inputName}
      <input
        type="text"
        placeholder={inputName}
        className="w-full p-2 border rounded"
      />
    </span>
  );
}
