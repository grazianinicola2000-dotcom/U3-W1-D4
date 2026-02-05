import Alert from "react-bootstrap/Alert";

function Welcome() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <Alert className="w-50 mt-3" variant="dark">
          Benvenuto in EpiBook! La tua piattaforma di eBook preferita.
        </Alert>
      </div>
    </>
  );
}

export default Welcome;
