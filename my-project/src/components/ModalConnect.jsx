import PropTypes from "prop-types";
import {  useState } from "react";

export function Connect({ show, onClose = () => { } }) {
    const [connected, setConneted] = useState(false);
    if (!show) return null;
    const handleConnect = () => {
        const connect = true;
        setConneted(true);
        window.localStorage.setItem("connect", connect);
        window.location.href = "/dashboard"; 
    };
console.log(connected);
    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-white w-[800px] h-[500px] rounded-xl shadow-lg">
                <div className="flex justify-end">
                    <button onClick={onClose} className=" text-red-500 mt-[14px] fixed font-bold text-xl rounded-full">
                        ×
                    </button>
                </div>
                {/* Content */}
                <div className=" grid grid-cols-12 flex h-full ">
                    <div className="col-span-5 bg-blue-200 h-full rounded-xl">
                        <h3 className="ml-[24px] mt-[24px] text-[#000] font-bold text-[23px]">Kết nối 1 chiếc ví</h3>
                        <div className="list-wallet mb-[24px] ">
                            <h3 className="ml-[24px]  text-[#6d6d6b] font-bold ">Đề xuất</h3>
                            <ul className="text-[#000] font-bold text-[18px] ml-[24px] m-2 flex flex-col gap-2 text-left">
                                <li>Rainbow</li>
                                <li>MetaMask</li>
                                <li>OKX Wallet</li>
                            </ul>
                        </div>
                        <div className="list-wallet">
                            <h3 className="ml-[24px] text-[#6d6d6b] font-bold ">Khác</h3>
                            <ul className="text-[#000] font-bold text-[18px] ml-[24px] m-2 flex flex-col gap-2 text-left">
                                <li>Coinbase Wallet</li>
                                <li>Wallet Connect</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-span-7  h-full p-4 rounded-xl flex flex-col items-center justify-around">
                        <h3 className="text-[#000] font-bold text-[25px] mt-[24px]">Ví là gì?</h3>
                        <div className="text-[#000] w-[300px] text-left text-[15px]">
                            <h3 className="text-[#000] font-bold text-[16px]">Ngôi nhà cho tài sản số của bạn</h3>
                            <p className="">Ví được sử dụng để gửi, nhận, lưu trữ và hiển thị các tài sản số như Ethereum và NFT.</p>
                        </div>
                        <div className="text-[#000] w-[300px] text-left">
                            <h3 className="text-[#000] font-bold text-[16px]">Một cách mới để đăng nhập</h3>
                            <p>Thay vì tạo tài khoản và mật khẩu mới trên mỗi trang web, chỉ cần kết nối ví của bạn.</p>
                        </div>
                        <button className="text-[#000] bg-[#175188]" onClick={handleConnect}>Connected</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
Connect.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};