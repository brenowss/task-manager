export async function fetchTasks() {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/todos?_limit=15'
  );
  const data = await response.json();
  return data;
}
