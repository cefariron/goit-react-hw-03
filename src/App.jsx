import { Formik, Form, Field } from "formik";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1>Phone book</h1>
        <Formik>
          <Form>
            <Field />
            <Field />
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default App;
