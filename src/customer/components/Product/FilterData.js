export const color=[
    "White",
    "Black",
    "Mehroon",
    "Pink",
    "Blue",
    "Green",
    "Dark Green",
    " Brown",
    " Dark Blue",
    "Yellow",
    
]
export const filters=[
    {
        id:"color",
        name: "Color",
        options:[
            {value: "white",label:"White"},
            {value: "black",label:"Black"},
            {value: "mehroon",label:"Mehroon"},
            {value: "pink",label:"Pink"},
            {value: "blue",label:"Blue"},
            {value: "dark green",label:"Dark Green"},
            {value: "green",label:"Green"},
            {value: "brown",label:"Brown"},
            {value: "dark blue",label:"Dark Blue"},
            {value: "yellow",label:"Yellow"},

        ],
    },
    {
        id:"size",
        name:"Size",
        options:[
            {value:"S",label:"S"},
             {value:"M",label:"M"},
              {value:"L",label:"L"},
               {value:"XL",label:"XL"},
                {value:"XXL",label:"XXL"},
                 {value:"XXXL",label:"XXXL"},

        ],
    },
];
    export const singleFilters=[
        {
          id:"price",
          name:"Price",
          options:[
            {value:"159-399",label:"159 to 399"},
            {value:"399-999",label:"399-999"},
            {value:"999-1999",label:"999-1999"},
            {value:"1999-2999",label:"1999-2999"},
            {value:"2999-4999",label:"2999-4999"},
          ],
        },
        {
            id:"discount",
            name:"Disccount Range",
            options: [
                {
                    value: "10",
                    label:"10% And Above"
                },
                {
                    value: "20",
                    label:"20% And Above"
                },
                {
                    value: "40",
                    label:"40% And Above"
                },
                {
                    value: "60",
                    label:"60% And Above"
                },
                {
                    value: "70",
                    label:"70% And Above"
                },
            ],
        },
        {
            id:"stock",
            name:"Availability",
            options: [
                {
                    value: "in_stock",
                    label:"In Stock"
                },
                {
                    value: "out_of_stock",
                    label:"Out of Stock"
                },
            ],
        },
    ]

