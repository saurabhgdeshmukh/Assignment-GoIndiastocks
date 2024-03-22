

export default function Home() {
  return (
    <>
      <div className='flex'>
        <div>
        <div className=" w-200 h-50 bg-gray-200 border border-gray-400 rounded-md shadow-lg p-5 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <svg
                className="text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                  <path d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></path>
                  <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1M3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0 1 12.065 14a8.984 8.984 0 0 1 7.092 3.458A9 9 0 1 0 3 12m9 9a8.963 8.963 0 0 1-5.672-2.012A6.992 6.992 0 0 1 12.065 16a6.991 6.991 0 0 1 5.689 2.92A8.964 8.964 0 0 1 12 21"></path>
                </g>
              </svg>
              <span className="ml-4">Lorem ipsum</span>
              <button className="bg-blue-700 text-white px-3 rounded-full ml-5">
                sector 2
              </button>
            </div>
            <span className="text-blue-600">2 min ago</span>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            eligendi illo ipsa voluptate odio accusantium modi, ducimus incidunt
            nulla expedita nemo obcaecati ipsum possimus
          </div>
          <div className="flex ">
            <div className="flex ml-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.4em"
                height="1.4em"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M178 32c-20.65 0-38.73 8.88-50 23.89C116.73 40.88 98.65 32 78 32a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 220.66 240 164 240 94a62.07 62.07 0 0 0-62-62m-50 174.8C109.74 196.16 32 147.69 32 94a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8"
                  ></path>
              </svg>
              <div className="ml-1">2k</div>
            </div>

            <div className="ml-10 ">
              <div className="flex ml-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.4em"
                  height="1.4em"
                  viewBox="0 0 24 24"
                  >
                  <path
                    fill="currentColor"
                    d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0"
                    ></path>
                </svg>
                <div className="ml-1">2k</div>
              </div>
            </div>

            <div className="ml-10 ">
              <div className="flex ml-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.4em"
                  height="1.4em"
                  viewBox="0 0 24 24"
                  >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 4H5a2 2 0 0 0-2 2v15l3.467-2.6a2 2 0 0 1 1.2-.4H19a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"
                    ></path>
                </svg>
                <div className="ml-1">2k comments</div>
              </div>
            </div>

            <div className="ml-10">
              <div className="flex ml-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.4em"
                  height="1.4em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M18 22q-1.25 0-2.125-.875T15 19q0-.175.025-.363t.075-.337l-7.05-4.1q-.425.375-.95.588T6 15q-1.25 0-2.125-.875T3 12q0-1.25.875-2.125T6 9q.575 0 1.1.213t.95.587l7.05-4.1q-.05-.15-.075-.337T15 5q0-1.25.875-2.125T18 2q1.25 0 2.125.875T21 5q0 1.25-.875 2.125T18 8q-.575 0-1.1-.212t-.95-.588L8.9 11.3q.05.15.075.338T9 12q0 .175-.025.363T8.9 12.7l7.05 4.1q.425-.375.95-.587T18 16q1.25 0 2.125.875T21 19q0 1.25-.875 2.125T18 22"
                    ></path>
                </svg>
                <div className="ml-1">share</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 w-200 h-50 bg-gray-200 border border-gray-400 rounded-md shadow-lg p-5 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <svg
                className="text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
                >
                <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                  <path d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></path>
                  <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1M3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0 1 12.065 14a8.984 8.984 0 0 1 7.092 3.458A9 9 0 1 0 3 12m9 9a8.963 8.963 0 0 1-5.672-2.012A6.992 6.992 0 0 1 12.065 16a6.991 6.991 0 0 1 5.689 2.92A8.964 8.964 0 0 1 12 21"></path>
                </g>
              </svg>
              <span className="ml-4">Lorem ipsum</span>
              <button className="bg-blue-700 text-white px-3 rounded-full ml-5">
                sector 2
              </button>
            </div>
            <span className="text-blue-600">2 min ago</span>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            eligendi illo ipsa voluptate odio accusantium modi, ducimus incidunt
            nulla expedita nemo obcaecati ipsum possimus
          </div>
          <div className="flex ">
            <div className="flex ml-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.4em"
                height="1.4em"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M178 32c-20.65 0-38.73 8.88-50 23.89C116.73 40.88 98.65 32 78 32a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 220.66 240 164 240 94a62.07 62.07 0 0 0-62-62m-50 174.8C109.74 196.16 32 147.69 32 94a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8"
                  ></path>
              </svg>
              <div className="ml-1">2k</div>
            </div>

            <div className="ml-10 ">
              <div className="flex ml-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.4em"
                  height="1.4em"
                  viewBox="0 0 24 24"
                  >
                  <path
                    fill="currentColor"
                    d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0"
                    ></path>
                </svg>
                <div className="ml-1">2k</div>
              </div>
            </div>

            <div className="ml-10 ">
              <div className="flex ml-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.4em"
                  height="1.4em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 4H5a2 2 0 0 0-2 2v15l3.467-2.6a2 2 0 0 1 1.2-.4H19a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"
                  ></path>
                </svg>
                <div className="ml-1">2k comments</div>
              </div>
            </div>

            <div className="ml-10">
              <div className="flex ml-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.4em"
                  height="1.4em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M18 22q-1.25 0-2.125-.875T15 19q0-.175.025-.363t.075-.337l-7.05-4.1q-.425.375-.95.588T6 15q-1.25 0-2.125-.875T3 12q0-1.25.875-2.125T6 9q.575 0 1.1.213t.95.587l7.05-4.1q-.05-.15-.075-.337T15 5q0-1.25.875-2.125T18 2q1.25 0 2.125.875T21 5q0 1.25-.875 2.125T18 8q-.575 0-1.1-.212t-.95-.588L8.9 11.3q.05.15.075.338T9 12q0 .175-.025.363T8.9 12.7l7.05 4.1q.425-.375.95-.587T18 16q1.25 0 2.125.875T21 19q0 1.25-.875 2.125T18 22"
                  ></path>
                </svg>
                <div className="ml-1">share</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 w-200 h-50 bg-gray-200 border border-gray-400 rounded-md shadow-lg p-5 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <svg
                className="text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
                >
                <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                  <path d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></path>
                  <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1M3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0 1 12.065 14a8.984 8.984 0 0 1 7.092 3.458A9 9 0 1 0 3 12m9 9a8.963 8.963 0 0 1-5.672-2.012A6.992 6.992 0 0 1 12.065 16a6.991 6.991 0 0 1 5.689 2.92A8.964 8.964 0 0 1 12 21"></path>
                </g>
              </svg>
              <span className="ml-4">Lorem ipsum</span>
              <button className="bg-blue-700 text-white px-3 rounded-full ml-5">
                sector 2
              </button>
            </div>
            <span className="text-blue-600">2 min ago</span>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            eligendi illo ipsa voluptate odio accusantium modi, ducimus incidunt
            nulla expedita nemo obcaecati ipsum possimus
          </div>
          <div className="flex ">
            <div className="flex ml-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.4em"
                height="1.4em"
                viewBox="0 0 256 256"
                >
                <path
                  fill="currentColor"
                  d="M178 32c-20.65 0-38.73 8.88-50 23.89C116.73 40.88 98.65 32 78 32a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 220.66 240 164 240 94a62.07 62.07 0 0 0-62-62m-50 174.8C109.74 196.16 32 147.69 32 94a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8"
                  ></path>
              </svg>
              <div className="ml-1">2k</div>
            </div>

            <div className="ml-10 ">
              <div className="flex ml-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.4em"
                  height="1.4em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0"
                    ></path>
                </svg>
                <div className="ml-1">2k</div>
              </div>
            </div>

            <div className="ml-10 ">
              <div className="flex ml-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.4em"
                  height="1.4em"
                  viewBox="0 0 24 24"
                  >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 4H5a2 2 0 0 0-2 2v15l3.467-2.6a2 2 0 0 1 1.2-.4H19a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"
                    ></path>
                </svg>
                <div className="ml-1">2k comments</div>
              </div>
            </div>

            <div className="ml-10">
              <div className="flex ml-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.4em"
                  height="1.4em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M18 22q-1.25 0-2.125-.875T15 19q0-.175.025-.363t.075-.337l-7.05-4.1q-.425.375-.95.588T6 15q-1.25 0-2.125-.875T3 12q0-1.25.875-2.125T6 9q.575 0 1.1.213t.95.587l7.05-4.1q-.05-.15-.075-.337T15 5q0-1.25.875-2.125T18 2q1.25 0 2.125.875T21 5q0 1.25-.875 2.125T18 8q-.575 0-1.1-.212t-.95-.588L8.9 11.3q.05.15.075.338T9 12q0 .175-.025.363T8.9 12.7l7.05 4.1q.425-.375.95-.587T18 16q1.25 0 2.125.875T21 19q0 1.25-.875 2.125T18 22"
                  ></path>
                </svg>
                <div className="ml-1">share</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 w-200 h-50 bg-gray-200 border border-gray-400 rounded-md shadow-lg p-5 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <svg
                className="text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
                >
                <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                  <path d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></path>
                  <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1M3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0 1 12.065 14a8.984 8.984 0 0 1 7.092 3.458A9 9 0 1 0 3 12m9 9a8.963 8.963 0 0 1-5.672-2.012A6.992 6.992 0 0 1 12.065 16a6.991 6.991 0 0 1 5.689 2.92A8.964 8.964 0 0 1 12 21"></path>
                </g>
              </svg>
              <span className="ml-4">Lorem ipsum</span>
              <button className="bg-blue-700 text-white px-3 rounded-full ml-5">
                sector 2
              </button>
            </div>
            <span className="text-blue-600">2 min ago</span>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            eligendi illo ipsa voluptate odio accusantium modi, ducimus incidunt
            nulla expedita nemo obcaecati ipsum possimus
          </div>
          <div className="flex ">
            <div className="flex ml-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.4em"
                height="1.4em"
                viewBox="0 0 256 256"
                >
                <path
                  fill="currentColor"
                  d="M178 32c-20.65 0-38.73 8.88-50 23.89C116.73 40.88 98.65 32 78 32a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 220.66 240 164 240 94a62.07 62.07 0 0 0-62-62m-50 174.8C109.74 196.16 32 147.69 32 94a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8"
                  ></path>
              </svg>
              <div className="ml-1">2k</div>
            </div>

            <div className="ml-10 ">
              <div className="flex ml-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.4em"
                  height="1.4em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0"
                  ></path>
                </svg>
                <div className="ml-1">2k</div>
              </div>
            </div>

            <div className="ml-10 ">
              <div className="flex ml-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.4em"
                  height="1.4em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 4H5a2 2 0 0 0-2 2v15l3.467-2.6a2 2 0 0 1 1.2-.4H19a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"
                  ></path>
                </svg>
                <div className="ml-1">2k comments</div>
              </div>
            </div>

            <div className="ml-10">
              <div className="flex ml-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.4em"
                  height="1.4em"
                  viewBox="0 0 24 24"
                  >
                  <path
                    fill="currentColor"
                    d="M18 22q-1.25 0-2.125-.875T15 19q0-.175.025-.363t.075-.337l-7.05-4.1q-.425.375-.95.588T6 15q-1.25 0-2.125-.875T3 12q0-1.25.875-2.125T6 9q.575 0 1.1.213t.95.587l7.05-4.1q-.05-.15-.075-.337T15 5q0-1.25.875-2.125T18 2q1.25 0 2.125.875T21 5q0 1.25-.875 2.125T18 8q-.575 0-1.1-.212t-.95-.588L8.9 11.3q.05.15.075.338T9 12q0 .175-.025.363T8.9 12.7l7.05 4.1q.425-.375.95-.587T18 16q1.25 0 2.125.875T21 19q0 1.25-.875 2.125T18 22"
                  ></path>
                </svg>
                <div className="ml-1">share</div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div>

        <div className='w-80 h-80 bg-gray-200 border border-gray-400 shadow-lg ml-5'>
          <div className="my-3 m-4">
            <div className="card">
              <div
                className="
                flex
                justify-end"
                >
                <span className="badge rounded-pill bg-danger"> </span>
              </div>

              <img
                src={
                  'https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg'
                }
                className="card-img-top"
                alt="..."
                />
              <div className="card-body ml-4">
                <p className="card-text font-bold">The Coldest Sunset</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, debitis eveniet. Dicta, commodi aut.</p>
              </div>
            </div>
          </div>
          
        </div>
        <div>
        <div className='w-80 h-80 bg-gray-200 border border-gray-400 shadow-lg ml-5 mt-8'>
          <div className="my-3 m-4">
            <div className="card">
              <div
                className="
                        flex
                        justify-end"
              >
                <span className="badge rounded-pill bg-danger"> </span>
              </div>

              <img
                src={
                  'https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg'
                }
                className="card-img-top"
                alt="..."
              />
              <div className="card-body ml-4">
                <p className="card-text font-bold">The Coldest Sunset</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, debitis eveniet. Dicta, commodi aut.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        <div>
          
        </div>
        
      </div>
    </>
  );
}
