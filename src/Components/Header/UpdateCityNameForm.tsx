import React from "react";
import { Formik, Form, Field } from "formik";
import style from "./Header.module.css";

type PropsType = {
  updateCityName: (NewCityName: string) => void;
  updateTempType: (NewTempSelect: boolean) => void;
};

export const UpdateCityNameForm: React.FC<PropsType> = React.memo((props) => {
  return (
    <Formik
      enableReinitialize
      initialValues={{
        cityName: "",
        tempType: "true",
      }}
      onSubmit={(values) => {
        if (values.cityName.length >= 1) {
          props.updateCityName(values.cityName);
        }
        if (values.tempType === "true") {
          props.updateTempType(true);
        } else {
          props.updateTempType(false);
        }
      }}
    >
      {({}) => (
        <Form>
          <div className={style.findForm}>
            <div>
              <Field
                className={style.findList}
                name={"cityName"}
                type={"text"}
                placeholder="Enter your city..."
              />
            </div>
            <div>
              <Field className={style.tempOption} name="tempType" as={"select"}>
                <option value="true">°C</option>
                <option value="false">°F</option>
              </Field>
            </div>
            <div>
              <button className={style.buttonFind} type={"submit"}>
                Find
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
});
