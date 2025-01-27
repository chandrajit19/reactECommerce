import { Field, Formik, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import style from "./Contact.module.css";
import axios from "axios";
import Swal from "sweetalert2";

function Contact() {
  const NewValidations = Yup.object({
    name: Yup.string().required("Name is required"),
    age: Yup.number().min(10).max(50).required("Age is required"),
    email: Yup.string().email("Enter a valid email").required("Email is required"),
    country: Yup.string().required("Country is required"),
    comment: Yup.string().max(500).required("Comment is required"),
  });

const handleSubmit=(values, action)=>{
    axios.post("https://formspree.io/f/xleqyrgj", values).
    then((response)=>{
        console.log(response.data)
        // for showing alert
        Swal.fire({
            title: "Success!",
            text: "Your form has been submitted successfully.",
            icon: "success",
            confirmButtonText: "OK",
          });
          
        action.resetForm();
        
    }).catch((error)=>{
        console.log(error)
          // Show error alert
          Swal.fire({
            title: "Error!",
            text: "Something went wrong. Please try again later.",
            icon: "error",
            confirmButtonText: "OK",
          });
    })
}

  return (
    <>
      <div className={`container ${style.contactContainer}`}>
        <div className="row">
          <div className={`col-md-6 ${style.formSection}`}>
            <h2 className={style.formTitle}>Contact Us</h2>
            <Formik
              validationSchema={NewValidations}
              initialValues={{
                name: "",
                age: "",
                email: "",
                country: "INDIA",
                comment: "",
              }}
              onSubmit={(values, action)=>(handleSubmit(values, action))}
               
              
            >
              <Form className={style.contactForm}>
                {/* Name */}
                <label className={style.label}>
                  Name:
                  <Field type="text" name="name" className={style.input} />
                </label>
                <span className={style.error}>
                  <ErrorMessage name="name" />
                </span>

                {/* Age */}
                <label className={style.label}>
                  Age:
                  <Field type="text" name="age" className={style.input} />
                </label>
                <span className={style.error}>
                  <ErrorMessage name="age" />
                </span>

                {/* Country */}
                <label className={style.label}>
                  Country:
                  <Field name="country" as="select" className={style.select}>
                    <option value="">Select your country</option>
                    <option value="Canada">Canada</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="INDIA">INDIA</option>
                  </Field>
                </label>
                <span className={style.error}>
                  <ErrorMessage name="country" />
                </span>

                {/* Email */}
                <label className={style.label}>
                  Email:
                  <Field type="email" name="email" className={style.input} />
                </label>
                <span className={style.error}>
                  <ErrorMessage name="email" />
                </span>

                {/* Comment */}
                <label className={style.label}>
                  Comment:
                  <Field as="textarea" name="comment" className={style.textarea} />
                </label>
                <span className={style.error}>
                  <ErrorMessage name="comment" />
                </span>

                <button type="submit" className={style.submitButton}>
                  Submit
                </button>
              </Form>
            </Formik>
          </div>

          <div className={`col-md-6 ${style.mapSection}`}>
            <h2 className={style.mapTitle}>Find Us Here</h2>
            <div className={style.mapPlaceholder}>
            <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.41941548468193!3d37.77492977975845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064a9f5b9bf%3A0xf5f3d5e5db5e5b89!2sSan%20Francisco!5e0!3m2!1sen!2sus!4v1611243587890!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                ></iframe>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
