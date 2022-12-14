import React, {useState} from 'react';
import Image from 'next/image'
import {MagnifyingGlassIcon, GlobeAltIcon, UserCircleIcon, Bars3Icon} from '@heroicons/react/24/outline'
import {UserIcon} from '@heroicons/react/24/solid'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {DateRangePicker} from 'react-date-range';
import Link from "next/link";
import {useRouter} from "next/router";

const Header = () => {
    const router = useRouter()

    const [searchInput, setSearchInput] = useState("")
    const [numberOfGuests, setNumberOfGuests] = useState(1)
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    const resetInput = () => {
        setSearchInput("")
        setStartDate(new Date())
        setEndDate(new Date())
    }

    const search = () => {
        router.push({
            pathname: "/search",
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                numberOfGuests

            }
        });
        setSearchInput("")
    }

    const selectionRange = {
        startDate,
        endDate,
        key: 'selection',
    }

    return (
        <header className="sticky t-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">

            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image src="https://links.papareact.com/qd3" alt="Logo" onClick={() => router.push('/')} layout="fill" objectFit="contain"
                       objectPosition="left"/>
            </div>

            <div className="flex items-center border-2 rounded-full py-2 md: border-2 md:shadow-sm">
                <input
                    type="text"
                    placeholder={"Start your search"}
                    className="flex-grow pl-5 bg-inherit outline-none text-sm text-gray-600 placeholder-gray-400"
                    value={searchInput}
                    onChange={(e) => {
                        setSearchInput(e.target.value)
                    }}

                />
                <MagnifyingGlassIcon
                    className="hidden h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:inline-flex md:mx-2"/>
            </div>

            <div className="flex items-center justify-end space-x-4 cursor-pointer">
                <p className="hidden md:inline">Become a host</p>
                <GlobeAltIcon className="h-6"/>

                <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                    <Bars3Icon className="h-6 cursor-pointer"/>
                    <UserCircleIcon className="h-6 cursor-pointer"/>
                </div>
            </div>

            {searchInput && (
                <div className="flex flex-col col-span-3 mx-auto mt-2">
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#FD5B61"]}
                        onChange={handleSelect}
                    />
                    <div className="flex items-center border-b mb-4">
                        <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
                        <UserIcon className="h-5" />
                        <input
                            type="number"
                            value={numberOfGuests}
                            onChange={e => setNumberOfGuests(e.target.value)}
                            min={1}
                            className="w-12 pl-2 text-lg outline-none text-red-400"
                        />
                    </div>
                    <div className="flex">
                        <button className="flex-grow text-gray-500" onClick={resetInput}>Cancel</button>
                        <button onClick={search} className="flex-grow text-red-400">Search</button>
                    </div>
                </div>
            )}

        </header>
    );
};

export default Header;