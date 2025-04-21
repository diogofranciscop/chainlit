export function YourFormComponent() {
  return (
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Name"
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="bg-primary text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
}
