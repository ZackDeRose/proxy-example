import { Welcome } from './client-components/Welcome';

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  const response = await fetch('http://localhost:4200/api/foo');
  const { message } = await response.json();
  return (
    <>
      <h1>Server Side: {message}</h1>
      <Welcome />;
    </>
  );
}
