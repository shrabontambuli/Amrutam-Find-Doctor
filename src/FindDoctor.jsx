import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const FindDoctor = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className="container mx-auto">
            <div>
                <div className="hero-image mt-20">
                </div>
                <div className="bg-[#FFFBF2] flex items-center justify-between px-10 mb-20 h-40">
                    <div className="flex items-center">
                        <img className="-mt-20" src="/images/Ellipse 727.png" alt="" />
                        <div className="ms-6">
                            <h3 className="font-medium text-xl flex items-center">Dr. Bruce Willis <img className="ms-2" src="/icons/Tik.png" alt="" /></h3>
                            <p className="text-[#3A643B] font-medium">Gynecologist</p>
                            <div className="rating rating-sm items-center">
                                <h1 className="font-medium me-2">4.2</h1>
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-80">
                        <div className="text-center">
                            <p className="text-[#3A643B] font-medium">Followers</p>
                            <h1 className="font-bold text-xl">850</h1>
                        </div>
                        <div className="text-center">
                            <p className="text-[#3A643B] font-medium">Following</p>
                            <h1 className="font-bold text-xl">18K</h1>
                        </div>
                        <div className="text-center">
                            <p className="text-[#3A643B] font-medium">Posts</p>
                            <h1 className="font-bold text-xl">250</h1>
                        </div>
                    </div>
                    <div>
                        <Link to='/booking'>
                            <button className="bg-[#3A643B] text-white py-3 px-6 rounded-lg">Book an Appointment</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-8 pb-20">
                <div>
                    <div className="border-2 rounded-2xl pb-10">
                        <div className="bg3 rounded-t-2xl">
                            <div className="flex justify-between items-center py-4 px-8">
                                <h1 className="text-2xl font-medium">A Little About me</h1>
                                <div className="border-2 rounded-2xl py-1 px-4">
                                    <h1 className="flex items-center">Follow <img className="ms-2" src="/icons/Plus.png" alt="" /></h1>
                                </div>
                            </div>
                        </div>
                        <div className="px-8 mt-8">
                            <div>
                                <p className="text-slate-500">
                                    Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat. love to work with all my hospital staff and seniour doctors. Completed my graduation in Gynaecologist Medicine from the
                                </p>
                                <div className="mt-10 flex items-center justify-between">
                                    <img className="me-10 w-96" src="/icons/line.png" alt="" />
                                    <h1 className="text-lg font-medium underline">Read More</h1>
                                </div>
                            </div>
                            <div className="flex items-center mt-10 gap-4">
                                <h1 className="text-xl font-medium">Language Spoken </h1>
                                <div className="bg-base-200 border-2 rounded-2xl py-1 px-4">
                                    <h1 className="">English</h1>
                                </div>
                                <div className="bg-base-200 border-2 rounded-2xl py-1 px-4">
                                    <h1 className="">Hindi</h1>
                                </div>
                                <div className="bg-base-200 border-2 rounded-2xl py-1 px-4">
                                    <h1 className="">Telugu</h1>
                                </div>
                            </div>
                            <div className="mt-10 flex items-center gap-4">
                                <div>
                                    <img src="/icons/FB2.png" alt="" />
                                </div>
                                <div>
                                    <img src="/icons/INS.png" alt="" />
                                </div>
                                <div>
                                    <img src="/icons/You2.png" alt="" />
                                </div>
                                <div>
                                    <img src="/icons/TWi2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-2 rounded-2xl pb-10 mt-10">
                        <div className="bg3 rounded-t-2xl">
                            <div className="py-4 px-8">
                                <h1 className="text-2xl font-medium">I Specialize In</h1>
                            </div>
                        </div>

                        <div className="px-8 mt-8 flex items-center gap-6">
                            <div>
                                <div className="bg-[#FFFCF2] flex justify-center items-center p-3 rounded-xl">
                                    <img src="/icons/Face.png" alt="" />
                                </div>
                                <h1 className="text-lg font-medium mt-2 text-center">women’s health</h1>
                            </div>
                            <div>
                                <div className="bg-[#FFFCF2] flex justify-center items-center p-3 rounded-xl">
                                    <img src="/icons/Skincare 1.png" alt="" />
                                </div>
                                <h1 className="text-lg font-medium mt-2 text-center">Skin Care</h1>
                            </div>
                            <div>
                                <div className="bg-[#FFFCF2] flex justify-center items-center p-3 rounded-xl">
                                    <img src="/icons/Immunity 1.png" alt="" />
                                </div>
                                <h1 className="text-lg font-medium mt-2 text-center">Immunity</h1>
                            </div>
                            <div>
                                <div className="bg-[#FFFCF2] flex justify-center items-center p-3 rounded-xl">
                                    <img src="/icons/Hair 1.png" alt="" />
                                </div>
                                <h1 className="text-lg font-medium mt-2 text-center">Hair care</h1>
                            </div>
                        </div>
                    </div>

                    <div className="border-2 rounded-2xl pb-10 mt-10">
                        <div className="bg3 rounded-t-2xl">
                            <div className="py-4 px-8">
                                <h1 className="text-2xl font-medium">The Concerns I Treat</h1>
                            </div>
                        </div>
                        <div className="px-8 mt-8 grid grid-cols-4 justify-items-center items-center gap-y-6">
                            <div className="bg-base-200 border-2 rounded-2xl py-2 px-4">
                                <h1 className="text-[#3A643B] font-medium">Skin Treatment</h1>
                            </div>
                            <div className="bg-base-200 border-2 rounded-2xl py-2 px-4">
                                <h1 className="text-[#3A643B] font-medium">Pregnancy</h1>
                            </div>
                            <div className="bg-base-200 border-2 rounded-2xl py-2 px-4">
                                <h1 className="text-[#3A643B] font-medium">Period Doubts</h1>
                            </div>
                            <div className="bg-base-200 border-2 rounded-2xl py-2 px-4">
                                <h1 className="text-[#3A643B] font-medium">Endometriosis</h1>
                            </div>
                            <div className="bg-base-200 border-2 rounded-2xl py-2 px-4">
                                <h1 className="text-[#3A643B] font-medium">Pelvic Pain</h1>
                            </div>
                            <div className="bg-base-200 border-2 rounded-2xl py-2 px-4">
                                <h1 className="text-[#3A643B] font-medium">Ovarian Cysts</h1>
                            </div>
                            <div className="bg-base-200 border-2 rounded-2xl py-2 px-4">
                                <h1 className="text-[#3A643B] font-medium">+ 5 More</h1>
                            </div>

                        </div>
                    </div>

                    <div className="border-2 rounded-2xl pb-10 mt-10">
                        <div className="bg3 rounded-t-2xl">
                            <div className="py-4 px-8">
                                <h1 className="text-2xl font-medium">My Work Experience</h1>
                            </div>
                        </div>
                        <div className="px-8 mt-8">
                            <div>
                                <h1 className="text-[#3A643B] text-2xl font-semibold">I have been in practice for : 7+ Years</h1>
                                <hr className="w-[70%] mt-6" />
                            </div>
                            <div className="mt-6">
                                <div className="flex items-center gap-5">
                                    <div className="bg-base-200 w-20 h-16 rounded-xl flex justify-center items-center">
                                        <img src="/icons/material.png" alt="" />
                                    </div>
                                    <div className="w-full">
                                        <div className="flex justify-between items-center">
                                            <h1 className="text-xl font-semibold">Midtown Medical Clinic</h1>
                                            <p className="text-lg">2016-present</p>
                                        </div>
                                        <p className="text-lg">Senior doctor</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-5 mt-6">
                                    <div className="bg-base-200 w-20 h-16 rounded-xl flex justify-center items-center">
                                        <img src="/icons/material.png" alt="" />
                                    </div>
                                    <div className="w-full">
                                        <div className="flex justify-between items-center">
                                            <h1 className="text-xl font-semibold">Midtown Medical Clinic</h1>
                                            <p className="text-lg">2010-2015</p>
                                        </div>
                                        <p className="text-lg">Senior doctor</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-2 rounded-2xl pb-10 mt-10">
                        <div className="bg3 rounded-t-2xl">
                            <div className="py-4 px-8">
                                <h1 className="text-2xl font-medium">Featured Reviews (102)</h1>
                            </div>
                        </div>
                        <div className="px-8 mt-8">
                            <div>
                                <div className="mt-6">
                                    <div className="bg-base-200 p-8 rounded-2xl">
                                        <div className="flex items-center gap-5">
                                            <div>
                                                <img className="w-20" src="/images/Woman.png" alt="" />
                                            </div>
                                            <div className="w-full">
                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        <h1 className="text-xl font-semibold">Alicent Hightower</h1>
                                                        <p className="text-lg">Consulted for Skin care</p>
                                                    </div>
                                                    <p className="text-lg">20 January 2023</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rating rating-sm mt-6">
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                                        </div>
                                        <div className="mt-2">
                                            <p className="text-lg font-normal">
                                                Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-base-200 p-8 rounded-2xl mt-5">
                                        <div className="flex items-center gap-5">
                                            <div>
                                                <img className="w-20" src="/images/Woman.png" alt="" />
                                            </div>
                                            <div className="w-full">
                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        <h1 className="text-xl font-semibold">Alicent Hightower</h1>
                                                        <p className="text-lg">Consulted for Skin care</p>
                                                    </div>
                                                    <p className="text-lg">20 January 2023</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rating rating-sm mt-6">
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                                        </div>
                                        <div className="mt-2">
                                            <p className="text-lg font-normal">
                                                Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>




                {/* Right Content */}


                <div>
                    <div className="border-2 rounded-2xl p-8">
                        <div className="font-medium border-2 rounded-2xl flex justify-between items-center px-6 h-16">
                            <h1 className="text-lg">Appointment Fee</h1>
                            <h2 className="text-[#3A643B] text-xl">₹699.00</h2>
                        </div>

                        <div className="mt-10">
                            <h1 className="text-lg font-medium flex items-center">Select your mode of session <img className="ms-10 w-96" src="/icons/line.png" alt="" /></h1>
                        </div>

                        <div className="mt-10 flex justify-between items-center gap-4">
                            <div className=" border-2 rounded-2xl text-center py-3 w-72">
                                <h1 className="text-lg font-medium">In-Clinic</h1>
                                <h2 className="text-base">45 Mins</h2>
                            </div>
                            <div className=" border-2 border-[#3A643B] rounded-2xl text-center py-3 w-72 bg-[#F2FBF2]">
                                <h1 className="flex items-center justify-center text-lg text-[#3A643B] font-medium">Video <img className="ms-2" src="../public/icons/Tik2.png" alt="" /></h1>
                                <h2 className="text-base">45 Mins</h2>
                            </div>
                            <div className=" border-2 rounded-2xl text-center py-3 w-72">
                                <h1 className="text-lg font-medium">Chat</h1>
                                <h2 className="text-base">10s Mins</h2>
                            </div>
                        </div>

                        <div className="flex justify-between items-center mt-10">
                            <h1 className="text-lg font-medium flex items-center">Pick a Time slot</h1>
                            <div className="flex justify-between items-center">
                                <div>
                                    <img className="ms-5 w-96" src="/icons/line.png" alt="" />
                                </div>
                                <div className="border-2 rounded-full w-10 h-10 flex justify-center items-center ms-6">
                                    <img src="/icons/calendar.png" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="border-2 rounded-2xl mt-10 p-6">
                            <Carousel
                                infinite={true}
                                // autoPlay={true}
                                responsive={responsive}
                                className="container mx-auto">
                                <div className=" border-2 border-[#3A643B] rounded-2xl text-center py-3 w-48 bg-[#F2FBF2]">
                                    <h1 className="text-lg text-[#3A643B] font-medium">Mon, 10 Oct</h1>
                                    <h2 className="text-base">10 slots</h2>
                                </div>
                                <div className=" border-2 rounded-2xl text-center py-3 w-48">
                                    <h1 className="text-lg font-medium">Tue, 11 Oct</h1>
                                    <h2 className="text-base text-[#D5512E]">02 slots</h2>
                                </div>
                                <div className=" border-2 rounded-2xl text-center py-3 w-48">
                                    <h1 className="text-lg font-medium">Wed, 12 Oct</h1>
                                    <h2 className="text-base text-[#F1B93A]">05 slots </h2>
                                </div>
                            </Carousel>
                        </div>

                        <div className="mt-10">
                            <h1 className="text-lg font-medium">Morning</h1>
                            <div className="mt-5 grid grid-cols-4 items-center justify-items-center gap-3">
                                <div className=" border-2 rounded-2xl text-center py-4 px-8">
                                    <h1 className="text-lg font-medium">09:00 AM</h1>
                                </div>
                                <div className=" border-2 rounded-2xl text-center py-4 px-8">
                                    <h1 className="text-lg font-medium">09:30 AM</h1>
                                </div>
                                <div className=" border-2 rounded-2xl text-center py-4 px-8">
                                    <h1 className="text-lg font-medium">10:00 AM</h1>
                                </div>
                                <div className=" border-2 rounded-2xl text-center py-4 px-8">
                                    <h1 className="text-lg font-medium">10:15 AM</h1>
                                </div>
                                <div className=" border-2 rounded-2xl text-center py-4 px-8">
                                    <h1 className="text-lg font-medium">10:45 AM</h1>
                                </div>
                                <div className="bg-[#3A643B] border-2 rounded-2xl text-center text-white py-4 px-8">
                                    <h1 className="text-lg font-medium">11:00 AM</h1>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h1 className="text-lg font-medium">Evening</h1>
                            <div className="mt-5 grid grid-cols-4 items-center justify-items-center gap-3">
                                <div className=" border-2 rounded-2xl text-center py-4 px-8">
                                    <h1 className="text-lg font-medium">04:00 PM</h1>
                                </div>
                                <div className=" border-2 rounded-2xl text-center py-4 px-8">
                                    <h1 className="text-lg font-medium">04:15 PM</h1>
                                </div>
                                <div className=" border-2 rounded-2xl text-center py-4 px-8">
                                    <h1 className="text-lg font-medium">04:30 PM</h1>
                                </div>
                                <div className=" border-2 rounded-2xl text-center py-4 px-8">
                                    <h1 className="text-lg font-medium">04:45 PM</h1>
                                </div>
                                <div className=" border-2 rounded-2xl text-center py-4 px-8">
                                    <h1 className="text-lg font-medium">05:15 PM</h1>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            <Link to='/booking'>
                                <button className="bg-[#3A643B] text-white w-full rounded-lg py-4">Make an appointment</button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindDoctor;