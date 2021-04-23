# API Notes use MYSQL

## Data tables

Notes

- id
- label_id
- title
- description
- favorite
- created_at
- updated_at

Labels

- id
- title
- description
- created_at
- updated_at


# Features

- [ ] Agregar usuarios para poder mostrar los labels del usuario
- [ ] Crear tabla users, campos: id, disp
- [ ] Vincular tabla users a las tablas notes y labels

# Fix

- [x] Si la nota actualizar no tiene el label que había seleccionado entonces elimina
el registro de la tabla notes_labels
