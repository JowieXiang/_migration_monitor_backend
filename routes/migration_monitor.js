const router = require('express').Router(),
    axios = require('axios'),
    parseXML = require('xml2js').parseString,
    url = "https://geodienste.hamburg.de/HH_WFS_Micado?SERVICE=WFS&VERSION=2.0.0&REQUEST=GetFeature&typename=mic:Zuzuege,mic:Zuwanderung,mic:Zuzuege_Auszuege_oerU"

router.get('/', (req, res) => {
    axios.get(url)
        .then(response => {
            parseXML(response.data, function (err, result) {
                res.json(result);
            });
        })
        .catch(error => {
            console.log(error);
        });
})

module.exports = router;