export function BatchDetail() {
    return (
        <>
            <div className="text-[#fff] mt-[150px]">
                <h2 className="text-center text-3xl font-bold m-10">Batch Detail</h2>
                <div className="flex justify-center flex-col items-center">
                    <div className="head w-[900px] h-[50px] flex border-1 border-[#312e2e]">
                        <div className="pending border-1 border-[#fdb45d] w-[100px] h-full flex justify-center items-center">
                            <h3 className="text-orange-300"> Pending</h3>
                        </div>
                        <div className=" w-[600px] h-full flex justify-between items-center text- p-5 border-1 border-[#312e2e]">
                            <div className="back flex justify-center items-center gap-2">
                            <i className="fa-solid fa-arrow-left hover:scale-110 hover:cursor-pointer" onClick={() => window.location.href = "/"}></i>
                                <a>Back</a>
                            </div>
                            <div className="share flex -justify-center items-center gap-2">
                                <span>Share</span>
                                <i className="fa-brands fa-x-twitter hover:scale-110 hover:cursor-pointer"></i>
                            </div>
                        </div>
                        <div className="show w-[200px] h-full flex justify-center items-center border-1 border-[#ccc] gap-2">
                            <button className="show-btn">Show proof</button>
                            <i className="fa-solid fa-eye hover:scale-110 hover:cursor-pointer"></i>
                        </div>
                    </div>
                    <div className="body w-[900px] h-auto border border-[#312e2e] rounded-lg shadow-lg p-6 bg-[#000] text-white">
                        <div className="batch-detail space-y-4">
                            <div className="text-sm font-semibold flex flex-col gap-1 border-b border-[#312e2e] pb-2">
                                <span className="text-gray-400">Batch Hash</span>
                                <span className="break-all text-white">C8D8EF0D1D312112FD128DB60C6E08F598360DC6599622AF1DF29B9839ED5E64</span>
                            </div>

                            <div className="text-sm flex flex-col gap-1 border-b border-[#312e2e] pb-2">
                                <span className="text-gray-400">Batch Address</span>
                                <span className="break-all text-white">cosmos1uuhr5kleawdryk3fehunyk8ezav2zzn8d6fj5j</span>
                            </div>

                            <div className="flex flex-col gap-2 text-sm">
                                <p className="flex justify-between">
                                    <span className="text-gray-400">Aggregated Proof</span> <span className="text-white">12345</span>
                                </p>
                                <p className="flex justify-between">
                                    <span className="text-gray-400">Total Batch Cost</span> <span className="text-white">$5000</span>
                                </p>
                                <p className="flex justify-between">
                                    <span className="text-gray-400">Saving per proof submission</span> <span className="text-white">$15</span>
                                </p>
                                <p className="flex justify-between">
                                    <span className="text-gray-400">Amount of proof</span> <span className="text-white">250</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="foot w-[900px] h-[300px] h-auto border border-[#312e2e] rounded-lg shadow-lg p-6 bg-[#000] text-white">
                    <div className="batch-detail space-y-4">
                            <div className="flex flex-col gap-2 text-sm">
                                <p className="flex justify-between">
                                    <span className="text-gray-400">Submisstion Timestamp</span> <span className="text-white">18 Mar 2025, 7:30:12 pm</span>
                                </p>
                                <p className="flex justify-between">
                                    <span className="text-gray-400">Submisstion Transaction Hash</span> <span className="text-white">dasdahquiwuiuhajksjkajfajkhfjahfjskhjh</span>
                                </p>
                                <p className="flex justify-between">
                                    <span className="text-gray-400">Submisstion Block Number</span> <span className="text-white">Confirming...</span>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}