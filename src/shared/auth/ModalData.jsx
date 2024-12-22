import { Modal, TextInput } from "@mantine/core";
import { postForgotPassword } from "../../api/changePassword";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";

// eslint-disable-next-line react/prop-types
const ModalData = ({ close, opened }) => {
  const validationSchema2 = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (newValues) => {
      postForgotPasswordQuery.mutate(newValues);
    },
    validationSchema: validationSchema2,
  });

  const postForgotPasswordQuery = useMutation({
    mutationFn: postForgotPassword,
    onSuccess: () => {},
    onError: (error) => {
      console.log(error);
    },
  });
  return (
    <Modal opened={opened} onClose={close} title="Authentication">
      <form action="" onSubmit={formik.handleSubmit}>
        <TextInput
          styles={{
            input: {
              backgroundColor: "#f7f7f7",
              color: "#6b7280",
              padding: "25px",
              borderRadius: "8px",
              border: "none",
              fontSize: "14px",
              marginBottom: "10px",
            },
          }}
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="e-mail"
          error={
            formik.errors.email && formik.touched.email && formik.errors.email
          }
        />

        <button
          type="submit"
          className="w-full bg-red-600 py-3 rounded-xl my-4 text-white"
        >
          отправить
        </button>
      </form>
    </Modal>
  );
};

export default ModalData;
