/*
[
  {
    'repeat(20)': {
      _id: '{{objectId()}}',
      name: '{{company()}}',
      description: '{{lorem(1, "sentences")}}',
      categoryIds: [
        {
          'repeat(1,3)':
          '{{random(1, 2, 3,4,5)}}'
        }
      ],
      variants: [
        {
          'repeat(4,6)': {
           price: '{{floating(1000, 4000, 2, "$0,0.00")}}',
           picture: 'https://loremflickr.com/320/240',
           promo: '{{random("bestSeller", "new", "pressFavorites", "", "", "")}}',
           colorId: '{{random(1, 2, 3,4,5,6,7,8,9,10)}}'
          }
        }
      ]
    }
  }
]
*/


const products = [
  {
    "variants": [
      {
        "colorId": 9,
        "promo": "pressFavorites",
        "picture": "https://loremflickr.com/320/240",
        "price": "$1,566.15"
      },
      {
        "colorId": 3,
        "promo": "",
        "picture": "https://loremflickr.com/320/240",
        "price": "$1,475.40"
      },
      {
        "colorId": 7,
        "promo": "pressFavorites",
        "picture": "https://loremflickr.com/320/240",
        "price": "$3,086.94"
      },
      {
        "colorId": 2,
        "promo": "",
        "picture": "https://loremflickr.com/320/240",
        "price": "$3,806.77"
      },
      {
        "colorId": 6,
        "promo": "",
        "picture": "https://loremflickr.com/320/240",
        "price": "$1,092.23"
      },
      {
        "colorId": 1,
        "promo": "",
        "picture": "https://loremflickr.com/320/240",
        "price": "$1,553.23"
      }
    ],
    "categoryIds": [
      3,
      2
    ],
    "description": "Culpa aliquip nisi nulla ad nisi.",
    "name": "Aeora",
    "_id": "5a8cd322ec960829110f912e"
  },
  {
    "variants": [
      {
        "colorId": 5,
        "promo": "bestSeller",
        "picture": "https://loremflickr.com/320/240",
        "price": "$1,957.68"
      },
      {
        "colorId": 4,
        "promo": "",
        "picture": "https://loremflickr.com/320/240",
        "price": "$2,462.95"
      },
      {
        "colorId": 6,
        "promo": "",
        "picture": "https://loremflickr.com/320/240",
        "price": "$2,089.39"
      },
      {
        "colorId": 4,
        "promo": "",
        "picture": "https://loremflickr.com/320/240",
        "price": "$1,786.82"
      },
      {
        "colorId": 3,
        "promo": "pressFavorites",
        "picture": "https://loremflickr.com/320/240",
        "price": "$2,003.04"
      }
    ],
    "categoryIds": [
      4,
      1,
      4
    ],
    "description": "Aute quis elit in ad commodo deserunt non in.",
    "name": "Barkarama",
    "_id": "5a8cd323107589efbea2d391"
  },
  {
    "variants": [
      {
        "colorId": 8,
        "promo": "",
        "picture": "https://loremflickr.com/320/240",
        "price": "$1,828.04"
      },
      {
        "colorId": 8,
        "promo": "",
        "picture": "https://loremflickr.com/320/240",
        "price": "$2,380.32"
      },
      {
        "colorId": 3,
        "promo": "",
        "picture": "https://loremflickr.com/320/240",
        "price": "$1,209.59"
      },
      {
        "colorId": 5,
        "promo": "new",
        "picture": "https://loremflickr.com/320/240",
        "price": "$3,219.24"
      },
      {
        "colorId": 8,
        "promo": "",
        "picture": "https://loremflickr.com/320/240",
        "price": "$3,838.12"
      },
      {
        "colorId": 5,
        "promo": "bestSeller",
        "picture": "https://loremflickr.com/320/240",
        "price": "$1,978.98"
      }
    ],
    "categoryIds": [
      3,
      1,
      5
    ],
    "description": "Qui amet ex cupidatat mollit do elit nisi labore sunt voluptate velit.",
    "name": "Netagy",
    "_id": "5a8cd32374c51b876b8bce2f"
  },
  {
    "variants": [
      {
        "colorId": 3,
        "promo": "new",
        "picture": "https://loremflickr.com/320/240",
        "price": "$2,777.10"
      },
      {
        "colorId": 10,
        "promo": "pressFavorites",
        "picture": "https://loremflickr.com/320/240",
        "price": "$2,131.76"
      },
      {
        "colorId": 7,
        "promo": "bestSeller",
        "picture": "https://loremflickr.com/320/240",
        "price": "$1,824.81"
      },
      {
        "colorId": 8,
        "promo": "pressFavorites",
        "picture": "https://loremflickr.com/320/240",
        "price": "$2,159.30"
      }
    ],
    "categoryIds": [
      5
    ],
    "description": "Tempor aliqua Lorem minim dolore sunt excepteur anim sunt enim incididunt deserunt consectetur irure.",
    "name": "Rooforia",
    "_id": "5a8cd323c5991271c31d4b71"
  },
  {
    "variants": [
      {
        "colorId": 6,
        "promo": "new",
        "picture": "https://loremflickr.com/320/240",
        "price": "$1,701.39"
      },
      {
        "colorId": 3,
        "promo": "new",
        "picture": "https://loremflickr.com/320/240",
        "price": "$3,576.94"
      },
      {
        "colorId": 5,
        "promo": "bestSeller",
        "picture": "https://loremflickr.com/320/240",
        "price": "$3,316.09"
      },
      {
        "colorId": 8,
        "promo": "",
        "picture": "https://loremflickr.com/320/240",
        "price": "$1,284.63"
      }
    ],
    "categoryIds": [
      4,
      4,
      1
    ],
    "description": "Enim voluptate ad ut sit do fugiat eiusmod amet fugiat tempor incididunt magna.",
    "name": "Xerex",
    "_id": "5a8cd323b38920810491e357"
  },
  {
    "variants": [
      {
        "colorId": 2,
        "promo": "",
        "picture": "https://loremflickr.com/320/240",
        "price": "$2,027.04"
      },
      {
        "colorId": 9,
        "promo": "bestSeller",
        "picture": "https://loremflickr.com/320/240",
        "price": "$1,075.07"
      },
      {
        "colorId": 8,
        "promo": "pressFavorites",
        "picture": "https://loremflickr.com/320/240",
        "price": "$1,165.37"
      },
      {
        "colorId": 5,
        "promo": "",
        "picture": "https://loremflickr.com/320/240",
        "price": "$1,390.22"
      },
      {
        "colorId": 8,
        "promo": "",
        "picture": "https://loremflickr.com/320/240",
        "price": "$3,903.10"
      },
      {
        "colorId": 7,
        "promo": "pressFavorites",
        "picture": "https://loremflickr.com/320/240",
        "price": "$2,282.26"
      }
    ],
    "categoryIds": [
      1,
      3,
      1
    ],
    "description": "Laborum enim nisi consectetur nisi proident.",
    "name": "Mixers",
    "_id": "5a8cd323d5840d26f2a650dc"
  },
  {
    "variants": [
      {
        "colorId": 8,
        "promo": "",
        "picture": "https://loremflickr.com/320/240",
        "price": "$2,283.35"
      },
      {
        "colorId": 7,
        "promo": "",
        "picture": "https://loremflickr.com/320/240",
        "price": "$2,954.44"
      },
      {
        "colorId": 2,
        "promo": "pressFavorites",
        "picture": "https://loremflickr.com/320/240",
        "price": "$1,960.00"
      },
      {
        "colorId": 10,
        "promo": "new",
        "picture": "https://loremflickr.com/320/240",
        "price": "$1,708.65"
      }
    ],
    "categoryIds": [
      4,
      1
    ],
    "description": "Consectetur irure magna officia commodo ut commodo minim sint labore ullamco ut et reprehenderit.",
    "name": "Quilch",
    "_id": "5a8cd323bf1c0feaefe923ea"
  },
  {
    "variants": [
      {
        "colorId": 9,
        "promo": "",
        "picture": "https://loremflickr.com/320/240",
        "price": "$2,139.05"
      },
      {
        "colorId": 3,
        "promo": "pressFavorites",
        "picture": "https://loremflickr.com/320/240",
        "price": "$3,143.55"
      },
      {
        "colorId": 7,
        "promo": "",
        "picture": "https://loremflickr.com/320/240",
        "price": "$1,026.42"
      },
      {
        "colorId": 4,
        "promo": "pressFavorites",
        "picture": "https://loremflickr.com/320/240",
        "price": "$3,186.58"
      }
    ],
    "categoryIds": [
      1,
      3,
      3
    ],
    "description": "Reprehenderit elit occaecat consectetur dolore ad ut.",
    "name": "Syntac",
    "_id": "5a8cd323ef825a46394f512b"
  },
  {
    "variants": [
      {
        "colorId": 7,
        "promo": "pressFavorites",
        "picture": "https://loremflickr.com/320/240",
        "price": "$3,584.68"
      },
      {
        "colorId": 3,
        "promo": "bestSeller",
        "picture": "https://loremflickr.com/320/240",
        "price": "$2,789.21"
      },
      {
        "colorId": 5,
        "promo": "",
        "picture": "https://loremflickr.com/320/240",
        "price": "$1,901.27"
      },
      {
        "colorId": 1,
        "promo": "",
        "picture": "https://loremflickr.com/320/240",
        "price": "$2,406.94"
      },
      {
        "colorId": 2,
        "promo": "pressFavorites",
        "picture": "https://loremflickr.com/320/240",
        "price": "$3,412.17"
      },
      {
        "colorId": 5,
        "promo": "bestSeller",
        "picture": "https://loremflickr.com/320/240",
        "price": "$3,928.13"
      }
    ],
    "categoryIds": [
      1,
      3,
      4
    ],
    "description": "Exercitation labore adipisicing duis excepteur eiusmod enim ad cupidatat irure nulla cupidatat ex.",
    "name": "Artiq",
    "_id": "5a8cd3239b8ca4a4156723b7"
  },
  {
    "variants": [
      {
        "colorId": 9,
        "promo": "",
        "picture": "https://loremflickr.com/320/240",
        "price": "$2,686.84"
      },
      {
        "colorId": 8,
        "promo": "pressFavorites",
        "picture": "https://loremflickr.com/320/240",
        "price": "$1,131.42"
      },
      {
        "colorId": 2,
        "promo": "new",
        "picture": "https://loremflickr.com/320/240",
        "price": "$2,959.18"
      },
      {
        "colorId": 10,
        "promo": "",
        "picture": "https://loremflickr.com/320/240",
        "price": "$1,964.84"
      },
      {
        "colorId": 6,
        "promo": "new",
        "picture": "https://loremflickr.com/320/240",
        "price": "$3,269.41"
      }
    ],
    "categoryIds": [
      2
    ],
    "description": "Laboris eiusmod incididunt sunt officia sit irure velit fugiat minim nisi anim.",
    "name": "Kineticut",
    "_id": "5a8cd323b4c974de2fd78ec3"
  },
  {
    "variants": [
      {
        "colorId": 4,
        "promo": "bestSeller",
        "picture": "https://loremflickr.com/320/240",
        "price": "$2,273.51"
      },
      {
        "colorId": 2,
        "promo": "",
        "picture": "https://loremflickr.com/320/240",
        "price": "$1,664.50"
      },
      {
        "colorId": 8,
        "promo": "",
        "picture": "https://loremflickr.com/320/240",
        "price": "$2,348.06"
      },
      {
        "colorId": 6,
        "promo": "",
        "picture": "https://loremflickr.com/320/240",
        "price": "$2,715.57"
      },
      {
        "colorId": 10,
        "promo": "pressFavorites",
        "picture": "https://loremflickr.com/320/240",
        "price": "$3,252.73"
      },
      {
        "colorId": 2,
        "promo": "pressFavorites",
        "picture": "https://loremflickr.com/320/240",
        "price": "$2,885.27"
      }
    ],
    "categoryIds": [
      1,
      3,
      5
    ],
    "description": "In ipsum voluptate officia sint id sunt occaecat.",
    "name": "Viagreat",
    "_id": "5a8cd323976c61b7bbeb406e"
  },
  {
    "variants": [
      {
        "colorId": 6,
        "promo": "pressFavorites",
        "picture": "https://loremflickr.com/320/240",
        "price": "$3,844.75"
      },
      {
        "colorId": 5,
        "promo": "",
        "picture": "https://loremflickr.com/320/240",
        "price": "$1,647.66"
      },
      {
        "colorId": 10,
        "promo": "bestSeller",
        "picture": "https://loremflickr.com/320/240",
        "price": "$1,291.75"
      },
      {
        "colorId": 1,
        "promo": "bestSeller",
        "picture": "https://loremflickr.com/320/240",
        "price": "$2,828.76"
      },
      {
        "colorId": 4,
        "promo": "pressFavorites",
        "picture": "https://loremflickr.com/320/240",
        "price": "$3,732.66"
      }
    ],
    "categoryIds": [
      3
    ],
    "description": "Consequat adipisicing veniam dolore qui incididunt.",
    "name": "Andryx",
    "_id": "5a8cd323df291c6e260f562f"
  },
  {
    "variants": [
      {
        "colorId": 6,
        "promo": "",
        "picture": "https://loremflickr.com/320/240",
        "price": "$2,534.34"
      },
      {
        "colorId": 4,
        "promo": "",
        "picture": "https://loremflickr.com/320/240",
        "price": "$3,626.31"
      },
      {
        "colorId": 7,
        "promo": "",
        "picture": "https://loremflickr.com/320/240",
        "price": "$3,842.33"
      },
      {
        "colorId": 1,
        "promo": "bestSeller",
        "picture": "https://loremflickr.com/320/240",
        "price": "$2,856.35"
      },
      {
        "colorId": 7,
        "promo": "new",
        "picture": "https://loremflickr.com/320/240",
        "price": "$2,361.43"
      }
    ],
    "categoryIds": [
      2
    ],
    "description": "Commodo commodo irure veniam enim anim culpa ad duis ex tempor dolor ex duis.",
    "name": "Kongle",
    "_id": "5a8cd3237d01d292f4c1a213"
  },
  {
    "variants": [
      {
        "colorId": 8,
        "promo": "",
        "picture": "https://loremflickr.com/320/240",
        "price": "$1,899.31"
      },
      {
        "colorId": 3,
        "promo": "new",
        "picture": "https://loremflickr.com/320/240",
        "price": "$1,441.48"
      },
      {
        "colorId": 6,
        "promo": "",
        "picture": "https://loremflickr.com/320/240",
        "price": "$3,302.37"
      },
      {
        "colorId": 8,
        "promo": "",
        "picture": "https://loremflickr.com/320/240",
        "price": "$3,337.87"
      },
      {
        "colorId": 10,
        "promo": "",
        "picture": "https://loremflickr.com/320/240",
        "price": "$3,921.12"
      },
      {
        "colorId": 2,
        "promo": "new",
        "picture": "https://loremflickr.com/320/240",
        "price": "$1,589.89"
      }
    ],
    "categoryIds": [
      2,
      3
    ],
    "description": "Eu amet amet nostrud qui.",
    "name": "Plasmos",
    "_id": "5a8cd323b2d042f7ac5c8bf6"
  },
  {
    "variants": [
      {
        "colorId": 9,
        "promo": "bestSeller",
        "picture": "https://loremflickr.com/320/240",
        "price": "$2,758.84"
      },
      {
        "colorId": 10,
        "promo": "",
        "picture": "https://loremflickr.com/320/240",
        "price": "$3,131.79"
      },
      {
        "colorId": 1,
        "promo": "",
        "picture": "https://loremflickr.com/320/240",
        "price": "$2,335.24"
      },
      {
        "colorId": 7,
        "promo": "",
        "picture": "https://loremflickr.com/320/240",
        "price": "$1,648.43"
      },
      {
        "colorId": 1,
        "promo": "",
        "picture": "https://loremflickr.com/320/240",
        "price": "$3,534.47"
      }
    ],
    "categoryIds": [
      3,
      4
    ],
    "description": "Ex reprehenderit incididunt veniam eu officia sint.",
    "name": "Bytrex",
    "_id": "5a8cd323bb4c127705486f3b"
  },
  {
    "variants": [
      {
        "colorId": 10,
        "promo": "",
        "picture": "https://loremflickr.com/320/240",
        "price": "$2,225.75"
      },
      {
        "colorId": 3,
        "promo": "new",
        "picture": "https://loremflickr.com/320/240",
        "price": "$2,107.09"
      },
      {
        "colorId": 10,
        "promo": "new",
        "picture": "https://loremflickr.com/320/240",
        "price": "$3,558.90"
      },
      {
        "colorId": 6,
        "promo": "",
        "picture": "https://loremflickr.com/320/240",
        "price": "$1,369.00"
      },
      {
        "colorId": 5,
        "promo": "bestSeller",
        "picture": "https://loremflickr.com/320/240",
        "price": "$3,078.50"
      }
    ],
    "categoryIds": [
      2,
      4
    ],
    "description": "Reprehenderit ex laborum cupidatat eu mollit enim magna mollit tempor id pariatur enim veniam.",
    "name": "Kinetica",
    "_id": "5a8cd323cc995b916e18f228"
  },
  {
    "variants": [
      {
        "colorId": 9,
        "promo": "bestSeller",
        "picture": "https://loremflickr.com/320/240",
        "price": "$1,735.02"
      },
      {
        "colorId": 3,
        "promo": "",
        "picture": "https://loremflickr.com/320/240",
        "price": "$1,618.70"
      },
      {
        "colorId": 5,
        "promo": "bestSeller",
        "picture": "https://loremflickr.com/320/240",
        "price": "$1,399.79"
      },
      {
        "colorId": 5,
        "promo": "bestSeller",
        "picture": "https://loremflickr.com/320/240",
        "price": "$2,353.81"
      },
      {
        "colorId": 6,
        "promo": "bestSeller",
        "picture": "https://loremflickr.com/320/240",
        "price": "$2,235.94"
      },
      {
        "colorId": 6,
        "promo": "pressFavorites",
        "picture": "https://loremflickr.com/320/240",
        "price": "$2,908.28"
      }
    ],
    "categoryIds": [
      1,
      5,
      2
    ],
    "description": "Sit cillum laborum nisi deserunt fugiat duis ut in velit.",
    "name": "Fibrodyne",
    "_id": "5a8cd323f55fd9c62ba2908f"
  },
  {
    "variants": [
      {
        "colorId": 3,
        "promo": "bestSeller",
        "picture": "https://loremflickr.com/320/240",
        "price": "$3,771.81"
      },
      {
        "colorId": 10,
        "promo": "",
        "picture": "https://loremflickr.com/320/240",
        "price": "$3,077.32"
      },
      {
        "colorId": 9,
        "promo": "new",
        "picture": "https://loremflickr.com/320/240",
        "price": "$3,693.99"
      },
      {
        "colorId": 8,
        "promo": "",
        "picture": "https://loremflickr.com/320/240",
        "price": "$3,255.71"
      }
    ],
    "categoryIds": [
      4,
      4,
      4
    ],
    "description": "Labore mollit fugiat sint culpa proident aliquip deserunt labore id qui.",
    "name": "Cosmosis",
    "_id": "5a8cd32393a170c842df4211"
  },
  {
    "variants": [
      {
        "colorId": 3,
        "promo": "new",
        "picture": "https://loremflickr.com/320/240",
        "price": "$1,845.86"
      },
      {
        "colorId": 9,
        "promo": "pressFavorites",
        "picture": "https://loremflickr.com/320/240",
        "price": "$2,280.46"
      },
      {
        "colorId": 2,
        "promo": "bestSeller",
        "picture": "https://loremflickr.com/320/240",
        "price": "$1,244.61"
      },
      {
        "colorId": 6,
        "promo": "pressFavorites",
        "picture": "https://loremflickr.com/320/240",
        "price": "$1,762.83"
      },
      {
        "colorId": 8,
        "promo": "pressFavorites",
        "picture": "https://loremflickr.com/320/240",
        "price": "$3,948.34"
      }
    ],
    "categoryIds": [
      4,
      2,
      1
    ],
    "description": "Do quis incididunt velit fugiat ut magna culpa.",
    "name": "Gaptec",
    "_id": "5a8cd3247a39c7944616681b"
  },
  {
    "variants": [
      {
        "colorId": 3,
        "promo": "new",
        "picture": "https://loremflickr.com/320/240",
        "price": "$3,937.83"
      },
      {
        "colorId": 5,
        "promo": "bestSeller",
        "picture": "https://loremflickr.com/320/240",
        "price": "$3,142.54"
      },
      {
        "colorId": 10,
        "promo": "new",
        "picture": "https://loremflickr.com/320/240",
        "price": "$1,722.73"
      },
      {
        "colorId": 9,
        "promo": "bestSeller",
        "picture": "https://loremflickr.com/320/240",
        "price": "$1,535.05"
      },
      {
        "colorId": 6,
        "promo": "bestSeller",
        "picture": "https://loremflickr.com/320/240",
        "price": "$3,459.04"
      }
    ],
    "categoryIds": [
      4
    ],
    "description": "Est occaecat culpa pariatur nisi fugiat aliquip eu sint.",
    "name": "Spherix",
    "_id": "5a8cd324a8427584aee57db9"
  }
];

export default products;
