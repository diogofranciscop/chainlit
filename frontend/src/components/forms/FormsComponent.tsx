export function FormsComponent() {
  return (
    <form className="space-y-4">
      <span className="font-semibold">
        Nome
        <input
          type="text"
          placeholder="Names"
          className="w-full p-2 border rounded"
        />
      </span>
      <button type="submit" className="bg-primary text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
}
