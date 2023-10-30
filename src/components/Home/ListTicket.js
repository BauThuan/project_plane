import React from "react";
import "../../styles/ListTicket.scss";
import "../../styles/root.scss";

const ListTicket = () => {
  const data = [
    {
      image:
        "https://hnm.1cdn.vn/2021/08/22/nhipsonghanoi.hanoimoi.com.vn-uploads-images-phananh-2021-08-19-_kvc.jpg",
      provice: "Hà Nội",
      nation: "Việt Nam",
      startTime: "Ngày 1/11/2023",
      endTime: "Ngày 2/11/2023",
      status: "Bay thẳng",
      price: "2.100.000đ",
    },
    {
      image:
        "https://cdnimg.vietnamplus.vn/t660/uploaded/xpcwvovt/2014_07_08/201487_benthanh1.jpg",
      provice: "TP. Hồ Chí Minh",
      nation: "Việt Nam",
      startTime: "Ngày 1/11/2023",
      endTime: "Ngày 2/11/2023",
      status: "Bay thẳng",
      price: "2.000.000đ",
    },
    {
      image:
        "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/cau-rong-da-nang-thuoc-ban-do-du-lich-da-nang.png",
      provice: "Đà Nẵng",
      nation: "Việt Nam",
      startTime: "Ngày 1/11/2023",
      endTime: "Ngày 2/11/2023",
      status: "Bay thẳng",
      price: "1.900.000đ",
    },
    {
      image:
        "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/cau-rong-da-nang-thuoc-ban-do-du-lich-da-nang.png",
      provice: "Đà Nẵng",
      nation: "Việt Nam",
      startTime: "Ngày 1/11/2023",
      endTime: "Ngày 2/11/2023",
      status: "Bay thẳng",
      price: "1.900.000đ",
    },
    {
      image:
        "https://cdnimg.vietnamplus.vn/t660/uploaded/xpcwvovt/2014_07_08/201487_benthanh1.jpg",
      provice: "TP. Hồ Chí Minh",
      nation: "Việt Nam",
      startTime: "Ngày 1/11/2023",
      endTime: "Ngày 2/11/2023",
      status: "Bay thẳng",
      price: "2.000.000đ",
    },
    {
      image:
        "https://hnm.1cdn.vn/2021/08/22/nhipsonghanoi.hanoimoi.com.vn-uploads-images-phananh-2021-08-19-_kvc.jpg",
      provice: "Hà Nội",
      nation: "Việt Nam",
      startTime: "Ngày 1/11/2023",
      endTime: "Ngày 2/11/2023",
      status: "Bay thẳng",
      price: "2.100.000đ",
    },
  ];
  return (
    <div className="listTicket_container">
      <div className="listTicket_content">
        <h1>Vé máy bay giá rẻ khi khởi hành từ Việt Nam</h1>
        <p>
          Sau đây là các vé máy bay giá rẻ có mức giá thấp nhất. Hãy nhanh tay
          lên – tất cả những chuyến bay này đều khởi hành trong vòng 3 tháng
          tới.
        </p>
        <div className="show_list">
          {data.length > 0 &&
            data.map((item) => {
              return (
                <div>
                  <img src={item.image} />
                  <p>{item.provice}</p>
                  <p>{item.nation}</p>
                  <p>{item.startTime}</p>
                  <p>{item.endTime}</p>
                  <p>{item.status}</p>
                  <p>{item.price}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ListTicket;
