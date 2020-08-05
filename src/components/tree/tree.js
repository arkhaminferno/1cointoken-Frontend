import React from "react";
import Tree from "react-vertical-tree";

// data have to be below structure

export default function tbk() {
  const data = [
    {
      id: 1,
      name: "0.025",
      parent: null,
      children: [
        { id: 2, parent: { id: 1 }, name: "subcompany1", children: [] },
        {
          id: 3,
          parent: { id: 1 },
          name: "subcompany2",
          children: [],
        },
        { id: 4, parent: { id: 1 }, name: "company2", children: [] },
      ],
    },
  ];

  return (
    <div>
      <Tree data={data} direction />
    </div>
  );
}
