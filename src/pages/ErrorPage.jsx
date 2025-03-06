//Import images
import errorImage from "../assets/404.png"

function ErrorPage() {
  return (
    <>
      <h1>Page not found</h1>
      <img src={errorImage} alt="Error 404"></img>
    </>
  );
}
export default ErrorPage;
