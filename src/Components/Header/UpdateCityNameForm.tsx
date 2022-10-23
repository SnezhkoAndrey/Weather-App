import React from "react";
import { Formik, Form, Field } from "formik";
import style from "./Header.module.css";

type PropsType = {
  updateCityName: (NewCityName: string) => void;
  updateTempType: (NewTempSelect: boolean) => void;
  theme: boolean;
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
            <div className={style.findParams}>
              <div className={style.findListItem}>
                <Field
                  className={
                    props.theme
                      ? `${style.findList} ${style.light}`
                      : style.findList
                  }
                  name={"cityName"}
                  type={"text"}
                  placeholder="Enter your city..."
                />
              </div>
              <div className={style.tempOptionItem}>
                <Field
                  className={
                    props.theme
                      ? `${style.tempOption} ${style.light}`
                      : style.tempOption
                  }
                  name="tempType"
                  as={"select"}
                >
                  <option value="true">°C</option>
                  <option value="false">°F</option>
                </Field>
              </div>
            </div>
            <div className={style.buttonFindItem}>
              <button
                className={
                  props.theme
                    ? `${style.buttonFind} ${style.light}`
                    : style.buttonFind
                }
                type={"submit"}
              >
                Find
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
});
