import { CalendarDays, Layers3, MessageCircleMore, Paperclip, SquareChartGantt, X } from "lucide-react";
import userImage from "../../../assets/images/1.png"
import { useState } from "react";
import Modal from "./Modal";
import UploadFiles from "./UploadFiles";

const Card = () => {

    const [modal, setModal] = useState(false)

    const handleModalClose = () => {
        setModal((prev) => !prev);
    }

    return (
        <div className="w-[300px] h-fit bg-white p-4 rounded-lg mb-3">
            <div>
                <div className="flex justify-between mb-3">
                    <div className="flex justify-center items-center">
                        <img src={userImage} width={20} alt="" className="mr-1" />
                        <h3 className="text-gray-700 font-semibold text-xs">CLient Name</h3>
                    </div>
                    <div className="flex justify-center items-center">
                        <img src={userImage} width={20} alt="" className="mr-1" />
                        <h3 className="text-gray-700 font-semibold text-xs">Sadik Istiaq</h3>
                    </div>
                </div>
                <div className="flex justify-between mb-3">
                    <div className="flex  items-center w-48">
                        <Layers3 className="shrink-0 mr-2 w-4 text-gray-700" />
                        <p className="truncate text-xs text-gray-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, in.</p>
                    </div>
                    <div className="flex  items-center">
                        <SquareChartGantt className="shrink-0 mr-1 w-4 text-gray-700" />
                        <p className="text-xs text-gray-700 font-semibold">1/2</p>
                    </div>
                </div>
                <div className="flex justify-between items-center">

                    <img src={userImage} width={20} alt="" className="mr-1" />
                    <img src={userImage} width={20} alt="" className="mr-1" />

                    <p className="text-xs text-gray-700 font-semibold">12+</p>
                    <div className="flex  items-center">
                        <MessageCircleMore className="shrink-0  w-3 text-gray-700" />
                        <p className="text-xs text-gray-700 font-semibold">15</p>
                    </div>
                    <div className="flex  items-center">
                        <button onClick={() => setModal((prev) => !prev)}><Paperclip className="shrink-0  w-3 text-gray-700" /></button>
                        <p className="text-xs text-gray-700 font-semibold">25</p>
                        <Modal isOpen={modal}>
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-gray-700 font-semibold">Attachments</h2>
                                <button className="text-gray-700 rounded-full bg-gray-200 p-1 hover:bg-red-500  hover:text-white transition" onClick={handleModalClose}><X /></button>
                            </div>
                            <h1>This is modal</h1>
                            <UploadFiles />
                        </Modal>
                    </div>
                    <div className="flex  items-center">
                        <CalendarDays className="shrink-0  w-3 text-gray-700" />
                        <p className="text-xs text-gray-700 font-semibold">30-12-2024</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;