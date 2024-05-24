import React, { useState } from "react";
import {
	Button,
	TextField,
	Modal,
	ModalHeader,
	ModalContent,
	ModalFooterButtons,
} from "monday-ui-react-core";
import { Status } from "monday-ui-react-core/icons";
import "monday-ui-react-core/dist/main.css";

function App() {
	const [number1, setNumber1] = useState(0);
	const [number2, setNumber2] = useState(0);
	const [number3, setNumber3] = useState(0);

	const [storeNumber1, setStoreNumber1] = useState(0);
	const [storeNumber2, setStoreNumber2] = useState(0);
	const [storeNumber3, setStoreNumber3] = useState(0);

	const [total, setTotal] = useState(0);
	const [unit, setUnit] = useState("");
	const [dark, setDark] = useState(false);
	const [ref1, setRef1] = useState(0);
	const [ref2, setRef2] = useState(0);
	const [ref3, setRef3] = useState(0);
	const [openModal, setOpenModal] = useState(false);

	const toggleModal = () => {
		setOpenModal((prev) => !prev);
	};
	const closeCapacityModal = () => {
		setOpenModal(false);
	};
	return (
		<>
			<div
				className={
					"flex items-center justify-center w-full min-h-screen"
				}
				style={{ backgroundColor: dark ? "" : "#323338" }}
			>
				<Button
					className="absolute capitalize right-10 top-10"
					onClick={() => {
						setDark(!dark);
					}}
					style={{ backgroundColor: dark ? "#4b4e69" : "#8c8c8c" }}
				>
					{dark ? "dark mode" : "light mode"}
				</Button>
				<Button
					className="absolute capitalize rounded-md right-10 top-24"
					style={{ backgroundColor: dark ? "#4b4e69" : "#8c8c8c" }}
					onClick={() => {
						toggleModal();
					}}
				>
					tồn kho
				</Button>
				<Modal
					show={openModal}
					onClose={closeCapacityModal}
					contentSpacing
					width={"700px"}
					data-testid={""}
					classNames={{
						container: `${
							dark ? "bg-primaryColor" : "bg-darkColor"
						}`,
					}}
					zIndex={50}
				>
					<ModalHeader
						title="tồn kho"
						icon={Status}
						iconSize={32}
						className={`flex justify-center capitalize `}
					/>
					<ModalContent className="flex flex-col justify-between ">
						<div className="flex justify-center text-sm font-medium border border-black">
							<div className="w-20 mx-1 ">
								<div className="flex items-center justify-center w-20 h-10 my-1 font-bold border border-black">
									STT
								</div>
								<div className="flex items-center justify-center w-20 h-10 my-1 border border-black ">
									1
								</div>
								<div className="flex items-center justify-center w-20 h-10 my-1 border border-black ">
									2
								</div>
								<div className="flex items-center justify-center w-20 h-10 my-1 border border-black ">
									3
								</div>
							</div>
							<div className="w-40 mx-1">
								<div className="flex items-center justify-center w-40 h-10 my-1 font-bold border border-black">
									Tên Nguyên Vật Liệu
								</div>
								<div className="flex items-center justify-center w-40 h-10 my-1 border border-black">
									Đệm Sắt
								</div>
								<div className="flex items-center justify-center w-40 h-10 my-1 border border-black ">
									Gỗ Teak
								</div>
								<div className="flex items-center justify-center w-40 h-10 my-1 border border-black ">
									Hardware
								</div>
							</div>
							<div className="w-60">
								<div className="flex items-center justify-center h-10 my-1 font-bold border border-black w-60">
									Số Lượng Hàng Tồn
								</div>
								<div className="flex items-center justify-center h-10 my-1 border border-black w-60 ">
									<TextField
										onChange={(o) => setStoreNumber1(o)}
									/>
								</div>
								<div className="flex items-center justify-center h-10 my-1 border border-black w-60 ">
									<TextField
										onChange={(o) => setStoreNumber2(o)}
									/>
								</div>
								<div className="flex items-center justify-center h-10 my-1 border border-black w-60 ">
									<TextField
										onChange={(o) => setStoreNumber3(o)}
									/>
								</div>
							</div>
						</div>
					</ModalContent>
					<ModalFooterButtons
						primaryButtonText="Save"
						secondaryButtonText="Cancel"
						onPrimaryButtonClick={async () => {
							closeCapacityModal();
						}}
						onSecondaryButtonClick={closeCapacityModal}
					/>
				</Modal>
				<div className="flex flex-col items-center justify-center h-full w-fit ">
					<div className="h-full px-2 py-2 text-2xl font-bold text-black bg-white w-fit">
						Bản Thông Tin Nguyên Liệu
						<div className="flex text-sm font-medium border border-black ">
							<div className="w-20 mx-1 ">
								<div className="flex items-center justify-center w-20 h-10 my-1 border border-black">
									STT
								</div>
								<div className="flex items-center justify-center w-20 h-10 my-1 border border-black ">
									1
								</div>
								<div className="flex items-center justify-center w-20 h-10 my-1 border border-black ">
									2
								</div>
								<div className="flex items-center justify-center w-20 h-10 my-1 border border-black ">
									3
								</div>
							</div>
							<div className="w-40 mx-1">
								<div className="flex items-center justify-center w-40 h-10 my-1 border border-black">
									Tên Nguyên Vật Liệu
								</div>
								<div className="flex items-center justify-center w-40 h-10 my-1 border border-black">
									Đệm Sắt
								</div>
								<div className="flex items-center justify-center w-40 h-10 my-1 border border-black ">
									Gỗ Teak
								</div>
								<div className="flex items-center justify-center w-40 h-10 my-1 border border-black ">
									Hardware
								</div>
							</div>
							<div className="w-60">
								<div className="flex items-center justify-center h-10 my-1 border border-black w-60">
									Số Lượng Cần Cho Mỗi Ghế
								</div>
								<div className="flex items-center justify-center h-10 my-1 border border-black w-60 ">
									<TextField
										onChange={(o) => setNumber1(o)}
									/>
								</div>
								<div className="flex items-center justify-center h-10 my-1 border border-black w-60 ">
									<TextField
										onChange={(o) => setNumber2(o)}
									/>
								</div>
								<div className="flex items-center justify-center h-10 my-1 border border-black w-60 ">
									<TextField
										onChange={(o) => setNumber3(o)}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full h-full px-2 py-2 text-2xl font-bold text-black bg-white">
						Bản Thông Tin Nguyên Liệu
						<div className="flex flex-col text-sm font-medium text-col">
							<div className="flex items-center justify-start py-1 capitalize">
								số lượng ghế cần sản xuất:
								<div className="w-40 pl-2">
									<TextField onChange={(o) => setTotal(o)} />
								</div>
							</div>
							<div className="flex items-center justify-start py-1 capitalize">
								đơn vị
								<div className="w-40 pl-2">
									<TextField onChange={(o) => setUnit(o)} />
								</div>
							</div>
							<div className="py-2">
								<Button
									onClick={() => {
										setRef1(number1 * total - storeNumber1);
										setRef2(number2 * total - storeNumber2);
										setRef3(number3 * total - storeNumber3);
									}}
								>
									Tính Toán
								</Button>
							</div>

							<div>
								<div className="capitalize ">
									đệm sắt cần mua thêm: {ref1} {unit}
								</div>
								<div className="capitalize ">
									gỗ teak cần mua thêm: {ref2} {unit}
								</div>
								<div className="capitalize ">
									hardware cần mua thêm: {ref3} {unit}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
