export const remittanceData = [
  // Casos de Estudio Principales (Alto Detalle)
  { id: "TJK", name: "Tayikistán", dependencyPercent: 47.9, annualVolumeBillion: 5.7, mainSource: "Rusia", coordinates: [71.2761, 38.8610], color: "#EF4444", description: "Mayor dependencia mundial. Válvula de escape autoritaria hacia Rusia." },
  { id: "HND", name: "Honduras", dependencyPercent: 25.7, annualVolumeBillion: 9.2, mainSource: "Estados Unidos", coordinates: [-86.2419, 15.1990], color: "#EF4444", description: "Alta vulnerabilidad a políticas migratorias de EE.UU." },
  { id: "NPL", name: "Nepal", dependencyPercent: 26.2, annualVolumeBillion: 10.3, mainSource: "Golfo Pérsico", coordinates: [84.1240, 28.3949], color: "#EF4444", description: "Mano de obra atada al sistema Kafala en el Medio Oriente." },
  { id: "PHL", name: "Filipinas", dependencyPercent: 8.7, annualVolumeBillion: 38.0, mainSource: "Global / EE.UU.", coordinates: [121.7740, 12.8797], color: "#F59E0B", description: "Exportación institucionalizada (OFW) y fuga de cerebros médicos." },
  { id: "MEX", name: "México", dependencyPercent: 4.5, annualVolumeBillion: 63.3, mainSource: "Estados Unidos", coordinates: [-102.5528, 23.6345], color: "#38BDF8", description: "Amortiguador contra la pobreza multidimensional. Volumen masivo." },
  { id: "IND", name: "India", dependencyPercent: 3.5, annualVolumeBillion: 125.0, mainSource: "Global", coordinates: [78.9629, 20.5937], color: "#38BDF8", description: "Mayor receptor absoluto del mundo en volumen total." },
  
  // Nivel Crítico (Dependencia > 20% del PIB)
  { id: "TON", name: "Tonga", dependencyPercent: 43.5, annualVolumeBillion: 0.25, mainSource: "Australia/NZ", coordinates: [-175.2018, -21.1789], color: "#EF4444", description: "Nación insular extremadamente dependiente de su diáspora oceánica." },
  { id: "LBN", name: "Líbano", dependencyPercent: 37.8, annualVolumeBillion: 6.4, mainSource: "Global", coordinates: [35.8623, 33.8547], color: "#EF4444", description: "Economía colapsada, las remesas son la única red de seguridad funcional." },
  { id: "WSM", name: "Samoa", dependencyPercent: 33.6, annualVolumeBillion: 0.28, mainSource: "Australia/NZ", coordinates: [-172.1046, -13.7590], color: "#EF4444", description: "Vulnerabilidad estructural y climática del Pacífico." },
  { id: "KGZ", name: "Kirguistán", dependencyPercent: 31.1, annualVolumeBillion: 2.8, mainSource: "Rusia", coordinates: [74.7661, 41.2044], color: "#EF4444", description: "Corredor exsoviético dependiente del mercado laboral ruso." },
  { id: "NIC", name: "Nicaragua", dependencyPercent: 26.6, annualVolumeBillion: 4.3, mainSource: "Estados Unidos / Costa Rica", coordinates: [-85.2072, 12.8654], color: "#EF4444", description: "Éxodo masivo debido a crisis sociopolítica y económica." },
  { id: "SLV", name: "El Salvador", dependencyPercent: 23.8, annualVolumeBillion: 8.2, mainSource: "Estados Unidos", coordinates: [-88.8965, 13.7942], color: "#EF4444", description: "Economía fuertemente anclada al dólar y a las remesas estadounidenses." },
  { id: "HTI", name: "Haití", dependencyPercent: 22.1, annualVolumeBillion: 3.8, mainSource: "EE.UU. / Rep. Dom.", coordinates: [-72.2852, 18.9712], color: "#EF4444", description: "Estado frágil sustentado por la diáspora en Norteamérica." },

  // Nivel Alto (Dependencia 10% - 20% del PIB)
  { id: "GTM", name: "Guatemala", dependencyPercent: 19.3, annualVolumeBillion: 19.8, mainSource: "Estados Unidos", coordinates: [-90.2308, 15.7835], color: "#F59E0B", description: "El motor de la economía por encima de exportaciones tradicionales." },
  { id: "LSO", name: "Lesoto", dependencyPercent: 21.0, annualVolumeBillion: 0.5, mainSource: "Sudáfrica", coordinates: [28.2336, -29.6100], color: "#EF4444", description: "Dependencia crónica del trabajo minero en Sudáfrica." },
  { id: "JAM", name: "Jamaica", dependencyPercent: 18.5, annualVolumeBillion: 3.4, mainSource: "EE.UU. / Reino Unido", coordinates: [-77.2975, 18.1096], color: "#F59E0B", description: "Fuga de talento crónico hacia el mundo anglosajón." },
  { id: "GMB", name: "Gambia", dependencyPercent: 27.5, annualVolumeBillion: 0.7, mainSource: "Europa", coordinates: [-15.3101, 13.4432], color: "#EF4444", description: "Alta tasa de emigración juvenil hacia Europa." },
  { id: "SEN", name: "Senegal", dependencyPercent: 10.5, annualVolumeBillion: 2.9, mainSource: "Francia / Europa", coordinates: [-14.4524, 14.4974], color: "#F59E0B", description: "Fuerte nexo migratorio francófono." },
  { id: "DOM", name: "Rep. Dominicana", dependencyPercent: 8.5, annualVolumeBillion: 10.4, mainSource: "EE.UU. / España", coordinates: [-70.1627, 18.7357], color: "#F59E0B", description: "Las remesas superan con creces a la inversión extranjera directa." },
  
  // Grandes Volúmenes y Dependencia Moderada (<10% del PIB pero decenas de Billones)
  { id: "PAK", name: "Pakistán", dependencyPercent: 7.8, annualVolumeBillion: 29.0, mainSource: "Golfo / Reino Unido", coordinates: [69.3451, 30.3753], color: "#38BDF8", description: "Flujos inmensos críticos para la balanza de pagos." },
  { id: "BGD", name: "Bangladesh", dependencyPercent: 5.2, annualVolumeBillion: 21.5, mainSource: "Golfo Pérsico", coordinates: [90.3563, 23.6850], color: "#38BDF8", description: "Gran proveedor de mano de obra para infraestructuras en Medio Oriente." },
  { id: "EGY", name: "Egipto", dependencyPercent: 6.8, annualVolumeBillion: 28.3, mainSource: "Golfo Pérsico", coordinates: [30.8025, 26.8206], color: "#38BDF8", description: "Principal exportador de profesionales a las monarquías petroleras." },
  { id: "NGA", name: "Nigeria", dependencyPercent: 4.2, annualVolumeBillion: 20.1, mainSource: "EE.UU. / Reino Unido", coordinates: [8.6753, 9.0820], color: "#38BDF8", description: "Red vital ante la volatilidad de los ingresos del petróleo." },
  { id: "VNM", name: "Vietnam", dependencyPercent: 4.5, annualVolumeBillion: 19.0, mainSource: "EE.UU. / Japón", coordinates: [108.2772, 14.0583], color: "#38BDF8", description: "Diáspora resiliente aportando divisas consistentes." },
  { id: "UKR", name: "Ucrania", dependencyPercent: 9.8, annualVolumeBillion: 16.5, mainSource: "Polonia / UE", coordinates: [31.1656, 48.3794], color: "#38BDF8", description: "Exilio masivo bélico y migración laboral hacia Europa del Este." },
  { id: "MAR", name: "Marruecos", dependencyPercent: 8.2, annualVolumeBillion: 11.4, mainSource: "Francia / España", coordinates: [-7.0926, 31.7917], color: "#38BDF8", description: "Soporte clave de la economía y reservas de divisas." },
  { id: "COL", name: "Colombia", dependencyPercent: 2.5, annualVolumeBillion: 9.4, mainSource: "EE.UU. / España", coordinates: [-74.2973, 4.5709], color: "#38BDF8", description: "Creciente dependencia financiera de la emigración reciente." }
];

export const sankeyData = {
  nodes: [
    { name: "Estados Unidos" }, // 0
    { name: "Rusia" },          // 1
    { name: "Golfo Pérsico" },  // 2
    { name: "Unión Europea" },  // 3
    { name: "México" },         // 4
    { name: "India" },          // 5
    { name: "Filipinas" },      // 6
    { name: "C. América" },     // 7
    { name: "Asia Central" },   // 8
    { name: "Nepal/Bang." },    // 9
    { name: "Norte África" },   // 10
  ],
  links: [
    { source: 0, target: 4, value: 63.3 }, // US to Mexico
    { source: 0, target: 7, value: 37.2 }, // US to Central America (GTM, HND, SLV)
    { source: 0, target: 6, value: 15.0 }, // US to Philippines
    { source: 1, target: 8, value: 11.5 }, // Russia to Central Asia (TJK, KGZ)
    { source: 2, target: 5, value: 45.0 }, // Gulf to India
    { source: 2, target: 9, value: 25.5 }, // Gulf to Nepal/Bang
    { source: 2, target: 6, value: 12.0 }, // Gulf to Philippines
    { source: 3, target: 5, value: 20.0 }, // EU to India
    { source: 3, target: 10, value: 15.0 } // EU to North Africa
  ]
};

// Global total for 2024 (LMICs) approx 656 Billion
export const GLOBAL_ANNUAL_VOLUME = 656_000_000_000;
