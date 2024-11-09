import { CalendarDays, Layers3, MessageCircleMore, Paperclip, SquareChartGantt, X } from "lucide-react";
import userImage1 from "../../../assets/images/1.png"
import userImage2 from "../../../assets/images/2.png"
import userImage3 from "../../../assets/images/3.png"
import userImage4 from "../../../assets/images/4.png"
import { useEffect, useState } from "react";
import Modal from "./Modal";
import UploadFiles from "./UploadFiles";

const Card = () => {

    const [attachmentData, setattachmentData] = useState([]);
    const [todos, setTodos] = useState([]);

    console.log(todos);


    useEffect(() => {
        fetch("https://final-server-seopage1.onrender.com/users")
            .then((res) => res.json())
            .then((data) => setattachmentData(data))
    }, [])



    useEffect(() => {
        fetch("https://final-server-seopage1.onrender.com/todos")
            .then((res) => res.json())
            .then((data) => setTodos(data))
    }, [])




    const [modal, setModal] = useState(false)

    const handleModalClose = () => {
        setModal((prev) => !prev);
    }


    const handleSubmit = () => {
        async function fetchData() {
            try {
                const response = await fetch('https://final-server-seopage1.onrender.com/users');
                const data = await response.json();
                setattachmentData(data)
            } catch (error) {
                console.error('Error:', error)
            }
        }
        fetchData()
        handleModalClose();
    }


    return (
        <div className="w-[300px] h-fit bg-white p-4 rounded-lg mb-3">
            <div>
                <div className="flex justify-between mb-3">
                    <div className="flex justify-center items-center">
                        <img src={userImage1} width={20} alt="" className="mr-1" />
                        <h3 className="text-gray-700 font-semibold text-xs">CLient Name</h3>
                    </div>
                    <div className="flex justify-center items-center">
                        <img src={userImage2} width={20} alt="" className="mr-1" />
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

                    <img src={userImage3} width={20} alt="" className="" />
                    <img src={userImage4} width={32} alt="" className="" />

                    <p className="text-xs text-gray-700 font-semibold">12+</p>
                    <div className="flex  items-center">
                        <MessageCircleMore className="shrink-0  w-3 text-gray-700" />
                        <p className="text-xs text-gray-700 font-semibold">15</p>
                    </div>
                    <div className="flex  items-center">
                        <button onClick={() => setModal((prev) => !prev)}><Paperclip className="shrink-0  w-3 text-gray-700" /></button>
                        <p className="text-xs text-gray-700 font-semibold">{attachmentData.length}</p>
                        <Modal isOpen={modal}>
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-gray-700 font-semibold">Attachments</h2>
                                <button className="text-gray-700 rounded-full bg-gray-200 p-1 hover:bg-red-500  hover:text-white transition" onClick={handleModalClose}><X /></button>
                            </div>
                            <UploadFiles />
                            <button className="text-white rounded-lg bg-blue-500 p-3 mt-5"
                                onClick={handleSubmit}>Submit</button>
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