import Alert from "react-bootstrap/Alert";

function ErrorAlert(props) {
  return (
    <Alert variant="danger">
      <p>{props.text}</p>
      <p>{props.error}</p>
    </Alert>
  );
}

export default ErrorAlert;
