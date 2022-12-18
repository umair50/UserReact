import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

import axios from "axios";
const Index = () => {
  const [data, setData] = useState("");
  const { addToast } = useToasts();

  const DeleteUser = async (id) => {
    const api = axios.create({
      baseURL: `http://192.168.100.28:3000/user/${id}`,
    });
    const datas = {
      id: id,
    };
    const resp = await api.post("", datas);
    if (resp.status === 200) {
      debugger;
      addToast("USer Data Delted Sucessfully", {
        appearance: "success",
        autoDismiss: true,
      });
      collectData();
    }
    window.location.reload(true);
  };

  const collectData = async () => {
    const api = axios.create({
      baseURL: "http://192.168.100.28:3000/user",
    });

    const resp = await api.get("");
    if (resp.status === 200) {
      setData(resp.data);
    }
  };

  useEffect(() => {
    collectData();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full border-collapse">
              <thead className="bg-white border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-poppinsBold font-medium text-gray-700 px-6 py-4 text-left"
                  >
                    Full Name
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-poppinsBold font-medium text-gray-700 px-6 py-4 text-left"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-poppinsBold font-medium text-gray-700 px-6 py-4 text-left"
                  >
                    Nick Name
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-poppinsBold font-medium text-gray-700 px-6 py-4 text-left"
                  >
                    Birthday
                  </th>

                  <th
                    scope="col"
                    className="text-sm font-poppinsBold font-medium text-gray-700 px-6 py-4 text-left"
                  >
                    Gender
                  </th>

                  <th
                    scope="col"
                    className="text-sm font-poppinsBold font-medium text-gray-700 px-6 py-4 text-left"
                  ></th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((d, index) => (
                    <tr
                      className="bg-white font-poppinsMediumi border-b transition duration-300 ease-in-out hover:bg-gray-100"
                      key={index}
                    >
                      <td className="text-base font-poppinsMediumi text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                        {d.full_name}
                      </td>
                      <td className="text-base font-poppinsMediumi text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                        {d.email}
                      </td>
                      <td className="text-base font-poppinsMediumi text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                        {d.nick_name}
                      </td>
                      <td className="text-base font-poppinsMediumi text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                        {d.dob}
                      </td>
                      <td className="text-base font-poppinsMediumi text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                        {d.gender === "Male" && (
                          <button className="px-2 py-2 bg-green-500 text-sm text-white rounded-xl cursor-none">
                            {d.gender}
                          </button>
                        )}
                        {d.gender === "Women" && (
                          <button className="px-2 py-2 bg-pink-500 text-sm text-white rounded-xl cursor-none">
                            {d.gender}
                          </button>
                        )}
                      </td>

                      <td className="text-base font-poppinsMediumi text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                        <div className="flex justify-center gap-x-5">
                          <button className="px-2 py-2 rounded-xl text-base text-white bg-green-700">
                            search
                          </button>

                          <Link
                            to={`/edit_user/${d.id}`}
                            className="px-2 py-2 rounded-xl text-base text-white bg-orange-500"
                          >
                            {" "}
                            Edit
                          </Link>
                          <button
                            className="px-2 py-2 rounded-xl text-base text-white bg-red-600"
                            onClick={() => {
                              DeleteUser(d.id);
                            }}
                          >
                            delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
