
const data = {
  "dates":{ 
    "primero": [
     {"date":"2020-01-01","localName":"New Year's Day","name":"New Year's Day","countryCode":"US","fixed":false,"global":true,
"counties":null,"launchYear":null,"type":"Public"},

{"date":"2020-01-20","localName":"Martin Luther King, Jr. Day","name":"Martin Luther King, Jr. Day","countryCode":"US","fixed":false,"global":true,
"counties":null,"launchYear":null,"type":"Public"},

{"date":"2020-02-17","localName":"Presidents Day","name":"Washington's Birthday","countryCode":"EU","fixed":false,"global":true,
"counties":null,"launchYear":null,"type":"Public"},

{"date":"2020-04-10","localName":"Good Friday","name":"Good Friday","countryCode":"US","fixed":false,"global":false,
"counties":["US-CT","US-DE","US-HI","US-IN","US-KY","US-LA","US-NC","US-ND","US-NJ","US-TN"],"launchYear":null,"type":"Public"}],

"segundo": [
    {"date":"2020-04-10","localName":"Good Friday","name":"Good Friday","countryCode":"US","fixed":false,"global":false,
"counties":["US-TX"],"launchYear":null,"type":"Optional"},

{"date":"2020-05-25","localName":"Memorial Day","name":"Memorial Day","countryCode":"US","fixed":false,"global":true,
"counties":null,"launchYear":null,"type":"Optional"},

{"date":"2020-07-03","localName":"Independence Day","name":"Independence Day","countryCode":"EU","fixed":false,"global":true,
"counties":null,"launchYear":null,"type":"Public"},

{"date":"2020-09-07","localName":"Labor Day","name":"Labour Day","countryCode":"US","fixed":false,"global":true,
"counties":null,"launchYear":null,"type":"Public"}],

"tercero": [
    {"date":"2020-10-12","localName":"Columbus Day","name":"Columbus Day","countryCode":"US","fixed":false,"global":false,
"counties":["US-AL","US-AZ","US-CO","US-CT","US-GA","US-ID","US-IL","US-IN","US-IA","US-KS","US-KY","US-LA","US-ME","US-MD","US-MA","US-MS","US-MO","US-MT","US-NE","US-NH","US-NJ","US-NM","US-NY","US-NC","US-OH","US-OK","US-PA","US-RI","US-SC","US-TN","US-UT","US-VA","US-WV"],"launchYear":null,"type":"Public"},

{"date":"2020-11-11","localName":"Veterans Day","name":"Veterans Day","countryCode":"EU","fixed":false,"global":true,
"counties":null,"launchYear":null,"type":"Public"},

{"date":"2020-11-26","localName":"Thanksgiving Day","name":"Thanksgiving Day","countryCode":"US","fixed":false,"global":true,
"counties":null,"launchYear":1863,"type":"Public"},

{"date":"2020-12-25","localName":"Christmas Day","name":"Christmas Day","countryCode":"EU","fixed":false,"global":true,
"counties":null,"launchYear":null,"type":"Optional"}]
    }
}

const date = data.dates.primero.concat(data.dates.segundo, data.dates.tercero);
//Muestrame cuantos date hay

function totalDate()
{
    let total = (data.dates.primero.length + data.dates.segundo.length + data.dates.tercero.length);
   
    console.log("Dates totales: " + total);
}
totalDate();

//Muestrame cuantos dates hay por cuatrimestre

function totalCuatrimestreDates()
{
    let primero = (data.dates.primero.length);
    let segundo = (data.dates.segundo.length);
    let tercero = (data.dates.tercero.length);
    console.log("Dates totales primer cuatrimestre: " + primero);
    console.log("Dates totales segundo cuatrimestre: " + segundo);
    console.log("Dates totales tercer cuatrimestre: " + tercero);
}
totalCuatrimestreDates();

//Muestrame cuantos countrycodes de EU existen en total y por cuatrimestre

function totalEuCodes()
{
    let total = 0;
    for(let i = 0; i < date.length; i++)
    {
        if(date[i].countryCode === "EU")
        total++;
    }
    console.log("CountryCodes de EU: "+ total);
}
totalEuCodes();

function cuatriEuCodes()
{
    let primero = 0;
    for(let i = 0; i < data.dates.primero.length; i++)
    {
        if(data.dates.primero[i].countryCode === "EU")
        primero++;
    }
    console.log("CountryCodes primer cuatrimestre de EU: " + primero);

    let segundo = 0;
    for(let i = 0; i < data.dates.segundo.length; i++)
    {
        if(data.dates.segundo[i].countryCode === "EU")
        segundo++;
    }
    console.log("CountryCodes segundo cuatrimestre de EU: " + segundo);

    let tercero = 0;
    for(let i = 0; i < data.dates.segundo.length; i++)
    {
        if(data.dates.tercero[i].countryCode === "EU")
        tercero++;
    }
    console.log("CountryCodes tercer cuatrimestre de EU: " + tercero);
}
cuatriEuCodes();

//Mostrar nombre de dates globlaes que sean verdad y fixed sea false

function globalAndFixedDates()
{
    
    for(let i = 0; i < date.length; i++)
    {
        if(date[i].global === true && date[i].fixed === false)
        console.log("Nombre del dia: " + date[i].name);
    }

}
globalAndFixedDates();

//Mostrar posibles countryCodes sin repetir
function posibleCodes(){

    const countryCodes = [];
    for(let i = 0; i< date.length;i++)
    {
        const codes = date[i].countryCode;
        if(!countryCodes.includes(date[i].countryCode))
        {
            countryCodes.push(codes);
        }
    }
    console.log("Posibles countryCodes unicos: " + countryCodes);
}
posibleCodes();   

//Mostrar porcentaje de type public en general y por cuatrimestre

function typePublicPercentaje()
{
    let total = 0;
    for (let i = 0; i < date.length; i++)
    {
        if(date[i].type === "Public")
        total++;
    }
    // console.log("Type Public en total: " + total);
    var porcentaje = (total/date.length)*100;
    // console.log("Porcentaje de type public: " + porcentaje);
    var porcentajeTotal = Math.round(porcentaje);
    console.log("Porcentaje total: " + porcentajeTotal);
}
typePublicPercentaje();

function typePublicPercentajePorCuatrimestre()
{
    let primero = 0;
    for (let i = 0; i < data.dates.primero.length; i++)
    {
        if(data.dates.primero[i].type === "Public")
        primero++;
    }
    // console.log("Type Public en total: " + total);
    var porcentaje = (primero/data.dates.primero.length)*100;
    // console.log("Porcentaje de type public: " + porcentaje);
    var porcentajeTotal = Math.round(porcentaje);
    console.log("Porcentaje primero: " + porcentajeTotal);

    let segundo = 0;
    for (let i = 0; i < data.dates.segundo.length; i++)
    {
        if(data.dates.segundo[i].type === "Public")
        segundo++;
    }
    // console.log("Type Public en total: " + total);
    var porcentaje = (segundo/data.dates.segundo.length)*100;
    // console.log("Porcentaje de type public: " + porcentaje);
    var porcentajeTotal = Math.round(porcentaje);
    console.log("Porcentaje segundo: " + porcentajeTotal)

    let tercero = 0;
    for (let i = 0; i < data.dates.tercero.length; i++)
    {
        if(data.dates.tercero[i].type === "Public")
        tercero++;
    }
    // console.log("Type Public en total: " + total);
    var porcentaje = (tercero/data.dates.tercero.length)*100;
    // console.log("Porcentaje de type public: " + porcentaje);
    var porcentajeTotal = Math.round(porcentaje);
    console.log("Porcentaje segundo: " + porcentajeTotal)
}
typePublicPercentajePorCuatrimestre();

//Mostrar datos de localName = Good Friday

function goodFridayData()
{
    for(let i = 0; i< date.length; i++)
    {
        if(date[i].localName === "Good Friday")
        console.log("Datos de Good Friday: " + date[i]);
    }
}
goodFridayData();