import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const StepsForm = () => {
  const addStep = (values, actions) => {
    const { date, kilometers } = values;
    actions.resetForm();
    
    return {
      date: new Date(date),
      kilometers,
    };
  };

  const stepsFormSchema = Yup.object({
    date: Yup.string().required("Обязательное поле"),
    kilometers: Yup.number()
      .typeError("Должно быть число")
      .positive("Должно быть положительное число")
      .required("Обязательное поле"),
  });

  return (
    <Formik
      initialValues={{ date: "", kilometers: "" }}
      validationSchema={stepsFormSchema}
      onSubmit={addStep}
    >
      <Form className="steps-form">
        <div className="form-group">
          <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
          <Field className="form-field" type="date" name="date" />
          <p className="error-text">
            <ErrorMessage name="date" />
          </p>
        </div>
        <div className="form-group">
          <label htmlFor="kilometers">Пройдено км</label>
          <Field className="form-field" type="text" name="kilometers" />
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

export default StepsForm;
