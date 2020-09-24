import React, { memo, useEffect, useState } from 'react';
import ChartBt from './ChartBt';
import ChartBt2 from './ChartBt2';
const Solieu = memo(() => {

    const [state, setState] = useState(null);

    async function getSortedPostsData() {
        const res = await fetch('https://ssoc-next.solarbk.vn/backend/pvsofarapi/prototype/84843?Serial=01-C016-0920-0207').then(response => response.json()).then(data => setState(data));
        console.log('xx');
    }
    useEffect(() => {
        // console.log('xxr');
        getSortedPostsData();
        const id = setInterval(() => { getSortedPostsData() }, 30000);
        return () => clearInterval(id);
    }, []);
    // console.log(state && state.PowerRealTimeChart.DataChart);
    return (
        <>
            {state &&
                <div className="container  h-10 w-full m-auto px-8 mb-12 h-auto">
                    <div className="w-full text-center text-4xl text-blue-700 font-bold mt-8 pb-2 border-b-2 border-gray-300">
                        <h1 className="m-auto">Dashboard EPEver Tracer</h1>
                    </div>
                    <div className="grid grid-cols-5 gap-4 mt-8 text-base">
                        <div className="col-span-1   ">
                            <div className="mb-2  p-3">
                                <label className="font-bold" >Solar Information</label>
                            </div>
                            <div className="bg-gray-200  p-3 text-gray-600 ">
                                <div >
                                    <div className="text-base">Solar Current (A)</div>
                                    <div className="flex mt-2 leading-6 items-center">
                                        <img className="w-6 mr-4" src="../img/icon-1.png" />
                                        <span className="text-blue-700 font-bold text-xl">{parseFloat(state.SolarInformation.SolarCurrent).toFixed(2)}</span>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <div className="text-base">Solar Voltage (V)</div>
                                    <div className="flex leading-6 mt-2 items-center">
                                        <img className="w-6 mr-4" src="../img/icon-2.png" />
                                        <span className="text-blue-700 font-bold text-xl">{parseFloat(state.SolarInformation.SolarVoltage).toFixed(2)}</span>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <div className="text-base">Solar Power (W)</div>
                                    <div className="flex leading-6 mt-2 items-center">
                                        <img className="w-6 mr-4" src="../img/icon-4.png" />
                                        <span className="text-blue-700 font-bold text-xl">{parseFloat(state.SolarInformation.SolarPower).toFixed(2)}</span>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <div className="text-base">Solar Status</div>
                                    <div className="flex leading-6 mt-2 items-center">
                                        <img className="w-6 mr-4" src="../img/icon-3.png" />
                                        <span className="text-blue-700 font-bold text-xl">{String(state.SolarInformation.SolarStatus)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 ">
                            <div className="mb-2  p-3 w-full flex">
                                <label className="font-bold w-1/2">Battery Information</label>
                            </div>
                            <div className="w-full flex">
                                <div className="w-1/2">
                                    <div className="bg-gray-200  p-3 text-gray-600">
                                        <div >
                                            <div className="text-base">Battery voltage (V)</div>
                                            <div className="flex leading-6 mt-2 items-center">
                                                <img className="w-6 mr-4" src="../img/icon-5.png" />
                                                <span className="text-blue-700 font-semibold text-xl">{parseFloat(state.BatteryInformation.BatteryVoltage).toFixed(2)}</span>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <div className="text-base">Max voltage (V)</div>
                                            <div className="flex leading-6 mt-2 items-center">
                                                <img className="w-6 mr-4" src="../img/icon-6.png" />
                                                <span className="text-blue-700 font-semibold text-xl">{parseFloat(state.BatteryInformation.MaxVoltage).toFixed(2)}</span>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <div className="text-base">Battery temp. (&#8451;)</div>
                                            <div className="flex leading-6 mt-2 items-center">
                                                <img className="w-6 mr-4" src="../img/icon-7.png" />
                                                <span className="text-blue-700 font-semibold text-xl">{parseFloat(state.BatteryInformation.BatteryTemp).toFixed(2)}</span>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <div className="text-base">Charging status</div>
                                            <div className="flex leading-6 mt-2 items-center">
                                                <img className="w-6 mr-4" src="../img/icon-8.png" />
                                                <span className="text-red-600 font-semibold text-xl">{state.BatteryInformation.ChargingStatus}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/2">
                                    <div className="bg-gray-200  p-3 text-gray-600">
                                        <div >
                                            <div className="text-base">Battery current (A)</div>
                                            <div className="flex mt-2 leading-6 items-center">
                                                <img className="w-6 mr-4" src="../img/icon-9.png" />
                                                <span className="text-blue-700 font-semibold text-xl">{parseFloat(state.BatteryInformation.BatteryCurrent).toFixed(2)}</span>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <div className="text-base">Min voltage (V)</div>
                                            <div className="flex mt-2 leading-6 items-center">
                                                <img className="w-6 mr-4" src="../img/icon-6.png" />
                                                <span className="text-blue-700 font-semibold text-xl">{parseFloat(state.BatteryInformation.MinVoltage).toFixed(2)}</span>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <div className="text-base">Battery SOC (%)</div>
                                            <div className="flex mt-2 leading-6 items-center">
                                                <img className="w-6 mr-4" src="../img/icon-10.png" />
                                                <span className="text-blue-700 font-semibold text-xl">{parseFloat(state.BatteryInformation.BatterySOC).toFixed(2)}</span>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <div className="text-base">Battery status</div>
                                            <div className="flex mt-2 leading-6 items-center">
                                                <img className="w-6 mr-4" src="../img/icon-3.png" />
                                                <span className=" font-semibold text-green-500 text-xl">{state.BatteryInformation.BatteryStatus && String(state.BatteryInformation.BatteryStatus)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-span-1  ">
                            <div className="mb-2  p-3">
                                <label className="font-bold" >DC Load Information</label>
                            </div>
                            <div className="bg-gray-200  px-3 pt-3 pb-2 text-gray-600">
                                <div >
                                    <div className="text-base">Load current (A)</div>
                                    <div className="flex leading-6 mt-2 items-center">
                                        <img className="w-7 mr-4" src="../img/icon-11.png" />
                                        <span className="text-blue-700 font-semibold text-xl">{parseFloat(state.DCLoadInformation.LoadCurrent).toFixed(2)}</span>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <div className="text-base">Load voltage (V)</div>
                                    <div className="flex leading-6 mt-2 items-center">
                                        <img className="w-7 mr-4" src="../img/icon-12.png" />
                                        <span className="text-blue-700 font-semibold text-xl">{parseFloat(state.DCLoadInformation.LoadVoltage).toFixed(2)}</span>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <div className="text-base">Load power (W)</div>
                                    <div className="flex leading-6 mt-2 items-center">
                                        <img className="w-7 mr-4" src="../img/icon-13.png" />
                                        <span className="text-blue-700 font-semibold text-xl">{parseFloat(state.DCLoadInformation.LoadPower).toFixed(2)}</span>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <div className="text-base">Load status</div>
                                    <div className="flex leading-6 mt-2 items-center">
                                        <img className="w-7 mr-4" src="../img/icon-14.png" />
                                        <span className="text-green-500 font-semibold text-xl">{String(state.DCLoadInformation.LoadStatus)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 ">
                            <div className="mb-2  p-3">
                                <label className="font-bold" >Controller Information</label>
                            </div>
                            <div className="bg-gray-200  px-3 pt-3 pb-2 text-gray-600 ">
                                <div >
                                    <div className="text-base">Device temp. (&#8451;)</div>
                                    <div className="flex leading-6 mt-2 items-center">
                                        <img className="w-7 mr-4" src="../img/icon-15.png" />
                                        <span className="text-black font-semibold text-xl">{parseFloat(state.ControllerInformation.DeviceTemp).toFixed(2)}</span>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <div className="text-base">Load status</div>
                                    <div className="flex leading-6 mt-2 items-center">
                                        <img className="w-7 mr-4" src="../img/icon-14.png" />
                                        <span className="text-green-500 font-semibold text-xl">{String(state.ControllerInformation.DeviceStatus)}</span>
                                    </div>
                                </div>
                                <div className="mt-2 opacity-0 pointer-events-none">
                                    <div className="text-base">Load status</div>
                                    <div className="flex leading-6 mt-2">
                                        <img className="w-7 mr-4" src="../img/icon-9.png" />
                                        <span className="text-green-500 font-semibold text-xl">s</span>
                                    </div>
                                </div>
                                <div className="mt-2 opacity-0 pointer-events-none">
                                    <div className="text-base">Load status</div>
                                    <div className="flex leading-6 mt-2">
                                        <img className="w-7 mr-4" src="../img/icon-9.png" />
                                        <span className="text-green-500 font-semibold text-xl">s</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 gap-4 mt-6 text-base">
                        <div className="col-span-1 text-base">
                            <div>
                                <div className="  p-3">
                                    <label className="font-bold" >Energy Generated <span className="text-gray-600 font-light">(kWh)</span></label>
                                </div>
                                <div className="bg-gray-200  p-3 text-gray-600">
                                    <div >
                                        <div className="flex justify-between">
                                            <div>Daily:</div>
                                            <div className="text-blue-700 font-semibold ">{parseFloat(state.EnergyGenerated.Daily).toFixed(2)}</div>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <div className="flex justify-between">
                                            <div>Monthly:</div>
                                            <div className="text-blue-700 font-semibold ">{parseFloat(state.EnergyGenerated.Monthly).toFixed(2)}</div>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <div className="flex justify-between">
                                            <div>Annual:</div>
                                            <div className="text-blue-700 font-semibold ">{parseFloat(state.EnergyGenerated.Annual).toFixed(2)}</div>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <div className="flex justify-between">
                                            <div>Total:</div>
                                            <div className="text-blue-700 font-semibold ">{parseFloat(state.EnergyGenerated.Total).toFixed(2)}</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="mt-8">
                                <div className="  p-3">
                                    <label className="font-bold" >Energy Consumed <span className="text-gray-600 font-light">(kWh)</span></label>
                                </div>
                                <div className="bg-gray-200  p-3 text-gray-600">
                                    <div >
                                        <div className="flex justify-between">
                                            <div>Daily:</div>
                                            <div className="text-blue-700 font-semibold ">{parseFloat(state.EnergyConsumed.Daily).toFixed(2)}</div>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <div className="flex justify-between">
                                            <div>Monthly:</div>
                                            <div className="text-blue-700 font-semibold ">{parseFloat(state.EnergyConsumed.Monthly).toFixed(2)}</div>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <div className="flex justify-between">
                                            <div>Annual:</div>
                                            <div className="text-blue-700 font-semibold ">{parseFloat(state.EnergyConsumed.Annual).toFixed(2)}</div>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <div className="flex justify-between">
                                            <div>Total:</div>
                                            <div className="text-blue-700 font-semibold ">{parseFloat(state.EnergyConsumed.Total).toFixed(2)}</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 ">
                            <div className=" p-3">
                                <label className="font-bold" >Power Real Time Curve</label>
                            </div>
                            <div className="bg-gray-200 p-5">
                                <ChartBt chart={state.PowerRealTimeChart} />
                            </div>
                        </div>
                    </div>
                </div>

            }
        </>
    );
});

export default Solieu;