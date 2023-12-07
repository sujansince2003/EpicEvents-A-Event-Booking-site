import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// arrays of country for select input options
const countries = [
  "Nepal",
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
];
// to get current date in year-month-day format
function getFormattedDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Adding 1 to month because it starts from 0
  const day = String(today.getDate()).padStart(2, "0"); // Getting the day and padding it with zero if needed

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}
/**
 * this component renders the form for user.it include form validations
 *
 *
 * @challanges faced
 *   Form validation : for form validation i used react-Hook-form which helps to validate the input data and get the input data object.this also helps to handle form submission event.with form validation user cannot redirect to another page until form is validated.useNavigate is used to redirect to Invoice PDF.the data from form is set to userinfo so that invoice can be rendered based on it
 *
 *
 *   Handling form submission from button outside the form element ::: this was quite simple but it took me long time to figure out.simple solution was giving id to form element and again using that id in button to hanlde submit from button that is in Ordersummary component.
 *
 *
 * @param {function} setuserinfo   set the user info from the form data
 * @param  {function}  createOrdersummary  create data related to price,ticketnumber etc
 * @returns
 */
function FormComp({ setuserinfo, createOrdersummary }) {
  const navigate = useNavigate();
  // handling form validation with react-hook-form
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  function onSubmit(data) {
    const currentDate = getFormattedDate();
    const updatedData = {
      ...data,
      currentDate,
    };
    setuserinfo(updatedData);
    createOrdersummary();

    console.log(data);
    if (Object.keys(errors).length === 0) {
      // Form is valid, navigate to the desired route
      navigate("invoice");
      console.log("hello");
    }
  }
  return (
    <>
      <form id="a-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-1">
          <label className="label-text">Full name*</label> <br />
          <input
            type="text"
            //   id="fname"
            //   name="fname"
            className="full-width-input"
            placeholder="eg:john doe"
            {...register("fname", {
              required: "Enter the name",
              pattern: {
                value: /^[A-Za-z]+(?:\s[A-Za-z]+)+$/,
                message: "Invalid format: Only alphabetical characters allowed",
              },
            })}
          />
          {errors.fname && (
            <span className="form-error">{errors.fname.message}</span>
          )}
        </div>
        <div className="form-half">
          <div className="form-1">
            <label className="label-text">E-mail*</label> <br />
            <input
              type="text"
              name="email"
              className="half-width-input"
              placeholder="eg:johndoe02@gmail.com"
              {...register("email", {
                required: true,
                pattern: {
                  // Regex pattern for email validation
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span className="form-error">{errors.email.message}</span>
            )}
          </div>
          <div className="form-1">
            <label className="label-text">Address*</label> <br />
            <input
              type="text"
              name="address"
              className="half-width-input"
              placeholder="eg:Butwal,Rupandehi"
              {...register("address", { required: true })}
            />
            {errors.address && (
              <span className="form-error">This field is required</span>
            )}
          </div>
        </div>
        <div className="form-half">
          <div className="form-1">
            <label className="label-text">Country*</label> <br />
            <select
              name="country"
              className="half-width-input"
              {...register("country", { required: "Select the country" })}
            >
              <option value="">Select Country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {errors.country && (
              <span className="form-error">{errors.country.message}</span>
            )}
          </div>
          <div className="form-1">
            <label className="label-text">State</label> <br />
            <input
              type="text"
              name="state"
              className="half-width-input"
              placeholder="eg:Lumbini"
              {...register("state")}
            />
          </div>
        </div>
        <div className="form-half">
          <div className="form-1">
            <label className="label-text">City*</label> <br />
            <input
              type="text"
              name="city"
              className="half-width-input"
              placeholder="eg:butwal"
              {...register("city", { required: true })}
            />
            {errors.city && (
              <span className="form-error">This field is required</span>
            )}
          </div>
          <div className="form-1">
            <label className="label-text">Zip/Postal Code*</label> <br />
            <input
              type="text"
              name="zipcode"
              className="half-width-input"
              placeholder="eg:32900"
              {...register("zipcode", {
                required: true,
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Invalid  format, only digits are allowed",
                },
              })}
            />
            {errors.zipcode && (
              <span className="form-error">{errors.zipcode.message}</span>
            )}
          </div>
        </div>
      </form>
    </>
  );
}

export default FormComp;
