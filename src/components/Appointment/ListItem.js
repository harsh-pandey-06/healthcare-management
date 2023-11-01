import React from "react";

const ListItem = (props) => {
  const { value } = props;
  console.log(value)
  return (
    <div className="w-full shadow-xl p-5 rounded-lg">
      <div>
        <span className="text-lg font-medium">Name: </span>Rahul Kumar
      </div>
      <div>
        <span className="text-lg font-medium">Patient Id: </span>122819
      </div>
      <div>
        <span className="text-lg font-medium">Preferred slot: </span>12 PM to
        2PM
      </div>
      <div>
        <span className="text-lg font-medium">Department: </span>ENT
      </div>
      <div>
        <span className="text-lg font-medium">Reason: </span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales
        vel orci sit amet viverra. In ac nulla at tellus eleifend tincidunt
        ultrices id augue. Sed dignissim aliquam sem, ut vestibulum ante. Proin
        ultricies eros est, et cursus erat efficitur ac. Integer euismod
        dignissim massa. Praesent maximus laoreet metus vel sagittis. Nullam ut
        luctus mi, in malesuada turpis. Sed nec turpis quis enim pharetra varius
        eget non magna. Nullam eget nulla nunc. Duis condimentum, orci posuere
        mollis pellentesque, massa nunc varius nisl, et elementum tellus felis
        eget nisl. Nulla vitae est semper, blandit velit sit amet, varius nisi.
        Ma
      </div>
      <div className="flex gap-2">
        <button
          type="button"
          className="bg-blue-500 flex items-center justify-between gap-2 cursor-pointer text-white px-12 py-3 rounded-lg text-sm font-medium mt-4"
        >
          Accept
        </button>
        <button
          type="button"
          className="bg-red-500 flex items-center justify-between gap-2 cursor-pointer text-white px-12 py-3 rounded-lg text-sm font-medium mt-4"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default ListItem;
