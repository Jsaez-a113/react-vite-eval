import React from 'react';

function Item({ item, deleteItem, editItem, calcularApreciacion }) {
  const apreciacion = calcularApreciacion(item.promedio);

  const getBadgeStyle = (apreciacion) => {
    switch (apreciacion) {
      case 'Deficiente':
        return { borderBottom: '3px solid #c0392b', color: '#c0392b' };
      case 'Con mejora':
        return { borderBottom: '3px solid #d35400', color: '#d35400' };
      case 'Buen trabajo':
        return { borderBottom: '3px solid #27ae60', color: '#27ae60' };
      case 'Destacado':
        return { borderBottom: '3px solid #1e3a8a', color: '#1e3a8a' };
      default:
        return {};
    }
  };

  return (
    <div style={styles.card}>
      <div style={styles.info}>
        <p><strong>Alumno:</strong> {item.nombre}</p>
        <p><strong>Asignatura:</strong> {item.asignatura}</p>
        <p><strong>Promedio:</strong> <strong>{item.promedio}</strong></p>
        <p>
          <span style={{ ...styles.badge, ...getBadgeStyle(apreciacion) }}>
            {apreciacion}
          </span>
        </p>
      </div>
      <div style={styles.botones}>
        <button style={styles.editar} onClick={() => editItem(item)}>Editar</button>
        <button style={styles.eliminar} onClick={() => deleteItem(item.id)}>Eliminar</button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: '#ffffff',
    padding: '1rem',
    marginBottom: '1rem',
    borderRadius: '10px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  info: {
    flex: 1,
    textAlign: 'left',
    color: '#2c3e50'
  },
  badge: {
    paddingBottom: '0.2rem',
    borderBottom: '3px solid transparent',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    display: 'inline-block',
    marginTop: '0.5rem',
    textTransform: 'uppercase',
  },
  botones: {
    display: 'flex',
    gap: '0.5rem',
  },
  editar: {
    backgroundColor: '#f1c40f',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  eliminar: {
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};

export default Item;
