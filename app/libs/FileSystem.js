const rnfs = require('react-native-fs');

var shipmentsPath = rnfs.DocumentDirectoryPath + '/shipments.json';

const clearShipments = async () => {
    rnfs.writeFile(shipmentsPath, '[]', 'utf8')
        .then(success => console.log("Shipments cleared"))
        .catch(err => console.log(err))
    return true
}

module.exports = {
    clearShipments,
    shipmentsPath
}
