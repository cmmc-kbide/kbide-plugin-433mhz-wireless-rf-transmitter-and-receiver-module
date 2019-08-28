Blockly.Blocks['_433mhz_wireless_rf_transmitter'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TRANSMITTER / 433MHZ WIRELESS RF");
    this.appendDummyInput()
        .appendField("INTERRUPT PIN")
        .appendField(new Blockly.FieldTextInput("0"), "433MHZ_WIRELESS_RF_TRANSMITTER_INTERRUPT_PIN");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['_433mhz_wireless_rf_transmitter_send'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TRANSMITTER");
    this.appendValueInput("433MHZ_WIRELESS_RF_TRANSMITTER_SEND_MESSAGE")
        .setCheck(null)
        .appendField("SEND MESSAGE");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['_433mhz_wireless_rf_receiver'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("RECEIVER / 433MHZ WIRELESS RF");
    this.appendDummyInput()
        .appendField("INTERRUPT PIN")
        .appendField(new Blockly.FieldTextInput("0"), "433MHZ_WIRELESS_RF_RECEIVER_INTERRUPT_PIN");
    this.appendDummyInput()
        .appendField("RECEIVE SET TO")
        .appendField(new Blockly.FieldVariable("RF_RECEIVE_VALUE"), "RF_RECEIVE_VALUE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};