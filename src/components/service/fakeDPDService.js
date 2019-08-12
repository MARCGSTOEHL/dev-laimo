const dpd = [
    {
      _id: "1",
      EGID: "1723024",
      owner: { name: "Marc", lastname: "Gstöhl", age: 18 },
      tenant: { name: "Liam", lastname: "Gstöhl", email: "liam.g@gmail.com", phone: "078 947 78 78" },
      address: {
        street: "Rofabordstrasse",
        streetnr: 9,
        zipcode: "9478",
        city: "Azmoos",
        region: "Wartau"
      },
      rooms: [
        {
          _id: "1",
          title: "Küche",
          elements: [
            { _id: "1", title: "Boden", status: "OK", attributs:[
                { _id: "1", title: "Baujahr", value:"1989"},
                { _id: "2", title: "Type", value: "Fliesen" },
                { _id: "3", title: "Material", value: "Granti" },
                { _id: "4", title: "Hersteller", value: "Baumgartner Fliesen GmbH" },
            ] },
            { _id: "2", title: "Fenster", status: "OK" },
            { _id: "3", title: "Wände", status: "OK" },
            { _id: "4", title: "Türe", status: "OK" },
            { _id: "5", title: "Türrahmen", status: "OK" },
            { _id: "6", title: "Bachofen", status: "OK" },
            { _id: "7", title: "Kochherd", status: "OK" },
            { _id: "8", title: "Lavabo", status: "OK" },
            { _id: "9", title: "Beleuchtung", status: "OK" },
          ],
          checked: false,
          dailyRentalRate: 2.5,
          publishDate: "2018-01-03T19:04:28.809Z"
        },
        {
          _id: "2",
          title: "Balkon",
          genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
          checked: true,
          numberInStock: 5,
          dailyRentalRate: 2.5
        },
        {
          _id: "3",
          title: "Korridor",
          genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
          checked: true,
          numberInStock: 5,
          dailyRentalRate: 2.5
        },
        {
          _id: "4",
          title: "Gäste WC",
          genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
          checked: true,
          numberInStock: 5,
          dailyRentalRate: 2.5
        }
      ]
    }, {
      _id: "2",
      EGID: "1723024",
      owner: { name: "Hannalore", lastname: "Winterfell", age: 18 },
      tenant: { name: "Liam", lastname: "Gstöhl", email: "liam.g@gmail.com", phone: "078 947 78 78" },
      address: {
        street: "Eisenhald",
        streetnr: 9,
        zipcode: "9496",
        city: "Balzers",
        region: "Balzers"
      },
      rooms: [
        {
          _id: "1",
          title: "Küche",
          elements: [
            { _id: "1", title: "Boden", status: "OK" },
            { _id: "2", title: "Fenster", status: "OK" },
            { _id: "3", title: "Wände", status: "OK" },
            { _id: "4", title: "Fenster", status: "OK" },
            { _id: "5", title: "Beleuchtung", status: "OK" },
            { _id: "6", title: "Fensterrahmen", status: "OK" },
            { _id: "7", title: "Türe", status: "OK" }
          ],
          checked: false,
          dailyRentalRate: 2.5,
          publishDate: "2018-01-03T19:04:28.809Z"
        },
        {
          _id: "2",
          title: "Balkon",
          elements: [
            { _id: "1", title: "Boden", status: "OK" },
            { _id: "2", title: "Fenster", status: "OK" },
            { _id: "3", title: "Wände", status: "OK" },
            { _id: "4", title: "Fenster", status: "OK" },
          ],
          genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
          checked: true,
          numberInStock: 5,
          dailyRentalRate: 2.5
        },
        {
          _id: "3",
          title: "Korridor",
          genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
          checked: false,
          numberInStock: 5,
          dailyRentalRate: 2.5
        },
        {
          _id: "4",
          title: "Gäste WC",
          genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
          checked: true,
          numberInStock: 5,
          dailyRentalRate: 2.5
        },
        {
          _id: "4",
          title: "Korridor",
          genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
          checked: true,
          numberInStock: 5,
          dailyRentalRate: 2.5
        },
        {
          _id: "4",
          title: "Wohnzimmer",
          genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
          checked: true,
          numberInStock: 5,
          dailyRentalRate: 2.5
        }
      ]
    }, {
      _id: "3",
      EGID: "1723024",
      owner: { name: "Marc", lastname: "Gstöhl", age: 18 },
      tenant: { name: "Liam", lastname: "Gstöhl", email: "liam.g@gmail.com", phone: "078 947 78 78" },
      address: {
        street: "Tüfi",
        streetnr: 33,
        zipcode: "9477",
        city: "Trübbach",
        region: "Wartau"
      },
      rooms: [
        {
          _id: "1",
          title: "Küche",
          elements: [
            { _id: "1", title: "Boden", status: "OK" },
            { _id: "2", title: "Fenster", status: "OK" },
            { _id: "3", title: "Wände", status: "OK" }
          ],
          checked: false,
          dailyRentalRate: 2.5,
          publishDate: "2018-01-03T19:04:28.809Z"
        },
        {
          _id: "2",
          title: "Balkon",
          genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
          checked: true,
          numberInStock: 5,
          dailyRentalRate: 2.5
        },
        {
          _id: "3",
          title: "Korridor",
          genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
          checked: true,
          numberInStock: 5,
          dailyRentalRate: 2.5
        },
        {
          _id: "4",
          title: "Gäste WC",
          genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
          checked: true,
          numberInStock: 5,
          dailyRentalRate: 2.5
        }
      ]
    },{
      _id: "4",
      EGID: "1723024",
      owner: { name: "Marc", lastname: "Gstöhl", age: 18 },
      tenant: { name: "Liam", lastname: "Gstöhl", email: "liam.g@gmail.com", phone: "078 947 78 78" },
      address: {
        street: "Zimmerlistrasse",
        streetnr: 6,
        zipcode: "8004",
        city: "Zürich",
        region: "Zürich"
      },
      rooms: [
        {
          _id: "1",
          title: "Küche",
          elements: [
            { _id: "1", title: "Boden", status: "OK" },
            { _id: "2", title: "Fenster", status: "OK" },
            { _id: "3", title: "Wände", status: "OK" }
          ],
          checked: false,
          dailyRentalRate: 2.5,
          publishDate: "2018-01-03T19:04:28.809Z"
        },
        {
          _id: "2",
          title: "Balkon",
          genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
          checked: true,
          numberInStock: 5,
          dailyRentalRate: 2.5
        },
        {
          _id: "3",
          title: "Korridor",
          genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
          checked: true,
          numberInStock: 5,
          dailyRentalRate: 2.5
        },
        {
          _id: "4",
          title: "Gäste WC",
          genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
          checked: true,
          numberInStock: 5,
          dailyRentalRate: 2.5
        }
      ]
    },{
      _id: "5",
      EGID: "1723024",
      owner: { name: "Marc", lastname: "Gstöhl", age: 18 },
      tenant: { name: "Liam", lastname: "Gstöhl", email: "liam.g@gmail.com", phone: "078 947 78 78" },
      address: {
        street: "Sonnenhaldenstrasse",
        streetnr: 11,
        zipcode: "9004",
        city: "St.Gallen",
        region: "St.Gallen"
      },
      rooms: [
        {
          _id: "1",
          title: "Küche",
          elements: [
            { _id: "1", title: "Boden", status: "OK" },
            { _id: "2", title: "Fenster", status: "OK" },
            { _id: "3", title: "Wände", status: "OK" }
          ],
          checked: false,
          dailyRentalRate: 2.5,
          publishDate: "2018-01-03T19:04:28.809Z"
        },
        {
          _id: "2",
          title: "Balkon",
          genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
          checked: true,
          numberInStock: 5,
          dailyRentalRate: 2.5
        },
        {
          _id: "3",
          title: "Korridor",
          genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
          checked: true,
          numberInStock: 5,
          dailyRentalRate: 2.5
        },
        {
          _id: "4",
          title: "Gäste WC",
          genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
          checked: true,
          numberInStock: 5,
          dailyRentalRate: 2.5
        }
      ]
    },
  ];

export function getDpds() {
  return dpd;
}

export function getDpd(id) {
  return dpd.find(d => d._id === id);
}

export function getRoom(roomId, dpdId) {
  const resultingDpd = dpd.find(d => d._id === dpdId);

  const resultingRoom = resultingDpd.rooms.find(r => r._id === roomId);

  return resultingRoom;

}

export function getElement(roomId, dpdId) {
  const resultingDpd = dpd.find(d => d._id === dpdId);

  const resultingRoom = resultingDpd.rooms.find(r => r._id === roomId);

  return resultingRoom;

}

export function saveDpd(dpd) {
  let dpdInDb = dpd.find(m => m._id === dpd._id) || {};
  dpdInDb.title = dpd.title;
  dpdInDb.numberInStock = dpd.numberInStock;
  dpdInDb.dailyRentalRate = dpd.dailyRentalRate;

  if (!dpdInDb._id) {
    dpdInDb._id = Date.now().toString();
    dpd.push(dpdInDb);
  }

  return dpdInDb;
}

export function deleteDpd(id) {
  let dpdInDb = dpd.find(m => m._id === id);
  dpd.splice(dpd.indexOf(dpdInDb), 1);
  return dpdInDb;
}
