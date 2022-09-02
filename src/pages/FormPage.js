import { useFormik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import { AppRoutes } from "../routes/routes";
import { addData, getData } from "../store/localstore";
import { SignupSchema } from "../utils/validation";

const FormPage = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      birthYear: "",
      email: "",
      key: uuid(),
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      const localData = getData();
      console.log(localData)
      const newData = localData ? [...JSON.parse(localData), values] : [values];
      addData(JSON.stringify(newData));
      return navigate(AppRoutes.Root.path);
    },
  });

  return (
    <div className="w-full max-w-md space-y-8">
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
        Insert User
      </h2>

      <form className="mt-8 space-y-4" onSubmit={formik.handleSubmit}>
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <label htmlFor="birthYear" className="sr-only">
              Birth Year
            </label>
            {formik.touched.birthYear && formik.errors.birthYear && (
              <span className="text-red-400">{formik.errors.birthYear}</span>
            )}
            <input
              id="birthYear"
              name="birthYear"
              placeholder="Birth Year"
              onChange={formik.handleChange}
              value={formik.values.birthYear}
              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            {formik.touched.email && formik.errors.email && (
              <span className="text-red-400">{formik.errors.email}</span>
            )}
            <input
              id="email"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="mt-4 group relative flex w-full justify-center bg-gray-800 text-gray-300 hover:bg-gray-500 font-semibold hover:text-white py-2 px-4 border rounded-md text-base font-medium "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPage;
