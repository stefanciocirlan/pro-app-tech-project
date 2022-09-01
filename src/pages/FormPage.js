import { Formik, Field, Form } from "formik";

const FormPage = () => {
  return (
    <div className="w-full max-w-md space-y-8">
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
        Insert User
      </h2>
      <Formik
        initialValues={{
          birthYear: "",
          email: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className="mt-8 space-y-6">
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="birthYear" className="sr-only">
                Birth Year
              </label>
              <Field
                id="birthYear"
                name="birthYear"
                placeholder="Birth Year"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <Field
            id="email"
            name="email"
            placeholder="Email"
            type="email"
            className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          />
          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center bg-gray-800 text-gray-300 hover:bg-gray-500 font-semibold hover:text-white py-2 px-4 border rounded-md text-base font-medium "
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default FormPage;
