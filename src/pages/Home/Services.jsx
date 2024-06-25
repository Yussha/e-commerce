//Icons
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbRosetteDiscountCheck } from "react-icons/tb";
import { MdOutlineHeadsetMic } from "react-icons/md";

export default function Services() {
    return (
        <div className="flex items-center justify-center mt-14 w-auto mb-14 xl:mt-24 xl:mb-24">
            <div style={{ backgroundColor: "#686D76" }} className={`rounded-lg sm:w-3/4 grid w-11/12 p-12 gap-8 sm:grid-cols-2 sm:gap-8 sm:p-4 md:w-10/12 lg:grid-cols-4 lg:h-48 lg:w-11/12 xl:gap-4 xl:w-3/4 2xl:w-9/12 2xl:h-72`}>
                <div className="flex items-center gap-4 sm:gap-4">
                    <TbTruckDelivery className="text-5xl sm:text-6xl lg:text-5xl xl:text-5xl" />
                    <h1 className="text-lg sm:text-lg lg:text-xl xl:text-xl">Free Home Delivery</h1>
                </div>
                <div className="flex items-center gap-4  sm:gap-4">
                    <RiSecurePaymentLine className="text-5xl sm:text-6xl lg:text-5xl  xl:text-5xl" />
                    <h1 className=" text-lg sm:text-lg lg:text-xl xl:text-xl">Secure Payment</h1>
                </div>
                <div className="flex items-center gap-4  sm:gap-4">
                    <TbRosetteDiscountCheck className="text-5xl sm:text-6xl lg:text-5xl  xl:text-5xl" />
                    <h1 className="text-lg sm:text-lg lg:text-xl xl:text-xl">Order Discount</h1>
                </div>
                <div className="flex items-center gap-4  sm:gap-4">
                    <MdOutlineHeadsetMic className="text-5xl sm:text-6xl lg:text-5xl  xl:text-5xl" />
                    <h1 className="text-lg sm:text-lg lg:text-xl xl:text-xl">24 x 7 Online Support</h1>
                </div>
            </div>

        </div>
    )
}