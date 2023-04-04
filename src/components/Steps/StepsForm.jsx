import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

const stepsFormSchema = Yup.object({
  date: Yup.string().required("Обязательное поле"),
  kilometers: Yup.number()
    .typeError("Должно быть число")
    .positive("Должно быть положительное число")
    .required("Обязательное поле"),
});

const StepsForm = ({ onAddStep }) => {
  const maxDate = new Date().toISOString().split("T")[0];

  const addStep = (values, actions) => {
    const { date, kilometers } = values;

    actions.resetForm();

    const newStep = {
      date: new Date(date),
      kilometers,
      id: nanoid(),
    };

    onAddStep(newStep);
  };

  return (
    <Formik
      initialValues={{ date: "", kilometers: "" }}
      validationSchema={stepsFormSchema}
      onSubmit={addStep}
    >
      <Form className="steps-form">
        <div className="form-group">
          <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
          <Field className="form-field" type="date" name="date" max={maxDate} />
          <p className="error-text">
            <ErrorMessage name="date" />
          </p>
        </div>
        <div className="form-group">
          <label htmlFor="kilometers">Пройдено км</label>
          <Field className="form-field" type="number" name="kilometers" />
          <p className="error-text">
            <ErrorMessage name="kilometers" />
          </p>
        </div>
        <button className="steps-form__submit-btn" type="submit">
          OK
        </button>
      </Form>
    </Formik>
  );
};

StepsForm.propTypes = {
  onAddStep: PropTypes.func.isRequired,
};

export default StepsForm;
