import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TrashIcon } from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";

//image
import Palette from "../../../assets/images/palette.png";

//Redux
import { addToColors, removeFromColors } from "../../../features/panelColorSlice";

const Colorpalette = () => {
  const colors = useSelector((state) => state.colors.colors);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      hex: "",
      colorName: "",
    },
    onSubmit: (values) => {
      dispatch(addToColors({ name: values.colorName, hex: `#${values.hex}` }));
    },
    validationSchema: Yup.object({
      hex: Yup.string()
        .test(6, "باید 6 کاراکتر وارد کنید", (val) => val.length === 6)
        .required("لطفا کد هگز رنگ را وارد کنید"),
      colorName: Yup.string().required("لطفا نام رنگ را وارد کنید"),
    }),
  });

  return (
    <div className="col-span-12 flex items-center justify-center md:col-span-9 lg:col-span-10">
      <div className="flex w-3/4 flex-col justify-center rounded-xl p-5 shadow-xl md:p-10 lg:w-1/2">
        <div className=" flex items-center justify-between">
          <div className="flex">
            <img src={Palette} alt="color" />
          </div>
          <div className="mr-10 flex flex-col">
            <h1 className="mb-4 text-lg drop-shadow-md">رنگ های موجود :</h1>
            <div className="flex h-14 w-60 flex-wrap gap-2 overflow-scroll">
              {colors.map((color, id) => (
                <div key={id} className="flex h-fit w-24 items-center justify-between gap-x-2 rounded-md bg-white p-1 shadow-md">
                  <div style={{ backgroundColor: color.hex }} className="flex items-center justify-center rounded-md p-1">
                    <TrashIcon onClick={() => dispatch(removeFromColors(color))} className="h-4 w-4 cursor-pointer  text-white transition-all hover:text-red-100" />
                  </div>
                  <p className="text-sm ">{color.name}</p>
                </div>
              ))}
            </div>
            <form className="mt-4 flex flex-col " onSubmit={formik.handleSubmit}>
              <div className="mb-4 flex flex-col">
                <label className="mb-2 text-orange-500 drop-shadow-sm" htmlFor="colorName">
                  عنوان رنگ:
                </label>
                <input autoComplete="off" className="border-b-2 bg-transparent py-1 text-sm focus:outline-none" id="colorName" {...formik.getFieldProps("colorName")} placeholder="مانند : نارنجی" />
                {formik.touched.colorName && formik.errors.colorName ? <p className="mt-1 text-sm text-red-400">{formik.errors.colorName}</p> : null}
              </div>
              <div className="mb-4 flex flex-col">
                <label className="mb-2 text-orange-500 drop-shadow-sm" htmlFor="hex">
                  کد هگز:
                </label>
                <input autoComplete="off" className="border-b-2 bg-transparent py-1 text-sm focus:outline-none " id="hex" {...formik.getFieldProps("hex")} placeholder="مانند : d4ac0d" />
                {formik.touched.hex && formik.errors.hex ? <p className="mt-1 text-sm text-red-400">{formik.errors.hex}</p> : null}
              </div>
              <button className="rounded-md bg-slate-600 p-2 text-white shadow-md transition-all hover:bg-slate-400" type="submit">
                افزدون
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colorpalette;
