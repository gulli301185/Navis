import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useFormik } from "formik";
import closeIcon from "../assets/accadionIcons/close.png";

import { postServiceAsync } from "../api/service";
import { getIntegrationAsync } from "../api/integration";
import IntegrationList from "./IntegrationList";

const Integration = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["service"],
    queryFn: getIntegrationAsync,
  });

  const postServiceMutation = useMutation({
    mutationFn: postServiceAsync,
    onSuccess: () => {
      setIsModalOpen(false);
      // formik.resetForm();
    },
    onError: (error) => {
      console.error("Error submitting service:", error);
    },
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      domain: "",
    },
    enableReinitialize: true,
    onSubmit: (newValue) => {
      postServiceMutation.mutate(newValue);
    },
  });

  const addService = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // formik.resetForm();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching services</div>;
  }

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-5xl font-semibold py-6">Интеграция</h1>
      <div className="w-full rounded-2xl bg-gray-100 p-5 flex flex-col gap-10">
        <div className="lg:flex lg:justify-between  flex-col lg:flex-row mx-auto lg:mx-0">
          <h1 className="lg:text-3xl text-xl font-semibold">Мои сервисы</h1>
          <div className="lg:flex gap-4">
            <button
              onClick={addService}
              className="bg-gradient-to-r from-red-500 to-orange-600 rounded-md py-2 px-5 font-semibold text-lg text-white mx-auto flex items-center justify-center"
            >
              <span className="text-3xl pb-1 pr-5">+</span> Добавить сервис
            </button>
          </div>
        </div>
        <IntegrationList data={data} />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-10 rounded-lg w-1/3">
            <div className="flex justify-around py-3">
              <h2 className="text-2xl font-semibold mb-4">Добавить сервис</h2>
              <img
                onClick={closeModal}
                src={closeIcon}
                alt=""
                className="object-contain w-5 cursor-pointer"
              />
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-6">
                <label className="block text-lg">Название сервиса</label>
                <input
                  type="text"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  className="w-full my-2 p-4 bg-gray-100 rounded-lg"
                  placeholder="Введите название"
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg">Домен</label>
                <input
                  type="text"
                  name="domain"
                  value={formik.values.domain}
                  onChange={formik.handleChange}
                  className="w-full p-4 my-2 bg-slate-100 rounded-lg"
                  placeholder="Домен"
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg">Секретный ключ</label>
                <input
                  type="text"
                  className="w-full p-4 my-2 bg-slate-100 rounded-lg"
                  placeholder="Секретный ключ"
                />
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="bg-orange-600 text-lg font-semibold text-white py-4 w-full rounded-md"
                >
                  {postServiceMutation.isLoading
                    ? "Сохранение..."
                    : "Сохранить и добавить"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Integration;
