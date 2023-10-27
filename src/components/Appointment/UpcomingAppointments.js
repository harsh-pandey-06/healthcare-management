import * as React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';


const UpcomingAppointments = () => {
    const [fromDate, setFromDate] = React.useState(dayjs(Date.now()));
    const [toDate, setToDate] = React.useState(dayjs(Date.now()));
    const [leaveRange, setLeaveRange] = React.useState({
        startRange: "",
        endRange: "",
    });

    const handleClickLeave = () => {
        if (!leaveRange.startRange) {
            const temp = { ...leaveRange, startRange: new Date().getTime() };
            setLeaveRange(temp);
        }
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className='p-5'>
                <div>
                    <div className='font-medium text-lg'>Take a leave</div>
                    <div className='flex gap-10 p-5'>
                        <DateTimePicker
                            label="From"
                            viewRenderers={{
                                hours: renderTimeViewClock,
                                minutes: renderTimeViewClock,
                                seconds: renderTimeViewClock,
                            }}
                            value={fromDate}
                            onChange={(newValue) => {
                                setFromDate(newValue);
                                const temp = { ...leaveRange, startRange: newValue.toDate().getTime() };
                                setLeaveRange(temp);
                            }}
                        />
                        <DateTimePicker
                            label="To"
                            viewRenderers={{
                                hours: renderTimeViewClock,
                                minutes: renderTimeViewClock,
                                seconds: renderTimeViewClock,
                            }}
                            value={toDate}
                            onChange={(newValue) => {
                                setToDate(newValue);
                                const temp = { ...leaveRange, endRange: newValue.toDate().getTime() };
                                setLeaveRange(temp);
                            }}
                        />
                    </div>
                    <div className='font-light text-gray-600 '>
                        Note: All your appointments in this period will be cancelled.
                    </div>
                    <button type="button" className='bg-blue-500 flex items-center justify-between gap-2 cursor-pointer text-white px-5 py-3 rounded-lg text-sm font-medium mt-4' onClick={handleClickLeave}>
                        Confirm Leave
                    </button>
                </div>
                <div className="flex flex-row my-6 font-bold text-xs items-center justify-between">
                    Upcoming Appointments
                    <div className="bg-gray-400 h-[1px] w-9/12"></div>
                </div>
                <div>

                </div>
            </div>
        </LocalizationProvider>
    )
}

export default UpcomingAppointments