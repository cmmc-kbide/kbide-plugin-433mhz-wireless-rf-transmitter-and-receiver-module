module.exports = [
    {
        name: "433Mhz Wireless RF Transmitter and Receiver Module",
        blocks: [
            "_433mhz_wireless_rf_transmitter",
            {
              xml: `<block type="_433mhz_wireless_rf_transmitter_send">
                            <value name="433MHZ_WIRELESS_RF_TRANSMITTER_SEND_MESSAGE">
                                <shadow type="math_number">
                                    <field name="NUM"></field>
                                </shadow>
                            </value>
                        </block>`
            },
            "_433mhz_wireless_rf_receiver"
        ]
    }
];