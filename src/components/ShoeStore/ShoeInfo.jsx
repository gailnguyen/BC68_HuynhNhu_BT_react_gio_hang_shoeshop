import React from "react";
import "./index.css";

const ShoeInfo = ({ DanhSachSanPham, openModal, showShoeName }) => {
  let styleH2 = "font-bold uppercase text-xl";
  let stylePrice = "text-orange-700 font-bold text-xl";

  return (
    <div className="my-24 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
      {DanhSachSanPham.map((item, index) => {
        // console.log(item);
        return (
          <div className="p-5 border rounded-lg" key={index}>
            <div className="space-y-2">
              {/* thông sản phẩm */}
              <img className="w-full" src={item.image} alt="" />
              <h2 className={styleH2}>{item.name}</h2>
              <p className={stylePrice}>${item.price}</p>
              <p>Description: {item.shortDescription}</p>

              {/* open modal button */}
              <button
                onClick={() => {
                  openModal(item.id);
                }}
                className="px-4 py-2 bg-slate-300 text-gray-900 rounded-md mr-3"
              >
                See Details
              </button>
              <button
                onClick={() => {
                  showShoeName(item.name);
                }}
                className="px-4 py-2 bg-orange-950 text-white rounded-md"
              >
                Add To Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShoeInfo;
