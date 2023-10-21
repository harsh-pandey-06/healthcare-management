import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';


const UpcomingAppointments = () => {
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
                        />
                        <DateTimePicker
                            label="To"
                            viewRenderers={{
                                hours: renderTimeViewClock,
                                minutes: renderTimeViewClock,
                                seconds: renderTimeViewClock,
                            }}
                        />
                    </div>
                    <div className='font-light text-gray-600 '>
                        Note: All your appointments in this period will be cancelled.
                    </div>
                    <button type="button" className='bg-blue-500 flex items-center justify-between gap-2 cursor-pointer text-white px-5 py-3 rounded-lg text-sm font-medium mt-4'>
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