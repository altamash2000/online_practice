import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { EyeIcon,MailIcon,PasswordIcon,} from "../../../assets/icon/inputIcon";
import { emailregex, passwordRegex } from "../../../assets/regex";
import CustomButton from "../../../customComponents/button/customButton";
import CustomInput from "../../../customComponents/customTextInput";
import FormFooter from "../../../customComponents/form-footer/form-footer";
import UnderLineText from "../../../customComponents/under-line-text/underLineText";
import { ThemeColors } from "../../../theme/theme";
import CustomCard from "../../../customComponents/card/CustomCard";
import { useTranslation, Trans } from "react-i18next";
import { Formik } from "formik";
const lang = {
  en: { nativeName: "English" },
  hi: { nativeName: "Hindi" },
};

const LoginPage = ({ auth, setAuth, setHeight, height }) => {
  const { t, i18n } = useTranslation();
  const { innerWidth: width } = window;
  const navigate = useNavigate();
  const pathname = useLocation()
  const from = pathname.pathname ? pathname.pathname : "/"
  console.log(from);
  const signUp = () => {
    console.log("innerwidth", width);
    width <= 480 && setHeight(true);
    navigate("sign-up");
  };
  const forgotPass = () => {
    navigate("forgot-password");
  };
  return (
    <section>
      <UnderLineText
        value={{
          heading: t("authPage.greeting"),
          subText: t("authPage.subHeading"),
        }}
      />

      <div>
        {Object.keys(lang).map((lng) => (
          <button
            type="submit"
            key={lng}
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lang[lng].nativeName}
          </button>
        ))}
      </div>
      <CustomCard>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={async (values) => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            alert(JSON.stringify(values, null, 2));
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email()
              .required("Email is Required")
              .matches(emailregex, "Email is not valid"),
            password: Yup.string()
              .required("Password is required")
              .matches(passwordRegex, "Password is not valid"),
          })}
        >
          {(props) => {
            const { touched, errors, handleChange, handleSubmit } = props;
            return (
              <form onSubmit={handleSubmit}>
                <CustomInput
                  name="email"
                  id="email"
                  onChange={handleChange}
                  placeholder="Email Address"
                  type="email"
                  label="Email Address"
                  lefticon={<MailIcon />}
                  righticon={""}
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}
                <CustomInput
                  name="password"
                  id="passowrd"
                  onChange={handleChange}
                  placeholder="Password"
                  label="Password"
                  lefticon={<PasswordIcon />}
                  righticon={<EyeIcon />}
                />
                {errors.password && touched.password && (
                  <div className="input-feedback">{errors.password}</div>
                )}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <p>
                    <input type="checkbox" value="RememberMe" />
                    Remember me
                  </p>
                  <p
                    style={{ color: ThemeColors.primary }}
                    className="pointer"
                    onClick={forgotPass}
                  >
                    Forgot Password?
                  </p>
                </div>
                <CustomButton title="Login" type="submit" />
                <FormFooter
                  leftText="Need An Account?"
                  rightClick={signUp}
                  rightText="Signup"
                />
              </form>
            );
          }}
        </Formik>
      </CustomCard>
    </section>
  );
};

export default LoginPage;
