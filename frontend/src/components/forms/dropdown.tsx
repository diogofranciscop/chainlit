interface DropdownProps {
  dropdownName: string;
  placeholderName: string;
  list: Array<string>;
}

export function Dropdown({
  dropdownName,
  placeholderName,
  list
}: DropdownProps) {
  return (
    <span className="font-normal inline-block">
      {dropdownName}
      <select
        className="w-full p-2 border rounded mt-1"
        aria-label={placeholderName}
      >
        <option value="" disabled selected>
          {placeholderName}
        </option>
        {list.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </span>
  );
}
