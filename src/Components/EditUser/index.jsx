import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useToasts } from "react-toast-notifications";

const Index = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [nick_name, setNickName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const { addToast } = useToasts();

  useEffect(() => {
    const editUserId = async (e) => {
      try {
        const api = axios.create({
          baseURL: `http://192.168.100.28:3000/user/${id}`,
        });

        const add_user = {
          full_name: full_name,
          email: email,
          nick_name: nick_name,
          dob: dob,
          gender: gender,
        };

        const resp = await api.get("", add_user);
        if (resp.status === 200) {
          setFullName(...full_name, resp.data.full_name);
          setEmail(...email, resp.data.email);
          setDob(...dob, resp.data.dob);
          setNickName(...nick_name, resp.data.nick_name);
          setGender(...gender, resp.data.gender);
          return;
        }
      } catch (e) {
        return;
      }
    };
    editUserId();
  }, []);

  const updateUser = async (e) => {
    try {
      const api = axios.create({
        baseURL: "http://192.168.100.28:3000/user",
      });

      const add_user = {
        id: id,
        full_name: full_name,
        email: email,
        nick_name: nick_name,
        dob: dob,
        gender: gender,
      };

      const resp = await api.put("", add_user);

      if (resp.status === 200) {
        addToast("USer Update Sussefully", {
          appearance: "success",
          autoDismiss: true,
        });
        navigate("/userdata");

        return;
      }
    } catch (e) {
      return;
    }
  };

  return (
    <>
      <div className="flex justify-center font-poppinsMedium pt-10">
        Edit User
      </div>

      <div className="w-full flex justify-center items-center h-[40rem] ">
        <div className="form-container flex justify-center">
          <div
            className="bg-white shadow-md rounded px-8 pt-8 pb-8"
            // onSubmit={() => {
            //   addUser();
            // }}
          >
            <div className="form-header flex justify-between items-start">
              <div>
                <h1 className="font-poppinsBold text-blue-900 font-semibold text-2xl">
                  Update User
                </h1>
                <span className="font-poppinsMedium text-gray-800 font-semibold">
                  It's quick and easy.
                </span>
              </div>
            </div>
            <hr className="mt-2 border-t-4" />
            <div className="flex justify-center gap-5 pt-4">
              <input
                type="text"
                value={full_name}
                placeholder="Full Name"
                className="flex border bg-slate-100 border-stone-900 font-poppinsMedium px-8 py-2 rounded-lg"
                required="required"
                onChange={(e) => setFullName(e.target.value)}
              />
              <input
                type="text"
                value={nick_name}
                placeholder="Nick Name"
                className="flex border bg-slate-100 border-stone-900 font-poppinsMedium px-8 py-2  rounded-lg"
                required="required"
                onChange={(e) => setNickName(e.target.value)}
              />
            </div>
            <div className="pt-4">
              <input
                type="email"
                value={email}
                placeholder="Email Address"
                required="required"
                className="flex border w-full bg-slate-100 border-stone-900 font-poppinsMedium px-8 py-2  rounded-lg"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex pt-2 gap-1">
              <div className="text">
                <span className="font-poppinsMedium text-gray-800 font-semibold">
                  Date of birth
                </span>
              </div>
            </div>

            <div className="pt-0 flex justify-between items-center">
              <div className="day">
                <input
                  type="date"
                  value={dob}
                  className="flex border bg-slate-100 border-stone-900 font-poppinsMedium px-8 py-2  rounded-lg"
                  required="required"
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
            </div>

            <div className="flex pt-2 gap-1">
              <div className="text">
                <span className="font-poppinsMedium text-gray-800 font-semibold">
                  Gender
                </span>
              </div>
            </div>

            <div className="pt-0 flex justify-between items-center">
              <select
                className="pt-2 flex items-center border-stone-900 border-[1px]  bg-slate-100 border-solid gap-9 px-7 py-2"
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="Select"> Select Gender</option>
                <option value="Male">Male</option>
                <option value="Women">Women</option>
              </select>
            </div>

            <div className="flex justify-center pt-9">
              <button
                className="bg-green-500 hover:bg-blue-400 text-white font-bold py-2 px-16 cursor-pointer rounded"
                onClick={() => {
                  updateUser();
                }}
              >
                Update User
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;
