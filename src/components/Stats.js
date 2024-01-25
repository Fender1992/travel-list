export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="footer">
        <em>Start adding items to your packing list 🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      {percentage === 100 ? (
        "You are ready to go ✈️"
      ) : (
        <em>
          You have {numItems} items on your list, and you already packed{" "}
          {numPacked} item(s) ({percentage + "%"})
        </em>
      )}
    </footer>
  );
}
