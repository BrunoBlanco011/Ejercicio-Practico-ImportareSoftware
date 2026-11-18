# Panel de Estadísticas de Jugadores

Ejercicio práctico para Importare, hecho con React, TypeScript y Vite.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abrir http://localhost:5173

Para correr las pruebas: `npm test`

## Qué hice

- Separé la lógica (`domain/`) de la parte visual (`components/`) para poder probarla sin React.
- Para contar los goles usé un `Map`, así no hay ciclos anidados.
- Solo se muestran jugadores activos y se ignoran los goles de jugadores que no existen.
- La tabla filtrada se calcula a partir de los datos y los filtros, no se guarda en el estado.
- El checkbox "Simular error" sirve para probar el mensaje de error y el botón de reintentar.
