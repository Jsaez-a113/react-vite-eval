import React from 'react';
import Item from './item';

function List({ items, deleteItem, editItem, calcularApreciacion }) {
  return (
    <div>
      <h2 style={{ color: '#2c3e50', marginBottom: '1rem' }}>
        Evaluaciones guardadas
      </h2>

      {items.length === 0 ? (
        <p style={{ color: '#888' }}>No hay evaluaciones guardadas aún.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <Item
              key={item.id}
              item={item}
              deleteItem={deleteItem}
              editItem={editItem}
              calcularApreciacion={calcularApreciacion}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default List;
