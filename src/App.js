import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      "success":true,"items":[{"rank":1,"market_hash_name":"Chroma 2 Case","volume":26300855},{"rank":2,"market_hash_name":"Operation Breakout Weapon Case","volume":19112805},{"rank":3,"market_hash_name":"Chroma 3 Case","volume":17117369},{"rank":4,"market_hash_name":"Falchion Case","volume":16149176},{"rank":5,"market_hash_name":"Shadow Case","volume":15548604},{"rank":6,"market_hash_name":"Gamma Case","volume":14679062},{"rank":7,"market_hash_name":"Operation Wildfire Case","volume":13511122},{"rank":8,"market_hash_name":"Gamma 2 Case","volume":12409730},{"rank":9,"market_hash_name":"Revolver Case","volume":12161570},{"rank":10,"market_hash_name":"Operation Phoenix Weapon Case","volume":10977602},{"rank":11,"market_hash_name":"Glove Case","volume":8242383},{"rank":12,"market_hash_name":"Spectrum Case","volume":7090312},{"rank":13,"market_hash_name":"Chroma Case","volume":5852071},{"rank":14,"market_hash_name":"Operation Hydra Case","volume":2595020},{"rank":15,"market_hash_name":"Operation Vanguard Weapon Case","volume":2139563},{"rank":16,"market_hash_name":"AWP | Safari Mesh (Field-Tested)","volume":1768649},{"rank":17,"market_hash_name":"AK-47 | Elite Build (Field-Tested)","volume":1683226},{"rank":18,"market_hash_name":"AK-47 | Safari Mesh (Field-Tested)","volume":1641743},{"rank":19,"market_hash_name":"M4A1-S | Boreal Forest (Field-Tested)","volume":1550542},{"rank":20,"market_hash_name":"Chroma 2 Case Key","volume":1533477},{"rank":21,"market_hash_name":"Huntsman Weapon Case","volume":1415681},{"rank":22,"market_hash_name":"M4A4 | Urban DDPAT (Field-Tested)","volume":1403862},{"rank":23,"market_hash_name":"AK-47 | Redline (Field-Tested)","volume":1371371},{"rank":24,"market_hash_name":"AK-47 | Elite Build (Minimal Wear)","volume":1365035},{"rank":25,"market_hash_name":"P250 | Sand Dune (Field-Tested)","volume":1350378},{"rank":26,"market_hash_name":"AWP | Worm God (Minimal Wear)","volume":1271055},{"rank":27,"market_hash_name":"P250 | Metallic DDPAT (Factory New)","volume":1171463},{"rank":28,"market_hash_name":"AK-47 | Elite Build (Well-Worn)","volume":1069216},{"rank":29,"market_hash_name":"AWP | Worm God (Field-Tested)","volume":1033945},{"rank":30,"market_hash_name":"P250 | Valence (Field-Tested)","volume":1006285},{"rank":31,"market_hash_name":"MAC-10 | Silver (Factory New)","volume":987663},{"rank":32,"market_hash_name":"Five-SeveN | Forest Night (Field-Tested)","volume":971035},{"rank":33,"market_hash_name":"P250 | Boreal Forest (Field-Tested)","volume":946219},{"rank":34,"market_hash_name":"USP-S | Torque (Field-Tested)","volume":939756},{"rank":35,"market_hash_name":"UMP-45 | Carbon Fiber (Factory New)","volume":937828},{"rank":36,"market_hash_name":"Tec-9 | Urban DDPAT (Field-Tested)","volume":899894},{"rank":37,"market_hash_name":"Glock-18 | Bunsen Burner (Field-Tested)","volume":884313},{"rank":38,"market_hash_name":"Glock-18 | Death Rattle (Field-Tested)","volume":865527},{"rank":39,"market_hash_name":"USP-S | Forest Leaves (Field-Tested)","volume":856983},{"rank":40,"market_hash_name":"Krakow 2017 Legends Autograph Capsule","volume":849674},{"rank":41,"market_hash_name":"Tec-9 | Groundwater (Field-Tested)","volume":846476},{"rank":42,"market_hash_name":"P90 | Sand Spray (Field-Tested)","volume":844714},{"rank":43,"market_hash_name":"Negev | Man-o'-war (Minimal Wear)","volume":844621},{"rank":44,"market_hash_name":"UMP-45 | Urban DDPAT (Field-Tested)","volume":830017},{"rank":45,"market_hash_name":"Desert Eagle | Bronze Deco (Factory New)","volume":829192},{"rank":46,"market_hash_name":"Dual Berettas | Colony (Field-Tested)","volume":819384},{"rank":47,"market_hash_name":"SSG 08 | Blue Spruce (Field-Tested)","volume":817319},{"rank":48,"market_hash_name":"FAMAS | Colony (Field-Tested)","volume":815763},{"rank":49,"market_hash_name":"SG 553 | Army Sheen (Factory New)","volume":813572},{"rank":50,"market_hash_name":"SG 553 | Waves Perforated (Field-Tested)","volume":813307},{"rank":51,"market_hash_name":"MAG-7 | Metallic DDPAT (Factory New)","volume":812940},{"rank":52,"market_hash_name":"Dual Berettas | Contractor (Field-Tested)","volume":811653},{"rank":53,"market_hash_name":"Spectrum Case Key","volume":809292},{"rank":54,"market_hash_name":"Galil AR | Sage Spray (Field-Tested)","volume":805932},{"rank":55,"market_hash_name":"XM1014 | Blue Spruce (Field-Tested)","volume":798419},{"rank":56,"market_hash_name":"Negev | Army Sheen (Factory New)","volume":798093},{"rank":57,"market_hash_name":"R8 Revolver | Bone Mask (Field-Tested)","volume":794872},{"rank":58,"market_hash_name":"Nova | Sand Dune (Field-Tested)","volume":793504},{"rank":59,"market_hash_name":"MP7 | Army Recon (Field-Tested)","volume":786753},{"rank":60,"market_hash_name":"MP7 | Forest DDPAT (Field-Tested)","volume":783884},{"rank":61,"market_hash_name":"UMP-45 | Grand Prix (Field-Tested)","volume":783364},{"rank":62,"market_hash_name":"PP-Bizon | Sand Dashed (Field-Tested)","volume":778589},{"rank":63,"market_hash_name":"MP9 | Sand Dashed (Field-Tested)","volume":772275},{"rank":64,"market_hash_name":"PP-Bizon | Urban Dashed (Field-Tested)","volume":771910},{"rank":65,"market_hash_name":"G3SG1 | Polar Camo (Field-Tested)","volume":770875},{"rank":66,"market_hash_name":"SCAR-20 | Carbon Fiber (Factory New)","volume":768950},{"rank":67,"market_hash_name":"AWP | Worm God (Factory New)","volume":768670},{"rank":68,"market_hash_name":"AUG | Storm (Field-Tested)","volume":768409},{"rank":69,"market_hash_name":"M4A4 | Evil Daimyo (Minimal Wear)","volume":767595},{"rank":70,"market_hash_name":"AUG | Contractor (Field-Tested)","volume":764580},{"rank":71,"market_hash_name":"USP-S | Torque (Minimal Wear)","volume":762640},{"rank":72,"market_hash_name":"Gamma 2 Case Key","volume":762014},{"rank":73,"market_hash_name":"Nova | Polar Mesh (Field-Tested)","volume":761008},{"rank":74,"market_hash_name":"SCAR-20 | Sand Mesh (Field-Tested)","volume":752817},{"rank":75,"market_hash_name":"G3SG1 | Jungle Dashed (Field-Tested)","volume":752178},{"rank":76,"market_hash_name":"P250 | Valence (Minimal Wear)","volume":751828},{"rank":77,"market_hash_name":"eSports 2014 Summer Case","volume":750579},{"rank":78,"market_hash_name":"G3SG1 | Desert Storm (Field-Tested)","volume":750020},{"rank":79,"market_hash_name":"Nova | Predator (Field-Tested)","volume":748594},{"rank":80,"market_hash_name":"Sawed-Off | Forest DDPAT (Field-Tested)","volume":746880},{"rank":81,"market_hash_name":"SCAR-20 | Contractor (Field-Tested)","volume":746029},{"rank":82,"market_hash_name":"USP-S | Torque (Factory New)","volume":744155},{"rank":83,"market_hash_name":"M4A4 | Evil Daimyo (Field-Tested)","volume":738963},{"rank":84,"market_hash_name":"Five-SeveN | Orange Peel (Field-Tested)","volume":729585},{"rank":85,"market_hash_name":"Desert Eagle | Mudder (Field-Tested)","volume":728687},{"rank":86,"market_hash_name":"M4A1-S | Nitro (Field-Tested)","volume":706680},{"rank":87,"market_hash_name":"Shadow Case Key","volume":706591},{"rank":88,"market_hash_name":"Sticker Capsule","volume":704091},{"rank":89,"market_hash_name":"MAC-10 | Candy Apple (Minimal Wear)","volume":702949},{"rank":90,"market_hash_name":"Tec-9 | Sandstorm (Field-Tested)","volume":699633},{"rank":91,"market_hash_name":"Desert Eagle | Bronze Deco (Minimal Wear)","volume":695887},{"rank":92,"market_hash_name":"Five-SeveN | Monkey Business (Field-Tested)","volume":687465},{"rank":93,"market_hash_name":"USP-S | Guardian (Minimal Wear)","volume":687071},{"rank":94,"market_hash_name":"Tec-9 | Army Mesh (Field-Tested)","volume":678642},{"rank":95,"market_hash_name":"Krakow 2017 Challengers Autograph Capsule","volume":674478},{"rank":96,"market_hash_name":"Desert Eagle | Bronze Deco (Field-Tested)","volume":664826},{"rank":97,"market_hash_name":"Gamma Case Key","volume":661464},{"rank":98,"market_hash_name":"Chroma 3 Case Key","volume":657274},{"rank":99,"market_hash_name":"AUG | Condemned (Field-Tested)","volume":634636},{"rank":100,"market_hash_name":"AWP | Pit Viper (Field-Tested)","volume":630589}],"build_time":1,"updated_at":1504616403
    };

    this.items = this.items.bind(this);
  }

  componentWillMount() {
    // console.log(this.state);
    // let xhr = new XMLHttpRequest();
    //
    // xhr.onreadystatechange = function() {
    //   if (xhr.readyState === 4 && xhr.status === 200) {
    //     console.log(xhr.status);
    //     console.log(xhr.statusText);
    //     console.log(xhr.responseText);
    //   }
    // };

    // xhr.open("GET", "http://api.csgo.steamlytics.xyz/v1/items/popular?limit=100&key=1c6ebe8e60761812d139c06197b0b71e", true);
    // xhr.open("GET", "http://api.csgo.steamlytics.xyz/v1/items?limit=100&key=1c6ebe8e60761812d139c06197b0b71e", true);
    // xhr.open("GET", "http://api.csgo.steamlytics.xyz/v1/items/popular?limit=100&key=1c6ebe8e60761812d139c06197b0b71e", true);
    // xhr.send();
  }

  items() {
    let items = this.state.items;
    console.log(items);
    let listed = items.map((item) => {
      return (
        <li>
          {item.market_hash_name}
        </li>
      );
    });

    return listed;
  }

  render() {
    return (
      <section>
        <ul>
          {this.items()}
        </ul>
      </section>
    );
  }
}

export default App;
