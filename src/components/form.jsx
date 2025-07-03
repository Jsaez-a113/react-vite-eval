import React, { useState, useEffect } from 'react';

function Form({ addOrUpdateItem, itemToEdit }) {
  const [form, setForm] = useState({
    nombre: '',
    asignatura: '',
    promedio: ''
  });

  useEffect(() => {
    if (itemToEdit) {
      setForm({
        nombre: itemToEdit.nombre,
        asignatura: itemToEdit.asignatura,
        promedio: itemToEdit.promedio
      });
    } else {
      setForm({ nombre: '', asignatura: '', promedio: '' });
    }
  }, [itemToEdit]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nota = parseFloat(form.promedio);

    if (!form.nombre || !form.asignatura || !form.promedio) {
      alert('Todos los campos son obligatorios');
      return;
    }

    if (isNaN(nota) || nota < 1 || nota > 7) {
      alert('El promedio debe estar entre 1.0 y 7.0');
      return;
    }

    addOrUpdateItem(form);
    setForm({ nombre: '', asignatura: '', promedio: '' });
  };

  return (
    <div style={styles.card}>
      <form onSubmit={handleSubmit}>
        <input
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
        />
        <input
          name="asignatura"
          placeholder="Asignatura"
          value={form.asignatura}
          onChange={handleChange}
        />
        <input
          name="promedio"
          type="number"
          step="0.1"
          placeholder="Promedio"
          value={form.promedio}
          onChange={handleChange}
        />
        <button type="submit">
          {itemToEdit ? 'Actualizar' : 'Agregar'}
        </button>
      </form>
    </div>
  );
}

const styles = {
  card: {
    background: '#ffffff',
    padding: '1.5rem',
    marginBottom: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
  }
};

export default Form;