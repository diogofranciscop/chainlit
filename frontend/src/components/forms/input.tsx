interface InputProps {
  inputName: string;
  placeholderName: string;
}
export function Input({ inputName, placeholderName }: InputProps) {
  return (
    <span className="font-semibold">
      {inputName}
      <input
        type="text"
        placeholder={placeholderName}
        className="w-full p-2 border rounded"
      />
    </span>
  );
}
