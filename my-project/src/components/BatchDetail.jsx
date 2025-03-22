export function BatchDetail() {
    return (
        <div className="text-[#fff] mt-[100px] px-4">
            <h2 className="text-center text-2xl sm:text-3xl font-bold mb-6">Batch Detail</h2>

            <div className="flex flex-col items-center">
                {/* Header */}
                <div className="w-full max-w-full lg:w-[900px] flex flex-wrap justify-between border border-[#312e2e] rounded-md overflow-hidden shadow-lg">
                    <div className="w-full sm:w-[100px] flex justify-center items-center border border-[#fdb45d] bg-[#1a1a1a] p-2">
                        <h3 className="text-orange-300">Pending</h3>
                    </div>

                    <div className="flex-1 flex justify-between items-center p-4 border border-[#312e2e]">
                        <div className="flex items-center gap-2">
                            <i
                                className="fa-solid fa-arrow-left hover:scale-110 hover:cursor-pointer"
                                onClick={() => window.location.href = "/"}
                            ></i>
                            <a className="text-gray-300">Back</a>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-gray-300">Share</span>
                            <i className="fa-brands fa-x-twitter hover:scale-110 hover:cursor-pointer"></i>
                        </div>
                    </div>

                    <div className="w-full sm:w-[200px] flex justify-center items-center border border-[#ccc] p-4">
                        <button className="text-gray-300 hover:text-white">Show proof</button>
                        <i className="fa-solid fa-eye hover:scale-110 hover:cursor-pointer ml-2"></i>
                    </div>
                </div>

                {/* Body */}
                <div className="w-full max-w-full lg:w-[900px] border border-[#312e2e] rounded-lg shadow-lg p-6 bg-[#000] text-white mt-6">
                    <div className="space-y-4">
                        <div className="text-sm font-semibold flex flex-col gap-1 border-b border-[#312e2e] pb-2">
                            <span className="text-gray-400">Batch Hash</span>
                            <span className="break-all text-white">
                                C8D8EF0D1D312112FD128DB60C6E08F598360DC6599622AF1DF29B9839ED5E64
                            </span>
                        </div>

                        <div className="text-sm flex flex-col gap-1 border-b border-[#312e2e] pb-2">
                            <span className="text-gray-400">Batch Address</span>
                            <span className="break-all text-white">
                                cosmos1uuhr5kleawdryk3fehunyk8ezav2zzn8d6fj5j
                            </span>
                        </div>

                        <div className="flex flex-col gap-2 text-sm">
                            <p className="flex justify-between">
                                <span className="text-gray-400">Aggregated Proof</span> 
                                <span className="text-white">12345</span>
                            </p>
                            <p className="flex justify-between">
                                <span className="text-gray-400">Total Batch Cost</span> 
                                <span className="text-white">$5000</span>
                            </p>
                            <p className="flex justify-between">
                                <span className="text-gray-400">Saving per proof submission</span> 
                                <span className="text-white">$15</span>
                            </p>
                            <p className="flex justify-between">
                                <span className="text-gray-400">Amount of proof</span> 
                                <span className="text-white">250</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="w-full max-w-full lg:w-[900px] border border-[#312e2e] rounded-lg shadow-lg p-6 bg-[#000] text-white mt-6">
                    <div className="space-y-4">
                        <div className="flex flex-col gap-2 text-sm">
                            <p className="flex justify-between">
                                <span className="text-gray-400">Submission Timestamp</span> 
                                <span className="text-white">18 Mar 2025, 7:30:12 pm</span>
                            </p>
                            <p className="flex justify-between">
                                <span className="text-gray-400">Submission Transaction Hash</span> 
                                <span className="text-white break-all">dasdahquiwuiuhajksjkajfajkhfjahfjskhjh</span>
                            </p>
                            <p className="flex justify-between">
                                <span className="text-gray-400">Submission Block Number</span> 
                                <span className="text-white">Confirming...</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
