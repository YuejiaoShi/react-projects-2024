export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="footer">
        <em>Start adding some items to your list!</em>
      </p>
    );
  }

  const numItems = items.length;
  const numPecked = items.filter((item) => item.packed).length;
  const packedPercent = Math.round((numPecked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {packedPercent === 100
          ? "You got everything packed. Ready to go ✈️"
          : `You have ${numItems} items on your list, and you already packed ${numPecked} items (${packedPercent}%).`}
      </em>
    </footer>
  );
}
