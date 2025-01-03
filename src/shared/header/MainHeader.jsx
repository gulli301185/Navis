import logoIcon from "../../assets/headerIcons/logo (3).png";
import Navbar from "./ui/Navbar";
import { Link, NavLink } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getProfileAsync } from "../../api/profil";
import mainHeaderIcon from "../../assets/headerIcons/sign.png";
import { NativeSelect } from "@mantine/core";
import { useLanguage } from "../../store/language";
import { IconChevronDown } from "@tabler/icons-react";

const MainHeader = () => {
  const { language, setLanguage } = useLanguage((state) => state);

  const { data } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfileAsync,
  });

  return (
    <div className="border-b-2 border-gray-300  " id="header">
      <div className="container mx-auto flex items-center justify-between">
        <div className="py-1.5">
          <NavLink to="/" className="">
            <img src={logoIcon} alt="*" className="w-[132px]" />
          </NavLink>
        </div>
        <div className="">
          <Navbar />
        </div>
        {!data ? (
          <div className=" flex gap-2">
            <NativeSelect
              size="25px"
              className="text-2xl flex items-center justify-center pr-5"
              rightSection={
                <IconChevronDown
                  style={{
                    width: "25px",
                    height: "25px",
                  }}
                />
              }
              data={[
                { label: "RU", value: "ru" },
                { label: "EN", value: "en" },
                { label: "KG", value: "kg" },
              ]}
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              styles={{
                input: {
                  border: "none",
                  outline: "none",
                },
              }}
            />
            <NavLink
              to="personal"
              className="text-gray-500 rounded-lg py-3 font-semibold px-6 bg-gray-50"
            >
              Войти
            </NavLink>
            <NavLink
              to="register"
              className="text-white bg-black rounded-lg py-3 font-semibold px-6 "
            >
              Создать аккаунт
            </NavLink>
          </div>
        ) : (
          <div className=" flex gap-2">
            <NativeSelect
              size="16px"
              className="text-2xl flex items-center justify-center pr-5"
              rightSection={
                <IconChevronDown
                  style={{
                    width: "25px",
                    height: "25px",
                  }}
                />
              }
              data={[
                { label: "RU", value: "ru" },
                { label: "EN", value: "en" },
                { label: "KG", value: "kg" },
              ]}
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              styles={{
                input: {
                  border: "none",
                  outline: "none",
                },
              }}
            />
            <Link to="/secondHeader">
              <img src={mainHeaderIcon} alt="" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainHeader;
