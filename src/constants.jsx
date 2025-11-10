import Audi from "../public/car-logos/audi.svg";
import Isuzu from "../public/car-logos/isuzu.svg";
import Benz from "../public/car-logos/benz.svg";
import Nissan from "../public/car-logos/nissan.svg";
import Toyota from "../public/car-logos/toyota.svg";
import Volvo from "../public/car-logos/volvo.svg";
import Ford from "../public/car-logos/ford.svg";
import Honda from "../public/car-logos/honda.svg";
import Hyundai from "../public/car-logos/hyundai.svg";
import Skoda from "../public/car-logos/skoda.svg";
import { LiaCalendarCheck } from "react-icons/lia";
import { BsFuelPump } from "react-icons/bs";
import { MdSpeed } from "react-icons/md";
import { TbAutomaticGearboxFilled } from "react-icons/tb";
import { PiEngine } from "react-icons/pi";
import { BsPersonCheckFill } from "react-icons/bs";
import { LiaCalendarPlus } from "react-icons/lia";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { PiBuildings } from "react-icons/pi";
import { GoShieldCheck } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";

export const OVERVIEW_ICON_MAP = {
    registration: <LiaCalendarCheck size={24} className="text-gray-900" />,
    fuel: <BsFuelPump size={24} className="text-gray-900" />,
    kilometer: <MdSpeed size={24} className="text-gray-900" />,
    transmission: (
        <TbAutomaticGearboxFilled size={24} className="text-gray-900" />
    ),
    engine: <PiEngine size={24} className="text-gray-900" />,
    ownership: <BsPersonCheckFill size={24} className="text-gray-900" />,
    make: <LiaCalendarPlus size={24} className="text-gray-900" />,
    seats: (
        <MdOutlineAirlineSeatReclineExtra size={24} className="text-gray-900" />
    ),
    reg_number: <PiBuildings size={24} className="text-gray-900" />,
    insurance: <GoShieldCheck size={24} className="text-gray-900" />,
    location: <IoLocationOutline size={24} className="text-gray-900" />,
};

export const LOGOS = [
    {
        id: "audi",
        name: "Audi",
        logo: Audi,
    },
    {
        id: "isuzu",
        name: "Isuzu",
        logo: Isuzu,
    },
    {
        id: "benz",
        name: "Benz",
        logo: Benz,
    },
    {
        id: "nissan",
        name: "Nissan",
        logo: Nissan,
    },
    {
        id: "toyota",
        name: "Toyota",
        logo: Toyota,
    },
    {
        id: "volvo",
        name: "Volvo",
        logo: Volvo,
    },
    {
        id: "ford",
        name: "Ford",
        logo: Ford,
    },
    {
        id: "honda",
        name: "Honda",
        logo: Honda,
    },
    {
        id: "hyundai",
        name: "Hyundai",
        logo: Hyundai,
    },
    {
        id: "skoda",
        name: "Skoda",
        logo: Skoda,
    },
];

export const CAR_FEATURE_LIST = {
    'comfort-and-convenience': {
        "power-steering": "Power steering",
        "air-conditioner": "Air conditioner",
        "heater": "Heater",
        "adjustable-steering": "Adjustable steering",
        "automatic-climate-control": "Automatic climate control",
        "air-quality-control": "Air quality control",
        "remote-trunk-opener": "Remote Trunk opener",
        "remote-fuel-lid-opener": "Remote fuel lid opener",
        "low-fuel-warning-light": "Low fuel warning light",
        "accessory-power-outlet": "Accessory power outlet",
        "trunk-light": "Trunk light",
        "rear-seat-headrest": "Rear seat headrest",
        "rear-seat-center-arm-rest": "Rear seat center arm rest",
        "rear-ac-vents": "Rear AC vents",
        "lumbar-support": "Lumbar support",
        "cruise-control": "Cruise control",
        "keyless-entry": "Keyless entry",
        "follow-me-home-head-lamps": "Follow me home head lamps",
        "height-adjustable-driver-seat": "Height adjustable driver seat",
        "ventilated-seats": "Ventilates seats",
        "vanity-mirror": "Vanity mirror",
        "rear-reading-lamp": "Rear reading lamp",
        "adjustable-headrest": "Adjustable headrest",
        "height-adjustable-front-seat-belt": "Height adjustable front seat belt",
        "engine-start-stop-button": "Engine Start/Stop button",
        "cooled-glowbox": "Cooled glowbox",
        "voice-commands": "Voice commands",
        "tailgate-ajar-warning": "Tailgate Ajar Warning",
        "battery-saver": "Battery saver",
        "automatic-headlamps": "Automatic headlamps",
        "paddle-shifters": "Paddle shifters",
        "luggage-hook-and-net": "Luggage hook and net",
        "glowbox-light": "Glowbox light",
        "voice-assisted-sunroof": "Voice assisted sunroof",
        "gear-shift-indicator": "Gear shift indicator",
        "idle-start-stop-button": "Idle start/stop button",
        "rear-window-sun-blind": "Rear window sun blind",
        "navigation-system": "Navigation system",
        "smart-access-card-entry": "Smart access card entry",
        "rear-curtain": "Rear curtain"
    }
    ,
    interior: {
        "fabric-upholstery": "Fabric upholstery",
        "glow-box": "Glow box",
        "electronic-multi-tripmeter": "Electronic multi-tripmeter",
        "digital-clock": "Digital clock",
        "tachometer": "Tachometer",
        "outside-temperature-display": "Outside temperature display",
        "digital-odometer": "Digital odometer",
        "driving-experience-control-eco": "Driving experience control eco",
        "leather-seats": "Leather seats",
        "leather-wrapped-steering-wheel": "Leather wrapped steering wheel",
        "cigarette-lighter": "Cigarette lighter",
        "digital-cluster": "Digital cluster",
        "dual-tone-dashboard": "Dual tone dashboard",
        "leather-wrap-gear-shift-selector": "Leather wrap gear-shift selector"
    }
    ,
    exterior: {
        "adjustable-headlamps": "Adjustable headlamps",
        "rear-window-defogger": "Rear window defogger",
        "wheel-covers": "Wheel covers",
        "orvm-turn-indicators": "ORVM turn indicators",
        "integrated-antenna": "Integrated antenna",
        "halogen-headlamps": "Halogen headlamps",
        "roof-rails": "Roof rails",
        "power-antenna": "Power antenna",
        "tinted-glass": "Tinted glass",
        "rear-spoiler": "Rear spoiler",
        "chrome-grille": "Chrome grille",
        "chrome-garnish": "Chrome garnish",
        "fog-lights-front": "Fog lights front",
        "fog-lights-rear": "Fog lights rear",
        "rear-window-wiper": "Rear window wiper",
        "rear-window-washer": "Rear window washer",
        "alloy-wheels": "Alloy wheels",
        "smoke-headlamps": "Smoke headlamps",
        "cornering-headlamps": "Cornering headlamps",
        "led-drls": "LED DRLs",
        "led-headlamps": "LED headlamps",
        "led-taillights": "LED taillights",
        "led-foglamps": "LED foglamps",
        "rain-sensing-wiper": "Rain sensing wiper",
        "projector-headlamps": "Projector headlamps",
        "sunroof": "Sunroof"
    },
    safety: {
        "brake-assist": "Brake assist",
        "abs": "ABS",
        "driver-airbag": "Driver airbag",
        "passenger-airbag": "Passenger airbag",
        "side-airbag": "Side airbag",
        "side-airbag-rear": "Side airbag rear",
        "day-night-rear-view-mirror": "Day and night rear view mirror",
        "passenger-side-rear-view-mirror": "Passenger side rear view mirror",
        "curtain-airbag": "Curtain airbag",
        "ebd": "EBD",
        "seat-belt-warning": "Seat belt warning",
        "tpms": "TPMS",
        "engine-immobilizer": "Engine immobilizer",
        "esc": "ESC",
        "speed-alert": "Speed alert",
        "speed-sensing-auto-door-lock": "Speed sensing auto door lock",
        "isofix-child-seat-mounts": "ISOFIX mounts",
        "hill-assist": "Hill assist",
        "hill-descent-control": "Hill descent control",
        "impact-sensing-auto-door-lock": "Impact sensing auto door lock",
        "central-locking": "Central locking",
        "power-door-locks": "Power door locks",
        "child-safety-locks": "Child safety locks",
        "rear-seat-belts": "Rear seat belts",
        "side-impact-beams": "Side impact beams",
        "front-impact-beams": "Front impact beams",
        "adjustable-seats": "Adjustable seats",
        "centrally-mounted-fuel-tank": "Centrally mounted fuel tank",
        "anti-theft-alarm": "Anti theft alarm",
        "door-ajar-warning": "Door ajar warning",
        "vehicle-stability-control-system": "Vehicle stability control",
        "crash-sensor": "Crash sensor",
        "engine-check-warning": "Engine check warning",
        "anti-theft-device": "Anti theft device",
        "pretensioners-force-limiter-seatbelts": "Pretensioners and force limiter seatbelts",
        "rear-camera": "Rear camera",
        "traction-control": "Traction control",
        "360-view-camera": "360 view camera"
    }
    ,
    'infotainment-and-communication': {
        "radio": "Radio",
        "usb-auxiliary-input": "USB & Auxiliary input",
        "bluetooth-connectivity": "Bluetooth connectivity",
        "touchscreen": "Touchscreen",
        "android-auto": "Android auto",
        "apple-carplay": "Apple carplay",
        "usb-ports": "USB ports",
        "audio-system-remote-control": "Audio system remote control",
        "integrated-2din-audio": "Integrated 2DIN Audio",
        "wireless-phone-charging": "Wireless phone charging",
        "wi-fi-connectivity": "Wi-Fi connectivity"
    }
    ,
    'adas-feature': {
        "forward-collision-warning": "Forward collision warning",
        "automatic-emergency-braking": "Automatic emergency braking",
        "traffic-sign-recognition": "Traffic sign recognition",
        "lane-departure-warning": "Lane departure warning",
        "lane-keep-assist": "Lane keep assist",
        "adaptive-cruise-control": "Adaptive cruise control",
        "adaptive-high-beam-assist": "Adaptive high beam assist",
        "rear-cross-traffic-alert": "Rear cross traffic alert",
        "blind-spot-monitor": "Blind spot monitor"
    },
    'advance-internet-feature': {
        "over-speeding-alert": "Over speeding alert",
        "ota-updates": "Over the air (OTA) updates",
        "google-alexa-connectivity": "Google/Alexa connectivity",
        "sos-emergency-assistance": "SOS/Emergency assistance",
        "sos-button": "SOS button",
        "e-call-i-call": "E-Call & I-Call",
        "smartwatch-app": "Smartwatch App",
        "live-location": "Live location",
        "remote-immobiliser": "Remote immobiliser",
        "unauthorized-vehicle-entry": "Unauthorized vehicle entry",
        "engine-start-alarm": "Engine start alarm",
        "remote-vehicle-status-check": "Remote vehicle status check",
        "puc-expiry": "PUC expiry",
        "insurance-expiry": "Insurance expiry",
        "e-manual": "E-manual",
        "inbuilt-assistant": "Inbuilt assistant",
        "navigation-live-traffic": "Navigation with live traffic",
        "send-poi-to-vehicle": "Send POI to vehicle from app",
        "live-weather": "Live weather",
        "save-route-place": "Save Route/Place",
        "rsa": "RSA",
        "tow-away-alert": "Tow away alert",
        "valet-mode": "Valet mode",
        "remote-ac-on-off": "Remote AC On/Off",
        "remote-door-lock-unlock": "Remote Door Lock/Unlock",
        "remote-ignition-start-stop": "Remote vehicle ignition Start/Stop",
        "geo-fence-alert": "Geo-fence alert"
    }

};


export const CAR_SPECIFICATION_LIST = {
    "engine-and-transmission": {
        "engine-type": "Engine type",
        "max-power": "Max power",
        "max-torque": "Max torque",
        "no-of-cylinders": "No of cylinders",
        "valves-per-cylinder": "Valves per cylinder",
        "valve-configuration": "Valve configuration",
        "fuel-supply-system": "Fuel supply system",
        "turbo-charger": "Turbo charger",
        "super-charge": "Super charge",
        "gearbox": "Gearbox",
        "drive-type": "Drive type",
        "battery-capacity": "Battery capacity",
        "motor-power": "Motor power",
        "motor-type": "Motor type",
        "range": "Range",
        "battery-type": "Battery type",
        "battery-warranty": "Battery warranty",
        "charging-time-ac": "Charging time (AC)",
        "charging-time-dc": "Charging time (DC)",
        "regenerative-braking": "Regenerative braking",
        "regenerative-braking-levels": "Regenerative braking levels",
        "charging-port": "Charging port",
        "charging-options": "Charging options"
    },
    "fuel-and-performance": {
        "mileage-arai": "Mileage ARAI",
        "fuel-tank-capacity": "Fuel tank capacity",
        "emission-norm-compliance": "Emission norm compliance",
        "top-speed": "Top speed"
    },
    "charging": {
        "charging-time-15a-plug-point": "Charging time (15A Plug point)",
        "charging-time-7.2kw-ac-fast-charger": "Charging time (7.2kW AC Fast charger)",
        "charging-time": "Charging time",
        "fast-charging": "Fast charging"
    },
    "suspension-steering-brakes": {
        "front-suspension": "Front suspension",
        "rear-suspension": "Rear suspension",
        "shock-absorbers-type": "Shock absorbers type",
        "steering-type": "Steering type",
        "turning-radius": "Turning radius",
        "steering-column": "Steering column",
        "steering-gear-type": "Steering gear type",
        "front-brake-type": "Front brake type",
        "rear-brake-type": "Rear brake type",
        "alloy-wheel-size-front": "Alloy wheel size Front",
        "alloy-wheel-size-rear": "Alloy wheel size Rear",
        "acceleration-0-100kmph-secs": "Acceleration (0-100kmph secs)"
    },
    "dimensions-and-capacity": {
        "length": "Length",
        "width": "Width",
        "height": "Height",
        "bootspace": "Bootspace",
        "seating-capacity": "Seating capacity",
        "ground-clearance": "Ground clearance",
        "wheel-base": "Wheel base",
        "no-of-doors": "No of doors",
        "front-tread": "Front tread",
        "rear-tread": "Rear tread",
        "kerb-weight": "Kerb weight",
        "gross-weight": "Gross weight"
    },
    "other-details": {
        "accidental": "Accidental",
        "battery-condition": "Battery condition",
        "tyre-condition": "Tyre condition",
        "vehicle-certified": "Vehicle certified",
        "spare-wheel-and-box": "Spare wheel and box",
        "global-ncap-rating": "Global NCAP rating",
        "no-of-airbags": "No of airbags"
    }
}

export const DROPDOWN_VALUES_MAP = {
    // transmission_type values
    manual: "Manual",
    automatic: "Automatic",
    cvt: "CVT(Continuously Variable Transmission)",
    amt: "AMT (Automated Manual Transmission)",
    dct: "DCT(Dual-Clutch Transmission)",
    dsg: "DSG(Direct-Shift Gearbox)",
    imt: "iMT(Intelligent Manual Transmission)",
    tiptronic: "Tiptronic",
    semi_automatic: "Semi-Automatic",
    sequential: "Sequential",

    // fuel_type values
    petrol: "Petrol",
    diesel: "Diesel",
    electric: "Electric",
    cng: "CNG",
    lpg: "LPG",
    hybrid: "Hybrid",

    // brand values
    audi: "Audi",
    isuzu: "Isuzu",
    benz: "Benz",
    nissan: "Nissan",
    toyota: "Toyota",
    volvo: "Volvo",
    ford: "Ford",
    honda: "Honda",
    hyundai: "Hyundai",
    skoda: "Skoda",
    kia: "Kia",
    mahindra: "Mahindra",
    tata: "Tata",
    renault: "Renault",
    bmw: "BMW",
    jaguar: "Jaguar",

    // Tyre condition values
    new: "New",
    used: "Used",
    worn: "Worn",

    // Battery condition values
    good: "Good",
    average: "Average",
    weak: "Weak",

    // Yes/No values
    yes: "Yes",
    no: "No",

    // Drive type values
    '4WD': '4 Wheel Drive',
    'FWD': 'Front Wheel Drive',
    'RWD': 'Rear Wheel Drive',
    'AWD': 'All Wheel Drive',

    // Front suspension values
    'macpherson-strut': "MacPherson Strut",
    'double-wishbone': "Double Wishbone",
    'torsion-beam': "Torsion Beam",
    'multi-link': "Multi Link",
    'hydraulic-double-acting-shock-absorbers': "Hydraulic Double Acting Shock Absorbers",
    'coil-spring': "Coil Spring",
    'independent-suspension': "Independent Suspension",
    'rigid-axle': "Rigid Axle",
    'trailing-arm': "Trailing Arm",
    'air-suspension': "Air Suspension",

    // Rear suspension values
    'twist-beam': "Twist Beam",
    'semi-independent-suspension': "Semi-Independent Suspension",
    'leaf-spring': "Leaf Spring",

    // Steering type values
    "power-steering": "Power Steering",
    "electric-power-steering": "Electric Power Steering (EPS)",
    "hydraulic-power-steering": "Hydraulic Power Steering (HPS)",
    "electro-hydraulic-power-steering": "Electro-Hydraulic Power Steering (EHPS)",
    "manual-steering": "Manual Steering",
    "rack-and-pinion": "Rack and Pinion",
    "recirculating-ball": "Recirculating Ball Steering",

    // Shock absorbers type values
    hydraulic: "Hydraulic",
    telescopic: "Telescopic",
    'gas-filled': "Gas-Filled",
    'gas-charged': "Gas-Charged",
    'twin-tube': "Twin Tube",
    'mono-tube': "Mono Tube",
    'coil-spring-over-shock': "Coil Spring Over Shock",
    // 'air-suspension': "Air Suspension",
    'leaf-spring-with-shock-absorber': "Leaf Spring with Shock Absorber",
    'adaptive-electronic': "Adaptive / Electronic",

    // Steering column values
    collapsible: "Collapsible Steering Column",
    tilt: "Tilt Steering Column",
    //telescopic: "Telescopic Steering Column",
    "tilt-and-telescopic": "Tilt and Telescopic Steering Column",
    fixed: "Fixed Steering Column",
    "energy-absorbing": "Energy Absorbing Steering Column",
    adjustable: "Adjustable Steering Column",

    // Steering gear type values
    // "rack-and-pinion": "Rack and Pinion",
    // "recirculating-ball": "Recirculating Ball",
    "worm-and-roller": "Worm and Roller",
    "worm-and-sector": "Worm and Sector",
    "cam-and-lever": "Cam and Lever",
    "cam-and-follower": "Cam and Follower",
    "ball-and-nut": "Ball and Nut",

    // Brake type values
    disc: "Disc",
    "ventilated-disc": "Ventilated Disc",
    drum: "Drum",
    "solid-disc": "Solid Disc",
    "carbon-ceramic-disc": "Carbon Ceramic Disc",

    // NCAP Rating values
    '0-star': "0 Star",
    '1-star': "1 Star",
    '2-star': "2 Star",
    '3-star': "3 Star",
    '4-star': "4 Star",
    '5-star': "5 Star",

    // Enginer types
    // 'petrol': 'Petrol',
    // 'diesel': 'Diesel',
    // 'cng': 'CNG',
    // 'lpg': 'LPG',
    'hybrid-petrol-electric': 'Hybrid (Petrol + Electric)',
    'hybrid-diesel-electric': 'Hybrid (Diesel + Electric)',
    'mild-hybrid': 'Mild Hybrid',
    'plug-in-hybrid': 'Plug-in Hybrid (PHEV)',
    // 'electric': 'Electric (EV)',
    'hydrogen-fuel-cell': 'Hydrogen Fuel Cell',
};




// export const CARS = [
//     {
//         id: "car-001",
//         brand: "Toyota",
//         body_type: "suv",
//         name: "Innova Crysta",
//         variant: "ZX 2.4 AT",
//         km_driven: 45000,
//         transmission: "Automatic",
//         fuel_type: "Diesel",
//         price: 1250000,
//         location: "Delhi",
//         insurance: "Valid till 2026",
//         seats: 7,
//         reg_number: "DL8CAF1234",
//         ownership: 1,
//         engine_displacement: 2393,
//         make_year: 2019,
//         mileage: "13.68 kmpl",
//         reg_year: 2020,
//         features: {
//             interior: [
//                 "digital-clock",
//                 "tachometer",
//                 "leather-seats",
//                 "cigerate-lighter",
//                 "dual-tone-dashboard",
//                 "projector-headlamps",
//                 "chrome-grill",
//             ],
//             exterior: ["rear-spoiler", "tinted-glass"],
//         },
//         specifications: {
//             "engine-and-transmission": {
//                 "engine-type": "2.4L Diesel",
//                 "mex-power": "148",
//             },

//             "fuel-and-performance": {
//                 "top-speed": "170 kmph",
//                 "fuel-type": "Petrol",
//             },
//         },
//         images: {
//             exterior: [
//                 "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Innova-Crysta/8199/1606212255498/front-left-side-47.jpg?imwidth=420&impolicy=resize",
//                 "https://imgd.aeplcdn.com/664x374/n/cw/ec/51435/innova-crysta-facelift-exterior-right-front-three-quarter.jpeg?q=80",
//                 "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Innova-Crysta/8199/1606212255498/front-left-side-47.jpg?imwidth=420&impolicy=resize",
//                 "https://imgd.aeplcdn.com/664x374/n/cw/ec/51435/innova-crysta-facelift-exterior-right-front-three-quarter.jpeg?q=80",
//             ],
//             interior: [
//                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU94coExzfQ_Qb1mDx8Yhp85Gjy_xWe6g_OA&s",
//                 "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Innova-Crysta/8199/1606212255498/front-left-side-47.jpg?imwidth=420&impolicy=resize",
//                 "https://imgd.aeplcdn.com/664x374/n/cw/ec/51435/innova-crysta-facelift-exterior-right-front-three-quarter.jpeg?q=80",
//             ],
//             tyre: [
//                 "https://img.autocarindia.com/Features/20221118045012_Untitled.jpg?w=700&c=1",
//                 "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Innova-Crysta/8199/1606212255498/front-left-side-47.jpg?imwidth=420&impolicy=resize",
//                 "https://imgd.aeplcdn.com/664x374/n/cw/ec/51435/innova-crysta-facelift-exterior-right-front-three-quarter.jpeg?q=80",
//             ],
//         },
//         created_at: "2025-06-01 07:44:40.920868+00",
//         updated_at: "2025-06-01 07:44:40.920868+00",
//     },
//     {
//         id: "car-002",
//         brand: "Hyundai",
//         body_type: "sedan",
//         name: "Creta",
//         variant: "SX (O) Turbo",
//         km_driven: 30000,
//         transmission: "Manual",
//         fuel_type: "Electric",
//         price: 950000,
//         location: "Mumbai",
//         insurance: "Valid till 2025",
//         seats: 5,
//         reg_number: "MH12DE4321",
//         ownership: 2,
//         engine_displacement: 1353,
//         make_year: 2021,
//         mileage: "16.8 kmpl",
//         reg_year: 2021,
//         features: {
//             interior: ["digital-cluster", "glowbox"],
//             exterior: ["sunroof", "led-drls"],
//         },
//         specifications: {
//             "engine-transmission": {
//                 "engine-type": "1.4L Turbo Petrol",
//                 "max-power": "138",
//             },

//             "fuel-performance": {
//                 top_speed: "185 kmph",
//                 "fuel-type": "Diesel",
//             },
//         },
//         images: {
//             exterior: [
//                 "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Creta/7695/1651645683867/front-left-side-47.jpg?imwidth=420&impolicy=resize",
//             ],
//             interior: [
//                 "https://imgd.aeplcdn.com/642x361/n/cw/ec/169739/hyundai-creta-dashboard1.jpeg?isig=0&q=75",
//                 "https://stimg.cardekho.com/images/carinteriorimages/930x620/Hyundai/Creta/8667/1705465161380/steering-wheel-54.jpg?impolicy=resize&imwidth=420",
//             ],
//             tyre: [
//                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpNu54_Xyp9gyijxEq_sKblNUClUvTHwx4iA&s",
//             ],
//         },
//         created_at: "2025-06-01 07:44:40.920868+00",
//         updated_at: "2025-06-01 07:44:40.920868+00",
//     },
//     {
//         id: "car-003",
//         brand: "Maruti Suzuki",
//         body_type: "hatchback",
//         name: "Baleno",
//         variant: "Alpha CVT",
//         km_driven: 22000,
//         transmission: "CVT",
//         fuel_type: "Petrol",
//         price: 475000,
//         location: "Bangalore",
//         insurance: "Valid till 2024",
//         seats: 5,
//         reg_number: "KA03HN5678",
//         ownership: 1,
//         engine_displacement: 1197,
//         make_year: 2022,
//         mileage: "19.56 kmpl",
//         reg_year: 2022,
//         features: {
//             interior: ["dual-tone-dashboard", "digital-odometer"],
//             exterior: ["projector-headlamps", "chrome-grill"],
//         },
//         specifications: {
//             "engine-transmission": {
//                 "engine-type": "1.2L Petrol",
//                 "max-power": "88",
//             },

//             "fuel-performance": {
//                 top_speed: "160 kmph",
//                 "fuel-type": "Diesel",
//             },
//         },
//         images: {
//             exterior: [
//                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ZsKfmnu042GP0AlqWaMOUwsAykUGiUjPMQ&s",
//             ],
//             interior: [
//                 "https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/baleno/features/feature-1170x521-dual-tone-interior.webp?la=en&hash=BFC111D7FBAE24DA77E780E7B6778A30",
//             ],
//             tyre: [
//                 "https://imgd.aeplcdn.com/370x208/cw/ec/37710/Maruti-Suzuki-Baleno-WheelsTyres-154114.jpg?wm=0&q=80",
//             ],
//         },
//         created_at: "2025-06-01 07:44:40.920868+00",
//         updated_at: "2025-06-01 07:44:40.920868+00",
//     },
//     {
//         id: "car-004",
//         brand: "Honda",
//         body_type: "suv",
//         name: "City",
//         variant: "ZX CVT",
//         km_driven: 60000,
//         transmission: "Automatic",
//         fuel_type: "CNG",
//         price: 250000,
//         location: "Chennai",
//         insurance: "Valid till 2027",
//         seats: 5,
//         reg_number: "TN22CD3456",
//         ownership: 1,
//         engine_displacement: 1498,
//         make_year: 2018,
//         mileage: "17.4 kmpl",
//         reg_year: 2019,
//         features: {
//             interior: ["leather-seats", "cigerate-lighter"],
//             exterior: ["led-tail-lights", "roof-rails"],
//         },
//         specifications: {
//             "engine-transmission": {
//                 "engine-type": "1.5L i-VTEC",
//                 "max-power": "119",
//             },

//             "fuel-performance": {
//                 top_speed: "175 kmph",
//                 "fuel-type": "Petrol",
//             },
//         },
//         images: {
//             exterior: [
//                 "https://www.cars24.com/new-cars/_next/image/?url=https%3A%2F%2Fcdn.cars24.com%2Fprod%2Fnew-car-cms%2FHonda_City_Exterior_18_4377fc2caa.jpg&w=828&q=75",
//             ],
//             interior: [
//                 "https://imgd.aeplcdn.com/370x208/n/cw/ec/134287/city-interior-steering-wheel.jpeg?isig=0&q=80",
//                 "https://stimg.cardekho.com/images/carinteriorimages/930x620/Honda/City/9710/1677754131096/dashboard-59.jpg?impolicy=resize&imwidth=420",
//             ],
//             tyre: [
//                 "https://expatautocm.com/wp-content/uploads/2024/03/Honda-City-CP296_12.jpg",
//                 "https://www.team-bhp.com/sites/default/files/styles/amp_high_res/public/new-honda-city-13.jpg",
//             ],
//         },
//         created_at: "2025-06-01 07:44:40.920868+00",
//         updated_at: "2025-06-01 07:44:40.920868+00",
//     },
//     {
//         id: "car-005",
//         brand: "Mahindra",
//         body_type: "suv",
//         name: "XUV700",
//         variant: "AX7 Diesel AT",
//         km_driven: 18000,
//         transmission: "Automatic",
//         fuel_type: "Diesel",
//         price: 2100000,
//         location: "Bangalore",
//         insurance: "Valid till 2025",
//         seats: 7,
//         reg_number: "KA03MH9988",
//         ownership: 1,
//         engine_displacement: 2198,
//         make_year: 2022,
//         mileage: "16.6 kmpl",
//         reg_year: 2022,
//         features: {
//             interior: ["digital-clock", "tachometer"],
//             exterior: ["rear-spoiler", "tinted-glass"],
//         },
//         specifications: {
//             "engine-transmission": {
//                 "engine-type": "2.2L mHawk",
//                 "mex-power": "185",
//             },

//             "fuel-performance": {
//                 top_speed: "190 kmph",
//                 "fuel-type": "Diesel",
//             },
//         },
//         images: {
//             exterior: [
//                 "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Innova-Crysta/8199/1606212255498/front-left-side-47.jpg?imwidth=420&impolicy=resize",
//                 "https://imgd.aeplcdn.com/664x374/n/cw/ec/51435/innova-crysta-facelift-exterior-right-front-three-quarter.jpeg?q=80",
//             ],
//             interior: [
//                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU94coExzfQ_Qb1mDx8Yhp85Gjy_xWe6g_OA&s",
//             ],
//             tyre: [
//                 "https://img.autocarindia.com/Features/20221118045012_Untitled.jpg?w=700&c=1",
//             ],
//         },
//         created_at: "2025-06-07 13:00:00+00",
//         updated_at: "2025-06-07 13:00:00+00",
//     },
//     {
//         id: "car-006",
//         brand: "BMW",
//         body_type: "sedan",
//         name: "5 Series",
//         variant: "530i M Sport",
//         km_driven: 32000,
//         transmission: "Automatic",
//         fuel_type: "Petrol",
//         price: 5300000,
//         location: "Mumbai",
//         insurance: "Valid till 2026",
//         seats: 5,
//         reg_number: "MH12KL7788",
//         ownership: 2,
//         engine_displacement: 1998,
//         make_year: 2021,
//         mileage: "14.82 kmpl",
//         reg_year: 2021,
//         features: {
//             interior: ["digital-clock", "tachometer"],
//             exterior: ["rear-spoiler", "tinted-glass"],
//         },
//         specifications: {
//             "engine-transmission": {
//                 "engine-type": "2.0L Turbo Petrol",
//                 "mex-power": "252",
//             },

//             "fuel-performance": {
//                 top_speed: "250 kmph",
//                 "fuel-type": "Petrol",
//             },
//         },
//         images: {
//             exterior: [
//                 "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Innova-Crysta/8199/1606212255498/front-left-side-47.jpg?imwidth=420&impolicy=resize",
//                 "https://imgd.aeplcdn.com/664x374/n/cw/ec/51435/innova-crysta-facelift-exterior-right-front-three-quarter.jpeg?q=80",
//             ],
//             interior: [
//                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU94coExzfQ_Qb1mDx8Yhp85Gjy_xWe6g_OA&s",
//             ],
//             tyre: [
//                 "https://img.autocarindia.com/Features/20221118045012_Untitled.jpg?w=700&c=1",
//             ],
//         },
//         created_at: "2025-06-07 13:00:00+00",
//         updated_at: "2025-06-07 13:00:00+00",
//     },
//     {
//         id: "car-007",
//         brand: "Hyundai",
//         body_type: "hatchback",
//         name: "i20",
//         variant: "Asta 1.2 IVT",
//         km_driven: 15000,
//         transmission: "Automatic",
//         fuel_type: "CNG",
//         price: 950000,
//         location: "Chennai",
//         insurance: "Valid till 2025",
//         seats: 5,
//         reg_number: "TN07CD4567",
//         ownership: 1,
//         engine_displacement: 1197,
//         make_year: 2022,
//         mileage: "19.65 kmpl",
//         reg_year: 2022,
//         features: {
//             interior: ["digital-clock", "tachometer"],
//             exterior: ["rear-spoiler", "tinted-glass"],
//         },
//         specifications: {
//             "engine-transmission": {
//                 "engine-type": "1.2L Kappa",
//                 "mex-power": "83",
//             },

//             "fuel-performance": {
//                 top_speed: "170 kmph",
//                 "fuel-type": "Petrol",
//             },
//         },
//         images: {
//             exterior: [
//                 "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Innova-Crysta/8199/1606212255498/front-left-side-47.jpg?imwidth=420&impolicy=resize",
//                 "https://imgd.aeplcdn.com/664x374/n/cw/ec/51435/innova-crysta-facelift-exterior-right-front-three-quarter.jpeg?q=80",
//             ],
//             interior: [
//                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU94coExzfQ_Qb1mDx8Yhp85Gjy_xWe6g_OA&s",
//             ],
//             tyre: [
//                 "https://img.autocarindia.com/Features/20221118045012_Untitled.jpg?w=700&c=1",
//             ],
//         },
//         created_at: "2025-06-07 13:00:00+00",
//         updated_at: "2025-06-07 13:00:00+00",
//     },
//     {
//         id: "car-008",
//         brand: "Audi",
//         body_type: "suv",
//         name: "Q7",
//         variant: "Technology 55 TFSI Quattro",
//         km_driven: 29000,
//         transmission: "Automatic",
//         fuel_type: "Petrol",
//         price: 6800000,
//         location: "Hyderabad",
//         insurance: "Valid till 2027",
//         seats: 7,
//         reg_number: "TS09HP1111",
//         ownership: 1,
//         engine_displacement: 2995,
//         make_year: 2023,
//         mileage: "11.21 kmpl",
//         reg_year: 2023,
//         features: {
//             interior: ["digital-clock", "tachometer"],
//             exterior: ["rear-spoiler", "tinted-glass"],
//         },
//         specifications: {
//             "engine-transmission": {
//                 "engine-type": "3.0L V6 TFSI",
//                 "mex-power": "340",
//             },

//             "fuel-performance": {
//                 top_speed: "250 kmph",
//                 "fuel-type": "Petrol",
//             },
//         },
//         images: {
//             exterior: [
//                 "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Innova-Crysta/8199/1606212255498/front-left-side-47.jpg?imwidth=420&impolicy=resize",
//                 "https://imgd.aeplcdn.com/664x374/n/cw/ec/51435/innova-crysta-facelift-exterior-right-front-three-quarter.jpeg?q=80",
//             ],
//             interior: [
//                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU94coExzfQ_Qb1mDx8Yhp85Gjy_xWe6g_OA&s",
//             ],
//             tyre: [
//                 "https://img.autocarindia.com/Features/20221118045012_Untitled.jpg?w=700&c=1",
//             ],
//         },
//         created_at: "2025-06-07 13:00:00+00",
//         updated_at: "2025-06-07 13:00:00+00",
//     },
//     {
//         id: "car-009",
//         brand: "Tata",
//         body_type: "suv",
//         name: "Harrier",
//         variant: "XZ Plus Dark Edition",
//         km_driven: 37000,
//         transmission: "Manual",
//         fuel_type: "Diesel",
//         price: 1800000,
//         location: "Pune",
//         insurance: "Valid till 2026",
//         seats: 5,
//         reg_number: "MH14DX1234",
//         ownership: 1,
//         engine_displacement: 1956,
//         make_year: 2021,
//         mileage: "16.35 kmpl",
//         reg_year: 2021,
//         features: {
//             interior: ["digital-clock", "tachometer"],
//             exterior: ["rear-spoiler", "tinted-glass"],
//         },
//         specifications: {
//             "engine-transmission": {
//                 "engine-type": "2.0L Kryotec Diesel",
//                 "mex-power": "170",
//             },

//             "fuel-performance": {
//                 top_speed: "180 kmph",
//                 "fuel-type": "Diesel",
//             },
//         },
//         images: {
//             exterior: [
//                 "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Innova-Crysta/8199/1606212255498/front-left-side-47.jpg?imwidth=420&impolicy=resize",
//                 "https://imgd.aeplcdn.com/664x374/n/cw/ec/51435/innova-crysta-facelift-exterior-right-front-three-quarter.jpeg?q=80",
//             ],
//             interior: [
//                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU94coExzfQ_Qb1mDx8Yhp85Gjy_xWe6g_OA&s",
//             ],
//             tyre: [
//                 "https://img.autocarindia.com/Features/20221118045012_Untitled.jpg?w=700&c=1",
//             ],
//         },
//         created_at: "2025-06-07 13:00:00+00",
//         updated_at: "2025-06-07 13:00:00+00",
//     },
//     {
//         id: "car-010",
//         brand: "Kia",
//         body_type: "suv",
//         name: "Seltos",
//         variant: "GTX Plus Turbo DCT",
//         km_driven: 23000,
//         transmission: "Automatic",
//         fuel_type: "Petrol",
//         price: 1750000,
//         location: "Ahmedabad",
//         insurance: "Valid till 2026",
//         seats: 5,
//         reg_number: "GJ01XY9876",
//         ownership: 1,
//         engine_displacement: 1353,
//         make_year: 2022,
//         mileage: "16.5 kmpl",
//         reg_year: 2022,
//         features: {
//             interior: ["digital-clock", "tachometer"],
//             exterior: ["rear-spoiler", "tinted-glass"],
//         },
//         specifications: {
//             "engine-transmission": {
//                 "engine-type": "1.4L Turbo GDi",
//                 "mex-power": "140",
//             },

//             "fuel-performance": {
//                 top_speed: "195 kmph",
//                 "fuel-type": "Petrol",
//             },
//         },
//         images: {
//             exterior: [
//                 "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Innova-Crysta/8199/1606212255498/front-left-side-47.jpg?imwidth=420&impolicy=resize",
//                 "https://imgd.aeplcdn.com/664x374/n/cw/ec/51435/innova-crysta-facelift-exterior-right-front-three-quarter.jpeg?q=80",
//             ],
//             interior: [
//                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU94coExzfQ_Qb1mDx8Yhp85Gjy_xWe6g_OA&s",
//             ],
//             tyre: [
//                 "https://img.autocarindia.com/Features/20221118045012_Untitled.jpg?w=700&c=1",
//             ],
//         },
//         created_at: "2025-06-07 13:00:00+00",
//         updated_at: "2025-06-07 13:00:00+00",
//     },
//     {
//         id: "car-011",
//         brand: "Mercedes-Benz",
//         body_type: "sedan",
//         name: "E-Class",
//         variant: "E 350d",
//         km_driven: 40000,
//         transmission: "Automatic",
//         fuel_type: "Diesel",
//         price: 7000000,
//         location: "Delhi",
//         insurance: "Valid till 2026",
//         seats: 5,
//         reg_number: "DL4CA9999",
//         ownership: 2,
//         engine_displacement: 2925,
//         make_year: 2020,
//         mileage: "16.1 kmpl",
//         reg_year: 2020,
//         features: {
//             interior: ["digital-clock", "tachometer"],
//             exterior: ["rear-spoiler", "tinted-glass"],
//         },
//         specifications: {
//             "engine-transmission": {
//                 "engine-type": "3.0L Inline-6",
//                 "mex-power": "286",
//             },

//             "fuel-performance": {
//                 top_speed: "250 kmph",
//                 "fuel-type": "Diesel",
//             },
//         },
//         images: {
//             exterior: [
//                 "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Innova-Crysta/8199/1606212255498/front-left-side-47.jpg?imwidth=420&impolicy=resize",
//                 "https://imgd.aeplcdn.com/664x374/n/cw/ec/51435/innova-crysta-facelift-exterior-right-front-three-quarter.jpeg?q=80",
//             ],
//             interior: [
//                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU94coExzfQ_Qb1mDx8Yhp85Gjy_xWe6g_OA&s",
//             ],
//             tyre: [
//                 "https://img.autocarindia.com/Features/20221118045012_Untitled.jpg?w=700&c=1",
//             ],
//         },
//         created_at: "2025-06-07 13:00:00+00",
//         updated_at: "2025-06-07 13:00:00+00",
//     },
//     {
//         id: "car-012",
//         brand: "Honda",
//         body_type: "sedan",
//         name: "City",
//         variant: "ZX CVT",
//         km_driven: 28000,
//         transmission: "Automatic",
//         fuel_type: "Petrol",
//         price: 1350000,
//         location: "Jaipur",
//         insurance: "Valid till 2025",
//         seats: 5,
//         reg_number: "RJ14AX3456",
//         ownership: 1,
//         engine_displacement: 1498,
//         make_year: 2021,
//         mileage: "18.4 kmpl",
//         reg_year: 2021,
//         features: {
//             interior: ["digital-clock", "tachometer"],
//             exterior: ["rear-spoiler", "tinted-glass"],
//         },
//         specifications: {
//             "engine-transmission": {
//                 "engine-type": "1.5L i-VTEC",
//                 "mex-power": "121",
//             },

//             "fuel-performance": {
//                 top_speed: "180 kmph",
//                 "fuel-type": "Petrol",
//             },
//         },
//         images: {
//             exterior: [
//                 "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Innova-Crysta/8199/1606212255498/front-left-side-47.jpg?imwidth=420&impolicy=resize",
//                 "https://imgd.aeplcdn.com/664x374/n/cw/ec/51435/innova-crysta-facelift-exterior-right-front-three-quarter.jpeg?q=80",
//             ],
//             interior: [
//                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU94coExzfQ_Qb1mDx8Yhp85Gjy_xWe6g_OA&s",
//             ],
//             tyre: [
//                 "https://img.autocarindia.com/Features/20221118045012_Untitled.jpg?w=700&c=1",
//             ],
//         },
//         created_at: "2025-06-07 13:00:00+00",
//         updated_at: "2025-06-07 13:00:00+00",
//     },
//     {
//         id: "car-013",
//         brand: "Skoda",
//         body_type: "sedan",
//         name: "Slavia",
//         variant: "Style 1.5 TSI DSG",
//         km_driven: 19000,
//         transmission: "Automatic",
//         fuel_type: "Electric",
//         price: 1650000,
//         location: "Lucknow",
//         insurance: "Valid till 2026",
//         seats: 5,
//         reg_number: "UP32BX4412",
//         ownership: 1,
//         engine_displacement: 1498,
//         make_year: 2022,
//         mileage: "18.41 kmpl",
//         reg_year: 2022,
//         features: {
//             interior: ["digital-clock", "tachometer"],
//             exterior: ["rear-spoiler", "tinted-glass"],
//         },
//         specifications: {
//             "engine-transmission": {
//                 "engine-type": "1.5L TSI EVO",
//                 "mex-power": "150",
//             },

//             "fuel-performance": {
//                 top_speed: "190 kmph",
//                 "fuel-type": "Petrol",
//             },
//         },
//         images: {
//             exterior: [
//                 "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Innova-Crysta/8199/1606212255498/front-left-side-47.jpg?imwidth=420&impolicy=resize",
//                 "https://imgd.aeplcdn.com/664x374/n/cw/ec/51435/innova-crysta-facelift-exterior-right-front-three-quarter.jpeg?q=80",
//             ],
//             interior: [
//                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU94coExzfQ_Qb1mDx8Yhp85Gjy_xWe6g_OA&s",
//             ],
//             tyre: [
//                 "https://img.autocarindia.com/Features/20221118045012_Untitled.jpg?w=700&c=1",
//             ],
//         },
//         created_at: "2025-06-07 13:00:00+00",
//         updated_at: "2025-06-07 13:00:00+00",
//     },
//     {
//         id: "car-014",
//         brand: "Jeep",
//         body_type: "suv",
//         name: "Compass",
//         variant: "Model S Diesel 4x4 AT",
//         km_driven: 35000,
//         transmission: "Automatic",
//         fuel_type: "Diesel",
//         price: 2600000,
//         location: "Kolkata",
//         insurance: "Valid till 2026",
//         seats: 5,
//         reg_number: "WB20ZP3344",
//         ownership: 2,
//         engine_displacement: 1956,
//         make_year: 2021,
//         mileage: "14.9 kmpl",
//         reg_year: 2021,
//         features: {
//             interior: ["digital-clock", "tachometer"],
//             exterior: ["rear-spoiler", "tinted-glass"],
//         },
//         specifications: {
//             "engine-transmission": {
//                 "engine-type": "2.0L Multijet II",
//                 "mex-power": "170",
//             },

//             "fuel-performance": {
//                 top_speed: "200 kmph",
//                 "fuel-type": "Diesel",
//             },
//         },
//         images: {
//             exterior: [
//                 "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Innova-Crysta/8199/1606212255498/front-left-side-47.jpg?imwidth=420&impolicy=resize",
//                 "https://imgd.aeplcdn.com/664x374/n/cw/ec/51435/innova-crysta-facelift-exterior-right-front-three-quarter.jpeg?q=80",
//             ],
//             interior: [
//                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU94coExzfQ_Qb1mDx8Yhp85Gjy_xWe6g_OA&s",
//             ],
//             tyre: [
//                 "https://img.autocarindia.com/Features/20221118045012_Untitled.jpg?w=700&c=1",
//             ],
//         },
//         created_at: "2025-06-07 13:00:00+00",
//         updated_at: "2025-06-07 13:00:00+00",
//     },
// ];

export const BODY_TYPES = {
    hatchback: "Hatchback",
    sedan: "Sedan",
    suv: "SUV",
};

export const BUDGET_TAB_OPTIONS = [
    {
        id: "budget-001",
        label: "Under 10 lakh",
        min: 200000,
        max: 1000000,
    },
    {
        id: "budget-002",
        label: "10 lakh to 20 lakh",
        min: 1000000,
        max: 2000000,
    },
    {
        id: "budget-003",
        label: "20 lakh to 30 lakh",
        min: 2000000,
        max: 3000000,
    },
    {
        id: "budget-004",
        label: "Above 30 lakh",
        min: 3000000,
        max: 1000000000,
    },
];

export const OWNERSHIP_TAB_OPTIONS = [
    {
        id: "first-owner",
        label: "First Owner",
        value: 1,
    },
    {
        id: "second-owner",
        label: "Second Owner",
        value: 2,
    },
    {
        id: "third-owner",
        label: "Third Owner",
        value: 3,
    },
];

export const FUEL_TYPE_TAB_OPTIONS = [
    {
        id: "petrol",
        label: "Petrol",
        value: "petrol",
    },
    {
        id: "diesel",
        label: "Diesel",
        value: "diesel",
    },
    {
        id: "electric",
        label: "Electric",
        value: "electric",
    },
    {
        id: "cng",
        label: "CNG",
        value: "cng",
    },
];

export const TESTIMONIALS = [
    {
        id: 1,
        name: "John Doe",
        location: "Udupi",
        image:
            "https://media.istockphoto.com/id/1490394251/photo/buyer-of-the-car-shaking-hands-with-the-seller-in-auto-dealership.jpg?s=612x612&w=0&k=20&c=L9StueUZBODnjjrb7qgRKwLTW-40OW3LbySgsmeZ9ek=",
        review:
            "Recently bought a 2020 Kia Seltos. The infotainment system and features are top-notch. Very minimal signs of previous use. Excellent pickup and road presence. Would recommend it to others looking for a feature-rich used car.",
        rating: 4,
    },
    {
        id: 2,
        name: "Shashank",
        location: "Mangalore",
        image:
            "https://media.istockphoto.com/id/1490394251/photo/buyer-of-the-car-shaking-hands-with-the-seller-in-auto-dealership.jpg?s=612x612&w=0&k=20&c=L9StueUZBODnjjrb7qgRKwLTW-40OW3LbySgsmeZ9ek=",
        review:
            "Got a used 2019 Honda Amaze. Drives like new! Minimal wear and tear, and the engine is super quiet. Great comfort on long drives. Paperwork and service history were all clear.",
        rating: 4.5,
    },
    {
        id: 3,
        name: "Sandeep",
        location: "Suratkal",
        image:
            "https://media.istockphoto.com/id/1490394251/photo/buyer-of-the-car-shaking-hands-with-the-seller-in-auto-dealership.jpg?s=612x612&w=0&k=20&c=L9StueUZBODnjjrb7qgRKwLTW-40OW3LbySgsmeZ9ek=",
        review:
            "Purchased a 2017 Maruti Swift from a local dealer. Very reliable and peppy engine. AC works great and all electronics are functional. Had to replace the tires, but otherwise no issues. Satisfied with the performance so far.",
        rating: 4.5,
    },
    {
        id: 4,
        name: "Harsha",
        location: "Puttur",
        image:
            "https://media.istockphoto.com/id/1490394251/photo/buyer-of-the-car-shaking-hands-with-the-seller-in-auto-dealership.jpg?s=612x612&w=0&k=20&c=L9StueUZBODnjjrb7qgRKwLTW-40OW3LbySgsmeZ9ek=",
        review:
            "Bought a 2018 Hyundai i20 a few weeks ago. The car runs smoothly and the mileage is decent for city driving. Interiors are clean and well-maintained. Slight scratches on the bumper, but nothing major. Overall, a good value-for-money deal.",
        rating: 5,
    },
];
