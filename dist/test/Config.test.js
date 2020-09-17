"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
var Config_1 = require("../src/Config");
describe('Config Tests', function () {
    it('Should have a valid Arweave Object', function () {
        assert_1.equal(Config_1.arweave !== null, true);
    });
    it('Verify the contents of Solarweave Config', function () {
        assert_1.equal(Config_1.SolarweaveConfig.rpc_version, '2.0');
        assert_1.equal(Config_1.SolarweaveConfig.database, 'solarweave-devnet');
        assert_1.equal(Config_1.SolarweaveConfig.url, 'https://devnet.solana.com');
        assert_1.equal(Config_1.SolarweaveConfig.credentials, '.arweave.creds.json');
        assert_1.equal(Config_1.SolarweaveConfig.local, false);
        assert_1.equal(Config_1.SolarweaveConfig.localFile, 'solarweave.cache.json');
        assert_1.equal(Config_1.SolarweaveConfig.console, true);
        assert_1.equal(Config_1.SolarweaveConfig.compressed, true);
        assert_1.equal(Config_1.SolarweaveConfig.parallelize, 1);
        assert_1.equal(Config_1.SolarweaveConfig.benchmark, false);
        assert_1.equal(Config_1.SolarweaveConfig.verify, true);
    });
    it('Should be able to update the Solarweave Config', function () {
        Config_1.UpdateConfig('2.0', 'solarweave-devnet', 'https://devnet.solana.com', '.arweave.creds.json', false, 'solarweave.cache.json', true, true, 1, false, true);
    });
});
//# sourceMappingURL=Config.test.js.map